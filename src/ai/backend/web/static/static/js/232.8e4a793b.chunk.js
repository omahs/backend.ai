"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[232,959],{5959:function(e,n,l){l.r(n);var r=l(70389),a=(l(4519),l(2556));n.default=function(e){var n=e.text,l=e.children;return(0,a.jsx)(r.Z.Text,{copyable:!0,code:!0,children:n||l})}},90146:function(e,n,l){l.r(n);var r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ServingRouteErrorModalFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},{alias:null,args:null,concreteType:"InferenceSessionErrorInfo",kind:"LinkedField",name:"errors",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"repr",storageKey:null}],storageKey:null}],type:"InferenceSessionError",abstractKey:null,hash:"a1003e0f75387e665f4407909eea5ff6"};n.default=r},23232:function(e,n,l){l.r(n),l.d(n,{default:function(){return ae}});var r,a,i=l(29439),t=l(5959),o=l(88630),s=l(96451),d=l(1413),c=l(44925),u=l(43255),m=l(40406),g=l(50164),p=l(77758),f=l(99277),v=l(88464),y=l(57054),k=l(52176),S=l(91063),b=l(99517),x=l.n(b),h=l(4519),_=l(81748),j=l(2556),Z=["onRequestClose","onCancel","endpoint_id"],F=function(e){var n=e.onRequestClose,l=(e.onCancel,e.endpoint_id),r=(0,c.Z)(e,Z),a=(0,_.$G)().t,i=(0,m.Dj)(),t=(0,h.useRef)(null),o=(0,g.Y)({mutationFn:function(e){var n={valid_until:e.valid_until};return(0,u.Lc)({method:"POST",url:"/services/".concat(l,"/token"),body:n,client:i})}});return(0,j.jsx)(p.Z,(0,d.Z)((0,d.Z)({},r),{},{destroyOnClose:!0,onOk:function(e){var l;null===(l=t.current)||void 0===l||l.validateFields().then((function(e){var l=e.datetime.unix();o.mutate({valid_until:l},{onSuccess:function(){v.ZP.success(a("modelService.TokenGenerated")),n(!0)},onError:function(e){var n;null!==e&&void 0!==e&&null!==(n=e.message)&&void 0!==n&&n.includes("valid_until is older than now")?v.ZP.error(a("modelService.TokenExpiredDateError")):(v.ZP.error(a("modelService.TokenGenerationFailed")),console.log(e))}})}))},onCancel:function(){n()},okText:a("modelService.Generate"),confirmLoading:o.isLoading,centered:!0,title:a("modelService.GenerateNewToken"),children:(0,j.jsx)(y.Z,{ref:t,preserve:!1,labelCol:{span:10},initialValues:{datetime:x()().add(24,"hour")},validateTrigger:["onChange","onBlur"],style:{maxWidth:500},children:(0,j.jsxs)(f.Z,{direction:"column",gap:"sm",align:"stretch",children:[(0,j.jsx)(k.Z,{type:"info",showIcon:!0,message:a("modelService.TokenExpiredDateHelp")}),(0,j.jsx)(f.Z,{direction:"row",align:"stretch",justify:"around",children:(0,j.jsx)(y.Z.Item,{name:"datetime",label:a("modelService.ExpiredDate"),rules:[{type:"object",required:!0,message:a("modelService.PleaseSelectTime")},function(){return{validator:function(e,n){return n.isAfter(x()())?Promise.resolve():Promise.reject(new Error(a("modelService.TokenExpiredDateError")))}}}],children:(0,j.jsx)(S.Z,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",style:{width:200}})})})]})})}))},O=l(14001),E=l(96732),C=l(38252),T=l(38812),K=l(93448),I=l(16980),w=["onRequestClose","onCancel","inferenceSessionErrorFrgmt"],L=function(e){var n=e.onRequestClose,a=(e.onCancel,e.inferenceSessionErrorFrgmt),i=(0,c.Z)(e,w),o=(0,_.$G)().t,s=(0,I.useFragment)(void 0!==r?r:r=l(90146),a);return(0,j.jsx)(p.Z,(0,d.Z)((0,d.Z)({centered:!0,title:o("modelService.ServingRouteErrorModalTitle"),onCancel:function(){n()},footer:[(0,j.jsx)(T.ZP,{onClick:function(){n()},children:o("button.Close")})]},i),{},{children:(0,j.jsxs)(K.Z,{bordered:!0,column:{xxl:1,xl:1,lg:1,md:1,sm:1,xs:1},labelStyle:{minWidth:100},style:{marginTop:20},children:[(0,j.jsx)(K.Z.Item,{label:o("modelService.SessionId"),children:(0,j.jsx)(t.default,{children:null===s||void 0===s?void 0:s.session_id})}),(0,j.jsx)(K.Z.Item,{label:o("dialog.error.Error"),children:null===s||void 0===s?void 0:s.errors[0].repr})]})}))},R=l(14644),P=l(70389),N=function(e){var n=e.uuid,l=e.clickable,r=(0,m.qh)(),a=(0,u.y3)(),i=(0,m.uB)(),t=(0,g.h)({queryKey:["VFolderSelectQuery"],queryFn:function(){return a({method:"GET",url:"/folders?group_id=".concat(r.id)})},staleTime:1e3,suspense:!0}).data,o=null===t||void 0===t?void 0:t.find((function(e){return e.id===n.replaceAll("-","")}));return o&&(l?(0,j.jsxs)(P.Z.Link,{onClick:function(){i({pathname:"/data",search:"?folder=".concat(o.name)})},children:[(0,j.jsx)(R.Z,{})," ",o.name]}):(0,j.jsxs)("div",{children:[(0,j.jsx)(R.Z,{})," ",o.name]}))},D=l(43971),z=l(72842),M=l(43596),q=l(83861),H=l(31662),A=l(32064),G=l(20558),B=l(56713),V=l(44036),X=l(60284),$=l(227),U=l(86199),Y=l(82548),Q=l(39883),W=l(3597),J=l(26524),ee=l(32048),ne=l.n(ee),le=l(12674),re=function(e,n){var l=x()(e.created_at),r=x()(n.created_at);return l.diff(r)},ae=function(){var e=(0,_.$G)().t,n=V.Z.useToken().token,r=(0,m.Dj)(),d=(0,le.s0)(),c=(0,le.UO)().serviceId,p=(0,m.Kr)("initial-fetch"),v=(0,i.Z)(p,2),y=v[0],k=v[1],S=(0,h.useTransition)(),b=(0,i.Z)(S,2),Z=b[0],w=b[1],R=(0,h.useTransition)(),ee=(0,i.Z)(R,2),ae=ee[0],ie=ee[1],te=(0,h.useState)(null),oe=(0,i.Z)(te,2),se=oe[0],de=oe[1],ce=(0,h.useState)(!1),ue=(0,i.Z)(ce,2),me=ue[0],ge=ue[1],pe=(0,h.useState)(!1),fe=(0,i.Z)(pe,2),ve=fe[0],ye=fe[1],ke=(0,h.useState)({current:1,pageSize:100}),Se=(0,i.Z)(ke,1)[0],be=(0,I.useLazyLoadQuery)(void 0!==a?a:a=l(4464),{tokenListOffset:(Se.current-1)*Se.pageSize,tokenListLimit:Se.pageSize,endpointId:c||""},{fetchPolicy:"initial-fetch"===y?"store-and-network":"network-only",fetchKey:y}),xe=be.endpoint,he=be.endpoint_token_list,_e=(0,g.Y)((function(){if(xe)return(0,u.Lc)({method:"POST",url:"/services/".concat(xe.endpoint_id,"/errors/clear"),client:r})})),je=function(){var e="default";switch((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toUpperCase()){case"HEALTHY":e="success";break;case"PROVISIONING":e="processing";break;case"UNHEALTHY":e="warning"}return e},Ze=JSON.parse((null===xe||void 0===xe?void 0:xe.resource_opts)||"{}");return(0,j.jsxs)(f.Z,{direction:"column",align:"stretch",gap:"sm",children:[(0,j.jsx)(X.Z,{items:[{title:e("modelService.Services"),onClick:function(e){e.preventDefault(),d("/serving")},href:"/serving"},{title:e("modelService.RoutingInfo")}]}),(0,j.jsxs)(f.Z,{direction:"row",justify:"between",children:[(0,j.jsx)(P.Z.Title,{level:3,style:{margin:0},children:(null===xe||void 0===xe?void 0:xe.name)||""}),(0,j.jsxs)(f.Z,{gap:"xxs",children:[((null===xe||void 0===xe?void 0:xe.retries)||0)>0?(0,j.jsx)($.Z,{title:e("modelService.ClearErrors"),children:(0,j.jsx)(T.ZP,{loading:ae,icon:(0,j.jsx)(D.Z,{}),onClick:function(){ie((function(){_e.mutate(void 0,{onSuccess:function(){return w((function(){k()}))}})}))}})}):(0,j.jsx)(j.Fragment,{}),(0,j.jsx)(T.ZP,{loading:Z,icon:(0,j.jsx)(z.Z,{}),onClick:function(){w((function(){k()}))},children:e("button.Refresh")})]})]}),(0,j.jsx)(U.Z,{title:e("modelService.ServiceInfo"),extra:(0,j.jsx)(T.ZP,{type:"primary",icon:(0,j.jsx)(M.Z,{}),disabled:((null===xe||void 0===xe?void 0:xe.desired_session_count)||0)<0||"DESTROYING"===(null===xe||void 0===xe?void 0:xe.status),onClick:function(){ge(!0)},children:e("button.Edit")}),children:(0,j.jsx)(K.Z,{bordered:!0,column:{xxl:3,xl:3,lg:2,md:1,sm:1,xs:1},style:{backgroundColor:n.colorBgBase},items:[{label:e("modelService.EndpointName"),children:(0,j.jsx)(P.Z.Text,{copyable:!0,children:null===xe||void 0===xe?void 0:xe.name})},{label:e("modelService.Status"),children:(0,j.jsx)(s.Z,{endpointFrgmt:xe})},{label:e("modelService.EndpointId"),children:null===xe||void 0===xe?void 0:xe.endpoint_id},{label:e("modelService.SessionOwner"),children:(0,j.jsx)(o.Z,{endpointFrgmt:xe})},{label:e("modelService.DesiredSessionCount"),children:null===xe||void 0===xe?void 0:xe.desired_session_count},{label:e("modelService.ServiceEndpoint"),children:null!==xe&&void 0!==xe&&xe.url?(0,j.jsx)(P.Z.Text,{copyable:!0,children:null===xe||void 0===xe?void 0:xe.url}):(0,j.jsx)(P.Z.Text,{type:"secondary",children:e("modelService.NoServiceEndpoint")})},{label:e("modelService.OpenToPublic"),children:null!==xe&&void 0!==xe&&xe.open_to_public?(0,j.jsx)(q.Z,{}):(0,j.jsx)(H.Z,{})},{label:e("modelService.resources"),children:(0,j.jsxs)(f.Z,{direction:"row",wrap:"wrap",gap:"md",children:[(0,j.jsx)($.Z,{title:e("session.ResourceGroup"),children:(0,j.jsx)(Y.Z,{children:null===xe||void 0===xe?void 0:xe.resource_group})}),ne().map(JSON.parse((null===xe||void 0===xe?void 0:xe.resource_slots)||"{}"),(function(e,n){return(0,j.jsx)(E.ZP,{type:n,value:e,opts:Ze},n)}))]}),span:{xl:2}},{label:e("session.launcher.ModelStorage"),children:(0,j.jsx)(h.Suspense,{fallback:(0,j.jsx)(Q.Z,{indicator:(0,j.jsx)(A.Z,{spin:!0})}),children:(null===xe||void 0===xe?void 0:xe.model)&&(0,j.jsx)(N,{uuid:null===xe||void 0===xe?void 0:xe.model,clickable:!1})})},{label:e("modelService.Image"),children:(null===xe||void 0===xe?void 0:xe.image)&&(0,j.jsxs)(f.Z,{direction:"row",gap:"xs",children:[(0,j.jsx)(O.Z,{image:xe.image}),(0,j.jsx)(t.default,{children:xe.image})]}),span:{xl:2}}]})}),(0,j.jsx)(U.Z,{title:e("modelService.GeneratedTokens"),extra:(0,j.jsx)(T.ZP,{type:"primary",icon:(0,j.jsx)(G.Z,{}),disabled:"DESTROYING"===(null===xe||void 0===xe?void 0:xe.status),onClick:function(){ye(!0)},children:e("modelService.GenerateToken")}),children:(0,j.jsx)(W.Z,{scroll:{x:"max-content"},rowKey:"token",columns:[{title:"#",fixed:"left",render:function(e,n,l){return++l},showSorterTooltip:!1},{title:"Token",dataIndex:"token",fixed:"left",render:function(e,n){return(0,j.jsx)(P.Z.Text,{ellipsis:!0,copyable:!0,style:{width:150},children:n.token})}},{title:"Status",render:function(e,n){var l=x().utc(n.valid_until).isBefore();return(0,j.jsx)(Y.Z,{color:l?"red":"green",children:l?"Expired":"Valid"})}},{title:"Valid Until",dataIndex:"valid_until",render:function(e,n){return(0,j.jsx)("span",{children:n.valid_until?x().utc(n.valid_until).tz().format("ll LTS"):"-"})},defaultSortOrder:"descend",sortDirections:["descend","ascend","descend"],sorter:re},{title:"Created at",dataIndex:"created_at",render:function(e,n){return(0,j.jsx)("span",{children:x()(n.created_at).format("ll LT")})},defaultSortOrder:"descend",sortDirections:["descend","ascend","descend"],sorter:re}],pagination:!1,dataSource:(0,u.uU)(null===he||void 0===he?void 0:he.items),bordered:!0})}),(0,j.jsx)(U.Z,{title:e("modelService.RoutesInfo"),children:(0,j.jsx)(W.Z,{scroll:{x:"max-content"},columns:[{title:e("modelService.RouteId"),dataIndex:"routing_id",fixed:"left"},{title:e("modelService.SessionId"),dataIndex:"session"},{title:e("modelService.Status"),render:function(e,l){var r=l.session,a=l.status;return a&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(Y.Z,{color:je(a),style:{marginRight:0},children:a.toUpperCase()},a),"FAILED_TO_START"===a&&(0,j.jsx)(J.Z,{children:(0,j.jsx)(T.ZP,{size:"small",type:"text",icon:(0,j.jsx)(B.Z,{}),style:{color:n.colorTextSecondary},onClick:function(){return r&&function(e){if(null!==xe){var n=xe.errors.find((function(n){var l=n.session_id;return e===l}));de(n||null)}}(r)}})})]})}},{title:e("modelService.TrafficRatio"),dataIndex:"traffic_ratio"}],pagination:!1,dataSource:null===xe||void 0===xe?void 0:xe.routings,rowKey:"routing_id",bordered:!0})}),(0,j.jsx)(L,{open:!!se,inferenceSessionErrorFrgmt:se,onRequestClose:function(){return de(null)}}),(0,j.jsx)(C.Z,{endpointFrgmt:xe,open:me,onCancel:function(){ge(!me)},onRequestClose:function(e){ge(!me),e&&w((function(){k()}))}}),(0,j.jsx)(F,{open:ve,onRequestClose:function(e){ye(!ve),e&&w((function(){k()}))},endpoint_id:(null===xe||void 0===xe?void 0:xe.endpoint_id)||""})]})}},4464:function(e,n,l){l.r(n);var r=function(){var e={defaultValue:null,kind:"LocalArgument",name:"endpointId"},n={defaultValue:null,kind:"LocalArgument",name:"tokenListLimit"},l={defaultValue:null,kind:"LocalArgument",name:"tokenListOffset"},r={kind:"Variable",name:"endpoint_id",variableName:"endpointId"},a=[r],i={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"endpoint_id",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"image",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"desired_session_count",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"open_to_public",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"session_id",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"retries",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"model",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"model_mount_destiation",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"resource_group",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"resource_slots",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"resource_opts",storageKey:null},S={alias:null,args:null,kind:"ScalarField",name:"routing_id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"session",storageKey:null},x={alias:null,args:null,kind:"ScalarField",name:"traffic_ratio",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"endpoint",storageKey:null},_={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},j={alias:null,args:[r,{kind:"Variable",name:"limit",variableName:"tokenListLimit"},{kind:"Variable",name:"offset",variableName:"tokenListOffset"}],concreteType:"EndpointTokenList",kind:"LinkedField",name:"endpoint_token_list",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"total_count",storageKey:null},{alias:null,args:null,concreteType:"EndpointToken",kind:"LinkedField",name:"items",plural:!0,selections:[_,{alias:null,args:null,kind:"ScalarField",name:"token",storageKey:null},o,{alias:null,args:null,kind:"ScalarField",name:"domain",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"project",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_owner",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"created_at",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"valid_until",storageKey:null}],storageKey:null}],storageKey:null},Z={alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null};return{fragment:{argumentDefinitions:[e,n,l],kind:"Fragment",metadata:null,name:"RoutingListPageQuery",selections:[{alias:null,args:a,concreteType:"Endpoint",kind:"LinkedField",name:"endpoint",plural:!1,selections:[i,t,o,s,d,c,u,{alias:null,args:null,concreteType:"InferenceSessionError",kind:"LinkedField",name:"errors",plural:!0,selections:[m,{args:null,kind:"FragmentSpread",name:"ServingRouteErrorModalFragment"}],storageKey:null},g,p,f,v,y,k,{alias:null,args:null,concreteType:"Routing",kind:"LinkedField",name:"routings",plural:!0,selections:[S,b,x,h,t],storageKey:null},{args:null,kind:"FragmentSpread",name:"ServiceLauncherModalFragment"},{args:null,kind:"FragmentSpread",name:"EndpointOwnerInfoFragment"},{args:null,kind:"FragmentSpread",name:"EndpointStatusTagFragment"}],storageKey:null},j],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,l,n],kind:"Operation",name:"RoutingListPageQuery",selections:[{alias:null,args:a,concreteType:"Endpoint",kind:"LinkedField",name:"endpoint",plural:!1,selections:[i,t,o,s,d,c,u,{alias:null,args:null,concreteType:"InferenceSessionError",kind:"LinkedField",name:"errors",plural:!0,selections:[m,{alias:null,args:null,concreteType:"InferenceSessionErrorInfo",kind:"LinkedField",name:"errors",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"repr",storageKey:null}],storageKey:null}],storageKey:null},g,p,f,v,y,k,{alias:null,args:null,concreteType:"Routing",kind:"LinkedField",name:"routings",plural:!0,selections:[S,b,x,h,t,_],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cluster_mode",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cluster_size",storageKey:null},{alias:null,args:null,concreteType:"ImageNode",kind:"LinkedField",name:"image_object",plural:!1,selections:[i,{alias:null,args:null,kind:"ScalarField",name:"humanized_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"registry",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"architecture",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_local",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"digest",storageKey:null},{alias:null,args:null,concreteType:"ResourceLimit",kind:"LinkedField",name:"resource_limits",plural:!0,selections:[Z,{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"max",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"KVPair",kind:"LinkedField",name:"labels",plural:!0,selections:[Z,{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"size_bytes",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"supported_accelerators",storageKey:null},_],storageKey:null},_,{alias:null,args:null,kind:"ScalarField",name:"created_user_email",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"session_owner_email",storageKey:null}],storageKey:null},j]},params:{cacheID:"89978faf62239e9f786d10da3b925e35",id:null,metadata:{},name:"RoutingListPageQuery",operationKind:"query",text:'query RoutingListPageQuery(\n  $endpointId: UUID!\n  $tokenListOffset: Int!\n  $tokenListLimit: Int!\n) {\n  endpoint(endpoint_id: $endpointId) {\n    name\n    status\n    endpoint_id\n    image\n    desired_session_count\n    url\n    open_to_public\n    errors {\n      session_id\n      ...ServingRouteErrorModalFragment\n    }\n    retries\n    model\n    model_mount_destiation\n    resource_group\n    resource_slots\n    resource_opts\n    routings {\n      routing_id\n      session\n      traffic_ratio\n      endpoint\n      status\n      id\n    }\n    ...ServiceLauncherModalFragment\n    ...EndpointOwnerInfoFragment\n    ...EndpointStatusTagFragment\n    id\n  }\n  endpoint_token_list(offset: $tokenListOffset, limit: $tokenListLimit, endpoint_id: $endpointId) {\n    total_count\n    items {\n      id\n      token\n      endpoint_id\n      domain\n      project\n      session_owner\n      created_at\n      valid_until\n    }\n  }\n}\n\nfragment EndpointOwnerInfoFragment on Endpoint {\n  id\n  created_user_email @since(version: "23.09.8")\n  session_owner_email @since(version: "23.09.8")\n}\n\nfragment EndpointStatusTagFragment on Endpoint {\n  id\n  status\n}\n\nfragment ServiceLauncherModalFragment on Endpoint {\n  endpoint_id\n  desired_session_count\n  resource_group\n  resource_slots\n  resource_opts\n  cluster_mode\n  cluster_size\n  open_to_public\n  image_object @since(version: "23.09.9") {\n    name\n    humanized_name\n    tag\n    registry\n    architecture\n    is_local\n    digest\n    resource_limits {\n      key\n      min\n      max\n    }\n    labels {\n      key\n      value\n    }\n    size_bytes\n    supported_accelerators\n    id\n  }\n  name\n}\n\nfragment ServingRouteErrorModalFragment on InferenceSessionError {\n  session_id\n  errors {\n    repr\n  }\n}\n'}}}();r.hash="951c9e47adf4e50e7550612f2f8d0f17",n.default=r},43971:function(e,n,l){l.d(n,{Z:function(){return s}});var r=l(87462),a=l(4519),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},t=l(9491),o=function(e,n){return a.createElement(t.Z,(0,r.Z)({},e,{ref:n,icon:i}))};var s=a.forwardRef(o)},60284:function(e,n,l){l.d(n,{Z:function(){return I}});var r=l(4942),a=l(29439),i=l(4519),t=l(16539),o=l.n(t),s=l(95882),d=l(23946),c=l(90690),u=l(48698),m=l(17669),g=l(17416),p=function(e){var n=e.children,l=(0,i.useContext(u.E_).getPrefixCls)("breadcrumb");return i.createElement("li",{className:"".concat(l,"-separator"),"aria-hidden":"true"},""===n?n:n||"/")};p.__ANT_BREADCRUMB_SEPARATOR=!0;var f=p,v=function(e,n){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(l[r[a]]=e[r[a]])}return l};function y(e,n,l,r){if(null===l||void 0===l)return null;var a=n.className,t=n.onClick,s=v(n,["className","onClick"]),c=Object.assign(Object.assign({},(0,d.Z)(s,{data:!0,aria:!0})),{onClick:t});return void 0!==r?i.createElement("a",Object.assign({},c,{className:o()("".concat(e,"-link"),a),href:r}),l):i.createElement("span",Object.assign({},c,{className:o()("".concat(e,"-link"),a)}),l)}function k(e,n){return function(l,r,a,i,t){if(n)return n(l,r,a,i);var o=function(e,n){if(void 0===e.title||null===e.title)return null;var l=Object.keys(n).join("|");return"object"===typeof e.title?e.title:String(e.title).replace(new RegExp(":(".concat(l,")"),"g"),(function(e,l){return n[l]||e}))}(l,r);return y(e,l,o,t)}}var S=function(e,n){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(l[r[a]]=e[r[a]])}return l},b=function(e){var n=e.prefixCls,l=e.separator,r=void 0===l?"/":l,a=e.children,t=e.menu,o=e.overlay,s=e.dropdownProps,d=e.href,c=function(e){if(t||o){var l=Object.assign({},s);if(t){var r=t||{},a=r.items,c=S(r,["items"]);l.menu=Object.assign(Object.assign({},c),{items:null===a||void 0===a?void 0:a.map((function(e,n){var l=e.key,r=e.title,a=e.label,t=e.path,o=S(e,["key","title","label","path"]),s=null!==a&&void 0!==a?a:r;return t&&(s=i.createElement("a",{href:"".concat(d).concat(t)},s)),Object.assign(Object.assign({},o),{key:null!==l&&void 0!==l?l:n,label:s})}))})}else o&&(l.overlay=o);return i.createElement(g.Z,Object.assign({placement:"bottom"},l),i.createElement("span",{className:"".concat(n,"-overlay-link")},e,i.createElement(m.Z,null)))}return e}(a);return void 0!==c&&null!==c?i.createElement(i.Fragment,null,i.createElement("li",null,c),r&&i.createElement(f,null,r)):null},x=function(e){var n=e.prefixCls,l=e.children,r=e.href,a=S(e,["prefixCls","children","href"]),t=(0,i.useContext(u.E_).getPrefixCls)("breadcrumb",n);return i.createElement(b,Object.assign({},a,{prefixCls:t}),y(t,a,l,r))};x.__ANT_BREADCRUMB_ITEM=!0;var h=x,_=l(66777),j=l(21480),Z=l(81492),F=l(41157),O=(0,Z.I$)("Breadcrumb",(function(e){return function(e){var n,l,a=e.componentCls,i=e.iconCls,t=e.calc;return(0,r.Z)({},a,Object.assign(Object.assign({},(0,j.Wf)(e)),(l={color:e.itemColor,fontSize:e.fontSize},(0,r.Z)(l,i,{fontSize:e.iconFontSize}),(0,r.Z)(l,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),(0,r.Z)(l,"a",Object.assign({color:e.linkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat((0,_.bf)(e.paddingXXS)),borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:t(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,j.Qy)(e))),(0,r.Z)(l,"li:last-child",{color:e.lastItemColor}),(0,r.Z)(l,"".concat(a,"-separator"),{marginInline:e.separatorMargin,color:e.separatorColor}),(0,r.Z)(l,"".concat(a,"-link"),(0,r.Z)({},"\n          > ".concat(i," + span,\n          > ").concat(i," + a\n        "),{marginInlineStart:e.marginXXS})),(0,r.Z)(l,"".concat(a,"-overlay-link"),(n={borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:"0 ".concat((0,_.bf)(e.paddingXXS)),marginInline:t(e.marginXXS).mul(-1).equal()},(0,r.Z)(n,"> ".concat(i),{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon}),(0,r.Z)(n,"&:hover",{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}}),(0,r.Z)(n,"a",{"&:hover":{backgroundColor:"transparent"}}),n)),(0,r.Z)(l,"&".concat(e.componentCls,"-rtl"),{direction:"rtl"}),l)))}((0,F.TS)(e,{}))}),(function(e){return{itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}})),E=function(e,n){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(l[r[a]]=e[r[a]])}return l};function C(e){var n=e.breadcrumbName,l=e.children,r=E(e,["breadcrumbName","children"]),a=Object.assign({title:n},r);return l&&(a.menu={items:l.map((function(e){var n=e.breadcrumbName,l=E(e,["breadcrumbName"]);return Object.assign(Object.assign({},l),{title:n})}))}),a}var T=function(e,n){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(l[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(l[r[a]]=e[r[a]])}return l},K=function(e){var n,l=e.prefixCls,t=e.separator,m=void 0===t?"/":t,g=e.style,p=e.className,v=e.rootClassName,y=e.routes,S=e.items,x=e.children,h=e.itemRender,_=e.params,j=void 0===_?{}:_,Z=T(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),F=i.useContext(u.E_),E=F.getPrefixCls,K=F.direction,I=F.breadcrumb,w=E("breadcrumb",l),L=O(w),R=(0,a.Z)(L,3),P=R[0],N=R[1],D=R[2],z=function(e,n){return(0,i.useMemo)((function(){return e||(n?n.map(C):null)}),[e,n])}(S,y),M=k(w,h);if(z&&z.length>0){var q=[],H=S||y;n=z.map((function(e,n){var l=e.path,r=e.key,a=e.type,t=e.menu,o=e.overlay,s=e.onClick,c=e.className,u=e.separator,g=e.dropdownProps,p=function(e,n){if(void 0===n)return n;var l=(n||"").replace(/^\//,"");return Object.keys(e).forEach((function(n){l=l.replace(":".concat(n),e[n])})),l}(j,l);void 0!==p&&q.push(p);var v=null!==r&&void 0!==r?r:n;if("separator"===a)return i.createElement(f,{key:v},u);var y={},k=n===z.length-1;t?y.menu=t:o&&(y.overlay=o);var S=e.href;return q.length&&void 0!==p&&(S="#/".concat(q.join("/"))),i.createElement(b,Object.assign({key:v},y,(0,d.Z)(e,{data:!0,aria:!0}),{className:c,dropdownProps:g,href:S,separator:k?"":m,onClick:s,prefixCls:w}),M(e,j,H,q,S))}))}else if(x){var A=(0,s.Z)(x).length;n=(0,s.Z)(x).map((function(e,n){if(!e)return e;var l=n===A-1;return(0,c.Tm)(e,{separator:l?"":m,key:n})}))}var G=o()(w,null===I||void 0===I?void 0:I.className,(0,r.Z)({},"".concat(w,"-rtl"),"rtl"===K),p,v,N,D),B=Object.assign(Object.assign({},null===I||void 0===I?void 0:I.style),g);return P(i.createElement("nav",Object.assign({className:G,style:B},Z),i.createElement("ol",null,n)))};K.Item=h,K.Separator=f;var I=K}}]);
//# sourceMappingURL=232.8e4a793b.chunk.js.map