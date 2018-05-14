!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueBarousel",[],e):"object"==typeof exports?exports.VueBarousel=e():t.VueBarousel=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",A.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+v+'~="'+t.id+'"]');if(r){if(p)return h;r.parentNode.removeChild(r)}if(m){var i=d++;r=f||(f=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),g.ssrId&&t.setAttribute(v,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(7),l={},A=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,p=!1,h=function(){},g=null,v="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){p=n,g=o||{};var i=u(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=l[a.id];s.refs--,n.push(s)}e?(i=u(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";var r=n(9);n.n(r);e.a={name:"Barousel",data:function(){return{current:0,domList:null,timer:null}},props:{list:{required:!0},width:{default:800},height:{default:300},imgType:{default:"full"},autoBegin:{default:!0},mask:{default:!0},interval:{default:5e3},tab:{default:!0},arrow:{default:!0},color:{default:"rgb(248, 85, 85)"}},computed:{containerStyle:function(){return{width:this.width+"px",height:this.height+"px",perspective:this.width+"px",backgroundSize:"full"==this.imgType?"100% 100%":this.imgType}}},mounted:function(){this.domList=this.$refs.bc.querySelectorAll("figure"),this.run()},methods:{setClass:function(t){var e=this.current===this.list.length-1?0:this.current+1,n=0===this.current?this.list.length-1:this.current-1;switch(t){case this.current:return"now";case e:return"next";case n:return"prev";default:return""}},setBG:function(t){return{backgroundImage:"url("+t+")"}},setTab:function(t){return t===this.current?{backgroundColor:this.color}:{backgroundColor:"#ccc"}},run:function(){var t=this;this.pause(),this.autoBegin&&(this.timer=setInterval(function(){t.nextItem()},this.interval))},pause:function(){clearInterval(this.timer)},nextItem:function(){this.current=++this.current%this.list.length},prevItem:function(){this.current=0===this.current?this.list.length-1:this.current-1},callback:function(t){t===this.current&&this.$emit("barousel",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o={install:function(t){t.component("barousel",r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,n){"use strict";function r(t){n(5)}var o=n(2),i=n(11),a=n(8),s=r,c=a(o.a,i.a,!1,s,"data-v-11079898",null);e.a=c.exports},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("1eae74f1",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,'.borousel_container[data-v-11079898]{text-align:center;padding:10px 0;position:relative}.borousel_container .context[data-v-11079898]{position:relative;width:100%;height:calc(100% - 20px);left:0;top:0;margin:0;padding:0;background-size:inherit}.borousel_container .context figure[data-v-11079898]{position:absolute;margin:0;padding:0;top:0;left:50%;width:65%;height:100%;transition:all .5s ease-in-out;background-color:#fff;background-repeat:no-repeat;background-position:50%;background-size:inherit;transform:translate3d(-50%,0,-80px);z-index:1}.borousel_container .context figure[data-v-11079898]:before{position:absolute;content:"";width:100%;height:100%;top:0;left:0;background-color:transparent;transition-delay:.2s!important;transition:all .7s}.borousel_container .context figure.now[data-v-11079898]{transform:translate3d(-50%,0,0);cursor:pointer;z-index:100}.borousel_container .context figure.prev[data-v-11079898]{transform:translate3d(-75%,0,-40px);z-index:99}.borousel_container .context figure.next[data-v-11079898]{transform:translate3d(-25%,0,-40px);z-index:98}.borousel_container .context i[data-v-11079898]{width:17.5%;display:none;position:absolute;font-size:24px;top:50%;color:hsla(0,0%,100%,.38);text-shadow:0 0 24px rgba(0,0,0,.18);cursor:pointer;z-index:101}.borousel_container .context i[data-v-11079898]:first-child{left:0}.borousel_container .context i[data-v-11079898]:last-child{right:0}.borousel_container .context i[data-v-11079898]:hover{color:hsla(0,0%,100%,.8)}.borousel_container .context:hover i[data-v-11079898]{display:block}.borousel_container .context.mask figure.next[data-v-11079898]:before,.borousel_container .context.mask figure.prev[data-v-11079898]:before{background-color:rgba(0,0,0,.5)}.borousel_container .tab[data-v-11079898]{width:100%;height:20px;z-index:100}.borousel_container .tab span[data-v-11079898]{display:inline-block;width:20px;height:4px;margin:1px 5px;background-color:#ccc;cursor:pointer}',""])},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],c=i[2],u=i[3],l={id:t+":"+o,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,i){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u="function"==typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId=o);var l;if(i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):r&&(l=r),l){var A=u.functional,f=A?u.render:u.beforeCreate;A?(u._injectStyles=l,u.render=function(t,e){return l.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:u}}},function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(1)("477862b7",r,!0,{})},function(t,e,n){e=t.exports=n(0)(!1),e.push([t.i,'@font-face{font-family:iconfont;src:url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAVAAAsAAAAAB9QAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZW7kgRY21hcAAAAYAAAABmAAABnM7+amhnbHlmAAAB6AAAAU4AAAGETZmiVGhlYWQAAAM4AAAALwAAADYRVnI7aGhlYQAAA2gAAAAcAAAAJAfeA4VobXR4AAADhAAAABAAAAAQD+kAAGxvY2EAAAOUAAAACgAAAAoBOACcbWF4cAAAA6AAAAAfAAAAIAETAF1uYW1lAAADwAAAAUUAAAJtPlT+fXBvc3QAAAUIAAAANQAAAFLIdFLIeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/sU4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDxTZW7438AQw9zA0AAUZgTJAQAmwQyTeJzFkMENwCAIRT9iG9N0C+Otx6YD9dQRnJg1LKAXJ/CbJ/BDxABgA8DKpUSAPhBMr7rkPuNwP+LROukJGqtkKa1NmYm8I3kW7GXasUy0bvSs0+97VLbvOtAvSu7YXqV0wD+5HxCTAAB4nHXPvU7CUADF8Xtu7S1FKHJbetsCtlDhYsAmYoUQIh+Ji8bBxMnR0UEHFxYHFhMHYtzcjYkvweDGcxB9jiohrJ6c+Zf8iUrI71KZKw4xSYMcklNySQhYE1WDllGRcUSbKFTUgrAMRYayooXVSDmBqDLLbnfiumAay8HALo4q7Y6MqMRxPKB9tO0y4Ba9K14rceUVaUfuPiXn9B0FPyzlBgfJWWtotQMzNclw7nI+SzFVTVG6lTNwJ2xd1dMs+VBzXmHu71MfGVd6F9fZoMhvnuP7ck3owHQKsxgYn8O8l1/90bNN7mo72ZTjZcM9C5OfbcfMlOvfZDWsWr/oUhkRTohqiwFiqWPVIJkGZgl6a5X8hkgW6ImGX7KSFyFaJmhzLNBHX4ybFGYyc0bOxlKCjcW0CHFXRz3udG0B29LwtrbQSxZrCw//Wn95oDyyAAB4nGNgZGBgAOIN11q+xfPbfGXgZmEAgevS0+UR9P8DLAzMDkAuBwMTSBQAOiQKEQB4nGNgZGBgbvjfwBDDwgACQJKRARWwAABHCgJtBAAAAAPpAAAEAAAABAAAAAAAAAAAdgCcAMIAAHicY2BkYGBgYQhkYGUAASYg5gJCBob/YD4DABESAXEAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAhZGJkZmRhZGVgbFCIDM5Py8eiEoyUuNzUtNKBJEFijLTM0oYGAAk/A5OAAAA") format("woff")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-icon_on_the_left:before{content:"\\E623"}.icon-icon_on_the_right:before{content:"\\E625"}',""])},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bc",staticClass:"borousel_container",style:t.containerStyle,on:{mouseover:function(e){t.pause()},mouseout:function(e){t.run()}}},[n("div",{staticClass:"context",class:t.mask?"mask":""},[t._l(t.list,function(e,r){return n("figure",{key:r,class:t.setClass(r),style:t.setBG(e.src),attrs:{title:e.title},on:{click:function(e){t.callback(r)}}})}),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.arrow,expression:"arrow"}],staticClass:"iconfont icon-icon_on_the_left",on:{click:function(e){t.prevItem()}}}),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.arrow,expression:"arrow"}],staticClass:"iconfont icon-icon_on_the_right",on:{click:function(e){t.nextItem()}}})],2),t._v(" "),t.tab?n("div",{staticClass:"tab"},t._l(t.list,function(e,r){return n("span",{key:r,style:t.setTab(r),on:{mouseover:function(e){t.current=r}}})})):t._e()])},o=[],i={render:r,staticRenderFns:o};e.a=i}])});
//# sourceMappingURL=vue-barousel.js.map