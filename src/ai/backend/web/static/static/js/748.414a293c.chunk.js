(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[748],{927:function(n){n.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},1748:function(n,e,t){"use strict";t.d(e,{Db:function(){return y},$G:function(){return C}});var a=t(4519);t(927);Object.create(null);function r(){if(console&&console.warn){for(var n,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(n=console).warn.apply(n,t)}}var i={};function o(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];"string"===typeof e[0]&&i[e[0]]||("string"===typeof e[0]&&(i[e[0]]=new Date),r.apply(void 0,e))}var s=function(n,e){return function(){if(n.isInitialized)e();else{n.on("initialized",(function t(){setTimeout((function(){n.off("initialized",t)}),0),e()}))}}};function u(n,e,t){n.loadNamespaces(e,s(n,t))}function c(n,e,t,a){"string"===typeof t&&(t=[t]),t.forEach((function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)})),n.loadLanguages(e,s(n,a))}var f=t(1413),g=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,l={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},p=function(n){return l[n]},d={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(n){return n.replace(g,p)}};var v,h=t(5671),b=t(3144);var y={type:"3rdParty",init:function(n){!function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d=(0,f.Z)((0,f.Z)({},d),n)}(n.options.react),function(n){v=n}(n)}},m=(0,a.createContext)(),k=function(){function n(){(0,h.Z)(this,n),this.usedNamespaces={}}return(0,b.Z)(n,[{key:"addUsedNamespaces",value:function(n){var e=this;n.forEach((function(n){e.usedNamespaces[n]||(e.usedNamespaces[n]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),n}();var N=t(9439),w=function(n,e){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=e?t.current:n}),[n,e]),t.current};function C(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.i18n,r=(0,a.useContext)(m)||{},i=r.i18n,s=r.defaultNS,g=t||i||v;if(g&&!g.reportNamespaces&&(g.reportNamespaces=new k),!g){o("You will need to pass in an i18next instance by using initReactI18next");var l=function(n,e){return"string"===typeof e?e:e&&"object"===typeof e&&"string"===typeof e.defaultValue?e.defaultValue:Array.isArray(n)?n[n.length-1]:n},p=[l,{},!1];return p.t=l,p.i18n={},p.ready=!1,p}g.options.react&&void 0!==g.options.react.wait&&o("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=(0,f.Z)((0,f.Z)((0,f.Z)({},d),g.options.react),e),b=h.useSuspense,y=h.keyPrefix,C=n||s||g.options&&g.options.defaultNS;C="string"===typeof C?[C]:C||["translation"],g.reportNamespaces.addUsedNamespaces&&g.reportNamespaces.addUsedNamespaces(C);var x=(g.isInitialized||g.initializedStoreOnce)&&C.every((function(n){return function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.languages&&e.languages.length?void 0!==e.options.ignoreJSONStructure?e.hasLoadedNamespace(n,{lng:t.lng,precheck:function(e,a){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,n))return!1}}):function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.languages[0],r=!!e.options&&e.options.fallbackLng,i=e.languages[e.languages.length-1];if("cimode"===a.toLowerCase())return!0;var o=function(n,t){var a=e.services.backendConnector.state["".concat(n,"|").concat(t)];return-1===a||2===a};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!o(e.isLanguageChangingTo,n))&&(!!e.hasResourceBundle(a,n)||!(e.services.backendConnector.backend&&(!e.options.resources||e.options.partialBundledLanguages))||!(!o(a,n)||r&&!o(i,n)))}(n,e,t):(o("i18n.languages were undefined or empty",e.languages),!0)}(n,g,h)}));function I(){return g.getFixedT(e.lng||null,"fallback"===h.nsMode?C:C[0],y)}var S=(0,a.useState)(I),L=(0,N.Z)(S,2),E=L[0],Z=L[1],O=C.join();e.lng&&(O="".concat(e.lng).concat(O));var T=w(O),_=(0,a.useRef)(!0);(0,a.useEffect)((function(){var n=h.bindI18n,t=h.bindI18nStore;function a(){_.current&&Z(I)}return _.current=!0,x||b||(e.lng?c(g,e.lng,C,(function(){_.current&&Z(I)})):u(g,C,(function(){_.current&&Z(I)}))),x&&T&&T!==O&&_.current&&Z(I),n&&g&&g.on(n,a),t&&g&&g.store.on(t,a),function(){_.current=!1,n&&g&&n.split(" ").forEach((function(n){return g.off(n,a)})),t&&g&&t.split(" ").forEach((function(n){return g.store.off(n,a)}))}}),[g,O]);var z=(0,a.useRef)(!0);(0,a.useEffect)((function(){_.current&&!z.current&&Z(I),z.current=!1}),[g,y]);var R=[E,g,x];if(R.t=E,R.i18n=g,R.ready=x,x)return R;if(!x&&!b)return R;throw new Promise((function(n){e.lng?c(g,e.lng,C,(function(){return n()})):u(g,C,(function(){return n()}))}))}}}]);
//# sourceMappingURL=748.414a293c.chunk.js.map