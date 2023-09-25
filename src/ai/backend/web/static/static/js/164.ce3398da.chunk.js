"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[164],{48841:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(87462),o=t(4519),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},l=t(9491),u=function(e,n){return o.createElement(l.Z,(0,r.Z)({},e,{ref:n,icon:i}))};var a=o.forwardRef(u)},14693:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(29439),o=t(4519);function i(){var e=o.useReducer((function(e){return e+1}),0);return(0,r.Z)(e,2)[1]}},66592:function(e,n,t){var r=t(4519),o=t(47878),i=t(14693),l=t(21971);n.Z=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=(0,r.useRef)({}),t=(0,i.Z)(),u=(0,l.ZP)();return(0,o.Z)((function(){var r=u.subscribe((function(r){n.current=r,e&&t()}));return function(){return u.unsubscribe(r)}}),[]),n.current}},92434:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(87462),o=t(4942),i=t(29439),l=t(44925),u=t(52590),a=t(43270),c=t.n(a),s=t(20742),f=t(4519),d=t(33714),v=t(72058),p=d.Z.ESC,m=d.Z.TAB;var b=(0,f.forwardRef)((function(e,n){var t=e.overlay,r=e.arrow,o=e.prefixCls,i=(0,f.useMemo)((function(){return"function"===typeof t?t():t}),[t]),l=(0,s.sQ)(n,null===i||void 0===i?void 0:i.ref);return f.createElement(f.Fragment,null,r&&f.createElement("div",{className:"".concat(o,"-arrow")}),f.cloneElement(i,{ref:(0,s.Yr)(i)?l:void 0}))})),h={adjustX:1,adjustY:1},y=[0,0],Z={topLeft:{points:["bl","tl"],overflow:h,offset:[0,-4],targetOffset:y},top:{points:["bc","tc"],overflow:h,offset:[0,-4],targetOffset:y},topRight:{points:["br","tr"],overflow:h,offset:[0,-4],targetOffset:y},bottomLeft:{points:["tl","bl"],overflow:h,offset:[0,4],targetOffset:y},bottom:{points:["tc","bc"],overflow:h,offset:[0,4],targetOffset:y},bottomRight:{points:["tr","br"],overflow:h,offset:[0,4],targetOffset:y}},g=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function C(e,n){var t,a=e.arrow,d=void 0!==a&&a,h=e.prefixCls,y=void 0===h?"rc-dropdown":h,C=e.transitionName,E=e.animation,w=e.align,M=e.placement,k=void 0===M?"bottomLeft":M,R=e.placements,P=void 0===R?Z:R,S=e.getPopupContainer,N=e.showAction,x=e.hideAction,I=e.overlayClassName,K=e.overlayStyle,O=e.visible,A=e.trigger,T=void 0===A?["hover"]:A,L=e.autoFocus,D=e.overlay,_=e.children,V=e.onVisibleChange,z=(0,l.Z)(e,g),F=f.useState(),j=(0,i.Z)(F,2),B=j[0],W=j[1],H="visible"in e?O:B,q=f.useRef(null),Y=f.useRef(null),X=f.useRef(null);f.useImperativeHandle(n,(function(){return q.current}));var G=function(e){W(e),null===V||void 0===V||V(e)};!function(e){var n=e.visible,t=e.triggerRef,r=e.onVisibleChange,o=e.autoFocus,i=e.overlayRef,l=f.useRef(!1),u=function(){var e,o;n&&(null===(e=t.current)||void 0===e||null===(o=e.focus)||void 0===o||o.call(e),null===r||void 0===r||r(!1))},a=function(){var e;return!(null===(e=i.current)||void 0===e||!e.focus)&&(i.current.focus(),l.current=!0,!0)},c=function(e){switch(e.keyCode){case p:u();break;case m:var n=!1;l.current||(n=a()),n?e.preventDefault():u()}};f.useEffect((function(){return n?(window.addEventListener("keydown",c),o&&(0,v.Z)(a,3),function(){window.removeEventListener("keydown",c),l.current=!1}):function(){l.current=!1}}),[n])}({visible:H,triggerRef:X,onVisibleChange:G,autoFocus:L,overlayRef:Y});var Q=function(){return f.createElement(b,{ref:Y,overlay:D,prefixCls:y,arrow:d})},U=f.cloneElement(_,{className:c()(null===(t=_.props)||void 0===t?void 0:t.className,H&&function(){var n=e.openClassName;return void 0!==n?n:"".concat(y,"-open")}()),ref:(0,s.Yr)(_)?(0,s.sQ)(X,_.ref):void 0}),J=x;return J||-1===T.indexOf("contextMenu")||(J=["click"]),f.createElement(u.Z,(0,r.Z)({builtinPlacements:P},z,{prefixCls:y,ref:q,popupClassName:c()(I,(0,o.Z)({},"".concat(y,"-show-arrow"),d)),popupStyle:K,action:T,showAction:N,hideAction:J,popupPlacement:k,popupAlign:w,popupTransitionName:C,popupAnimation:E,popupVisible:H,stretch:function(){var n=e.minOverlayWidthMatchTrigger,t=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?n:!t}()?"minWidth":"",popup:"function"===typeof D?Q:Q(),onPopupVisibleChange:G,onPopupClick:function(n){var t=e.onOverlayClick;W(!1),t&&t(n)},getPopupContainer:S}),U)}var E=f.forwardRef(C)},571:function(e,n,t){t.d(n,{iz:function(){return Be},ck:function(){return ye},BW:function(){return je},sN:function(){return ye},Wd:function(){return De},ZP:function(){return Ue},Xl:function(){return S}});var r=t(87462),o=t(4942),i=t(1413),l=t(93433),u=t(29439),a=t(44925),c=t(43270),s=t.n(c),f=t(14937),d=t(269),v=t(57738),p=t(4519),m=t(84453),b=t(53751),h=p.createContext(null);function y(e,n){return void 0===e?null:"".concat(e,"-").concat(n)}function Z(e){return y(p.useContext(h),e)}var g=t(51970),C=["children","locked"],E=p.createContext(null);function w(e){var n=e.children,t=e.locked,r=(0,a.Z)(e,C),o=p.useContext(E),l=(0,g.Z)((function(){return function(e,n){var t=(0,i.Z)({},e);return Object.keys(n).forEach((function(e){var r=n[e];void 0!==r&&(t[e]=r)})),t}(o,r)}),[o,r],(function(e,n){return!t&&(e[0]!==n[0]||!(0,b.Z)(e[1],n[1],!0))}));return p.createElement(E.Provider,{value:l},n)}var M=[],k=p.createContext(null);function R(){return p.useContext(k)}var P=p.createContext(M);function S(e){var n=p.useContext(P);return p.useMemo((function(){return void 0!==e?[].concat((0,l.Z)(n),[e]):n}),[n,e])}var N=p.createContext(null),x=p.createContext({}),I=t(33714),K=t(72058),O=t(52145);function A(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,O.Z)(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||"a"===t&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),i=Number(o),l=null;return o&&!Number.isNaN(i)?l=i:r&&null===l&&(l=0),r&&e.disabled&&(l=null),null!==l&&(l>=0||n&&l<0)}return!1}function T(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,l.Z)(e.querySelectorAll("*")).filter((function(e){return A(e,n)}));return A(e,n)&&t.unshift(e),t}var L=I.Z.LEFT,D=I.Z.RIGHT,_=I.Z.UP,V=I.Z.DOWN,z=I.Z.ENTER,F=I.Z.ESC,j=I.Z.HOME,B=I.Z.END,W=[_,V,L,D];function H(e,n){return T(e,!0).filter((function(e){return n.has(e)}))}function q(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var o=H(e,n),i=o.length,l=o.findIndex((function(e){return t===e}));return r<0?-1===l?l=i-1:l-=1:r>0&&(l+=1),o[l=(l+i)%i]}function Y(e,n,t,r,i,l,u,a,c,s){var f=p.useRef(),d=p.useRef();d.current=n;var v=function(){K.Z.cancel(f.current)};return p.useEffect((function(){return function(){v()}}),[]),function(p){var m=p.which;if([].concat(W,[z,F,j,B]).includes(m)){var b,h,Z,g=function(){return b=new Set,h=new Map,Z=new Map,l().forEach((function(e){var n=document.querySelector("[data-menu-id='".concat(y(r,e),"']"));n&&(b.add(n),Z.set(n,e),h.set(e,n))})),b};g();var C=function(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}(h.get(n),b),E=Z.get(C),w=function(e,n,t,r){var i,l,u,a,c="prev",s="next",f="children",d="parent";if("inline"===e&&r===z)return{inlineTrigger:!0};var v=(i={},(0,o.Z)(i,_,c),(0,o.Z)(i,V,s),i),p=(l={},(0,o.Z)(l,L,t?s:c),(0,o.Z)(l,D,t?c:s),(0,o.Z)(l,V,f),(0,o.Z)(l,z,f),l),m=(u={},(0,o.Z)(u,_,c),(0,o.Z)(u,V,s),(0,o.Z)(u,z,f),(0,o.Z)(u,F,d),(0,o.Z)(u,L,t?f:d),(0,o.Z)(u,D,t?d:f),u);switch(null===(a={inline:v,horizontal:p,vertical:m,inlineSub:v,horizontalSub:m,verticalSub:m}["".concat(e).concat(n?"":"Sub")])||void 0===a?void 0:a[r]){case c:return{offset:-1,sibling:!0};case s:return{offset:1,sibling:!0};case d:return{offset:-1,sibling:!1};case f:return{offset:1,sibling:!1};default:return null}}(e,1===u(E,!0).length,t,m);if(!w&&m!==j&&m!==B)return;(W.includes(m)||[j,B].includes(m))&&p.preventDefault();var M=function(e){if(e){var n=e,t=e.querySelector("a");null!==t&&void 0!==t&&t.getAttribute("href")&&(n=t);var r=Z.get(e);a(r),v(),f.current=(0,K.Z)((function(){d.current===r&&n.focus()}))}};if([j,B].includes(m)||w.sibling||!C){var k,R,P=H(k=C&&"inline"!==e?function(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(C):i.current,b);R=m===j?P[0]:m===B?P[P.length-1]:q(k,b,C,w.offset),M(R)}else if(w.inlineTrigger)c(E);else if(w.offset>0)c(E,!0),v(),f.current=(0,K.Z)((function(){g();var e=C.getAttribute("aria-controls"),n=q(document.getElementById(e),b);M(n)}),5);else if(w.offset<0){var S=u(E,!0),N=S[S.length-2],x=h.get(N);c(N,!1),M(x)}}null===s||void 0===s||s(p)}}var X="__RC_UTIL_PATH_SPLIT__",G=function(e){return e.join(X)},Q="rc-menu-more";function U(){var e=p.useState({}),n=(0,u.Z)(e,2)[1],t=(0,p.useRef)(new Map),r=(0,p.useRef)(new Map),o=p.useState([]),i=(0,u.Z)(o,2),a=i[0],c=i[1],s=(0,p.useRef)(0),f=(0,p.useRef)(!1),d=(0,p.useCallback)((function(e,o){var i=G(o);r.current.set(i,e),t.current.set(e,i),s.current+=1;var l,u=s.current;l=function(){u===s.current&&(f.current||n({}))},Promise.resolve().then(l)}),[]),v=(0,p.useCallback)((function(e,n){var o=G(n);r.current.delete(o),t.current.delete(e)}),[]),m=(0,p.useCallback)((function(e){c(e)}),[]),b=(0,p.useCallback)((function(e,n){var r=t.current.get(e)||"",o=r.split(X);return n&&a.includes(o[0])&&o.unshift(Q),o}),[a]),h=(0,p.useCallback)((function(e,n){return e.some((function(e){return b(e,!0).includes(n)}))}),[b]),y=(0,p.useCallback)((function(e){var n="".concat(t.current.get(e)).concat(X),o=new Set;return(0,l.Z)(r.current.keys()).forEach((function(e){e.startsWith(n)&&o.add(r.current.get(e))})),o}),[]);return p.useEffect((function(){return function(){f.current=!0}}),[]),{registerPath:d,unregisterPath:v,refreshOverflowKeys:m,isSubPathKey:h,getKeyPath:b,getKeys:function(){var e=(0,l.Z)(t.current.keys());return a.length&&e.push(Q),e},getSubPathKeys:y}}function J(e){var n=p.useRef(e);n.current=e;var t=p.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return e?t:void 0}var $=Math.random().toFixed(5).toString().slice(2),ee=0;var ne=t(15671),te=t(43144),re=t(60136),oe=t(29388),ie=t(34325),le=t(20742);function ue(e,n,t,r){var o=p.useContext(E),i=o.activeKey,l=o.onActive,u=o.onInactive,a={active:i===e};return n||(a.onMouseEnter=function(n){null===t||void 0===t||t({key:e,domEvent:n}),l(e)},a.onMouseLeave=function(n){null===r||void 0===r||r({key:e,domEvent:n}),u(e)}),a}function ae(e){var n=p.useContext(E),t=n.mode,r=n.rtl,o=n.inlineIndent;if("inline"!==t)return null;return r?{paddingRight:e*o}:{paddingLeft:e*o}}function ce(e){var n,t=e.icon,r=e.props,o=e.children;return null===t||!1===t?null:("function"===typeof t?n=p.createElement(t,(0,i.Z)({},r)):"boolean"!==typeof t&&(n=t),n||o||null)}var se=["item"];function fe(e){var n=e.item,t=(0,a.Z)(e,se);return Object.defineProperty(t,"item",{get:function(){return(0,v.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var de=["title","attribute","elementRef"],ve=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],pe=["active"],me=function(e){(0,re.Z)(t,e);var n=(0,oe.Z)(t);function t(){return(0,ne.Z)(this,t),n.apply(this,arguments)}return(0,te.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.attribute,o=e.elementRef,i=(0,a.Z)(e,de),l=(0,ie.Z)(i,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,v.ZP)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),p.createElement(f.Z.Item,(0,r.Z)({},t,{title:"string"===typeof n?n:void 0},l,{ref:o}))}}]),t}(p.Component),be=p.forwardRef((function(e,n){var t,u=e.style,c=e.className,f=e.eventKey,d=(e.warnKey,e.disabled),v=e.itemIcon,m=e.children,b=e.role,h=e.onMouseEnter,y=e.onMouseLeave,g=e.onClick,C=e.onKeyDown,w=e.onFocus,M=(0,a.Z)(e,ve),k=Z(f),R=p.useContext(E),P=R.prefixCls,N=R.onItemClick,K=R.disabled,O=R.overflowDisabled,A=R.itemIcon,T=R.selectedKeys,L=R.onActive,D=p.useContext(x)._internalRenderMenuItem,_="".concat(P,"-item"),V=p.useRef(),z=p.useRef(),F=K||d,j=(0,le.x1)(n,z),B=S(f);var W=function(e){return{key:f,keyPath:(0,l.Z)(B).reverse(),item:V.current,domEvent:e}},H=v||A,q=ue(f,F,h,y),Y=q.active,X=(0,a.Z)(q,pe),G=T.includes(f),Q=ae(B.length),U={};"option"===e.role&&(U["aria-selected"]=G);var J=p.createElement(me,(0,r.Z)({ref:V,elementRef:j,role:null===b?"none":b||"menuitem",tabIndex:d?null:-1,"data-menu-id":O&&k?null:k},M,X,U,{component:"li","aria-disabled":d,style:(0,i.Z)((0,i.Z)({},Q),u),className:s()(_,(t={},(0,o.Z)(t,"".concat(_,"-active"),Y),(0,o.Z)(t,"".concat(_,"-selected"),G),(0,o.Z)(t,"".concat(_,"-disabled"),F),t),c),onClick:function(e){if(!F){var n=W(e);null===g||void 0===g||g(fe(n)),N(n)}},onKeyDown:function(e){if(null===C||void 0===C||C(e),e.which===I.Z.ENTER){var n=W(e);null===g||void 0===g||g(fe(n)),N(n)}},onFocus:function(e){L(f),null===w||void 0===w||w(e)}}),m,p.createElement(ce,{props:(0,i.Z)((0,i.Z)({},e),{},{isSelected:G}),icon:H}));return D&&(J=D(J,e,{selected:G})),J}));function he(e,n){var t=e.eventKey,o=R(),i=S(t);return p.useEffect((function(){if(o)return o.registerPath(t,i),function(){o.unregisterPath(t,i)}}),[i]),o?null:p.createElement(be,(0,r.Z)({},e,{ref:n}))}var ye=p.forwardRef(he),Ze=["className","children"],ge=function(e,n){var t=e.className,o=e.children,i=(0,a.Z)(e,Ze),l=p.useContext(E),u=l.prefixCls,c=l.mode,f=l.rtl;return p.createElement("ul",(0,r.Z)({className:s()(u,f&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat("inline"===c?"inline":"vertical"),t),role:"menu"},i,{"data-menu-list":!0,ref:n}),o)},Ce=p.forwardRef(ge);Ce.displayName="SubMenuList";var Ee=Ce,we=t(95882);function Me(e,n){return(0,we.Z)(e).map((function(e,t){if(p.isValidElement(e)){var r,o,i=e.key,u=null!==(r=null===(o=e.props)||void 0===o?void 0:o.eventKey)&&void 0!==r?r:i;(null===u||void 0===u)&&(u="tmp_key-".concat([].concat((0,l.Z)(n),[t]).join("-")));var a={key:u,eventKey:u};return p.cloneElement(e,a)}return e}))}var ke=t(52590),Re={adjustX:1,adjustY:1},Pe={topLeft:{points:["bl","tl"],overflow:Re},topRight:{points:["br","tr"],overflow:Re},bottomLeft:{points:["tl","bl"],overflow:Re},bottomRight:{points:["tr","br"],overflow:Re},leftTop:{points:["tr","tl"],overflow:Re},leftBottom:{points:["br","bl"],overflow:Re},rightTop:{points:["tl","tr"],overflow:Re},rightBottom:{points:["bl","br"],overflow:Re}},Se={topLeft:{points:["bl","tl"],overflow:Re},topRight:{points:["br","tr"],overflow:Re},bottomLeft:{points:["tl","bl"],overflow:Re},bottomRight:{points:["tr","br"],overflow:Re},rightTop:{points:["tr","tl"],overflow:Re},rightBottom:{points:["br","bl"],overflow:Re},leftTop:{points:["tl","tr"],overflow:Re},leftBottom:{points:["bl","br"],overflow:Re}};function Ne(e,n,t){return n||(t?t[e]||t.other:void 0)}var xe={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Ie(e){var n=e.prefixCls,t=e.visible,r=e.children,l=e.popup,a=e.popupStyle,c=e.popupClassName,f=e.popupOffset,d=e.disabled,v=e.mode,m=e.onVisibleChange,b=p.useContext(E),h=b.getPopupContainer,y=b.rtl,Z=b.subMenuOpenDelay,g=b.subMenuCloseDelay,C=b.builtinPlacements,w=b.triggerSubMenuAction,M=b.forceSubMenuRender,k=b.rootClassName,R=b.motion,P=b.defaultMotions,S=p.useState(!1),N=(0,u.Z)(S,2),x=N[0],I=N[1],O=y?(0,i.Z)((0,i.Z)({},Se),C):(0,i.Z)((0,i.Z)({},Pe),C),A=xe[v],T=Ne(v,R,P),L=p.useRef(T);"inline"!==v&&(L.current=T);var D=(0,i.Z)((0,i.Z)({},L.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),_=p.useRef();return p.useEffect((function(){return _.current=(0,K.Z)((function(){I(t)})),function(){K.Z.cancel(_.current)}}),[t]),p.createElement(ke.Z,{prefixCls:n,popupClassName:s()("".concat(n,"-popup"),(0,o.Z)({},"".concat(n,"-rtl"),y),c,k),stretch:"horizontal"===v?"minWidth":null,getPopupContainer:h,builtinPlacements:O,popupPlacement:A,popupVisible:x,popup:l,popupStyle:a,popupAlign:f&&{offset:f},action:d?[]:[w],mouseEnterDelay:Z,mouseLeaveDelay:g,onPopupVisibleChange:m,forceRender:M,popupMotion:D},r)}var Ke=t(56114);function Oe(e){var n=e.id,t=e.open,o=e.keyPath,l=e.children,a="inline",c=p.useContext(E),s=c.prefixCls,f=c.forceSubMenuRender,d=c.motion,v=c.defaultMotions,m=c.mode,b=p.useRef(!1);b.current=m===a;var h=p.useState(!b.current),y=(0,u.Z)(h,2),Z=y[0],g=y[1],C=!!b.current&&t;p.useEffect((function(){b.current&&g(!1)}),[m]);var M=(0,i.Z)({},Ne(a,d,v));o.length>1&&(M.motionAppear=!1);var k=M.onVisibleChanged;return M.onVisibleChanged=function(e){return b.current||e||g(!0),null===k||void 0===k?void 0:k(e)},Z?null:p.createElement(w,{mode:a,locked:!b.current},p.createElement(Ke.ZP,(0,r.Z)({visible:C},M,{forceRender:f,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),(function(e){var t=e.className,r=e.style;return p.createElement(Ee,{id:n,className:t,style:r},l)})))}var Ae=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Te=["active"],Le=function(e){var n,t=e.style,l=e.className,c=e.title,d=e.eventKey,v=(e.warnKey,e.disabled),m=e.internalPopupClose,b=e.children,h=e.itemIcon,y=e.expandIcon,g=e.popupClassName,C=e.popupOffset,M=e.popupStyle,k=e.onClick,R=e.onMouseEnter,P=e.onMouseLeave,I=e.onTitleClick,K=e.onTitleMouseEnter,O=e.onTitleMouseLeave,A=(0,a.Z)(e,Ae),T=Z(d),L=p.useContext(E),D=L.prefixCls,_=L.mode,V=L.openKeys,z=L.disabled,F=L.overflowDisabled,j=L.activeKey,B=L.selectedKeys,W=L.itemIcon,H=L.expandIcon,q=L.onItemClick,Y=L.onOpenChange,X=L.onActive,G=p.useContext(x)._internalRenderSubMenuItem,Q=p.useContext(N).isSubPathKey,U=S(),$="".concat(D,"-submenu"),ee=z||v,ne=p.useRef(),te=p.useRef();var re=null!==h&&void 0!==h?h:W,oe=null!==y&&void 0!==y?y:H,ie=V.includes(d),le=!F&&ie,se=Q(B,d),de=ue(d,ee,K,O),ve=de.active,pe=(0,a.Z)(de,Te),me=p.useState(!1),be=(0,u.Z)(me,2),he=be[0],ye=be[1],Ze=function(e){ee||ye(e)},ge=p.useMemo((function(){return ve||"inline"!==_&&(he||Q([j],d))}),[_,ve,j,he,d,Q]),Ce=ae(U.length),we=J((function(e){null===k||void 0===k||k(fe(e)),q(e)})),Me=T&&"".concat(T,"-popup"),ke=p.createElement("div",(0,r.Z)({role:"menuitem",style:Ce,className:"".concat($,"-title"),tabIndex:ee?null:-1,ref:ne,title:"string"===typeof c?c:null,"data-menu-id":F&&T?null:T,"aria-expanded":le,"aria-haspopup":!0,"aria-controls":Me,"aria-disabled":ee,onClick:function(e){ee||(null===I||void 0===I||I({key:d,domEvent:e}),"inline"===_&&Y(d,!ie))},onFocus:function(){X(d)}},pe),c,p.createElement(ce,{icon:"horizontal"!==_?oe:void 0,props:(0,i.Z)((0,i.Z)({},e),{},{isOpen:le,isSubMenu:!0})},p.createElement("i",{className:"".concat($,"-arrow")}))),Re=p.useRef(_);if("inline"!==_&&U.length>1?Re.current="vertical":Re.current=_,!F){var Pe=Re.current;ke=p.createElement(Ie,{mode:Pe,prefixCls:$,visible:!m&&le&&"inline"!==_,popupClassName:g,popupOffset:C,popupStyle:M,popup:p.createElement(w,{mode:"horizontal"===Pe?"vertical":Pe},p.createElement(Ee,{id:Me,ref:te},b)),disabled:ee,onVisibleChange:function(e){"inline"!==_&&Y(d,e)}},ke)}var Se=p.createElement(f.Z.Item,(0,r.Z)({role:"none"},A,{component:"li",style:t,className:s()($,"".concat($,"-").concat(_),l,(n={},(0,o.Z)(n,"".concat($,"-open"),le),(0,o.Z)(n,"".concat($,"-active"),ge),(0,o.Z)(n,"".concat($,"-selected"),se),(0,o.Z)(n,"".concat($,"-disabled"),ee),n)),onMouseEnter:function(e){Ze(!0),null===R||void 0===R||R({key:d,domEvent:e})},onMouseLeave:function(e){Ze(!1),null===P||void 0===P||P({key:d,domEvent:e})}}),ke,!F&&p.createElement(Oe,{id:Me,open:le,keyPath:U},b));return G&&(Se=G(Se,e,{selected:se,active:ge,open:le,disabled:ee})),p.createElement(w,{onItemClick:we,mode:"horizontal"===_?"vertical":_,itemIcon:re,expandIcon:oe},Se)};function De(e){var n,t=e.eventKey,r=e.children,o=S(t),i=Me(r,o),l=R();return p.useEffect((function(){if(l)return l.registerPath(t,o),function(){l.unregisterPath(t,o)}}),[o]),n=l?i:p.createElement(Le,e,i),p.createElement(P.Provider,{value:o},n)}var _e=t(71002),Ve=["className","title","eventKey","children"],ze=["children"],Fe=function(e){var n=e.className,t=e.title,o=(e.eventKey,e.children),i=(0,a.Z)(e,Ve),l=p.useContext(E).prefixCls,u="".concat(l,"-item-group");return p.createElement("li",(0,r.Z)({role:"presentation"},i,{onClick:function(e){return e.stopPropagation()},className:s()(u,n)}),p.createElement("div",{role:"presentation",className:"".concat(u,"-title"),title:"string"===typeof t?t:void 0},t),p.createElement("ul",{role:"group",className:"".concat(u,"-list")},o))};function je(e){var n=e.children,t=(0,a.Z)(e,ze),r=Me(n,S(t.eventKey));return R()?r:p.createElement(Fe,(0,ie.Z)(t,["warnKey"]),r)}function Be(e){var n=e.className,t=e.style,r=p.useContext(E).prefixCls;return R()?null:p.createElement("li",{role:"separator",className:s()("".concat(r,"-item-divider"),n),style:t})}var We=["label","children","key","type"];function He(e){return(e||[]).map((function(e,n){if(e&&"object"===(0,_e.Z)(e)){var t=e,o=t.label,i=t.children,l=t.key,u=t.type,c=(0,a.Z)(t,We),s=null!==l&&void 0!==l?l:"tmp-".concat(n);return i||"group"===u?"group"===u?p.createElement(je,(0,r.Z)({key:s},c,{title:o}),He(i)):p.createElement(De,(0,r.Z)({key:s},c,{title:o}),He(i)):"divider"===u?p.createElement(Be,(0,r.Z)({key:s},c)):p.createElement(ye,(0,r.Z)({key:s},c),o)}return null})).filter((function(e){return e}))}function qe(e,n,t){var r=e;return n&&(r=He(n)),Me(r,t)}var Ye=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Xe=[],Ge=p.forwardRef((function(e,n){var t,c,v=e,Z=v.prefixCls,g=void 0===Z?"rc-menu":Z,C=v.rootClassName,E=v.style,M=v.className,R=v.tabIndex,P=void 0===R?0:R,S=v.items,I=v.children,K=v.direction,O=v.id,A=v.mode,T=void 0===A?"vertical":A,L=v.inlineCollapsed,D=v.disabled,_=v.disabledOverflow,V=v.subMenuOpenDelay,z=void 0===V?.1:V,F=v.subMenuCloseDelay,j=void 0===F?.1:F,B=v.forceSubMenuRender,W=v.defaultOpenKeys,H=v.openKeys,q=v.activeKey,X=v.defaultActiveFirst,G=v.selectable,ne=void 0===G||G,te=v.multiple,re=void 0!==te&&te,oe=v.defaultSelectedKeys,ie=v.selectedKeys,le=v.onSelect,ue=v.onDeselect,ae=v.inlineIndent,ce=void 0===ae?24:ae,se=v.motion,de=v.defaultMotions,ve=v.triggerSubMenuAction,pe=void 0===ve?"hover":ve,me=v.builtinPlacements,be=v.itemIcon,he=v.expandIcon,Ze=v.overflowedIndicator,ge=void 0===Ze?"...":Ze,Ce=v.overflowedIndicatorPopupClassName,Ee=v.getPopupContainer,we=v.onClick,Me=v.onOpenChange,ke=v.onKeyDown,Re=(v.openAnimation,v.openTransitionName,v._internalRenderMenuItem),Pe=v._internalRenderSubMenuItem,Se=(0,a.Z)(v,Ye),Ne=p.useMemo((function(){return qe(I,S,Xe)}),[I,S]),xe=p.useState(!1),Ie=(0,u.Z)(xe,2),Ke=Ie[0],Oe=Ie[1],Ae=p.useRef(),Te=function(e){var n=(0,d.Z)(e,{value:e}),t=(0,u.Z)(n,2),r=t[0],o=t[1];return p.useEffect((function(){ee+=1;var e="".concat($,"-").concat(ee);o("rc-menu-uuid-".concat(e))}),[]),r}(O),Le="rtl"===K;var _e=(0,d.Z)(W,{value:H,postState:function(e){return e||Xe}}),Ve=(0,u.Z)(_e,2),ze=Ve[0],Fe=Ve[1],je=function(e){function n(){Fe(e),null===Me||void 0===Me||Me(e)}arguments.length>1&&void 0!==arguments[1]&&arguments[1]?(0,m.flushSync)(n):n()},Be=p.useState(ze),We=(0,u.Z)(Be,2),He=We[0],Ge=We[1],Qe=p.useRef(!1),Ue=p.useMemo((function(){return"inline"!==T&&"vertical"!==T||!L?[T,!1]:["vertical",L]}),[T,L]),Je=(0,u.Z)(Ue,2),$e=Je[0],en=Je[1],nn="inline"===$e,tn=p.useState($e),rn=(0,u.Z)(tn,2),on=rn[0],ln=rn[1],un=p.useState(en),an=(0,u.Z)(un,2),cn=an[0],sn=an[1];p.useEffect((function(){ln($e),sn(en),Qe.current&&(nn?Fe(He):je(Xe))}),[$e,en]);var fn=p.useState(0),dn=(0,u.Z)(fn,2),vn=dn[0],pn=dn[1],mn=vn>=Ne.length-1||"horizontal"!==on||_;p.useEffect((function(){nn&&Ge(ze)}),[ze]),p.useEffect((function(){return Qe.current=!0,function(){Qe.current=!1}}),[]);var bn=U(),hn=bn.registerPath,yn=bn.unregisterPath,Zn=bn.refreshOverflowKeys,gn=bn.isSubPathKey,Cn=bn.getKeyPath,En=bn.getKeys,wn=bn.getSubPathKeys,Mn=p.useMemo((function(){return{registerPath:hn,unregisterPath:yn}}),[hn,yn]),kn=p.useMemo((function(){return{isSubPathKey:gn}}),[gn]);p.useEffect((function(){Zn(mn?Xe:Ne.slice(vn+1).map((function(e){return e.key})))}),[vn,mn]);var Rn=(0,d.Z)(q||X&&(null===(t=Ne[0])||void 0===t?void 0:t.key),{value:q}),Pn=(0,u.Z)(Rn,2),Sn=Pn[0],Nn=Pn[1],xn=J((function(e){Nn(e)})),In=J((function(){Nn(void 0)}));(0,p.useImperativeHandle)(n,(function(){return{list:Ae.current,focus:function(e){var n,t,r,o,i=null!==Sn&&void 0!==Sn?Sn:null===(n=Ne.find((function(e){return!e.props.disabled})))||void 0===n?void 0:n.key;i&&(null===(t=Ae.current)||void 0===t||null===(r=t.querySelector("li[data-menu-id='".concat(y(Te,i),"']")))||void 0===r||null===(o=r.focus)||void 0===o||o.call(r,e))}}}));var Kn=(0,d.Z)(oe||[],{value:ie,postState:function(e){return Array.isArray(e)?e:null===e||void 0===e?Xe:[e]}}),On=(0,u.Z)(Kn,2),An=On[0],Tn=On[1],Ln=J((function(e){null===we||void 0===we||we(fe(e)),function(e){if(ne){var n,t=e.key,r=An.includes(t);n=re?r?An.filter((function(e){return e!==t})):[].concat((0,l.Z)(An),[t]):[t],Tn(n);var o=(0,i.Z)((0,i.Z)({},e),{},{selectedKeys:n});r?null===ue||void 0===ue||ue(o):null===le||void 0===le||le(o)}!re&&ze.length&&"inline"!==on&&je(Xe)}(e)})),Dn=J((function(e,n){var t=ze.filter((function(n){return n!==e}));if(n)t.push(e);else if("inline"!==on){var r=wn(e);t=t.filter((function(e){return!r.has(e)}))}(0,b.Z)(ze,t,!0)||je(t,!0)})),_n=Y(on,Sn,Le,Te,Ae,En,Cn,Nn,(function(e,n){var t=null!==n&&void 0!==n?n:!ze.includes(e);Dn(e,t)}),ke);p.useEffect((function(){Oe(!0)}),[]);var Vn=p.useMemo((function(){return{_internalRenderMenuItem:Re,_internalRenderSubMenuItem:Pe}}),[Re,Pe]),zn="horizontal"!==on||_?Ne:Ne.map((function(e,n){return p.createElement(w,{key:e.key,overflowDisabled:n>vn},e)})),Fn=p.createElement(f.Z,(0,r.Z)({id:O,ref:Ae,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:ye,className:s()(g,"".concat(g,"-root"),"".concat(g,"-").concat(on),M,(c={},(0,o.Z)(c,"".concat(g,"-inline-collapsed"),cn),(0,o.Z)(c,"".concat(g,"-rtl"),Le),c),C),dir:K,style:E,role:"menu",tabIndex:P,data:zn,renderRawItem:function(e){return e},renderRawRest:function(e){var n=e.length,t=n?Ne.slice(-n):null;return p.createElement(De,{eventKey:Q,title:ge,disabled:mn,internalPopupClose:0===n,popupClassName:Ce},t)},maxCount:"horizontal"!==on||_?f.Z.INVALIDATE:f.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){pn(e)},onKeyDown:_n},Se));return p.createElement(x.Provider,{value:Vn},p.createElement(h.Provider,{value:Te},p.createElement(w,{prefixCls:g,rootClassName:C,mode:on,openKeys:ze,rtl:Le,disabled:D,motion:Ke?se:null,defaultMotions:Ke?de:null,activeKey:Sn,onActive:xn,onInactive:In,selectedKeys:An,inlineIndent:ce,subMenuOpenDelay:z,subMenuCloseDelay:j,forceSubMenuRender:B,builtinPlacements:me,triggerSubMenuAction:pe,getPopupContainer:Ee,itemIcon:be,expandIcon:he,onItemClick:Ln,onOpenChange:Dn},p.createElement(N.Provider,{value:kn},Fn),p.createElement("div",{style:{display:"none"},"aria-hidden":!0},p.createElement(k.Provider,{value:Mn},Ne)))))})),Qe=Ge;Qe.Item=ye,Qe.SubMenu=De,Qe.ItemGroup=je,Qe.Divider=Be;var Ue=Qe}}]);
//# sourceMappingURL=164.ce3398da.chunk.js.map