(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"098a":function(t,e,n){"use strict";"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/sample/send-event",(function(){return Vue.extend(n("7b99").default)}))},"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[r]["apply"](console,e);var o=e.map((function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(a){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),s="";if(o.length>1){var u=o.pop();s=o.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=o[0];console[r](s)}n.r(e),n.d(e,"default",(function(){return r}))},"109f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{},globalStyle:{}};e.default=i},"22ca":function(t,e,n){"use strict";n("098a"),n("921b");var i=r(n("8bbf")),a=r(n("e6bc"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}i.default.config.productionTip=!1,a.default.mpType="app";var c=new i.default(s({},a.default));c.$mount()},"5a87":function(t,e,n){"use strict";n.r(e);var i=n("aac9"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"7b99":function(t,e,n){"use strict";n.r(e);var i=n("bb1a"),a=n("5a87");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},"805b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4");var e=weex.requireModule("dom");e.addRule("fontFace",{fontFamily:"uniicons",src:"url('/static/uni.ttf')"});var n=uni.requireNativePlugin("TestModule"),i=n.testSyncFunc({name:"unimp",age:1});t("log","TestModule >>>>>>>>>>>>>>>>>: "+JSON.stringify(i)," at App.vue:18")},onShow:function(){t("log","App Show"," at App.vue:22")},onHide:function(){t("log","App Hide"," at App.vue:25")}};e.default=n}).call(this,n("0de9")["default"])},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-26720200326002",_inBundle:!1,_integrity:"sha512-SqBLYe4WLgejywVsjqhzDui4msF3UkmpYzYvs8B4AZuCLKfBZXh2pHO2BOfAGlI3sTok2ryMfM1nPKDxLUINOA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-26720200326002.tgz",_shasum:"d2f51a9669a057883f3552f6a0ea4a2a8a48ea9c",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"7b266e20fce9373ef0387b40ce15109e25e14d1d",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-26720200326002"}},"8bbf":function(t,e){t.exports=Vue},"921b":function(t,e,n){"use strict";var i=n("8189");function a(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function p(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var f=i.version,d="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",v=1800,g=300,_=10,y="__DC_STAT_UUID",m="__DC_UUID_VALUE";function b(){var t="";if("n"===O()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync(y)}catch(e){t=m}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(y,t)}catch(e){uni.setStorageSync(y,m)}}return t}var S=function(t){var e=Object.keys(t),n=e.sort(),i={},a="";for(var r in n)i[n[r]]=t[n[r]],a+=n[r]+"="+t[n[r]]+"&";return{sign:"",options:a.substr(0,a.length-1)}},D=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},k=function(){var t="";return"wx"!==O()&&"qq"!==O()||uni.canIUse("getAccountInfoSync")&&(t=uni.getAccountInfoSync().miniProgram.appId||""),t},T=function(){return"n"===O()?plus.runtime.version:""},q=function(){var t=O(),e="";return"n"===t&&(e=plus.runtime.channel),e},j=function(t){var e=O(),n="";return t||("wx"===e&&(n=uni.getLaunchOptionsSync().scene),n)},R="First__Visit__Time",N="Last__Visit__Time",P=function(){var t=uni.getStorageSync(R),e=0;return t?e=t:(e=w(),uni.setStorageSync(R,e),uni.removeStorageSync(N)),e},I=function(){var t=uni.getStorageSync(N),e=0;return e=t||"",uni.setStorageSync(N,w()),e},E="__page__residence__time",A=0,$=0,C=function(){return A=w(),"n"===O()&&uni.setStorageSync(E,w()),A},x=function(){return $=w(),"n"===O()&&(A=uni.getStorageSync(E)),$-A},M="Total__Visit__Count",L=function(){var t=uni.getStorageSync(M),e=1;return t&&(e=t,e++),uni.setStorageSync(M,e),e},U=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},B=0,H=0,J=function(){var t=(new Date).getTime();return B=t,H=0,t},V=function(){var t=(new Date).getTime();return H=t,t},F=function(t){var e=0;if(0!==B&&(e=H-B),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>g;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>v;return{residenceTime:e,overtime:i}}return{residenceTime:e}},G=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===O()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},z=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,a=t._query,r=a&&"{}"!==JSON.stringify(a)?"?"+JSON.stringify(a):"";return t._query="","bd"===O()?i.$mp&&i.$mp.page.is+r:i.$scope&&i.$scope.route+r||i.$mp&&i.$mp.page.route+r},K=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},W=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},X=n("109f").default,Y=n("a36c").default||n("a36c"),Z=uni.getSystemInfoSync(),Q=function(){function t(){c(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:b(),ut:O(),mpn:k(),ak:Y.appid,usv:f,v:T(),ch:q(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Z.platform?"a":"i",brand:Z.brand||"",md:Z.model,sv:Z.system.replace(/(Android|iOS)\s/,""),mpsdk:Z.SDKVersion||"",mpv:Z.version||"",lang:Z.language,pr:Z.pixelRatio,ww:Z.windowWidth,wh:Z.windowHeight,sw:Z.screenWidth,sh:Z.screenHeight}}return p(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){V();var t=F("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,V();var n=F();J();var i=z(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=z(this),e=G();if(this._navigationBarTitle.config=X&&X.pages[e]&&X.pages[e].titleNView&&X.pages[e].titleNView.titleText||X&&X.pages[e]&&X.pages[e].navigationBarTitleText||"",this.__licationShow)return J(),this.__licationShow=!1,void(this._lastPageRoute=t);V(),this._lastPageRoute=t;var n=F("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}J()}},{key:"_pageHide",value:function(){if(!this.__licationHide){V();var t=F("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=j(t.scene),this.statData.fvts=P(),this.statData.lvts=I(),this.statData.tvc=L(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,a=void 0===i?"":i,r=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:r,ch:this.statData.ch,e_n:n,e_v:"object"===typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,(function(e){t.statData.v=e.version||"",t.getNetworkInfo()}))}},{key:"getLocation",value:function(){var t=this;Y.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var n=this,i=w(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var r=this._reportingRequestData;if("n"===O()&&(r=uni.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===O()&&uni.setStorageSync("__UNI__STAT__DATA",r),!(x()<_)||e){var o=this._reportingRequestData;"n"===O()&&(o=uni.getStorageSync("__UNI__STAT__DATA")),C();var s=[],u=[],c=[],l=function(t){var e=o[t];e.forEach((function(e){var n=D(e);0===t?s.push(n):3===t?c.push(n):u.push(n)}))};for(var p in o)l(p);s.push.apply(s,u.concat(c));var d={usv:f,t:i,requests:JSON.stringify(s)};this._reportingRequestData={},"n"===O()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(d):setTimeout((function(){n._sendRequest(d)}),200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:d,method:"POST",data:t,success:function(){},fail:function(n){++e._retry<3&&setTimeout((function(){e._sendRequest(t)}),1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=S(U(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){W(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}(),tt=function(t){function e(){var t;return c(this,e),t=a(this,o(e).call(this)),t.instance=null,"function"===typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return s(e,t),p(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),p(e,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,C(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,K(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,K(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),e}(Q),et=tt.getInstance(),nt=!1,it={onLaunch:function(t){et.report(t,this)},onReady:function(){et.ready(this)},onLoad:function(t){if(et.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return et.interceptShare(!1),e.call(this,t)}}},onShow:function(){nt=!1,et.show(this)},onHide:function(){nt=!0,et.hide(this)},onUnload:function(){nt?nt=!1:et.hide(this)},onError:function(t){et.error(t)}};function at(){var t=n("8bbf");(t.default||t).mixin(it),uni.report=function(t,e){et.sendEvent(t,e)}}at()},a36c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__CBDCE04"};e.default=i},aac9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{nativeMsg:""}},onLoad:function(){var e=this;uni.onNativeEventReceive((function(n,i){t("log","接收到宿主App消息："+n+i," at pages/sample/send-event.vue:17"),e.nativeMsg="接收到宿主App消息 event："+n+" data: "+i}))},methods:{sendEvent:function(){var t=this;uni.sendNativeEvent("unimp-event",{msg:"unimp message!!!"},(function(e){t.nativeMsg="宿主App回传的数据："+e}))}}};e.default=n}).call(this,n("0de9")["default"])},bb1a:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("button",{attrs:{_i:1},on:{click:t.sendEvent}}),n("text",[t._v(t._$s(2,"t0-0",t._s(t.nativeMsg)))])])},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},d38c:function(t,e,n){"use strict";n.r(e);var i=n("805b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e6bc:function(t,e,n){"use strict";n.r(e);var i=n("d38c");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var r,o,s,u,c=n("f0c5"),l=Object(c["a"])(i["default"],r,o,!1,null,null,null,!1,s,u);e["default"]=l.exports},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,a,r,o,s,u,c){var l,p="function"===typeof t?t.options:t;if(u){p.components||(p.components={});var f=Object.prototype.hasOwnProperty;for(var d in u)f.call(u,d)&&!f.call(p.components,d)&&(p.components[d]=u[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},p._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(p.functional){p._injectStyles=l;var h=p.render;p.render=function(t,e){return l.call(e),h(t,e)}}else{var v=p.beforeCreate;p.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:p}}n.d(e,"a",(function(){return i}))}},[["22ca","app-config"]]]);