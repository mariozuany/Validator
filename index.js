!function(e,t){"object"==typeof exports&&exports?module.exports=t():"function"==typeof define&&define.amd?define(t()):e.Rules=t()}(this,function(){var e,t={};return e={get:function(){return t},add:function(e,n){return e in t?void console.log("Rules.add::exception","Duplicated method",e):void(t[e]=n)},add_all:function(e){t=e},test:function(e,n,i){return n in t?t[n].call(null,e,i):(console.log("Rules.test::exception","There is no method",n),!1)},validate:function(e,t,n){var i=!0,r=this;return $.each(t.rules,function(t,i){r.test(e.element,t,i)||(e.invalid_rules[t]=i,e.is_valid=!1,n?n.call(null,e,t):null)}),i}}}),define("validator.rules",function(){}),function(e,t){"object"==typeof exports&&exports?module.exports=t():"function"==typeof define&&define.amd?define(t()):e.Messages=t()}(this,function(){var e,t;return t={"default":"No message defined for: "},e={add:function(e,n){t[e]=n},add_all:function(e){t=e},write:function(e,n){return t[e]?t[e].call?t[e].call(null,element):t[e]:t["default"]+e},write_all:function(e,t){var n=this;$.each(e.invalid_rules,function(i){var r;t.messages&&(r=t.messages[i])?e.messages.map[i]=r.call?r.call(null,e):r:e.messages.map[i]=n.write(i,e),e.messages.list.push(e.messages.map[i])})}}}),define("validator.messages",function(){}),function(e,t){"object"==typeof exports&&exports?module.exports=t():"function"==typeof define&&define.amd?define(t()):e.Plugins=t()}(this,function(){function e(e,t){$.each(a,function(){this.each_elements(e,t)})}function t(e,t,n){$.each(a,function(i){i in t&&a[i].initialize($(e),t[i],n)})}function n(e,n){$.each(e,function(e,n){t(e,n)})}function i(){return this.initialize=this.initialize||function(){},this.each_elements=this.each_elements||function(){},this}var r,a={};return r=i.apply({initialize:function(e,i,r){return r?t(r,i,e):n(i,e)},add:function(e,t){a[e]=i.apply(t)},get:function(e){return a[e]},each_elements:function(t,n){e(t,n)}})}),define("validator.plugins",function(){}),function(e,t){"object"==typeof exports&&exports?module.exports=t(require("./src/validator.rules"),require("./src/validator.messages"),require("./src/validator.plugins")):"function"==typeof define&&define.amd?define("validator",["validator.rules","validator.messages","validator.plugins"],t):(e.Validator=t(e.Rules,e.Messages,e.Plugins),delete e.Rules,delete e.Messages,delete e.Plugins)}(this,function(e,t,n){function i(e,t){return{element:e.get?e.get(0):e,rules:$.extend({},t.rules),invalid_rules:{},messages:$.extend({map:{},list:[]},{map:t.messages}),is_valid:!0}}function r(r,a,s,l){var o=i(r,a);return e.validate(o,a,u(s)),s.list.length&&t.write_all(o,a),n.each_elements(o,a),o}function a(e,t){var n={list:[],map:{}};return $.each(e,l(t,n)),n}function s(e){return function(t,n){e(n)}}function l(e,t){return function(n,i){$(n,e).each(o(i,t,e))}}function o(e,t,n){return function(i,a){r(a,e,t,n)}}function u(e){return function(t,n){e.list.push(t),e.map[n]=e.map[n]||[],e.map[n].push(t)}}var d={_class:function(e){function t(e,t){t?t(o):null}var i,l={},o=this;i=e&&e.holder&&e.holder.length?e.holder:$("<div />"),i.on("validator.instance",t),i.on("validator:instance",t),this.test=function(e){var t={rules:{}};return e=e.get?e:$(e),$.each(l,function(n,i){(e.is(n)||e.hasClass(n))&&$.extend(t.rules,i.rules)}),r(e,{rules:t.rules},{list:[],map:{}})},this.get=function(e){return l[e]},this.on=function(e,t){i.on(e,s(t))},this.add=function(e,t){return l[e]=t,n.initialize(i,t,e),i.trigger("validator.add",i,t,e),i.trigger("validator:add",i,t,e),this},this.add_all=function(e){return l=e,n.initialize(i,e),i.trigger("validator.add",i,e),i.trigger("validator:add",i,e),this},this.remove=function(e){delete l[e],i.trigger("validator.remove",e),i.trigger("validator:remove",e)},this.validate=function(){var e=a(l,i);return e.list.length?(i.trigger("validator.error",e),i.trigger("validator:error",e)):(i.trigger("validator.success"),i.trigger("validator:success")),!e.list.length},this.is_valid=function(){return!a(l,i).list.length}},add_messages:function(e){t.add_all(e)},add_rule:function(t,n){e.add(t,n)},internal:function(i){return{Rule:e,Message:t,Plugin:n}[i]},create:function(e){return new this._class(e)}};return d});