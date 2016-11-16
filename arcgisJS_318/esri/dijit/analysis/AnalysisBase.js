// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/AnalysisBase","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has dojo/json dojo/Deferred dojo/promise/all dojo/when dojo/data/ItemFileWriteStore dojo/string dojo/Evented dojo/_base/kernel dojo/Stateful ../../kernel ../../lang ../../request ../../tasks/Geoprocessor dojo/i18n!../../nls/jsapi ./utils ../../IdentityManager".split(" "),function(s,m,c,l,h,w,A,n,t,B,C,u,x,y,z,f,e,k,v,p,q){m=m([z,x],{declaredClass:"esri.dijit.analysis.AnalysisBase",
isOutputLayerItemUpdated:!1,analysisGpServer:null,toolName:null,portalUrl:null,jobParams:null,itemParams:null,gp:null,resultParameter:null,signInPromise:null,getResultLyrInfos:!1,checkCreditLimits:!1,_jobInfo:null,_popupInfo:null,_toolServiceUrl:null,_counter:null,_analysisType:"feature",doRefreshItem:!0,constructor:function(a){this.isOutputLayerItemUpdated=!1;this._rids=[];this._counter=0;this._popupInfo=[];a.analysisGpServer?this._signIn(a.analysisGpServer):a.portalUrl&&(this.portalUrl=a.portalUrl,
this._signIn(a.portalUrl,!0));this.i18n={};c.mixin(this.i18n,p.common);c.mixin(this.i18n,p.analysisTools);c.mixin(this.i18n,p.analysisMsgCodes)},execute:function(a){this.jobParams=a.jobParams;this.itemParams=this.jobParams.OutputName?a.itemParams:null;this._analysisType=a.analysisType||"feature";e.isDefined(a.isSpatioTemporalDataStore)&&(this._isSpatioTemporalDataStore=a.isSpatioTemporalDataStore);this.signInPromise.then(c.hitch(this,this._checkUser))},_checkUser:function(){var a;if(a=f.id.findCredential(this.portalUrl).userId)a=
this.portalUrl+"/sharing/rest/community/users/"+a,k({url:a,content:{f:"json"}}).then(c.hitch(this,this._handleUserProfileResponse),c.hitch(this,function(a){this.emit("job-fail",{message:a.message+(a.details?a.details.toString():""),jobParams:this.jobParams})}))},_handleUserProfileResponse:function(a){if(!e.isDefined(a)||!e.isDefined(a.orgId))this.emit("job-fail",{message:this.i18n.orgUsrMsg,jobParams:this.jobParams});else if(-1===l.indexOf(["account_admin","account_publisher","org_admin","org_publisher"],
a.role))this.emit("job-fail",{message:this.i18n.pubRoleMsg,messageCode:"AB_0001",jobParams:this.jobParams});else if(e.isDefined(a.availableCredits)&&this.get("checkCreditLimits")){var b,d={},g;for(b in this.jobParams)this.jobParams.hasOwnProperty(b)&&("object"===typeof this.jobParams[b]?d[b]=h.toJson(this.jobParams[b]):-1!==l.indexOf(["measurementtype"],b.toLowerCase())&&"StraightLine"!==this.jobParams[b]?(g=h.fromJson(this.jobParams[b]),d[b]=g?g.name.replace(/[\s~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g,
""):"DrivingTime"):d[b]=this.jobParams[b]);this.getCreditsEstimate(this.toolName,d).then(c.hitch(this,function(b){(b=b&&b.cost||b.maximumCost)&&a.availableCredits>b?e.isDefined(this.itemParams)?this._checkServiceName(a.orgId):(this._submitGpJob(),this.emit("start",this.jobParams)):this.emit("job-fail",{message:this.i18n.insufficientCreditsMsg,messageCode:"AB_0001",jobParams:this.jobParams})}))}else e.isDefined(this.itemParams)?this._checkServiceName(a.orgId):(this._submitGpJob(),this.emit("start",
this.jobParams))},_checkServiceName:function(a){var b;f.id.findCredential(this.portalUrl);a=this.portalUrl+"/sharing/rest/portals/"+a+"/isServiceNameAvailable";b=h.fromJson(this.jobParams.OutputName);this.isSingleTenant&&(e.isDefined(b.serviceProperties)&&e.isDefined(b.serviceProperties.name))&&(b.serviceProperties.name=b.serviceProperties.name.replace(/[\s~`!#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?\.]/g,"_"),this.jobParams.OutputName=h.toJson(b));k({url:a,content:{name:b.serviceProperties.name,type:"raster"===
this._analysisType?"Image Service":"Feature Service",f:"json"}}).then(c.hitch(this,function(a){a.available?("raster"===this._analysisType?this._createImageService():this._createService(),this.emit("start",this.jobParams)):this.emit("job-fail",{message:this.i18n.servNameExists,type:"warning",messageCode:"AB_0002",jobParams:this.jobParams})}),c.hitch(this,function(a){this.emit("job-fail",{message:a.message+(a.details?a.details.toString():""),jobParams:this.jobParams})}))},_createService:function(){var a,
b,d;a=f.id.findCredential(this.portalUrl).userId;b=h.fromJson(this.jobParams.OutputName);a&&(d=this.itemParams.folder,a=this.portalUrl+"/sharing/rest/content/users/"+a+(d&&"/"!==d?"/"+d:"")+"/createService",b={createParameters:h.toJson({currentVersion:10.2,serviceDescription:"",hasVersionedData:!1,supportsDisconnectedEditing:!1,hasStaticData:!0,maxRecordCount:2E3,supportedQueryFormats:"JSON",capabilities:"Query",description:"",copyrightText:"",allowGeometryUpdates:!1,syncEnabled:!1,editorTrackingInfo:{enableEditorTracking:!1,
enableOwnershipAccessControl:!1,allowOthersToUpdate:!0,allowOthersToDelete:!0},xssPreventionInfo:{xssPreventionEnabled:!0,xssPreventionRule:"InputOnly",xssInputRule:"rejectInvalid"},tables:[],name:b.serviceProperties.name}),outputType:"featureService",f:"json"},this._isSpatioTemporalDataStore&&(d=h.fromJson(b.createParameters),d.options={dataSourceType:"spatiotemporal"},b.createParameters=h.toJson(d)),k({url:a,content:b},{usePost:!0}).then(c.hitch(this,this._submitGpJob),c.hitch(this,this._handleCreateServiceError)))},
_createImageService:function(){var a,b,d;a=f.id.findCredential(this.portalUrl).userId;b=h.fromJson(this.jobParams.OutputName);a&&(d=this.itemParams.folder,a=this.portalUrl+"/sharing/rest/content/users/"+a+(d&&"/"!==d?"/"+d:"")+"/createService",b={createParameters:h.toJson({name:b.serviceProperties.name,description:"",capabilities:"Image",properties:{path:"@",description:"",copyright:""}}),outputType:"imageService",f:"json"},k({url:a,content:b},{usePost:!0}).then(c.hitch(this,this._submitGpJob),c.hitch(this,
this._handleCreateServiceError)))},_handleCreateServiceError:function(a){this.emit("job-fail",{message:a.message+(a.details?a.details.toString():""),jobParams:this.jobParams})},_getSelf:function(a){return k({url:a+"/sharing/rest/portals/self",content:{culture:y.locale,f:"json"},callbackParamName:"callback",timeout:0},{})},_submitGpJob:function(a){var b;this.itemParams&&(this.currentGpItemId=a.itemId,b=h.fromJson(this.jobParams.OutputName),b.serviceProperties&&(b.serviceProperties.serviceUrl=a.serviceurl),
b.itemProperties={itemId:a.itemId},this.itemParams.folder&&(b.itemProperties.folderId=this.itemParams.folder),this.jobParams.OutputName=h.toJson(b),"raster"===this._analysisType&&(this.jobParams.outputRaster=h.toJson(b.itemProperties)));this.analysisGpServer?((!this._toolServiceUrl||!this.gp)&&this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName),this.gp.setUpdateDelay(3E3),this.gp.submitJob(this.jobParams,c.hitch(this,this._gpJobComplete),c.hitch(this,this._gpJobStatus),c.hitch(this,
this._gpJobFailed)),this.emit("job-submit",this.jobParams)):this._getSelf(this.portalUrl).then(c.hitch(this,function(a){this.analysisGpServer=a.helperServices.analysis&&a.helperServices.analysis.url?a.helperServices.analysis.url:null;this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName);this.gp.setUpdateDelay(3E3);this.gp.submitJob(this.jobParams,c.hitch(this,this._gpJobComplete),c.hitch(this,this._gpJobStatus),c.hitch(this,this._gpJobFailed));this.emit("job-submit",this.jobParams)}))},
_updateItem:function(a){var b,d,g;if(b=f.id.findCredential(this.portalUrl).userId)return d=this.itemParams.folder,b=this.portalUrl+"/sharing/rest/content/users/"+b+(d&&"/"!==d?"/"+d:"")+"/items/"+this.currentGpItemId+"/update",a&&(g=a.item.properties),e.isDefined(g)||(g={}),e.isDefined(g.jobUrl)||(g.jobUrl=this._toolServiceUrl+"/jobs/"+this._jobInfo.jobId,g.jobType="GPServer",g.jobId=this._jobInfo.jobId,g.jobStatus="processing",this.itemParams.properties=g),a=c.mixin({f:"json"},this.itemParams),a.properties&&
(a.properties=h.toJson(a.properties)),a=k({url:b,content:a},{usePost:!0}),a.then(c.hitch(this,this._handleItemUpdate),c.hitch(this,this._handleUpdateItemError)),a},_handleItemUpdate:function(a){this.isOutputLayerItemUpdated=!0},_handleItemDataUpdate:function(a){},_handleUpdateItemError:function(a){this.isOutputLayerItemUpdated=!0;this.emit("job-fail",{message:a.message+(a.details?a.details.toString():""),jobParams:this.jobParams})},_handleErrorResponse:function(a){this.emit("job-fail",a)},_refreshItem:function(){var a,
b;if(a=f.id.findCredential(this.portalUrl).userId)return b=this.itemParams.folder,a=this.portalUrl+"/sharing/rest/content/users/"+a+(b&&"/"!==b?"/"+b:"")+"/items/"+this.currentGpItemId+"/refresh",k({url:a,content:{f:"json"}},{usePost:!0})},_handleItemRefresh:function(a){},_readItem:function(){var a,b;if(a=f.id.findCredential(this.portalUrl).userId)return b=this.itemParams.folder,a=this.portalUrl+"/sharing/rest/content/users/"+a+(b&&"/"!==b?"/"+b:"")+"/items/"+this.currentGpItemId,a=k({url:a,content:{f:"json"}}),
a.then(c.hitch(this,this._updateItem))},_gpJobStatus:function(a){a.jobParams=this.jobParams;a.resultParameter=this.resultParameter;a.returnProcessInfo=this.jobParams.returnProcessInfo;a.getResultLyrInfos=this.getResultLyrInfos;a.currentGpItemId=this.currentGpItemId;a.itemParams=this.itemParams;"esriJobFailed"===a.jobStatus||"esriJobSucceeded"===a.jobStatus?(a.messages&&(a.message=this._buildErrorMsg(a)),this._checkTimer&&(clearInterval(this._checkTimer),this._checkTimer=null,this._gpJobComplete(a)),
"esriJobFailed"===a.jobStatus&&this._deleteItem(!1)):"esriJobCancelled"===a.jobStatus&&(this.itemParams?this._deleteItem(!0):this.emit("job-cancel",a));this.emit("job-status",a);this._jobInfo=a;this.itemParams&&!this.isOutputLayerItemUpdated&&this._readItem()},_updateRefreshItem:function(a){var b=[],d=a[0];this.doRefreshItem&&b.push(this._refreshItem());b.push(this._readItem());t(b).then(c.hitch(this,function(a){d.outputLayerName=h.fromJson(this.jobParams.OutputName).serviceProperties.name;d.value.itemId=
this.currentGpItemId;d.analysisInfo={toolName:this.toolName,jobParams:this.jobParams};this.emit("job-result",d)}),c.hitch(this,this._handleDeleteItemError))},_gpJobComplete:function(a){var b;"esriJobSucceeded"===a.jobStatus&&(a.jobParams=this.jobParams,this.emit("job-success",a),t(this._getGpResultData(a)).then(c.hitch(this,function(d){d=l.filter(d,function(a){var b=!0;e.isDefined(a.value.empty)?b=a.value.empty:e.isDefined(a.value.url)||e.isDefined(a.value.itemId)?b=!1:e.isDefined(a.value.featureSet)&&
(b=!1);if(!b)return a});0===d.length?(this.currentGpItemId&&this._deleteItem(!1),this.emit("job-fail",{message:this.i18n.emptyResultInfoMsg,type:"warning",jobParams:this.jobParams})):(e.isDefined(this.itemParams)&&(this.itemParams.properties&&this.itemParams.properties.jobStatus&&"processing"===this.itemParams.properties.jobStatus)&&(this.itemParams.properties.jobStatus="completed"),l.forEach(d,function(a){if(a.value.featureSet&&!a.value.url)a.value.featureSet.spatialReference=a.value.layerDefinition.spatialReference;
else if(a.value.url&&-1!==a.value.url.indexOf("/FeatureServer/")&&a.value.layerInfo&&a.value.layerInfo.popupInfo){var b=a.value.url.match(/[0-9]+$/g)[0];this._popupInfo[b]=a.value.layerInfo.popupInfo}},this),b=d[0],this.jobParams.returnProcessInfo?this.gp.getResultData(a.jobId,"ProcessInfo").then(c.hitch(this,function(a){var c=[];l.forEach(a.value,function(a){c.push(h.fromJson(a))},this);this.currentGpItemId?(this.itemParams.description=q.buildReport(c),this._updateRefreshItem(d)):(b.analysisReport=
q.buildReport(c),this.emit("job-result",b))})):this.currentGpItemId?this._updateRefreshItem(d):this.emit("job-result",b))})))},_gpJobFailed:function(a){c.clone(a).jobParams=this.jobParams;this._checkTimer&&(clearInterval(this._checkTimer),this._checkTimer=null);a.messages&&(a.message=this._buildErrorMsg(a));this.emit("job-fail",a)},_getGpResultData:function(a){var b=[],d=[];"string"===typeof this.resultParameter?d.push(this.resultParameter):this.resultParameter instanceof Array&&(d=this.resultParameter);
l.forEach(d,function(d,c){b.push(this.gp.getResultData(a.jobId,d))},this);return b},cancel:function(a){this.gp.cancelJob(a.jobId).then(c.hitch(this,function(a){"esriJobCancelled"===a.jobStatus&&(this.itemParams?this._deleteItem(!0):this.emit("job-cancel",a))}),function(a){})},checkJobStatus:function(a){this.signInPromise.then(c.hitch(this,function(){this.gp.setUpdateDelay(3E3);this._checkTimer=setInterval(c.hitch(this,this._checkStatus,a,c.hitch(this,this._gpJobStatus),c.hitch(this,this._gpJobFailed)),
3E3)}))},_checkStatus:function(a,b,d){this.gp.checkJobStatus(a,b,d)},_deleteItem:function(a){var b,d;if((b=f.id.findCredential(this.portalUrl).userId)&&this.itemParams)d=e.isDefined(this.itemParams.folder)?this.itemParams.folder:"",b=this.portalUrl+"/sharing/rest/content/users/"+b+(d&&"/"!==d?"/"+d:"")+"/items/"+this.currentGpItemId+"/delete",k({url:b,content:{f:"json"}},{usePost:!0}).then(c.hitch(this,this._handleItemDelete,a),c.hitch(this,this._handleDeleteItemError))},_handleItemDelete:function(a,
b){a&&this.emit("job-cancel",b)},_handleDeleteItemError:function(a){this.emit("job-fail",{message:a.message+(a.details?a.details.toString():""),jobParams:this.jobParams})},_initFolderStore:function(a,b){this._fportal=this.portalSelf?new a.Portal({url:this.portalUrl,self:this.portalSelf}):new a.Portal(this.portalUrl);this._fportal.signIn().then(c.hitch(this,function(a){this.portalUser=a;this.portalUser.getFolders().then(c.hitch(this,function(a){a=q.createFolderStore(a,this.portalUser.username);b.resolve(a)}))}))},
getFolderStore:function(){var a=new n,b,d,g,e;this.folderStore?a.resolve(this.folderStore):this.signInPromise.then(c.hitch(this,function(c){b=["../../arcgis/Portal"];d=this._counter++;g=this;this._rids&&this._rids.push(d);s(b,function(b){e=g._rids?l.indexOf(g._rids,d):-1;-1!==e&&(g._rids.splice(e,1),g._initFolderStore(b,a))})}));return a},_checkToolUrl:function(){var a=new n;this.analysisGpServer?((!this._toolServiceUrl||!this.gp)&&this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName),
a.resolve({success:!0})):this._getSelf(this.portalUrl).then(c.hitch(this,function(b){(this.analysisGpServer=b.helperServices.analysis&&b.helperServices.analysis.url?b.helperServices.analysis.url:null)&&this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName);a.resolve({success:!0})}));return a},getCreditsEstimate:function(a,b){var d,g,e,h,f;g=new n;this._checkToolUrl().then(c.hitch(this,function(l){this._toolServiceUrl?f=this._toolServiceUrl:(h=this.portalUrl&&-1!==this.portalUrl.indexOf("dev")?
"dev":this.portalUrl&&-1!==this.portalUrl.indexOf("qa")?"qa":"",f="http://analysis"+h+".arcgis.com/arcgis/rest/services/tasks/GPServer/"+this.toolName);d=f.replace("/"+a,"/exts/Estimate/"+a);e=c.mixin({f:"json"},b);k({url:d,content:e},{usePost:!0}).then(function(a){g.resolve(a)},function(a){g.resolve(a)})}));return g},_signIn:function(a,b){var d,g,h,r,m;this.signInPromise=new n;b?(d=["../../arcgis/Portal"],g=this._counter++,h=this,this._rids&&this._rids.push(g),s(d,c.hitch(this,function(b){r=h._rids?
l.indexOf(h._rids,g):-1;-1!==r&&(h._rids.splice(r,1),this._portal=this.portalSelf?new b.Portal({url:a,self:this.portalSelf}):new b.Portal(a),this._portal.signIn().then(c.hitch(this,function(a){this.portalUser=a;this._portal.helperServices&&this._portal.helperServices.analysis&&this._portal.helperServices.analysis.url?(this.analysisGpServer=this._portal.helperServices.analysis.url,this.showGeoAnalyticsParams&&this._portal.helperServices.geoanalytics&&(this.analysisGpServer=this._portal.helperServices.geoanalytics.url),
k({url:this.analysisGpServer,content:{f:"json"},callbackParamName:"callback"}).then(c.hitch(this,function(a){m=f.id.findCredential(this.analysisGpServer);this.signInPromise.resolve(m)}),c.hitch(this,function(a){this.signInPromise.reject(a)}))):this.signInPromise.resolve(a)}),c.hitch(this,this._handleSignInError)))}))):k({url:a,content:{f:"json"},callbackParamName:"callback"}).then(c.hitch(this,function(b){var d;b=f.id.findCredential(a);e.isDefined(b)?(d=f.id.findServerInfo(this._toolServiceUrl),e.isDefined(d)&&
e.isDefined(d.owningSystemUrl)&&(this.portalUrl=d.owningSystemUrl),this.signInPromise.resolve(b)):f.id.getCredential(a).then(c.hitch(this,function(b){b=f.id.findCredential(a);d=f.id.findServerInfo(this._toolServiceUrl);e.isDefined(d)&&e.isDefined(d.owningSystemUrl)&&(this.portalUrl=d.owningSystemUrl);this.signInPromise.resolve(b)}),c.hitch(this,this._handleSignInError))}),c.hitch(this,this._handleSignInError));return this.signInPromise},_handleSignInError:function(a){this.emit("job-fail",{message:this.i18n.analysisSignInErrorMsg,
messageCode:"AB_0003"});this.signInPromise.reject(a)},_buildErrorMsg:function(a){var b="",d=[],c,f,d=l.filter(a.messages,function(a){if(("esriJobMessageTypeError"===a.type||"esriJobMessageTypeWarning"===a.type)&&-1!==a.description.indexOf("messageCode"))return a.description},this);0<d.length&&l.forEach(d,function(d){try{c=h.fromJson(d.description)}catch(k){c=d.description}f="";"esriJobMessageTypeWarning"===d.type&&(a.type="warning");c.messageCode?(f=e.isDefined(this.i18n[c.messageCode])?this.i18n[c.messageCode]:
c.message,f=e.isDefined(c.params)?u.substitute(f,c.params):f,b+=f+"\x26nbsp;"):c.error&&c.error.messageCode?(f=e.isDefined(this.i18n[c.error.messageCode])?this.i18n[c.error.messageCode]:c.error.message,f=e.isDefined(c.error.params)?u.substitute(f,c.error.params):f,b+=f+"\x26nbsp;"):b+=c+"\x26nbsp;"},this);return b},_toolServiceUrlSetter:function(a){this._toolServiceUrl=a;this.gp=new v(a)},_setToolServiceUrlAttr:function(a){this._toolServiceUrl=a;this.gp=new v(a)},checkCreditLimitsAttr:function(a){this.checkCreditLimits=
a}});w("extend-esri")&&c.setObject("dijit.analysis.AnalysisBase",m,f);return m});