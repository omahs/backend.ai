"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[20,502],{77758:function(e,n,a){a.d(n,{Z:function(){return o}});var l=a(1413),t=a(36459),i=a(65113),r=(a(4519),a(2556)),o=function(e){var n,a=Object.assign({},((0,t.Z)(e),e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:".ant-modal.bai-modal .ant-modal-content {\n  padding: var(--general-modal-content-padding, 0);\n}\n.ant-modal.bai-modal .ant-modal-body {\n  padding: var(--general-modal-body-padding, 0 24px);\n}\n\n.ant-modal.bai-modal .ant-modal-footer {\n  padding: var(--general-modal-footer-padding, 0 20px 24px 20px);\n}\n\n.ant-modal.bai-modal .ant-modal-header {\n  border-bottom: 1px solid rgb(221, 221, 221);\n  border-width: 100%;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.ant-modal.bai-modal .ant-modal-content .ant-modal-header,\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  padding: var(--general-modal-header-padding, 10px 20px);\n  height: var(--general-modal-header-height, 69px);\n}\n\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  /* center */\n  top: 0;\n}\n"}),(0,r.jsx)(i.Z,(0,l.Z)({centered:null===(n=a.centered)||void 0===n||n,className:"bai-modal"},a))]})}},61502:function(e,n,a){a.r(n),a.d(n,{default:function(){return G},useShadowRoot:function(){return Q},useWebComponentInfo:function(){return B}});var l=a(29439),t=a(74165),i=a(15861),r=a(1413);function o(e,n){var a=(0,r.Z)({},n);return function(e){for(var n,a=/(\w+)\s@\s*(\w+)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/g,t=[];null!==(n=a.exec(e));){var i=n,r=(0,l.Z)(i,5),o=r[0],s=r[1],u=r[2],d=r[3],c=r[4];t.push({fieldName:s,directive:u,argumentName:d,argumentValue:c,originFieldStr:o})}return t}(e).forEach((function(l){if("skipOnClient"===l.directive&&"if"===l.argumentName&&(e=!l.argumentValue||!0!==n[l.argumentValue.substring(1)]&&"true"!==l.argumentValue?e.replace(l.originFieldStr,l.originFieldStr.replace(/@\s*(skipOnClient)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/,"")):e.replace(l.originFieldStr,""),l.argumentValue.startsWith("$")&&2===e.split(l.argumentValue).length)){var t=l.argumentValue.substring(1),i=new RegExp(".*".concat(t,".*\n"),"g");e=e.replace(i,""),delete a[l.argumentValue.substring(1)]}})),{query:e,variables:a}}var s=a(41011);s.RelayFeatureFlags.ENABLE_RELAY_RESOLVERS=!0;var u=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n,a){var l,i,r,s,u,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o(n.text||"",a),s={query:r.query,variables:r.variables},u=null===(l=globalThis.backendaiclient)||void 0===l?void 0:l.newSignedRequest("POST","/admin/gql",s),e.next=5,null===(i=globalThis.backendaiclient)||void 0===i?void 0:i._wrapWithPromise(u,!1,null,1e4,0).catch((function(e){}));case 5:if(e.t0=e.sent,e.t0){e.next=8;break}e.t0={};case 8:return d=e.t0,e.abrupt("return",d);case 10:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}();var d,c=new s.Environment({network:s.Network.create(u,void 0),store:new s.Store(new s.RecordSource)}),m=a(80382),p=a(27340),g=a(41239),v=a(47226),f=a(49883),h=a(66670),y=a(99517),k=a.n(y),b=(a(24989),a(79354)),x=a.n(b),Z=a(79748),S=a.n(Z),F=a(51714),w=a.n(F),T=a(63540),j=a.n(T),_=a(18272),K=a.n(_),C=a(9666),P=a.n(C),L=a(64447),M=a(13881),U=a(4519),N=a(81748),I=a(87112),E=a(16980),V=a(51843),O=a(12674),A=a(55144),R=a(73181),$=a(2556);k().extend(P()),k().extend(x()),k().extend(S()),k().extend(w()),k().extend(K()),k().extend(j());var D=U.createContext(null),q=U.createContext(null),Q=function(){return U.useContext(q)},B=function(){return U.useContext(D)},z=new I.QueryClient({defaultOptions:{queries:{suspense:!0,refetchOnWindowFocus:!1,retry:!1}}});L.ZP.use(N.Db).use(M.Z).init({backend:{loadPath:"/resources/i18n/{{lng}}.json"},lng:(null===globalThis||void 0===globalThis||null===(d=globalThis.backendaioptions)||void 0===d?void 0:d.get("current_language"))||"en",fallbackLng:"en",interpolation:{escapeValue:!1},react:{transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","span","code","p"]}});var W=function(){var e=(0,O.s0)();return(0,U.useLayoutEffect)((function(){var n=function(n){var a=n.detail;e(a,{replace:!0})};return document.addEventListener("react-navigate",n),function(){document.removeEventListener("react-navigate",n)}}),[e]),null},G=function(e){var n=e.children,a=e.value,t=e.styles,i=e.shadowRoot,r=e.dispatchEvent,o=(0,U.useMemo)((function(){return(0,p.Df)()}),[]),s=function(){var e,n=(0,U.useState)(null===globalThis||void 0===globalThis||null===(e=globalThis.backendaioptions)||void 0===e?void 0:e.get("current_language")),a=(0,l.Z)(n,2),t=a[0],i=a[1],r=(0,N.$G)().i18n;return(0,U.useEffect)((function(){setTimeout((function(){return null===r||void 0===r?void 0:r.changeLanguage(t)}),0),k().locale(t)}),[]),(0,U.useEffect)((function(){var e=function(e){var n,a;i(null===e||void 0===e||null===(n=e.detail)||void 0===n?void 0:n.lang);var l=(null===e||void 0===e||null===(a=e.detail)||void 0===a?void 0:a.lang)||"en";null===r||void 0===r||r.changeLanguage(l),k().locale(l)};return window.addEventListener("langChanged",e),function(){return window.removeEventListener("langChanged",e)}}),[r]),[t]}(),u=(0,l.Z)(s,1)[0],d=(0,m.x)(),y=(0,U.useMemo)((function(){return{value:a,dispatchEvent:r,moveTo:function(e,n){r("moveTo",{path:e,params:n})}}}),[a,r]);return(0,$.jsx)($.Fragment,{children:c&&(0,$.jsx)(E.RelayEnvironmentProvider,{environment:c,children:(0,$.jsxs)(U.StrictMode,{children:[(0,$.jsxs)("style",{children:[t,".anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n/* fix: fixed column shadow display outside of a table wrapper */\n.ant-table-wrapper {\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n\n/* fix: the tooltip does not appear in the `<Form.Item tooltip={'something'}` when the popup container is a parent node of the trigger node. */\n.ant-form-item-label {\n  overflow: unset !important;\n}\n"]}),(0,$.jsx)(I.QueryClientProvider,{client:z,children:(0,$.jsx)(q.Provider,{value:i,children:(0,$.jsx)(D.Provider,{value:y,children:(0,$.jsx)(g.ZP,{getPopupContainer:function(e){return(null===e||void 0===e?void 0:e.parentNode)||i},locale:"ko"===u?h.Z:f.Z,theme:d,children:(0,$.jsx)(v.Z,{children:(0,$.jsx)(p.V9,{container:i,cache:o,children:(0,$.jsx)(U.Suspense,{fallback:"",children:(0,$.jsx)(V.VK,{children:(0,$.jsxs)(A.QueryParamProvider,{adapter:R.Q,options:{},children:[(0,$.jsx)(W,{}),n]})})})})})})})})})]})})})}},14749:function(e,n,a){var l,t=a(1413),i=a(29439),r=a(44925),o=a(87760),s=a(50164),u=a(77758),d=a(99277),c=a(44036),m=a(57054),p=a(88464),g=a(39883),v=a(42272),f=a(28499),h=a(38818),y=(a(4519),a(81748)),k=a(87112),b=a(16980),x=a(2556),Z=["userFrgmt","onRequestClose"];n.Z=function(e){var n=e.userFrgmt,S=void 0===n?null:n,F=e.onRequestClose,w=(0,r.Z)(e,Z),T=(0,y.$G)().t,j=c.Z.useToken().token,_=m.Z.useForm(),K=(0,i.Z)(_,1)[0],C=(0,b.useFragment)(void 0!==l?l:l=a(78067),S),P=(0,o.Dj)(),L=(0,k.useQuery)({queryKey:["initialize_totp",null===P||void 0===P?void 0:P.email,w.open],queryFn:function(){return(null===C||void 0===C?void 0:C.email)!==(null===P||void 0===P?void 0:P.email)||null!==C&&void 0!==C&&C.totp_activated||!w.open?null:P.initialize_totp()},suspense:!1,staleTime:0,cacheTime:0}),M=(0,s.Y)({mutationFn:function(e){return P.activate_totp(e.otp)}});return(0,x.jsx)(u.Z,(0,t.Z)((0,t.Z)({title:T("webui.menu.SetupTotp"),maskClosable:!1,confirmLoading:M.isLoading,onOk:function(){K.validateFields().then((function(e){M.mutate(e,{onSuccess:function(){p.ZP.success(T("totp.TotpSetupCompleted")),F(!0)},onError:function(){p.ZP.error(T("totp.InvalidTotpCode"))}}),new Promise((function(e,n){})).then((function(){F(!0)}))}))},onCancel:function(){F()},style:{zIndex:1}},w),{},{children:L.isLoading?(0,x.jsx)(d.Z,{justify:"center",direction:"row",children:(0,x.jsx)(g.Z,{})}):L.data?(0,x.jsxs)(m.Z,{preserve:!1,form:K,validateTrigger:["onChange","onBlur"],children:[T("totp.TypeInAuthKey"),(0,x.jsx)(d.Z,{justify:"center",style:{margin:j.marginSM,gap:j.margin},children:(0,x.jsx)(v.Z,{value:L.data.totp_uri})}),T("totp.ScanQRToEnable"),(0,x.jsx)(d.Z,{justify:"center",style:{margin:j.marginSM,gap:j.margin},children:(0,x.jsx)(f.Z.Text,{copyable:!0,code:!0,children:L.data.totp_key})}),T("totp.TypeInAuthKey"),(0,x.jsx)(d.Z,{justify:"center",style:{margin:j.marginSM,gap:j.margin},children:(0,x.jsx)(m.Z.Item,{required:!0,name:"otp",children:(0,x.jsx)(h.Z,{maxLength:6,allowClear:!0,placeholder:"000000",style:{maxWidth:120}})})})]}):(0,x.jsx)(d.Z,{justify:"center",direction:"row",children:T("totp.TotpSetupNotAvailable")})}))}},75020:function(e,n,a){a.r(n);var l,t,i=a(74165),r=a(1413),o=a(15861),s=a(29439),u=a(44925),d=a(87760),c=a(50164),m=a(77758),p=a(61502),g=a(14749),v=a(88724),f=a(63703),h=a(65113),y=a(57054),k=a(88464),b=a(38818),x=a(19427),Z=a(62708),S=a(28499),F=a(32048),w=a.n(F),T=a(4519),j=a(81748),_=a(87112),K=a(16980),C=a(2556),P=["extraFetchKey"];n.default=function(e){var n,F,L=e.extraFetchKey,M=void 0===L?"":L,U=(0,u.Z)(e,P),N=(0,j.$G)().t,I=(0,p.useWebComponentInfo)(),E=I.value,V=I.dispatchEvent;try{F=JSON.parse(E||"")}catch(he){F={open:!1,userEmail:""}}var O,A=F,R=A.open,$=A.userEmail,D=h.Z.useModal(),q=(0,s.Z)(D,2),Q=q[0],B=q[1],z=y.Z.useForm(),W=(0,s.Z)(z,1)[0],G={superadmin:["superadmin","admin","user","monitor"],admin:["admin","user","monitor"]},Y=(0,d.Kr)("initial-fetch"),H=(0,s.Z)(Y,2),J=H[0],X=H[1],ee=(0,T.useDeferredValue)(J+M),ne=(0,d.Dj)(),ae=(0,_.useQuery)("isManagerSupportingTOTP",(function(){return ne.isManagerSupportingTOTP()}),{suspense:!1}),le=ae.data,te=ae.isLoading;O=(null===ne||void 0===ne?void 0:ne.supports("2FA"))&&le;var ie=(0,K.useLazyLoadQuery)(void 0!==l?l:l=a(76912),{email:$,isNotSupportTotp:!O,loggedInUserEmail:null!==(n=null===ne||void 0===ne?void 0:ne.email)&&void 0!==n?n:""},{fetchKey:ee,fetchPolicy:"network-only"}),re=ie.user,oe=ie.loggedInUser,se=(0,K.useMutation)(void 0!==t?t:t=a(21325)),ue=(0,s.Z)(se,2),de=ue[0],ce=ue[1],me=(0,c.Y)({mutationFn:function(e){return ne.remove_totp(e)}}),pe=(0,f.Z)(!1),ge=(0,s.Z)(pe,2),ve=ge[0],fe=ge[1].toggle;return(0,C.jsxs)(m.Z,(0,r.Z)((0,r.Z)({open:R,onCancel:function(){V("cancel",null)},centered:!0,title:N("credential.ModifyUserDetail"),destroyOnClose:!0,onOk:function(){W.validateFields().then(function(){var e=(0,o.Z)((0,i.Z)().mark((function e(n){var a,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete(a=(0,r.Z)({},n)).email,a=w().omit(a,["password_confirm"]),a=w().omitBy(a,(function(e){return void 0===e||""===e})),O||null===(l=a)||void 0===l||delete l.totp_activated,de({variables:{email:(null===n||void 0===n?void 0:n.email)||"",props:a,isNotSupportTotp:!O},onCompleted:function(e){var n,a;null!==e&&void 0!==e&&null!==(n=e.modify_user)&&void 0!==n&&n.ok?k.ZP.success(N("environment.SuccessfullyModified")):k.ZP.error(null===e||void 0===e||null===(a=e.modify_user)||void 0===a?void 0:a.msg);V("ok",null)},onError:function(e){k.ZP.error(null===e||void 0===e?void 0:e.message)}});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},confirmLoading:ce},U),{},{children:[(0,C.jsxs)(y.Z,{preserve:!1,form:W,labelCol:{span:10},wrapperCol:{span:20},validateTrigger:["onChange","onBlur"],style:{marginBottom:40,marginTop:20},initialValues:(0,r.Z)({},re),children:[(0,C.jsx)(y.Z.Item,{name:"email",label:N("credential.UserID"),children:(0,C.jsx)(b.Z,{disabled:!0})}),(0,C.jsx)(y.Z.Item,{name:"username",label:N("credential.UserName"),children:(0,C.jsx)(b.Z,{placeholder:N("maxLength.64chars")})}),(0,C.jsx)(y.Z.Item,{name:"full_name",label:N("credential.FullName"),children:(0,C.jsx)(b.Z,{placeholder:N("maxLength.64chars")})}),(0,C.jsx)(y.Z.Item,{name:"password",label:N("general.NewPassword"),rules:[{pattern:/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[_\W]).{8,}$/,message:N("webui.menu.InvalidPasswordMessage")}],children:(0,C.jsx)(b.Z.Password,{})}),(0,C.jsx)(y.Z.Item,{name:"password_confirm",dependencies:["password"],label:N("webui.menu.NewPasswordAgain"),rules:[function(e){var n=e.getFieldValue;return{validator:function(e,a){return!a&&n("password")?Promise.reject(new Error(N("webui.menu.PleaseConfirmYourPassword"))):a&&n("password")!==a?Promise.reject(new Error(N("environment.PasswordsDoNotMatch"))):Promise.resolve()}}}],children:(0,C.jsx)(b.Z.Password,{})}),(0,C.jsx)(y.Z.Item,{name:"description",label:N("credential.Description"),children:(0,C.jsx)(b.Z.TextArea,{placeholder:N("maxLength.500chars")})}),(0,C.jsx)(y.Z.Item,{name:"status",label:N("credential.UserStatus"),children:(0,C.jsx)(x.Z,{options:w().map({active:"Active",inactive:"Inactive","before-verification":"Before Verification",deleted:"Deleted"},(function(e,n){return{value:n,label:e}}))})}),!(null===re||void 0===re||!re.role)&&!(null===oe||void 0===oe||!oe.role)&&oe.role in G&&(0,C.jsx)(y.Z.Item,{name:"role",label:N("credential.Role"),children:(0,C.jsx)(x.Z,{options:w().map(G[oe.role],(function(e){return{value:e,label:e}}))})}),(0,C.jsx)(y.Z.Item,{name:"need_password_change",label:N("credential.DescRequirePasswordChange"),valuePropName:"checked",children:(0,C.jsx)(Z.Z,{})}),!!O&&(0,C.jsx)(y.Z.Item,{name:"totp_activated",label:N("webui.menu.TotpActivated"),valuePropName:"checked",extra:(null===re||void 0===re?void 0:re.email)!==(null===ne||void 0===ne?void 0:ne.email)&&(0,C.jsx)(S.Z.Text,{type:"secondary",style:{fontSize:12},children:N("credential.AdminCanOnlyRemoveTotp")}),children:(0,C.jsx)(Z.Z,{loading:te||me.isLoading,disabled:(null===re||void 0===re?void 0:re.email)!==(null===ne||void 0===ne?void 0:ne.email)&&!(null!==re&&void 0!==re&&re.totp_activated),onChange:function(e){e?fe():null!==re&&void 0!==re&&re.totp_activated&&(W.setFieldValue("totp_activated",!0),Q.confirm({title:N("totp.TurnOffTotp"),icon:(0,C.jsx)(v.Z,{}),content:N("totp.ConfirmTotpRemovalBody"),okText:N("button.Yes"),okType:"danger",cancelText:N("button.No"),onOk:function(){me.mutate((null===re||void 0===re?void 0:re.email)||"",{onSuccess:function(){k.ZP.success(N("totp.RemoveTotpSetupCompleted")),X(),W.setFieldValue("totp_activated",!1)},onError:function(e){console.log(e)}})},onCancel:function(){W.setFieldValue("totp_activated",!0)}}))}})})]}),!!O&&(0,C.jsx)(g.Z,{userFrgmt:re,open:ve,onRequestClose:function(e){e?X():W.setFieldValue("totp_activated",!1),fe()}}),B]}))}},78067:function(e,n,a){a.r(n);var l={argumentDefinitions:[{kind:"RootArgument",name:"isNotSupportTotp"}],kind:"Fragment",metadata:null,name:"TOTPActivateModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totp_activated",storageKey:null}],type:"User",abstractKey:null,hash:"f5da6b3094f7d70bef9373d9c907955c"};n.default=l},21325:function(e,n,a){a.r(n);var l=function(){var e={defaultValue:null,kind:"LocalArgument",name:"email"},n={defaultValue:null,kind:"LocalArgument",name:"isNotSupportTotp"},a={defaultValue:null,kind:"LocalArgument",name:"props"},l=[{kind:"Variable",name:"email",variableName:"email"},{kind:"Variable",name:"props",variableName:"props"}],t={alias:null,args:null,kind:"ScalarField",name:"ok",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"msg",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"need_password_change",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"domain_name",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"role",storageKey:null},v={alias:null,args:null,concreteType:"UserGroup",kind:"LinkedField",name:"groups",plural:!0,selections:[r,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"totp_activated",storageKey:null};return{fragment:{argumentDefinitions:[e,n,a],kind:"Fragment",metadata:null,name:"UserSettingModalMutation",selections:[{alias:null,args:l,concreteType:"ModifyUser",kind:"LinkedField",name:"modify_user",plural:!1,selections:[t,i,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[r,o,s,u,d,c,m,p,g,v,f,{args:null,kind:"FragmentSpread",name:"TOTPActivateModalFragment"}],storageKey:null}],storageKey:null}],type:"Mutations",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,a,n],kind:"Operation",name:"UserSettingModalMutation",selections:[{alias:null,args:l,concreteType:"ModifyUser",kind:"LinkedField",name:"modify_user",plural:!1,selections:[t,i,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[r,o,s,u,d,c,m,p,g,v,f],storageKey:null}],storageKey:null}]},params:{cacheID:"5d5c7ff235856d2c08169131fadc0f14",id:null,metadata:{},name:"UserSettingModalMutation",operationKind:"mutation",text:"mutation UserSettingModalMutation(\n  $email: String!\n  $props: ModifyUserInput!\n  $isNotSupportTotp: Boolean!\n) {\n  modify_user(email: $email, props: $props) {\n    ok\n    msg\n    user {\n      id\n      email\n      username\n      need_password_change\n      full_name\n      description\n      status\n      domain_name\n      role\n      groups {\n        id\n        name\n      }\n      totp_activated @skipOnClient(if: $isNotSupportTotp)\n      ...TOTPActivateModalFragment\n    }\n  }\n}\n\nfragment TOTPActivateModalFragment on User {\n  email\n  totp_activated @skipOnClient(if: $isNotSupportTotp)\n}\n"}}}();l.hash="021dbd1c9e2f622338330e746b9c4b3b",n.default=l},76912:function(e,n,a){a.r(n);var l=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"email"},{defaultValue:null,kind:"LocalArgument",name:"isNotSupportTotp"},{defaultValue:null,kind:"LocalArgument",name:"loggedInUserEmail"}],n=[{kind:"Variable",name:"email",variableName:"email"}],a={alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"need_password_change",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"domain_name",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"role",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,concreteType:"UserGroup",kind:"LinkedField",name:"groups",plural:!0,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"totp_activated",storageKey:null},p=[{kind:"Variable",name:"email",variableName:"loggedInUserEmail"}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"UserSettingModalQuery",selections:[{alias:null,args:n,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[a,l,t,i,r,o,s,u,c,m,{args:null,kind:"FragmentSpread",name:"TOTPActivateModalFragment"}],storageKey:null},{alias:"loggedInUser",args:p,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[u],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"UserSettingModalQuery",selections:[{alias:null,args:n,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[a,l,t,i,r,o,s,u,c,m,d],storageKey:null},{alias:"loggedInUser",args:p,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[u,d],storageKey:null}]},params:{cacheID:"f5c73f63d25dff1f189acfc0eb698438",id:null,metadata:{},name:"UserSettingModalQuery",operationKind:"query",text:"query UserSettingModalQuery(\n  $email: String\n  $isNotSupportTotp: Boolean!\n  $loggedInUserEmail: String\n) {\n  user(email: $email) {\n    email\n    username\n    need_password_change\n    full_name\n    description\n    status\n    domain_name\n    role\n    groups {\n      id\n      name\n    }\n    totp_activated @skipOnClient(if: $isNotSupportTotp)\n    ...TOTPActivateModalFragment\n    id\n  }\n  loggedInUser: user(email: $loggedInUserEmail) {\n    role\n    id\n  }\n}\n\nfragment TOTPActivateModalFragment on User {\n  email\n  totp_activated @skipOnClient(if: $isNotSupportTotp)\n}\n"}}}();l.hash="a34969350a5ae4fcee0bbba23cc88484",n.default=l}}]);
//# sourceMappingURL=20.0e46e1b5.chunk.js.map