// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/layers/ArcGISImageServiceVectorLayer","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/json dojo/sniff ../kernel ../lang ./GraphicsLayer ./ImageServiceLayerMixin ../renderers/VectorFieldRenderer ../geometry/Point ../geometry/Extent ../graphic dojox/gfx".split(" "),function(k,m,y,r,p,s,l,t,u,q,v,w,x,n){k=k([t,u],{declaredClass:"esri.layers.ArcGISImageServiceVectorLayer",constructor:function(a,c){this.symbolTileSize=c&&c.symbolTileSize?c.symbolTileSize:50;this._maxMag=
this._minMag=null;this.setVectorRendererStyle(c&&c.rendererStyle?c.rendererStyle:q.STYLE_SINGLE_ARROW);var b=m.clone(this._params);delete b.imageServiceParameters;delete b.pixelFilter;delete b.rendererStyle;delete b.symbolTileSize;this._initialize(a,c);this.geometryType="esriGeometryPoint";this.symbolTileSizeUnits="Pixels";m.mixin(this._params,b)},getField:function(a){return this._getField(a,!0)},setVectorRendererStyle:function(a){this.rendererStyle=a;this._updateVectorFieldRenderer();this.useDefaultRenderer=
!0},setRenderer:function(){this.useDefaultRenderer=!1;this.inherited(arguments)},getFlowRepresentation:function(){return this._vectorFlowRepresentation},onRendererChange:function(){},onResume:function(){this.inherited(arguments);this._toggleTime()},onSuspend:function(){this.inherited(arguments);this._toggleTime()},_refresh:function(a){if(10>p("ie"))this.onError(Error("Unable to refresh. This layer is not supported in the current browser."));else if(!1===this.hasMultidimensions)this.onError(Error("Unable to refresh. This layer does not have multi-dimensional info."));
else{this.setImageFormat("LERC",!0);a=this.fullExtent.xmin;var c=this.fullExtent.ymax,b=m.clone(this._map.extent),g=this._map.width*(1/this.symbolTileSize),g=g?Math.ceil(g):50,d=this._map.height*(1/this.symbolTileSize),d=d?Math.ceil(d):Math.ceil(g*((b.ymax-b.ymin)/(b.xmax-b.xmin))),e=(b.xmax-b.xmin)/g,h=(b.ymax-b.ymin)/d;b.xmin=a+Math.floor((b.xmin-a)/e)*e;b.xmax=a+Math.ceil((b.xmax-a)/e)*e;b.ymin=c+Math.floor((b.ymin-c)/h)*h;b.ymax=c+Math.ceil((b.ymax-c)/h)*h;this._requestData(b,g,d)}},_drawPixelData:function(){this.clear();
if(this.pixelData){var a=this.pixelData.pixelBlock,c=this.pixelData.extent,b=this.pixelData.locations,g=l.isDefined(a.mask)&&0<a.mask.length;if(a&&c&&b){if(this.useDefaultRenderer&&this.renderer&&(!l.isDefined(this._minMag)||!l.isDefined(this._maxMag))){var d=this._getServiceMinMaxStats();d?(this._minMag=d.min,this._maxMag=d.max):(this._minMag=a.statistics[0].minValue,this._maxMag=a.statistics[0].maxValue);var d={type:"sizeInfo",minSize:n.px2pt(0.2*this.symbolTileSize),maxSize:n.px2pt(0.8*this.symbolTileSize),
minDataValue:this._minMag,maxDataValue:this._maxMag},e=[];e.push(d);e.push({type:"colorInfo"});this.renderer.setVisualVariables(e)}for(var h=e=d=0,f,k=c.spatialReference?c.spatialReference._getInfo():null,d=0;d<a.height;d++)for(e=0;e<a.width;e++,h++)if(f=b[h],(!g||a.mask[h])&&f&&2===f.length){f=new v(f[0],f[1],c.spatialReference);k&&(f.x=w.prototype._normalizeX(f.x,k).x);var m={Magnitude:a.pixels[0][h],Direction:a.pixels[1][h],Location:r.toJson(f.toJson())};f=new x(f,null,m);this.add(f)}}}},_getServiceMinMaxStats:function(){if(!l.isDefined(this.minValues)||
!l.isDefined(this.maxValues)||2>this.minValues.length||2>this.maxValues.length)return null;var a=this.minValues[0],c=this.maxValues[0],b=this.minValues[1],g=this.maxValues[1];if(this.pixelFilter&&a&&c&&b&&g){var d=[];d.push([a,c]);d.push([b,g]);b=this._createPixelData(d);this.pixelFilter(b);b&&(b.pixelBlock&&b.pixelBlock.pixels&&0<b.pixelBlock.pixels.length)&&(a=b.pixelBlock.pixels[0][0],c=b.pixelBlock.pixels[0][1])}return a&&c?{min:a,max:c}:null},_updateVectorFieldRenderer:function(){var a={type:"sizeInfo",
minSize:n.px2pt(0.2*this.symbolTileSize),maxSize:n.px2pt(0.8*this.symbolTileSize),minDataValue:this._minMag,maxDataValue:this._maxMag},c=[];c.push(a);a=new q({style:this.rendererStyle,visualVariables:c,flowRepresentation:this._vectorFlowRepresentation});this.setRenderer(a)},_getField:function(a,c){if(l.isDefined(a))return c&&(a=a.toLowerCase()),"magnitude"!==a&&"direction"!==a?null:{name:a,alias:a,domain:null,editable:!1,length:50,type:"esriFieldTypeDouble"}},_requestDataErrorHandler:function(a){"CancelError"!==
a.name&&(this.clear(),this.onError(a))},_setFlowRepresentation:function(a){a&&(this.renderer&&l.isDefined(a.FlowDirection))&&(this._vectorFlowRepresentation="oceanographic"===a.FlowDirection.toLowerCase()?this.renderer.FLOW_TO:this.renderer.FLOW_FROM);this.renderer&&(this.renderer.flowRepresentation=this._vectorFlowRepresentation)}});p("extend-esri")&&m.setObject("layers.ArcGISImageServiceVectorLayer",k,s);return k});