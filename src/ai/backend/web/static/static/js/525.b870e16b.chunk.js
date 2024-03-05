"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[525,540],{38540:function(e,n,t){t.r(n),t.d(n,{passwordPattern:function(){return P}});var o=t(29439),r=t(43255),a=t(40406),s=t(50164),i=t(85911),u=t(99277),l=t(69080),d=t(44036),c=t(57054),m=t(65113),p=t(70389),w=t(38818),f=t(38812),g=t(4519),v=t(81748),h=t(2556),P=/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[_\W]).{8,}$/;n.default=function(){var e,n=(0,i.useWebComponentInfo)(),t=n.value,Z=n.dispatchEvent;try{e=JSON.parse(t||"")}catch(E){e={open:!1,currentPassword:"",username:"",api_endpoint:""}}var b=e,j=b.open,x=b.currentPassword,y=b.username,C=b.api_endpoint,_=d.Z.useToken().token,F=c.Z.useForm(),T=(0,o.Z)(F,1)[0],k=(0,v.$G)().t;(0,g.useEffect)((function(){j&&T.resetFields()}),[j,T]);var S=(0,a.M)({api_endpoint:C}),M=(0,s.Y)({mutationFn:function(e){return(0,r.Lc)({method:"POST",url:"/server/update-password-no-auth",body:e,client:S})}}),R=function(){T.validateFields().then((function(e){M.mutate({username:y,current_password:x,new_password:e.newPassword},{onSuccess:function(e,n,t){Z("ok",null)},onError:function(e,n,t){}})}))};return(0,h.jsx)(m.Z,{open:j,centered:!0,mask:!1,onCancel:function(){Z("cancel",null)},keyboard:!1,maskClosable:!1,footer:null,width:450,destroyOnClose:!0,forceRender:!0,children:(0,h.jsxs)(u.Z,{direction:"column",justify:"start",align:"stretch",gap:"md",style:{alignSelf:"stretch",paddingTop:_.paddingMD,paddingBottom:_.paddingMD},children:[(0,h.jsxs)(p.Z.Title,{level:3,style:{margin:0},children:[(0,h.jsx)(l.Z,{twoToneColor:_.colorWarning})," ",k("webui.menu.PleaseChangeYourPassword")]}),k("webui.menu.YouMushChangeYourPassword"),(0,h.jsxs)(c.Z,{form:T,layout:"vertical",initialValues:{currentPassword:x},disabled:M.isLoading,children:[(0,h.jsx)(c.Z.Item,{name:"newPassword",label:k("webui.menu.NewPassword"),rules:[{required:!0},{pattern:P,message:k("webui.menu.InvalidPasswordMessage").toString()},function(){return{validator:function(e,n){return x===n?Promise.reject(new Error(k("webui.menu.NewPasswordCannotBeSame").toString())):Promise.resolve()}}}],hasFeedback:!0,children:(0,h.jsx)(w.Z.Password,{})}),(0,h.jsx)(c.Z.Item,{name:"confirm",label:k("webui.menu.NewPasswordAgain"),dependencies:["newPassword"],hasFeedback:!0,rules:[{required:!0},function(e){var n=e.getFieldValue;return{validator:function(e,t){return t&&n("newPassword")!==t?Promise.reject(new Error(k("environment.PasswordsDoNotMatch").toString())):Promise.resolve()}}}],children:(0,h.jsx)(w.Z.Password,{onPressEnter:R})})]}),(0,h.jsx)(f.ZP,{type:"primary",onClick:R,loading:M.isLoading,children:k("webui.menu.Update")})]})})}},14749:function(e,n,t){var o,r=t(1413),a=t(29439),s=t(44925),i=t(40406),u=t(50164),l=t(77758),d=t(99277),c=t(44036),m=t(57054),p=t(88464),w=t(39883),f=t(42272),g=t(70389),v=t(38818),h=(t(4519),t(81748)),P=t(87112),Z=t(16980),b=t(2556),j=["userFrgmt","onRequestClose"];n.Z=function(e){var n=e.userFrgmt,x=void 0===n?null:n,y=e.onRequestClose,C=(0,s.Z)(e,j),_=(0,h.$G)().t,F=c.Z.useToken().token,T=m.Z.useForm(),k=(0,a.Z)(T,1)[0],S=(0,Z.useFragment)(void 0!==o?o:o=t(78067),x),M=(0,i.Dj)(),R=(0,P.useQuery)({queryKey:["initialize_totp",null===M||void 0===M?void 0:M.email,C.open],queryFn:function(){return(null===S||void 0===S?void 0:S.email)!==(null===M||void 0===M?void 0:M.email)||null!==S&&void 0!==S&&S.totp_activated||!C.open?null:M.initialize_totp()},suspense:!1,staleTime:0,cacheTime:0}),E=(0,u.Y)({mutationFn:function(e){return M.activate_totp(e.OTP)}});return(0,b.jsx)(l.Z,(0,r.Z)((0,r.Z)({title:_("webui.menu.SetupTotp"),maskClosable:!1,confirmLoading:E.isLoading,onOk:function(){k.validateFields().then((function(e){E.mutate(e,{onSuccess:function(){p.ZP.success(_("totp.TotpSetupCompleted")),y(!0)},onError:function(){p.ZP.error(_("totp.InvalidTotpCode"))}}),new Promise((function(e,n){})).then((function(){y(!0)}))})).catch((function(){}))},onCancel:function(){y()}},C),{},{children:R.isLoading?(0,b.jsx)(d.Z,{justify:"center",direction:"row",children:(0,b.jsx)(w.Z,{})}):R.data?(0,b.jsxs)(b.Fragment,{children:[_("totp.ScanQRToEnable"),(0,b.jsx)(d.Z,{justify:"center",style:{margin:F.marginSM,gap:F.margin},children:(0,b.jsx)(f.Z,{value:R.data.totp_uri})}),_("totp.TypeInAuthKey"),(0,b.jsx)(d.Z,{justify:"center",style:{margin:F.marginSM,gap:F.margin},children:(0,b.jsx)(g.Z.Text,{copyable:!0,code:!0,children:R.data.totp_key})}),_("totp.EnterConfirmationCode"),(0,b.jsx)(m.Z,{preserve:!1,form:k,validateTrigger:["onChange","onBlur"],children:(0,b.jsx)(d.Z,{justify:"center",style:{margin:F.marginSM,gap:F.margin},children:(0,b.jsx)(m.Z.Item,{name:"OTP",rules:[{required:!0,message:_("totp.RequireOTP")},{pattern:/^[0-9]+$/,message:_("credential.validation.NumbersOnly")}],children:(0,b.jsx)(v.Z,{maxLength:6,allowClear:!0,placeholder:"000000",style:{maxWidth:150}})})})})]}):(0,b.jsx)(d.Z,{justify:"center",direction:"row",children:_("totp.TotpSetupNotAvailable")})}))}},36525:function(e,n,t){t.r(n);var o=t(1413),r=t(29439),a=t(44925),s=t(40406),i=t(1839),u=t(50164),l=t(77758),d=t(38540),c=t(14749),m=t(2855),p=t(32064),w=t(88724),f=t(63703),g=t(57054),v=t(88464),h=t(65113),P=t(39883),Z=t(38818),b=t(62708),j=(t(4519),t(81748)),x=t(16980),y=t(2556),C=["onRequestClose","onRequestRefresh","isRefreshModalPending","totpSupported","queryRef"];n.default=function(e){var n=e.onRequestClose,t=e.onRequestRefresh,_=e.isRefreshModalPending,F=e.totpSupported,T=e.queryRef,k=(0,a.Z)(e,C),S=(0,j.$G)().t,M=g.Z.useForm(),R=(0,r.Z)(M,1)[0],E=v.ZP.useMessage(),I=(0,r.Z)(E,2),N=I[0],q=I[1],O=h.Z.useModal(),L=(0,r.Z)(O,2),V=L[0],z=L[1],A=(0,f.Z)(!1),Y=(0,r.Z)(A,2),D=Y[0],B=Y[1].toggle,K=(0,s.Dj)(),U=(0,i.jC)(),$=(0,r.Z)(U,2),W=$[0],G=$[1],Q=(0,x.usePreloadedQuery)(m.d,T).user,H=(0,u.Y)({mutationFn:function(){return K.remove_totp()}});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(l.Z,(0,o.Z)((0,o.Z)({},k),{},{okText:S("webui.menu.Update"),cancelText:S("webui.menu.Cancel"),onCancel:function(){n()},confirmLoading:W.isPendingMutation,onOk:function(){R.validateFields().then((function(e){G.updateFullName(e.full_name,{onSuccess:function(t){t!==W.full_name&&N.open({type:"success",content:S("webui.menu.FullnameUpdated")}),e.newPassword&&e.newPasswordConfirm&&e.originalPassword?G.updatePassword({new_password:e.newPassword,new_password2:e.newPasswordConfirm,old_password:e.originalPassword},{onSuccess:function(){N.open({type:"success",content:S("webui.menu.PasswordUpdated")}),n(!0)},onError:function(e){N.open({type:"error",content:e.message})}}):n(!0)},onError:function(e){N.open({type:"error",content:e.message})}})})).catch((function(){}))},centered:!0,destroyOnClose:!0,title:S("webui.menu.MyAccountInformation"),children:[(0,y.jsx)(P.Z,{spinning:_,indicator:(0,y.jsx)(p.Z,{}),children:(0,y.jsxs)(g.Z,{layout:"vertical",labelCol:{span:8},form:R,initialValues:{full_name:W.full_name,totp_activated:(null===Q||void 0===Q?void 0:Q.totp_activated)||!1},preserve:!1,children:[(0,y.jsx)(g.Z.Item,{name:"full_name",label:S("webui.menu.FullName"),rules:[function(){return{validator:function(e,n){return n&&n.length<65?Promise.resolve():Promise.reject(new Error(S("webui.menu.FullNameInvalid")))}}}],children:(0,y.jsx)(Z.Z,{})}),(0,y.jsx)(g.Z.Item,{name:"originalPassword",label:S("webui.menu.OriginalPassword"),rules:[function(e){var n=e.getFieldValue;return{validator:function(e,t){return t||!n("newPassword")&&!n("newPasswordConfirm")?Promise.resolve():Promise.reject(new Error(S("webui.menu.InputOriginalPassword")))}}}],dependencies:["newPassword","newPasswordConfirm"],children:(0,y.jsx)(Z.Z.Password,{})}),(0,y.jsx)(g.Z.Item,{name:"newPassword",label:S("webui.menu.NewPassword"),rules:[{pattern:d.passwordPattern,message:S("webui.menu.InvalidPasswordMessage")}],children:(0,y.jsx)(Z.Z.Password,{})}),(0,y.jsx)(g.Z.Item,{name:"newPasswordConfirm",label:S("webui.menu.NewPasswordAgain"),dependencies:["newPassword"],rules:[function(e){var n=e.getFieldValue;return{validator:function(e,t){return t&&n("newPassword")!==t?Promise.reject(new Error(S("webui.menu.NewPasswordMismatch"))):Promise.resolve()}}}],children:(0,y.jsx)(Z.Z.Password,{})}),!!F&&(0,y.jsx)(g.Z.Item,{name:"totp_activated",label:S("webui.menu.TotpActivated"),valuePropName:"checked",children:(0,y.jsx)(b.Z,{loading:H.isLoading,onChange:function(e){e?B():null!==Q&&void 0!==Q&&Q.totp_activated&&(R.setFieldValue("totp_activated",!0),V.confirm({title:S("totp.TurnOffTotp"),icon:(0,y.jsx)(w.Z,{}),content:S("totp.ConfirmTotpRemovalBody"),okText:S("button.Yes"),okType:"danger",cancelText:S("button.No"),onOk:function(){H.mutate(void 0,{onSuccess:function(){v.ZP.success(S("totp.RemoveTotpSetupCompleted")),t(),R.setFieldValue("totp_activated",!1)},onError:function(e){v.ZP.error(e.message)}})},onCancel:function(){R.setFieldValue("totp_activated",!0)}}))}})})]})}),!!F&&(0,y.jsx)(c.Z,{userFrgmt:Q,open:D,onRequestClose:function(e){e?t():R.setFieldValue("totp_activated",!1),B()}})]})),q,z]})}},78067:function(e,n,t){t.r(n);var o={argumentDefinitions:[{kind:"RootArgument",name:"isNotSupportTotp"}],kind:"Fragment",metadata:null,name:"TOTPActivateModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totp_activated",storageKey:null}],type:"User",abstractKey:null,hash:"f5da6b3094f7d70bef9373d9c907955c"};n.default=o},69080:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(87462),r=t(4519),a={icon:function(e,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z",fill:e}},{tag:"path",attrs:{d:"M172.2 828.1h679.6L512 239.9 172.2 828.1zM560 720a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm-16-304v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z",fill:n}},{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z",fill:e}}]}},name:"warning",theme:"twotone"},s=t(9491),i=function(e,n){return r.createElement(s.Z,(0,o.Z)({},e,{ref:n,icon:a}))};var u=r.forwardRef(i)}}]);
//# sourceMappingURL=525.b870e16b.chunk.js.map