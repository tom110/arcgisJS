// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/renderers/SymbolRenderer",["require","exports","./IconRenderer","./SDFRenderer"],function(p,q,c,d){return function(){function b(){this._iconRenderer=new c;this._sdfRenderer=new d}b.prototype.render=function(b,a,e,f,g,h,k,c,d,l,m,n){a.hasData()&&(0<a.marketElementCount&&!a.isSDF&&this._iconRenderer.render(b,a,e,f,g,h,k,c,l,m),0<a.textElementCount&&this._sdfRenderer.render(b,a,e,f,g,h,k,d,l,m,n))};return b}()});