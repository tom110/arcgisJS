// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/arcgis/AppProxyManager","dojo/_base/declare dojo/_base/lang ../kernel dojo/uacss dojo/Deferred dojo/promise/all dojo/json dojo/Evented dojo/Stateful ../request ./utils".split(" "),function(g,f,m,n,h,p,k,q,r,l,s){g=g([q,r],{constructor:function(a){this.defaults={appid:"",hitsPerInterval:100,intervalSeconds:60,referrers:[],proxies:[]};a=f.mixin({},this.defaults,a);this.set(a);this._init()},createProxies:function(a){var b=new h;this._registerApp(this._appItem).then(f.hitch(this,function(){for(var c=
{referrers:this.referrers,hitsPerInterval:this.hitsPerInterval,intervalSeconds:this.intervalSeconds},d=[],e=0;e<a.length;e++)d.push({sourceUrl:a[e].sourceUrl});e=this._sharingBaseUrl+"content/users/"+this._owner+"/";this._folderId&&(e+=this._folderId+"/");e+="items/"+this.appid+"/createProxies";l({url:e,content:{proxies:k.stringify(d),serviceProxyParams:k.stringify(c),f:"json"},callbackParamName:"callback"},{usePost:!0}).then(f.hitch(this,function(a){this.set("proxies",a.appProxies||[]);b.resolve(a.appProxies)}),
b.reject)}),b.reject);return b.promise},deleteProxies:function(a){var b=new h;a||(a=[]);for(var c=[],d=0;d<a.length;d++)c.push(this._deleteProxy(a[d]));p(c).then(f.hitch(this,function(a){for(var c,d=0;d<a.length;d++)c?a[d].length<c.length&&(c=a[d]):c=a[d];this.set("proxies",c);b.resolve(c)}),b.reject);return b.promise},_deleteProxy:function(a){var b=new h,c=this._sharingBaseUrl+"content/users/"+this._owner+"/";this._folderId&&(c+=this._folderId+"/");c+="items/"+this.appid+"/proxies/"+a.proxyId+"/delete";
l({url:c,content:{f:"json"},callbackParamName:"callback"},{usePost:!0}).then(f.hitch(this,function(a){b.resolve(a.appProxies||[])}),b.reject);return b.promise},_parseUrl:function(a){var b=document.createElement("a");b.href=a;return b},_init:function(){this.appid?s.getItem(this.appid).then(f.hitch(this,function(a){this._appItem=a;this._folderId=a.item.ownerFolder;var b=this._parseUrl(a.item.url);this._sharingBaseUrl="//"+b.hostname+"/sharing/rest/";var c=b.pathname.substring(0,b.pathname.lastIndexOf("/")),
b=b.hostname+c,c="https://"+b;this.referrers.push("http://"+b);this.referrers.push(c);this._owner=a.item.owner;-1!==a.item.typeKeywords.indexOf("App Proxy")&&a.item.appProxies&&this.set("proxies",a.item.appProxies);this.emit("load",{});this.set("loaded",!0)})):console.error("AppProxyManager: appid required.")},_registerApp:function(a){var b=new h,c=a.item.id,d=this._sharingBaseUrl+"oauth2/",e=this.referrers;!this._registered||this._registered!==this.appid?-1!==a.item.typeKeywords.indexOf("Registered App")?
b.resolve(a):l({url:d+"/registerApp",content:{itemId:c,appType:"browser",redirect_uris:k.stringify(e),f:"json"},callbackParamName:"callback"},{usePost:!0}).then(f.hitch(this,function(a){this._registered=this.appid;b.resolve(a)}),b.reject):b.resolve(a);return b.promise}});n("extend-esri")&&f.setObject("arcgis.AppProxyManager",g,m);return g});