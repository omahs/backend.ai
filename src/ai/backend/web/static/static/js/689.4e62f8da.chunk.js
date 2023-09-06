"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[689],{31662:function(n,t,o){o.d(t,{Z:function(){return l}});var e=o(87462),i=o(4519),a={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},c=o(9491),s=function(n,t){return i.createElement(c.Z,(0,e.Z)({},n,{ref:t,icon:a}))};var l=i.forwardRef(s)},39883:function(n,t,o){o.d(t,{Z:function(){return Z}});var e=o(4942),i=o(29439),a=o(43270),c=o.n(a),s=o(34325),l=o(4519);function r(n,t,o){var e=(o||{}).atBegin;return function(n,t,o){var e,i=o||{},a=i.noTrailing,c=void 0!==a&&a,s=i.noLeading,l=void 0!==s&&s,r=i.debounceMode,p=void 0===r?void 0:r,m=!1,d=0;function u(){e&&clearTimeout(e)}function f(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=this,r=Date.now()-d;function f(){d=Date.now(),t.apply(s,i)}function g(){e=void 0}m||(l||!p||e||f(),u(),void 0===p&&r>n?l?(d=Date.now(),c||(e=setTimeout(p?g:f,n))):f():!0!==c&&(e=setTimeout(p?g:f,void 0===p?n-r:n)))}return f.cancel=function(n){var t=(n||{}).upcomingOnly,o=void 0!==t&&t;u(),m=!o},f}(n,t,{debounceMode:!1!==(void 0!==e&&e)})}var p=o(90690),m=o(48698),d=o(27340),u=o(21480),f=o(70111),g=o(41157),v=new d.E4("antSpinMove",{to:{opacity:1}}),S=new d.E4("antRotate",{to:{transform:"rotate(405deg)"}}),h=function(n){var t,o,i,a,c;return(0,e.Z)({},"".concat(n.componentCls),Object.assign(Object.assign({},(0,u.Wf)(n)),(c={position:"absolute",display:"none",color:n.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:"transform ".concat(n.motionDurationSlow," ").concat(n.motionEaseInOutCirc),"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":(a={position:"relative"},(0,e.Z)(a,"> div > ".concat(n.componentCls),(i={position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:n.contentHeight},(0,e.Z)(i,"".concat(n.componentCls,"-dot"),{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-n.spinDotSize/2}),(0,e.Z)(i,"".concat(n.componentCls,"-text"),{position:"absolute",top:"50%",width:"100%",paddingTop:(n.spinDotSize-n.fontSize)/2+2,textShadow:"0 1px 2px ".concat(n.colorBgContainer),fontSize:n.fontSize}),(0,e.Z)(i,"&".concat(n.componentCls,"-show-text ").concat(n.componentCls,"-dot"),{marginTop:-n.spinDotSize/2-10}),(0,e.Z)(i,"&-sm",(t={},(0,e.Z)(t,"".concat(n.componentCls,"-dot"),{margin:-n.spinDotSizeSM/2}),(0,e.Z)(t,"".concat(n.componentCls,"-text"),{paddingTop:(n.spinDotSizeSM-n.fontSize)/2+2}),(0,e.Z)(t,"&".concat(n.componentCls,"-show-text ").concat(n.componentCls,"-dot"),{marginTop:-n.spinDotSizeSM/2-10}),t)),(0,e.Z)(i,"&-lg",(o={},(0,e.Z)(o,"".concat(n.componentCls,"-dot"),{margin:-n.spinDotSizeLG/2}),(0,e.Z)(o,"".concat(n.componentCls,"-text"),{paddingTop:(n.spinDotSizeLG-n.fontSize)/2+2}),(0,e.Z)(o,"&".concat(n.componentCls,"-show-text ").concat(n.componentCls,"-dot"),{marginTop:-n.spinDotSizeLG/2-10}),o)),i)),(0,e.Z)(a,"".concat(n.componentCls,"-container"),{position:"relative",transition:"opacity ".concat(n.motionDurationSlow),"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:n.colorBgContainer,opacity:0,transition:"all ".concat(n.motionDurationSlow),content:'""',pointerEvents:"none"}}),(0,e.Z)(a,"".concat(n.componentCls,"-blur"),(0,e.Z)({clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none"},"&::after",{opacity:.4,pointerEvents:"auto"})),a)},(0,e.Z)(c,"&-tip",{color:n.spinDotDefault}),(0,e.Z)(c,"".concat(n.componentCls,"-dot"),{position:"relative",display:"inline-block",fontSize:n.spinDotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(n.spinDotSize-n.marginXXS/2)/2,height:(n.spinDotSize-n.marginXXS/2)/2,backgroundColor:n.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:v,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:S,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}}),(0,e.Z)(c,"&-sm ".concat(n.componentCls,"-dot"),{fontSize:n.spinDotSizeSM,i:{width:(n.spinDotSizeSM-n.marginXXS/2)/2,height:(n.spinDotSizeSM-n.marginXXS/2)/2}}),(0,e.Z)(c,"&-lg ".concat(n.componentCls,"-dot"),{fontSize:n.spinDotSizeLG,i:{width:(n.spinDotSizeLG-n.marginXXS)/2,height:(n.spinDotSizeLG-n.marginXXS)/2}}),(0,e.Z)(c,"&".concat(n.componentCls,"-show-text ").concat(n.componentCls,"-text"),{display:"block"}),c)))},b=(0,f.Z)("Spin",(function(n){var t=(0,g.TS)(n,{spinDotDefault:n.colorTextDescription,spinDotSize:n.controlHeightLG/2,spinDotSizeSM:.35*n.controlHeightLG,spinDotSizeLG:n.controlHeight});return[h(t)]}),{contentHeight:400}),y=function(n,t){var o={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(o[e]=n[e]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(e=Object.getOwnPropertySymbols(n);i<e.length;i++)t.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(n,e[i])&&(o[e[i]]=n[e[i]])}return o},C=null;var D=function(n){var t,o=n.spinPrefixCls,a=n.spinning,d=void 0===a||a,u=n.delay,f=void 0===u?0:u,g=n.className,v=n.rootClassName,S=n.size,h=void 0===S?"default":S,b=n.tip,D=n.wrapperClassName,z=n.style,Z=n.children,w=n.hashId,x=y(n,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),E=l.useState((function(){return d&&!function(n,t){return!!n&&!!t&&!isNaN(Number(t))}(d,f)})),N=(0,i.Z)(E,2),O=N[0],k=N[1];l.useEffect((function(){if(d){var n=r(f,(function(){k(!0)}));return n(),function(){var t;null===(t=null===n||void 0===n?void 0:n.cancel)||void 0===t||t.call(n)}}k(!1)}),[f,d]);var I=l.useMemo((function(){return"undefined"!==typeof Z}),[Z]);var T=l.useContext(m.E_),L=T.direction,j=T.spin,M=c()(o,null===j||void 0===j?void 0:j.className,(t={},(0,e.Z)(t,"".concat(o,"-sm"),"small"===h),(0,e.Z)(t,"".concat(o,"-lg"),"large"===h),(0,e.Z)(t,"".concat(o,"-spinning"),O),(0,e.Z)(t,"".concat(o,"-show-text"),!!b),(0,e.Z)(t,"".concat(o,"-rtl"),"rtl"===L),t),g,v,w),X=c()("".concat(o,"-container"),(0,e.Z)({},"".concat(o,"-blur"),O)),G=(0,s.Z)(x,["indicator","prefixCls"]),P=Object.assign(Object.assign({},null===j||void 0===j?void 0:j.style),z),_=l.createElement("div",Object.assign({},G,{style:P,className:M,"aria-live":"polite","aria-busy":O}),function(n,t){var o=t.indicator,e="".concat(n,"-dot");return null===o?null:(0,p.l$)(o)?(0,p.Tm)(o,{className:c()(o.props.className,e)}):(0,p.l$)(C)?(0,p.Tm)(C,{className:c()(C.props.className,e)}):l.createElement("span",{className:c()(e,"".concat(n,"-dot-spin"))},l.createElement("i",{className:"".concat(n,"-dot-item"),key:1}),l.createElement("i",{className:"".concat(n,"-dot-item"),key:2}),l.createElement("i",{className:"".concat(n,"-dot-item"),key:3}),l.createElement("i",{className:"".concat(n,"-dot-item"),key:4}))}(o,n),b&&I?l.createElement("div",{className:"".concat(o,"-text")},b):null);return I?l.createElement("div",Object.assign({},G,{className:c()("".concat(o,"-nested-loading"),D,w)}),O&&l.createElement("div",{key:"loading"},_),l.createElement("div",{className:X,key:"container"},Z)):_},z=function(n){var t=n.prefixCls,o=(0,l.useContext(m.E_).getPrefixCls)("spin",t),e=b(o),a=(0,i.Z)(e,2),c=a[0],s=a[1],r=Object.assign(Object.assign({},n),{spinPrefixCls:o,hashId:s});return c(l.createElement(D,Object.assign({},r)))};z.setDefaultIndicator=function(n){C=n};var Z=z}}]);
//# sourceMappingURL=689.4e62f8da.chunk.js.map