// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/DisplayObject",["require","exports","../../../core/tsSupport/extendsHelper"],function(c,d,e){var b=0;return function(){function a(){this.attached=!1;this._visible=!0;Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-do-"+b++})}Object.defineProperty(a.prototype,"visible",{get:function(){return this._visible},set:function(a){this._visible!==a&&(this._visible=a,this.requestRender())},enumerable:!0,configurable:!0});
a.prototype.requestRender=function(){this.parent&&this.parent.requestChildRender(this)};return a}()});