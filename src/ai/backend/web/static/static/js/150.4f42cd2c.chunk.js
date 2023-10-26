"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[150,502],{61502:function(e,n,t){t.r(n),t.d(n,{default:function(){return $},useShadowRoot:function(){return U},useWebComponentInfo:function(){return D}});var r=t(29439),i=t(74165),o=t(15861),s=t(1413);function l(e,n){var t=(0,s.Z)({},n);return function(e){for(var n,t=/(\w+)\s@\s*(\w+)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/g,i=[];null!==(n=t.exec(e));){var o=n,s=(0,r.Z)(o,5),l=s[0],a=s[1],u=s[2],c=s[3],d=s[4];i.push({fieldName:a,directive:u,argumentName:c,argumentValue:d,originFieldStr:l})}return i}(e).forEach((function(r){if("skipOnClient"===r.directive&&"if"===r.argumentName&&(e=!r.argumentValue||!0!==n[r.argumentValue.substring(1)]&&"true"!==r.argumentValue?e.replace(r.originFieldStr,r.originFieldStr.replace(/@\s*(skipOnClient)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/,"")):e.replace(r.originFieldStr,""),r.argumentValue.startsWith("$")&&2===e.split(r.argumentValue).length)){var i=r.argumentValue.substring(1),o=new RegExp(".*".concat(i,".*\n"),"g");e=e.replace(o,""),delete t[r.argumentValue.substring(1)]}})),{query:e,variables:t}}var a=t(41011);a.RelayFeatureFlags.ENABLE_RELAY_RESOLVERS=!0;var u=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(n,t){var r,o,s,a,u,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=l(n.text||"",t),a={query:s.query,variables:s.variables},u=null===(r=globalThis.backendaiclient)||void 0===r?void 0:r.newSignedRequest("POST","/admin/gql",a),e.next=5,null===(o=globalThis.backendaiclient)||void 0===o?void 0:o._wrapWithPromise(u,!1,null,1e4,0).catch((function(e){}));case 5:if(e.t0=e.sent,e.t0){e.next=8;break}e.t0={};case 8:return c=e.t0,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();var c,d=new a.Environment({network:a.Network.create(u,void 0),store:new a.Store(new a.RecordSource)}),m=t(80382),h=t(27340),p=t(41239),v=t(49883),f=t(66670),x=t(99517),g=t.n(x),Z=(t(24989),t(79354)),y=t.n(Z),j=t(79748),b=t.n(j),w=t(51714),k=t.n(w),P=t(63540),C=t.n(P),S=t(18272),F=t.n(S),T=t(9666),I=t.n(T),V=t(64447),E=t(13881),A=t(4519),R=t(81748),_=t(87112),B=t(16980),M=t(51843),z=t(12674),N=t(55144),K=t(73181),q=t(2556);g().extend(I()),g().extend(y()),g().extend(b()),g().extend(k()),g().extend(F()),g().extend(C());var G=A.createContext(null),O=A.createContext(null),U=function(){return A.useContext(O)},D=function(){return A.useContext(G)},L=new _.QueryClient({defaultOptions:{queries:{suspense:!0,refetchOnWindowFocus:!1,retry:!1}}});V.ZP.use(R.Db).use(E.Z).init({backend:{loadPath:"/resources/i18n/{{lng}}.json"},lng:(null===globalThis||void 0===globalThis||null===(c=globalThis.backendaioptions)||void 0===c?void 0:c.get("current_language"))||"en",fallbackLng:"en",interpolation:{escapeValue:!1},react:{transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","span","code","p"]}});var W=function(){var e=(0,z.s0)();return(0,A.useLayoutEffect)((function(){var n=function(n){var t=n.detail;e(t,{replace:!0})};return document.addEventListener("react-navigate",n),function(){document.removeEventListener("react-navigate",n)}}),[e]),null},$=function(e){var n=e.children,t=e.value,i=e.styles,o=e.shadowRoot,s=e.dispatchEvent,l=(0,A.useMemo)((function(){return(0,h.Df)()}),[]),a=function(){var e,n=(0,A.useState)(null===globalThis||void 0===globalThis||null===(e=globalThis.backendaioptions)||void 0===e?void 0:e.get("current_language")),t=(0,r.Z)(n,2),i=t[0],o=t[1],s=(0,R.$G)().i18n;return(0,A.useEffect)((function(){setTimeout((function(){return null===s||void 0===s?void 0:s.changeLanguage(i)}),0),g().locale(i)}),[]),(0,A.useEffect)((function(){var e=function(e){var n,t;o(null===e||void 0===e||null===(n=e.detail)||void 0===n?void 0:n.lang);var r=(null===e||void 0===e||null===(t=e.detail)||void 0===t?void 0:t.lang)||"en";null===s||void 0===s||s.changeLanguage(r),g().locale(r)};return window.addEventListener("langChanged",e),function(){return window.removeEventListener("langChanged",e)}}),[s]),[i]}(),u=(0,r.Z)(a,1)[0],c=(0,m.x)(),x=(0,A.useMemo)((function(){return{value:t,dispatchEvent:s,moveTo:function(e,n){s("moveTo",{path:e,params:n})}}}),[t,s]);return(0,q.jsx)(q.Fragment,{children:d&&(0,q.jsx)(B.RelayEnvironmentProvider,{environment:d,children:(0,q.jsxs)(A.StrictMode,{children:[(0,q.jsxs)("style",{children:[i,".anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n/* fix: fixed column shadow display outside of a table wrapper */\n.ant-table-wrapper {\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n\n/* fix: the tooltip does not appear in the `<Form.Item tooltip={'something'}` when the popup container is a parent node of the trigger node. */\n.ant-form-item-label {\n  overflow: unset !important;\n}\n"]}),(0,q.jsx)(_.QueryClientProvider,{client:L,children:(0,q.jsx)(O.Provider,{value:o,children:(0,q.jsx)(G.Provider,{value:x,children:(0,q.jsx)(p.ZP,{getPopupContainer:function(e){return(null===e||void 0===e?void 0:e.parentNode)||o},locale:"ko"===u?f.Z:v.Z,theme:c,children:(0,q.jsx)(h.V9,{container:o,cache:l,children:(0,q.jsx)(A.Suspense,{fallback:"",children:(0,q.jsx)(M.VK,{children:(0,q.jsxs)(N.QueryParamProvider,{adapter:K.Q,options:{},children:[(0,q.jsx)(W,{}),n]})})})})})})})})]})})})}},96732:function(e,n,t){t.d(n,{Ec:function(){return h}});var r=t(44925),i=t(1413),o=t(43255),s=t(99277),l=t(44036),a=t(28499),u=t(227),c=(t(4519),t(81748)),d=t(2556),m=["type","size","showIcon","showUnit","showTooltip"],h={"cuda.device":"GPU","cuda.shares":"FGPU","rocm.device":"GPU","tpu.device":"TPU","ipu.device":"IPU","atom.device":"ATOM","warboy.device":"Warboy"},p=function(e){var n=e.size,t=void 0===n?16:n,r=e.children;return(0,d.jsx)("mwc-icon",{style:{"--mdc-icon-size":"".concat(t+2,"px"),width:t,height:t},children:r})},v=function(e){var n,t,o,s=e.type,l=e.size,a=void 0===l?16:l,h=(e.showIcon,e.showUnit,e.showTooltip),v=void 0===h||h,f=(0,r.Z)(e,m),x=(0,c.$G)().t,g={cpu:[(0,d.jsx)(p,{size:a,children:"developer_board"}),x("session.core")],mem:[(0,d.jsx)(p,{size:a,children:"memory"}),"GiB"],"cuda.device":["/resources/icons/file_type_cuda.svg","GPU"],"cuda.shares":["/resources/icons/file_type_cuda.svg","FGPU"],"rocm.device":["/resources/icons/ROCm.png","GPU"],"tpu.device":[(0,d.jsx)(p,{size:a,children:"view_module"}),"TPU"],"ipu.device":[(0,d.jsx)(p,{size:a,children:"view_module"}),"IPU"],"atom.device":["/resources/icons/rebel.svg","ATOM"],"warboy.device":["/resources/icons/furiosa.svg","Warboy"]};return(0,d.jsx)(u.Z,{title:v?"".concat(s," (").concat(g[s][1],")"):void 0,children:"string"===typeof(null===(n=g[s])||void 0===n?void 0:n[0])?(0,d.jsx)("img",(0,i.Z)((0,i.Z)({},f),{},{style:(0,i.Z)({height:a},f.style||{}),src:(null===(t=g[s])||void 0===t?void 0:t[0])||"",alt:s})):(0,d.jsx)("div",{style:{width:16,height:16},children:(null===(o=g[s])||void 0===o?void 0:o[0])||s})})};n.ZP=function(e){var n=e.type,t=e.value,r=e.extra,u=e.opts,m=(0,c.$G)().t,p=l.Z.useToken().token,f=(0,i.Z)({cpu:m("session.core"),mem:"GiB"},h);return(0,d.jsxs)(s.Z,{direction:"row",gap:"xxs",children:[(0,d.jsx)(v,{type:n}),(0,d.jsx)(a.Z.Text,{children:"GiB"===f[n]?(0,o.PZ)(t+"b","g",2).numberFixed:"FGPU"===f[n]?parseFloat(t).toFixed(2):t}),(0,d.jsx)(a.Z.Text,{type:"secondary",children:f[n]}),"mem"===n&&(null===u||void 0===u?void 0:u.shmem)&&(0,d.jsxs)(a.Z.Text,{type:"secondary",style:{fontSize:p.fontSizeSM},children:["(SHM: ",(0,o.PZ)(u.shmem+"b","g",2).numberFixed,"GiB)"]}),r]})}},73340:function(e,n,t){t.r(n);var r=function(){var e=[{alias:null,args:null,concreteType:"ResourcePreset",kind:"LinkedField",name:"resource_presets",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"resource_slots",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shared_memory",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ResourcePresetSelectQuery",selections:e,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"ResourcePresetSelectQuery",selections:e},params:{cacheID:"bd89430b9924d926a1b8e91191746b4f",id:null,metadata:{},name:"ResourcePresetSelectQuery",operationKind:"query",text:"query ResourcePresetSelectQuery {\n  resource_presets {\n    name\n    resource_slots\n    shared_memory\n  }\n}\n"}}}();r.hash="9841642e96d89476c2848bfb093ed9c5",n.default=r},73150:function(e,n,t){t.r(n),t.d(n,{default:function(){return Be}});var r,i=t(1413),o=t(29439),s=t(44925),l=t(72183),a=t(44036),u=t(92171),c=t(53066),d=t(32048),m=t.n(d),h=t(4519),p=t(2556),v=["status","extraButtonTitle","onClickExtraButton","extra","style"],f=function(e){var n=e.status,t=void 0===n?"default":n,r=e.extraButtonTitle,o=e.onClickExtraButton,d=e.extra,h=e.style,f=(0,s.Z)(e,v),x=a.Z.useToken().token,g=d||r&&(0,p.jsx)(u.ZP,{type:"link",icon:"error"===t?(0,p.jsx)(l.Z,{twoToneColor:x.colorError}):void 0,onClick:o,children:r})||void 0;return(0,p.jsx)(c.Z,(0,i.Z)({style:m().extend(h,{borderColor:"error"===t?x.colorError:"warning"===t?x.colorWarning:"success"===t?x.colorSuccess:null===h||void 0===h?void 0:h.borderColor}),extra:g},f))},x=t(66957),g=t(99517),Z=t.n(g),y=["value","onChange"],j=function(e){var n=e.value,t=e.onChange,r=(0,s.Z)(e,y);return(0,p.jsx)(x.Z,(0,i.Z)({value:n?Z()(n):void 0,onChange:function(e,n){t&&t(null===e||void 0===e?void 0:e.toISOString())}},r))},b=t(61502),w=t(99277),k=t(74860),P=t(20558),C=t(57054),S=t(38818),F=["formItemProps"],T=["key","name"],I=function(e){var n=e.formItemProps,t=(0,s.Z)(e,F),r=(0,h.useRef)(null);return(0,p.jsx)(C.Z.List,(0,i.Z)((0,i.Z)({},t),{},{children:function(e,t){var o=t.add,l=t.remove;return(0,p.jsxs)(w.Z,{direction:"column",gap:"xs",align:"stretch",children:[e.map((function(t,o){var a=t.key,u=t.name,c=(0,s.Z)(t,T);return(0,p.jsxs)(w.Z,{direction:"row",align:"baseline",gap:"xs",children:[(0,p.jsx)(C.Z.Item,(0,i.Z)((0,i.Z)((0,i.Z)({},c),{},{style:{marginBottom:0,flex:1},name:[u,"variable"],rules:[{required:!0,message:"Enter Variable name"},{pattern:/^[a-zA-Z_][a-zA-Z0-9_]*$/,message:"Variable name must start with a letter or underscore, and can only contain letters, numbers, and underscores."},function(e){var n=e.getFieldValue;return{validator:function(e,t){var r=m().map(n("envList"),(function(e){return null===e||void 0===e?void 0:e.variable}));return r.length>0&&m().filter(r,(function(e){return e===t})).length>1?Promise.reject("Variable name already exists"):Promise.resolve()}}}]},n),{},{children:(0,p.jsx)(S.Z,{ref:o===e.length-1?r:null,placeholder:"Variable"})})),(0,p.jsx)(C.Z.Item,(0,i.Z)((0,i.Z)({},c),{},{name:[u,"value"],style:{marginBottom:0,flex:1},rules:[{required:!0,message:"Enter value"}],children:(0,p.jsx)(S.Z,{placeholder:"Value"})})),(0,p.jsx)(k.Z,{onClick:function(){return l(u)}})]},a)})),(0,p.jsx)(C.Z.Item,{noStyle:!0,children:(0,p.jsx)(u.ZP,{type:"dashed",onClick:function(){o(),setTimeout((function(){r.current&&r.current.focus()}),0)},icon:(0,p.jsx)(P.Z,{}),block:!0,children:"Add variable"})})]})}}))},V=t(34341),E=t(14001),A=t(36459),R=t(19427),_=t(82548),B=t(81748),M=["value"],z=function(e){var n=e.value,t=(0,s.Z)(e,M),r=parseInt(n),o=r>=1024&&r<=65535;return(0,p.jsx)(_.Z,(0,i.Z)({color:o?void 0:"red"},t))},N=function(e){var n=Object.assign({},((0,A.Z)(e),e)),t=(0,B.$G)().t;return(0,p.jsx)(C.Z.Item,(0,i.Z)((0,i.Z)({label:t("session.launcher.PreOpenPortTitle"),name:"ports",tooltip:(0,p.jsx)(B.cC,{i18nKey:"session.launcher.DescSetPreOpenPort"}),extra:t("session.launcher.PreOpenPortRangeGuide"),rules:[function(e){e.getFieldValue;return{validator:function(e,n){return m().every(n,(function(e){var n=parseInt(e);return n>=1024&&n<=65535}))?Promise.resolve():Promise.reject(new Error(t("session.launcher.PreOpenPortRange")))}}}]},n),{},{children:(0,p.jsx)(R.Z,{mode:"tags",tagRender:function(e){return(0,p.jsx)(z,{closable:e.closable,onClose:e.onClose,onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},value:e.value,children:e.label})},style:{width:"100%"},suffixIcon:null,open:!1,tokenSeparators:[","," "]})}))},K=t(43255),q=t(1839),G=t(96732),O=t(87760),U=t(61749),D=t(73519),L=t(16980),W=function(e){var n=Object.assign({},((0,A.Z)(e),e)),s=(0,O.Kr)("first"),l=(0,o.Z)(s,2),a=l[0],u=l[1],c=(0,D.Z)(u,{wait:3e3,trailing:!1,leading:!0}).run,d=(0,h.useTransition)(),v=(0,o.Z)(d,2),f=v[0],x=v[1],g=(0,L.useLazyLoadQuery)(void 0!==r?r:r=t(73340),{},{fetchKey:a,fetchPolicy:"first"===a?"store-and-network":"network-only"}).resource_presets;return(0,p.jsx)(R.Z,(0,i.Z)((0,i.Z)({loading:f,options:[{value:"custom",label:(0,p.jsxs)(w.Z,{gap:"xs",style:{display:"inline-flex"},children:[(0,p.jsx)(U.Z,{})," Custom"]})},{label:"Preset",options:m().map(g,(function(e){return{value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name,preset:e}}))}],showSearch:!0},n),{},{onDropdownVisibleChange:function(e){e&&(console.log(e),x((function(){c()})))}}))},$=t(99695),Q=function(){var e=C.Z.useFormInstance(),n=(0,B.$G)().t,t=a.Z.useToken().token,r=(0,q.T)(),s=(0,o.Z)(r,1)[0];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(C.Z.Item,{label:n("resourcePreset.ResourcePresets"),name:"allocationPreset",required:!0,style:{marginBottom:t.marginXS},children:(0,p.jsx)(W,{onChange:function(n,t){var r,o,l=m().pick(JSON.parse((null===t||void 0===t||null===(r=t.preset)||void 0===r?void 0:r.resource_slots)||"{}"),m().keys(s));e.setFieldsValue({resource:(0,i.Z)((0,i.Z)({},l),{},{mem:(0,K.PZ)(((null===l||void 0===l?void 0:l.mem)||0)+"b","g",2).number,shmem:(0,K.PZ)(((null===t||void 0===t||null===(o=t.preset)||void 0===o?void 0:o.shared_memory)||0)+"b","g",2).number})})}})}),(0,p.jsx)(c.Z,{style:{marginBottom:t.margin},children:(0,p.jsx)(C.Z.Item,{shouldUpdate:function(e,n){return e.allocationPreset!==n.allocationPreset},noStyle:!0,children:function(e){e.getFieldValue;return(0,p.jsxs)(p.Fragment,{children:[(null===s||void 0===s?void 0:s.cpu)&&(0,p.jsx)($.Z,{name:["resource","cpu"],initialValue:0,label:n("session.launcher.CPU"),tooltip:(0,p.jsx)(B.cC,{i18nKey:"session.launcher.DescCPU"}),inputNumberProps:{addonAfter:n("session.launcher.Core")},required:!0,rules:[{required:!0}]}),(null===s||void 0===s?void 0:s.mem)&&(0,p.jsx)($.Z,{name:["resource","mem"],initialValue:0,label:n("session.launcher.Memory"),tooltip:(0,p.jsx)(B.cC,{i18nKey:"session.launcher.DescMemory"}),max:30,inputNumberProps:{addonAfter:"GB"},step:.05,required:!0,rules:[{required:!0}]}),(null===s||void 0===s?void 0:s.mem)&&(0,p.jsx)($.Z,{name:["resource","shmem"],initialValue:0,label:n("session.launcher.SharedMemory"),tooltip:(0,p.jsx)(B.cC,{i18nKey:"session.launcher.DescSharedMemory"}),max:30,step:.1,inputNumberProps:{addonAfter:"GB"},required:!0,rules:[{required:!0}]}),m().chain(s).omit(["cpu","mem","shmem"]).map((function(e,t,r){return(0,p.jsx)($.Z,{name:["resource",t],initialValue:0,label:n("session.launcher.AIAccelerator"),max:30,step:t.endsWith("shares")?.1:1,inputNumberProps:{addonAfter:(0,p.jsx)(C.Z.Item,{noStyle:!0,name:"acceleratorType",initialValue:m().keys(r)[0],children:(0,p.jsx)(R.Z,{suffixIcon:m().size(r)>1?void 0:null,children:m().map(r,(function(e,n){return(0,p.jsx)(R.Z.Option,{value:n,children:G.Ec[n]||"UNIT"})}))})})},required:!0,rules:[{required:!0}]})})).value()]})}})})]})},H=t(61815),J=t(93433),X=t(74165),Y=t(15861),ee=t(50164),ne=t(37007),te=t(91278),re=t(56713),ie=t(50708),oe=t(72842),se=t(42620),le=t(28499),ae=t(227),ue=t(79876),ce=["filter","showAliasInput","selectedRowKeys","onChangeSelectedRowKeys","aliasBasePath","aliasMap","onChangeAliasMap","rowKey"],de=function(e){var n=e.filter,t=e.showAliasInput,r=void 0!==t&&t,l=e.selectedRowKeys,a=void 0===l?[]:l,c=e.onChangeSelectedRowKeys,d=e.aliasBasePath,v=void 0===d?"/home/work/":d,f=e.aliasMap,x=e.onChangeAliasMap,g=e.rowKey,y=void 0===g?"name":g,j=(0,s.Z)(e,ce),k=h.useMemo((function(){return function(e){return e&&e[y]}}),[y]),P=(0,se.Z)({value:a,onChange:c},{defaultValue:[]}),F=(0,o.Z)(P,2),T=F[0],I=F[1],V=(0,se.Z)({value:f,onChange:x},{defaultValue:{}}),E=(0,o.Z)(V,2),A=E[0],R=E[1],_=C.Z.useForm(),M=(0,o.Z)(_,1)[0];(0,h.useEffect)((function(){A&&(M.setFieldsValue(m().mapValues(A,(function(e){return e.startsWith(v)?e.slice(v.length):e}))),M.validateFields())}),[A,M,v]);var z=(0,B.$G)().t,N=(0,K.y3)(),q=(0,O.qh)(),G=(0,O.Kr)("first"),U=(0,o.Z)(G,2),D=U[0],L=U[1],W=(0,h.useTransition)(),$=(0,o.Z)(W,2),Q=$[0],H=$[1],de=(0,ee.h)({queryKey:["VFolderSelectQuery",D],queryFn:function(){return N({method:"GET",url:"/folders?group_id=".concat(q.id)})},staleTime:0}).data,me=(0,h.useState)(""),he=(0,o.Z)(me,2),pe=he[0],ve=he[1],fe=m().filter(de,(function(e){return!!T.includes(k(e))||(!n||n(e))&&(!pe||e.name.includes(pe))})),xe=function(e){null===e||void 0===e||e.preventDefault(),M.validateFields().then((function(e){})).catch((function(){})).finally((function(){R(m().mapValues(m().pickBy(M.getFieldsValue(),(function(e){return!!e})),(function(e,n){return ge(n,e)})))}))},ge=function(e,n){return m().isEmpty(n)?"".concat(v).concat(e):null!==n&&void 0!==n&&n.startsWith("/")?n:"".concat(v).concat(n)},Ze=(0,b.useShadowRoot)(),ye=[{title:(0,p.jsxs)(w.Z,{direction:"row",gap:"xxs",children:[(0,p.jsx)(le.Z.Text,{children:z("data.folders.Name")}),r&&(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(le.Z.Text,{type:"secondary",style:{fontWeight:"normal"},children:["(",z("session.launcher.FolderAlias")," ",(0,p.jsx)(ae.Z,{title:(0,p.jsx)(B.cC,{i18nKey:"session.launcher.DescFolderAlias"}),style:{zIndex:1e4},getPopupContainer:function(){return Ze},children:(0,p.jsx)(re.Z,{})}),")"]})})]}),dataIndex:"name",sorter:function(e,n){return e.name.localeCompare(n.name)},render:function(e,n){var t=T.includes(k(n));return(0,p.jsxs)(w.Z,{direction:"column",align:"stretch",gap:"xxs",style:r&&t?{display:"inline-flex",height:70,width:"100%"}:void 0,children:[(0,p.jsx)(te.Z,{keyword:pe,children:e}),r&&t&&(0,p.jsx)(C.Z.Item,{noStyle:!0,shouldUpdate:function(e,t){return e[k(n)]!==t[k(n)]},children:function(){var e=m()(T).reduce((function(e,n){return e[n]=(null===A||void 0===A?void 0:A[n])||ge(n,void 0),e}),{});return(0,p.jsx)(C.Z.Item,{name:k(n),rules:[{type:"string",pattern:/^[a-zA-Z0-9_/-]*$/,message:z("session.launcher.FolderAliasInvalid")},{type:"string",validator:function(){var t=(0,Y.Z)((0,X.Z)().mark((function t(r,i){return(0,X.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i||!m().some(e,(function(e,t){return t!==k(n)&&e===ge(k(n),i)}))){t.next=2;break}return t.abrupt("return",Promise.reject(z("session.launcher.FolderAliasOverlapping")));case 2:return t.abrupt("return",Promise.resolve());case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}],extra:ge(n.name,M.getFieldValue(k(n))),children:(0,p.jsx)(S.Z,{onClick:function(e){e.stopPropagation()},placeholder:z("session.launcher.FolderAlias"),onChange:xe,allowClear:!0})})}})]})},fixed:"left"},{title:z("data.UsageMode"),dataIndex:"usage_mode",sorter:function(e,n){return e.usage_mode.localeCompare(n.usage_mode)}},{title:z("data.Host"),dataIndex:"host"},{title:z("data.Type"),dataIndex:"type",sorter:function(e,n){return e.type.localeCompare(n.type)},render:function(e,n){return(0,p.jsxs)(w.Z,{direction:"column",children:["user"===n.type?(0,p.jsx)(ie.Z,{title:"User"}):(0,p.jsx)("div",{children:"Group"}),"group"===n.type&&"(".concat(n.group_name,")")]})}},{title:z("data.Permission"),dataIndex:"permission",sorter:function(e,n){return e.permission.localeCompare(n.permission)},render:function(e,n){var t=m().chain({r:"green",w:"blue",d:"red"}).map((function(e,t){if(function(e,n){return!!e.permission.includes(n)||!(!e.permission.includes("w")||"r"!==n)}(n,t))return{label:t.toUpperCase(),color:e}})).compact().value();return(0,p.jsx)(ne.Z,{values:t})}},{title:z("data.Created"),dataIndex:"created_at",sorter:function(e,n){return e.created_at.localeCompare(n.created_at)},render:function(e,n){return Z()(e).format("L")}}];return(0,p.jsxs)(w.Z,{direction:"column",align:"stretch",gap:"xs",children:[(0,p.jsxs)(w.Z,{direction:"row",gap:"xs",justify:"between",children:[(0,p.jsx)(S.Z,{value:pe,onChange:function(e){return ve(e.target.value)},allowClear:!0,placeholder:z("data.SearchByName")}),(0,p.jsx)(u.ZP,{loading:Q,icon:(0,p.jsx)(oe.Z,{}),onClick:function(){H((function(){L()}))}})]}),(0,p.jsx)(C.Z,{form:M,children:(0,p.jsx)(ue.Z,(0,i.Z)({scroll:{x:"max-content"},rowKey:k,rowSelection:{selectedRowKeys:T,onChange:function(e){I(e),xe()}},showSorterTooltip:!1,columns:ye,dataSource:fe,onRow:function(e,n){return{onClick:function(n){var t,r=n.target;null!==r&&void 0!==r&&null!==(t=r.classList)&&void 0!==t&&t.contains("ant-table-selection-column")&&(n.stopPropagation(),T.includes(k(e))?I(T.filter((function(n){return n!==k(e)}))):I([].concat((0,J.Z)(T),[k(e)])))}}}},j))})]})},me=function(e){var n=Object.assign({},((0,A.Z)(e),e)),t=C.Z.useFormInstance(),r=(0,B.$G)().t;return C.Z.useWatch("vfoldersAliasMap",t),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(C.Z.Item,{hidden:!0,name:"vfoldersAliasMap",rules:[{validator:function(e,n){var i=m().chain(t.getFieldValue("mounts")).reduce((function(e,t){return e[t]=n[t]||"/home/work/"+t,e}),{}).values().value();return m().uniq(i).length!==i.length?Promise.reject(r("session.launcher.FolderAliasOverlapping")):Promise.resolve()}}],children:(0,p.jsx)(S.Z,{})}),(0,p.jsx)(C.Z.Item,(0,i.Z)((0,i.Z)({name:"mounts"},n),{},{valuePropName:"selectedRowKeys",trigger:"onChangeSelectedRowKeys",children:(0,p.jsx)(de,{rowKey:"name",showAliasInput:!0,aliasMap:t.getFieldValue("vfoldersAliasMap"),onChangeAliasMap:function(e){t.setFieldValue("vfoldersAliasMap",e),t.validateFields(["vfoldersAliasMap"])},pagination:!1})}))]})},he=t(92331),pe=t(91428),ve=t(70442),fe=t(84239),xe=t(89898),ge=t(99269),Ze=t(90632),ye=t(46734),je=t(60284),be=t(15850),we=t(14634),ke=t(93448),Pe=t(32360),Ce=t(32461),Se=t(48196),Fe=t(17490),Te=t(4996),Ie=t(5936),Ve=t(55144),Ee={sessionType:"interactive",allocationPreset:"custom"},Ae=(0,Ve.withDefault)(Ve.NumberParam,0),Re=(0,Ve.withDefault)(Ve.JsonParam,Ee),_e=function(e){var n=e.title,t=e.description,r=a.Z.useToken().token;return(0,p.jsxs)(w.Z,{direction:"column",style:{padding:r.paddingXS},align:"stretch",children:[(0,p.jsx)(le.Z.Title,{level:5,children:n}),(0,p.jsx)(le.Z.Text,{type:"secondary",style:{textWrap:"wrap"},children:t})]})},Be=function(){var e,n,t,r,s,l,d=(0,Ve.useQueryParams)({step:Ae,formValues:Re,redirectTo:Ve.StringParam}),v=(0,o.Z)(d,2),x=v[0],g=x.step,Z=x.formValues,y=x.redirectTo,k=v[1],P=(0,b.useWebComponentInfo)().moveTo,F=(0,Ze.Z)((function(){k({formValues:U.getFieldsValue()},"replaceIn")}),{leading:!1,wait:500,trailing:!0}).run,T=function(e){k({step:e},"pushIn")},A=a.Z.useToken().token,M=(0,B.$G)().t,q=ye.ZP.useBreakpoint(),O=C.Z.useForm(),U=(0,o.Z)(O,1)[0];(0,h.useEffect)((function(){JSON.stringify(Ee)!==JSON.stringify(Z)&&U.validateFields().catch((function(e){}))}),[]),(0,h.useEffect)((function(){}),[g]);var D=C.Z.useWatch("sessionType",U)||U.getFieldValue("sessionType")||Z.sessionType,L=m().filter([{title:M("session.launcher.SessionType"),key:"sessionType"},{title:"".concat(M("session.launcher.Environments")," & ").concat(M("session.launcher.ResourceAllocation")," "),key:"environment"},"inference"!==D&&{title:M("webui.menu.Data&Storage"),key:"storage"},{title:M("session.launcher.Network"),key:"network"},{title:M("session.launcher.ConfirmAndLaunch"),icon:(0,p.jsx)(he.Z,{}),key:"review"}],(function(e){return!!e})),W=null===(e=L[g])||void 0===e?void 0:e.key,$=m().some(U.getFieldsError(),(function(e){return e.errors.length>0}));return(0,p.jsxs)(w.Z,{direction:"column",align:"stretch",style:{padding:A.paddingSM,width:"100%",justifyContent:"revert"},children:[y&&(0,p.jsx)(je.Z,{items:[{title:M("webui.menu.Sessions"),onClick:function(e){e.preventDefault(),P(y)},href:y},{title:M("session.launcher.StartNewSession")}]}),(0,p.jsxs)(w.Z,{direction:"row",gap:"md",align:"start",children:[(0,p.jsxs)(w.Z,{direction:"column",align:"stretch",style:{flex:1,maxWidth:700},children:[(0,p.jsxs)(w.Z,{direction:"row",justify:"between",children:[(0,p.jsx)(le.Z.Title,{level:3,style:{marginTop:0},children:M("session.launcher.StartNewSession")}),(0,p.jsx)(u.ZP,{type:"link",icon:(0,p.jsx)(pe.Z,{}),children:"Templates"})]}),(0,p.jsx)(C.Z.Provider,{onFormChange:function(e,n){F()},children:(0,p.jsx)(C.Z,{form:U,layout:"vertical",requiredMark:"optional",children:(0,p.jsxs)(w.Z,{direction:"column",align:"stretch",gap:"md",children:[(0,p.jsxs)(c.Z,{title:M("session.launcher.SessionType"),style:{display:"sessionType"===W?"block":"none"},children:[(0,p.jsx)(C.Z.Item,{name:"sessionType",children:(0,p.jsx)(be.Z,{width:100,options:[{label:(0,p.jsx)(_e,{title:"\ud83c\udfc3\u200d\u2640\ufe0f Make, test and run",description:"Interactive mode allows you to create, test and run code interactively via jupyter notebook, visual studio code, etc."}),value:"interactive"},{label:(0,p.jsx)(_e,{title:"\u231a\ufe0f Start an long-running task",description:"Batch mode runs your code with multiple node & clusters to scale your idea"}),value:"batch"}]})}),(0,p.jsx)(C.Z.Item,{label:"Session name",name:"name",rules:[{max:64,message:M("session.Validation.SessionNameTooLong64")},{pattern:/^(?:[a-zA-Z0-9][a-zA-Z0-9._-]{2,}[a-zA-Z0-9])?$/,message:M("session.Validation.PleaseFollowSessionNameRule").toString()}],children:(0,p.jsx)(S.Z,{allowClear:!0})})]}),"batch"===D&&(0,p.jsxs)(c.Z,{title:"Batch Mode Configuration",style:{display:"sessionType"===W?"block":"none"},children:[(0,p.jsx)(C.Z.Item,{label:M("session.launcher.StartUpCommand"),name:["batch","command"],rules:[{required:!0}],children:(0,p.jsx)(S.Z.TextArea,{})}),(0,p.jsx)(C.Z.Item,{label:"Schedule time",children:(0,p.jsxs)(w.Z,{direction:"row",gap:"xs",children:[(0,p.jsx)(C.Z.Item,{noStyle:!0,name:["batch","enabled"],valuePropName:"checked",children:(0,p.jsx)(we.Z,{children:M("session.launcher.Enable")})}),(0,p.jsx)(C.Z.Item,{noStyle:!0,shouldUpdate:function(e,n){var t,r;return(null===(t=e.batch)||void 0===t?void 0:t.enabled)!==(null===(r=n.batch)||void 0===r?void 0:r.enabled)},children:function(){var e,n=!0!==(null===(e=U.getFieldValue("batch"))||void 0===e?void 0:e.enabled);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(C.Z.Item,{name:["batch","scheduleDate"],noStyle:!0,children:(0,p.jsx)(j,{disabled:n,showTime:!0})})})}})]})})]}),"inference"===D&&(0,p.jsx)(c.Z,{title:"Inference Mode Configuration",children:(0,p.jsx)(C.Z.Item,{name:["inference","vFolderName"],label:M("session.launcher.ModelStorageToMount"),rules:[{required:!0}],children:(0,p.jsx)(R.Z,{})})}),(0,p.jsxs)(c.Z,{title:M("session.launcher.Environments"),style:{display:"environment"===W?"block":"none"},children:[(0,p.jsx)(Fe.SV,{fallbackRender:function(e){return console.log(e),null},children:(0,p.jsx)(V.Z,{})}),(0,p.jsx)(C.Z.Item,{label:"Environment Variables",children:(0,p.jsx)(I,{name:"envvars",formItemProps:{validateTrigger:["onChange","onBlur"]}})})]}),(0,p.jsxs)(c.Z,{title:M("session.launcher.ResourceAllocation"),style:{display:"environment"===W?"block":"none"},children:[(0,p.jsx)(C.Z.Item,{name:"resourceGroup",label:M("session.ResourceGroup"),rules:[{required:!0}],children:(0,p.jsx)(H.Z,{autoSelectDefault:!0})}),(0,p.jsx)(Q,{})]}),(0,p.jsx)(c.Z,{title:M("webui.menu.Data&Storage"),style:{display:"storage"===W?"block":"none"},children:(0,p.jsx)(me,{})}),(0,p.jsx)(c.Z,{title:M("session.launcher.Network"),style:{display:"network"===W?"block":"none"},children:(0,p.jsx)(N,{})}),"review"===W&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f,{title:M("session.launcher.SessionType"),size:"small",status:U.getFieldError("name").length>0?"error":void 0,extraButtonTitle:M("button.Edit"),onClickExtraButton:function(){T(L.findIndex((function(e){return"sessionType"===e.key})))},children:(0,p.jsxs)(ke.Z,{size:"small",children:[(0,p.jsx)(ke.Z.Item,{label:"Session Type",span:24,children:U.getFieldValue("sessionType")}),(0,p.jsx)(ke.Z.Item,{label:"Session name",span:24,children:U.getFieldValue("name")})]})}),(0,p.jsx)(f,{title:M("session.launcher.Environments"),size:"small",status:m().some(U.getFieldValue("envvars"),(function(e,n){return U.getFieldError(["envvars",n,"variable"]).length>0||U.getFieldError(["envvars",n,"value"]).length>0}))?"error":void 0,extraButtonTitle:M("button.Edit"),onClickExtraButton:function(){T(L.findIndex((function(e){return"environment"===e.key})))},children:(0,p.jsxs)(ke.Z,{size:"small",layout:"vertical",column:1,children:[(0,p.jsx)(ke.Z.Item,{label:"Image",children:(0,p.jsxs)(w.Z,{direction:"row",gap:"xs",style:{flex:1},children:[(0,p.jsx)(E.Z,{image:null===(n=U.getFieldValue("environments"))||void 0===n?void 0:n.version}),(0,p.jsx)(le.Z.Text,{copyable:!0,code:!0,children:null===(t=U.getFieldValue("environments"))||void 0===t?void 0:t.version})]})}),(0,p.jsx)(ke.Z.Item,{label:M("session.launcher.EnvironmentVariable"),children:null!==(r=U.getFieldValue("envvars"))&&void 0!==r&&r.length?(0,p.jsx)(Te.Z,{style:Ie.Z,codeTagProps:{style:{}},customStyle:{margin:0,width:"100%"},children:m().map(U.getFieldValue("envvars"),(function(e){return"".concat((null===e||void 0===e?void 0:e.variable)||"",'="').concat((null===e||void 0===e?void 0:e.value)||"",'"')})).join("\n")}):"-"})]})}),(0,p.jsx)(c.Z,{title:M("session.launcher.ResourceAllocation"),size:"small",extra:(0,p.jsx)(u.ZP,{type:"link",onClick:function(){T(L.findIndex((function(e){return"environment"===e.key})))},children:M("button.Edit")}),children:(0,p.jsx)(ke.Z,{children:(0,p.jsx)(ke.Z.Item,{span:24,label:M("environment.ResourcePresets"),children:(0,p.jsxs)(w.Z,{direction:"row",align:"start",gap:"xs",wrap:"wrap",style:{flex:1},children:["custom"===U.getFieldValue("allocationPreset")?"":(0,p.jsx)(_.Z,{children:U.getFieldValue("allocationPreset")}),m().map(m().omit(U.getFieldValue("resource"),"shmem"),(function(e,n){return(0,p.jsx)(G.ZP,{type:n,value:"mem"===n?(0,K.PZ)(e+"g","b").number+"":e,opts:{shmem:U.getFieldValue("resource").shmem?(0,K.PZ)(U.getFieldValue("resource").shmem+"g","b").number:void 0}},n)}))]})})})}),(0,p.jsx)(f,{title:M("webui.menu.Data&Storage"),size:"small",status:U.getFieldError("vfoldersAliasMap").length>0?"error":void 0,extraButtonTitle:M("button.Edit"),onClickExtraButton:function(){T(L.findIndex((function(e){return"storage"===e.key})))},children:(null===(s=U.getFieldValue("mounts"))||void 0===s?void 0:s.length)>0?(0,p.jsx)(ue.Z,{rowKey:"name",size:"small",pagination:!1,columns:[{dataIndex:"name",title:M("data.folders.Name")},{dataIndex:"alias",title:M("session.launcher.FolderAlias"),render:function(e,n){return m().isEmpty(e)?(0,p.jsx)(le.Z.Text,{type:"secondary",style:{opacity:.7},children:"/home/work/".concat(n.name)}):e}}],dataSource:m().map(U.getFieldValue("mounts"),(function(e){var n;return{name:e,alias:null===(n=U.getFieldValue("vfoldersAliasMap"))||void 0===n?void 0:n[e]}}))}):"-"}),(0,p.jsx)(f,{title:"Network",size:"small",status:U.getFieldError("ports").length>0?"error":void 0,extraButtonTitle:M("button.Edit"),onClickExtraButton:function(){T(L.findIndex((function(e){return"network"===e.key})))},children:(0,p.jsx)(ke.Z,{size:"small",children:(0,p.jsx)(ke.Z.Item,{label:M("session.launcher.PreOpenPortTitle"),children:(0,p.jsxs)(w.Z,{direction:"row",gap:"xs",style:{flex:1},wrap:"wrap",children:[m().sortBy(U.getFieldValue("ports"),(function(e){return parseInt(e)})).map((function(e){return(0,p.jsx)(z,{value:e,style:{margin:0},children:e})})),0!==(null===(l=U.getFieldValue("ports"))||void 0===l?void 0:l.length)?void 0:"-"]})})})})]}),(0,p.jsxs)(w.Z,{direction:"row",justify:"between",children:[(0,p.jsx)(w.Z,{gap:"sm",children:g===L.length-1&&(0,p.jsx)(u.ZP,{icon:(0,p.jsx)(ve.Z,{}),onClick:function(){Pe.ZP.info("Not implemented yet: Template edit modal")},children:"Save as a template"})}),(0,p.jsxs)(w.Z,{direction:"row",gap:"sm",children:[g!==L.length-1&&(0,p.jsx)(u.ZP,{onClick:function(){T(L.length-1)},children:"Skip to Review"}),g>0&&(0,p.jsx)(u.ZP,{onClick:function(){T(g-1)},icon:(0,p.jsx)(fe.Z,{}),children:"Previous"}),g===L.length-1?(0,p.jsx)(u.ZP,{type:"primary",icon:(0,p.jsx)(xe.Z,{}),disabled:$,children:M("session.launcher.Launch")}):(0,p.jsxs)(u.ZP,{type:"primary",ghost:!0,onClick:function(){T(g+1)},children:["Next ",(0,p.jsx)(ge.Z,{})]})]})]})]})})})]}),q.md&&(0,p.jsx)(Ce.Z,{offsetTop:150,style:{zIndex:2},children:(0,p.jsx)(Se.Z,{size:"small",direction:"vertical",current:g,onChange:function(e){T(e)},items:m().map(L,(function(e,n){return(0,i.Z)((0,i.Z)({},e),{},{status:n===g?"process":"wait"})}))})})]})]})}}}]);
//# sourceMappingURL=150.4f42cd2c.chunk.js.map