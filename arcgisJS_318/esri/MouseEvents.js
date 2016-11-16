// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/MouseEvents","dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/_base/sniff dojo/_base/connect dojo/_base/event ./kernel ./Evented ./geometry/Point ./geometry/ScreenPoint".split(" "),function(g,p,l,f,m,h,k,q,r,n){var c=m.connect,d=m.disconnect;g=g([q],{declaredClass:"esri.MouseEvents",doubleClickDuration:300,minWheelValue:1,maxWheelValue:1,mozWheelDivisor:-1!==f("mac")?1:3,wheelDivisor:2>f("chrome")?360:120,preventPageScroll:!0,map:null,constructor:function(a,b){this.node=a;l.mixin(this,
b);var e=function(a){h.stop(a);return!1};f("mozilla")&&p.style(a,"MozUserSelect","none");this._handles=[c(a,"onselectstart",e),c(a,"ondragstart",e),c(a,"onmouseenter",this,this._onMouseEnterHandler),c(a,"onmouseleave",this,this._onMouseLeaveHandler),c(a,"onmousedown",this,this._onMouseDownHandler),c(a,"onclick",this,this._onClickHandler),c(a,"ondblclick",this,this._onDblClickHandler)];this._onMouseMoveHandler_connect=c(a,"onmousemove",this,this._onMouseMoveHandler);this._onMouseUpHandler_connect=
c(a,"onmouseup",this,this._onMouseUpHandler);this._fireClickEvent=l.hitch(this,this._fireClickEvent);this._initialDuration=this.doubleClickDuration;this.preventPageScroll=(e=this.map)?e.isScrollWheelZoom||e.isScrollWheelPan:this.preventPageScroll;this.enableMouseWheel(!1)},_fire:function(a,b){if(!this._preventClick||!("onClick"===a||"onDblClick"===a)){if(this[a])this[a](b);if(this.map&&this.map[a])this.map[a](b)}},_processEvent:function(a){a=h.fix(a,a.target);var b=this.map,e=b&&b.position;e&&("DOMMouseScroll"===
a.type&&3>f("ff")?a.screenPoint=new n(window.scrollX+a.screenX-e.x,window.scrollY+a.screenY-e.y):a.screenPoint=new n(a.pageX-e.x,a.pageY-e.y),a.mapPoint=b.extent?b.toMap(a.screenPoint):new r);a.numPoints=0;return a},_onMouseEnterHandler:function(a){d(this._onKeyDown_connect);d(this._onKeyUp_connect);this._onKeyDown_connect=c(document,"onkeydown",this,this._onKeyDownHandler);this._onKeyUp_connect=c(document,"onkeyup",this,this._onKeyUpHandler);this._fire("onMouseOver",this._processEvent(a))},_onMouseLeaveHandler:function(a){d(this._onKeyDown_connect);
d(this._onKeyUp_connect);this._onKeyDown_connect=this._onKeyUp_connect=null;this._fire("onMouseOut",this._processEvent(a))},_onMouseMoveHandler:function(a){this._dragEnd?this._dragEnd=!1:this._fire("onMouseMove",this._processEvent(a))},_onMouseDownHandler:function(a){d(this._onMouseMoveHandler_connect);this._onMouseMoveHandler_connect=null;this.node.setCapture&&this.node.setCapture(!1);d(this._onMouseDragHandler_connect);this._onMouseDragHandler_connect=c(document,"onmousemove",this,this._onMouseDragHandler);
this._startX=a.pageX;this._startY=a.pageY;this._fire("onMouseDown",this._processEvent(a))},_onMouseUpHandler:function(a){var b=this.node;b.releaseCapture&&b.releaseCapture();d(this._onMouseDragHandler_connect);this._onMouseDragHandler_connect=null;d(this._onMouseMoveHandler_connect);this._onMouseMoveHandler_connect=c(b,"onmousemove",this,this._onMouseMoveHandler);this._fire("onMouseUp",this._processEvent(a))},_onMouseDragHandler:function(a){d(this._onMouseDragHandler_connect);this._onMouseDragHandler_connect=
c(document,"onmousemove",this,this._onMouseDraggingHandler);d(this._onMouseUpHandler_connect);this._onMouseUpHandler_connect=c(document,"onmouseup",this,this._onDragMouseUpHandler);this._docLeaveConnect=c(document,"onmouseout",this,this._onDocMouseOut);this._fire("onMouseDragStart",this._processEvent(a))},_onMouseDraggingHandler:function(a){h.stop(a);this._fire("onMouseDrag",this._processEvent(a))},_onDragMouseUpHandler:function(a){var b=this.node;b.releaseCapture&&b.releaseCapture();this._dragEnd=
!0;d(this._docLeaveConnect);d(this._onMouseDragHandler_connect);d(this._onMouseUpHandler_connect);this._docLeaveConnect=this._onMouseDragHandler_connect=null;this._onMouseMoveHandler_connect=c(b,"onmousemove",this,this._onMouseMoveHandler);this._onMouseUpHandler_connect=c(b,"onmouseup",this,this._onMouseUpHandler);a=this._processEvent(a);this._fire("onMouseDragEnd",a);this._fire("onMouseUp",a)},_onDocMouseOut:function(a){var b=9>f("ie")?a.toElement:a.relatedTarget,e=b&&b.nodeName.toLowerCase();(!b||
f("chrome")&&"html"===e)&&this._onDragMouseUpHandler(a)},_onClickHandler:function(a){a=this._processEvent(a);if(!(a.pageX!==this._startX||a.pageY!==this._startY)){clearTimeout(this._clickTimer);var b={},e="movementX"in a,c;for(c in a)if(!e||"webkitMovementX"!==c&&"webkitMovementY"!==c)b[c]=a[c];this._clickEvent=b;this._clickTimer=setTimeout(this._fireClickEvent,this.doubleClickDuration)}},_fireClickEvent:function(){clearTimeout(this._clickTimer);9>f("ie")&&(this._clickEvent.graphic=k._ieGraphic,delete k._ieGraphic);
this._fire("onClick",this._clickEvent)},_onDblClickHandler:function(a){clearTimeout(this._clickTimer);this._fire("onDblClick",this._processEvent(a))},_onMouseWheelHandler:function(a){var b=this.map;(b?b.isScrollWheelZoom||b.isScrollWheelPan:this.preventPageScroll)&&h.stop(a);var b=f("ff")||f("mozilla")?-a.detail/this.mozWheelDivisor:a.wheelDelta/this.wheelDivisor,c=Math.abs(b),c=c<=this.minWheelValue?this.minWheelValue:this.maxWheelValue;a.value=0>b?-c:c;this._fire("onMouseWheel",this._processEvent(a))},
_onKeyDownHandler:function(a){this._fire("onKeyDown",a)},_onKeyUpHandler:function(a){this._fire("onKeyUp",a)},enableMouseWheel:function(a){d(this._scrollHandle);this._scrollHandle=c(this.node,f("ff")||f("mozilla")?a?"MozMousePixelScroll":"DOMMouseScroll":"onmousewheel",this,this._onMouseWheelHandler)},setImmediateClick:function(a){this.doubleClickDuration=a?0:this._initialDuration},preventClickEvents:function(a){this._preventClick=a},destroy:function(){var a=this._handles.concat([this._onMouseMoveHandler_connect,
this._onMouseUpHandler_connect,this._onMouseDragHandler_connect,this._scrollHandle,this._onKeyDown_connect,this._onKeyUp_connect,this._docLeaveConnect]),b;for(b=0;b<a.length;b++)d(a[b]);clearTimeout(this._clickTimer);this.node=this.map=this._handles=this._clickEvent=this._onMouseMoveHandler_connect=this._onMouseUpHandler_connect=this._onMouseDragHandler_connect=this._scrollHandle=this._onKeyDown_connect=this._onKeyUp_connect=this._docLeaveConnect=null}});f("extend-esri")&&(k.MouseEvents=g);return g});