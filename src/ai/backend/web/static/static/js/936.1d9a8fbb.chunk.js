"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[936,502],{77758:function(e,n,a){a.d(n,{Z:function(){return r}});var t=a(1413),l=a(36459),i=a(68957),o=(a(4519),a(2556)),r=function(e){var n,a=Object.assign({},((0,l.Z)(e),e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:".ant-modal.bai-modal .ant-modal-content {\n  padding: var(--general-modal-content-padding, 0);\n}\n.ant-modal.bai-modal .ant-modal-body {\n  padding: var(--general-modal-body-padding, 0 24px);\n}\n\n.ant-modal.bai-modal .ant-modal-footer {\n  padding: var(--general-modal-footer-padding, 0 20px 24px 20px);\n}\n\n.ant-modal.bai-modal .ant-modal-header {\n  border-bottom: 1px solid rgb(221, 221, 221);\n  border-width: 100%;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.ant-modal.bai-modal .ant-modal-content .ant-modal-header,\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  padding: var(--general-modal-header-padding, 10px 20px);\n  height: var(--general-modal-header-height, 69px);\n}\n\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  /* center */\n  top: 0;\n}\n"}),(0,o.jsx)(i.Z,(0,t.Z)({centered:null===(n=a.centered)||void 0===n||n,className:"bai-modal"},a))]})}},61502:function(e,n,a){a.r(n),a.d(n,{default:function(){return B},useShadowRoot:function(){return U},useWebComponentInfo:function(){return A}});var t=a(29439),l=a(74165),i=a(15861),o=a(1413);function r(e,n){var a=(0,o.Z)({},n);return function(e){for(var n,a=/(\w+)\s@\s*(\w+)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/g,l=[];null!==(n=a.exec(e));){var i=n,o=(0,t.Z)(i,5),r=o[0],s=o[1],u=o[2],d=o[3],c=o[4];l.push({fieldName:s,directive:u,argumentName:d,argumentValue:c,originFieldStr:r})}return l}(e).forEach((function(t){if("skipOnClient"===t.directive&&"if"===t.argumentName&&(e=!t.argumentValue||!0!==n[t.argumentValue.substring(1)]&&"true"!==t.argumentValue?e.replace(t.originFieldStr,t.originFieldStr.replace(/@\s*(skipOnClient)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/,"")):e.replace(t.originFieldStr,""),t.argumentValue.startsWith("$")&&2===e.split(t.argumentValue).length)){var l=t.argumentValue.substring(1),i=new RegExp(".*".concat(l,".*\n"),"g");e=e.replace(i,""),delete a[t.argumentValue.substring(1)]}})),{query:e,variables:a}}var s=a(41011);s.RelayFeatureFlags.ENABLE_RELAY_RESOLVERS=!0;var u=function(){var e=(0,i.Z)((0,l.Z)().mark((function e(n,a){var t,i,o,s,u,d;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r(n.text||"",a),s={query:o.query,variables:o.variables},u=null===(t=globalThis.backendaiclient)||void 0===t?void 0:t.newSignedRequest("POST","/admin/gql",s),e.next=5,null===(i=globalThis.backendaiclient)||void 0===i?void 0:i._wrapWithPromise(u,!1,null,1e4,0).catch((function(e){}));case 5:if(e.t0=e.sent,e.t0){e.next=8;break}e.t0={};case 8:return d=e.t0,e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}();var d,c=new s.Environment({network:s.Network.create(u,void 0),store:new s.Store(new s.RecordSource)}),m=a(80382),g=a(27340),p=a(41239),f=a(49883),v=a(66670),y=a(99517),_=a.n(y),h=(a(24989),a(79354)),S=a.n(h),k=a(79748),b=a.n(k),x=a(51714),F=a.n(x),j=a(63540),Z=a.n(j),q=a(18272),Q=a.n(q),K=a(9666),w=a.n(K),L=a(64447),C=a(13881),P=a(4519),V=a(81748),D=a(87112),T=a(16980),H=a(51843),E=a(12674),$=a(55144),I=a(73181),M=a(2556);_().extend(w()),_().extend(S()),_().extend(b()),_().extend(F()),_().extend(Q()),_().extend(Z());var N=P.createContext(null),R=P.createContext(null),U=function(){return P.useContext(R)},A=function(){return P.useContext(N)},O=new D.QueryClient({defaultOptions:{queries:{suspense:!0,refetchOnWindowFocus:!1,retry:!1}}});L.ZP.use(V.Db).use(C.Z).init({backend:{loadPath:"/resources/i18n/{{lng}}.json"},lng:(null===globalThis||void 0===globalThis||null===(d=globalThis.backendaioptions)||void 0===d?void 0:d.get("current_language"))||"en",fallbackLng:"en",interpolation:{escapeValue:!1},react:{transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","span","code","p"]}});var G=function(){var e=(0,E.s0)();return(0,P.useLayoutEffect)((function(){var n=function(n){var a=n.detail;e(a,{replace:!0})};return document.addEventListener("react-navigate",n),function(){document.removeEventListener("react-navigate",n)}}),[e]),null},B=function(e){var n=e.children,a=e.value,l=e.styles,i=e.shadowRoot,o=e.dispatchEvent,r=(0,P.useMemo)((function(){return(0,g.Df)()}),[]),s=function(){var e,n=(0,P.useState)(null===globalThis||void 0===globalThis||null===(e=globalThis.backendaioptions)||void 0===e?void 0:e.get("current_language")),a=(0,t.Z)(n,2),l=a[0],i=a[1],o=(0,V.$G)().i18n;return(0,P.useEffect)((function(){setTimeout((function(){return null===o||void 0===o?void 0:o.changeLanguage(l)}),0),_().locale(l)}),[]),(0,P.useEffect)((function(){var e=function(e){var n,a;i(null===e||void 0===e||null===(n=e.detail)||void 0===n?void 0:n.lang);var t=(null===e||void 0===e||null===(a=e.detail)||void 0===a?void 0:a.lang)||"en";null===o||void 0===o||o.changeLanguage(t),_().locale(t)};return window.addEventListener("langChanged",e),function(){return window.removeEventListener("langChanged",e)}}),[o]),[l]}(),u=(0,t.Z)(s,1)[0],d=(0,m.x)(),y=(0,P.useMemo)((function(){return{value:a,dispatchEvent:o,moveTo:function(e,n){o("moveTo",{path:e,params:n})}}}),[a,o]);return(0,M.jsx)(M.Fragment,{children:c&&(0,M.jsx)(T.RelayEnvironmentProvider,{environment:c,children:(0,M.jsxs)(P.StrictMode,{children:[(0,M.jsxs)("style",{children:[l,".anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n/* fix: fixed column shadow display outside of a table wrapper */\n.ant-table-wrapper {\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n\n/* fix: the tooltip does not appear in the `<Form.Item tooltip={'something'}` when the popup container is a parent node of the trigger node. */\n.ant-form-item-label {\n  overflow: unset !important;\n}\n"]}),(0,M.jsx)(D.QueryClientProvider,{client:O,children:(0,M.jsx)(R.Provider,{value:i,children:(0,M.jsx)(N.Provider,{value:y,children:(0,M.jsx)(p.ZP,{getPopupContainer:function(e){return(null===e||void 0===e?void 0:e.parentNode)||i},locale:"ko"===u?v.Z:f.Z,theme:d,children:(0,M.jsx)(g.V9,{container:i,cache:r,children:(0,M.jsx)(P.Suspense,{fallback:"",children:(0,M.jsx)(H.VK,{children:(0,M.jsxs)($.QueryParamProvider,{adapter:I.Q,options:{},children:[(0,M.jsx)(G,{}),n]})})})})})})})})]})})})}},33614:function(e,n,a){a.r(n);var t=function(){var e=[{alias:null,args:[{kind:"Literal",name:"is_active",value:!0}],concreteType:"Domain",kind:"LinkedField",name:"domains",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:"domains(is_active:true)"}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"DomainSelectorQuery",selections:e,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"DomainSelectorQuery",selections:e},params:{cacheID:"9df762094b74dc3eb8079edfcc73765f",id:null,metadata:{},name:"DomainSelectorQuery",operationKind:"query",text:"query DomainSelectorQuery {\n  domains(is_active: true) {\n    name\n  }\n}\n"}}}();t.hash="c14d362fa40cf9a3cef5d1d71202cc5f",n.default=t},13361:function(e,n,a){a.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"domain_name"}],n=[{alias:"projects",args:[{kind:"Variable",name:"domain_name",variableName:"domain_name"},{kind:"Literal",name:"is_active",value:!0}],concreteType:"Group",kind:"LinkedField",name:"groups",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"ProjectSelectorQuery",selections:n,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"ProjectSelectorQuery",selections:n},params:{cacheID:"eecad68ff1a08d753ce22ff2c5136c26",id:null,metadata:{},name:"ProjectSelectorQuery",operationKind:"query",text:"query ProjectSelectorQuery(\n  $domain_name: String\n) {\n  projects: groups(domain_name: $domain_name, is_active: true) {\n    id\n    is_active\n    name\n    resource_policy\n  }\n}\n"}}}();t.hash="2845b31197571f750613f64207ded239",n.default=t},81674:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"QuotaScopeCardFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage_bytes",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"QuotaSettingModalFragment"}],type:"QuotaScope",abstractKey:null,hash:"78fe420c92ce5b9c8d5c133d1f9c389f"};n.default=t},96685:function(e,n,a){a.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},{defaultValue:null,kind:"LocalArgument",name:"storage_host_name"}],n=[{alias:null,args:[{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}],concreteType:"UnsetQuotaScope",kind:"LinkedField",name:"unset_quota_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"QuotaScopeCardUnsetMutation",selections:n,type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"QuotaScopeCardUnsetMutation",selections:n},params:{cacheID:"338836966362b14e823520f40fa56a73",id:null,metadata:{},name:"QuotaScopeCardUnsetMutation",operationKind:"mutation",text:"mutation QuotaScopeCardUnsetMutation(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n) {\n  unset_quota_scope(quota_scope_id: $quota_scope_id, storage_host_name: $storage_host_name) {\n    quota_scope {\n      id\n      quota_scope_id\n      storage_host_name\n      details {\n        hard_limit_bytes\n      }\n    }\n  }\n}\n"}}}();t.hash="272001cc642518fb66015dcc367b9f65",n.default=t},64133:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"QuotaSettingModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],type:"QuotaScope",abstractKey:null,hash:"1c5ad8315a2d78cb376e7436dc6a8627"};n.default=t},95005:function(e,n,a){a.r(n);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"props"},n={defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},a={defaultValue:null,kind:"LocalArgument",name:"storage_host_name"},t=[{alias:null,args:[{kind:"Variable",name:"props",variableName:"props"},{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}],concreteType:"SetQuotaScope",kind:"LinkedField",name:"set_quota_scope",plural:!1,selections:[{alias:null,args:null,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[e,n,a],kind:"Fragment",metadata:null,name:"QuotaSettingModalSetMutation",selections:t,type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[n,a,e],kind:"Operation",name:"QuotaSettingModalSetMutation",selections:t},params:{cacheID:"d337cab9be9523bfde2bfb7d6bed595b",id:null,metadata:{},name:"QuotaSettingModalSetMutation",operationKind:"mutation",text:"mutation QuotaSettingModalSetMutation(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n  $props: QuotaScopeInput!\n) {\n  set_quota_scope(quota_scope_id: $quota_scope_id, storage_host_name: $storage_host_name, props: $props) {\n    quota_scope {\n      id\n      quota_scope_id\n      storage_host_name\n      details {\n        hard_limit_bytes\n      }\n    }\n  }\n}\n"}}}();t.hash="0e8509b3174920c1dd917ece91d41161",n.default=t},58156:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StorageHostResourcePanelFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"backend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage",storageKey:null}],type:"StorageVolume",abstractKey:null,hash:"30a1b4101eeb2fae45385780dbc0ddcc"};n.default=t},81047:function(e,n,a){a.r(n);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"quota_scope_id"},n={defaultValue:null,kind:"LocalArgument",name:"skipQuotaScope"},a={defaultValue:null,kind:"LocalArgument",name:"storage_host_name"},t=[{kind:"Variable",name:"quota_scope_id",variableName:"quota_scope_id"},{kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"}];return{fragment:{argumentDefinitions:[e,n,a],kind:"Fragment",metadata:null,name:"StorageHostSettingsPanelQuery",selections:[{condition:"skipQuotaScope",kind:"Condition",passingValue:!1,selections:[{alias:null,args:t,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"QuotaSettingModalFragment"},{args:null,kind:"FragmentSpread",name:"QuotaScopeCardFragment"}],storageKey:null}]}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,a,n],kind:"Operation",name:"StorageHostSettingsPanelQuery",selections:[{condition:"skipQuotaScope",kind:"Condition",passingValue:!1,selections:[{alias:null,args:t,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"quota_scope_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storage_host_name",storageKey:null},{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage_bytes",storageKey:null}],storageKey:null}],storageKey:null}]}]},params:{cacheID:"378699d92e64ba9559bfbe8e533d6c6a",id:null,metadata:{},name:"StorageHostSettingsPanelQuery",operationKind:"query",text:"query StorageHostSettingsPanelQuery(\n  $quota_scope_id: String!\n  $storage_host_name: String!\n  $skipQuotaScope: Boolean!\n) {\n  quota_scope(storage_host_name: $storage_host_name, quota_scope_id: $quota_scope_id) @skip(if: $skipQuotaScope) {\n    ...QuotaSettingModalFragment\n    ...QuotaScopeCardFragment\n    id\n  }\n}\n\nfragment QuotaScopeCardFragment on QuotaScope {\n  id\n  quota_scope_id\n  storage_host_name\n  details {\n    hard_limit_bytes\n    usage_bytes\n  }\n  ...QuotaSettingModalFragment\n}\n\nfragment QuotaSettingModalFragment on QuotaScope {\n  id\n  quota_scope_id\n  storage_host_name\n  details {\n    hard_limit_bytes\n  }\n}\n"}}}();t.hash="ef16372a7f5bf0c1844a65d4b63fe4d9",n.default=t},16678:function(e,n,a){a.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StorageHostSettingsPanel_storageVolumeFrgmt",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null}],type:"StorageVolume",abstractKey:null,hash:"2f9e5e6060806e6f9265e5cbbd325afe"};n.default=t},54880:function(e,n,a){a.r(n);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"filter"},n={defaultValue:null,kind:"LocalArgument",name:"limit"},a={defaultValue:null,kind:"LocalArgument",name:"offset"},t=[{alias:null,args:[{kind:"Variable",name:"filter",variableName:"filter"},{kind:"Literal",name:"is_active",value:!0},{kind:"Variable",name:"limit",variableName:"limit"},{kind:"Variable",name:"offset",variableName:"offset"}],concreteType:"UserList",kind:"LinkedField",name:"user_list",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"items",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_active",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[e,n,a],kind:"Fragment",metadata:null,name:"UserSelectorQuery",selections:t,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[n,a,e],kind:"Operation",name:"UserSelectorQuery",selections:t},params:{cacheID:"f552e13a727e58f49a7a7e49a466d4d2",id:null,metadata:{},name:"UserSelectorQuery",operationKind:"query",text:"query UserSelectorQuery(\n  $limit: Int!\n  $offset: Int!\n  $filter: String\n) {\n  user_list(limit: $limit, offset: $offset, filter: $filter, is_active: true) {\n    items {\n      id\n      is_active\n      email\n      resource_policy\n    }\n  }\n}\n"}}}();t.hash="323d93fb2d8eb4ee2d1d3677121f9ad2",n.default=t},31936:function(e,n,a){a.r(n),a.d(n,{default:function(){return oe}});var t,l,i,o,r,s,u,d,c,m,g,p=a(61502),f=a(99277),v=a(43255),y=a(93448),_=a(53562),h=a(28499),S=a(82548),k=a(32048),b=a.n(k),x=a(81748),F=a(16980),j=a(2556),Z=function(e){var n=e.storageVolumeFrgmt,l=(0,x.$G)().t,i=(0,F.useFragment)(void 0!==t?t:t=a(58156),n),o=JSON.parse((null===i||void 0===i?void 0:i.usage)||"{}"),r=null===o||void 0===o?void 0:o.used_bytes,s=null===o||void 0===o?void 0:o.capacity_bytes,u={used_bytes:r,capacity_bytes:s,percent:Number((100*(s>0?r/s:0)).toFixed(1))};return(0,j.jsxs)(y.Z,{size:"small",bordered:!0,column:3,children:[(0,j.jsxs)(y.Z.Item,{label:l("storageHost.Usage"),span:3,children:[(null===u||void 0===u?void 0:u.percent)<100?(0,j.jsx)(_.Z,{size:[200,15],percent:null===u||void 0===u?void 0:u.percent,strokeColor:(0,v.lA)(null===u||void 0===u?void 0:u.percent)}):(0,j.jsx)(_.Z,{size:[200,15],percent:null===u||void 0===u?void 0:u.percent,status:"exception"}),(0,j.jsxs)(h.Z.Text,{type:"secondary",children:[l("storageHost.Used"),":"," "]}),(0,v.XG)(null===u||void 0===u?void 0:u.used_bytes),(0,j.jsx)(h.Z.Text,{type:"secondary",children:" / "}),(0,j.jsxs)(h.Z.Text,{type:"secondary",children:[l("storageHost.Total"),":"," "]}),(0,v.XG)(null===u||void 0===u?void 0:u.capacity_bytes)]}),(0,j.jsx)(y.Z.Item,{label:l("agent.Endpoint"),children:null===i||void 0===i?void 0:i.path}),(0,j.jsx)(y.Z.Item,{label:l("agent.BackendType"),children:null===i||void 0===i?void 0:i.backend}),(0,j.jsx)(y.Z.Item,{label:l("agent.Capabilities"),children:b().map(null===i||void 0===i?void 0:i.capabilities,(function(e){return(0,j.jsx)(S.Z,{children:e},e)}))})]})},q=a(29439),Q=a(87760),K=a(1413),w=a(44925),L=a(19427),C=a(4519),P=["onSelectDomain"],V=function(e){var n=e.onSelectDomain,t=(0,w.Z)(e,P),i=(0,x.$G)().t,o=(0,F.useLazyLoadQuery)(void 0!==l?l:l=a(33614),{},{fetchPolicy:"store-and-network"}).domains;return(0,j.jsxs)(L.Z,(0,K.Z)((0,K.Z)({onChange:function(e,a){null===n||void 0===n||n(a)},placeholder:i("storageHost.quotaSettings.SelectDomain")},t),{},{children:[b().map(o,(function(e){return(0,j.jsx)(L.Z.Option,{domainName:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.name)})),";"]}))},D=["onSelectProject","domain"],T=function(e){var n=e.onSelectProject,t=e.domain,l=(0,w.Z)(e,D),o=(0,x.$G)().t,r=(0,F.useLazyLoadQuery)(void 0!==i?i:i=a(13361),{domain_name:t},{fetchPolicy:"store-and-network"}).projects;return(0,j.jsx)(L.Z,(0,K.Z)((0,K.Z)({onChange:function(e,a){null===n||void 0===n||n(a)},placeholder:o("storageHost.quotaSettings.SelectProject")},l),{},{children:b().map(r,(function(e){return(0,j.jsx)(L.Z.Option,{projectId:null===e||void 0===e?void 0:e.id,projectResourcePolicy:null===e||void 0===e?void 0:e.resource_policy,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))}))},H=a(20558),E=a(56814),$=a(31662),I=a(44036),M=a(54473),N=a(92171),R=a(79876),U=a(41366),A=a(32360),O=["quotaScopeFrgmt","showAddButtonWhenEmpty","onClickEdit"],G=function(e){var n=e.quotaScopeFrgmt,t=e.showAddButtonWhenEmpty,l=e.onClickEdit,i=((0,w.Z)(e,O),(0,x.$G)().t),s=I.Z.useToken().token,u=(0,F.useFragment)(void 0!==o?o:o=a(81674),n),d=(0,F.useMutation)(void 0!==r?r:r=a(96685)),c=(0,q.Z)(d,2),m=c[0],g=c[1],p=(0,j.jsx)(M.Z,{style:{width:"100%"},image:M.Z.PRESENTED_IMAGE_SIMPLE,description:(0,j.jsx)("div",{children:i("storageHost.quotaSettings.SelectFirst")})}),y=(0,j.jsx)(M.Z,{style:{width:"100%"},image:M.Z.PRESENTED_IMAGE_SIMPLE,description:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{style:{margin:10},children:i("storageHost.quotaSettings.ClickSettingButton")}),(0,j.jsx)(N.ZP,{icon:(0,j.jsx)(H.Z,{}),onClick:function(){return l&&l()},children:i("storageHost.quotaSettings.AddQuotaConfigs")})]})});return(0,j.jsx)(R.Z,{bordered:!0,rowKey:"id",columns:[{title:i("storageHost.quotaSettings.QuotaScopeId"),dataIndex:"quota_scope_id",key:"quota_scope_id",render:function(e){return(0,j.jsx)("code",{children:e})}},{title:i("storageHost.HardLimit")+" (GB)",dataIndex:["details","hard_limit_bytes"],key:"hard_limit_bytes",render:function(e){return(0,j.jsx)(j.Fragment,{children:(0,v.Uz)(e)})}},{title:i("storageHost.Usage")+" (GB)",dataIndex:["details","usage_bytes"],key:"usage_bytes",render:function(e){return(0,j.jsx)(j.Fragment,{children:(0,v.Uz)(e)})}},{title:i("general.Control"),key:"control",render:function(){return(0,j.jsxs)(f.Z,{gap:s.marginSM,children:[(0,j.jsx)(N.ZP,{icon:(0,j.jsx)(E.Z,{}),onClick:function(){return l&&l()},children:i("button.Edit")}),(0,j.jsx)(U.Z,{title:i("storageHost.quotaSettings.UnsetCustomSettings"),description:i("storageHost.quotaSettings.ConfirmUnsetCustomQuota"),placement:"bottom",onConfirm:function(){u&&m({variables:{quota_scope_id:u.quota_scope_id,storage_host_name:u.storage_host_name},onCompleted:function(){A.ZP.success(i("storageHost.quotaSettings.QuotaScopeSuccessfullyUpdated"))},onError:function(e){A.ZP.error(null===e||void 0===e?void 0:e.message)}})},children:(0,j.jsx)(N.ZP,{loading:g,danger:!0,icon:(0,j.jsx)($.Z,{}),children:i("button.Unset")})})]})}}],dataSource:u?[u]:[],locale:{emptyText:t?y:p},pagination:!1})},B=a(77758),z=a(57054),W=a(38818),X=["quotaScopeFrgmt","onRequestClose"],J=function(e){var n,t=e.quotaScopeFrgmt,l=void 0===t?null:t,i=e.onRequestClose,o=(0,w.Z)(e,X),r=(0,x.$G)().t,d=z.Z.useForm(),c=(0,q.Z)(d,1)[0],m=(0,F.useFragment)(void 0!==s?s:s=a(64133),l),g=(0,F.useMutation)(void 0!==u?u:u=a(95005)),p=(0,q.Z)(g,2),f=p[0],y=p[1];return(0,j.jsx)(B.Z,(0,K.Z)((0,K.Z)({},o),{},{style:{zIndex:1e4},destroyOnClose:!0,onOk:function(e){c.validateFields().then((function(e){f({variables:{quota_scope_id:(null===m||void 0===m?void 0:m.quota_scope_id)||"",storage_host_name:(null===m||void 0===m?void 0:m.storage_host_name)||"",props:{hard_limit_bytes:(0,v.Hz)(null===e||void 0===e?void 0:e.hard_limit_bytes)}},onCompleted:function(e){var n,a;null!==e&&void 0!==e&&null!==(n=e.set_quota_scope)&&void 0!==n&&null!==(a=n.quota_scope)&&void 0!==a&&a.id?A.ZP.success(r("storageHost.quotaSettings.QuotaScopeSuccessfullyUpdated")):A.ZP.error(r("dialog.ErrorOccurred")),i()},onError:function(e){console.log(e),A.ZP.error(null===e||void 0===e?void 0:e.message)}})}))},confirmLoading:y,onCancel:i,title:r("storageHost.quotaSettings.QuotaSettings"),children:(0,j.jsx)(z.Z,{form:c,preserve:!1,labelCol:{span:6},wrapperCol:{span:20},validateTrigger:["onChange","onBlur"],style:{marginBottom:40,marginTop:20},children:(0,j.jsx)(z.Z.Item,{name:"hard_limit_bytes",label:r("storageHost.HardLimit"),initialValue:(0,v.Uz)(null===m||void 0===m||null===(n=m.details)||void 0===n?void 0:n.hard_limit_bytes),rules:[{pattern:/^\d+(\.\d+)?$/,message:r("storageHost.quotaSettings.AllowNumberAndDot")||"Allows numbers and .(dot) only"}],children:(0,j.jsx)(W.Z,{addonAfter:"GB",type:"number",step:.25,style:{width:"70%"}})})})}))},Y=["onSelectUser"],ee=function(e){var n=e.onSelectUser,t=(0,w.Z)(e,Y),l=(0,x.$G)().t,i=(0,C.useState)(""),o=(0,q.Z)(i,2),r=o[0],s=o[1],u=(0,C.useDeferredValue)(r),c=(0,F.useLazyLoadQuery)(void 0!==d?d:d=a(54880),{limit:150,offset:0,filter:0===(null===u||void 0===u?void 0:u.length)?null:'email ilike "%'+u+'%"'},{fetchPolicy:"store-and-network"}).user_list;return(0,j.jsx)(L.Z,(0,K.Z)({filterOption:!1,searchValue:r,loading:u!==r,onSearch:function(e){s(e)},onChange:function(e){n(b().find(null===c||void 0===c?void 0:c.items,(function(n){return(null===n||void 0===n?void 0:n.email)===e})))},showSearch:!0,placeholder:l("storageHost.quotaSettings.SelectUser"),options:b().map(null===c||void 0===c?void 0:c.items,(function(e){return{value:null===e||void 0===e?void 0:e.email,label:null===e||void 0===e?void 0:e.email}})).sort((function(e,n){return e.value&&n.value&&e.value>n.value?1:-1}))},t))},ne=a(63703),ae=a(53066),te=a(39883),le=function(e){var n=e.storageVolumeFrgmt,t=(0,x.$G)().t,l=(0,F.useFragment)(void 0!==c?c:c=a(16678),n),i=(0,C.useTransition)(),o=(0,q.Z)(i,2),r=o[0],s=o[1],u=(0,Q.tQ)(),d=(0,C.useState)("user"),g=(0,q.Z)(d,2),p=g[0],y=g[1],_=(0,C.useState)(u),h=(0,q.Z)(_,2),S=h[0],k=h[1],b=(0,C.useState)(),Z=(0,q.Z)(b,2),K=Z[0],w=Z[1];(0,C.useState)();var L=(0,C.useState)(),P=(0,q.Z)(L,2),D=P[0],H=P[1],E=(0,C.useState)(),$=(0,q.Z)(E,2),I=$[0],M=$[1];(0,C.useState)();var N=(0,v.VQ)(p,("project"===p?K:D)||""),R=(0,ne.Z)(!1),U=(0,q.Z)(R,2),A=U[0],O=U[1].toggle,B=(0,Q.Kr)("default"),W=(0,q.Z)(B,1)[0],X=(0,F.useLazyLoadQuery)(void 0!==m?m:m=a(81047),{quota_scope_id:N,skipQuotaScope:void 0===N||""===N,storage_host_name:(null===l||void 0===l?void 0:l.id)||""},{fetchPolicy:"network-only",fetchKey:W}).quota_scope;return(0,j.jsx)(f.Z,{direction:"column",align:"stretch",children:(0,j.jsxs)(ae.Z,{title:t("storageHost.QuotaSettings"),tabList:[{key:"user",tab:t("storageHost.ForUser")},{key:"project",tab:t("storageHost.ForProject")}],activeTabKey:p,onTabChange:function(e){s((function(){y(e)}))},children:[(0,j.jsx)(f.Z,{justify:"between",children:"project"===p?(0,j.jsx)(f.Z,{style:{marginBottom:10},children:(0,j.jsxs)(z.Z,{layout:"inline",children:[(0,j.jsx)(z.Z.Item,{label:t("resourceGroup.Domain"),children:(0,j.jsx)(V,{style:{width:"20vw",marginRight:10},value:S,onSelectDomain:function(e){s((function(){k(null===e||void 0===e?void 0:e.domainName),w(void 0)}))}})}),(0,j.jsx)(z.Z.Item,{label:t("webui.menu.Project"),children:(0,j.jsx)(T,{style:{width:"20vw"},value:K,disabled:!S,domain:S||"",onSelectProject:function(e){s((function(){w(null===e||void 0===e?void 0:e.projectId)}))}})})]})}):(0,j.jsx)(z.Z,{layout:"inline",children:(0,j.jsx)(z.Z.Item,{label:t("data.User"),children:(0,j.jsx)(ee,{style:{width:"30vw",marginBottom:10},value:I,onSelectUser:function(e){M(null===e||void 0===e?void 0:e.email),s((function(){H(null===e||void 0===e?void 0:e.id)}))}})})})}),(0,j.jsx)(te.Z,{spinning:r,children:(0,j.jsx)(G,{quotaScopeFrgmt:X||null,onClickEdit:function(){O()},showAddButtonWhenEmpty:"project"===p&&!!K||"user"===p&&!!D})}),(0,j.jsx)(J,{open:A,quotaScopeFrgmt:X||null,onRequestClose:function(){O()}})]})})},ie=a(60284),oe=function(e){var n,t,l=e.storageHostId,i=I.Z.useToken().token,o=(0,Q.Dj)(),r=(0,p.useWebComponentInfo)().moveTo,s=(0,x.$G)().t,u=(0,F.useLazyLoadQuery)(void 0!==g?g:g=a(62913),{id:l||""}).storage_volume,d=null!==(n=null===u||void 0===u||null===(t=u.capabilities)||void 0===t?void 0:t.includes("quota"))&&void 0!==n&&n;return(0,j.jsxs)(f.Z,{direction:"column",align:"stretch",style:{margin:i.marginSM,gap:i.margin},children:[(0,j.jsx)(ie.Z,{items:[{title:"Resources",onClick:function(e){e.preventDefault(),r("/agent")},href:"/agent"},{title:"Storage setting"}]}),(0,j.jsx)(h.Z.Title,{level:3,style:{margin:0},children:l||""}),(0,j.jsx)(Z,{storageVolumeFrgmt:u||null}),o.supports("quota-scope")&&(0,j.jsx)(j.Fragment,{children:d?(0,j.jsx)(C.Suspense,{fallback:(0,j.jsx)("div",{children:"loading..."}),children:(0,j.jsx)(le,{storageVolumeFrgmt:u||null})}):(0,j.jsx)(ae.Z,{title:s("storageHost.QuotaSettings"),children:(0,j.jsx)(M.Z,{image:M.Z.PRESENTED_IMAGE_SIMPLE,description:s("storageHost.QuotaDoesNotSupported")})})})]})}},62913:function(e,n,a){a.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"id"}],n=[{kind:"Variable",name:"id",variableName:"id"}],a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"capabilities",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"StorageHostSettingPageQuery",selections:[{alias:null,args:n,concreteType:"StorageVolume",kind:"LinkedField",name:"storage_volume",plural:!1,selections:[a,t,{args:null,kind:"FragmentSpread",name:"StorageHostResourcePanelFragment"},{args:null,kind:"FragmentSpread",name:"StorageHostSettingsPanel_storageVolumeFrgmt"}],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"StorageHostSettingPageQuery",selections:[{alias:null,args:n,concreteType:"StorageVolume",kind:"LinkedField",name:"storage_volume",plural:!1,selections:[a,t,{alias:null,args:null,kind:"ScalarField",name:"backend",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"usage",storageKey:null}],storageKey:null}]},params:{cacheID:"821175f86743d9d81be2a55aca371919",id:null,metadata:{},name:"StorageHostSettingPageQuery",operationKind:"query",text:"query StorageHostSettingPageQuery(\n  $id: String\n) {\n  storage_volume(id: $id) {\n    id\n    capabilities\n    ...StorageHostResourcePanelFragment\n    ...StorageHostSettingsPanel_storageVolumeFrgmt\n  }\n}\n\nfragment StorageHostResourcePanelFragment on StorageVolume {\n  id\n  backend\n  capabilities\n  path\n  usage\n}\n\nfragment StorageHostSettingsPanel_storageVolumeFrgmt on StorageVolume {\n  id\n  capabilities\n}\n"}}}();t.hash="f6e77057e83b0449ef99e8918e794b24",n.default=t}}]);
//# sourceMappingURL=936.1d9a8fbb.chunk.js.map