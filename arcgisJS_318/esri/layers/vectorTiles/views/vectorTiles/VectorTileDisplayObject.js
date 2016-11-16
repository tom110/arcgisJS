// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/VectorTileDisplayObject","require exports ../../core/tsSupport/extendsHelper ../webgl/BufferObject ../2d/engine/DisplayObject ../../core/libs/gl-matrix/vec2 ../../core/libs/gl-matrix/mat4 ./RenderBucket".split(" "),function(t,u,n,f,q,r,s,m){return function(p){function h(b,c,k,d,e,a,f,g,h,m,n){p.call(this);this._renderBuckets=[];this._symbolUpdateData=this._vectorTileData=null;this.topLeft=[0,0];this.bottomRight=[0,0];this.tileTransform={transform:Float32Array[16],
displayCoord:Float32Array[2]};this.stencilData={mask:0,reference:0};this.key=b;this.refKey=c;this.topLeft[0]=k[0];this.topLeft[1]=k[1];this.bottomRight[0]=k[2];this.bottomRight[1]=k[3];this.widthInPixels=d;this.coordRange=e;this.rotation=a;this._vectorTileData=f;this.styleLayers=g;this._glyphsMosaic=h;this.workerID=m;this._connection=n;this.id=b.id;this.status=3;this.tileTransform.transform=s.create();this.tileTransform.displayCoord=r.create()}n(h,p);h.prototype.updateSymbolData=function(b){b&&(this._symbolUpdateData=
b,this.requestRender())};h.prototype.dispose=function(){this._connection&&6!==this.status&&this._connection.broadcast("destructTileData",{key:this.id},[])};h.prototype.attach=function(b){this.status=3;if(!this._vectorTileData)return!1;if(0===this._renderBuckets.length)for(var c=new Uint32Array(this._vectorTileData.bucketDataInfo),k=c.length,d=0;d<k;){var e=c[d],a=c[d+1];0===a?(a=new m.BackgroundRenderBucket,a.layerID=e,this._renderBuckets.push(a),d+=2):1===a?(a=new m.FillRenderBucket,a.layerID=e,
a.triangleElementStart=c[d+2],a.triangleElementCount=c[d+3],a.outlineElementStart=c[d+4],a.outlineElementCount=c[d+5],this._renderBuckets.push(a),d+=6):2===a?(a=new m.LineRenderBucket,a.layerID=e,a.triangleElementStart=c[d+2],a.triangleElementCount=c[d+3],a.joinStart=c[d+4],a.joinCount=c[d+5],this._renderBuckets.push(a),d+=6):3===a?(a=new m.SymbolRenderBucket,a.layerID=e,a.markerElementStart=c[d+2],a.marketElementCount=c[d+3],a.textElementStart=c[d+4],a.textElementCount=c[d+5],a.isSDF=0!==c[d+6],
this._renderBuckets.push(a),d+=7):console.error("Bad bucket type!")}c=b.context;b=b.budget;k=new Uint32Array(this._vectorTileData.bufferDataInfo);d=k.length;for(a=e=0;a<d;a+=2,e++){var l=k[a],g=k[a+1];if(!(0>=g||0===this._vectorTileData.bufferData[e].byteLength)){if(b.done)return!1;switch(l){case 2:this.polygonTrianglesVertexBuffer||(this.polygonTrianglesVertexBuffer=f.createVertex(c,35044,this._vectorTileData.bufferData[e]));break;case 6:this.polygonTrianglesIndexBuffer||(this.polygonTrianglesIndexBuffer=
f.createIndex(c,35044,new Uint32Array(this._vectorTileData.bufferData[e],0,g/4)));break;case 3:this.polygonOutlinesVertexBuffer||(this.polygonOutlinesVertexBuffer=f.createVertex(c,35044,this._vectorTileData.bufferData[e]));break;case 7:this.polygonOutlinesIndexBuffer||(this.polygonOutlinesIndexBuffer=f.createIndex(c,35044,new Uint32Array(this._vectorTileData.bufferData[e],0,g/4)));break;case 0:this.lineVertexBuffer||(this.lineVertexBuffer=f.createVertex(c,35044,this._vectorTileData.bufferData[e]));
break;case 8:this.lineTrianglesIndexBuffer||(this.lineTrianglesIndexBuffer=f.createIndex(c,35044,this._vectorTileData.bufferData[e]));break;case 1:this.lineJoinVertexBuffer||(this.lineJoinVertexBuffer=f.createVertex(c,35044,this._vectorTileData.bufferData[e]));break;case 4:this.iconVertexBuffer||(this.iconVertexBuffer=f.createVertex(c,35044,this._vectorTileData.bufferData[e]));break;case 9:this.iconIndexBuffer||(this.iconIndexBuffer=f.createIndex(c,35044,new Uint32Array(this._vectorTileData.bufferData[e],
0,g/4)));break;case 5:this.textVertexBuffer||(this.textVertexBuffer=f.createVertex(c,35044,this._vectorTileData.bufferData[e]));break;case 10:this.textIndexBuffer||(this.textIndexBuffer=f.createIndex(c,35044,new Uint32Array(this._vectorTileData.bufferData[e],0,g/4)))}}}this.status=4;return!0};h.prototype.detach=function(b){this.status=3;this.polygonTrianglesVertexArrayObject&&(this.polygonTrianglesVertexArrayObject.dispose(),this.polygonTrianglesVertexArrayObject=null);this.polygonOutlineVertexArrayObject&&
(this.polygonOutlineVertexArrayObject.dispose(),this.polygonOutlineVertexArrayObject=null);this.lineTrianglesVertexArrayObject&&(this.lineTrianglesVertexArrayObject.dispose(),this.lineTrianglesVertexArrayObject=null);this.lineJoinsVertexArrayObject&&(this.lineJoinsVertexArrayObject.dispose(),this.lineJoinsVertexArrayObject=null);this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null);this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=
null);this.polygonTrianglesVertexBuffer&&(this.polygonTrianglesVertexBuffer.dispose(),this.polygonTrianglesVertexBuffer=null);this.polygonTrianglesIndexBuffer&&(this.polygonTrianglesIndexBuffer.dispose(),this.polygonTrianglesIndexBuffer=null);this.polygonOutlinesVertexBuffer&&(this.polygonOutlinesVertexBuffer.dispose(),this.polygonOutlinesVertexBuffer=null);this.polygonOutlinesIndexBuffer&&(this.polygonOutlinesIndexBuffer.dispose(),this.polygonOutlinesIndexBuffer=null);this.lineVertexBuffer&&(this.lineVertexBuffer.dispose(),
this.lineVertexBuffer=null);this.lineTrianglesIndexBuffer&&(this.lineTrianglesIndexBuffer.dispose(),this.lineTrianglesIndexBuffer=null);this.lineJoinVertexBuffer&&(this.lineJoinVertexBuffer.dispose(),this.lineJoinVertexBuffer=null);this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null);this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null);this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null);this.textIndexBuffer&&
(this.textIndexBuffer.dispose(),this.textIndexBuffer=null);this._renderBuckets=[]};h.prototype.render=function(b){if(4===this.status){var c=b.context,f=b.renderer;if(c&&f){var d=b.drawphase;this._symbolUpdateData&&this._updateSymbolData(b);c.setStencilFunction(514,this.stencilData.reference,this.stencilData.mask);var e=this.styleLayers,a,l=this._renderBuckets.length,g=0;if(0===d)for(g=l-1;0<=g;g--)a=this._renderBuckets[g],3!==a.type&&a.hasData()&&f.renderBucket(c,a,b.displayLevel,b.requiredLevel,
d,this,e.layers[a.layerID]);else for(g=0;g<l;g++)a=this._renderBuckets[g],a.hasData()&&f.renderBucket(c,a,b.displayLevel,b.requiredLevel,d,this,e.layers[a.layerID])}}};h.prototype._updateSymbolData=function(b){var c=new Uint32Array(this._symbolUpdateData.bucketDataInfo),k=c.length;if(0===k)return this._symbolUpdateData=null,!0;if(1>b.budget.remaining)return this.requestRender(),!1;b=b.context;b.bindVAO(null);for(var d=new Uint32Array(this._symbolUpdateData.bufferDataInfo),e=d.length,a=0,l=0;l<e;l+=
2,a++){var g=d[l],h=d[l+1];if(!(0>=h||0===this._symbolUpdateData.bufferData[a].byteLength))switch(g){case 4:this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null);this.iconVertexBuffer=f.createVertex(b,35044,this._symbolUpdateData.bufferData[a]);break;case 9:this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null);this.iconIndexBuffer=f.createIndex(b,35044,new Uint32Array(this._symbolUpdateData.bufferData[a],0,h/4));break;case 5:this.textVertexBuffer&&
(this.textVertexBuffer.dispose(),this.textVertexBuffer=null);this.textVertexBuffer=f.createVertex(b,35044,this._symbolUpdateData.bufferData[a]);break;case 10:this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.textIndexBuffer=f.createIndex(b,35044,new Uint32Array(this._symbolUpdateData.bufferData[a],0,h/4))}}b=0;for(d=this._renderBuckets.length;b<d;b++)this._renderBuckets[b]instanceof m.SymbolRenderBucket&&(e=this._renderBuckets[b],e.markerElementStart=0,e.marketElementCount=
0,e.textElementStart=0,e.textElementCount=0);for(e=0;e<k;){l=c[e];a=-1;b=0;for(d=this._renderBuckets.length;b<d;b++)if(this._renderBuckets[b].layerID===l){a=b;break}-1===a&&console.log("bucket not found");if(b=this._renderBuckets[a])b.markerElementStart=c[e+2],b.marketElementCount=c[e+3],b.textElementStart=c[e+4],b.textElementCount=c[e+5];e+=7}this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null);this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),
this.textVertexArrayObject=null);this._symbolUpdateData=null;return!0};return h}(q)});