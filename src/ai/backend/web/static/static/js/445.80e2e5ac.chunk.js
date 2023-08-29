"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[445,959],{5959:function(e,n,t){t.r(n);t(4519);var a=t(8499),i=t(2556);n.default=function(e){var n=e.text,t=e.children;return(0,i.jsx)(a.Z.Text,{copyable:!0,code:!0,children:n||t})}},9277:function(e,n,t){var a=t(1413),i=t(4925),l=t(4036),o=(t(4519),t(2556)),r=["direction","wrap","justify","align","gap","style","children"];n.Z=function(e){var n=e.direction,t=void 0===n?"row":n,c=e.wrap,s=void 0===c?"nowrap":c,d=e.justify,u=void 0===d?"flex-start":d,g=e.align,m=void 0===g?"center":g,f=e.gap,p=void 0===f?0:f,b=e.style,v=e.children,y=(0,i.Z)(e,r),h=l.Z.useToken().token,x=[u,m],Z=null===x||void 0===x?void 0:x.map((function(e){var n;switch(e){case"start":n="flex-start";break;case"end":n="flex-end";break;case"between":n="space-between";break;case"around":n="space-around";break;default:n=e}return n})),S=(0,a.Z)({display:"flex",flexDirection:t,flexWrap:s,justifyContent:Z[0],alignItems:Z[1]},b);return(0,o.jsx)("div",(0,a.Z)((0,a.Z)({style:(0,a.Z)({alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",gap:"string"===typeof p?h["padding"+p.toUpperCase()]:p},S)},y),{},{children:v}))}},4001:function(e,n,t){var a=t(1413),i=t(9439),l=t(4519),o=t(7760),r=t(2556),c=function(e,n){var t=e.image,l=e.style,c=void 0===l?{}:l,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",d=(0,o.dS)(),u=(0,i.Z)(d,2)[1].getImageIcon;return(0,r.jsx)("img",{src:u(t),style:(0,a.Z)({width:"1.5em",height:"1.5em"},c),alt:s})};n.Z=l.memo(c)},7760:function(e,n,t){t.d(n,{Dj:function(){return d},Kr:function(){return o},M:function(){return s},dS:function(){return u},qh:function(){return c},tQ:function(){return r}});var a=t(9439),i=t(4519),l=t(7112),o=function(e){return function(e){var n=(0,i.useState)(e||(new Date).toISOString()),t=(0,a.Z)(n,2),l=t[0],o=t[1];return[l,function(e){o(e||(new Date).toISOString())}]}(e)},r=function(){return d()._config.domainName},c=function(){var e=d(),n=(0,i.useState)({name:e.current_group,id:e.groupIds[e.current_group]}),t=(0,a.Z)(n,2),l=t[0],o=t[1];return(0,i.useEffect)((function(){var n=function(n){var t=n.detail;o({name:t,id:e.groupIds[t]})};return document.addEventListener("backend-ai-group-changed",n),function(){document.removeEventListener("backend-ai-group-changed",n)}})),l},s=function(e){var n=e.api_endpoint;return(0,i.useMemo)((function(){var e=new globalThis.BackendAIClientConfig("","",n,"SESSION");return new globalThis.BackendAIClient(e,"Backend.AI Console.")}),[n])},d=function(){return(0,l.useQuery)({queryKey:"backendai-client-for-suspense",queryFn:function(){return new Promise((function(e){if("undefined"!==typeof globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!1!==globalThis.backendaiclient.ready)return e(globalThis.backendaiclient);document.addEventListener("backend-ai-connected",(function n(){e(globalThis.backendaiclient),document.removeEventListener("backend-ai-connected",n)}))}))},retry:!1,suspense:!0}).data},u=function(){var e=(0,l.useQuery)({queryKey:"backendai-metadata-for-suspense",queryFn:function(){return fetch("resources/image_metadata.json").then((function(e){return e.json()})).then((function(e){return e}))},suspense:!0,retry:!1}).data,n=function(e){if(!e)return{key:"",tags:[]};var n=e.split("/"),t=(n[2]||n[1]).split(":"),i=(0,a.Z)(t,2);return{key:i[0],tags:i[1].split("-")}};return[e,{getImageAliasName:function(t){var a=n(t).key;return(null===e||void 0===e?void 0:e.imageInfo[a].name)||a},getImageIcon:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"resources/icons/";if(!t)return"default.png";var i=n(t).key;return a+(void 0!==(null===e||void 0===e?void 0:e.imageInfo[i].icon)?null===e||void 0===e?void 0:e.imageInfo[i].icon:"default.png")},getImageTags:function(e){},getBaseVersion:function(e){return n(e).tags[0]},getBaseImage:function(e){return n(e).tags[1]},getImageMeta:n}]}},7261:function(e,n,t){t.r(n);var a,i=t(9439),l=t(4036),o=t(284),r=t(8499),c=t(227),s=t(2513),d=t(3678),u=t(5870),g=t(4027),m=t(2842),f=t(3861),p=t(1662),b=t(4519),v=t(9277),y=t(7760),h=t(2674),x=t(6980),Z=t(5959),S=t(4001),k=t(2556);n.default=function(){var e=l.Z.useToken().token,n=(0,y.Dj)(),j=(0,h.s0)(),I=(0,h.UO)().serviceId,w=(0,y.Kr)("initial-fetch"),E=(0,i.Z)(w,2),C=E[0],O=E[1],T=(0,b.useTransition)(),_=(0,i.Z)(T,2),N=_[0],L=_[1],B=(0,x.useLazyLoadQuery)(void 0!==a?a:a=t(4464),{endpointId:I},{fetchPolicy:"initial-fetch"===C?"store-and-network":"network-only",fetchKey:C}).endpoint,K=function(){var e="default";switch((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toUpperCase()){case"HEALTHY":e="success";break;case"PROVISIONING":e="processing";break;case"UNHEALTHY":e="warning"}return e};return(0,k.jsxs)(v.Z,{direction:"column",align:"stretch",style:{margin:e.marginSM,gap:e.margin},children:[(0,k.jsx)(o.Z,{items:[{title:"Services",onClick:function(e){e.preventDefault(),j("/serving")},href:"/serving"},{title:"Routing Info"}]}),(0,k.jsxs)(v.Z,{direction:"row",justify:"between",children:[(0,k.jsx)(r.Z.Title,{level:3,style:{margin:0},children:(null===B||void 0===B?void 0:B.name)||""}),(0,k.jsx)(c.Z,{title:"Refresh",children:(0,k.jsx)(s.ZP,{loading:N,icon:(0,k.jsx)(m.Z,{}),onClick:function(){L((function(){O()}))}})})]}),(0,k.jsx)(r.Z.Title,{level:4,style:{margin:0},children:"Service Info"}),(0,k.jsxs)(d.Z,{bordered:!0,column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:1},style:{backgroundColor:e.colorBgBase},children:[(0,k.jsx)(d.Z.Item,{label:"Name",children:(0,k.jsx)(r.Z.Text,{copyable:!0,children:null===B||void 0===B?void 0:B.name})}),(0,k.jsx)(d.Z.Item,{label:"Endpoint ID",children:null===B||void 0===B?void 0:B.endpoint_id}),(0,k.jsx)(d.Z.Item,{label:"Session Owner",children:n.email||""}),(0,k.jsx)(d.Z.Item,{label:"Desired Session Count",children:null===B||void 0===B?void 0:B.desired_session_count}),(0,k.jsx)(d.Z.Item,{label:"Service Endpoint",children:null!==B&&void 0!==B&&B.url?null===B||void 0===B?void 0:B.url:(0,k.jsx)(u.Z,{children:"No service endpoint"})}),(0,k.jsx)(d.Z.Item,{label:"Open To Public",children:null!==B&&void 0!==B&&B.open_to_public?(0,k.jsx)(f.Z,{}):(0,k.jsx)(p.Z,{})}),(0,k.jsx)(d.Z.Item,{label:"Image",children:(null===B||void 0===B?void 0:B.image)&&(0,k.jsxs)(v.Z,{direction:"row",gap:"xs",children:[(0,k.jsx)(S.Z,{image:B.image}),(0,k.jsx)(Z.default,{children:B.image})]})})]}),(0,k.jsx)(r.Z.Title,{level:4,style:{margin:0},children:"Routes Info"}),(0,k.jsx)(g.Z,{columns:[{title:"Route ID",dataIndex:"routing_id"},{title:"Session ID",dataIndex:"session"},{title:"Status",render:function(e,n){var t=n.status;return t&&(0,k.jsx)(u.Z,{color:K(t),children:t.toUpperCase()},t)}},{title:"Traffic Ratio",dataIndex:"traffic_ratio"}],pagination:!1,dataSource:null===B||void 0===B?void 0:B.routings})]})}},4464:function(e,n,t){t.r(n);var a=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"endpointId"}],n=[{kind:"Variable",name:"endpoint_id",variableName:"endpointId"}],t={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"endpoint_id",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"image",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"desired_session_count",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"open_to_public",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"routing_id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"session",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"traffic_ratio",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"endpoint",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"RoutingListPageQuery",selections:[{alias:null,args:n,concreteType:"Endpoint",kind:"LinkedField",name:"endpoint",plural:!1,selections:[t,a,i,l,o,r,c,{alias:null,args:null,concreteType:"Routing",kind:"LinkedField",name:"routings",plural:!0,selections:[s,d,u,g,m],storageKey:null}],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"RoutingListPageQuery",selections:[{alias:null,args:n,concreteType:"Endpoint",kind:"LinkedField",name:"endpoint",plural:!1,selections:[t,a,i,l,o,r,c,{alias:null,args:null,concreteType:"Routing",kind:"LinkedField",name:"routings",plural:!0,selections:[s,d,u,g,m,t],storageKey:null}],storageKey:null}]},params:{cacheID:"a874aab7a6d8019bd4405aec6af00c4e",id:null,metadata:{},name:"RoutingListPageQuery",operationKind:"query",text:"query RoutingListPageQuery(\n  $endpointId: UUID!\n) {\n  endpoint(endpoint_id: $endpointId) {\n    id\n    name\n    endpoint_id\n    image\n    desired_session_count\n    url\n    open_to_public\n    routings {\n      routing_id\n      session\n      traffic_ratio\n      endpoint\n      status\n      id\n    }\n  }\n}\n"}}}();a.hash="1e1239c4cd9eef107956c0e2fa9be5f0",n.default=a},2842:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7462),i=t(4519),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},o=t(9491),r=function(e,n){return i.createElement(o.Z,(0,a.Z)({},e,{ref:n,icon:l}))};var c=i.forwardRef(r)},9869:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(1662),i=t(4519);function l(e,n,t){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.createElement(a.Z,null),o=function(e,n,t){return"boolean"===typeof e?e:void 0===n?!!t:!1!==n&&null!==n}(e,n,arguments.length>4&&void 0!==arguments[4]&&arguments[4]);if(!o)return[!1,null];var r="boolean"===typeof n||void 0===n||null===n?l:n;return[!0,t?t(r):r]}},3678:function(e,n,t){t.d(n,{Z:function(){return C}});var a=t(4942),i=t(9439),l=t(3270),o=t.n(l),r=t(5882),c=t(4519),s=t(690),d=t(1971),u=t(564),g=t(6569),m=c.createContext({}),f=function(e){return e.children};function p(e){return void 0!==e&&null!==e}var b=function(e){var n,t=e.itemPrefixCls,i=e.component,l=e.span,r=e.className,s=e.style,d=e.labelStyle,u=e.contentStyle,g=e.bordered,m=e.label,f=e.content,b=e.colon,v=i;return g?c.createElement(v,{className:o()((n={},(0,a.Z)(n,"".concat(t,"-item-label"),p(m)),(0,a.Z)(n,"".concat(t,"-item-content"),p(f)),n),r),style:s,colSpan:l},p(m)&&c.createElement("span",{style:d},m),p(f)&&c.createElement("span",{style:u},f)):c.createElement(v,{className:o()("".concat(t,"-item"),r),style:s,colSpan:l},c.createElement("div",{className:"".concat(t,"-item-container")},(m||0===m)&&c.createElement("span",{className:o()("".concat(t,"-item-label"),(0,a.Z)({},"".concat(t,"-item-no-colon"),!b)),style:d},m),(f||0===f)&&c.createElement("span",{className:o()("".concat(t,"-item-content")),style:u},f)))};function v(e,n,t){var a=n.colon,i=n.prefixCls,l=n.bordered,o=t.component,r=t.type,s=t.showLabel,d=t.showContent,u=t.labelStyle,g=t.contentStyle;return e.map((function(e,n){var t=e.props,m=t.label,f=t.children,p=t.prefixCls,v=void 0===p?i:p,y=t.className,h=t.style,x=t.labelStyle,Z=t.contentStyle,S=t.span,k=void 0===S?1:S,j=e.key;return"string"===typeof o?c.createElement(b,{key:"".concat(r,"-").concat(j||n),className:y,style:h,labelStyle:Object.assign(Object.assign({},u),x),contentStyle:Object.assign(Object.assign({},g),Z),span:k,colon:a,component:o,itemPrefixCls:v,bordered:l,label:s?m:null,content:d?f:null}):[c.createElement(b,{key:"label-".concat(j||n),className:y,style:Object.assign(Object.assign(Object.assign({},u),h),x),span:1,colon:a,component:o[0],itemPrefixCls:v,bordered:l,label:m}),c.createElement(b,{key:"content-".concat(j||n),className:y,style:Object.assign(Object.assign(Object.assign({},g),h),Z),span:2*k-1,component:o[1],itemPrefixCls:v,bordered:l,content:f})]}))}var y=function(e){var n=c.useContext(m),t=e.prefixCls,a=e.vertical,i=e.row,l=e.index,o=e.bordered;return a?c.createElement(c.Fragment,null,c.createElement("tr",{key:"label-".concat(l),className:"".concat(t,"-row")},v(i,e,Object.assign({component:"th",type:"label",showLabel:!0},n))),c.createElement("tr",{key:"content-".concat(l),className:"".concat(t,"-row")},v(i,e,Object.assign({component:"td",type:"content",showContent:!0},n)))):c.createElement("tr",{key:l,className:"".concat(t,"-row")},v(i,e,Object.assign({component:o?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},h=t(1480),x=t(111),Z=t(1157),S=function(e){var n,t,i=e.componentCls,l=e.extraColor,o=e.itemPaddingBottom,r=e.colonMarginRight,c=e.colonMarginLeft,s=e.titleMarginBottom;return(0,a.Z)({},i,Object.assign(Object.assign(Object.assign({},(0,h.Wf)(e)),function(e){var n,t=e.componentCls,i=e.labelBg;return(0,a.Z)({},"&".concat(t,"-bordered"),(n={},(0,a.Z)(n,"".concat(t,"-view"),{border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"> table":{tableLayout:"auto",borderCollapse:"collapse"}}),(0,a.Z)(n,"".concat(t,"-item-label, ").concat(t,"-item-content"),{padding:"".concat(e.padding,"px ").concat(e.paddingLG,"px"),borderInlineEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),(0,a.Z)(n,"".concat(t,"-item-label"),{color:e.colorTextSecondary,backgroundColor:i,"&::after":{display:"none"}}),(0,a.Z)(n,"".concat(t,"-row"),{borderBottom:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderBottom:"none"}}),(0,a.Z)(n,"&".concat(t,"-middle"),(0,a.Z)({},"".concat(t,"-item-label, ").concat(t,"-item-content"),{padding:"".concat(e.paddingSM,"px ").concat(e.paddingLG,"px")})),(0,a.Z)(n,"&".concat(t,"-small"),(0,a.Z)({},"".concat(t,"-item-label, ").concat(t,"-item-content"),{padding:"".concat(e.paddingXS,"px ").concat(e.padding,"px")})),n))}(e)),(t={},(0,a.Z)(t,"&-rtl",{direction:"rtl"}),(0,a.Z)(t,"".concat(i,"-header"),{display:"flex",alignItems:"center",marginBottom:s}),(0,a.Z)(t,"".concat(i,"-title"),Object.assign(Object.assign({},h.vS),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),(0,a.Z)(t,"".concat(i,"-extra"),{marginInlineStart:"auto",color:l,fontSize:e.fontSize}),(0,a.Z)(t,"".concat(i,"-view"),{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),(0,a.Z)(t,"".concat(i,"-row"),{"> th, > td":{paddingBottom:o},"&:last-child":{borderBottom:"none"}}),(0,a.Z)(t,"".concat(i,"-item-label"),(0,a.Z)({color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat(c,"px ").concat(r,"px")}},"&".concat(i,"-item-no-colon::after"),{content:'""'})),(0,a.Z)(t,"".concat(i,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),(0,a.Z)(t,"".concat(i,"-item-content"),{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),(0,a.Z)(t,"".concat(i,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":(n={display:"flex"},(0,a.Z)(n,"".concat(i,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),(0,a.Z)(n,"".concat(i,"-item-content"),{display:"inline-flex",alignItems:"baseline"}),n)}),(0,a.Z)(t,"&-middle",(0,a.Z)({},"".concat(i,"-row"),{"> th, > td":{paddingBottom:e.paddingSM}})),(0,a.Z)(t,"&-small",(0,a.Z)({},"".concat(i,"-row"),{"> th, > td":{paddingBottom:e.paddingXS}})),t)))},k=(0,x.Z)("Descriptions",(function(e){var n=(0,Z.TS)(e,{});return[S(n)]}),(function(e){return{labelBg:e.colorFillAlter,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,extraColor:e.colorText}})),j=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},I={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function w(e,n,t){var a=e;return(void 0===t||t>n)&&(a=(0,s.Tm)(e,{span:n})),a}var E=function(e){var n,t=e.prefixCls,l=e.title,s=e.extra,f=e.column,p=void 0===f?I:f,b=e.colon,v=void 0===b||b,h=e.bordered,x=e.layout,Z=e.children,S=e.className,E=e.rootClassName,C=e.style,O=e.size,T=e.labelStyle,_=e.contentStyle,N=j(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle"]),L=c.useContext(u.E_),B=L.getPrefixCls,K=L.direction,F=L.descriptions,P=B("descriptions",t),R=c.useState({}),D=(0,i.Z)(R,2),M=D[0],z=D[1],A=function(e,n){if("number"===typeof e)return e;if("object"===typeof e)for(var t=0;t<d.c.length;t++){var a=d.c[t];if(n[a]&&void 0!==e[a])return e[a]||I[a]}return 3}(p,M),H=(0,g.Z)(O),W=k(P),Q=(0,i.Z)(W,2),q=Q[0],U=Q[1],G=(0,d.Z)();c.useEffect((function(){var e=G.subscribe((function(e){"object"===typeof p&&z(e)}));return function(){G.unsubscribe(e)}}),[]);var X=function(e,n){var t=(0,r.Z)(e).filter((function(e){return e})),a=[],i=[],l=n;return t.forEach((function(e,o){var r,c=null===(r=e.props)||void 0===r?void 0:r.span,s=c||1;if(o===t.length-1)return i.push(w(e,l,c)),void a.push(i);s<l?(l-=s,i.push(e)):(i.push(w(e,l,s)),a.push(i),l=n,i=[])})),a}(Z,A),V=c.useMemo((function(){return{labelStyle:T,contentStyle:_}}),[T,_]);return q(c.createElement(m.Provider,{value:V},c.createElement("div",Object.assign({className:o()(P,null===F||void 0===F?void 0:F.className,(n={},(0,a.Z)(n,"".concat(P,"-").concat(H),H&&"default"!==H),(0,a.Z)(n,"".concat(P,"-bordered"),!!h),(0,a.Z)(n,"".concat(P,"-rtl"),"rtl"===K),n),S,E,U),style:Object.assign(Object.assign({},null===F||void 0===F?void 0:F.style),C)},N),(l||s)&&c.createElement("div",{className:"".concat(P,"-header")},l&&c.createElement("div",{className:"".concat(P,"-title")},l),s&&c.createElement("div",{className:"".concat(P,"-extra")},s)),c.createElement("div",{className:"".concat(P,"-view")},c.createElement("table",null,c.createElement("tbody",null,X.map((function(e,n){return c.createElement(y,{key:n,index:n,colon:v,prefixCls:P,vertical:"vertical"===x,bordered:h,row:e})}))))))))};E.Item=f;var C=E}}]);
//# sourceMappingURL=445.80e2e5ac.chunk.js.map