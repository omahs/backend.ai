"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[145],{37007:function(e,i,n){var t=n(99277),r=n(82548),s=n(32048),o=n.n(s),l=n(4519),a=n(2556);i.Z=function(e){var i,n=e.values,s=void 0===n?[]:n;return 0===s.length?null:(i=s[0]&&("string"===typeof s[0]||l.isValidElement(s[0]))?s.map((function(e){return{label:e,color:"blue"}})):s,(0,a.jsx)(t.Z,{direction:"row",children:o().map(i,(function(e,n){return(0,a.jsx)(r.Z,{style:o().last(i)===e?void 0:{margin:0,marginRight:-1},color:e.color,children:e.label},n)}))}))}},54145:function(e,i,n){n.r(i),n.d(i,{default:function(){return y}});var t=n(43255),r=n(40406),s=n(99277),o=n(70389),l=(n(4519),n(2556)),a=function(e){var i=e.title,n=e.subtitle;return(0,l.jsxs)(s.Z,{direction:"column",align:"start",children:[(0,l.jsx)(o.Z.Text,{strong:!0,children:i}),n&&(0,l.jsx)(o.Z.Text,{type:"secondary",children:n})]})},c=n(37007),m=n(83861),d=n(43971),x=n(44036),f=n(35492),u=n(2704),j=n(86199),h=n(93448),Z=n(82548),b=n(39883),g=n(81748),p=n(87112),y=function(){var e=(0,g.$G)().t,i=x.Z.useToken().token,n=(0,r.Dj)(),o=(0,p.useQuery)("licenseInfo",(function(){return n.enterprise.getLicense()}),{suspense:!1}),y=o.data,D=o.isLoading;y||(y={valid:!1,type:e("information.CannotRead"),licensee:e("information.CannotRead"),key:e("information.CannotRead"),expiration:e("information.CannotRead")});var I={xxl:4,xl:4,lg:2,md:1,sm:1,xs:1};return(0,l.jsxs)(s.Z,{direction:"column",align:"stretch",style:{gap:i.margin},children:[(0,l.jsxs)(f.Z,{gutter:[i.margin,i.margin],children:[(0,l.jsx)(u.Z,{xs:24,xxl:12,children:(0,l.jsx)(j.Z,{style:{height:"100%"},children:(0,l.jsxs)(h.Z,{title:e("information.Core"),bordered:!0,column:I,children:[(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.ManagerVersion")}),children:(0,l.jsxs)(s.Z,{direction:"column",style:{gap:i.marginXXS},align:"start",children:["Backend.AI ",n.managerVersion,(0,l.jsx)(c.Z,{values:[e("information.Installation"),n.managerVersion]})]})}),(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.APIVersion")}),children:n.apiVersion})]})})}),(0,l.jsx)(u.Z,{xs:24,xxl:12,children:(0,l.jsx)(j.Z,{children:(0,l.jsxs)(h.Z,{title:e("information.Security"),bordered:!0,column:I,children:[(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.DefaultAdministratorAccountChanged"),subtitle:e("information.DescDefaultAdministratorAccountChanged")}),children:(0,l.jsx)(m.Z,{title:"Yes"})}),(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.UsesSSL"),subtitle:e("information.DescUsesSSL")}),children:null!==n&&void 0!==n&&n._config.endpoint.startsWith("https:")?(0,l.jsx)(m.Z,{title:"Yes"}):(0,l.jsx)(d.Z,{style:{color:i.colorWarning},title:"No"})})]})})})]}),(0,l.jsx)(j.Z,{children:(0,l.jsxs)(h.Z,{title:e("information.Component"),bordered:!0,column:{xxl:4,xl:2,lg:2,md:1,sm:1,xs:1},children:[(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.DockerVersion"),subtitle:e("information.DescDockerVersion")}),children:(0,l.jsx)(Z.Z,{children:e("information.Compatible")})}),(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.PostgreSQLVersion"),subtitle:e("information.DescPostgreSQLVersion")}),children:(0,l.jsx)(Z.Z,{children:e("information.Compatible")})}),(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.ETCDVersion"),subtitle:e("information.DescETCDVersion")}),children:(0,l.jsx)(Z.Z,{children:e("information.Compatible")})}),(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.RedisVersion"),subtitle:(0,t.We)(e("information.DescRedisVersion"))}),children:(0,l.jsx)(Z.Z,{children:e("information.Compatible")})})]})}),(0,l.jsx)(j.Z,{children:(0,l.jsx)(b.Z,{spinning:D,children:(0,l.jsxs)(h.Z,{title:e("information.License"),bordered:!0,column:{xxl:2,xl:2,lg:2,md:1,sm:1,xs:1},children:[(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.IsLicenseValid"),subtitle:e("information.DescIsLicenseValid")}),children:y.valid?(0,l.jsx)(m.Z,{}):(0,l.jsx)(d.Z,{style:{color:i.colorWarning}})}),(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.LicenseType"),subtitle:(0,t.We)(e("information.DescLicenseType"))}),children:(0,l.jsx)(Z.Z,{children:"fixed"===y.type?e("information.FixedLicense"):e("information.DynamicLicense")})}),(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.Licensee"),subtitle:e("information.DescLicensee")}),children:(0,l.jsx)(Z.Z,{children:y.licensee})}),(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.LicenseKey"),subtitle:e("information.DescLicenseKey")}),children:(0,l.jsx)(Z.Z,{children:y.key})}),(0,l.jsx)(h.Z.Item,{label:(0,l.jsx)(a,{title:e("information.Expiration"),subtitle:e("information.DescExpiration")}),children:(0,l.jsx)(Z.Z,{children:y.expiration})})]})})})]})}},43971:function(e,i,n){n.d(i,{Z:function(){return a}});var t=n(87462),r=n(4519),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},o=n(9491),l=function(e,i){return r.createElement(o.Z,(0,t.Z)({},e,{ref:i,icon:s}))};var a=r.forwardRef(l)}}]);
//# sourceMappingURL=145.b9586d46.chunk.js.map