// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/DataBrowserBase","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/when dojox/mvc/sync ../_Wizard ./ShoppingCart ./autoTooltip ../AnimationHelper dojo/i18n!../../../nls/jsapi".split(" "),function(e,c,h,f,k,g,l,m,n,p,d){d=d.geoenrichment.dijit;e=e(l,{title:d.DataBrowser.title,okButton:d.WizardButtons.apply,backButton:d.WizardButtons.back,pageBackButton:d.WizardButtons.back,cancelButton:d.WizardButtons.cancel,countryID:null,hierarchyID:null,
allowHierarchies:!1,countryBox:!0,selection:null,variables:null,selectionLimit:-1,variableQuery:null,favorites:null,variableInfo:!0,shoppingCart:!0,_contentFactory:null,_manager:null,_titleNode:null,_breadcrumb:null,_shoppingCart:null,_initialStartup:function(){this.inherited(arguments);this._manager=this._contentFactory.createManager(this);0<this._manager.selectionLimit&&(this._manager.onLimit=c.hitch(this,this._onLimit),1==this._manager.selectionLimit&&this._manager.watch("selection",c.hitch(this,
this._onOK)));g(this,"variableQuery",this._manager,"variableQuery");this._manager.multipleSelectIsAllowed()&&this._manager.watch("selection",c.hitch(this,this._updateSelectionFromManager));this._manager.allowShoppingCart&&(this._shoppingCart="function"==typeof this.shoppingCart?this.shoppingCart(this.variables):"object"==typeof this.shoppingCart&&this.shoppingCart.placeAt?this.shoppingCart:new m({variables:this.variables}),"object"!=typeof this.shoppingCart&&this.own(this._shoppingCart),g(this._manager,
"selection",this._shoppingCart,"selection"));this._breadcrumb=this._contentFactory.createBreadcrumb({onCategoriesClick:c.hitch(this,this._loadCategoriesPage),onDCsClick:c.hitch(this,this._loadCollectionsPage)});this._breadcrumb.domNode.style.display="none";this.own(this._breadcrumb);this._manager.flyAnim=this._breadcrumb.flyAnim=new p(this.domNode);h.add(this.domNode,"DataBrowser");this._shoppingCart&&this._shoppingCart.placeAt(this.domNode);this._breadcrumb.placeAt(this.domNode);this._addTitleNode();
var a=this;this._manager.createVariableGrid=function(b,c){b=b||{};b.manager=this;return a._contentFactory.createVariableGrid(b,c)};this._addAutoTooltip()},_addAutoTooltip:function(){n(this.domNode)},_addTitleNode:function(){var a=f.create("div",{style:"position: absolute; top: 0;"},this.domNode);this._titleNode=f.create("div",{"class":"DataBrowser_Title",innerHTML:this.title},a)},_updateSelectionFromManager:function(){this.selection!=this._manager.selection&&this._set("selection",this._manager.selection)},
_setSelectionAttr:function(a){this._manager&&this._manager.multipleSelectIsAllowed()&&(a=a||[],this.selection!=a&&(this.selection=a,this._manager&&this._manager.changeSelection(a)))},_setTitleAttr:function(a){this._set("title",a)},startup:function(){this._started||(this._initialStartup(),this.inherited(arguments),this._shoppingCart&&this._shoppingCart.startup(),this._launch())},_setCountryIDAttr:function(a,b){if(a!=this._getQueryCountryID()){if(a&&this.allowHierarchies){var c=a.substr(3);a=a.substr(0,
2);this._set("hierarchyID",c)}this._set("countryID",a);this._manager&&!b&&(a=this._getQueryCountryID(),this._started?this._loadCategoriesPage().changeCountry(a):(this._manager.set("variableQuery",{countryID:a}),this._manager.variables.synchronize(a)))}},_setHierarchyIDAttr:function(a){this._setCountryIDAttr(this._getQueryCountryID(this.countryID,a))},_getQueryCountryID:function(a,b){"undefined"==typeof a&&(a=this.countryID,b=this.hierarchyID);return this.allowHierarchies&&a&&b?a+"/"+b:a},launch:function(a){if(a){var b=
this._getQueryCountryID();a=c.mixin({},a);"undefined"==typeof a.countryID&&(a.countryID=b);this._manager.set("variableQuery",a);b!=a.countryID&&this._set("countryID",a.countryID)}this._started&&this._launch()},_launch:function(){var a=this;this.showProgress(this._manager.validateQuery()).then(function(b){a._manager.validateSelection();a._loadNextPage(b)})},showProgress:function(a){return a},_loadNextPage:function(a){var b=this._manager.variableQuery;if(b.searchString||b.favorites||b.dataCollectionID)this._loadVariablesPage(a);
else if(b.categoryID){var c=this;this._isNonEmptyCategory(function(a){a?c._loadCollectionsPage():c._loadVariablesPage()})}else this._loadCategoriesPage()},_loadPreviousPage:function(){if("collections"==this.currentPageId)this._loadCategoriesPage();else{var a=this;this._isNonEmptyCategory(function(b){b?a._loadCollectionsPage():a._loadCategoriesPage()})}},_loadCategoriesPage:function(){var a=this.pages.categories;a||(a=this.pages.categories=this._contentFactory.createPage("categories",{pageId:"categories",
countryBox:this.countryBox,allowHierarchies:this.allowHierarchies,manager:this._manager,backButton:this.backButton,okButton:this._manager.multipleSelectIsAllowed()?this.okButton:null,cancelButton:this.cancelButton,onSelect:c.hitch(this,this._loadNextPage),onSearch:c.hitch(this,this._loadNextPage),onCountryChange:c.hitch(this,function(a){this.set("countryID",a,!0)})}),a.on("back",c.hitch(this,this._onBack)),a.on("ok",c.hitch(this,this._onOK)),a.on("cancel",c.hitch(this,this._onCancel)));this.loadPage("categories");
return a},_loadCollectionsPage:function(){var a=this.pages.collections;a||(a=this.pages.collections=this._contentFactory.createPage("collections",{pageId:"collections",manager:this._manager,backButton:this.pageBackButton,okButton:this._manager.multipleSelectIsAllowed()?this.okButton:null,cancelButton:this.cancelButton,onSelect:c.hitch(this,this._loadNextPage)}),a.on("back",c.hitch(this,this._loadPreviousPage)),a.on("ok",c.hitch(this,this._onOK)),a.on("cancel",c.hitch(this,this._onCancel)));a.lastDataCollectionID=
this._manager.variableQuery.dataCollectionID;this.loadPage("collections");return a},_loadVariablesPage:function(a){var b=this.pages.variables;b||(b=this.pages.variables=this._contentFactory.createPage("variables",{pageId:"variables",manager:this._manager,backButton:this.pageBackButton,okButton:this._manager.multipleSelectIsAllowed()?this.okButton:null,cancelButton:this.cancelButton}),b.on("back",c.hitch(this,this._loadPreviousPage)),b.on("ok",c.hitch(this,this._onOK)),b.on("cancel",c.hitch(this,this._onCancel)));
b.searchResults=a;this.loadPage("variables");return b},loadPage:function(a){switch(a){case "categories":this._manager.set("variableQuery",this._manager.composeQuery());break;case "collections":this._manager.set("variableQuery",this._manager.composeQuery("categoryID"))}this.currentPage&&this.currentPage.set("pageIsActive",!1);var b=this.pages[a]&&this.pages[a]._started;this.inherited(arguments);b&&this.currentPage.set("pageIsActive",!0);var c=this;setTimeout(function(){c._updateBreadcrumb(a)});this.emit("PageLoaded",
{pageName:a})},_updateBreadcrumb:function(a){switch(a){case "categories":this._breadcrumb.domNode.style.display="none";this._breadcrumb.clearSelection();break;case "collections":this._breadcrumb.domNode.style.display="";this._breadcrumb.selectCategory(this._manager.getCategory());break;case "variables":this._breadcrumb.domNode.style.display="";var b=this;this._isNonEmptyCategory(function(a,c){if(a||!c){var d=b._manager.getDataCollection();d||(d=b._prepareNoDCBreadcrumbInfo());b._breadcrumb.selectDataCollection(d,
c)}else b._breadcrumb.selectCategory(c)})}},_prepareNoDCBreadcrumbInfo:function(){return{title:this._manager.variableQuery.favorites?d.DataVariablesPage.favoriteVariablesTitle:d.DataVariablesPage.allVariablesTitle}},_isNonEmptyCategory:function(a){var b=this;k(this._manager.getCategory(),function(c){var d=c?b.variables.getPopularVariables(c).length||1<c.dataCollections.length:!1;a(d,c)})},onPageLoaded:function(){},_onLimit:function(){var a=this;setTimeout(function(){a.emit("Limit",{selectionLimit:a._manager.selectionLimit})})},
onLimit:function(){},_onBack:function(){this.emit("Back")},onBack:function(){},_onOK:function(){1==this._manager.selectionLimit&&(this._updateSelectionFromManager(),this._manager.selection.length&&(this._manager.selection=[]));this.emit("OK",{selection:this.selection,variableQuery:this.variableQuery})},onOK:function(){},_onCancel:function(){this.emit("Cancel")},onCancel:function(){}});e.CATEGORIES_PAGE="categories";e.COLLECTIONS_PAGE="collections";e.VARIABLES_PAGE="variables";return e});