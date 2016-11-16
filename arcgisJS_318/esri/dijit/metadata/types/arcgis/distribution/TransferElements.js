// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/distribution/templates/TransferElements.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n  \r\n    \x3c!-- online --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.cntOnlineRes.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'onLineSrc\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.cntOnlineRes.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/OnlineResourceElements"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- units and size --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.distInfo.distTranOps.section.unitsAndSize}\'"\x3e  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'unitsODist\',minOccurs:0,label:\'${i18nArcGIS.distInfo.distTranOps.unitsODist}\'"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'transSize\',minOccurs:0,label:\'${i18nArcGIS.distInfo.distTranOps.transSize}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n          data-dojo-props\x3d"minValue:0.0,minValueIsExclusive:true,hint:\'${i18nBase.hints.numberGreaterThanZero}\'"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \r\n    \x3c!-- offline --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.distInfo.distTranOps.offLineMed.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'offLineMed\',minOccurs:0,label:\'${i18nArcGIS.distInfo.distTranOps.offLineMed.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'medName\',minOccurs:0,label:\'${i18nArcGIS.codelist.MD_MediumNameCode}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'MedNameCd\',minOccurs:0,showHeader:false"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n              data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n                data-dojo-props\x3d"codelistType:\'MD_MediumNameCode\'"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'medFormat\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.codelist.MD_MediumFormatCode}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'MedFormCd\',minOccurs:0,showHeader:false"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n              data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n                data-dojo-props\x3d"codelistType:\'MD_MediumFormatCode\'"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'medDensity\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.distInfo.distTranOps.offLineMed.medDensity}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputMedDensity"\r\n            data-dojo-props\x3d"minValue:0.0,minValueIsExclusive:true,hint:\'${i18nBase.hints.numberGreaterThanZero}\'"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/MedDenUnitsElement"\r\n          data-dojo-props\x3d"target:\'medDenUnits\',minOccurs:0,label:\'${i18nArcGIS.distInfo.distTranOps.offLineMed.medDenUnits}\'"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'medVol\',minOccurs:0,label:\'${i18nArcGIS.distInfo.distTranOps.offLineMed.medVol}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n            data-dojo-props\x3d"minValue:0,minValueIsExclusive:true,integerOnly:true,hint:\'${i18nArcGIS.hints.integerGreaterThanZero}\'"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'medNote\',minOccurs:0,label:\'${i18nArcGIS.distInfo.distTranOps.offLineMed.medNote}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e    \r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n      \r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/distribution/TransferElements","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/TransferElements.html ../citation/OnlineResourceElements ../form/InputMedDensity ../form/MedDenUnitsElement".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.distribution.TransferElements",a,d);return a});