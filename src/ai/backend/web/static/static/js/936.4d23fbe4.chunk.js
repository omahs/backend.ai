"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[936],{77758:function(e,n,a){a.d(n,{Z:function(){return r}});var t=a(1413),i=a(36459),l=a(83842),o=(a(4519),a(2556)),r=function(e){var n,a=Object.assign({},((0,i.Z)(e),e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:".ant-modal.bai-modal .ant-modal-content {\n  padding: var(--general-modal-content-padding, 0);\n}\n.ant-modal.bai-modal .ant-modal-body {\n  padding: var(--general-modal-body-padding, 0 24px);\n}\n\n.ant-modal.bai-modal .ant-modal-footer {\n  padding: var(--general-modal-footer-padding, 0 20px 24px 20px);\n}\n\n.ant-modal.bai-modal .ant-modal-header {\n  border-bottom: 1px solid rgb(221, 221, 221);\n  border-width: 100%;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.ant-modal.bai-modal .ant-modal-content .ant-modal-header,\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  padding: var(--general-modal-header-padding, 10px 20px);\n  height: var(--general-modal-header-height, 69px);\n}\n\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  /* center */\n  top: 0;\n}\n"}),(0,o.jsx)(l.Z,(0,t.Z)({centered:null===(n=a.centered)||void 0===n||n,className:"bai-modal"},a))]})}},61502:function(e,n,a){a.r(n),a.d(n,{default:function(){return C},useShadowRoot:function(){return K},useWebComponentInfo:function(){return Q}});var t=a(29439),i=a(74165),l=a(15861),o=a(1413);function r(e,n){var a=(0,o.Z)({},n);return function(e){for(var n,a=/(\w+)\s@\s*(\w+)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/g,i=[];null!==(n=a.exec(e));){var l=n,o=(0,t.Z)(l,5),r=o[0],s=o[1],u=o[2],d=o[3],c=o[4];i.push({fieldName:s,directive:u,argumentName:d,argumentValue:c,originFieldStr:r})}return i}(e).forEach((function(t){if("skipOnClient"===t.directive&&"if"===t.argumentName&&(e=!t.argumentValue||!0!==n[t.argumentValue.substring(1)]&&"true"!==t.argumentValue?e.replace(t.originFieldStr,t.originFieldStr.replace(/@\s*(skipOnClient)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/,"")):e.replace(t.originFieldStr,""),t.argumentValue.startsWith("$")&&2===e.split(t.argumentValue).length)){var i=t.argumentValue.substring(1),l=new RegExp(".*".concat(i,".*\n"),"g");e=e.replace(l,""),delete a[t.argumentValue.substring(1)]}})),{query:e,variables:a}}var s=a(41011);s.RelayFeatureFlags.ENABLE_RELAY_RESOLVERS=!0;var u=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n,a){var t,l,o,s,u,d;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r(n.text||"",a),s={query:o.query,variables:o.variables},u=null===(t=globalThis.backendaiclient)||void 0===t?void 0:t.newSignedRequest("POST","/admin/gql",s),e.next=5,null===(l=globalThis.backendaiclient)||void 0===l?void 0:l._wrapWithPromise(u,!1,null,1e4,0);case 5:return d=e.sent,e.abrupt("return",d);case 7:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}();var d,c=new s.Environment({network:s.Network.create(u,void 0),store:new s.Store(new s.RecordSource)}),g=a(80382),m=a(27340),p=a(27398),f=a(49883),v=a(66670),h=a(64447),y=a(13881),_=a(4519),S=a(81748),b=a(87112),k=a(16980),F=a(51843),x=a(12674),j=a(2556),Z=_.createContext(null),q=_.createContext(null),K=function(){return _.useContext(q)},Q=function(){return _.useContext(Z)},w=new b.QueryClient({defaultOptions:{queries:{suspense:!0,refetchOnWindowFocus:!1,retry:!1}}});h.ZP.use(S.Db).use(y.Z).init({backend:{loadPath:"/resources/i18n/{{lng}}.json"},lng:(null===globalThis||void 0===globalThis||null===(d=globalThis.backendaioptions)||void 0===d?void 0:d.get("current_language"))||"en",fallbackLng:"en",interpolation:{escapeValue:!1}});var L=function(){var e=(0,x.s0)();return(0,_.useLayoutEffect)((function(){var n=function(n){var a=n.detail;e(a,{replace:!0})};return document.addEventListener("react-navigate",n),function(){document.removeEventListener("react-navigate",n)}}),[e]),null},C=function(e){var n=e.children,a=e.value,i=e.styles,l=e.shadowRoot,o=e.dispatchEvent,r=(0,_.useMemo)((function(){return(0,m.Df)()}),[]),s=function(){var e,n=(0,_.useState)(null===globalThis||void 0===globalThis||null===(e=globalThis.backendaioptions)||void 0===e?void 0:e.get("current_language")),a=(0,t.Z)(n,2),i=a[0],l=a[1],o=(0,S.$G)().i18n;return(0,_.useEffect)((function(){setTimeout((function(){return null===o||void 0===o?void 0:o.changeLanguage(i)}),0)}),[]),(0,_.useEffect)((function(){var e=function(e){var n,a;l(null===e||void 0===e||null===(n=e.detail)||void 0===n?void 0:n.lang);var t=(null===e||void 0===e||null===(a=e.detail)||void 0===a?void 0:a.lang)||"en";null===o||void 0===o||o.changeLanguage(t)};return window.addEventListener("langChanged",e),function(){return window.removeEventListener("langChanged",e)}}),[o]),[i]}(),u=(0,t.Z)(s,1)[0],d=(0,g.x)(),h=(0,_.useMemo)((function(){return{value:a,dispatchEvent:o,moveTo:function(e){o("moveTo",{path:e})}}}),[a,o]);return(0,j.jsx)(j.Fragment,{children:c&&(0,j.jsx)(k.RelayEnvironmentProvider,{environment:c,children:(0,j.jsxs)(_.StrictMode,{children:[(0,j.jsxs)("style",{children:[i,".anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.ant-table-wrapper {\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n"]}),(0,j.jsx)(b.QueryClientProvider,{client:w,children:(0,j.jsx)(q.Provider,{value:l,children:(0,j.jsx)(Z.Provider,{value:h,children:(0,j.jsx)(p.ZP,{getPopupContainer:function(e){return l},locale:"ko"===u?v.Z:f.Z,theme:d,children:(0,j.jsx)(m.V9,{container:l,cache:r,children:(0,j.jsx)(_.Suspense,{fallback:"",children:(0,j.jsxs)(F.VK,{children:[(0,j.jsx)(L,{}),n]})})})})})})})]})})})}},33614:function(e,n,a){a.r(n);var t=function(){var e=[{alias:null,args:[{kind:"Literal",name:"is_active",value:!0}],concreteType:"Domain",kind:"LinkedField",name:"domains",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:"domains(is_active:true)"}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"DomainSelectorQuery",selections:e,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"DomainSelectorQuery",selections:e},params:{cacheID:"9df762094b74dc3eb8079edfcc73765f",id:null,metadata:{},name:"DomainSelectorQuery",operationKind:"query",text:"query DomainSelectorQuery {\n  domains(is_active: true) {\n    name\n  }\n}\n"}}}();t.hash="c14d362fa40cf9a3cef5d1d71202cc5f",n.default=t},13361:function(e,n,a){a.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"domain_name"}],n=[{alias:"projects",args:[{kind:"Variable",name:"domain_name",variableName:"domain_name"},{kind:"Literal",name:"is_active",value:!0}],concreteType:"Group",kind:"LinkedField",name:"groups",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"ProjectSelectorQuery",selections:n,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"ProjectSelectorQuery",selections:n},params:{cacheID:"eecad68ff1a08d753ce22ff2c5136c26",id:null,metadata:{},name:"ProjectSelectorQuery",operationKind:"query",text:"query ProjectSelectorQuery(\n  $domain_name: String\n) {\n  projects: groups(domain_name: $domain_name, is_active: true) {\n    id\n    is_active\n    name\n    resource_policy\n  }\n}\n"}}}();t.hash="2845b31197571f750613f64207ded239",n.default=t},81674:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"QuotaScopeCardFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage_bytes",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"QuotaSettingModalFragment"}],type:"QuotaScope",abstractKey:null,hash:"78fe420c92ce5b9c8d5c133d1f9c389f"};n.default=t},96685:function(e,n,a){a.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},{defaultValue:null,kind:"LocalArgument",name:"storage_host_name"}],n=[{alias:null,args:[{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}],concreteType:"UnsetQuotaScope",kind:"LinkedField",name:"unset_quota_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"QuotaScopeCardUnsetMutation",selections:n,type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"QuotaScopeCardUnsetMutation",selections:n},params:{cacheID:"338836966362b14e823520f40fa56a73",id:null,metadata:{},name:"QuotaScopeCardUnsetMutation",operationKind:"mutation",text:"mutation QuotaScopeCardUnsetMutation(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n) {\n  unset_quota_scope(quota_scope_id: $quota_scope_id, storage_host_name: $storage_host_name) {\n    quota_scope {\n      id\n      quota_scope_id\n      storage_host_name\n      details {\n        hard_limit_bytes\n      }\n    }\n  }\n}\n"}}}();t.hash="272001cc642518fb66015dcc367b9f65",n.default=t},64133:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"QuotaSettingModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],type:"QuotaScope",abstractKey:null,hash:"1c5ad8315a2d78cb376e7436dc6a8627"};n.default=t},95005:function(e,n,a){a.r(n);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"props"},n={defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},a={defaultValue:null,kind:"LocalArgument",name:"storage_host_name"},t=[{alias:null,args:[{kind:"Variable",name:"props",variableName:"props"},{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}],concreteType:"SetQuotaScope",kind:"LinkedField",name:"set_quota_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[e,n,a],kind:"Fragment",metadata:null,name:"QuotaSettingModalSetMutation",selections:t,type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[n,a,e],kind:"Operation",name:"QuotaSettingModalSetMutation",selections:t},params:{cacheID:"d337cab9be9523bfde2bfb7d6bed595b",id:null,metadata:{},name:"QuotaSettingModalSetMutation",operationKind:"mutation",text:"mutation QuotaSettingModalSetMutation(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n  $props: QuotaScopeInput!\n) {\n  set_quota_scope(quota_scope_id: $quota_scope_id, storage_host_name: $storage_host_name, props: $props) {\n    quota_scope {\n      id\n      quota_scope_id\n      storage_host_name\n      details {\n        hard_limit_bytes\n      }\n    }\n  }\n}\n"}}}();t.hash="0e8509b3174920c1dd917ece91d41161",n.default=t},58156:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StorageHostResourcePanelFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"backend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage",storageKey:null}],type:"StorageVolume",abstractKey:null,hash:"30a1b4101eeb2fae45385780dbc0ddcc"};n.default=t},81047:function(e,n,a){a.r(n);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},n={defaultValue:null,kind:"LocalArgument",name:"skipQuotaScope"},a={defaultValue:null,kind:"LocalArgument",name:"storage_host_name"},t=[{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}];return{fragment:{argumentDefinitions:[e,n,a],kind:"Fragment",metadata:null,name:"StorageHostSettingsPanelQuery",selections:[{condition:"skipQuotaScope",kind:"Condition",passingValue:!1,selections:[{alias:null,args:t,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"QuotaSettingModalFragment"},{args:null,kind:"FragmentSpread",name:"QuotaScopeCardFragment"}],storageKey:null}]}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,a,n],kind:"Operation",name:"StorageHostSettingsPanelQuery",selections:[{condition:"skipQuotaScope",kind:"Condition",passingValue:!1,selections:[{alias:null,args:t,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage_bytes",storageKey:null}],storageKey:null}],storageKey:null}]}]},params:{cacheID:"378699d92e64ba9559bfbe8e533d6c6a",id:null,metadata:{},name:"StorageHostSettingsPanelQuery",operationKind:"query",text:"query StorageHostSettingsPanelQuery(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n  $skipQuotaScope: Boolean!\n) {\n  quota_scope(storage_host_name: $storage_host_name, quota_scope_id: $quota_scope_id) @skip(if: $skipQuotaScope) {\n    ...QuotaSettingModalFragment\n    ...QuotaScopeCardFragment\n    id\n  }\n}\n\nfragment QuotaScopeCardFragment on QuotaScope {\n  id\n  quota_scope_id\n  storage_host_name\n  details {\n    hard_limit_bytes\n    usage_bytes\n  }\n  ...QuotaSettingModalFragment\n}\n\nfragment QuotaSettingModalFragment on QuotaScope {\n  id\n  quota_scope_id\n  storage_host_name\n  details {\n    hard_limit_bytes\n  }\n}\n"}}}();t.hash="ef16372a7f5bf0c1844a65d4b63fe4d9",n.default=t},16678:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StorageHostSettingsPanel_storageVolumeFrgmt",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null}],type:"StorageVolume",abstractKey:null,hash:"2f9e5e6060806e6f9265e5cbbd325afe"};n.default=t},54880:function(e,n,a){a.r(n);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"filter"},n={defaultValue:null,kind:"LocalArgument",name:"limit"},a={defaultValue:null,kind:"LocalArgument",name:"offset"},t=[{alias:null,args:[{kind:"Variable",name:"filter",variableName:"filter"},{kind:"Literal",name:"is_active",value:!0},{kind:"Variable",name:"limit",variableName:"limit"},{kind:"Variable",name:"offset",variableName:"offset"}],concreteType:"UserList",kind:"LinkedField",name:"user_list",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"items",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[e,n,a],kind:"Fragment",metadata:null,name:"UserSelectorQuery",selections:t,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[n,a,e],kind:"Operation",name:"UserSelectorQuery",selections:t},params:{cacheID:"f552e13a727e58f49a7a7e49a466d4d2",id:null,metadata:{},name:"UserSelectorQuery",operationKind:"query",text:"query UserSelectorQuery(\n  $limit: Int!\n  $offset: Int!\n  $filter: String\n) {\n  user_list(limit: $limit, offset: $offset, filter: $filter, is_active: true) {\n    items {\n      id\n      is_active\n      email\n      resource_policy\n    }\n  }\n}\n"}}}();t.hash="323d93fb2d8eb4ee2d1d3677121f9ad2",n.default=t},43255:function(e,n,a){a.d(n,{Cd:function(){return f},Hz:function(){return d},LD:function(){return u},Lc:function(){return o},PZ:function(){return g},Uz:function(){return c},VQ:function(){return m},We:function(){return l},XG:function(){return s},lA:function(){return p},y3:function(){return r}});var t=a(87760),i=a(2556),l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/(<br\s*\/?>|\n)/;return e.split(n).map((function(e,a){return e.match(n)?(0,i.jsx)("br",{},a):e}))},o=function(e){var n=e.method,a=e.url,t=e.body,i=void 0===t?null:t,l=e.client,o=null===l||void 0===l?void 0:l.newSignedRequest(n,a,i,null);return null===l||void 0===l?void 0:l._wrapWithPromise(o)},r=function(){var e=(0,t.Dj)();return function(n){var a=n.method,t=n.url,i=n.body;return o({method:a,url:t,body:void 0===i?null:i,client:e})}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=Math.pow(10,3);n=n<0?0:n;var t=Math.floor(Math.log(Math.round(e))/Math.log(a));return t=t<0?0:t,parseFloat((e/Math.pow(a,t)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB"][t]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return 0;"string"===typeof e&&(e=parseInt(e));var t,i,l=Math.pow(2,10);return n=n<0||a?0:n,t=(t=Math.floor(Math.log(Math.round(e))/Math.log(l)))<0?0:t,i=a?["","Ki","Mi","Gi","Ti","Pi","Ei"]:["Bytes","KiB","MiB","GiB","TiB","PiB","EiB"],parseFloat((e/Math.pow(l,t)).toFixed(n))+" "+i[t]};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=Math.pow(10,9);return Math.round(n*e)},c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return null===e||void 0===e?arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-":e?(e/Math.pow(10,9)).toFixed(n):e};function g(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,t=["B","K","M","G","T","P","E"],i=e.slice(-1).toUpperCase(),l=parseFloat(e.slice(0,-1)),o=t.indexOf(i);if(-1===o||isNaN(l))throw new Error("Invalid size format");var r=l*Math.pow(1024,o),s=n?t.indexOf(n.toUpperCase()):o,u=r/Math.pow(1024,s),d=u.toFixed(a);return{number:u,numberFixed:d,unit:t[s],numberUnit:"".concat(d).concat(t[s])}}var m=function(e,n){return""===n||void 0===n?"":n.startsWith("".concat(e,":"))?n:"".concat(e,":").concat(n)},p=function(e){return e<70?"rgba(58, 178, 97, 1)":e<90?"rgb(223, 179, 23)":"#ef5350"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t=a+t>e.length?e.length:t,e.substring(0,a)+n.repeat(t)+e.substring(a+t,e.length)}},87760:function(e,n,a){a.d(n,{Dj:function(){return d},Kr:function(){return o},M:function(){return u},dS:function(){return c},qh:function(){return s},tQ:function(){return r}});var t=a(29439),i=a(4519),l=a(87112),o=function(e){return function(e){var n=(0,i.useState)(e||(new Date).toISOString()),a=(0,t.Z)(n,2),l=a[0],o=a[1];return[l,function(e){o(e||(new Date).toISOString())}]}(e)},r=function(){return d()._config.domainName},s=function(){var e=d(),n=(0,i.useState)({name:e.current_group,id:e.groupIds[e.current_group]}),a=(0,t.Z)(n,2),l=a[0],o=a[1];return(0,i.useEffect)((function(){var n=function(n){var a=n.detail;o({name:a,id:e.groupIds[a]})};return document.addEventListener("backend-ai-group-changed",n),function(){document.removeEventListener("backend-ai-group-changed",n)}})),l},u=function(e){var n=e.api_endpoint;return(0,i.useMemo)((function(){var e=new globalThis.BackendAIClientConfig("","",n,"SESSION");return new globalThis.BackendAIClient(e,"Backend.AI Console.")}),[n])},d=function(){return(0,l.useQuery)({queryKey:"backendai-client-for-suspense",queryFn:function(){return new Promise((function(e){if("undefined"!==typeof globalThis.backendaiclient&&null!==globalThis.backendaiclient&&!1!==globalThis.backendaiclient.ready)return e(globalThis.backendaiclient);document.addEventListener("backend-ai-connected",(function n(){e(globalThis.backendaiclient),document.removeEventListener("backend-ai-connected",n)}))}))},retry:!1,suspense:!0}).data},c=function(){var e=(0,l.useQuery)({queryKey:"backendai-metadata-for-suspense",queryFn:function(){return fetch("resources/image_metadata.json").then((function(e){return e.json()})).then((function(e){return e}))},suspense:!0,retry:!1}).data,n=function(e){if(!e)return{key:"",tags:[]};var n=e.split("/"),a=(n[2]||n[1]).split(":"),i=(0,t.Z)(a,2);return{key:i[0],tags:i[1].split("-")}};return[e,{getImageAliasName:function(a){var t=n(a).key;return(null===e||void 0===e?void 0:e.imageInfo[t].name)||t},getImageIcon:function(a){var t,i,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"resources/icons/";if(!a)return"default.png";var o=n(a).key;return l+(void 0!==(null===e||void 0===e||null===(t=e.imageInfo[o])||void 0===t?void 0:t.icon)?null===e||void 0===e||null===(i=e.imageInfo[o])||void 0===i?void 0:i.icon:"default.png")},getImageTags:function(e){},getBaseVersion:function(e){return n(e).tags[0]},getBaseImage:function(e){return n(e).tags[1]},getImageMeta:n}]}},31936:function(e,n,a){a.r(n),a.d(n,{default:function(){return oe}});var t,i,l,o,r,s,u,d,c,g,m,p=a(61502),f=a(99277),v=a(43255),h=a(21346),y=a(55444),_=a(28499),S=a(82548),b=a(32048),k=a.n(b),F=a(81748),x=a(16980),j=a(2556),Z=function(e){var n=e.storageVolumeFrgmt,i=(0,F.$G)().t,l=(0,x.useFragment)(void 0!==t?t:t=a(58156),n),o=JSON.parse((null===l||void 0===l?void 0:l.usage)||"{}"),r=null===o||void 0===o?void 0:o.used_bytes,s=null===o||void 0===o?void 0:o.capacity_bytes,u={used_bytes:r,capacity_bytes:s,percent:Number((100*(s>0?r/s:0)).toFixed(1))};return(0,j.jsxs)(h.Z,{size:"small",bordered:!0,column:3,children:[(0,j.jsxs)(h.Z.Item,{label:i("storageHost.Usage"),span:3,children:[(null===u||void 0===u?void 0:u.percent)<100?(0,j.jsx)(y.Z,{size:[200,15],percent:null===u||void 0===u?void 0:u.percent,strokeColor:(0,v.lA)(null===u||void 0===u?void 0:u.percent)}):(0,j.jsx)(y.Z,{size:[200,15],percent:null===u||void 0===u?void 0:u.percent,status:"exception"}),(0,j.jsxs)(_.Z.Text,{type:"secondary",children:[i("storageHost.Used"),":"," "]}),(0,v.XG)(null===u||void 0===u?void 0:u.used_bytes),(0,j.jsx)(_.Z.Text,{type:"secondary",children:" / "}),(0,j.jsxs)(_.Z.Text,{type:"secondary",children:[i("storageHost.Total"),":"," "]}),(0,v.XG)(null===u||void 0===u?void 0:u.capacity_bytes)]}),(0,j.jsx)(h.Z.Item,{label:i("agent.Endpoint"),children:null===l||void 0===l?void 0:l.path}),(0,j.jsx)(h.Z.Item,{label:i("agent.BackendType"),children:null===l||void 0===l?void 0:l.backend}),(0,j.jsx)(h.Z.Item,{label:i("agent.Capabilities"),children:k().map(null===l||void 0===l?void 0:l.capabilities,(function(e){return(0,j.jsx)(S.Z,{children:e},e)}))})]})},q=a(29439),K=a(87760),Q=a(1413),w=a(44925),L=a(71312),C=a(4519),P=["onSelectDomain"],T=function(e){var n=e.onSelectDomain,t=(0,w.Z)(e,P),l=(0,F.$G)().t,o=(0,x.useLazyLoadQuery)(void 0!==i?i:i=a(33614),{},{fetchPolicy:"store-and-network"}).domains;return(0,j.jsxs)(L.Z,(0,Q.Z)((0,Q.Z)({onChange:function(e,a){null===n||void 0===n||n(a)},placeholder:l("storageHost.quotaSettings.SelectDomain")},t),{},{children:[k().map(o,(function(e){return(0,j.jsx)(L.Z.Option,{domainName:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.name)})),";"]}))},V=["onSelectProject","domain"],M=function(e){var n=e.onSelectProject,t=e.domain,i=(0,w.Z)(e,V),o=(0,F.$G)().t,r=(0,x.useLazyLoadQuery)(void 0!==l?l:l=a(13361),{domain_name:t},{fetchPolicy:"store-and-network"}).projects;return(0,j.jsx)(L.Z,(0,Q.Z)((0,Q.Z)({onChange:function(e,a){null===n||void 0===n||n(a)},placeholder:o("storageHost.quotaSettings.SelectProject")},i),{},{children:k().map(r,(function(e){return(0,j.jsx)(L.Z.Option,{projectId:null===e||void 0===e?void 0:e.id,projectResourcePolicy:null===e||void 0===e?void 0:e.resource_policy,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))}))},D=a(20558),E=a(56814),I=a(31662),H=a(44036),$=a(54473),B=a(12513),A=a(81722),N=a(41366),U=a(32360),R=["quotaScopeFrgmt","showAddButtonWhenEmpty","onClickEdit"],O=function(e){var n=e.quotaScopeFrgmt,t=e.showAddButtonWhenEmpty,i=e.onClickEdit,l=((0,w.Z)(e,R),(0,F.$G)().t),s=H.Z.useToken().token,u=(0,x.useFragment)(void 0!==o?o:o=a(81674),n),d=(0,x.useMutation)(void 0!==r?r:r=a(96685)),c=(0,q.Z)(d,2),g=c[0],m=c[1],p=(0,j.jsx)($.Z,{style:{width:"100%"},image:$.Z.PRESENTED_IMAGE_SIMPLE,description:(0,j.jsx)("div",{children:l("storageHost.quotaSettings.SelectFirst")})}),h=(0,j.jsx)($.Z,{style:{width:"100%"},image:$.Z.PRESENTED_IMAGE_SIMPLE,description:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{style:{margin:10},children:l("storageHost.quotaSettings.ClickSettingButton")}),(0,j.jsx)(B.ZP,{icon:(0,j.jsx)(D.Z,{}),onClick:function(){return i&&i()},children:l("storageHost.quotaSettings.AddQuotaConfigs")})]})});return(0,j.jsx)(A.Z,{bordered:!0,rowKey:"id",columns:[{title:l("storageHost.quotaSettings.QuotaScopeId"),dataIndex:"quota_scope_id",key:"quota_scope_id",render:function(e){return(0,j.jsx)("code",{children:e})}},{title:l("storageHost.HardLimit")+" (GB)",dataIndex:["details","hard_limit_bytes"],key:"hard_limit_bytes",render:function(e){return(0,j.jsx)(j.Fragment,{children:(0,v.Uz)(e)})}},{title:l("storageHost.Usage")+" (GB)",dataIndex:["details","usage_bytes"],key:"usage_bytes",render:function(e){return(0,j.jsx)(j.Fragment,{children:(0,v.Uz)(e)})}},{title:l("general.Control"),key:"control",render:function(){return(0,j.jsxs)(f.Z,{gap:s.marginSM,children:[(0,j.jsx)(B.ZP,{icon:(0,j.jsx)(E.Z,{}),onClick:function(){return i&&i()},children:l("button.Edit")}),(0,j.jsx)(N.Z,{title:l("storageHost.quotaSettings.UnsetCustomSettings"),description:l("storageHost.quotaSettings.ConfirmUnsetCustomQuota"),placement:"bottom",onConfirm:function(){u&&g({variables:{quota_scope_id:u.quota_scope_id,storage_host_name:u.storage_host_name},onCompleted:function(){U.ZP.success(l("storageHost.quotaSettings.QuotaScopeSuccessfullyUpdated"))},onError:function(e){U.ZP.error(null===e||void 0===e?void 0:e.message)}})},children:(0,j.jsx)(B.ZP,{loading:m,danger:!0,icon:(0,j.jsx)(I.Z,{}),children:l("button.Unset")})})]})}}],dataSource:u?[u]:[],locale:{emptyText:t?h:p},pagination:!1})},G=a(77758),z=a(42257),W=a(38818),X=["quotaScopeFrgmt","onRequestClose"],J=function(e){var n,t=e.quotaScopeFrgmt,i=void 0===t?null:t,l=e.onRequestClose,o=(0,w.Z)(e,X),r=(0,F.$G)().t,d=z.Z.useForm(),c=(0,q.Z)(d,1)[0],g=(0,x.useFragment)(void 0!==s?s:s=a(64133),i),m=(0,x.useMutation)(void 0!==u?u:u=a(95005)),p=(0,q.Z)(m,2),f=p[0],h=p[1];return(0,j.jsx)(G.Z,(0,Q.Z)((0,Q.Z)({},o),{},{style:{zIndex:1e4},destroyOnClose:!0,onOk:function(e){c.validateFields().then((function(e){f({variables:{quota_scope_id:(null===g||void 0===g?void 0:g.quota_scope_id)||"",storage_host_name:(null===g||void 0===g?void 0:g.storage_host_name)||"",props:{hard_limit_bytes:(0,v.Hz)(null===e||void 0===e?void 0:e.hard_limit_bytes)}},onCompleted:function(e){var n,a;null!==e&&void 0!==e&&null!==(n=e.set_quota_scope)&&void 0!==n&&null!==(a=n.quota_scope)&&void 0!==a&&a.id?U.ZP.success(r("storageHost.quotaSettings.QuotaScopeSuccessfullyUpdated")):U.ZP.error(r("dialog.ErrorOccurred")),l()},onError:function(e){console.log(e),U.ZP.error(null===e||void 0===e?void 0:e.message)}})}))},confirmLoading:h,onCancel:l,title:r("storageHost.quotaSettings.QuotaSettings"),children:(0,j.jsx)(z.Z,{form:c,preserve:!1,labelCol:{span:6},wrapperCol:{span:20},validateTrigger:["onChange","onBlur"],style:{marginBottom:40,marginTop:20},children:(0,j.jsx)(z.Z.Item,{name:"hard_limit_bytes",label:r("storageHost.HardLimit"),initialValue:(0,v.Uz)(null===g||void 0===g||null===(n=g.details)||void 0===n?void 0:n.hard_limit_bytes),rules:[{pattern:/^\d+(\.\d+)?$/,message:r("storageHost.quotaSettings.AllowNumberAndDot")||"Allows numbers and .(dot) only"}],children:(0,j.jsx)(W.Z,{addonAfter:"GB",type:"number",step:.25,style:{width:"70%"}})})})}))},Y=["onSelectUser"],ee=function(e){var n=e.onSelectUser,t=(0,w.Z)(e,Y),i=(0,F.$G)().t,l=(0,C.useState)(""),o=(0,q.Z)(l,2),r=o[0],s=o[1],u=(0,C.useDeferredValue)(r),c=(0,x.useLazyLoadQuery)(void 0!==d?d:d=a(54880),{limit:150,offset:0,filter:0===(null===u||void 0===u?void 0:u.length)?null:'email ilike "%'+u+'%"'},{fetchPolicy:"store-and-network"}).user_list;return(0,j.jsx)(L.Z,(0,Q.Z)({filterOption:!1,searchValue:r,loading:u!==r,onSearch:function(e){s(e)},onChange:function(e){n(k().find(null===c||void 0===c?void 0:c.items,(function(n){return(null===n||void 0===n?void 0:n.email)===e})))},showSearch:!0,placeholder:i("storageHost.quotaSettings.SelectUser"),options:k().map(null===c||void 0===c?void 0:c.items,(function(e){return{value:null===e||void 0===e?void 0:e.email,label:null===e||void 0===e?void 0:e.email}})).sort((function(e,n){return e.value&&n.value&&e.value>n.value?1:-1}))},t))},ne=a(63703),ae=a(53066),te=a(39883),ie=function(e){var n=e.storageVolumeFrgmt,t=(0,F.$G)().t,i=(0,x.useFragment)(void 0!==c?c:c=a(16678),n),l=(0,C.useTransition)(),o=(0,q.Z)(l,2),r=o[0],s=o[1],u=(0,K.tQ)(),d=(0,C.useState)("user"),m=(0,q.Z)(d,2),p=m[0],h=m[1],y=(0,C.useState)(u),_=(0,q.Z)(y,2),S=_[0],b=_[1],k=(0,C.useState)(),Z=(0,q.Z)(k,2),Q=Z[0],w=Z[1];(0,C.useState)();var L=(0,C.useState)(),P=(0,q.Z)(L,2),V=P[0],D=P[1],E=(0,C.useState)(),I=(0,q.Z)(E,2),H=I[0],$=I[1];(0,C.useState)();var B=(0,v.VQ)(p,("project"===p?Q:V)||""),A=(0,ne.Z)(!1),N=(0,q.Z)(A,2),U=N[0],R=N[1].toggle,G=(0,K.Kr)("default"),W=(0,q.Z)(G,1)[0],X=(0,x.useLazyLoadQuery)(void 0!==g?g:g=a(81047),{quota_scope_id:B,skipQuotaScope:void 0===B||""===B,storage_host_name:(null===i||void 0===i?void 0:i.id)||""},{fetchPolicy:"network-only",fetchKey:W}).quota_scope;return(0,j.jsx)(f.Z,{direction:"column",align:"stretch",children:(0,j.jsxs)(ae.Z,{title:t("storageHost.QuotaSettings"),tabList:[{key:"user",tab:t("storageHost.ForUser")},{key:"project",tab:t("storageHost.ForProject")}],activeTabKey:p,onTabChange:function(e){s((function(){h(e)}))},children:[(0,j.jsx)(f.Z,{justify:"between",children:"project"===p?(0,j.jsx)(f.Z,{style:{marginBottom:10},children:(0,j.jsxs)(z.Z,{layout:"inline",children:[(0,j.jsx)(z.Z.Item,{label:t("resourceGroup.Domain"),children:(0,j.jsx)(T,{style:{width:"20vw",marginRight:10},value:S,onSelectDomain:function(e){s((function(){b(null===e||void 0===e?void 0:e.domainName),w(void 0)}))}})}),(0,j.jsx)(z.Z.Item,{label:t("webui.menu.Project"),children:(0,j.jsx)(M,{style:{width:"20vw"},value:Q,disabled:!S,domain:S||"",onSelectProject:function(e){s((function(){w(null===e||void 0===e?void 0:e.projectId)}))}})})]})}):(0,j.jsx)(z.Z,{layout:"inline",children:(0,j.jsx)(z.Z.Item,{label:t("data.User"),children:(0,j.jsx)(ee,{style:{width:"30vw",marginBottom:10},value:H,onSelectUser:function(e){$(null===e||void 0===e?void 0:e.email),s((function(){D(null===e||void 0===e?void 0:e.id)}))}})})})}),(0,j.jsx)(te.Z,{spinning:r,children:(0,j.jsx)(O,{quotaScopeFrgmt:X||null,onClickEdit:function(){R()},showAddButtonWhenEmpty:"project"===p&&!!Q||"user"===p&&!!V})}),(0,j.jsx)(J,{open:U,quotaScopeFrgmt:X||null,onRequestClose:function(){R()}})]})})},le=a(60284),oe=function(e){var n,t,i=e.storageHostId,l=H.Z.useToken().token,o=(0,K.Dj)(),r=(0,p.useWebComponentInfo)().moveTo,s=(0,F.$G)().t,u=(0,x.useLazyLoadQuery)(void 0!==m?m:m=a(62913),{id:i||""}).storage_volume,d=null!==(n=null===u||void 0===u||null===(t=u.capabilities)||void 0===t?void 0:t.includes("quota"))&&void 0!==n&&n;return(0,j.jsxs)(f.Z,{direction:"column",align:"stretch",style:{margin:l.marginSM,gap:l.margin},children:[(0,j.jsx)(le.Z,{items:[{title:"Resources",onClick:function(e){e.preventDefault(),r("/agent")},href:"/agent"},{title:"Storage setting"}]}),(0,j.jsx)(_.Z.Title,{level:3,style:{margin:0},children:i||""}),(0,j.jsx)(Z,{storageVolumeFrgmt:u||null}),o.supports("quota-scope")&&(0,j.jsx)(j.Fragment,{children:d?(0,j.jsx)(C.Suspense,{fallback:(0,j.jsx)("div",{children:"loading..."}),children:(0,j.jsx)(ie,{storageVolumeFrgmt:u||null})}):(0,j.jsx)(ae.Z,{title:s("storageHost.QuotaSettings"),children:(0,j.jsx)($.Z,{image:$.Z.PRESENTED_IMAGE_SIMPLE,description:s("storageHost.QuotaDoesNotSupported")})})})]})}},62913:function(e,n,a){a.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"id"}],n=[{kind:"Variable",name:"id",variableName:"id"}],a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"StorageHostSettingPageQuery",selections:[{alias:null,args:n,concreteType:"StorageVolume",kind:"LinkedField",name:"storage_volume",plural:!1,selections:[a,t,{args:null,kind:"FragmentSpread",name:"StorageHostResourcePanelFragment"},{args:null,kind:"FragmentSpread",name:"StorageHostSettingsPanel_storageVolumeFrgmt"}],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"StorageHostSettingPageQuery",selections:[{alias:null,args:n,concreteType:"StorageVolume",kind:"LinkedField",name:"storage_volume",plural:!1,selections:[a,t,{alias:null,args:null,kind:"ScalarField",name:"backend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage",storageKey:null}],storageKey:null}]},params:{cacheID:"821175f86743d9d81be2a55aca371919",id:null,metadata:{},name:"StorageHostSettingPageQuery",operationKind:"query",text:"query StorageHostSettingPageQuery(\n  $id: String\n) {\n  storage_volume(id: $id) {\n    id\n    capabilities\n    ...StorageHostResourcePanelFragment\n    ...StorageHostSettingsPanel_storageVolumeFrgmt\n  }\n}\n\nfragment StorageHostResourcePanelFragment on StorageVolume {\n  id\n  backend\n  capabilities\n  path\n  usage\n}\n\nfragment StorageHostSettingsPanel_storageVolumeFrgmt on StorageVolume {\n  id\n  capabilities\n}\n"}}}();t.hash="f6e77057e83b0449ef99e8918e794b24",n.default=t}}]);
//# sourceMappingURL=936.4d23fbe4.chunk.js.map