// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/renderers/arcadeUtils",["dojo/_base/lang","dojo/has","../kernel","../arcade/arcade"],function(e,f,g,c){var d={parseExpression:function(a,b){b=b||{vars:{$feature:"any"}};return a?c.parseScript(a,b):null},createExecContext:function(a){return{vars:{$feature:c.constructFeature(a)}}},executeExpression:function(a,b){return c.executeScript(a,b,-1)}};f("extend-esri")&&e.setObject("renderer.arcadeUtils",d,g);return d});