var self = require('sdk/self');

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: [data.url("addURLdivToTop.js"), data.url("addClassToInputFields.js"), data.url("underscore-min.js"), data.url("gamepad-mod.js"), data.url("daisywheel.min.js"), data.url("gamepad_navigator.user.js")],
  contentScriptWhen: "end",
  contentStyleFile: data.url("css/daisywheel.min.css"),
  contentStyle: "a:focus { background-color: #ff0; !important }"
});
