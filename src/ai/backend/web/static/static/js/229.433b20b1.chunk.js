"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[229],{27229:function(e,n,t){t.r(n);var u=t(29439),r=t(87760),o=t(1839),i=t(50164),s=t(61502),a=t(99277),c=t(50708),l=t(67848),d=t(64846),f=t(33405),m=t(30485),v=t(89786),p=t(80220),g=t(43514),b=t(27214),h=t(46734),Z=t(3501),k=t(28499),_=t(58834),w=t(4519),j=t(81748),y=t(2556);n.default=function(){var e=(0,j.$G)().t,n=(0,s.useWebComponentInfo)().dispatchEvent,t=(0,r.Dj)(),E=(0,o.j)(),x=(0,u.Z)(E,1)[0],C=(0,w.useState)(!1),S=(0,u.Z)(C,2),A=S[0],F=S[1],L=h.ZP.useBreakpoint(),T=(0,b.Z)(A,{wait:100,leading:!0,trailing:!1}),P=(0,i.h)("getUserRole",(function(){return t.user.get(x.email,["role"])}),{suspense:!1}).data,z=null===P||void 0===P?void 0:P.user.role,D=[{label:x.username,key:"userFullName",icon:(0,y.jsx)(c.Z,{}),disabled:!0,style:{color:"#1f1f1f",cursor:"default"}},{label:x.email,key:"userEmail",icon:(0,y.jsx)(l.Z,{}),disabled:!0,style:{cursor:"default"}},{type:"divider"},{label:z,key:"userRole",icon:(0,y.jsx)(d.Z,{}),disabled:!0,style:{cursor:"default"}},{type:"divider"},{label:e("webui.menu.AboutBackendAI"),key:"description",icon:(0,y.jsx)(f.Z,{}),onClick:function(){var e=new CustomEvent("backend-ai-show-splash");document.dispatchEvent(e)}},{label:e("webui.menu.MyAccount"),key:"userProfileSetting",icon:(0,y.jsx)(m.Z,{}),onClick:function(){n("moveTo",{path:"#userprofile"})}},{label:e("webui.menu.Preferences"),key:"preferences",icon:(0,y.jsx)(v.Z,{}),onClick:function(){n("moveTo",{path:"/usersettings",params:{tab:"general"}})}},{label:e("webui.menu.LogsErrors"),key:"logs",icon:(0,y.jsx)(p.Z,{}),onClick:function(){n("moveTo",{path:"/usersettings",params:{tab:"logs"}})}},{label:e("webui.menu.LogOut"),key:"logout",icon:(0,y.jsx)(g.Z,{}),onClick:function(){var e=new CustomEvent("backend-ai-logout");document.dispatchEvent(e)}}];return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(Z.Z,{menu:{items:D},trigger:["click"],open:T,onOpenChange:function(e){return F(e)},children:(0,y.jsxs)(a.Z,{direction:"row",gap:"sm",style:{cursor:"pointer"},children:[L.md&&(0,y.jsx)(k.Z.Text,{strong:!0,children:x.username}),(0,y.jsx)(_.C,{icon:(0,y.jsx)(c.Z,{})})]})})})}},1839:function(e,n,t){t.d(n,{T:function(){return d},j:function(){return f}});var u=t(1413),r=t(29439),o=t(87760),i=t(43255),s=t(50164),a=t(32048),c=t.n(a),l=t(4519),d=function(){var e=(0,o.Kr)("first"),n=(0,r.Z)(e,2),t=n[0],u=n[1],i=(0,o.Dj)();return[(0,s.h)({queryKey:["useResourceSlots",t],queryFn:function(){return i.get_resource_slots()},staleTime:0}).data,{refresh:function(){return u()}}]},f=function(){var e=(0,o.Dj)(),n=(0,l.useState)({full_name:e.full_name,email:e.email}),t=(0,r.Z)(n,2),a=t[0],d=t[1];(0,l.useEffect)((function(){var n=function(n){if(e.supports("change-user-name")){var t=n.detail;d((function(e){return(0,u.Z)((0,u.Z)({},e),{},{full_name:t})}))}};return document.addEventListener("current-user-info-changed",n),function(){document.removeEventListener("current-user-info-changed",n)}}),[e]);var f=(0,s.Y)({mutationFn:function(n){return e.update_full_name(n.email,n.full_name)}}),m=(0,s.Y)({mutationFn:function(n){return e.update_password(n.old_password,n.new_password,n.new_password2)}});return[(0,u.Z)((0,u.Z)({},a),{},{username:function(){var n=c().trim(a.full_name).length>0?a.full_name:a.email;if(e._config.maskUserInfo){var t=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n)?n.split("@")[0].length-2:n.length-2;n=(0,i.Cd)(n,"*",2,t)}return n}(),isPendingMutation:f.isLoading||m.isLoading}),{updateFullName:function(n,t){f.mutate({full_name:n,email:e.email},{onSuccess:function(){(null===t||void 0===t?void 0:t.onSuccess)&&t.onSuccess(n),document.dispatchEvent(new CustomEvent("current-user-info-changed",{detail:n})),d((function(e){return(0,u.Z)((0,u.Z)({},e),{},{full_name:n})}))},onError:function(e){(null===t||void 0===t?void 0:t.onError)&&t.onError(e)}})},updatePassword:function(e,n){m.mutate(e,{onSuccess:function(){(null===n||void 0===n?void 0:n.onSuccess)&&n.onSuccess(void 0)},onError:function(e){(null===n||void 0===n?void 0:n.onError)&&n.onError(e)}})}}]}},50164:function(e,n,t){t.d(n,{Y:function(){return o},h:function(){return r}});var u=t(87112),r=u.useQuery,o=u.useMutation}}]);
//# sourceMappingURL=229.433b20b1.chunk.js.map