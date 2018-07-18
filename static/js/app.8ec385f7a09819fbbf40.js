webpackJsonp([1],{"0ZYP":function(e,t,n){"use strict";var s=n("7YgM"),r=n.n(s),o=n("OEdS"),i=n.n(o),a=n("tYtk"),u=n.n(a),l=n("8sfF"),c=n.n(l),p=n("4fNK"),d=n("X157"),f=(n.n(d),n("OjZm")),v=n("Bzn5");n.n(v);t.a={name:"VDocs",components:{VA:f.a,VShowAt:d.VShowAt,VHideAt:d.VHideAt,VStepper:v.VStepper,VBreakpoint:d.VBreakpoint},data:function(){return{pkg:r.a,assets:{octocat:c.a},markdowns:{props:n("BAuv"),install:n("yypm"),examples:{default:{script:n("LDf2"),template:n("yP6i")},programmatic:{template:n("3wBu")},vuex:{meta:n("xC3h"),component:{script:n("eVP5"),template:n("BVlo")}}}},model:{steps:3,step:void 0,breakpoint:new d.Model},flags:{debug:!1,random:!1,persist:!0,production:!0}}},created:function(){this.vhChromeFix=void 0},mounted:function(){window.setTimeout(i.a.highlightAll),this.vhChromeFix=new p.a([{selector:".js-vh-fix",vh:100}])},destroyed:function(){this.vhChromeFix.destroy()},computed:{einyLorem:function(){var e="\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      In euismod elementum ante ac volutpat. Suspendisse euismod est enim,\n      sit amet vehicula neque feugiat id. Nunc imperdiet convallis placerat.\n      Sed accumsan mauris et magna facilisis gravida. Suspendisse et justo volutpat,\n      congue libero id, vehicula sem. Maecenas nec ex imperdiet, bibendum justo vel,\n      feugiat velit. Vivamus eu maximus mi. Fusce ac metus magna.\n      ";return this.model.breakpoint.noMatch?u()(e,{length:200}):e},minyLorem:function(){var e="\n      Nunc a nunc at sapien posuere consequat. Vestibulum sed maximus felis.\n      Nulla a diam sit amet nulla malesuada commodo.\n      Fusce ullamcorper tortor sed ipsum ornare suscipit eget at nulla.\n      Donec facilisis elit purus, eu tempus nunc feugiat sollicitudin.\n      Mauris ipsum ligula, faucibus sed libero vel, dignissim posuere mauris.\n      Quisque ipsum tellus, sodales ac ante sed, consequat efficitur metus.\n      Pellentesque euismod viverra orci.\n      ";return this.model.breakpoint.noMatch?u()(e,{length:190}):e},moeLorem:function(){var e="\n      Aenean vel arcu mollis, feugiat ipsum vitae, sollicitudin nibh. Integer fermentum,\n      dui ut laoreet faucibus, nibh elit ultricies ipsum, sit amet placerat libero nisl id enim.\n      Quisque quis arcu nisi. Etiam interdum luctus neque, non tincidunt metus mollis vel.\n      In nec tellus non nisl commodo aliquet a a ligula. Donec semper massa nisl,\n      a tristique lectus ultrices ut. Donec ac ultricies lectus, a semper nibh. Integer tempor,\n      purus ac convallis semper.\n      ";return this.model.breakpoint.noMatch?u()(e,{length:210}):e}}}},"0cHP":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs"},[n("v-breakpoint",{model:{value:e.model.breakpoint,callback:function(t){e.$set(e.model,"breakpoint",t)},expression:"model.breakpoint"}}),e._v(" "),n("div",{staticClass:"docs-container docs-container--has-jumbotron docs-100vh js-vh-fix"},[n("div",{staticClass:"container docs-jumbotron"},[n("h1",{staticClass:"docs-h1 mb-3"},[e._v("\n        Vue-Stepper "),n("sup",{staticClass:"docs-version"},[e._v(e._s(e.pkg.version))])]),e._v(" "),n("p",{staticClass:"docs-tagline mb-5"},[e._v("\n        Fully customizable\n        Stepper component "),n("br",{directives:[{name:"show",rawName:"v-show",value:e.model.breakpoint.noMatch,expression:"model.breakpoint.noMatch"}]}),e._v(" with Vuex\n        support and Zero dependencies.\n      ")]),e._v(" "),n("v-stepper",{ref:"stepper",staticClass:"docs-stepper mb-3",attrs:{steps:e.model.steps,debug:e.flags.debug,linear:e.flags.linear,persist:e.flags.persist},model:{value:e.model.step,callback:function(t){e.$set(e.model,"step",t)},expression:"model.step"}},[n("template",{slot:"step-1"},[e._v(" Eeny ")]),e._v(" "),n("template",{slot:"step-2"},[e._v(" Miny ")]),e._v(" "),n("template",{slot:"step-3"},[e._v(" Moe ")])],2),e._v(" "),1===e.model.step?[n("p",{staticClass:"docs-lorem"},[e._v("\n          "+e._s(e.einyLorem)+"\n        ")])]:e._e(),e._v(" "),2===e.model.step?[n("p",{staticClass:"docs-lorem"},[e._v("\n          "+e._s(e.minyLorem)+"\n        ")])]:e._e(),e._v(" "),3===e.model.step?[n("p",{staticClass:"docs-lorem"},[e._v("\n          "+e._s(e.moeLorem)+"\n        ")])]:e._e(),e._v(" "),n("v-hide-at",{attrs:{"no-match":""}},[n("div",{staticClass:"docs-button-group mt-3"},[n("button",{staticClass:"btn docs-button",on:{click:function(t){e.$refs.stepper.previous()}}},[e._v("Previous")]),e._v(" "),n("button",{staticClass:"btn docs-button",on:{click:function(t){e.$refs.stepper.next()}}},[e._v("Next")]),e._v(" "),n("button",{staticClass:"btn docs-button",on:{click:function(t){e.$refs.stepper.reset()}}},[e._v("Reset")])])]),e._v(" "),n("v-a",{staticClass:"docs-fixed-anchor docs-c-pointer",attrs:{"scroll-to":e.$refs.docs}},[e._v("\n        Install, Examples & Documentation\n      ")]),e._v(" "),n("div",{staticClass:"docs-github-star"},[n("a",{staticClass:"github-button",attrs:{href:e.flags.production&&e.pkg.repository.url,"data-icon":"octicon-star","data-show-count":"true","aria-label":"Star adi518/vue-stepper-component on GitHub"}},[e._v("\n          Star\n        ")])])],2)]),e._v(" "),n("div",{ref:"docs",staticClass:"docs-container docs-min-100vh"},[n("div",{staticClass:"container docs-clearfix"},[n("h4",{ref:"install",staticClass:"mt-4"},[n("v-a",{attrs:{"scroll-to":e.$refs.install}},[e._v("Install")])],1),e._v(" "),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.install)}}),e._v(" "),n("h4",{ref:"usage"},[n("v-a",{attrs:{"scroll-to":e.$refs.usage}},[e._v("Usage")])],1),e._v(" "),e._m(0),e._v(" "),n("h5",[e._v("Template")]),e._v(" "),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.examples.default.template)}}),e._v(" "),n("h5",[e._v("Script")]),e._v(" "),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.examples.default.script)}}),e._v(" "),n("h4",{ref:"vuex"},[n("v-a",{attrs:{"scroll-to":e.$refs.vuex}},[e._v("Vuex")])],1),e._v(" "),n("p",[e._v("A common practice for managing your Stepper state, is through a Store.")]),e._v(" "),n("h5",[e._v("Store")]),e._v(" "),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.examples.vuex.meta)}}),e._v(" "),n("h5",[e._v("Template")]),e._v(" "),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.examples.vuex.component.template)}}),e._v(" "),n("h5",[e._v("Script")]),e._v(" "),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.examples.vuex.component.script)}}),e._v(" "),n("h4",{ref:"programmatic"},[n("v-a",{attrs:{"scroll-to":e.$refs.programmatic}},[e._v("Programmatic")])],1),e._v(" "),n("p",[e._v("\n        Start off by assigning special\n        "),n("code",[e._v("Vue")]),e._v(" property\n        "),n("code",[n("v-a",{attrs:{href:"https://vuejs.org/v2/api/#ref"}},[e._v("ref")])],1),e._v(" to the\n        "),n("code",[e._v("v-stepper")]),e._v(" component. Then, assign an API method to an Event handler\n        of your choice. The following example is similar to the Demo above, where we assign\n        "),n("code",[e._v("previous")]),e._v(", "),n("code",[e._v("next")]),e._v(" and "),n("code",[e._v("reset")]),e._v(" to the\n        "),n("code",[e._v("click")]),e._v(" event of a button element.\n      ")]),e._v(" "),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.examples.programmatic.template)}}),e._v(" "),n("h4",{ref:"api-props"},[n("v-a",{attrs:{"scroll-to":e.$refs["api-props"]}},[e._v("API Props")])],1),e._v(" "),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.props)}}),e._v(" "),n("h4",{ref:"support"},[n("v-a",{attrs:{"scroll-to":e.$refs.support}},[e._v("Support")])],1),e._v(" "),n("p",[e._v("\n        Please open an\n        "),n("v-a",{attrs:{href:e.pkg.bugs.url}},[e._v("issue")]),e._v(" for support.\n      ")],1),e._v(" "),n("h4",{ref:"license",staticClass:"mt-5"},[n("v-a",{attrs:{"scroll-to":e.$refs.license}},[e._v("License")])],1),e._v(" "),n("p",[e._v("\n        Copyright (c) 2018\n        "),n("v-a",{attrs:{href:"https://github.com/adi518"}},[e._v("\n          "+e._s(e.pkg.author)+"\n        ")]),e._v("\n        by\n        "),n("v-a",{attrs:{href:"https://opensource.org/licenses/MIT"}},[e._v("\n          "+e._s(e.pkg.license)+"\n        ")])],1)])]),e._v(" "),n("footer",{staticClass:"docs-footer docs-clearfix"},[n("p",{staticClass:"docs-credit mt-2 mb-2"},[e._v("\n      Made with ❤️ by\n      "),n("v-a",{attrs:{href:"https://github.com/adi518"}},[e._v("\n        Adi Sahar\n      ")])],1)]),e._v(" "),n("v-a",{staticClass:"docs-github",attrs:{href:e.pkg.repository.url}},[n("img",{attrs:{src:e.assets.octocat,alt:"Github"}})])],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n        To use the component in your templates, simply import and register with your component.\n        To control the Stepper state, we use the "),n("code",[e._v("v-model")]),e._v(" directive, just like on any\n        other input element with two-way binding. The Stepper acts as a group of radio-buttons.\n      ")])}],o={render:s,staticRenderFns:r};t.a=o},"3wBu":function(e,t){e.exports='<pre><code class="lang-html">&lt;v-stepper ref=&quot;stepper&quot; :steps=&quot;steps&quot; v-model=&quot;step&quot;&gt;&lt;/v-stepper&gt;\n\n&lt;!-- Stepper Controls --&gt;\n&lt;button type=&quot;button&quot; @click=&quot;$refs.stepper.previous()&quot;&gt;Previous&lt;/button&gt;\n&lt;button type=&quot;button&quot; @click=&quot;$refs.stepper.next()&quot;&gt;Next&lt;/button&gt;\n&lt;button type=&quot;button&quot; @click=&quot;$refs.stepper.reset()&quot;&gt;Reset&lt;/button&gt;\n</code></pre>\n'},"4fNK":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var s=n("Zrlr"),r=n.n(s),o=n("wxAW"),i=n.n(o),a=function(){function e(t){var n=this;r()(this,e),this.selectors=t;var s=navigator.userAgent.toLowerCase(),o=/chrome/.test(s)&&/android/.test(s),i=/crios/.test(s);(o||i)&&(this.getElements(this.selectors),this.fixAll(),this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.onResize=function(){n.windowWidth=window.innerWidth,n.windowHeight=window.innerHeight,n.fixAll()},window.addEventListener("resize",this.onResize,!1))}return i()(e,[{key:"getElements",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.elements=[],e=[].concat(e);for(var t=0;t<e.length;t++)for(var n=e[t].selector,s=document.querySelectorAll(n),r=0;r<s.length;r++){var o=e[t].offset||0;this.elements.push({domElement:s[r],vh:e[t].vh,offset:o})}}},{key:"fixAll",value:function(){for(var e=0;e<this.elements.length;e++){var t=this.elements[e],n=t.offset;t.domElement.style.height=window.innerHeight*(t.vh/100)-n+"px"}}},{key:"destroy",value:function(){window.removeEventListener("resize",this.onResize)}}]),e}()},"7YgM":function(e,t){e.exports={name:"vue-stepper-component",version:"1.0.0",description:"A Vue.js Stepper component",author:"Adi Sahar",main:"dist",private:!0,scripts:{dev:"node build/dev-server.js",start:"npm run dev",build:"node build/build.js",unit:"cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",e2e:"node test/e2e/runner.js",test:"npm run unit && npm run e2e",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs",predeploy:"npm run build",deploy:"node build/deploy.js"},repository:{type:"git",url:"https://github.com/adi518/vue-stepper-component"},bugs:{url:"https://github.com/adi518/vue-stepper-component/issues"},dependencies:{bootstrap:"^4.1.2","lodash.truncate":"^4.4.2",prismjs:"^1.15.0",vue:"^2.5.16","vue-breakpoint-component":"^1.0.3","vue-router":"^2.7.0","vue-switch":"^1.3.0"},devDependencies:{autoprefixer:"^7.1.2","babel-core":"^6.22.1","babel-eslint":"^7.1.1","babel-loader":"^7.1.1","babel-plugin-istanbul":"^4.1.1","babel-plugin-transform-runtime":"^6.22.0","babel-preset-env":"^1.3.2","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0",chai:"^3.5.0",chalk:"^2.0.1",chromedriver:"^2.27.2","connect-history-api-fallback":"^1.3.0","copy-webpack-plugin":"^4.0.1","cross-env":"^5.0.1","cross-spawn":"^5.0.1","css-loader":"^0.28.0",cssnano:"^3.10.0",ejs:"^2.5.7",eslint:"^3.19.0","eslint-config-standard":"^6.2.1","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^1.7.1","eslint-plugin-html":"^3.0.0","eslint-plugin-promise":"^3.4.0","eslint-plugin-standard":"^2.0.1","eventsource-polyfill":"^0.9.6",express:"^4.14.1","extract-text-webpack-plugin":"^2.0.0","file-loader":"^0.11.1","friendly-errors-webpack-plugin":"^1.1.3","gh-pages":"^1.2.0","html-loader":"^0.5.1","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.3","inject-loader":"^3.0.0",karma:"^1.4.1","karma-coverage":"^1.1.1","karma-mocha":"^1.3.0","karma-phantomjs-launcher":"^1.0.2","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.3.1","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.31","karma-webpack":"^2.0.2","markdown-loader":"^2.0.2",marked:"^0.4.0",mocha:"^3.2.0",nightwatch:"^0.9.12","node-sass":"^4.9.0",opn:"^5.1.0","optimize-css-assets-webpack-plugin":"^2.0.0",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.14",rimraf:"^2.6.0","sass-loader":"^6.0.7","selenium-server":"^3.0.1",semver:"^5.3.0",shelljs:"^0.7.6",sinon:"^2.1.0","sinon-chai":"^2.8.0","url-loader":"^0.5.8","vue-loader":"^13.0.4","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.5.16",webpack:"^2.6.1","webpack-bundle-analyzer":"^2.2.1","webpack-dev-middleware":"^1.10.0","webpack-hot-middleware":"^2.18.0","webpack-merge":"^4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},"8sfF":function(e,t,n){e.exports=n.p+"static/img/octocat.38fdb74.png"},BAuv:function(e,t){e.exports='<pre><code class="lang-js">/**\n * Contains the current step value. Very similar to a\n * `value` attribute on an input. In most cases, you&#39;ll want\n * to set this as a two-way binding, using the `v-model` directive.\n * @type {Number||undefined||null}\n */\nvalue: {\n  type: Number,\n  default: 1\n},\n\n/**\n * Contains the steps count.\n * @type {Number}\n */\nsteps: {\n  type: Number,\n  default: 0\n},\n\n/**\n * Sets up the Stepper in either\n * linear or random mode.\n * @type {Boolean}\n */\nlinear: {\n  type: Boolean,\n  default: true\n},\n\n/**\n * Sync state with storage?\n * @type {Boolean}\n */\npersist: {\n  type: Boolean,\n  default: false\n},\n\n/**\n * Which Storage API to use.\n * Should be used with `persist` prop.\n * @type {String}\n */\nstorekeeper: {\n  type: String,\n  default: &#39;localStorage&#39;,\n  validator(value) {\n    return [&#39;localStorage&#39;, &#39;sessionStorage&#39;].includes(value)\n  }\n},\n\n/**\n * Add/Remove a divider to/from each Step component.\n * @type {Boolean}\n */\nwithDivider: {\n  type: Boolean,\n  default: true\n},\n\n/**\n * Steps wrapper component.\n * @type {Object}\n */\nrootComponent: {\n  type: Object,\n  default: () =&gt; VStepperRoot\n},\n\n/**\n * Sets up debug mode, which reveals\n * the actual radio-button behind each step.\n * @type {Boolean}\n */\ndebug: {\n  type: Boolean,\n  default: false\n}\n</code></pre>\n'},BVlo:function(e,t){e.exports='<pre><code class="lang-html">&lt;v-stepper :steps=&quot;steps&quot; v-model=&quot;step&quot;&gt;&lt;/v-stepper&gt;\n\n&lt;!-- Change routes by step --&gt;\n&lt;router-view&gt;&lt;/router-view&gt;\n</code></pre>\n'},Bzn5:function(e,t,n){!function(t,n){e.exports=n()}(window,function(){return function(e){function t(s){if(n[s])return n[s].exports;var r=n[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(s,r,function(t){return e[t]}.bind(null,r));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=17)}([function(e,t,n){"use strict";function s(e,t,n,s,r,o,i,a){var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(e,t){return u.call(t),c(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,u):[u]}return{exports:e,options:l}}n.d(t,"a",function(){return s})},function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);t.default=r.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={name:"VStep",props:{index:{type:Number,default:0},name:{type:String,default:""},active:{type:Boolean,default:!1},visited:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},withDivider:{type:Boolean,default:!1},debug:{type:Boolean,default:!0}},data:function(){return{namespace:"v-step"}},computed:{id:function(){return"".concat(this.namespace,"-").concat(this._uid,"-").concat(this.index)},displayIndex:function(){return this.index+1},classes:function(){return{"is-active":this.active,"is-visited":this.visited,"is-disabled":this.disabled}},computedName:function(){return this.name||this.id},defaultSlot:function(){return this.$slots.default||this.$scopedSlots.default},api:function(){return{displayIndex:this.displayIndex,defaultSlot:this.defaultSlot}}},methods:{handleChange:function(){this.$emit("change",this.index)}},inheritAttrs:!1};t.default=s},function(e,t,n){var s=n(20);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals),(0,n(15).default)("2961f72e",s,!1,{})},function(e,t,n){"use strict";n.r(t);var s=n(5),r=n.n(s);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);t.default=r.a},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(13)),o=s(n(16)),i={name:"VStepper",components:{VStep:r.default},props:{value:{type:Number,default:1},steps:{type:Number,default:0},linear:{type:Boolean,default:!0},persist:{type:Boolean,default:!1},storekeeper:{type:String,default:"localStorage",validator:function(e){return["localStorage","sessionStorage"].includes(e)}},withDivider:{type:Boolean,default:!0},rootComponent:{type:Object,default:function(){return o.default}},debug:{type:Boolean,default:!1}},data:function(){return{namespace:"v-stepper",stepsArr:this.getMap(),index:this.toIndex(this.value)}},watch:{value:function(e){this.index=this.toIndex(e),this.persist&&this.setStorage()},index:{handler:function(e){this.$emit("input",this.toValue(e))},immediate:!0}},created:function(){if(this.persist){var e=this.getStorage();e?(this.stepsArr=e.stepsArr,this.index=e.index):this.setStorage()}},destroyed:function(){window[this.storekeeper].removeItem(this.id)},computed:{id:function(){return"".concat(this.namespace,"-").concat(this._uid)},lastIndex:function(){return this.stepsArr.length-1}},methods:{toValue:function(e){return e+1},toIndex:function(e){return e-1},doesStepExist:function(e){return!!this.stepsArr[e]},isIntermediateIndex:function(e){return e>0&&e<this.lastIndex},handleChange:function(e){var t=this,n=e===this.index+1,s=e===this.index-1,r=this.toIndex(this.value);this.linear?(n||s)&&(this.setStep(e,"active",!0),this.setStep(e,"visited",!1),this.setStep(e,"disabled",!1),this.setStep(r,"active",!1),this.setStep(r,"visited",!0),this.stepsArr.forEach(function(n){n.index>e&&t.setStep(n.index,"disabled",!0)}),this.$emit("input",this.toValue(e))):(this.setStep(r,"visited",!0),this.$emit("input",this.toValue(e)))},getMap:function(){var e=this;return Array.from(Array(this.steps),function(t,n){var s=0===n,r=n-1==0,o=!1;return e.linear&&(s||r||(o=!0)),{index:n,value:e.toValue(n),visited:!1,disabled:o}})},offset:function(e){var t=this.index+e;this.doesStepExist(t)&&this.handleChange(t)},next:function(){this.offset(1)},previous:function(){this.offset(-1)},reset:function(){this.stepsArr=this.getMap(),this.index=0,this.$emit("reset")},setStep:function(e,t,n){this.$set(this.stepsArr[e],t,n)},setStorage:function(){var e=this.index,t=this.stepsArr;window[this.storekeeper].setItem(this.id,JSON.stringify({index:e,stepsArr:t}))},getStorage:function(){return JSON.parse(window[this.storekeeper].getItem(this.id))}},inheritAttrs:!1};t.default=i},function(e,t,n){"use strict";n.r(t);var s=n(7),r=n.n(s);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);t.default=r.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={name:"VStepperRoot"}},function(e,t,n){var s=n(23);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals),(0,n(15).default)("6df4be32",s,!1,{})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=[],s={},r=0;r<t.length;r++){var o=t[r],i=o[0],a=o[1],u=o[2],l=o[3],c={id:e+":"+r,css:a,media:u,sourceMap:l};s[i]?s[i].parts.push(c):n.push(s[i]={id:i,parts:[c]})}return n}},function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["v-step",e.classes]},[n("input",{directives:[{name:"show",rawName:"v-show",value:e.debug,expression:"debug"}],staticClass:"input",attrs:{type:"radio",id:e.id,name:e.computedName},domProps:{checked:e.active},on:{change:e.handleChange}}),e._v(" "),n("label",{staticClass:"label",attrs:{for:e.id}},[n("span",{staticClass:"index"},[e._t("index",[e._v("\n        "+e._s(e.api.displayIndex)+"\n      ")],null,e.api)],2),e._v(" "),e.defaultSlot?n("span",{staticClass:"title"},[e._t("default",null,null,e.api)],2):e._e(),e._v(" "),e.withDivider?n("span",{staticClass:"divider"}):e._e()])])},r=[];s._withStripped=!0,n.d(t,"a",function(){return s}),n.d(t,"b",function(){return r})},function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-stepper"},[n(e.rootComponent,{tag:"component"},e._l(e.stepsArr,function(t,s){return n("v-step",{key:s,attrs:{name:e.id,debug:e.debug,index:s,visited:t.visited,disabled:t.disabled,"with-divider":e.withDivider,active:t.index===e.toIndex(e.value)},on:{change:e.handleChange},scopedSlots:e._u([{key:"index",fn:function(t){return[e._t("step-"+t.displayIndex+"-index",[e._v("\n          "+e._s(t.displayIndex)+"\n        ")],null,t)]}},{key:"default",fn:function(t){return[e._t("step-"+t.displayIndex,null,null,t)]}}])})}))],1)},r=[];s._withStripped=!0,n.d(t,"a",function(){return s}),n.d(t,"b",function(){return r})},function(e,t,n){"use strict";var s=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"v-stepper-root"},[this._t("default")],2)},r=[];s._withStripped=!0,n.d(t,"a",function(){return s}),n.d(t,"b",function(){return r})},function(e,t,n){"use strict";n.r(t);var s=n(10),r=n(1);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n(19);var i=n(0),a=Object(i.a)(r.default,s.a,s.b,!1,null,"1a92c248",null);a.options.__file="src\\components\\Step.vue",t.default=a.exports},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(s);return[n].concat(s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(s[o]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&s[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";function s(e,t,n,s){m=n,g=s||{};var o=l()(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var i=o[s];(a=p[i.id]).refs--,n.push(a)}for(t?r(o=l()(e,t)):o=[],s=0;s<n.length;s++){var a;if(0===(a=n[s]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete p[a.id]}}}}function r(e){for(var t=0;t<e.length;t++){var n=e[t],s=p[n.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](n.parts[r]);for(;r<n.parts.length;r++)s.parts.push(i(n.parts[r]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(i(n.parts[r]));p[n.id]={id:n.id,refs:1,parts:o}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,s=document.querySelector("style["+b+'~="'+e.id+'"]');if(s){if(m)return h;s.parentNode.removeChild(s)}if(_){var r=v++;s=f||(f=o()),t=a.bind(null,s,r,!1),n=a.bind(null,s,r,!0)}else s=o(),t=function(e,t){var n=t.css,s=t.media,r=t.sourceMap;if(s&&e.setAttribute("media",s),g.ssrId&&e.setAttribute(b,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,s),n=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else n()}}function a(e,t,n,s){var r=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}n.r(t),n.d(t,"default",function(){return s});var u=n(9),l=n.n(u),c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,v=0,m=!1,h=function(){},g=null,b="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";n.r(t);var s=n(12),r=n(6);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n(22);var i=n(0),a=Object(i.a)(r.default,s.a,s.b,!1,null,"5f0719f3",null);a.options.__file="src\\components\\StepperRoot.vue",t.default=a.exports},function(e,t,n){"use strict";(function(e){function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"VStep",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"VStepper",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"VStepperRoot",{enumerable:!0,get:function(){return a.default}}),t.default=t.Install=void 0;var r,o=s(n(13)),i=s(n(21)),a=s(n(16)),u={install:function(e){e.component(o.default.name,o.default),e.component(i.default.name,i.default),e.component(a.default.name,a.default)}};t.Install=u,"undefined"!=typeof window?r=window.Vue:void 0!==e&&(r=e.Vue),r&&r.use(u);var l=i.default;t.default=l}).call(this,n(18))},function(e,t,n){"use strict";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":s(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";var s=n(3);n.n(s).a},function(e,t,n){(e.exports=n(14)(!1)).push([e.i,"\n.v-step[data-v-1a92c248] {\n  flex: 1;\n  opacity: 0.55;\n  box-sizing: border-box;\n  transition: opacity 0.7s;\n}\n.v-step[data-v-1a92c248]:hover:not(.is-disabled) {\n    opacity: 0.85;\n}\n.v-step *[data-v-1a92c248],\n  .v-step *[data-v-1a92c248]::before,\n  .v-step *[data-v-1a92c248]::after {\n    box-sizing: inherit;\n}\n.v-step.is-active .label[data-v-1a92c248], .v-step.is-visited .label[data-v-1a92c248] {\n    cursor: pointer;\n}\n.v-step.is-active .index[data-v-1a92c248], .v-step.is-visited .index[data-v-1a92c248] {\n    color: #999999;\n}\n.v-step.is-active[data-v-1a92c248] {\n    opacity: 1;\n}\n.v-step.is-active .label .index[data-v-1a92c248] {\n      background-color: #ffffff;\n}\n.v-step.is-visited .index[data-v-1a92c248] {\n    background-color: #ffffff;\n}\n@media (max-width: 575px) {\n.v-step[data-v-1a92c248] {\n      margin-right: 0.5rem;\n}\n}\n.label[data-v-1a92c248] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.index[data-v-1a92c248] {\n  width: 3.5rem;\n  height: 3.5rem;\n  display: flex;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  border-radius: 50%;\n  margin-right: 0.5rem;\n  color: #ffffff;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 1px solid #f4f4f4;\n  box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);\n}\n.title[data-v-1a92c248] {\n  color: #ffffff;\n}\n.divider[data-v-1a92c248] {\n  width: 100%;\n  margin-left: 0.5rem;\n  border-bottom: 1px solid #ffffff;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n",""])},function(e,t,n){"use strict";n.r(t);var s=n(11),r=n(4);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);var i=n(0),a=Object(i.a)(r.default,s.a,s.b,!1,null,null,null);a.options.__file="src\\components\\Stepper.vue",t.default=a.exports},function(e,t,n){"use strict";var s=n(8);n.n(s).a},function(e,t,n){(e.exports=n(14)(!1)).push([e.i,"\n.v-stepper-root[data-v-5f0719f3] {\n  display: flex;\n  width: inherit;\n  user-select: none;\n  box-sizing: border-box;\n  justify-content: space-between;\n}\n.v-stepper-root *[data-v-5f0719f3],\n  .v-stepper-root *[data-v-5f0719f3]::before,\n  .v-stepper-root *[data-v-5f0719f3]::after {\n    box-sizing: inherit;\n}\n",""])}])})},LDf2:function(e,t){e.exports='<pre><code class="lang-js">import { VStepper } from &#39;vue-stepper-component&#39;\n\nexport default {\n  components: {\n    VStepper\n  },\n  data: () =&gt; ({ steps: 3, step: undefined })\n}\n</code></pre>\n'},LUyc:function(e,t){},M93x:function(e,t,n){"use strict";var s=n("xJD8"),r=n("PwEp"),o=n("VU/8"),i=o(s.a,r.a,!1,null,null,null);t.a=i.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),r=n("M93x"),o=n("YaEn");s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},OjZm:function(e,t,n){"use strict";var s=n("qxq2"),r=n("aL4v"),o=n("VU/8"),i=o(s.a,r.a,!1,null,null,null);t.a=i.exports},PVon:function(e,t,n){"use strict";function s(e){n("LUyc")}var r=n("0ZYP"),o=n("0cHP"),i=n("VU/8"),a=s,u=i(r.a,o.a,!1,a,null,null);t.a=u.exports},PwEp:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o={render:s,staticRenderFns:r};t.a=o},YaEn:function(e,t,n){"use strict";var s=n("7+uW"),r=n("/ocq"),o=n("PVon");s.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Docs",component:o.a}]})},aL4v:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",{staticClass:"v-a",attrs:{href:e.href,target:e.computedTarget,tabindex:e.tabindex},on:{click:e.handleClick}},[e._t("default")],2)},r=[],o={render:s,staticRenderFns:r};t.a=o},eVP5:function(e,t){e.exports='<pre><code class="lang-js">import path from &#39;path&#39;\nimport router from &#39;./router&#39;\n\nimport { VStepper } from &#39;vue-stepper-component&#39;\n\nexport default {\n  components: {\n    VStepper\n  },\n  watch: {\n    $route: { \n      handler(route) {\n        this.changeRoute(route)\n      },\n      immediate: true\n    }\n  },\n  computed: {\n    ...mapGetters({\n      steps: types.STEPS,\n      step: types.STEP\n    }),\n    step: {\n      get() {\n        return this.step\n      },\n      set(step: route) {\n        this.changeRoute({ name: route })\n      }\n    }\n  },\n  methods: {\n    changeRoute(route) {\n      const basename = route.name || path.basename(route.fullPath)\n\n      router.push(basename)\n    }\n  }\n}\n</code></pre>\n'},qxq2:function(e,t,n){"use strict";var s=n("Dd8w"),r=n.n(s);t.a={name:"VA",props:{name:{type:String,default:""},href:{type:String,default:""},tabindex:{type:String,default:""},refs:{type:Object,default:function(){return{}}},scrollTo:{type:[String,Element],default:""},target:{type:String,default:"_blank"},prevent:{type:Boolean,default:!1},static:{type:Boolean,default:!1}},computed:{computedTarget:function(){if(!this.scrollTo)return this.target}},methods:{handleClick:function(e){(this.prevent||this.scrollTo||this.static)&&e.preventDefault(),this.scrollTo&&this.$scrollTo(this.scrollTo),this.$emit("click",{href:this.href})},getElementByRef:function(e,t){if(!(t=t||this.$refs))return void console.error("[getElementByRef warn]: No refs found.");var n=t[e];return n instanceof Element?n:t[e]&&(n=t[e].el)instanceof Element?n:(console.error('[getElementByRef warn]: No such ref as "'+e+'".'),null)},$scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0;(n=e instanceof Element?e:this.getElementByRef(e,this.refs))&&n.scrollIntoView(r()({behavior:"smooth",block:"start"},t))}}}},xC3h:function(e,t){e.exports='<pre><code class="lang-js">// State\nconst state = { steps: 3, step: undefined }\n\n// Getters...\n// Mutations...\n\n// Export\n</code></pre>\n'},xJD8:function(e,t,n){"use strict";t.a={name:"app"}},yP6i:function(e,t){e.exports='<pre><code class="lang-html">&lt;v-stepper :steps=&quot;steps&quot; v-model=&quot;step&quot;&gt;&lt;/v-stepper&gt;\n\n&lt;template v-if=&quot;step === 1&quot;&gt;&lt;!-- Step 1 Content --&gt;&lt;/template&gt;\n&lt;template v-if=&quot;step === 2&quot;&gt;&lt;!-- Step 2 Content --&gt;&lt;/template&gt;\n&lt;template v-if=&quot;step === 3&quot;&gt;&lt;!-- Step 3 Content --&gt;&lt;/template&gt;\n\n&lt;!-- etc&#39; --&gt;\n</code></pre>\n'},yypm:function(e,t){e.exports='<pre><code class="lang-bash">$ npm install vue-stepper-component --save\n</code></pre>\n'}},["NHnr"]);
//# sourceMappingURL=app.8ec385f7a09819fbbf40.js.map