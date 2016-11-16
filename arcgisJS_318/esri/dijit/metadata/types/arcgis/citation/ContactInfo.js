// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/citation/templates/ContactInfo.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'rpCntInfo\',minOccurs:0,label:\'${i18nArcGIS.contact.rpCntInfo}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n    \r\n      \x3c!-- address --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'cntAddress\',minOccurs:0,label:\'${i18nArcGIS.cntAddress.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'eMailAdd\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.cntAddress.eMailAdd}\'"\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv style\x3d"margin-top:8px;"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n          data-dojo-props\x3d"target:\'addressType\',minOccurs:0,label:\'${i18nArcGIS.cntAddress.addressType.caption}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n            data-dojo-props\x3d"codelistType:\'AddressType\'"\x3e\r\n          \x3c/div\x3e  \r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'delPoint\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.cntAddress.delPoint}\'"\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv style\x3d"margin-top:8px;"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'city\',minOccurs:0,label:\'${i18nArcGIS.cntAddress.city}\'"\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'adminArea\',minOccurs:0,label:\'${i18nArcGIS.cntAddress.adminArea}\'"\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'postCode\',minOccurs:0,label:\'${i18nArcGIS.cntAddress.postCode}\'"\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'country\',minOccurs:0,label:\'${i18nArcGIS.cntAddress.country}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n            data-dojo-props\x3d"codelistType:\'CountryCode\'"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e  \r\n      \x3c/div\x3e  \r\n      \r\n      \x3c!-- phone --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'cntPhone\',minOccurs:0,label:\'${i18nArcGIS.cntPhone.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'voiceNum\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.cntPhone.voiceNum}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText"\x3e\x3c/div\x3e\r\n          \x3cdiv style\x3d"margin-top:8px"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n            data-dojo-props\x3d"target:\'tddtty\',minOccurs:0,showHeader:false"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCheckBox"\r\n              data-dojo-props\x3d"label:\'${i18nArcGIS.cntPhone.tddtty}\'"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'faxNum\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.cntPhone.faxNum}\'"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n\r\n      \x3c!-- online resource --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'cntOnlineRes\',minOccurs:0,label:\'${i18nArcGIS.cntOnlineRes.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/OnlineResourceElements"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- hours and instructions --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.contact.section.hoursAndInstructions}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'cntHours\',minOccurs:0,label:\'${i18nArcGIS.contact.cntHours}\'"\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'cntInstr\',minOccurs:0,label:\'${i18nArcGIS.contact.cntInstr}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e  \r\n      \x3c/div\x3e\r\n\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/citation/ContactInfo","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/ContactInfo.html ./OnlineResourceElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.citation.ContactInfo",a,d);return a});