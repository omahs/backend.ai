"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[925],{21925:function(e,a,n){n.r(a),n.d(a,{StorageStatusPanelFallback:function(){return q},default:function(){return K}});var t,i,r,o=n(29439),l=n(43255),s=n(40406),c=n(99277),d=n(46228),u=n(23169),p=n(44036),m=n(53562),g=n(70389),_=n(4519),y=n(81748),f=n(16980),h=n(2556),v=function(e){var a,i,r,o,s,d=e.usageProgressFrgmt,u=(0,y.$G)().t,_=p.Z.useToken().token,v=(0,f.useFragment)(void 0!==t?t:t=n(407),d),k=parseFloat(null===v||void 0===v||null===(a=v.details)||void 0===a?void 0:a.usage_bytes)||0,b=parseFloat(null===v||void 0===v||null===(i=v.details)||void 0===i?void 0:i.hard_limit_bytes)||0,x=b>0?null===(r=k/b*100)||void 0===r?void 0:r.toFixed(2):0;return(0,h.jsxs)(c.Z,{direction:"column",children:[(0,h.jsx)(m.Z,{size:[180,15],percent:x,strokeColor:(0,l.lA)(x),status:x>=100?"exception":"normal"}),(0,h.jsxs)(c.Z,{direction:"row",gap:_.marginXXS,style:{fontSize:12},children:[(0,h.jsxs)(g.Z.Text,{type:"secondary",style:{fontSize:12},children:[u("data.Used"),":"]}),(0,l.Uz)(null===v||void 0===v||null===(o=v.details)||void 0===o?void 0:o.usage_bytes)," GB",(0,h.jsx)(g.Z.Text,{type:"secondary",style:{fontSize:12},children:" / "}),(0,h.jsxs)(g.Z.Text,{type:"secondary",style:{fontSize:12},children:[u("data.Limit"),":"]}),(0,l.Uz)(null===v||void 0===v||null===(s=v.details)||void 0===s?void 0:s.hard_limit_bytes)," GB"]})]})},k=n(42335),b=n(86199),x=n(93448),S=n(83799),j=n(227),w=n(38812),Z=n(54473),F=n(97589),P=n(87112),q=function(){var e=(0,y.$G)().t;return(0,h.jsx)(b.Z,{size:"small",title:e("data.StorageStatus"),children:(0,h.jsx)(F.Z,{active:!0})})},K=function(e){var a,t,F=e.fetchKey,q=(0,y.$G)().t,K=p.Z.useToken().token,z=(0,s.Dj)(),Q=(0,s.qh)(),T=(0,_.useState)(),L=(0,o.Z)(T,2),$=L[0],V=L[1],I=(0,_.useDeferredValue)($),N=(0,_.useDeferredValue)(F),O=(0,P.useQuery)(["vfolders",{deferredFetchKey:N}],(function(){return z.vfolder.list(null===Q||void 0===Q?void 0:Q.id)})).data,C=null===O||void 0===O?void 0:O.filter((function(e){return e.is_owner&&"user"===e.ownership_type})).length,D=null===O||void 0===O?void 0:O.filter((function(e){return"group"===e.ownership_type})).length,E=null===O||void 0===O?void 0:O.filter((function(e){return!e.is_owner&&"user"===e.ownership_type})).length,A=(0,f.useLazyLoadQuery)(void 0!==i?i:i=n(14933),{domain_name:(0,s.tQ)(),email:null===z||void 0===z?void 0:z.email,access_key:null===z||void 0===z?void 0:z._config.accessKey}),B=A.keypair,M=A.user,R=(0,f.useLazyLoadQuery)(void 0!==r?r:r=n(85912),{user_RP_name:null===M||void 0===M?void 0:M.resource_policy,keypair_resource_policy_name:null===B||void 0===B?void 0:B.resource_policy,project_quota_scope_id:(0,l.VQ)("project",null===Q||void 0===Q?void 0:Q.id),user_quota_scope_id:(0,l.VQ)("user",(null===M||void 0===M?void 0:M.id)||""),storage_host_name:(null===I||void 0===I?void 0:I.id)||"",skipQuotaScope:void 0===(null===Q||void 0===Q?void 0:Q.id)||void 0===(null===M||void 0===M?void 0:M.id)||!(null!==I&&void 0!==I&&I.id)}),U=R.user_resource_policy,G=R.keypair_resource_policy,W=R.project_quota_scope,H=R.user_quota_scope,X=(null===U||void 0===U?void 0:U.max_vfolder_count)||(null===G||void 0===G?void 0:G.max_vfolder_count)||0,Y=X>0?null===(a=C/X*100)||void 0===a?void 0:a.toFixed(2):0;return(0,h.jsx)(b.Z,{size:"small",title:q("data.StorageStatus"),children:(0,h.jsxs)(x.Z,{bordered:!0,column:{xxl:4,xl:4,lg:2,md:1,sm:1,xs:1},size:"small",children:[(0,h.jsxs)(x.Z.Item,{label:q("data.NumberOfFolders"),children:[(0,h.jsx)(m.Z,{size:[200,15],percent:Y,strokeColor:(0,l.lA)(Y),style:{width:"95%"},status:Y>=100?"exception":"normal"}),(0,h.jsxs)(c.Z,{direction:"row",gap:K.marginXXS,wrap:"wrap",children:[(0,h.jsxs)(g.Z.Text,{type:"secondary",children:[q("data.Created"),":"]}),C,(0,h.jsx)(g.Z.Text,{type:"secondary",children:" / "}),(0,h.jsxs)(g.Z.Text,{type:"secondary",children:[q("data.Limit"),":"]}),0===X?"-":X]}),(0,h.jsx)(S.Z,{style:{margin:"12px auto"}}),(0,h.jsxs)(c.Z,{direction:"row",wrap:"wrap",justify:"between",children:[(0,h.jsxs)(c.Z,{gap:K.marginXXS,children:[(0,h.jsxs)(g.Z.Text,{type:"secondary",children:[q("data.ProjectFolder"),":"]}),D]}),(0,h.jsxs)(c.Z,{gap:K.marginXXS,style:{marginRight:30},children:[(0,h.jsxs)(g.Z.Text,{type:"secondary",children:[q("data.Invited"),":"]}),E]})]})]}),(0,h.jsxs)(x.Z.Item,{label:(0,h.jsxs)("div",{children:[q("data.QuotaPerStorageVolume"),(0,h.jsx)(j.Z,{title:q("data.HostDetails"),children:(0,h.jsx)(w.ZP,{type:"link",icon:(0,h.jsx)(k.Z,{})})})]}),children:[(0,h.jsxs)(c.Z,{wrap:"wrap",justify:"between",direction:"row",style:{minWidth:"25vw"},children:[(0,h.jsx)(g.Z.Text,{type:"secondary",children:q("data.Host")}),(0,h.jsx)(u.Z,{value:null===$||void 0===$?void 0:$.id,onChange:V,autoSelectType:"usage",showUsageStatus:!0,showSearch:!0,allowClear:!0})]}),$!==I?(0,h.jsx)(d.Z,{style:{minHeight:120}}):null!==$&&void 0!==$&&null!==(t=$.capabilities)&&void 0!==t&&t.includes("quota")?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(c.Z,{style:{margin:"15px auto"},justify:"between",wrap:"wrap",children:[(0,h.jsxs)(g.Z.Text,{type:"secondary",style:{wordBreak:"keep-all",wordWrap:"break-word"},children:[q("data.Project"),(0,h.jsx)("br",{}),"(",null===Q||void 0===Q?void 0:Q.name,")"]}),(0,h.jsx)(v,{usageProgressFrgmt:W||null})]}),(0,h.jsxs)(c.Z,{justify:"between",wrap:"wrap",children:[(0,h.jsxs)(g.Z.Text,{type:"secondary",style:{wordBreak:"keep-all",wordWrap:"break-word"},children:[q("data.User"),(0,h.jsx)("br",{}),"(",null===z||void 0===z?void 0:z.email,")"]}),(0,h.jsx)(v,{usageProgressFrgmt:H||null})]})]}):(0,h.jsx)(Z.Z,{image:Z.Z.PRESENTED_IMAGE_SIMPLE,description:q("storageHost.QuotaDoesNotSupported"),style:{margin:"25px auto"}})]})]})})}},14933:function(e,a,n){n.r(a);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"access_key"},a={defaultValue:null,kind:"LocalArgument",name:"domain_name"},n={defaultValue:null,kind:"LocalArgument",name:"email"},t={kind:"Variable",name:"domain_name",variableName:"domain_name"},i=[{kind:"Variable",name:"access_key",variableName:"access_key"},t],r={alias:null,args:null,kind:"ScalarField",name:"resource_policy",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:[t,{kind:"Variable",name:"email",variableName:"email"}],concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[o,r],storageKey:null};return{fragment:{argumentDefinitions:[e,a,n],kind:"Fragment",metadata:null,name:"StorageStatusPanelKeypairQuery",selections:[{alias:null,args:i,concreteType:"KeyPair",kind:"LinkedField",name:"keypair",plural:!1,selections:[r],storageKey:null},l],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,n,e],kind:"Operation",name:"StorageStatusPanelKeypairQuery",selections:[{alias:null,args:i,concreteType:"KeyPair",kind:"LinkedField",name:"keypair",plural:!1,selections:[r,o],storageKey:null},l]},params:{cacheID:"654739e793d0b77566bfaa8af912772f",id:null,metadata:{},name:"StorageStatusPanelKeypairQuery",operationKind:"query",text:'query StorageStatusPanelKeypairQuery(\n  $domain_name: String\n  $email: String\n  $access_key: String\n) {\n  keypair(domain_name: $domain_name, access_key: $access_key) {\n    resource_policy\n    id\n  }\n  user(domain_name: $domain_name, email: $email) {\n    id\n    resource_policy @since(version: "23.03.7")\n  }\n}\n'}}}();t.hash="b7ec5882eb691eba39dda11c813c73b7",a.default=t},85912:function(e,a,n){n.r(a);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"keypair_resource_policy_name"},a={defaultValue:null,kind:"LocalArgument",name:"project_quota_scope_id"},n={defaultValue:null,kind:"LocalArgument",name:"skipQuotaScope"},t={defaultValue:null,kind:"LocalArgument",name:"storage_host_name"},i={defaultValue:null,kind:"LocalArgument",name:"user_RP_name"},r={defaultValue:null,kind:"LocalArgument",name:"user_quota_scope_id"},o=[{kind:"Variable",name:"name",variableName:"user_RP_name"}],l={alias:null,args:null,kind:"ScalarField",name:"max_vfolder_count",storageKey:null},s=[l],c={alias:null,args:[{kind:"Variable",name:"name",variableName:"keypair_resource_policy_name"}],concreteType:"KeyPairResourcePolicy",kind:"LinkedField",name:"keypair_resource_policy",plural:!1,selections:s,storageKey:null},d={kind:"Variable",name:"storage_host_name",variableName:"storage_host_name"},u=[{kind:"Variable",name:"quota_scope_id",variableName:"project_quota_scope_id"},d],p=[{args:null,kind:"FragmentSpread",name:"UsageProgressFragment_usageFrgmt"}],m=[{kind:"Variable",name:"quota_scope_id",variableName:"user_quota_scope_id"},d],g={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},_=[{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"usage_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null},g];return{fragment:{argumentDefinitions:[e,a,n,t,i,r],kind:"Fragment",metadata:null,name:"StorageStatusPanelQuery",selections:[{alias:null,args:o,concreteType:"UserResourcePolicy",kind:"LinkedField",name:"user_resource_policy",plural:!1,selections:s,storageKey:null},c,{condition:"skipQuotaScope",kind:"Condition",passingValue:!1,selections:[{alias:"project_quota_scope",args:u,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:p,storageKey:null},{alias:"user_quota_scope",args:m,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:p,storageKey:null}]}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[i,e,a,r,t,n],kind:"Operation",name:"StorageStatusPanelQuery",selections:[{alias:null,args:o,concreteType:"UserResourcePolicy",kind:"LinkedField",name:"user_resource_policy",plural:!1,selections:[l,g],storageKey:null},c,{condition:"skipQuotaScope",kind:"Condition",passingValue:!1,selections:[{alias:"project_quota_scope",args:u,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:_,storageKey:null},{alias:"user_quota_scope",args:m,concreteType:"QuotaScope",kind:"LinkedField",name:"quota_scope",plural:!1,selections:_,storageKey:null}]}]},params:{cacheID:"7e0f1fc8185ae9a5d0552b47c8e7d74c",id:null,metadata:{},name:"StorageStatusPanelQuery",operationKind:"query",text:'query StorageStatusPanelQuery(\n  $user_RP_name: String\n  $keypair_resource_policy_name: String\n  $project_quota_scope_id: String!\n  $user_quota_scope_id: String!\n  $storage_host_name: String!\n  $skipQuotaScope: Boolean!\n) {\n  user_resource_policy(name: $user_RP_name) @since(version: "24.03.1") {\n    max_vfolder_count\n    id\n  }\n  keypair_resource_policy(name: $keypair_resource_policy_name) @deprecatedSince(version: "24.03.1") {\n    max_vfolder_count\n  }\n  project_quota_scope: quota_scope(quota_scope_id: $project_quota_scope_id, storage_host_name: $storage_host_name) @skip(if: $skipQuotaScope) {\n    ...UsageProgressFragment_usageFrgmt\n    id\n  }\n  user_quota_scope: quota_scope(quota_scope_id: $user_quota_scope_id, storage_host_name: $storage_host_name) @skip(if: $skipQuotaScope) {\n    ...UsageProgressFragment_usageFrgmt\n    id\n  }\n}\n\nfragment UsageProgressFragment_usageFrgmt on QuotaScope {\n  details {\n    usage_bytes\n    hard_limit_bytes\n  }\n}\n'}}}();t.hash="4101bc673312fcc5ceecec0baf4eba9c",a.default=t},407:function(e,a,n){n.r(a);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"UsageProgressFragment_usageFrgmt",selections:[{alias:null,args:null,concreteType:"QuotaDetails",kind:"LinkedField",name:"details",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"usage_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hard_limit_bytes",storageKey:null}],storageKey:null}],type:"QuotaScope",abstractKey:null,hash:"1ba87b250f2a0161ecee7ba88d54c85c"};a.default=t},83799:function(e,a,n){n.d(a,{Z:function(){return y}});var t=n(4942),i=n(29439),r=n(4519),o=n(16539),l=n.n(o),s=n(48698),c=n(66777),d=n(21480),u=n(81492),p=n(41157),m=function(e){var a,n=e.componentCls,i=e.sizePaddingEdgeHorizontal,r=e.colorSplit,o=e.lineWidth,l=e.textPaddingInline,s=e.orientationMargin,u=e.verticalMarginInline;return(0,t.Z)({},n,Object.assign(Object.assign({},(0,d.Wf)(e)),(a={borderBlockStart:"".concat((0,c.bf)(o)," solid ").concat(r),"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:u,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:"".concat((0,c.bf)(o)," solid ").concat(r)},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:"".concat((0,c.bf)(e.dividerHorizontalGutterMargin)," 0")}},(0,t.Z)(a,"&-horizontal".concat(n,"-with-text"),{display:"flex",alignItems:"center",margin:"".concat((0,c.bf)(e.dividerHorizontalWithTextGutterMargin)," 0"),color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:"0 ".concat(r),"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:"".concat((0,c.bf)(o)," solid transparent"),borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}}),(0,t.Z)(a,"&-horizontal".concat(n,"-with-text-left"),{"&::before":{width:"calc(".concat(s," * 100%)")},"&::after":{width:"calc(100% - ".concat(s," * 100%)")}}),(0,t.Z)(a,"&-horizontal".concat(n,"-with-text-right"),{"&::before":{width:"calc(100% - ".concat(s," * 100%)")},"&::after":{width:"calc(".concat(s," * 100%)")}}),(0,t.Z)(a,"".concat(n,"-inner-text"),{display:"inline-block",paddingBlock:0,paddingInline:l}),(0,t.Z)(a,"&-dashed",{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:"".concat((0,c.bf)(o)," 0 0")}),(0,t.Z)(a,"&-horizontal".concat(n,"-with-text").concat(n,"-dashed"),{"&::before, &::after":{borderStyle:"dashed none none"}}),(0,t.Z)(a,"&-vertical".concat(n,"-dashed"),{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0}),(0,t.Z)(a,"&-plain".concat(n,"-with-text"),{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize}),(0,t.Z)(a,"&-horizontal".concat(n,"-with-text-left").concat(n,"-no-default-orientation-margin-left"),(0,t.Z)({"&::before":{width:0},"&::after":{width:"100%"}},"".concat(n,"-inner-text"),{paddingInlineStart:i})),(0,t.Z)(a,"&-horizontal".concat(n,"-with-text-right").concat(n,"-no-default-orientation-margin-right"),(0,t.Z)({"&::before":{width:"100%"},"&::after":{width:0}},"".concat(n,"-inner-text"),{paddingInlineEnd:i})),a)))},g=(0,u.I$)("Divider",(function(e){var a=(0,p.TS)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[m(a)]}),(function(e){return{textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}}),{unitless:{orientationMargin:!0}}),_=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n};var y=function(e){var a,n=r.useContext(s.E_),o=n.getPrefixCls,c=n.direction,d=n.divider,u=e.prefixCls,p=e.type,m=void 0===p?"horizontal":p,y=e.orientation,f=void 0===y?"center":y,h=e.orientationMargin,v=e.className,k=e.rootClassName,b=e.children,x=e.dashed,S=e.plain,j=e.style,w=_(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),Z=o("divider",u),F=g(Z),P=(0,i.Z)(F,3),q=P[0],K=P[1],z=P[2],Q=f.length>0?"-".concat(f):f,T=!!b,L="left"===f&&null!=h,$="right"===f&&null!=h,V=l()(Z,null===d||void 0===d?void 0:d.className,K,z,"".concat(Z,"-").concat(m),(a={},(0,t.Z)(a,"".concat(Z,"-with-text"),T),(0,t.Z)(a,"".concat(Z,"-with-text").concat(Q),T),(0,t.Z)(a,"".concat(Z,"-dashed"),!!x),(0,t.Z)(a,"".concat(Z,"-plain"),!!S),(0,t.Z)(a,"".concat(Z,"-rtl"),"rtl"===c),(0,t.Z)(a,"".concat(Z,"-no-default-orientation-margin-left"),L),(0,t.Z)(a,"".concat(Z,"-no-default-orientation-margin-right"),$),a),v,k),I=r.useMemo((function(){return"number"===typeof h?h:/^\d+$/.test(h)?Number(h):h}),[h]),N=Object.assign(Object.assign({},L&&{marginLeft:I}),$&&{marginRight:I});return q(r.createElement("div",Object.assign({className:V,style:Object.assign(Object.assign({},null===d||void 0===d?void 0:d.style),j)},w,{role:"separator"}),b&&"vertical"!==m&&r.createElement("span",{className:"".concat(Z,"-inner-text"),style:N},b)))}}}]);
//# sourceMappingURL=925.0155f653.chunk.js.map