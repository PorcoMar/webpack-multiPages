/*! porcoMar版权所有，翻版必究 */
webpackJsonp([1],{7:function(t,e,o){"use strict";(function(t){console.log("second.js");var e=o(1);e.requestData(e.brandDetailHost(),"/h5_api/queryByStaffId",{id:e.getQueryString("customerServiceId")},"post").then(function(e){console.log(e),"0"===e.code&&t("body").html(JSON.stringify(e.result))})}).call(e,o(0))}},[7]);
//# sourceMappingURL=second.bundle.ce9bb678a9aea852114e.js.map