!function e(t,n,o){function r(c,i){if(!n[c]){if(!t[c]){var f="function"==typeof require&&require;if(!i&&f)return f(c,!0);if(u)return u(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=n[c]={exports:{}};t[c][0].call(l.exports,function(e){var n=t[c][1][e];return r(n?n:e)},l,l.exports,e,t,n,o)}return n[c].exports}for(var u="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=e("../../common/Duck"),a=o(f),l=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),i(t,[{key:"quack",value:function(){}},{key:"fly",value:function(){}},{key:"display",value:function(){console.log("DecoyDuck show")}}]),t}(a["default"]);n["default"]=l},{"../../common/Duck":3}],2:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=e("../../common/MallardDuck"),u=o(r),c=e("../../common/RedheadDuck"),i=o(c),f=e("../../common/RubberDuck"),a=o(f),l=e("./DecoyDuck"),s=o(l),p=new u["default"],y=new i["default"],b=new a["default"],d=new s["default"];p.quack(),p.swim(),p.fly(),p.display(),y.quack(),y.swim(),y.fly(),y.display(),b.quack(),b.swim(),b.fly(),b.display(),d.quack(),d.swim(),d.fly(),d.display()},{"../../common/MallardDuck":4,"../../common/RedheadDuck":5,"../../common/RubberDuck":6,"./DecoyDuck":1}],3:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(){function e(){o(this,e)}return r(e,[{key:"quack",value:function(){console.log("Quack!")}},{key:"swim",value:function(){console.log("Chop!")}},{key:"fly",value:function(){console.log("Wings!")}},{key:"display",value:function(){throw new Error("This method must be overwritten!")}}]),e}();n["default"]=u},{}],4:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=e("./Duck"),a=o(f),l=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),i(t,[{key:"display",value:function(){console.log("MallardDuck show")}}]),t}(a["default"]);n["default"]=l},{"./Duck":3}],5:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=e("./Duck"),a=o(f),l=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),i(t,[{key:"display",value:function(){console.log("RedheadDuck show")}}]),t}(a["default"]);n["default"]=l},{"./Duck":3}],6:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=e("./Duck"),a=o(f),l=function(e){function t(){return r(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return c(t,e),i(t,[{key:"quack",value:function(){console.log("Squeak!")}},{key:"fly",value:function(){}},{key:"display",value:function(){console.log("RubbberDuck show")}}]),t}(a["default"]);n["default"]=l},{"./Duck":3}]},{},[2]);
//# sourceMappingURL=main.js.map