// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterFormats/TiffDecoder",[],function(){var E=function(){var a=new ArrayBuffer(4),e=new Uint8Array(a),a=new Uint32Array(a);e[0]=1;e[1]=2;e[2]=3;e[3]=4;return 67305985===a[0]},I=function(){var a=[];a[254]="NEWSUBFILETYPE";a[255]="SUBFILETYPE";a[256]="IMAGEWIDTH";a[257]="IMAGELENGTH";a[258]="BITSPERSAMPLE";a[259]="COMPRESSION";a[262]="PHOTOMETRICINTERPRETATION";a[263]="THRESHHOLDING";a[264]="CELLWIDTH";a[265]="CELLLENGTH";a[266]="FILLORDER";a[269]="DOCUMENTNAME";a[270]="IMAGEDESCRIPTION";
a[271]="MAKE";a[272]="MODEL";a[273]="STRIPOFFSETS";a[274]="ORIENTATION";a[277]="SAMPLESPERPIXEL";a[278]="ROWSPERSTRIP";a[279]="STRIPBYTECOUNTS";a[280]="MINSAMPLEVALUE";a[281]="MAXSAMPLEVALUE";a[282]="XRESOLUTION";a[283]="YRESOLUTION";a[284]="PLANARCONFIGURATION";a[285]="PAGENAME";a[286]="XPOSITION";a[287]="YPOSITION";a[288]="FREEOFFSETS";a[289]="FREEBYTECOUNTS";a[290]="GRAYRESPONSEUNIT";a[291]="GRAYRESPONSECURVE";a[292]="T4OPTIONS";a[293]="T6OPTIONS";a[296]="RESOLUTIONUNIT";a[297]="PAGENUMBER";a[300]=
"COLORRESPONSEUNIT";a[301]="TRANSFERFUNCTION";a[305]="SOFTWARE";a[306]="DATETIME";a[315]="ARTIST";a[316]="HOSTCOMPUTER";a[317]="PREDICTOR";a[318]="WHITEPOINT";a[319]="PRIMARYCHROMATICITIES";a[320]="COLORMAP";a[321]="HALFTONEHINTS";a[322]="TILEWIDTH";a[323]="TILELENGTH";a[324]="TILEOFFSETS";a[325]="TILEBYTECOUNTS";a[326]="BADFAXLINES";a[327]="CLEANFAXDATA";a[328]="CONSECUTIVEBADFAXLINES";a[330]="SUBIFD";a[332]="INKSET";a[333]="INKNAMES";a[334]="NUMBEROFINKS";a[336]="DOTRANGE";a[337]="TARGETPRINTER";
a[338]="EXTRASAMPLES";a[339]="SAMPLEFORMAT";a[340]="SMINSAMPLEVALUE";a[341]="SMAXSAMPLEVALUE";a[342]="TRANSFERRANGE";a[512]="JPEGPROC";a[513]="JPEGIFOFFSET";a[514]="JPEGIFBYTECOUNT";a[515]="JPEGRESTARTINTERVAL";a[517]="JPEGLOSSLESSPREDICTORS";a[518]="JPEGPOINTTRANSFORM";a[519]="JPEGQTABLES";a[520]="JPEGDCTABLES";a[521]="JPEGACTABLES";a[529]="YCBCRCOEFFICIENTS";a[530]="YCBCRSUBSAMPLING";a[531]="YCBCRPOSITIONING";a[532]="REFERENCEBLACKWHITE";a[33432]="COPYRIGHT";a[42112]="GDAL_METADATA";a[42113]="GDAL_NODATA";
a[50844]="RPCCOEFFICIENT";a[34735]="GEOKEYDIRECTORY";a[34736]="GEODOUBLEPARAMS";a[34737]="GEOASCIIPARAMS";return a}(),F=[0,1,1,2,4,8,1,1,2,4,8,4,8],G=function(a,e){var m="UNKNOWN";3===a?m="F32":1===a?8>=e?m="U8":16>=e?m="U16":32>=e&&(m="U32"):2===a&&(8>=e?m="S8":16>=e?m="S16":32>=e&&(m="S32"));return m};return{decode:function(a){var e,m=new DataView(a,0,8);e=m.getUint16(0,!1);if(18761===e)e=!0;else if(19789===e)e=!1;else throw"unexpected endianess byte";if(42!==m.getUint16(2,e))throw"unexpected tiff identifier";
for(var m=m.getUint32(4,e),g,w,x,b,y,s,z,v,t=[];m;){g=(new DataView(a,m,2)).getUint16(0,e);w=m+2;m=(new DataView(a,w+12*g,4)).getUint32(0,e);v={};for(x=0;x<g;x++)if(b=new DataView(a,w,12),y=b.getUint16(0,e),s=b.getUint16(2,e),z=b.getUint32(4,e),b=b.getUint32(8,e),w+=12,!(7===s||12<s)){b=z={fieldTag:y,fieldType:s,fieldValueCount:z,fieldValueOffset:b};var d=a,f=e,u=[],C=z.fieldType,B=z.fieldValueCount,p=z.fieldValueOffset,n=p,A=F[C],n=8*A,D=B*A,H=8*B*F[C],h=void 0,h=void 0;if(32>=H)if(f||(p>>>=32-H),
1===B)u=[p];else for(h=0;h<B;h++)u.push(p<<n*h>>>32-n);else for(n=p;n<p+D;n+=A){switch(C){case 1:h=(new DataView(d,n,1)).getUint8(0);break;case 2:h=(new DataView(d,n,1)).getUint8(0);break;case 3:h=(new DataView(d,n,2)).getUint16(0,f);break;case 4:h=(new DataView(d,n,4)).getUint32(0,f);break;case 5:h=(new DataView(d,n,4)).getUint32(0,f)/(new DataView(d,n+4,4)).getUint32(0,f);break;case 6:h=(new DataView(d,n,1)).getInt8(0);break;case 8:h=(new DataView(d,n,2)).getInt16(0,f);break;case 9:h=(new DataView(d,
n,4)).getInt32(0,f);break;case 10:h=(new DataView(d,n,4)).getInt32(0,f)/(new DataView(d,n+4,4)).getInt32(0,f);break;case 11:h=(new DataView(d,n,4)).getFloat32(0,f);break;case 12:h=(new DataView(d,n,8)).getFloat64(0,f);break;case 7:h=null;break;default:h=null}u.push(h)}if(2===C){d="";f=u;u=[];for(h=0;h<f.length;h++)0===f[h]?(u.push(d),d=""):d+=String.fromCharCode(f[h])}b.fieldValues=u;b=v;u=I[y];void 0===u&&(u="unknown"+y);b[u]={type:s,values:z.fieldValues}}t.push(v)}if(0===t.length)throw"no valid image file directory";
var c;b=t[0];m=void 0===b.GDAL_NODATA||null===b.GDAL_NODATA?null:parseFloat(b.GDAL_NODATA.values[0]);if(b.TILEOFFSETS){var q,l;e=E()===e;g=b.TILEOFFSETS?b.TILEOFFSETS.values:void 0;if(void 0===g)c=void 0;else{w=b.TILEBYTECOUNTS.values;x=b.TILEWIDTH.values[0];y=b.TILELENGTH.values[0];s=b.IMAGEWIDTH.values[0];v=b.IMAGELENGTH.values[0];var r=s*v,t=b.BITSPERSAMPLE.values[0],k=b.SAMPLESPERPIXEL.values[0];c=b.SAMPLEFORMAT?b.SAMPLEFORMAT.values[0]:1;z=G(c,t);if(1!==(b.PLANARCONFIGURATION?b.PLANARCONFIGURATION.values[0]:
1))throw console.log("can only handle PLANARCONFIGURATION\x3d1"),"can only handle PLANARCONFIGURATION\x3d1";if(3<c)c=void 0;else{3===c?(q=new Float32Array(r*k),l=Float32Array):1===c?8>=t?(q=new Uint8Array(r*k),l=Uint8Array):16>=t?(q=new Uint16Array(r*k),l=Uint16Array):32>=t&&(q=new Uint32Array(r*k),l=Uint32Array):2===c&&(8>=t?(q=new Int8Array(r*k),l=Int8Array):16>=t?(q=new Int16Array(r*k),l=Int16Array):32>=t&&(q=new Int32Array(r*k),l=Int32Array));u=Math.ceil(s/x);if(0===t%8)for(c=0;c<g.length;c++){f=
Math.floor(c/u)*y;C=c%u*x;b=(f*s+C)*k;w[c]!==x*y*k*t/8&&console.log("tile byte counts is different than expected");if("U8"===z||"S8"===z||e)B=a.slice(g[c],g[c]+w[c]);else switch(B=new ArrayBuffer(w[c]),p=new Uint8Array(a,g[c],w[c]),A=new Uint8Array(B),z){case "U16":case "S16":for(d=0;d<p.length;d+=2)A[d]=p[d+1],A[d+1]=p[d];break;case "U32":case "S32":case "F32":for(d=0;d<p.length;d+=4)A[d]=p[d+3],A[d+1]=p[d+2],A[d+2]=p[d+1],A[d+3]=p[d]}d=new l(B);C=Math.min(x,s-C);D=Math.min(y,v-f);for(f=0;f<D;f++){p=
b+f*s*k;A=f*x*k;for(B=0;B<C*k;B++,p++,A++)q[p]=d[A]}}g={width:s,height:v,pixelType:z};if(1===k)g.pixels=[q];else{g.pixels=[];for(c=0;c<k;c++){e=new l(r);for(a=0;a<r;a++)e[a]=q[a*k+c];g.pixels.push(e)}}c=g}}}else if(b.STRIPOFFSETS)if(e=E()===e,g=b.STRIPOFFSETS?b.STRIPOFFSETS.values:void 0,void 0===g)c=void 0;else{w=b.STRIPBYTECOUNTS.values;x=b.ROWSPERSTRIP.values;y=b.IMAGEWIDTH.values[0];s=b.IMAGELENGTH.values[0];q=y*s;v=b.BITSPERSAMPLE.values[0];l=b.SAMPLESPERPIXEL.values[0];c=b.SAMPLEFORMAT?b.SAMPLEFORMAT.values[0]:
1;t=G(c,v);if(1!==(b.PLANARCONFIGURATION?b.PLANARCONFIGURATION.values[0]:1))throw console.log("can only handle PLANARCONFIGURATION\x3d1"),"can only handle PLANARCONFIGURATION\x3d1";if(1!==(b.COMPRESSION?b.COMPRESSION.values[0]:1))throw console.log("compressed tiff is not supported at this moment"),"compressed tiff is not supported at this moment";if(3<c)c=void 0;else{3===c?(r=new Float32Array(q*l),k=Float32Array):1===c?8>=v?(r=new Uint8Array(q*l),k=Uint8Array):16>=v?(r=new Uint16Array(q*l),k=Uint16Array):
32>=v&&(r=new Uint32Array(q*l),k=Uint32Array):2===c&&(8>=v?(r=new Int8Array(q*l),k=Int8Array):16>=v?(r=new Int16Array(q*l),k=Int16Array):32>=v&&(r=new Int32Array(y*s*l),k=Int32Array));b=x;if(0===v%8)for(c=0;c<g.length;c++){z=c*(x*y)*l;b=(c+1)*x>s?s-c*x:x;w[c]!==b*y*l*v/8&&console.log("strip byte counts is different than expected");if("U8"===t||"S8"===t||e)u=a.slice(g[c],g[c]+w[c]);else switch(u=new ArrayBuffer(w[c]),d=new Uint8Array(a,g[c],w[c]),f=new Uint8Array(u),t){case "U16":case "S16":for(b=
0;b<d.length;b+=2)f[b]=d[b+1],f[b+1]=d[b];break;case "U32":case "S32":case "F32":for(b=0;b<d.length;b+=4)f[b]=d[b+3],f[b+1]=d[b+2],f[b+2]=d[b+1],f[b+3]=d[b]}b=new k(u);r.set(b,z)}g={width:y,height:s,pixelType:t};if(1===l)g.pixels=[r];else{g.pixels=[];for(c=0;c<l;c++){e=new k(q);for(a=0;a<q;a++)e[a]=r[a*l+c];g.pixels.push(e)}}c=g}}if(null!==m){c.maskData=new Uint8Array(c.width*c.height);for(a=0;a<c.width*c.height;a++)c.maskData[a]=c.pixels[0][a]===m?0:1;c.noDataValue=m}return c}}});