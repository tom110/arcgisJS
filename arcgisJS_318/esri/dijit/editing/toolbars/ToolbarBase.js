// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/dijit/editing/toolbars/ToolbarBase","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/has dijit/Toolbar dijit/ToolbarSeparator ../../../kernel ../../../lang".split(" "),function(c,d,e,f,g,h,k,l,m){c=c([h],{declaredClass:"esri.dijit.editing.toolbars.ToolbarBase",_enabled:!0,graphicsAdded:function(){},drawEnd:function(){},onApplyEdits:function(){},onDelete:function(){},constructor:function(a,b){a&&a.settings&&(this._tools=[],this._tbConnects=[],this._initialize(a.settings))},
postCreate:function(){this._createTools();this.deactivate()},destroy:function(){var a,b=this._tools;for(a in b)b.hasOwnProperty(a)&&m.isDefined(this._tools[a])&&this._tools[a].destroy();e.forEach(this._tbConnects,f.disconnect);this.inherited(arguments)},activate:function(a){this._enabled=!0},deactivate:function(){var a;this._enabled=!1;this._geometryType=this._layer=null;var b=this._tools;for(a in b)b.hasOwnProperty(a)&&(this._tools[a].deactivate(),this._tools[a].setChecked(!1))},isEnabled:function(){return this._enabled},
setActiveSymbol:function(a){this._activeSymbol=a},_getSymbol:function(){},_createTools:function(){},_initialize:function(a){this._settings=a;this._toolbar=a.drawToolbar;this._editToolbar=a.editToolbar;this._initializeToolbar()},_activateTool:function(a,b){this._activeTool&&this._activeTool.deactivate();!0===b&&this._activeTool==this._tools[a]?(this._activeTool.setChecked(!1),this._activeTool=null):(this._activeTool=this._tools[a],this._activeTool.setChecked(!0),this._activeTool.activate(null))},_createSeparator:function(){this.addChild(new k)}});
g("extend-esri")&&d.setObject("dijit.editing.toolbars.ToolbarBase",c,l);return c});