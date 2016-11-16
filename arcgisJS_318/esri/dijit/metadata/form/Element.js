// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/form/templates/Element.html":'\x3cdiv class\x3d"gxeElement"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/form/Element","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../../../kernel ../base/XNode dojo/text!./templates/Element.html ../base/ElementHeader ../base/MultiplicityHeader ../base/OptionalLabel ../base/etc/viewOnlyUtil ./InputText".split(" "),function(d,g,k,l,e,h,f,m,n,p,q,u,r,s,v,t){d=d([p],{_isGxeElement:!0,elementHeader:null,multiplicityHeader:null,templateString:q,label:null,target:null,minOccurs:1,
maxOccurs:1,matchTopNode:null,preferOpen:!1,showHeader:!0,trackMultiplicity:!0,useTabs:!0,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.buildPath(),this.gxeDocument&&this.gxeDocument.beforeInitializeElement(this),this.initializeElement(),this.gxeDocument&&this.gxeDocument.afterInitializeElement(this),this.noIndent&&e.remove(this.domNode,"gxeIndent"),this._publishStarted(),this.inherited(arguments))},connectInputWidget:function(a){var c=this.gxeDocument&&
this.gxeDocument.isViewOnly,b=this.findInputWidget();!b&&a&&0===this.getChildren().length&&(a=h.create("div",{},this.containerNode),b=new t({},a));b&&(this.inputWidget=b,b.parentXNode=this,b.connectXNode(this,c))},findAttributes:function(){var a=[];this._findAttributes(this,a);return a},_findAttributes:function(a,c){var b=!0;a._isGxeElement?b=a===this:a._isGxeAttribute&&(b=!1,c.push(a));b&&k.forEach(a.getChildren(),function(a){this._findAttributes(a,c)},this)},initializeElement:function(){var a;this.getLabelString();
var c=this.gxeDocument&&this.gxeDocument.isViewOnly;a=this.findInputWidget();"unbounded"!==this.maxOccurs&&1>=this.maxOccurs?this.trackMultiplicity=!1:a&&a._supportsMultipleValues&&(this.trackMultiplicity=!1);this.showHeader&&this.trackMultiplicity?(this.multiplicityHeader=a=new r({label:this.getLabelString(),target:this.target,minOccurs:this.minOccurs,maxOccurs:this.maxOccurs,preferOpen:this.preferOpen,showHeader:this.showHeader,useTabs:this.useTabs}),a.initialize(this),this.notApplicable&&(a.domNode.style.display=
"none"),this.connectInputWidget(!0),c&&this.multiplicityHeader.tools&&(this.multiplicityHeader.tools.domNode.style.display="none")):this.showHeader?this._initStandardHeader():this.connectInputWidget(!0)},_initStandardHeader:function(){var a=0===this.minOccurs,c=!this.noToggle,b=this.preferOpen,d=this.getLabelString(),f="";this.labelNode=h.create("div",{},this.domNode,"first");e.add(this.domNode,"single gxeIndent");e.add(this.labelNode,"gxeElementHeader");!c||!a?(this.labelNode.innerHTML=d,a?e.add(this.labelNode,
"gxeOptionalLabel"):e.add(this.labelNode,"gxeMandatoryLabel")):(this._contentIsOptional=a,this._isOptionallyOff=!1,b?(f='checked\x3d"checked"',this.toggleContent(!0,!0)):this.toggleContent(!1,!0),this.labelWidget=new s({label:d,checkedAttr:f,onClick:g.hitch(this,function(a){this.toggleContent(a,!0)})},this.labelNode),e.add(this.labelWidget.domNode,"gxeElementHeader"));this.connectInputWidget(!0)},toggleContent:function(a,c){if(!this.hide)if(this.elementHeader&&this.elementHeader.toggleContent)this.elementHeader.toggleContent(a);
else if(this.multiplicityHeader&&this.multiplicityHeader.toggleContent)this.multiplicityHeader.toggleContent(a);else if(this._contentIsOptional&&(a?f.set(this.containerNode,"display","block"):f.set(this.containerNode,"display","none"),this._contentIsOptional)){this._isOptionallyOff=!a;!c&&(this.labelWidget&&this.labelWidget.setChecked)&&this.labelWidget.setChecked(a);try{l.publish("gxe/optional-content-toggled",{src:this,isOptionallyOff:!a})}catch(b){console.error(b)}}}});m("extend-esri")&&g.setObject("dijit.metadata.form.Element",
d,n);return d});