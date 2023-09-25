"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[110],{20558:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(87462),o=n(4519),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},r=n(9491),i=function(t,e){return o.createElement(r.Z,(0,a.Z)({},t,{ref:e,icon:c}))};var l=o.forwardRef(i)},45110:function(t,e,n){n.d(e,{Z:function(){return Pt}});var a=n(4942),o=n(29439),c=n(4519),r=n(31662),i=n(48841),l=n(20558),d=n(43270),s=n.n(d),u=n(87462),v=n(1413),p=n(71002),f=n(44925),b=n(27612),m=n(269),h=n(56114),g=(0,c.createContext)(null),Z=c.forwardRef((function(t,e){var n=t.prefixCls,a=t.className,o=t.style,r=t.id,i=t.active,l=t.tabKey,d=t.children;return c.createElement("div",{id:r&&"".concat(r,"-panel-").concat(l),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":r&&"".concat(r,"-tab-").concat(l),"aria-hidden":!i,style:o,className:s()(n,i&&"".concat(n,"-active"),a),ref:e},d)}));var k=Z,y=["key","forceRender","style","className"];function x(t){var e=t.id,n=t.activeKey,o=t.animated,r=t.tabPosition,i=t.destroyInactiveTabPane,l=c.useContext(g),d=l.prefixCls,p=l.tabs,b=o.tabPane,m="".concat(d,"-tabpane");return c.createElement("div",{className:s()("".concat(d,"-content-holder"))},c.createElement("div",{className:s()("".concat(d,"-content"),"".concat(d,"-content-").concat(r),(0,a.Z)({},"".concat(d,"-content-animated"),b))},p.map((function(t){var a=t.key,r=t.forceRender,l=t.style,d=t.className,p=(0,f.Z)(t,y),g=a===n;return c.createElement(h.ZP,(0,u.Z)({key:a,visible:g,forceRender:r,removeOnLeave:!!i,leavedClassName:"".concat(m,"-hidden")},o.tabPaneMotion),(function(t,n){var o=t.style,r=t.className;return c.createElement(k,(0,u.Z)({},p,{prefixCls:m,id:e,tabKey:a,animated:b,active:g,style:(0,v.Z)((0,v.Z)({},l),o),className:s()(d,r),ref:n}))}))}))))}var S=n(93433),_=n(91928),w=n(44586),C=n(20742),E={width:0,height:0,left:0,top:0};function P(t,e){var n=c.useRef(t),a=c.useState({}),r=(0,o.Z)(a,2)[1];return[n.current,function(t){var a="function"===typeof t?t(n.current):t;a!==n.current&&e(a,n.current),n.current=a,r({})}]}var R=.1,T=.01,I=20,z=Math.pow(.995,I);var L=n(47878);function N(t){var e=(0,c.useState)(0),n=(0,o.Z)(e,2),a=n[0],r=n[1],i=(0,c.useRef)(0),l=(0,c.useRef)();return l.current=t,(0,L.o)((function(){var t;null===(t=l.current)||void 0===t||t.call(l)}),[a]),function(){i.current===a&&(i.current+=1,r(i.current))}}var M={width:0,height:0,left:0,top:0,right:0};function B(t){var e;return t instanceof Map?(e={},t.forEach((function(t,n){e[n]=t}))):e=t,JSON.stringify(e)}var O="TABS_DQ";function D(t){return String(t).replace(/"/g,O)}function j(t,e,n,a){return!(!n||a||!1===t||void 0===t&&(!1===e||null===e))}function G(t,e){var n=t.prefixCls,a=t.editable,o=t.locale,r=t.style;return a&&!1!==a.showAdd?c.createElement("button",{ref:e,type:"button",className:"".concat(n,"-nav-add"),style:r,"aria-label":(null===o||void 0===o?void 0:o.addAriaLabel)||"Add tab",onClick:function(t){a.onEdit("add",{event:t})}},a.addIcon||"+"):null}var A=c.forwardRef(G);var H=c.forwardRef((function(t,e){var n,a=t.position,o=t.prefixCls,r=t.extra;if(!r)return null;var i={};return"object"!==(0,p.Z)(r)||c.isValidElement(r)?i.right=r:i=r,"right"===a&&(n=i.right),"left"===a&&(n=i.left),n?c.createElement("div",{className:"".concat(o,"-extra-content"),ref:e},n):null})),W=n(92434),X=n(571),K=n(33714);function F(t,e){var n=t.prefixCls,r=t.id,i=t.tabs,l=t.locale,d=t.mobile,u=t.moreIcon,v=void 0===u?"More":u,p=t.moreTransitionName,f=t.style,b=t.className,m=t.editable,h=t.tabBarGutter,g=t.rtl,Z=t.removeAriaLabel,k=t.onTabClick,y=t.getPopupContainer,x=t.popupClassName,S=(0,c.useState)(!1),_=(0,o.Z)(S,2),w=_[0],C=_[1],E=(0,c.useState)(null),P=(0,o.Z)(E,2),R=P[0],T=P[1],I="".concat(r,"-more-popup"),z="".concat(n,"-dropdown"),L=null!==R?"".concat(I,"-").concat(R):null,N=null===l||void 0===l?void 0:l.dropdownAriaLabel;var M=c.createElement(X.ZP,{onClick:function(t){var e=t.key,n=t.domEvent;k(e,n),C(!1)},prefixCls:"".concat(z,"-menu"),id:I,tabIndex:-1,role:"listbox","aria-activedescendant":L,selectedKeys:[R],"aria-label":void 0!==N?N:"expanded dropdown"},i.map((function(t){var e=t.closable,n=t.disabled,a=t.closeIcon,o=t.key,i=t.label,l=j(e,a,m,n);return c.createElement(X.sN,{key:o,id:"".concat(I,"-").concat(o),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(o),disabled:n},c.createElement("span",null,i),l&&c.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(z,"-menu-item-remove"),onClick:function(t){t.stopPropagation(),function(t,e){t.preventDefault(),t.stopPropagation(),m.onEdit("remove",{key:e,event:t})}(t,o)}},a||m.removeIcon||"\xd7"))})));function B(t){for(var e=i.filter((function(t){return!t.disabled})),n=e.findIndex((function(t){return t.key===R}))||0,a=e.length,o=0;o<a;o+=1){var c=e[n=(n+t+a)%a];if(!c.disabled)return void T(c.key)}}(0,c.useEffect)((function(){var t=document.getElementById(L);t&&t.scrollIntoView&&t.scrollIntoView(!1)}),[R]),(0,c.useEffect)((function(){w||T(null)}),[w]);var O=(0,a.Z)({},g?"marginRight":"marginLeft",h);i.length||(O.visibility="hidden",O.order=1);var D=s()((0,a.Z)({},"".concat(z,"-rtl"),g)),G=d?null:c.createElement(W.Z,{prefixCls:z,overlay:M,trigger:["hover"],visible:!!i.length&&w,transitionName:p,onVisibleChange:C,overlayClassName:s()(D,x),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:y},c.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:O,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":I,id:"".concat(r,"-more"),"aria-expanded":w,onKeyDown:function(t){var e=t.which;if(w)switch(e){case K.Z.UP:B(-1),t.preventDefault();break;case K.Z.DOWN:B(1),t.preventDefault();break;case K.Z.ESC:C(!1);break;case K.Z.SPACE:case K.Z.ENTER:null!==R&&k(R,t)}else[K.Z.DOWN,K.Z.SPACE,K.Z.ENTER].includes(e)&&(C(!0),t.preventDefault())}},v));return c.createElement("div",{className:s()("".concat(n,"-nav-operations"),b),style:f,ref:e},G,c.createElement(A,{prefixCls:n,locale:l,editable:m}))}var q=c.memo(c.forwardRef(F),(function(t,e){return e.tabMoving}));var V=function(t){var e,n=t.prefixCls,o=t.id,r=t.active,i=t.tab,l=i.key,d=i.label,u=i.disabled,v=i.closeIcon,p=t.closable,f=t.renderWrapper,b=t.removeAriaLabel,m=t.editable,h=t.onClick,g=t.onFocus,Z=t.style,k="".concat(n,"-tab"),y=j(p,v,m,u);function x(t){u||h(t)}var S=c.createElement("div",{key:l,"data-node-key":D(l),className:s()(k,(e={},(0,a.Z)(e,"".concat(k,"-with-remove"),y),(0,a.Z)(e,"".concat(k,"-active"),r),(0,a.Z)(e,"".concat(k,"-disabled"),u),e)),style:Z,onClick:x},c.createElement("div",{role:"tab","aria-selected":r,id:o&&"".concat(o,"-tab-").concat(l),className:"".concat(k,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(l),"aria-disabled":u,tabIndex:u?null:0,onClick:function(t){t.stopPropagation(),x(t)},onKeyDown:function(t){[K.Z.SPACE,K.Z.ENTER].includes(t.which)&&(t.preventDefault(),x(t))},onFocus:g},d),y&&c.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(t){var e;t.stopPropagation(),(e=t).preventDefault(),e.stopPropagation(),m.onEdit("remove",{key:l,event:e})}},v||m.removeIcon||"\xd7"));return f?f(S):S},Y=n(72058),Q=function(t){var e=t.activeTabOffset,n=t.horizontal,a=t.rtl,r=t.indicatorSize,i=(0,c.useState)(),l=(0,o.Z)(i,2),d=l[0],s=l[1],u=(0,c.useRef)(),v=function(t){return"function"===typeof r?r(t):"number"===typeof r?r:t};function p(){Y.Z.cancel(u.current)}return(0,c.useEffect)((function(){var t={};return e&&(n?(a?(t.right=e.right+e.width/2,t.transform="translateX(50%)"):(t.left=e.left+e.width/2,t.transform="translateX(-50%)"),t.width=v(e.width)):(t.top=e.top+e.height/2,t.transform="translateY(-50%)",t.height=v(e.height))),p(),u.current=(0,Y.Z)((function(){s(t)})),p}),[e,n,a,r]),{style:d}},J=function(t){var e=t.current||{},n=e.offsetWidth,a=void 0===n?0:n,o=e.offsetHeight;return[a,void 0===o?0:o]},U=function(t,e){return t[e?0:1]};function $(t,e){var n,r=c.useContext(g),i=r.prefixCls,l=r.tabs,d=t.className,p=t.style,f=t.id,b=t.animated,m=t.activeKey,h=t.rtl,Z=t.extra,k=t.editable,y=t.locale,x=t.tabPosition,L=t.tabBarGutter,O=t.children,j=t.onTabClick,G=t.onTabScroll,W=t.indicatorSize,X=(0,c.useRef)(),K=(0,c.useRef)(),F=(0,c.useRef)(),Y=(0,c.useRef)(),$=(0,c.useRef)(),tt=(0,c.useRef)(),et=(0,c.useRef)(),nt="top"===x||"bottom"===x,at=P(0,(function(t,e){nt&&G&&G({direction:t>e?"left":"right"})})),ot=(0,o.Z)(at,2),ct=ot[0],rt=ot[1],it=P(0,(function(t,e){!nt&&G&&G({direction:t>e?"top":"bottom"})})),lt=(0,o.Z)(it,2),dt=lt[0],st=lt[1],ut=(0,c.useState)([0,0]),vt=(0,o.Z)(ut,2),pt=vt[0],ft=vt[1],bt=(0,c.useState)([0,0]),mt=(0,o.Z)(bt,2),ht=mt[0],gt=mt[1],Zt=(0,c.useState)([0,0]),kt=(0,o.Z)(Zt,2),yt=kt[0],xt=kt[1],St=(0,c.useState)([0,0]),_t=(0,o.Z)(St,2),wt=_t[0],Ct=_t[1],Et=function(t){var e=(0,c.useRef)([]),n=(0,c.useState)({}),a=(0,o.Z)(n,2)[1],r=(0,c.useRef)("function"===typeof t?t():t),i=N((function(){var t=r.current;e.current.forEach((function(e){t=e(t)})),e.current=[],r.current=t,a({})}));return[r.current,function(t){e.current.push(t),i()}]}(new Map),Pt=(0,o.Z)(Et,2),Rt=Pt[0],Tt=Pt[1],It=function(t,e,n){return(0,c.useMemo)((function(){for(var n,a=new Map,o=e.get(null===(n=t[0])||void 0===n?void 0:n.key)||E,c=o.left+o.width,r=0;r<t.length;r+=1){var i,l=t[r].key,d=e.get(l);d||(d=e.get(null===(i=t[r-1])||void 0===i?void 0:i.key)||E);var s=a.get(l)||(0,v.Z)({},d);s.right=c-s.left-s.width,a.set(l,s)}return a}),[t.map((function(t){return t.key})).join("_"),e,n])}(l,Rt,ht[0]),zt=U(pt,nt),Lt=U(ht,nt),Nt=U(yt,nt),Mt=U(wt,nt),Bt=zt<Lt+Nt,Ot=Bt?zt-Mt:zt-Nt,Dt="".concat(i,"-nav-operations-hidden"),jt=0,Gt=0;function At(t){return t<jt?jt:t>Gt?Gt:t}nt&&h?(jt=0,Gt=Math.max(0,Lt-Ot)):(jt=Math.min(0,Ot-Lt),Gt=0);var Ht=(0,c.useRef)(),Wt=(0,c.useState)(),Xt=(0,o.Z)(Wt,2),Kt=Xt[0],Ft=Xt[1];function qt(){Ft(Date.now())}function Vt(){window.clearTimeout(Ht.current)}!function(t,e){var n=(0,c.useState)(),a=(0,o.Z)(n,2),r=a[0],i=a[1],l=(0,c.useState)(0),d=(0,o.Z)(l,2),s=d[0],u=d[1],v=(0,c.useState)(0),p=(0,o.Z)(v,2),f=p[0],b=p[1],m=(0,c.useState)(),h=(0,o.Z)(m,2),g=h[0],Z=h[1],k=(0,c.useRef)(),y=(0,c.useRef)(),x=(0,c.useRef)(null);x.current={onTouchStart:function(t){var e=t.touches[0],n=e.screenX,a=e.screenY;i({x:n,y:a}),window.clearInterval(k.current)},onTouchMove:function(t){if(r){t.preventDefault();var n=t.touches[0],a=n.screenX,o=n.screenY;i({x:a,y:o});var c=a-r.x,l=o-r.y;e(c,l);var d=Date.now();u(d),b(d-s),Z({x:c,y:l})}},onTouchEnd:function(){if(r&&(i(null),Z(null),g)){var t=g.x/f,n=g.y/f,a=Math.abs(t),o=Math.abs(n);if(Math.max(a,o)<R)return;var c=t,l=n;k.current=window.setInterval((function(){Math.abs(c)<T&&Math.abs(l)<T?window.clearInterval(k.current):e((c*=z)*I,(l*=z)*I)}),I)}},onWheel:function(t){var n=t.deltaX,a=t.deltaY,o=0,c=Math.abs(n),r=Math.abs(a);c===r?o="x"===y.current?n:a:c>r?(o=n,y.current="x"):(o=a,y.current="y"),e(-o,-o)&&t.preventDefault()}},c.useEffect((function(){function e(t){x.current.onTouchMove(t)}function n(t){x.current.onTouchEnd(t)}return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),t.current.addEventListener("touchstart",(function(t){x.current.onTouchStart(t)}),{passive:!1}),t.current.addEventListener("wheel",(function(t){x.current.onWheel(t)})),function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",n)}}),[])}(Y,(function(t,e){function n(t,e){t((function(t){return At(t+e)}))}return!!Bt&&(nt?n(rt,t):n(st,e),Vt(),qt(),!0)})),(0,c.useEffect)((function(){return Vt(),Kt&&(Ht.current=window.setTimeout((function(){Ft(0)}),100)),Vt}),[Kt]);var Yt=function(t,e,n,a,o,r,i){var l,d,s,u=i.tabs,v=i.tabPosition,p=i.rtl;return["top","bottom"].includes(v)?(l="width",d=p?"right":"left",s=Math.abs(n)):(l="height",d="top",s=-n),(0,c.useMemo)((function(){if(!u.length)return[0,0];for(var n=u.length,a=n,o=0;o<n;o+=1){var c=t.get(u[o].key)||M;if(c[d]+c[l]>s+e){a=o-1;break}}for(var r=0,i=n-1;i>=0;i-=1)if((t.get(u[i].key)||M)[d]<s){r=i+1;break}return r>=a?[0,0]:[r,a]}),[t,e,a,o,r,s,v,u.map((function(t){return t.key})).join("_"),p])}(It,Ot,nt?ct:dt,Lt,Nt,Mt,(0,v.Z)((0,v.Z)({},t),{},{tabs:l})),Qt=(0,o.Z)(Yt,2),Jt=Qt[0],Ut=Qt[1],$t=(0,w.Z)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=It.get(t)||{width:0,height:0,left:0,right:0,top:0};if(nt){var n=ct;h?e.right<ct?n=e.right:e.right+e.width>ct+Ot&&(n=e.right+e.width-Ot):e.left<-ct?n=-e.left:e.left+e.width>-ct+Ot&&(n=-(e.left+e.width-Ot)),st(0),rt(At(n))}else{var a=dt;e.top<-dt?a=-e.top:e.top+e.height>-dt+Ot&&(a=-(e.top+e.height-Ot)),rt(0),st(At(a))}})),te={};"top"===x||"bottom"===x?te[h?"marginRight":"marginLeft"]=L:te.marginTop=L;var ee=l.map((function(t,e){var n=t.key;return c.createElement(V,{id:f,prefixCls:i,key:n,tab:t,style:0===e?void 0:te,closable:t.closable,editable:k,active:n===m,renderWrapper:O,removeAriaLabel:null===y||void 0===y?void 0:y.removeAriaLabel,onClick:function(t){j(n,t)},onFocus:function(){$t(n),qt(),Y.current&&(h||(Y.current.scrollLeft=0),Y.current.scrollTop=0)}})})),ne=function(){return Tt((function(){var t=new Map;return l.forEach((function(e){var n,a=e.key,o=null===(n=$.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(D(a),'"]'));o&&t.set(a,{width:o.offsetWidth,height:o.offsetHeight,left:o.offsetLeft,top:o.offsetTop})})),t}))};(0,c.useEffect)((function(){ne()}),[l.map((function(t){return t.key})).join("_")]);var ae=N((function(){var t=J(X),e=J(K),n=J(F);ft([t[0]-e[0]-n[0],t[1]-e[1]-n[1]]);var a=J(et);xt(a);var o=J(tt);Ct(o);var c=J($);gt([c[0]-a[0],c[1]-a[1]]),ne()})),oe=l.slice(0,Jt),ce=l.slice(Ut+1),re=[].concat((0,S.Z)(oe),(0,S.Z)(ce)),ie=It.get(m),le=Q({activeTabOffset:ie,horizontal:nt,rtl:h,indicatorSize:W}).style;(0,c.useEffect)((function(){$t()}),[m,jt,Gt,B(ie),B(It),nt]),(0,c.useEffect)((function(){ae()}),[h]);var de,se,ue,ve,pe=!!re.length,fe="".concat(i,"-nav-wrap");return nt?h?(se=ct>0,de=ct!==Gt):(de=ct<0,se=ct!==jt):(ue=dt<0,ve=dt!==jt),c.createElement(_.Z,{onResize:ae},c.createElement("div",{ref:(0,C.x1)(e,X),role:"tablist",className:s()("".concat(i,"-nav"),d),style:p,onKeyDown:function(){qt()}},c.createElement(H,{ref:K,position:"left",extra:Z,prefixCls:i}),c.createElement(_.Z,{onResize:ae},c.createElement("div",{className:s()(fe,(n={},(0,a.Z)(n,"".concat(fe,"-ping-left"),de),(0,a.Z)(n,"".concat(fe,"-ping-right"),se),(0,a.Z)(n,"".concat(fe,"-ping-top"),ue),(0,a.Z)(n,"".concat(fe,"-ping-bottom"),ve),n)),ref:Y},c.createElement(_.Z,{onResize:ae},c.createElement("div",{ref:$,className:"".concat(i,"-nav-list"),style:{transform:"translate(".concat(ct,"px, ").concat(dt,"px)"),transition:Kt?"none":void 0}},ee,c.createElement(A,{ref:et,prefixCls:i,locale:y,editable:k,style:(0,v.Z)((0,v.Z)({},0===ee.length?void 0:te),{},{visibility:pe?"hidden":null})}),c.createElement("div",{className:s()("".concat(i,"-ink-bar"),(0,a.Z)({},"".concat(i,"-ink-bar-animated"),b.inkBar)),style:le}))))),c.createElement(q,(0,u.Z)({},t,{removeAriaLabel:null===y||void 0===y?void 0:y.removeAriaLabel,ref:tt,prefixCls:i,tabs:re,className:!pe&&Dt,tabMoving:!!Kt})),c.createElement(H,{ref:F,position:"right",extra:Z,prefixCls:i})))}var tt=c.forwardRef($),et=["renderTabBar"],nt=["label","key"];function at(t){var e=t.renderTabBar,n=(0,f.Z)(t,et),a=c.useContext(g).tabs;return e?e((0,v.Z)((0,v.Z)({},n),{},{panes:a.map((function(t){var e=t.label,n=t.key,a=(0,f.Z)(t,nt);return c.createElement(k,(0,u.Z)({tab:e,key:n,tabKey:n},a))}))}),tt):c.createElement(tt,n)}n(57738);var ot=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicatorSize"],ct=0;function rt(t,e){var n,r=t.id,i=t.prefixCls,l=void 0===i?"rc-tabs":i,d=t.className,h=t.items,Z=t.direction,k=t.activeKey,y=t.defaultActiveKey,S=t.editable,_=t.animated,w=t.tabPosition,C=void 0===w?"top":w,E=t.tabBarGutter,P=t.tabBarStyle,R=t.tabBarExtraContent,T=t.locale,I=t.moreIcon,z=t.moreTransitionName,L=t.destroyInactiveTabPane,N=t.renderTabBar,M=t.onChange,B=t.onTabClick,O=t.onTabScroll,D=t.getPopupContainer,j=t.popupClassName,G=t.indicatorSize,A=(0,f.Z)(t,ot),H=c.useMemo((function(){return(h||[]).filter((function(t){return t&&"object"===(0,p.Z)(t)&&"key"in t}))}),[h]),W="rtl"===Z,X=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(t=!1===e?{inkBar:!1,tabPane:!1}:!0===e?{inkBar:!0,tabPane:!1}:(0,v.Z)({inkBar:!0},"object"===(0,p.Z)(e)?e:{})).tabPaneMotion&&void 0===t.tabPane&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}(_),K=(0,c.useState)(!1),F=(0,o.Z)(K,2),q=F[0],V=F[1];(0,c.useEffect)((function(){V((0,b.Z)())}),[]);var Y=(0,m.Z)((function(){var t;return null===(t=H[0])||void 0===t?void 0:t.key}),{value:k,defaultValue:y}),Q=(0,o.Z)(Y,2),J=Q[0],U=Q[1],$=(0,c.useState)((function(){return H.findIndex((function(t){return t.key===J}))})),tt=(0,o.Z)($,2),et=tt[0],nt=tt[1];(0,c.useEffect)((function(){var t,e=H.findIndex((function(t){return t.key===J}));-1===e&&(e=Math.max(0,Math.min(et,H.length-1)),U(null===(t=H[e])||void 0===t?void 0:t.key));nt(e)}),[H.map((function(t){return t.key})).join("_"),J,et]);var rt=(0,m.Z)(null,{value:r}),it=(0,o.Z)(rt,2),lt=it[0],dt=it[1];(0,c.useEffect)((function(){r||(dt("rc-tabs-".concat(ct)),ct+=1)}),[]);var st={id:lt,activeKey:J,animated:X,tabPosition:C,rtl:W,mobile:q},ut=(0,v.Z)((0,v.Z)({},st),{},{editable:S,locale:T,moreIcon:I,moreTransitionName:z,tabBarGutter:E,onTabClick:function(t,e){null===B||void 0===B||B(t,e);var n=t!==J;U(t),n&&(null===M||void 0===M||M(t))},onTabScroll:O,extra:R,style:P,panes:null,getPopupContainer:D,popupClassName:j,indicatorSize:G});return c.createElement(g.Provider,{value:{tabs:H,prefixCls:l}},c.createElement("div",(0,u.Z)({ref:e,id:r,className:s()(l,"".concat(l,"-").concat(C),(n={},(0,a.Z)(n,"".concat(l,"-mobile"),q),(0,a.Z)(n,"".concat(l,"-editable"),S),(0,a.Z)(n,"".concat(l,"-rtl"),W),n),d)},A),c.createElement(at,(0,u.Z)({},ut,{renderTabBar:N})),c.createElement(x,(0,u.Z)({destroyInactiveTabPane:L},st,{animated:X}))))}var it=c.forwardRef(rt),lt=n(48698),dt=n(76569),st=n(7189),ut={motionAppear:!1,motionEnter:!0,motionLeave:!0};var vt=n(95882),pt=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n};var ft=n(21480),bt=n(70111),mt=n(41157),ht=n(19743),gt=function(t){var e=t.componentCls,n=t.motionDurationSlow;return[(0,a.Z)({},e,(0,a.Z)({},"".concat(e,"-switch"),{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:"opacity ".concat(n)}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:"opacity ".concat(n)}}})),[(0,ht.oN)(t,"slide-up"),(0,ht.oN)(t,"slide-down")]]},Zt=function(t){var e,n,o,c,r,i,l=t.componentCls,d=t.tabsCardPadding,s=t.cardBg,u=t.cardGutter,v=t.colorBorderSecondary,p=t.itemSelectedColor;return(0,a.Z)({},"".concat(l,"-card"),(i={},(0,a.Z)(i,"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(e={},(0,a.Z)(e,"".concat(l,"-tab"),{margin:0,padding:d,background:s,border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(v),transition:"all ".concat(t.motionDurationSlow," ").concat(t.motionEaseInOut)}),(0,a.Z)(e,"".concat(l,"-tab-active"),{color:p,background:t.colorBgContainer}),(0,a.Z)(e,"".concat(l,"-ink-bar"),{visibility:"hidden"}),e)),(0,a.Z)(i,"&".concat(l,"-top, &").concat(l,"-bottom"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(0,a.Z)({},"".concat(l,"-tab + ").concat(l,"-tab"),{marginLeft:{_skip_check_:!0,value:"".concat(u,"px")}}))),(0,a.Z)(i,"&".concat(l,"-top"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(n={},(0,a.Z)(n,"".concat(l,"-tab"),{borderRadius:"".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px 0 0")}),(0,a.Z)(n,"".concat(l,"-tab-active"),{borderBottomColor:t.colorBgContainer}),n))),(0,a.Z)(i,"&".concat(l,"-bottom"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(o={},(0,a.Z)(o,"".concat(l,"-tab"),{borderRadius:"0 0 ".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px")}),(0,a.Z)(o,"".concat(l,"-tab-active"),{borderTopColor:t.colorBgContainer}),o))),(0,a.Z)(i,"&".concat(l,"-left, &").concat(l,"-right"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(0,a.Z)({},"".concat(l,"-tab + ").concat(l,"-tab"),{marginTop:"".concat(u,"px")}))),(0,a.Z)(i,"&".concat(l,"-left"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(c={},(0,a.Z)(c,"".concat(l,"-tab"),{borderRadius:{_skip_check_:!0,value:"".concat(t.borderRadiusLG,"px 0 0 ").concat(t.borderRadiusLG,"px")}}),(0,a.Z)(c,"".concat(l,"-tab-active"),{borderRightColor:{_skip_check_:!0,value:t.colorBgContainer}}),c))),(0,a.Z)(i,"&".concat(l,"-right"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(r={},(0,a.Z)(r,"".concat(l,"-tab"),{borderRadius:{_skip_check_:!0,value:"0 ".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px 0")}}),(0,a.Z)(r,"".concat(l,"-tab-active"),{borderLeftColor:{_skip_check_:!0,value:t.colorBgContainer}}),r))),i))},kt=function(t){var e=t.componentCls,n=t.itemHoverColor,o=t.dropdownEdgeChildVerticalPadding;return(0,a.Z)({},"".concat(e,"-dropdown"),Object.assign(Object.assign({},(0,ft.Wf)(t)),(0,a.Z)({position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:t.zIndexPopup,display:"block","&-hidden":{display:"none"}},"".concat(e,"-dropdown-menu"),{maxHeight:t.tabsDropdownHeight,margin:0,padding:"".concat(o,"px 0"),overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:t.colorBgContainer,backgroundClip:"padding-box",borderRadius:t.borderRadiusLG,outline:"none",boxShadow:t.boxShadowSecondary,"&-item":Object.assign(Object.assign({},ft.vS),{display:"flex",alignItems:"center",minWidth:t.tabsDropdownWidth,margin:0,padding:"".concat(t.paddingXXS,"px ").concat(t.paddingSM,"px"),color:t.colorText,fontWeight:"normal",fontSize:t.fontSize,lineHeight:t.lineHeight,cursor:"pointer",transition:"all ".concat(t.motionDurationSlow),"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:t.marginSM},color:t.colorTextDescription,fontSize:t.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:t.controlItemBgHover},"&-disabled":{"&, &:hover":{color:t.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})})))},yt=function(t){var e,n,o,c,r,i,l,d,s=t.componentCls,u=t.margin,v=t.colorBorderSecondary,p=t.horizontalMargin,f=t.verticalItemPadding,b=t.verticalItemMargin;return d={},(0,a.Z)(d,"".concat(s,"-top, ").concat(s,"-bottom"),(0,a.Z)({flexDirection:"column"},"> ".concat(s,"-nav, > div > ").concat(s,"-nav"),(n={margin:p,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(v),content:"''"}},(0,a.Z)(n,"".concat(s,"-ink-bar"),{height:t.lineWidthBold,"&-animated":{transition:"width ".concat(t.motionDurationSlow,", left ").concat(t.motionDurationSlow,",\n            right ").concat(t.motionDurationSlow)}}),(0,a.Z)(n,"".concat(s,"-nav-wrap"),(e={"&::before, &::after":{top:0,bottom:0,width:t.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:t.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:t.boxShadowTabsOverflowRight}},(0,a.Z)(e,"&".concat(s,"-nav-wrap-ping-left::before"),{opacity:1}),(0,a.Z)(e,"&".concat(s,"-nav-wrap-ping-right::after"),{opacity:1}),e)),n))),(0,a.Z)(d,"".concat(s,"-top"),(0,a.Z)({},"> ".concat(s,"-nav,\n        > div > ").concat(s,"-nav"),(0,a.Z)({"&::before":{bottom:0}},"".concat(s,"-ink-bar"),{bottom:0}))),(0,a.Z)(d,"".concat(s,"-bottom"),(o={},(0,a.Z)(o,"> ".concat(s,"-nav, > div > ").concat(s,"-nav"),(0,a.Z)({order:1,marginTop:"".concat(u,"px"),marginBottom:0,"&::before":{top:0}},"".concat(s,"-ink-bar"),{top:0})),(0,a.Z)(o,"> ".concat(s,"-content-holder, > div > ").concat(s,"-content-holder"),{order:0}),o)),(0,a.Z)(d,"".concat(s,"-left, ").concat(s,"-right"),(0,a.Z)({},"> ".concat(s,"-nav, > div > ").concat(s,"-nav"),(r={flexDirection:"column",minWidth:1.25*t.controlHeight},(0,a.Z)(r,"".concat(s,"-tab"),{padding:f,textAlign:"center"}),(0,a.Z)(r,"".concat(s,"-tab + ").concat(s,"-tab"),{margin:b}),(0,a.Z)(r,"".concat(s,"-nav-wrap"),(c={flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:t.controlHeight},"&::before":{top:0,boxShadow:t.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:t.boxShadowTabsOverflowBottom}},(0,a.Z)(c,"&".concat(s,"-nav-wrap-ping-top::before"),{opacity:1}),(0,a.Z)(c,"&".concat(s,"-nav-wrap-ping-bottom::after"),{opacity:1}),c)),(0,a.Z)(r,"".concat(s,"-ink-bar"),{width:t.lineWidthBold,"&-animated":{transition:"height ".concat(t.motionDurationSlow,", top ").concat(t.motionDurationSlow)}}),(0,a.Z)(r,"".concat(s,"-nav-list, ").concat(s,"-nav-operations"),{flex:"1 0 auto",flexDirection:"column"}),r))),(0,a.Z)(d,"".concat(s,"-left"),(i={},(0,a.Z)(i,"> ".concat(s,"-nav, > div > ").concat(s,"-nav"),(0,a.Z)({},"".concat(s,"-ink-bar"),{right:{_skip_check_:!0,value:0}})),(0,a.Z)(i,"> ".concat(s,"-content-holder, > div > ").concat(s,"-content-holder"),(0,a.Z)({marginLeft:{_skip_check_:!0,value:"-".concat(t.lineWidth,"px")},borderLeft:{_skip_check_:!0,value:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorBorder)}},"> ".concat(s,"-content > ").concat(s,"-tabpane"),{paddingLeft:{_skip_check_:!0,value:t.paddingLG}})),i)),(0,a.Z)(d,"".concat(s,"-right"),(l={},(0,a.Z)(l,"> ".concat(s,"-nav, > div > ").concat(s,"-nav"),(0,a.Z)({order:1},"".concat(s,"-ink-bar"),{left:{_skip_check_:!0,value:0}})),(0,a.Z)(l,"> ".concat(s,"-content-holder, > div > ").concat(s,"-content-holder"),(0,a.Z)({order:0,marginRight:{_skip_check_:!0,value:-t.lineWidth},borderRight:{_skip_check_:!0,value:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorBorder)}},"> ".concat(s,"-content > ").concat(s,"-tabpane"),{paddingRight:{_skip_check_:!0,value:t.paddingLG}})),l)),d},xt=function(t){var e,n,o,c=t.componentCls,r=t.cardPaddingSM,i=t.cardPaddingLG,l=t.horizontalItemPaddingSM,d=t.horizontalItemPaddingLG;return o={},(0,a.Z)(o,c,{"&-small":(0,a.Z)({},"> ".concat(c,"-nav"),(0,a.Z)({},"".concat(c,"-tab"),{padding:l,fontSize:t.titleFontSizeSM})),"&-large":(0,a.Z)({},"> ".concat(c,"-nav"),(0,a.Z)({},"".concat(c,"-tab"),{padding:d,fontSize:t.titleFontSizeLG}))}),(0,a.Z)(o,"".concat(c,"-card"),(n={},(0,a.Z)(n,"&".concat(c,"-small"),(e={},(0,a.Z)(e,"> ".concat(c,"-nav"),(0,a.Z)({},"".concat(c,"-tab"),{padding:r})),(0,a.Z)(e,"&".concat(c,"-bottom"),(0,a.Z)({},"> ".concat(c,"-nav ").concat(c,"-tab"),{borderRadius:"0 0 ".concat(t.borderRadius,"px ").concat(t.borderRadius,"px")})),(0,a.Z)(e,"&".concat(c,"-top"),(0,a.Z)({},"> ".concat(c,"-nav ").concat(c,"-tab"),{borderRadius:"".concat(t.borderRadius,"px ").concat(t.borderRadius,"px 0 0")})),(0,a.Z)(e,"&".concat(c,"-right"),(0,a.Z)({},"> ".concat(c,"-nav ").concat(c,"-tab"),{borderRadius:{_skip_check_:!0,value:"0 ".concat(t.borderRadius,"px ").concat(t.borderRadius,"px 0")}})),(0,a.Z)(e,"&".concat(c,"-left"),(0,a.Z)({},"> ".concat(c,"-nav ").concat(c,"-tab"),{borderRadius:{_skip_check_:!0,value:"".concat(t.borderRadius,"px 0 0 ").concat(t.borderRadius,"px")}})),e)),(0,a.Z)(n,"&".concat(c,"-large"),(0,a.Z)({},"> ".concat(c,"-nav"),(0,a.Z)({},"".concat(c,"-tab"),{padding:i}))),n)),o},St=function(t){var e,n,o,c,r,i=t.componentCls,l=t.tabsHorizontalItemMarginRTL,d=t.iconCls,s=t.cardGutter,u="".concat(i,"-rtl");return r={},(0,a.Z)(r,u,(c={direction:"rtl"},(0,a.Z)(c,"".concat(i,"-nav"),(0,a.Z)({},"".concat(i,"-tab"),(e={margin:{_skip_check_:!0,value:l}},(0,a.Z)(e,"".concat(i,"-tab:last-of-type"),{marginLeft:{_skip_check_:!0,value:0}}),(0,a.Z)(e,d,{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:"".concat(t.marginSM,"px")}}),(0,a.Z)(e,"".concat(i,"-tab-remove"),(0,a.Z)({marginRight:{_skip_check_:!0,value:"".concat(t.marginXS,"px")},marginLeft:{_skip_check_:!0,value:"-".concat(t.marginXXS,"px")}},d,{margin:0})),e))),(0,a.Z)(c,"&".concat(i,"-left"),(n={},(0,a.Z)(n,"> ".concat(i,"-nav"),{order:1}),(0,a.Z)(n,"> ".concat(i,"-content-holder"),{order:0}),n)),(0,a.Z)(c,"&".concat(i,"-right"),(o={},(0,a.Z)(o,"> ".concat(i,"-nav"),{order:0}),(0,a.Z)(o,"> ".concat(i,"-content-holder"),{order:1}),o)),(0,a.Z)(c,"&".concat(i,"-card").concat(i,"-top, &").concat(i,"-card").concat(i,"-bottom"),(0,a.Z)({},"> ".concat(i,"-nav, > div > ").concat(i,"-nav"),(0,a.Z)({},"".concat(i,"-tab + ").concat(i,"-tab"),{marginRight:{_skip_check_:!0,value:s},marginLeft:{_skip_check_:!0,value:0}}))),c)),(0,a.Z)(r,"".concat(i,"-dropdown-rtl"),{direction:"rtl"}),(0,a.Z)(r,"".concat(i,"-menu-item"),(0,a.Z)({},"".concat(i,"-dropdown-rtl"),{textAlign:{_skip_check_:!0,value:"right"}})),r},_t=function(t){var e,n,o,c,r=t.componentCls,i=t.tabsCardPadding,l=t.cardHeight,d=t.cardGutter,s=t.itemHoverColor,u=t.itemActiveColor,v=t.colorBorderSecondary;return c={},(0,a.Z)(c,r,Object.assign(Object.assign(Object.assign(Object.assign({},(0,ft.Wf)(t)),(n={display:"flex"},(0,a.Z)(n,"> ".concat(r,"-nav, > div > ").concat(r,"-nav"),(e={position:"relative",display:"flex",flex:"none",alignItems:"center"},(0,a.Z)(e,"".concat(r,"-nav-wrap"),{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:"opacity ".concat(t.motionDurationSlow),content:"''",pointerEvents:"none"}}),(0,a.Z)(e,"".concat(r,"-nav-list"),{position:"relative",display:"flex",transition:"opacity ".concat(t.motionDurationSlow)}),(0,a.Z)(e,"".concat(r,"-nav-operations"),{display:"flex",alignSelf:"stretch"}),(0,a.Z)(e,"".concat(r,"-nav-operations-hidden"),{position:"absolute",visibility:"hidden",pointerEvents:"none"}),(0,a.Z)(e,"".concat(r,"-nav-more"),{position:"relative",padding:i,background:"transparent",border:0,color:t.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:t.controlHeightLG/8,transform:"translateY(100%)",content:"''"}}),(0,a.Z)(e,"".concat(r,"-nav-add"),Object.assign({minWidth:l,marginLeft:{_skip_check_:!0,value:d},padding:"0 ".concat(t.paddingXS,"px"),background:"transparent",border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(v),borderRadius:"".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px 0 0"),outline:"none",cursor:"pointer",color:t.colorText,transition:"all ".concat(t.motionDurationSlow," ").concat(t.motionEaseInOut),"&:hover":{color:s},"&:active, &:focus:not(:focus-visible)":{color:u}},(0,ft.Qy)(t))),e)),(0,a.Z)(n,"".concat(r,"-extra-content"),{flex:"none"}),(0,a.Z)(n,"".concat(r,"-ink-bar"),{position:"absolute",background:t.inkBarColor,pointerEvents:"none"}),n)),function(t){var e,n,o=t.componentCls,c=t.itemActiveColor,r=t.itemHoverColor,i=t.iconCls,l=t.tabsHorizontalItemMargin,d=t.horizontalItemPadding,s=t.itemSelectedColor,u=t.itemColor,v="".concat(o,"-tab");return n={},(0,a.Z)(n,v,(e={position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:d,fontSize:t.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:u,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:c}},(0,ft.Qy)(t)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-t.marginXXS},marginLeft:{_skip_check_:!0,value:t.marginXS},color:t.colorTextDescription,fontSize:t.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:"all ".concat(t.motionDurationSlow),"&:hover":{color:t.colorTextHeading}},"&:hover":{color:r}},(0,a.Z)(e,"&".concat(v,"-active ").concat(v,"-btn"),{color:s,textShadow:t.tabsActiveTextShadow}),(0,a.Z)(e,"&".concat(v,"-disabled"),{color:t.colorTextDisabled,cursor:"not-allowed"}),(0,a.Z)(e,"&".concat(v,"-disabled ").concat(v,"-btn, &").concat(v,"-disabled ").concat(o,"-remove"),{"&:focus, &:active":{color:t.colorTextDisabled}}),(0,a.Z)(e,"& ".concat(v,"-remove ").concat(i),{margin:0}),(0,a.Z)(e,i,{marginRight:{_skip_check_:!0,value:t.marginSM}}),e)),(0,a.Z)(n,"".concat(v," + ").concat(v),{margin:{_skip_check_:!0,value:l}}),n}(t)),(o={},(0,a.Z)(o,"".concat(r,"-content"),{position:"relative",width:"100%"}),(0,a.Z)(o,"".concat(r,"-content-holder"),{flex:"auto",minWidth:0,minHeight:0}),(0,a.Z)(o,"".concat(r,"-tabpane"),{outline:"none","&-hidden":{display:"none"}}),o))),(0,a.Z)(c,"".concat(r,"-centered"),(0,a.Z)({},"> ".concat(r,"-nav, > div > ").concat(r,"-nav"),(0,a.Z)({},"".concat(r,"-nav-wrap"),(0,a.Z)({},"&:not([class*='".concat(r,"-nav-wrap-ping'])"),{justifyContent:"center"})))),c},wt=(0,bt.Z)("Tabs",(function(t){var e=(0,mt.TS)(t,{tabsCardPadding:t.cardPadding||"".concat((t.cardHeight-Math.round(t.fontSize*t.lineHeight))/2-t.lineWidth,"px ").concat(t.padding,"px"),dropdownEdgeChildVerticalPadding:t.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:"0 0 0 ".concat(t.horizontalItemGutter,"px"),tabsHorizontalItemMarginRTL:"0 0 0 ".concat(t.horizontalItemGutter,"px")});return[xt(e),St(e),yt(e),kt(e),Zt(e),_t(e),gt(e)]}),(function(t){var e=t.controlHeightLG;return{zIndexPopup:t.zIndexPopupBase+50,cardBg:t.colorFillAlter,cardHeight:e,cardPadding:"",cardPaddingSM:"".concat(1.5*t.paddingXXS,"px ").concat(t.padding,"px"),cardPaddingLG:"".concat(t.paddingXS,"px ").concat(t.padding,"px ").concat(1.5*t.paddingXXS,"px"),titleFontSize:t.fontSize,titleFontSizeLG:t.fontSizeLG,titleFontSizeSM:t.fontSize,inkBarColor:t.colorPrimary,horizontalMargin:"0 0 ".concat(t.margin,"px 0"),horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:"".concat(t.paddingSM,"px 0"),horizontalItemPaddingSM:"".concat(t.paddingXS,"px 0"),horizontalItemPaddingLG:"".concat(t.padding,"px 0"),verticalItemPadding:"".concat(t.paddingXS,"px ").concat(t.paddingLG,"px"),verticalItemMargin:"".concat(t.margin,"px 0 0 0"),itemColor:t.colorText,itemSelectedColor:t.colorPrimary,itemHoverColor:t.colorPrimaryHover,itemActiveColor:t.colorPrimaryActive,cardGutter:t.marginXXS/2}}));var Ct=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n},Et=function(t){var e,n,d=t.type,u=t.className,v=t.rootClassName,p=t.size,f=t.onEdit,b=t.hideAdd,m=t.centered,h=t.addIcon,g=t.popupClassName,Z=t.children,k=t.items,y=t.animated,x=t.style,S=t.indicatorSize,_=Ct(t,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated","style","indicatorSize"]),w=_.prefixCls,C=_.moreIcon,E=void 0===C?c.createElement(i.Z,null):C,P=c.useContext(lt.E_),R=P.direction,T=P.tabs,I=P.getPrefixCls,z=P.getPopupContainer,L=I("tabs",w),N=wt(L),M=(0,o.Z)(N,2),B=M[0],O=M[1];"editable-card"===d&&(n={onEdit:function(t,e){var n=e.key,a=e.event;null===f||void 0===f||f("add"===t?a:n,t)},removeIcon:c.createElement(r.Z,null),addIcon:h||c.createElement(l.Z,null),showAdd:!0!==b});var D=I(),j=function(t,e){return t||function(t){return t.filter((function(t){return t}))}((0,vt.Z)(e).map((function(t){if(c.isValidElement(t)){var e=t.key,n=t.props||{},a=n.tab,o=pt(n,["tab"]);return Object.assign(Object.assign({key:String(e)},o),{label:a})}return null})))}(k,Z),G=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(e=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"===typeof n?n:{})).tabPane&&(e.tabPaneMotion=Object.assign(Object.assign({},ut),{motionName:(0,st.m)(t,"switch")})),e}(L,y),A=(0,dt.Z)(p),H=Object.assign(Object.assign({},null===T||void 0===T?void 0:T.style),x);return B(c.createElement(it,Object.assign({direction:R,getPopupContainer:z,moreTransitionName:"".concat(D,"-slide-up")},_,{items:j,className:s()((e={},(0,a.Z)(e,"".concat(L,"-").concat(A),A),(0,a.Z)(e,"".concat(L,"-card"),["card","editable-card"].includes(d)),(0,a.Z)(e,"".concat(L,"-editable-card"),"editable-card"===d),(0,a.Z)(e,"".concat(L,"-centered"),m),e),null===T||void 0===T?void 0:T.className,u,v,O),popupClassName:s()(g,O),style:H,editable:n,moreIcon:E,prefixCls:L,animated:G,indicatorSize:null!==S&&void 0!==S?S:null===T||void 0===T?void 0:T.indicatorSize})))};Et.TabPane=function(){return null};var Pt=Et}}]);
//# sourceMappingURL=110.4c990d8f.chunk.js.map