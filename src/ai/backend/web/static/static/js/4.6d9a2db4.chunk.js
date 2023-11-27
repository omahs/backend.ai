"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[4],{37007:function(e,n,i){var t=i(99277),r=i(82548),l=i(32048),a=i.n(l),o=i(4519),s=i(2556);n.Z=function(e){var n,i=e.values,l=void 0===i?[]:i;return 0===l.length?null:(n=l[0]&&("string"===typeof l[0]||o.isValidElement(l[0]))?l.map((function(e){return{label:e,color:"blue"}})):l,(0,s.jsx)(t.Z,{direction:"row",children:a().map(n,(function(e,i){return(0,s.jsx)(r.Z,{style:a().last(n)===e?void 0:{margin:0,marginRight:-1},color:e.color,children:e.label},i)}))}))}},15008:function(e,n,i){i.d(n,{Z:function(){return b}});var t,r=i(84506),l=i(29439),a=i(87760),o=i(37007),s=i(99277),u=i(14001),d=i(91278),c=i(57054),m=i(44036),v=i(19427),g=i(82548),f=i(83799),p=i(38818),h=i(32048),y=i.n(h),x=i(4519),Z=i(81748),j=i(16980),w=i(2556),k=function(e){return e?"".concat(e.registry,"/").concat(e.name,":").concat(e.tag,"@").concat(e.architecture):void 0};var b=function(e){var n,h=e.filter,b=e.showPrivate;(0,a.Dj)();var S=c.Z.useFormInstance();c.Z.useWatch("environments",{form:S,preserve:!0});var F=(0,x.useState)(""),_=(0,l.Z)(F,2),I=_[0],N=_[1],E=(0,x.useState)(""),G=(0,l.Z)(E,2),P=G[0],V=G[1],K=(0,Z.$G)().t,T=(0,a.dS)(),z=(0,l.Z)(T,2),L=z[0],U=z[1].getImageMeta,M=m.Z.useToken().token,C=(0,x.useRef)(null),B=(0,x.useRef)(null),A=(0,j.useLazyLoadQuery)(void 0!==t?t:t=i(71947),{installed:!0},{fetchPolicy:"store-and-network"}).images;(0,x.useEffect)((function(){var e,n,i,t,r,l=(null===(e=S.getFieldValue("environments"))||void 0===e?void 0:e.environment)||(null===(n=O[0])||void 0===n||null===(i=n.environmentGroups[0])||void 0===i?void 0:i.environmentName);if(y().find(O,(function(e){return y().find(e.environmentGroups,(function(e){return e.environmentName===l&&(r=e,!0)}))})),!y().find(null===(t=r)||void 0===t?void 0:t.images,(function(e){var n;return(null===(n=S.getFieldValue("environments"))||void 0===n?void 0:n.version)===k(e)}))){var a,o=null===(a=r)||void 0===a?void 0:a.images[0];o&&S.setFieldsValue({environments:{environment:l,version:k(o),image:o}})}}),[null===(n=S.getFieldValue("environments"))||void 0===n?void 0:n.environment]);var O=(0,x.useMemo)((function(){return y().chain(A).filter((function(e){return(!!b||!function(e){return y().some(null===e||void 0===e?void 0:e.labels,(function(e){var n;return"ai.backend.features"===(null===e||void 0===e?void 0:e.key)&&(null===e||void 0===e||null===(n=e.value)||void 0===n?void 0:n.split(" ").includes("private"))}))}(e))&&(!h||h(e))})).groupBy((function(e){var n;return(null===L||void 0===L||null===(n=L.imageInfo[U(k(e)||"").key])||void 0===n?void 0:n.group)||"Custom Environments"})).map((function(e,n){return{groupName:n,environmentGroups:y().chain(e).groupBy((function(e){return null===e||void 0===e?void 0:e.name})).map((function(e,n){var i,t,r;return{environmentName:n,displayName:(null===L||void 0===L||null===(i=L.imageInfo[null===(t=n.split("/"))||void 0===t?void 0:t[1]])||void 0===i?void 0:i.name)||n,prefix:null===(r=n.split("/"))||void 0===r?void 0:r[0],images:e.sort((function(e,n){var i,t,r,l,a,o;return function(e,n){for(var i=e.split(".").map(Number),t=n.split(".").map(Number),r=0;r<Math.max(i.length,t.length);r++){var l=i[r]||0,a=t[r]||0;if(l>a)return 1;if(l<a)return-1}return 0}(null!==(i=null===n||void 0===n||null===(t=n.tag)||void 0===t||null===(r=t.split("-"))||void 0===r?void 0:r[0])&&void 0!==i?i:"",null!==(l=null===e||void 0===e||null===(a=e.tag)||void 0===a||null===(o=a.split("-"))||void 0===o?void 0:o[0])&&void 0!==l?l:"")}))}})).sortBy((function(e){return e.displayName})).value()}})).sortBy((function(e){return e.groupName})).value()}),[A,L,h,b]),R=(0,x.useMemo)((function(){var e,n;return I.length&&y().chain(O.flatMap((function(e){return e.environmentGroups})).find((function(i){return n=i,!!(e=y().find(i.images,(function(e){return k(e)===I})))}))).value(),{fullNameMatchedImage:e,fullNameMatchedImageGroup:n}}),[I,O]),q=R.fullNameMatchedImage;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("style",{children:"/* Change the image and tags of the select option when the selection is opened  */\ndiv.image-environment-select-form-item\n  div.ant-select-open\n  span.ant-select-selection-item\n  div\n  img,\ndiv.image-environment-select-form-item\n  div.ant-select-open\n  span.ant-select-selection-item\n  div\n  span.ant-tag {\n  opacity: 0.5;\n}\n\ndiv.image-environment-select-form-item\n  div.ant-select-item-option-content\n  div.tag-wrap {\n  /* flex: 1 !important; */\n  flex-wrap: wrap !important;\n}\n\ndiv.image-environment-select-form-item\n  span.ant-select-selection-item\n  div.tag-wrap {\n  overflow: hidden;\n}\n\ndiv.image-environment-select-form-item\n  span.ant-select-selection-item\n  div.tag-wrap::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 10px; /* Width of the transparent gradient area */\n  background: linear-gradient(\n    to right,\n    rgba(255, 255, 255, 0),\n    rgba(255, 255, 255, 1)\n  );\n}\n"}),(0,w.jsx)(c.Z.Item,{className:"image-environment-select-form-item",name:["environments","environment"],label:"".concat(K("session.launcher.Environments")," / ").concat(K("session.launcher.Version")),rules:[{required:!0}],style:{marginBottom:10},children:(0,w.jsx)(v.Z,{ref:C,showSearch:!0,className:"image-environment-select",searchValue:I,onSearch:N,defaultActiveFirstOption:!0,optionFilterProp:"filterValue",onChange:function(e){q&&S.setFieldsValue({environments:{environment:(null===q||void 0===q?void 0:q.name)||"",version:k(q),image:q}})},children:q?(0,w.jsx)(v.Z.Option,{value:null===q||void 0===q?void 0:q.name,filterValue:k(q),children:(0,w.jsxs)(s.Z,{direction:"row",align:"center",gap:"xs",style:{display:"inline-flex"},children:[(0,w.jsx)(u.Z,{image:k(q)||"",style:{width:15,height:15}}),k(q)]})}):y().map(O,(function(e){return(0,w.jsx)(v.Z.OptGroup,{label:e.groupName,children:y().map(e.environmentGroups,(function(e){var n,i=e.images[0],t=null===L||void 0===L?void 0:L.imageInfo[null===(n=e.environmentName.split("/"))||void 0===n?void 0:n[1]],r=[],l=null;e.prefix&&!["lablup","cloud","stable"].includes(e.prefix)&&(r.push(e.prefix),l=(0,w.jsx)(g.Z,{color:"purple",children:(0,w.jsx)(d.Z,{keyword:I,children:e.prefix})}));var a=y().map(null===t||void 0===t?void 0:t.label,(function(e){return y().isUndefined(e.category)&&e.tag&&e.color?(r.push(e.tag),(0,w.jsx)(g.Z,{color:e.color,children:(0,w.jsx)(d.Z,{keyword:I,children:e.tag},e.tag)},e.tag)):null}));return(0,w.jsx)(v.Z.Option,{value:e.environmentName,filterValue:e.displayName+"\t"+r.join("\t"),children:(0,w.jsxs)(s.Z,{direction:"row",justify:"between",children:[(0,w.jsxs)(s.Z,{direction:"row",align:"center",gap:"xs",children:[(0,w.jsx)(u.Z,{image:k(i)||"",style:{width:15,height:15}}),(0,w.jsx)(d.Z,{keyword:I,children:e.displayName})]}),(0,w.jsxs)(s.Z,{direction:"row",className:"tag-wrap",style:{marginLeft:M.marginXS,flexShrink:1},children:[l,a]})]})},e.environmentName)}))},e.groupName)}))})}),(0,w.jsx)(c.Z.Item,{noStyle:!0,shouldUpdate:function(e,n){var i,t;return(null===(i=e.environments)||void 0===i?void 0:i.environment)!==(null===(t=n.environments)||void 0===t?void 0:t.environment)},children:function(e){var n,i,t=e.getFieldValue;return y().find(O,(function(e){return y().find(e.environmentGroups,(function(e){var n;return e.environmentName===(null===(n=t("environments"))||void 0===n?void 0:n.environment)&&(i=e,!0)}))})),(0,w.jsx)(c.Z.Item,{className:"image-environment-select-form-item",name:["environments","version"],rules:[{required:!0}],children:(0,w.jsx)(v.Z,{ref:B,onChange:function(e){var n=y().find(A,(function(n){return k(n)===e}));S.setFieldValue(["environments","image"],n)},showSearch:!0,searchValue:P,onSearch:V,optionFilterProp:"filterValue",dropdownRender:function(e){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(s.Z,{style:{fontWeight:M.fontWeightStrong,paddingLeft:M.paddingSM},children:[K("session.launcher.Version"),(0,w.jsx)(f.Z,{type:"vertical"}),K("session.launcher.Base"),(0,w.jsx)(f.Z,{type:"vertical"}),K("session.launcher.Architecture"),(0,w.jsx)(f.Z,{type:"vertical"}),K("session.launcher.Requirements")]}),(0,w.jsx)(f.Z,{style:{margin:"8px 0"}}),e]})},children:y().map(y().uniqBy(null===(n=i)||void 0===n?void 0:n.images,"digest"),(function(e){var n,i=(null===e||void 0===e||null===(n=e.tag)||void 0===n?void 0:n.split("-"))||["","",""],t=(0,r.Z)(i),a=t[0],u=t[1],c=t.slice(2),m=null===L||void 0===L?void 0:L.tagAlias[u];if(!m){for(var g=0,p=Object.entries((null===L||void 0===L?void 0:L.tagReplace)||{});g<p.length;g++){var h=(0,l.Z)(p[g],2),x=h[0],Z=h[1],j=new RegExp(x);j.test(u)&&(m=null===u||void 0===u?void 0:u.replace(j,Z))}m||(m=u)}var b=[],S=c.length>0?y().map(c,(function(e,n){var i;return(0,w.jsx)(o.Z,{values:(null===L||void 0===L||null===(i=L.tagAlias[e])||void 0===i?void 0:i.split(":").map((function(e){return b.push(e),(0,w.jsx)(d.Z,{keyword:P,children:e},e)})))||c},n)})):"-";return(0,w.jsx)(v.Z.Option,{value:k(e),filterValue:[a,m,null===e||void 0===e?void 0:e.architecture].concat(b).join("\t"),children:(0,w.jsxs)(s.Z,{direction:"row",justify:"between",children:[(0,w.jsxs)(s.Z,{direction:"row",children:[(0,w.jsx)(d.Z,{keyword:P,children:a}),(0,w.jsx)(f.Z,{type:"vertical"}),(0,w.jsx)(d.Z,{keyword:P,children:m}),(0,w.jsx)(f.Z,{type:"vertical"}),(0,w.jsx)(d.Z,{keyword:P,children:null===e||void 0===e?void 0:e.architecture})]}),(0,w.jsx)(s.Z,{direction:"row",className:"tag-wrap",style:{marginLeft:M.marginXS,flexShrink:1},children:S})]})},null===e||void 0===e?void 0:e.digest)}))})})}}),(0,w.jsx)(c.Z.Item,{noStyle:!0,hidden:!0,name:["environments","image"],children:(0,w.jsx)(p.Z,{})})]})}},14001:function(e,n,i){var t=i(1413),r=i(29439),l=i(87760),a=i(4519),o=i(2556),s=function(e,n){var i=e.image,a=e.style,s=void 0===a?{}:a,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",d=(0,l.dS)(),c=(0,r.Z)(d,2)[1].getImageIcon;return(0,o.jsx)("img",{src:c(i),style:(0,t.Z)({width:"1em",height:"1em"},s),alt:u})};n.Z=a.memo(s)},96732:function(e,n,i){i.d(n,{Ec:function(){return v}});var t=i(44925),r=i(1413),l=i(43255),a=i(99277),o=i(44036),s=i(28499),u=i(227),d=(i(4519),i(81748)),c=i(2556),m=["type","size","showIcon","showUnit","showTooltip"],v={"cuda.device":"GPU","cuda.shares":"FGPU","rocm.device":"GPU","tpu.device":"TPU","ipu.device":"IPU","atom.device":"ATOM","warboy.device":"Warboy"},g=function(e){var n=e.size,i=void 0===n?16:n,t=e.children;return(0,c.jsx)("mwc-icon",{style:{"--mdc-icon-size":"".concat(i+2,"px"),width:i,height:i},children:t})},f=function(e){var n,i,l,o=e.type,s=e.size,v=void 0===s?16:s,f=(e.showIcon,e.showUnit,e.showTooltip),p=void 0===f||f,h=(0,t.Z)(e,m),y=(0,d.$G)().t,x={cpu:[(0,c.jsx)(g,{size:v,children:"developer_board"}),y("session.core")],mem:[(0,c.jsx)(g,{size:v,children:"memory"}),"GiB"],"cuda.device":["/resources/icons/file_type_cuda.svg","GPU"],"cuda.shares":["/resources/icons/file_type_cuda.svg","FGPU"],"rocm.device":["/resources/icons/ROCm.png","GPU"],"tpu.device":[(0,c.jsx)(g,{size:v,children:"view_module"}),"TPU"],"ipu.device":[(0,c.jsx)(g,{size:v,children:"view_module"}),"IPU"],"atom.device":["/resources/icons/rebel.svg","ATOM"],"warboy.device":["/resources/icons/furiosa.svg","Warboy"]},Z="string"===typeof(null===(n=x[o])||void 0===n?void 0:n[0])?(0,c.jsx)("img",(0,r.Z)((0,r.Z)({},h),{},{style:(0,r.Z)({height:v,alignSelf:"center"},h.style||{}),src:(null===(i=x[o])||void 0===i?void 0:i[0])||"",alt:o})):(0,c.jsx)(a.Z,{style:{width:16,height:16},children:(null===(l=x[o])||void 0===l?void 0:l[0])||o});return p?(0,c.jsx)(u.Z,{title:o,children:Z}):(0,c.jsx)(a.Z,{style:{pointerEvents:"none"},children:Z})};n.ZP=function(e){var n,i,t=e.type,u=e.value,m=e.extra,g=e.opts,p=e.hideTooltip,h=void 0!==p&&p,y=(0,d.$G)().t,x=o.Z.useToken().token,Z=(0,r.Z)({cpu:y("session.core"),mem:"GiB"},v);return(0,c.jsxs)(a.Z,{direction:"row",gap:"xxs",children:[(0,c.jsx)(f,{type:t,showTooltip:!h}),(0,c.jsx)(s.Z.Text,{children:"GiB"===Z[t]?Number(null===(n=(0,l.PZ)(u+"b","g",3))||void 0===n?void 0:n.numberFixed).toString():"FGPU"===Z[t]?parseFloat(u).toFixed(2):u}),(0,c.jsx)(s.Z.Text,{type:"secondary",children:Z[t]}),"mem"===t&&null!==g&&void 0!==g&&g.shmem&&(null===g||void 0===g?void 0:g.shmem)>0?(0,c.jsxs)(s.Z.Text,{type:"secondary",style:{fontSize:x.fontSizeSM},children:["(SHM: ",null===(i=(0,l.PZ)(g.shmem+"b","g",2))||void 0===i?void 0:i.numberFixed,"GiB)"]}):null,m]})}},91278:function(e,n,i){var t=i(1413),r=i(44036),l=(i(4519),i(2556));n.Z=function(e){var n=e.children,i=e.keyword,a=e.style;if(!n)return null;var o=n.toLowerCase().indexOf(null===i||void 0===i?void 0:i.toLowerCase()),s=(r.Z.useToken()||"#F1A239").token;return o>=0?(0,l.jsxs)("span",{children:[n.substring(0,o),(0,l.jsx)("span",{style:(0,t.Z)({backgroundColor:s.colorWarningHover},a),children:n.substring(o,o+i.length)}),n.substring(o+i.length)]}):(0,l.jsx)("span",{children:n})}},71947:function(e,n,i){i.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"installed"}],n={alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},i=[{alias:null,args:[{kind:"Variable",name:"is_installed",variableName:"installed"}],concreteType:"Image",kind:"LinkedField",name:"images",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"humanized_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"registry",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"architecture",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"digest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"installed",storageKey:null},{alias:null,args:null,concreteType:"ResourceLimit",kind:"LinkedField",name:"resource_limits",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"min",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"max",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"KVPair",kind:"LinkedField",name:"labels",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"ImageEnvironmentSelectFormItemsQuery",selections:i,type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"ImageEnvironmentSelectFormItemsQuery",selections:i},params:{cacheID:"ea71f4a3948d4742dd6bb11ef80a8300",id:null,metadata:{},name:"ImageEnvironmentSelectFormItemsQuery",operationKind:"query",text:"query ImageEnvironmentSelectFormItemsQuery(\n  $installed: Boolean\n) {\n  images(is_installed: $installed) {\n    name\n    humanized_name\n    tag\n    registry\n    architecture\n    digest\n    installed\n    resource_limits {\n      key\n      min\n      max\n    }\n    labels {\n      key\n      value\n    }\n  }\n}\n"}}}();t.hash="33367bd6e1532b42b61629ef9d3dc46b",n.default=t},1839:function(e,n,i){i.d(n,{T6:function(){return c},jC:function(){return m}});var t=i(1413),r=i(29439),l=i(87760),a=i(43255),o=i(50164),s=i(32048),u=i.n(s),d=i(4519),c=function(){var e=(0,l.Kr)("first"),n=(0,r.Z)(e,2),i=n[0],t=n[1],a=(0,l.Dj)();return[(0,o.h)({queryKey:["useResourceSlots",i],queryFn:function(){return a.get_resource_slots()},staleTime:0}).data,{refresh:function(){return t()}}]},m=function(){var e=(0,l.Dj)(),n=(0,d.useState)({full_name:e.full_name,email:e.email}),i=(0,r.Z)(n,2),s=i[0],c=i[1];(0,d.useEffect)((function(){var n=function(n){if(e.supports("change-user-name")){var i=n.detail;c((function(e){return(0,t.Z)((0,t.Z)({},e),{},{full_name:i})}))}};return document.addEventListener("current-user-info-changed",n),function(){document.removeEventListener("current-user-info-changed",n)}}),[e]);var m=(0,o.Y)({mutationFn:function(n){return e.update_full_name(n.email,n.full_name)}}),v=(0,o.Y)({mutationFn:function(n){return e.update_password(n.old_password,n.new_password,n.new_password2)}});return[(0,t.Z)((0,t.Z)({},s),{},{username:function(){var n=u().trim(s.full_name).length>0?s.full_name:s.email;if(e._config.maskUserInfo){var i=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n)?n.split("@")[0].length-2:n.length-2;n=(0,a.Cd)(n,"*",2,i)}return n}(),isPendingMutation:m.isLoading||v.isLoading}),{updateFullName:function(n,i){m.mutate({full_name:n,email:e.email},{onSuccess:function(){(null===i||void 0===i?void 0:i.onSuccess)&&i.onSuccess(n),document.dispatchEvent(new CustomEvent("current-user-info-changed",{detail:n})),c((function(e){return(0,t.Z)((0,t.Z)({},e),{},{full_name:n})}))},onError:function(e){(null===i||void 0===i?void 0:i.onError)&&i.onError(e)}})},updatePassword:function(e,n){v.mutate(e,{onSuccess:function(){(null===n||void 0===n?void 0:n.onSuccess)&&n.onSuccess(void 0)},onError:function(e){(null===n||void 0===n?void 0:n.onError)&&n.onError(e)}})}}]}}}]);
//# sourceMappingURL=4.6d9a2db4.chunk.js.map