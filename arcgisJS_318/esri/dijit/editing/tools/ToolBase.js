// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/dijit/editing/tools/ToolBase",["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../kernel","dojo/i18n!../../../nls/jsapi"],function(b,c,d,e,f){b=b(null,{declaredClass:"esri.dijit.editing.tools.ToolBase",_enabled:!0,showLabel:!1,constructor:function(a,b){a=a||{};c.mixin(this,a);this.label=this._label?f.widgets.editor.tools[this._label]:"";this._settings=a.settings;this._toolbar=a.settings.drawToolbar;this._editToolbar=a.settings.editToolbar;this._initializeTool()},onFinished:function(){},
onDrawEnd:function(){},onApplyEdits:function(){},postCreate:function(){this.deactivate();this.inherited(arguments)},destroy:function(){},activate:function(a){this._toolbar&&this._toolbar.deactivate();this._editToolbar&&this._editToolbar.deactivate();this._enabled&&(this._checked=!0,this._layer=a,this._toolbar&&this._drawType&&this._toolbar.activate(this._drawType))},deactivate:function(){this._toolbar&&this._toolbar.deactivate();this._editToolbar&&this._editToolbar.deactivate();this.setChecked(!1);
this._updateUI()},setEnabled:function(a){this._enabled=a;this._updateUI()},setChecked:function(a){this._checked=a},enable:function(a){this._updateUI()},isEnabled:function(){return this._enabled},getToolName:function(){return this._toolName},_initializeTool:function(){},_updateUI:function(){this.disabled=!this._enabled;this.attr("iconClass",this._enabled?this._enabledIcon:this._disabledIcon)}});d("extend-esri")&&c.setObject("dijit.editing.tools.ToolBase",b,e);return b});