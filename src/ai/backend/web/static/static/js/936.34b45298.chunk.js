"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[936,502],{1502:function(e,n,a){a.r(n),a.d(n,{default:function(){return C},useShadowRoot:function(){return K},useWebComponentInfo:function(){return Q}});var t=a(9439),i=a(4519),l=a(6980),o=a(6114),r=a(9002),s=a(7112),u=a(4447),d=a(1748),c=a(3881),g=a(9883),m=a(6670),p=a(4165),f=a(5861),v=a(1011),y=a(1413);function h(e,n){var a=(0,y.Z)({},n);return function(e){for(var n,a=/(\w+)\s@\s*(\w+)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/g,i=[];null!==(n=a.exec(e));){var l=n,o=(0,t.Z)(l,5),r=o[0],s=o[1],u=o[2],d=o[3],c=o[4];i.push({fieldName:s,directive:u,argumentName:d,argumentValue:c,originFieldStr:r})}return i}(e).forEach((function(t){if("skipOnClient"===t.directive&&"if"===t.argumentName&&(e=!t.argumentValue||!0!==n[t.argumentValue.substring(1)]&&"true"!==t.argumentValue?e.replace(t.originFieldStr,t.originFieldStr.replace(/@\s*(skipOnClient)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/,"")):e.replace(t.originFieldStr,""),t.argumentValue.startsWith("$")&&2===e.split(t.argumentValue).length)){var i=t.argumentValue.substring(1),l=new RegExp(".*".concat(i,".*\n"),"g");e=e.replace(l,""),delete a[t.argumentValue.substring(1)]}})),{query:e,variables:a}}v.RelayFeatureFlags.ENABLE_RELAY_RESOLVERS=!0;var _=function(){var e=(0,f.Z)((0,p.Z)().mark((function e(n,a){var t,i,l,o,r,s;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=h(n.text||"",a),o={query:l.query,variables:l.variables},r=null===(t=globalThis.backendaiclient)||void 0===t?void 0:t.newSignedRequest("POST","/admin/gql",o),e.next=5,null===(i=globalThis.backendaiclient)||void 0===i?void 0:i._wrapWithPromise(r,!1,null,1e4,0);case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}();var S,k=new v.Environment({network:v.Network.create(_,void 0),store:new v.Store(new v.RecordSource)}),b=a(382),F=a(1843),x=a(2674),j=a(2556),Z=i.createContext(null),q=i.createContext(null),K=function(){return i.useContext(q)},Q=function(){return i.useContext(Z)},w=new s.QueryClient({defaultOptions:{queries:{suspense:!0,refetchOnWindowFocus:!1,retry:!1}}});u.ZP.use(d.Db).use(c.Z).init({backend:{loadPath:"/resources/i18n/{{lng}}.json"},lng:(null===globalThis||void 0===globalThis||null===(S=globalThis.backendaioptions)||void 0===S?void 0:S.get("current_language"))||"en",fallbackLng:"en",interpolation:{escapeValue:!1}});var L=function(){var e=(0,x.s0)();return(0,i.useLayoutEffect)((function(){var n=function(n){var a=n.detail;e(a,{replace:!0})};return document.addEventListener("react-navigate",n),function(){document.removeEventListener("react-navigate",n)}}),[e]),null},C=function(e){var n=e.children,a=e.value,u=e.styles,c=e.shadowRoot,p=e.dispatchEvent,f=(0,i.useMemo)((function(){return(0,o.Df)()}),[]),v=function(){var e,n=(0,i.useState)(null===globalThis||void 0===globalThis||null===(e=globalThis.backendaioptions)||void 0===e?void 0:e.get("current_language")),a=(0,t.Z)(n,2),l=a[0],o=a[1],r=(0,d.$G)().i18n;return(0,i.useEffect)((function(){setTimeout((function(){return null===r||void 0===r?void 0:r.changeLanguage(l)}),0)}),[]),(0,i.useEffect)((function(){var e=function(e){var n,a;o(null===e||void 0===e||null===(n=e.detail)||void 0===n?void 0:n.lang);var t=(null===e||void 0===e||null===(a=e.detail)||void 0===a?void 0:a.lang)||"en";null===r||void 0===r||r.changeLanguage(t)};return window.addEventListener("langChanged",e),function(){return window.removeEventListener("langChanged",e)}}),[r]),[l]}(),y=(0,t.Z)(v,1)[0],h=(0,b.x)(),_=(0,i.useMemo)((function(){return{value:a,dispatchEvent:p,moveTo:function(e){p("moveTo",{path:e})}}}),[a,p]);return(0,j.jsx)(j.Fragment,{children:k&&(0,j.jsx)(l.RelayEnvironmentProvider,{environment:k,children:(0,j.jsxs)(i.StrictMode,{children:[(0,j.jsxs)("style",{children:[u,"\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n"]}),(0,j.jsx)(s.QueryClientProvider,{client:w,children:(0,j.jsx)(q.Provider,{value:c,children:(0,j.jsx)(Z.Provider,{value:_,children:(0,j.jsx)(r.ZP,{getPopupContainer:function(e){return null!==e&&void 0!==e&&e.parentNode?e.parentNode:c},locale:"ko"===y?m.Z:g.Z,theme:h,children:(0,j.jsx)(o.V9,{container:c,cache:f,children:(0,j.jsx)(i.Suspense,{fallback:"",children:(0,j.jsxs)(F.VK,{children:[(0,j.jsx)(L,{}),n]})})})})})})})]})})})}},9277:function(e,n,a){var t=a(1413),i=a(4925),l=a(4036),o=(a(4519),a(2556)),r=["direction","wrap","justify","align","gap","style","children"];n.Z=function(e){var n=e.direction,a=void 0===n?"row":n,s=e.wrap,u=void 0===s?"nowrap":s,d=e.justify,c=void 0===d?"flex-start":d,g=e.align,m=void 0===g?"center":g,p=e.gap,f=void 0===p?0:p,v=e.style,y=e.children,h=(0,i.Z)(e,r),_=l.Z.useToken().token,S=[c,m],k=null===S||void 0===S?void 0:S.map((function(e){var n;switch(e){case"start":n="flex-start";break;case"end":n="flex-end";break;case"between":n="space-between";break;case"around":n="space-around";break;default:n=e}return n})),b=(0,t.Z)({display:"flex",flexDirection:a,flexWrap:u,justifyContent:k[0],alignItems:k[1]},v);return(0,o.jsx)("div",(0,t.Z)((0,t.Z)({style:(0,t.Z)({alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",gap:"string"===typeof f?_["padding"+f.toUpperCase()]:f},b)},h),{},{children:y}))}},3614:function(e,n,a){a.r(n);var t=function(){var e=[{alias:null,args:[{kind:"Literal",name:"is_active",value:!0}],concreteType:"Domain",kind:"LinkedField",name:"domains",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:"domains(is_active:true)"}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"DomainSelectorQuery",selections:e,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"DomainSelectorQuery",selections:e},params:{cacheID:"9df762094b74dc3eb8079edfcc73765f",id:null,metadata:{},name:"DomainSelectorQuery",operationKind:"query",text:"query DomainSelectorQuery {\n  domains(is_active: true) {\n    name\n  }\n}\n"}}}();t.hash="c14d362fa40cf9a3cef5d1d71202cc5f",n.default=t},3361:function(e,n,a){a.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"domain_name"}],n=[{alias:"projects",args:[{kind:"Variable",name:"domain_name",variableName:"domain_name"},{kind:"Literal",name:"is_active",value:!0}],concreteType:"Group",kind:"LinkedField",name:"groups",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"ProjectSelectorQuery",selections:n,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"ProjectSelectorQuery",selections:n},params:{cacheID:"eecad68ff1a08d753ce22ff2c5136c26",id:null,metadata:{},name:"ProjectSelectorQuery",operationKind:"query",text:"query ProjectSelectorQuery(\n  $domain_name: String\n) {\n  projects: groups(domain_name: $domain_name, is_active: true) {\n    id\n    is_active\n    name\n    resource_policy\n  }\n}\n"}}}();t.hash="2845b31197571f750613f64207ded239",n.default=t},1674:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"QuotaScopeCardFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage_bytes",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"QuotaSettingModalFragment"}],type:"QuotaScope",abstractKey:null,hash:"78fe420c92ce5b9c8d5c133d1f9c389f"};n.default=t},6685:function(e,n,a){a.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},{defaultValue:null,kind:"LocalArgument",name:"storage_host_name"}],n=[{alias:null,args:[{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}],concreteType:"UnsetQuotaScope",kind:"LinkedField",name:"unset_quota_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"QuotaScopeCardUnsetMutation",selections:n,type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"QuotaScopeCardUnsetMutation",selections:n},params:{cacheID:"338836966362b14e823520f40fa56a73",id:null,metadata:{},name:"QuotaScopeCardUnsetMutation",operationKind:"mutation",text:"mutation QuotaScopeCardUnsetMutation(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n) {\n  unset_quota_scope(quota_scope_id: $quota_scope_id, storage_host_name: $storage_host_name) {\n    quota_scope {\n      id\n      quota_scope_id\n      storage_host_name\n      details {\n        hard_limit_bytes\n      }\n    }\n  }\n}\n"}}}();t.hash="272001cc642518fb66015dcc367b9f65",n.default=t},4133:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"QuotaSettingModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],type:"QuotaScope",abstractKey:null,hash:"1c5ad8315a2d78cb376e7436dc6a8627"};n.default=t},5005:function(e,n,a){a.r(n);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"props"},n={defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},a={defaultValue:null,kind:"LocalArgument",name:"storage_host_name"},t=[{alias:null,args:[{kind:"Variable",name:"props",variableName:"props"},{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}],concreteType:"SetQuotaScope",kind:"LinkedField",name:"set_quota_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[e,n,a],kind:"Fragment",metadata:null,name:"QuotaSettingModalSetMutation",selections:t,type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[n,a,e],kind:"Operation",name:"QuotaSettingModalSetMutation",selections:t},params:{cacheID:"d337cab9be9523bfde2bfb7d6bed595b",id:null,metadata:{},name:"QuotaSettingModalSetMutation",operationKind:"mutation",text:"mutation QuotaSettingModalSetMutation(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n  $props: QuotaScopeInput!\n) {\n  set_quota_scope(quota_scope_id: $quota_scope_id, storage_host_name: $storage_host_name, props: $props) {\n    quota_scope {\n      id\n      quota_scope_id\n      storage_host_name\n      details {\n        hard_limit_bytes\n      }\n    }\n  }\n}\n"}}}();t.hash="0e8509b3174920c1dd917ece91d41161",n.default=t},8156:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StorageHostResourcePanelFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"backend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage",storageKey:null}],type:"StorageVolume",abstractKey:null,hash:"30a1b4101eeb2fae45385780dbc0ddcc"};n.default=t},1047:function(e,n,a){a.r(n);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},n={defaultValue:null,kind:"LocalArgument",name:"skipQuotaScope"},a={defaultValue:null,kind:"LocalArgument",name:"storage_host_name"},t=[{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}];return{fragment:{argumentDefinitions:[e,n,a],kind:"Fragment",metadata:null,name:"StorageHostSettingsPanelQuery",selections:[{condition:"skipQuotaScope",kind:"Condition",passingValue:!1,selections:[{alias:null,args:t,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"QuotaSettingModalFragment"},{args:null,kind:"FragmentSpread",name:"QuotaScopeCardFragment"}],storageKey:null}]}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,a,n],kind:"Operation",name:"StorageHostSettingsPanelQuery",selections:[{condition:"skipQuotaScope",kind:"Condition",passingValue:!1,selections:[{alias:null,args:t,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage_bytes",storageKey:null}],storageKey:null}],storageKey:null}]}]},params:{cacheID:"378699d92e64ba9559bfbe8e533d6c6a",id:null,metadata:{},name:"StorageHostSettingsPanelQuery",operationKind:"query",text:"query StorageHostSettingsPanelQuery(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n  $skipQuotaScope: Boolean!\n) {\n  quota_scope(storage_host_name: $storage_host_name, quota_scope_id: $quota_scope_id) @skip(if: $skipQuotaScope) {\n    ...QuotaSettingModalFragment\n    ...QuotaScopeCardFragment\n    id\n  }\n}\n\nfragment QuotaScopeCardFragment on QuotaScope {\n  id\n  quota_scope_id\n  storage_host_name\n  details {\n    hard_limit_bytes\n    usage_bytes\n  }\n  ...QuotaSettingModalFragment\n}\n\nfragment QuotaSettingModalFragment on QuotaScope {\n  id\n  quota_scope_id\n  storage_host_name\n  details {\n    hard_limit_bytes\n  }\n}\n"}}}();t.hash="ef16372a7f5bf0c1844a65d4b63fe4d9",n.default=t},6678:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StorageHostSettingsPanel_storageVolumeFrgmt",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null}],type:"StorageVolume",abstractKey:null,hash:"2f9e5e6060806e6f9265e5cbbd325afe"};n.default=t},4880:function(e,n,a){a.r(n);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"filter"},n={defaultValue:null,kind:"LocalArgument",name:"limit"},a={defaultValue:null,kind:"LocalArgument",name:"offset"},t=[{alias:null,args:[{kind:"Variable",name:"filter",variableName:"filter"},{kind:"Literal",name:"is_active",value:!0},{kind:"Variable",name:"limit",variableName:"limit"},{kind:"Variable",name:"offset",variableName:"offset"}],concreteType:"UserList",kind:"LinkedField",name:"user_list",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"items",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[e,n,a],kind:"Fragment",metadata:null,name:"UserSelectorQuery",selections:t,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[n,a,e],kind:"Operation",name:"UserSelectorQuery",selections:t},params:{cacheID:"f552e13a727e58f49a7a7e49a466d4d2",id:null,metadata:{},name:"UserSelectorQuery",operationKind:"query",text:"query UserSelectorQuery(\n  $limit: Int!\n  $offset: Int!\n  $filter: String\n) {\n  user_list(limit: $limit, offset: $offset, filter: $filter, is_active: true) {\n    items {\n      id\n      is_active\n      email\n      resource_policy\n    }\n  }\n}\n"}}}();t.hash="323d93fb2d8eb4ee2d1d3677121f9ad2",n.default=t},3255:function(e,n,a){a.d(n,{Hz:function(){return u},Lc:function(){return o},Uz:function(){return d},VQ:function(){return c},We:function(){return l},en:function(){return s},lA:function(){return g},y3:function(){return r}});var t=a(7760),i=a(2556),l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/(<br\s*\/?>|\n)/;return e.split(n).map((function(e,a){return e.match(n)?(0,i.jsx)("br",{},a):e}))},o=function(e){var n=e.method,a=e.url,t=e.body,i=void 0===t?null:t,l=e.client,o=null===l||void 0===l?void 0:l.newSignedRequest(n,a,i,null);return null===l||void 0===l?void 0:l._wrapWithPromise(o)},r=function(){var e=(0,t.Dj)();return function(n){var a=n.method,t=n.url,i=n.body;return o({method:a,url:t,body:void 0===i?null:i,client:e})}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=Math.pow(10,3);n=n<0?0:n;var t=Math.floor(Math.log(Math.round(e))/Math.log(a));return t=t<0?0:t,parseFloat((e/Math.pow(a,t)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB"][t]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=Math.pow(10,9);return Math.round(n*e)},d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return null===e||void 0===e?arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-":e?(e/Math.pow(10,9)).toFixed(n):e},c=function(e,n){return""===n||void 0===n?"":n.startsWith("".concat(e,":"))?n:"".concat(e,":").concat(n)},g=function(e){return e<70?"rgba(58, 178, 97, 1)":e<90?"rgb(223, 179, 23)":"#ef5350"}},7760:function(e,n,a){a.d(n,{Dj:function(){return d},Kr:function(){return o},M:function(){return u},dS:function(){return c},qh:function(){return s},tQ:function(){return r}});var t=a(9439),i=a(4519),l=a(7112),o=function(e){return function(e){var n=(0,i.useState)(e||(new Date).toISOString()),a=(0,t.Z)(n,2),l=a[0],o=a[1];return[l,function(e){o(e||(new Date).toISOString())}]}(e)},r=function(){return d()._config.domainName},s=function(){var e=d(),n=(0,i.useState)({name:e.current_group,id:e.groupIds[e.current_group]}),a=(0,t.Z)(n,2),l=a[0],o=a[1];return(0,i.useEffect)((function(){var n=function(n){var a=n.detail;o({name:a,id:e.groupIds[a]})};return document.addEventListener("backend-ai-group-changed",n),function(){document.removeEventListener("backend-ai-group-changed",n)}})),l},u=function(e){var n=e.api_endpoint;return(0,i.useMemo)((function(){var e=new globalThis.BackendAIClientConfig("","",n,"SESSION");return new globalThis.BackendAIClient(e,"Backend.AI Console.")}),[n])},d=function(){return(0,l.useQuery)({queryKey:"backendai-client-for-suspense",queryFn:function(){return new Promise((function(e){if("undefined"!==typeof globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!1!==globalThis.backendaiclient.ready)return e(globalThis.backendaiclient);document.addEventListener("backend-ai-connected",(function n(){e(globalThis.backendaiclient),document.removeEventListener("backend-ai-connected",n)}))}))},retry:!1,suspense:!0}).data},c=function(){var e=(0,l.useQuery)({queryKey:"backendai-metadata-for-suspense",queryFn:function(){return fetch("resources/image_metadata.json").then((function(e){return e.json()})).then((function(e){return e}))},suspense:!0,retry:!1}).data,n=function(e){if(!e)return{key:"",tags:[]};var n=e.split("/"),a=(n[2]||n[1]).split(":"),i=(0,t.Z)(a,2);return{key:i[0],tags:i[1].split("-")}};return[e,{getImageAliasName:function(a){var t=n(a).key;return(null===e||void 0===e?void 0:e.imageInfo[t].name)||t},getImageIcon:function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"resources/icons/";if(!a)return"default.png";var i=n(a).key;return t+(void 0!==(null===e||void 0===e?void 0:e.imageInfo[i].icon)?null===e||void 0===e?void 0:e.imageInfo[i].icon:"default.png")},getImageTags:function(e){},getBaseVersion:function(e){return n(e).tags[0]},getBaseImage:function(e){return n(e).tags[1]},getImageMeta:n}]}},1936:function(e,n,a){a.r(n),a.d(n,{default:function(){return oe}});var t,i,l,o,r,s,u,d,c,g,m,p=a(4519),f=a(6980),v=a(4036),y=a(284),h=a(8499),_=a(3066),S=a(4473),k=a(9277),b=a(1748),F=a(3678),x=a(5444),j=a(5870),Z=a(3255),q=a(2048),K=a.n(q),Q=a(2556),w=function(e){var n=e.storageVolumeFrgmt,i=(0,b.$G)().t,l=(0,f.useFragment)(void 0!==t?t:t=a(8156),n),o=JSON.parse((null===l||void 0===l?void 0:l.usage)||"{}"),r=null===o||void 0===o?void 0:o.used_bytes,s=null===o||void 0===o?void 0:o.capacity_bytes,u={used_bytes:r,capacity_bytes:s,percent:Number((100*(s>0?r/s:0)).toFixed(1))};return(0,Q.jsxs)(F.Z,{size:"small",bordered:!0,column:3,children:[(0,Q.jsxs)(F.Z.Item,{label:i("storageHost.Usage"),span:3,children:[(null===u||void 0===u?void 0:u.percent)<100?(0,Q.jsx)(x.Z,{size:[200,15],percent:null===u||void 0===u?void 0:u.percent,strokeColor:(0,Z.lA)(null===u||void 0===u?void 0:u.percent)}):(0,Q.jsx)(x.Z,{size:[200,15],percent:null===u||void 0===u?void 0:u.percent,status:"exception"}),(0,Q.jsxs)(h.Z.Text,{type:"secondary",children:[i("storageHost.Used"),":"," "]}),(0,Z.en)(null===u||void 0===u?void 0:u.used_bytes),(0,Q.jsx)(h.Z.Text,{type:"secondary",children:" / "}),(0,Q.jsxs)(h.Z.Text,{type:"secondary",children:[i("storageHost.Total"),":"," "]}),(0,Z.en)(null===u||void 0===u?void 0:u.capacity_bytes)]}),(0,Q.jsx)(F.Z.Item,{label:i("agent.Endpoint"),children:null===l||void 0===l?void 0:l.path}),(0,Q.jsx)(F.Z.Item,{label:i("agent.BackendType"),children:null===l||void 0===l?void 0:l.backend}),(0,Q.jsx)(F.Z.Item,{label:i("agent.Capabilities"),children:K().map(null===l||void 0===l?void 0:l.capabilities,(function(e){return(0,Q.jsx)(j.Z,{children:e},e)}))})]})},L=a(9439),C=a(9080),V=a(7171),P=a(1413),D=a(4925),T=a(1215),I=["onSelectProject","domain"],E=function(e){var n=e.onSelectProject,t=e.domain,l=(0,D.Z)(e,I),o=(0,b.$G)().t,r=(0,f.useLazyLoadQuery)(void 0!==i?i:i=a(3361),{domain_name:t},{fetchPolicy:"store-and-network"}).projects;return(0,Q.jsx)(T.Z,(0,P.Z)((0,P.Z)({onChange:function(e,a){null===n||void 0===n||n(a)},placeholder:o("storageHost.quotaSettings.SelectProject")},l),{},{children:K().map(r,(function(e){return(0,Q.jsx)(T.Z.Option,{projectId:null===e||void 0===e?void 0:e.id,projectResourcePolicy:null===e||void 0===e?void 0:e.resource_policy,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))}))},H=["onSelectDomain"],M=function(e){var n=e.onSelectDomain,t=(0,D.Z)(e,H),i=(0,b.$G)().t,o=(0,f.useLazyLoadQuery)(void 0!==l?l:l=a(3614),{},{fetchPolicy:"store-and-network"}).domains;return(0,Q.jsxs)(T.Z,(0,P.Z)((0,P.Z)({onChange:function(e,a){null===n||void 0===n||n(a)},placeholder:i("storageHost.quotaSettings.SelectDomain")},t),{},{children:[K().map(o,(function(e){return(0,Q.jsx)(T.Z.Option,{domainName:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.name)})),";"]}))},$=["onSelectUser"],A=function(e){var n=e.onSelectUser,t=(0,D.Z)(e,$),i=(0,b.$G)().t,l=(0,p.useState)(""),r=(0,L.Z)(l,2),s=r[0],u=r[1],d=(0,p.useDeferredValue)(s),c=(0,f.useLazyLoadQuery)(void 0!==o?o:o=a(4880),{limit:150,offset:0,filter:0===(null===d||void 0===d?void 0:d.length)?null:'email ilike "%'+d+'%"'},{fetchPolicy:"store-and-network"}).user_list;return(0,Q.jsx)(T.Z,(0,P.Z)({filterOption:!1,searchValue:s,loading:d!==s,onSearch:function(e){u(e)},onChange:function(e){n(K().find(null===c||void 0===c?void 0:c.items,(function(n){return(null===n||void 0===n?void 0:n.email)===e})))},showSearch:!0,placeholder:i("storageHost.quotaSettings.SelectUser"),options:K().map(null===c||void 0===c?void 0:c.items,(function(e){return{value:null===e||void 0===e?void 0:e.email,label:null===e||void 0===e?void 0:e.email}})).sort((function(e,n){return e.value&&n.value&&e.value>n.value?1:-1}))},t))},N=a(2513),R=a(4027),U=a(6540),B=a(4787),O=a(558),z=a(6814),G=a(1662),W=["quotaScopeFrgmt","showAddButtonWhenEmpty","onClickEdit"],J=function(e){var n=e.quotaScopeFrgmt,t=e.showAddButtonWhenEmpty,i=e.onClickEdit,l=((0,D.Z)(e,W),(0,b.$G)().t),o=v.Z.useToken().token,u=(0,f.useFragment)(void 0!==r?r:r=a(1674),n),d=(0,f.useMutation)(void 0!==s?s:s=a(6685)),c=(0,L.Z)(d,2),g=c[0],m=c[1],p=(0,Q.jsx)(S.Z,{style:{width:"100%"},image:S.Z.PRESENTED_IMAGE_SIMPLE,description:(0,Q.jsx)("div",{children:l("storageHost.quotaSettings.SelectFirst")})}),y=(0,Q.jsx)(S.Z,{style:{width:"100%"},image:S.Z.PRESENTED_IMAGE_SIMPLE,description:(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("div",{style:{margin:10},children:l("storageHost.quotaSettings.ClickSettingButton")}),(0,Q.jsx)(N.ZP,{icon:(0,Q.jsx)(O.Z,{}),onClick:function(){return i&&i()},children:l("storageHost.quotaSettings.AddQuotaConfigs")})]})});return(0,Q.jsx)(R.Z,{bordered:!0,rowKey:"id",columns:[{title:l("storageHost.quotaSettings.QuotaScopeId"),dataIndex:"quota_scope_id",key:"quota_scope_id",render:function(e){return(0,Q.jsx)("code",{children:e})}},{title:l("storageHost.HardLimit")+" (GB)",dataIndex:["details","hard_limit_bytes"],key:"hard_limit_bytes",render:function(e){return(0,Q.jsx)(Q.Fragment,{children:(0,Z.Uz)(e)})}},{title:l("storageHost.Usage")+" (GB)",dataIndex:["details","usage_bytes"],key:"usage_bytes",render:function(e){return(0,Q.jsx)(Q.Fragment,{children:(0,Z.Uz)(e)})}},{title:l("general.Control"),key:"control",render:function(){return(0,Q.jsxs)(k.Z,{gap:o.marginSM,children:[(0,Q.jsx)(N.ZP,{icon:(0,Q.jsx)(z.Z,{}),onClick:function(){return i&&i()},children:l("button.Edit")}),(0,Q.jsx)(U.Z,{title:l("storageHost.quotaSettings.UnsetCustomSettings"),description:l("storageHost.quotaSettings.ConfirmUnsetCustomQuota"),placement:"bottom",onConfirm:function(){u&&g({variables:{quota_scope_id:u.quota_scope_id,storage_host_name:u.storage_host_name},onCompleted:function(){B.ZP.success(l("storageHost.quotaSettings.QuotaScopeSuccessfullyUpdated"))},onError:function(e){B.ZP.error(null===e||void 0===e?void 0:e.message)}})},children:(0,Q.jsx)(N.ZP,{loading:m,danger:!0,icon:(0,Q.jsx)(G.Z,{}),children:l("button.Unset")})})]})}}],dataSource:u?[u]:[],locale:{emptyText:t?y:p},pagination:!1})},Y=a(3842),X=a(8818),ee=["quotaScopeFrgmt","onRequestClose"],ne=function(e){var n,t=e.quotaScopeFrgmt,i=void 0===t?null:t,l=e.onRequestClose,o=(0,D.Z)(e,ee),r=(0,b.$G)().t,s=C.Z.useForm(),c=(0,L.Z)(s,1)[0],g=(0,f.useFragment)(void 0!==u?u:u=a(4133),i),m=(0,f.useMutation)(void 0!==d?d:d=a(5005)),p=(0,L.Z)(m,2),v=p[0],y=p[1];return(0,Q.jsx)(Y.Z,(0,P.Z)((0,P.Z)({},o),{},{style:{zIndex:1e4},destroyOnClose:!0,onOk:function(e){c.validateFields().then((function(e){v({variables:{quota_scope_id:(null===g||void 0===g?void 0:g.quota_scope_id)||"",storage_host_name:(null===g||void 0===g?void 0:g.storage_host_name)||"",props:{hard_limit_bytes:(0,Z.Hz)(null===e||void 0===e?void 0:e.hard_limit_bytes)}},onCompleted:function(e){var n,a;null!==e&&void 0!==e&&null!==(n=e.set_quota_scope)&&void 0!==n&&null!==(a=n.quota_scope)&&void 0!==a&&a.id?B.ZP.success(r("storageHost.quotaSettings.QuotaScopeSuccessfullyUpdated")):B.ZP.error(r("dialog.ErrorOccurred")),l()},onError:function(e){console.log(e),B.ZP.error(null===e||void 0===e?void 0:e.message)}})}))},confirmLoading:y,onCancel:l,title:r("storageHost.quotaSettings.QuotaSettings"),children:(0,Q.jsx)(C.Z,{form:c,preserve:!1,labelCol:{span:6},wrapperCol:{span:20},validateTrigger:["onChange","onBlur"],style:{marginBottom:40,marginTop:20},children:(0,Q.jsx)(C.Z.Item,{name:"hard_limit_bytes",label:r("storageHost.HardLimit"),initialValue:(0,Z.Uz)(null===g||void 0===g||null===(n=g.details)||void 0===n?void 0:n.hard_limit_bytes),rules:[{pattern:/^\d+(\.\d+)?$/,message:r("storageHost.quotaSettings.AllowNumberAndDot")||"Allows numbers and .(dot) only"}],children:(0,Q.jsx)(X.Z,{addonAfter:"GB",type:"number",step:.25,style:{width:"70%"}})})})}))},ae=a(374),te=a(7760),ie=function(e){var n=e.storageVolumeFrgmt,t=(0,b.$G)().t,i=(0,f.useFragment)(void 0!==c?c:c=a(6678),n),l=(0,p.useTransition)(),o=(0,L.Z)(l,2),r=o[0],s=o[1],u=(0,te.tQ)(),d=(0,p.useState)("user"),m=(0,L.Z)(d,2),v=m[0],y=m[1],h=(0,p.useState)(u),S=(0,L.Z)(h,2),F=S[0],x=S[1],j=(0,p.useState)(),q=(0,L.Z)(j,2),K=q[0],w=q[1];(0,p.useState)();var P=(0,p.useState)(),D=(0,L.Z)(P,2),T=D[0],I=D[1],H=(0,p.useState)(),$=(0,L.Z)(H,2),N=$[0],R=$[1];(0,p.useState)();var U=(0,Z.VQ)(v,("project"===v?K:T)||""),B=(0,ae.Z)(!1),O=(0,L.Z)(B,2),z=O[0],G=O[1].toggle,W=(0,te.Kr)("default"),Y=(0,L.Z)(W,1)[0],X=(0,f.useLazyLoadQuery)(void 0!==g?g:g=a(1047),{quota_scope_id:U,skipQuotaScope:void 0===U||""===U,storage_host_name:(null===i||void 0===i?void 0:i.id)||""},{fetchPolicy:"network-only",fetchKey:Y}).quota_scope;return(0,Q.jsx)(k.Z,{direction:"column",align:"stretch",children:(0,Q.jsxs)(_.Z,{title:t("storageHost.QuotaSettings"),tabList:[{key:"user",tab:t("storageHost.ForUser")},{key:"project",tab:t("storageHost.ForProject")}],activeTabKey:v,onTabChange:function(e){s((function(){y(e)}))},children:[(0,Q.jsx)(k.Z,{justify:"between",children:"project"===v?(0,Q.jsx)(k.Z,{style:{marginBottom:10},children:(0,Q.jsxs)(C.Z,{layout:"inline",children:[(0,Q.jsx)(C.Z.Item,{label:t("resourceGroup.Domain"),children:(0,Q.jsx)(M,{style:{width:"20vw",marginRight:10},value:F,onSelectDomain:function(e){s((function(){x(null===e||void 0===e?void 0:e.domainName),w(void 0)}))}})}),(0,Q.jsx)(C.Z.Item,{label:t("webui.menu.Project"),children:(0,Q.jsx)(E,{style:{width:"20vw"},value:K,disabled:!F,domain:F||"",onSelectProject:function(e){s((function(){w(null===e||void 0===e?void 0:e.projectId)}))}})})]})}):(0,Q.jsx)(C.Z,{layout:"inline",children:(0,Q.jsx)(C.Z.Item,{label:t("data.User"),children:(0,Q.jsx)(A,{style:{width:"30vw",marginBottom:10},value:N,onSelectUser:function(e){R(null===e||void 0===e?void 0:e.email),s((function(){I(null===e||void 0===e?void 0:e.id)}))}})})})}),(0,Q.jsx)(V.Z,{spinning:r,children:(0,Q.jsx)(J,{quotaScopeFrgmt:X||null,onClickEdit:function(){G()},showAddButtonWhenEmpty:"project"===v&&!!K||"user"===v&&!!T})}),(0,Q.jsx)(ne,{open:z,quotaScopeFrgmt:X||null,onRequestClose:function(){G()}})]})})},le=a(1502),oe=function(e){var n,t,i=e.storageHostId,l=v.Z.useToken().token,o=(0,te.Dj)(),r=(0,le.useWebComponentInfo)().moveTo,s=(0,b.$G)().t,u=(0,f.useLazyLoadQuery)(void 0!==m?m:m=a(2913),{id:i||""}).storage_volume,d=null!==(n=null===u||void 0===u||null===(t=u.capabilities)||void 0===t?void 0:t.includes("quota"))&&void 0!==n&&n;return(0,Q.jsxs)(k.Z,{direction:"column",align:"stretch",style:{margin:l.marginSM,gap:l.margin},children:[(0,Q.jsx)(y.Z,{items:[{title:"Resources",onClick:function(e){e.preventDefault(),r("/agent")},href:"/agent"},{title:"Storage setting"}]}),(0,Q.jsx)(h.Z.Title,{level:3,style:{margin:0},children:i||""}),(0,Q.jsx)(w,{storageVolumeFrgmt:u||null}),o.supports("quota-scope")&&(0,Q.jsx)(Q.Fragment,{children:d?(0,Q.jsx)(p.Suspense,{fallback:(0,Q.jsx)("div",{children:"loading..."}),children:(0,Q.jsx)(ie,{storageVolumeFrgmt:u||null})}):(0,Q.jsx)(_.Z,{title:s("storageHost.QuotaSettings"),children:(0,Q.jsx)(S.Z,{image:S.Z.PRESENTED_IMAGE_SIMPLE,description:s("storageHost.QuotaDoesNotSupported")})})})]})}},2913:function(e,n,a){a.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"id"}],n=[{kind:"Variable",name:"id",variableName:"id"}],a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"StorageHostSettingPageQuery",selections:[{alias:null,args:n,concreteType:"StorageVolume",kind:"LinkedField",name:"storage_volume",plural:!1,selections:[a,t,{args:null,kind:"FragmentSpread",name:"StorageHostResourcePanelFragment"},{args:null,kind:"FragmentSpread",name:"StorageHostSettingsPanel_storageVolumeFrgmt"}],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"StorageHostSettingPageQuery",selections:[{alias:null,args:n,concreteType:"StorageVolume",kind:"LinkedField",name:"storage_volume",plural:!1,selections:[a,t,{alias:null,args:null,kind:"ScalarField",name:"backend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage",storageKey:null}],storageKey:null}]},params:{cacheID:"821175f86743d9d81be2a55aca371919",id:null,metadata:{},name:"StorageHostSettingPageQuery",operationKind:"query",text:"query StorageHostSettingPageQuery(\n  $id: String\n) {\n  storage_volume(id: $id) {\n    id\n    capabilities\n    ...StorageHostResourcePanelFragment\n    ...StorageHostSettingsPanel_storageVolumeFrgmt\n  }\n}\n\nfragment StorageHostResourcePanelFragment on StorageVolume {\n  id\n  backend\n  capabilities\n  path\n  usage\n}\n\nfragment StorageHostSettingsPanel_storageVolumeFrgmt on StorageVolume {\n  id\n  capabilities\n}\n"}}}();t.hash="f6e77057e83b0449ef99e8918e794b24",n.default=t}}]);
//# sourceMappingURL=936.34b45298.chunk.js.map