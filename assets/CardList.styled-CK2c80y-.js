import{f as Oe,r as $,u as g,h as Qe,i as et,g as tt,j as p,a as nt,b as ot,k as rt}from"./index-BtmeQvo6.js";const De=t=>t.cars,Bn=Oe(De,t=>t.cars),at=Oe(De,t=>t.carsArr),st=t=>t.filters,qn=t=>t.cars.isLoading,lt=t=>t.favorite.favorite,$n=Oe([at,st],(t,e)=>{if(e.makeSelect&&e.priceSelect){let o=t.filter(r=>r.make===e.makeSelect);return o=o.filter(r=>r.rentalPrice.slice(1,10)===e.priceSelect),o}if(e.priceSelect)return t.filter(r=>r.rentalPrice.slice(1,10)===e.priceSelect);if(e.makeSelect)return t.filter(r=>r.make===e.makeSelect)});/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var it={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Fe=(t,e)=>{const o=$.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:d=2,absoluteStrokeWidth:O,className:a="",children:v,...h},y)=>$.createElement("svg",{ref:y,...it,width:s,height:s,stroke:r,strokeWidth:O?Number(d)*24/Number(s):d,className:["lucide",`lucide-${ct(t)}`,a].join(" "),...h},[...e.map(([u,m])=>$.createElement(u,m)),...Array.isArray(v)?v:[v]]));return o.displayName=`${t}`,o};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=Fe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ft=g.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center center;
border-radius: 12px;
`,pt=g.div`
  height: 268px;
`,dt=g.div`
  display: flex;
  height: 24px;
  justify-content: space-between;
  margin-top: 14px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`,ht=g.span`
  color: #3470FF;
`,mt=g.div`
  margin-top: 9px;
  margin-bottom: 28px;
  height: 40px;
  display: flex;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,vt=g.button`
  width: 100%;
  height: 44px;
  background-color: #3470ff;
  border-radius: 12px;
  color: white;
  &:hover {
    background-color: #0b44cd;
  }
`,yt=g.button`
position: absolute;
background-color: inherit;
top: 14px;
right: 14px;
`;var me={exports:{}},K={},ke={exports:{}},bt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",gt=bt,Ot=gt;function Le(){}function je(){}je.resetWarningCache=Le;var Ct=function(){function t(r,s,d,O,a,v){if(v!==Ot){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}t.isRequired=t;function e(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:je,resetWarningCache:Le};return o.PropTypes=o,o};ke.exports=Ct();var Ue=ke.exports,ve={exports:{}},D={},ye={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",s=/input|select|textarea|button|object|iframe/;function d(u,m){return m.getPropertyValue("overflow")!=="visible"||u.scrollWidth<=0&&u.scrollHeight<=0}function O(u){var m=u.offsetWidth<=0&&u.offsetHeight<=0;if(m&&!u.innerHTML)return!0;try{var b=window.getComputedStyle(u),x=b.getPropertyValue("display");return m?x!==r&&d(u,b):x===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(u){for(var m=u,b=u.getRootNode&&u.getRootNode();m&&m!==document.body;){if(b&&m===b&&(m=b.host.parentNode),O(m))return!1;m=m.parentNode}return!0}function v(u,m){var b=u.nodeName.toLowerCase(),x=s.test(b)&&!u.disabled||b==="a"&&u.href||m;return x&&a(u)}function h(u){var m=u.getAttribute("tabindex");m===null&&(m=void 0);var b=isNaN(m);return(b||m>=0)&&v(u,!b)}function y(u){var m=[].slice.call(u.querySelectorAll("*"),0).reduce(function(b,x){return b.concat(x.shadowRoot?y(x.shadowRoot):[x])},[]);return m.filter(h)}t.exports=e.default})(ye,ye.exports);var We=ye.exports;Object.defineProperty(D,"__esModule",{value:!0});D.resetState=St;D.log=Et;D.handleBlur=ee;D.handleFocus=te;D.markForFocusLater=Mt;D.returnFocus=Tt;D.popWithoutFocus=Rt;D.setupScopedFocus=Nt;D.teardownScopedFocus=Pt;var xt=We,_t=wt(xt);function wt(t){return t&&t.__esModule?t:{default:t}}var X=[],V=null,be=!1;function St(){X=[]}function Et(){}function ee(){be=!0}function te(){if(be){if(be=!1,!V)return;setTimeout(function(){if(!V.contains(document.activeElement)){var t=(0,_t.default)(V)[0]||V;t.focus()}},0)}}function Mt(){X.push(document.activeElement)}function Tt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{X.length!==0&&(e=X.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Rt(){X.length>0&&X.pop()}function Nt(t){V=t,window.addEventListener?(window.addEventListener("blur",ee,!1),document.addEventListener("focus",te,!0)):(window.attachEvent("onBlur",ee),document.attachEvent("onFocus",te))}function Pt(){V=null,window.addEventListener?(window.removeEventListener("blur",ee),document.removeEventListener("focus",te)):(window.detachEvent("onBlur",ee),document.detachEvent("onFocus",te))}var ge={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=O;var o=We,r=s(o);function s(a){return a&&a.__esModule?a:{default:a}}function d(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?d(a.activeElement.shadowRoot):a.activeElement}function O(a,v){var h=(0,r.default)(a);if(!h.length){v.preventDefault();return}var y=void 0,u=v.shiftKey,m=h[0],b=h[h.length-1],x=d();if(a===x){if(!u)return;y=b}if(b===x&&!u&&(y=m),m===x&&u&&(y=b),y){v.preventDefault(),y.focus();return}var M=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),L=M!=null&&M[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(L){var k=h.indexOf(x);if(k>-1&&(k+=u?-1:1),y=h[k],typeof y>"u"){v.preventDefault(),y=u?b:m,y.focus();return}v.preventDefault(),y.focus()}}t.exports=e.default})(ge,ge.exports);var At=ge.exports,F={},Dt=function(){},Ft=Dt,A={},Ie={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(Ie);var kt=Ie.exports;Object.defineProperty(A,"__esModule",{value:!0});A.canUseDOM=A.SafeNodeList=A.SafeHTMLCollection=void 0;var Lt=kt,jt=Ut(Lt);function Ut(t){return t&&t.__esModule?t:{default:t}}var ue=jt.default,Wt=ue.canUseDOM?window.HTMLElement:{};A.SafeHTMLCollection=ue.canUseDOM?window.HTMLCollection:{};A.SafeNodeList=ue.canUseDOM?window.NodeList:{};A.canUseDOM=ue.canUseDOM;A.default=Wt;Object.defineProperty(F,"__esModule",{value:!0});F.resetState=$t;F.log=zt;F.assertNodeList=He;F.setElement=Kt;F.validateElement=Ce;F.hide=Yt;F.show=Vt;F.documentNotReadyOrSSRTesting=Xt;var It=Ft,Ht=qt(It),Bt=A;function qt(t){return t&&t.__esModule?t:{default:t}}var T=null;function $t(){T&&(T.removeAttribute?T.removeAttribute("aria-hidden"):T.length!=null?T.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(T).forEach(function(t){return t.removeAttribute("aria-hidden")})),T=null}function zt(){}function He(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Kt(t){var e=t;if(typeof e=="string"&&Bt.canUseDOM){var o=document.querySelectorAll(e);He(o,e),e=o}return T=e||T,T}function Ce(t){var e=t||T;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Ht.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Yt(t){var e=!0,o=!1,r=void 0;try{for(var s=Ce(t)[Symbol.iterator](),d;!(e=(d=s.next()).done);e=!0){var O=d.value;O.setAttribute("aria-hidden","true")}}catch(a){o=!0,r=a}finally{try{!e&&s.return&&s.return()}finally{if(o)throw r}}}function Vt(t){var e=!0,o=!1,r=void 0;try{for(var s=Ce(t)[Symbol.iterator](),d;!(e=(d=s.next()).done);e=!0){var O=d.value;O.removeAttribute("aria-hidden")}}catch(a){o=!0,r=a}finally{try{!e&&s.return&&s.return()}finally{if(o)throw r}}}function Xt(){T=null}var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.resetState=Zt;Z.log=Gt;var J={},Q={};function we(t,e){t.classList.remove(e)}function Zt(){var t=document.getElementsByTagName("html")[0];for(var e in J)we(t,J[e]);var o=document.body;for(var r in Q)we(o,Q[r]);J={},Q={}}function Gt(){}var Jt=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},Qt=function(e,o){return e[o]&&(e[o]-=1),o},en=function(e,o,r){r.forEach(function(s){Jt(o,s),e.add(s)})},tn=function(e,o,r){r.forEach(function(s){Qt(o,s),o[s]===0&&e.remove(s)})};Z.add=function(e,o){return en(e.classList,e.nodeName.toLowerCase()=="html"?J:Q,o.split(" "))};Z.remove=function(e,o){return tn(e.classList,e.nodeName.toLowerCase()=="html"?J:Q,o.split(" "))};var G={};Object.defineProperty(G,"__esModule",{value:!0});G.log=on;G.resetState=rn;function nn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Be=function t(){var e=this;nn(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var r=e.openInstances.indexOf(o);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(r){return r(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},le=new Be;function on(){console.log("portalOpenInstances ----------"),console.log(le.openInstances.length),le.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function rn(){le=new Be}G.default=le;var xe={};Object.defineProperty(xe,"__esModule",{value:!0});xe.resetState=cn;xe.log=un;var an=G,sn=ln(an);function ln(t){return t&&t.__esModule?t:{default:t}}var S=void 0,P=void 0,z=[];function cn(){for(var t=[S,P],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}S=P=null,z=[]}function un(){console.log("bodyTrap ----------"),console.log(z.length);for(var t=[S,P],e=0;e<t.length;e++){var o=t[e],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Se(){z.length!==0&&z[z.length-1].focusContent()}function fn(t,e){!S&&!P&&(S=document.createElement("div"),S.setAttribute("data-react-modal-body-trap",""),S.style.position="absolute",S.style.opacity="0",S.setAttribute("tabindex","0"),S.addEventListener("focus",Se),P=S.cloneNode(),P.addEventListener("focus",Se)),z=e,z.length>0?(document.body.firstChild!==S&&document.body.insertBefore(S,document.body.firstChild),document.body.lastChild!==P&&document.body.appendChild(P)):(S.parentElement&&S.parentElement.removeChild(S),P.parentElement&&P.parentElement.removeChild(P))}sn.default.subscribe(fn);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(f){for(var c=1;c<arguments.length;c++){var C=arguments[c];for(var n in C)Object.prototype.hasOwnProperty.call(C,n)&&(f[n]=C[n])}return f},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},s=function(){function f(c,C){for(var n=0;n<C.length;n++){var l=C[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,C,n){return C&&f(c.prototype,C),n&&f(c,n),c}}(),d=$,O=Ue,a=j(O),v=D,h=I(v),y=At,u=j(y),m=F,b=I(m),x=Z,M=I(x),L=A,k=j(L),Y=G,W=j(Y);function I(f){if(f&&f.__esModule)return f;var c={};if(f!=null)for(var C in f)Object.prototype.hasOwnProperty.call(f,C)&&(c[C]=f[C]);return c.default=f,c}function j(f){return f&&f.__esModule?f:{default:f}}function R(f,c){if(!(f instanceof c))throw new TypeError("Cannot call a class as a function")}function N(f,c){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:f}function Ye(f,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);f.prototype=Object.create(c&&c.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(f,c):f.__proto__=c)}var fe={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},Ve=function(c){return c.code==="Tab"||c.keyCode===9},Xe=function(c){return c.code==="Escape"||c.keyCode===27},re=0,pe=function(f){Ye(c,f);function c(C){R(this,c);var n=N(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,C));return n.setOverlayRef=function(l){n.overlay=l,n.props.overlayRef&&n.props.overlayRef(l)},n.setContentRef=function(l){n.content=l,n.props.contentRef&&n.props.contentRef(l)},n.afterClose=function(){var l=n.props,w=l.appElement,E=l.ariaHideApp,_=l.htmlOpenClassName,H=l.bodyOpenClassName,B=l.parentSelector,ae=B&&B().ownerDocument||document;H&&M.remove(ae.body,H),_&&M.remove(ae.getElementsByTagName("html")[0],_),E&&re>0&&(re-=1,re===0&&b.show(w)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(h.returnFocus(n.props.preventScroll),h.teardownScopedFocus()):h.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),W.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(h.setupScopedFocus(n.node),h.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var l=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:l},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(l){Ve(l)&&(0,u.default)(n.content,l),n.props.shouldCloseOnEsc&&Xe(l)&&(l.stopPropagation(),n.requestClose(l))},n.handleOverlayOnClick=function(l){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(l):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(l){!n.props.shouldCloseOnOverlayClick&&l.target==n.overlay&&l.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(l){return n.ownerHandlesClose()&&n.props.onRequestClose(l)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(l,w){var E=(typeof w>"u"?"undefined":r(w))==="object"?w:{base:fe[l],afterOpen:fe[l]+"--after-open",beforeClose:fe[l]+"--before-close"},_=E.base;return n.state.afterOpen&&(_=_+" "+E.afterOpen),n.state.beforeClose&&(_=_+" "+E.beforeClose),typeof w=="string"&&w?_+" "+w:_},n.attributesFromObject=function(l,w){return Object.keys(w).reduce(function(E,_){return E[l+"-"+_]=w[_],E},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return s(c,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,l){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!l.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,l=n.appElement,w=n.ariaHideApp,E=n.htmlOpenClassName,_=n.bodyOpenClassName,H=n.parentSelector,B=H&&H().ownerDocument||document;_&&M.add(B.body,_),E&&M.add(B.getElementsByTagName("html")[0],E),w&&(re+=1,b.hide(l)),W.default.register(this)}},{key:"render",value:function(){var n=this.props,l=n.id,w=n.className,E=n.overlayClassName,_=n.defaultStyles,H=n.children,B=w?{}:_.content,ae=E?{}:_.overlay;if(this.shouldBeClosed())return null;var Ze={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:o({},ae,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ge=o({id:l,ref:this.setContentRef,style:o({},B,this.props.style.content),className:this.buildClassName("content",w),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Je=this.props.contentElement(Ge,H);return this.props.overlayElement(Ze,Je)}}]),c}(d.Component);pe.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},pe.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(k.default),a.default.instanceOf(L.SafeHTMLCollection),a.default.instanceOf(L.SafeNodeList),a.default.arrayOf(a.default.instanceOf(k.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=pe,t.exports=e.default})(ve,ve.exports);var pn=ve.exports;function qe(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function $e(t){function e(o){var r=this.constructor.getDerivedStateFromProps(t,o);return r??null}this.setState(e.bind(this))}function ze(t,e){try{var o=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}qe.__suppressDeprecationWarning=!0;$e.__suppressDeprecationWarning=!0;ze.__suppressDeprecationWarning=!0;function dn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,r=null,s=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?s="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),o!==null||r!==null||s!==null){var d=t.displayName||t.name,O=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+d+" uses "+O+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=qe,e.componentWillReceiveProps=$e),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=ze;var a=e.componentDidUpdate;e.componentDidUpdate=function(h,y,u){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:u;a.call(this,h,y,m)}}return t}const hn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:dn},Symbol.toStringTag,{value:"Module"})),mn=Qe(hn);Object.defineProperty(K,"__esModule",{value:!0});K.bodyOpenClassName=K.portalClassName=void 0;var Ee=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},vn=function(){function t(e,o){for(var r=0;r<o.length;r++){var s=o[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),Ke=$,ie=ne(Ke),yn=et,ce=ne(yn),bn=Ue,i=ne(bn),gn=pn,Me=ne(gn),On=F,Cn=_n(On),U=A,Te=ne(U),xn=mn;function _n(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function ne(t){return t&&t.__esModule?t:{default:t}}function wn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Re(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Sn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var En=K.portalClassName="ReactModalPortal",Mn=K.bodyOpenClassName="ReactModal__Body--open",q=U.canUseDOM&&ce.default.createPortal!==void 0,Ne=function(e){return document.createElement(e)},Pe=function(){return q?ce.default.createPortal:ce.default.unstable_renderSubtreeIntoContainer};function se(t){return t()}var oe=function(t){Sn(e,t);function e(){var o,r,s,d;wn(this,e);for(var O=arguments.length,a=Array(O),v=0;v<O;v++)a[v]=arguments[v];return d=(r=(s=Re(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(a))),s),s.removePortal=function(){!q&&ce.default.unmountComponentAtNode(s.node);var h=se(s.props.parentSelector);h&&h.contains(s.node)?h.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(h){s.portal=h},s.renderPortal=function(h){var y=Pe(),u=y(s,ie.default.createElement(Me.default,Ee({defaultStyles:e.defaultStyles},h)),s.node);s.portalRef(u)},r),Re(s,d)}return vn(e,[{key:"componentDidMount",value:function(){if(U.canUseDOM){q||(this.node=Ne("div")),this.node.className=this.props.portalClassName;var r=se(this.props.parentSelector);r.appendChild(this.node),!q&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var s=se(r.parentSelector),d=se(this.props.parentSelector);return{prevParent:s,nextParent:d}}},{key:"componentDidUpdate",value:function(r,s,d){if(U.canUseDOM){var O=this.props,a=O.isOpen,v=O.portalClassName;r.portalClassName!==v&&(this.node.className=v);var h=d.prevParent,y=d.nextParent;y!==h&&(h.removeChild(this.node),y.appendChild(this.node)),!(!r.isOpen&&!a)&&!q&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!U.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,s=Date.now(),d=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||s+this.props.closeTimeoutMS);d?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,d-s)):this.removePortal()}}},{key:"render",value:function(){if(!U.canUseDOM||!q)return null;!this.node&&q&&(this.node=Ne("div"));var r=Pe();return r(ie.default.createElement(Me.default,Ee({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){Cn.setElement(r)}}]),e}(Ke.Component);oe.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(Te.default),i.default.instanceOf(U.SafeHTMLCollection),i.default.instanceOf(U.SafeNodeList),i.default.arrayOf(i.default.instanceOf(Te.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func};oe.defaultProps={isOpen:!1,portalClassName:En,bodyOpenClassName:Mn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return ie.default.createElement("div",e,o)},contentElement:function(e,o){return ie.default.createElement("div",e,o)}};oe.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,xn.polyfill)(oe);K.default=oe;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=K,r=s(o);function s(d){return d&&d.__esModule?d:{default:d}}e.default=r.default,t.exports=e.default})(me,me.exports);var Tn=me.exports;const Ae=tt(Tn),Rn=g.div`
  padding: 40px 37px;
`,Nn=g.div`
  height: 268px;
  margin-bottom: 8px;
`,Pn=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 12px;
`,An=g.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`,de=g.span`
  color: #3470ff;
`,Dn=g.div`
  width: 277px;
  margin-bottom: 14px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,Fn=g.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
`,kn=g.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-bottom: 24px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,Ln=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
  color: #363535;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,he=g.p`
  border-radius: 35px;
  background: #f9f9f9;
  padding: 7px 14px;
`,jn=g.button`
width: 168px;
  height: 44px;
  background-color: #3470ff;
  border-radius: 12px;
  color: white;
  &:hover {
    background-color: #0b44cd;
  }
`,Un=g.button`
position: absolute;
background: inherit;
top: 16px;
right: 16px;
`,Wn={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"541px",height:"752px",borderRadius:24,position:"relative"},overlay:{backgroundColor:"#12141780"}},In=({modalIsOpen:t,afterOpenModal:e,closeModal:o,car:r})=>{const{car:{id:s,make:d,model:O,year:a,address:v,type:h,fuelConsumption:y,engineSize:u,description:m,accessories:b,functionalities:x,rentalConditions:M,mileage:L,rentalPrice:k,img:Y}}=r,W=v.split(" ").slice(-2).join(" ").replace(/,/g,"|"),I=M.split(`
`),j=()=>{const R="+380730000000";window.location.href="tel:"+R};return Ae.setAppElement("#root"),p.jsx(Ae,{isOpen:t,onAfterOpen:e,onRequestClose:o,style:Wn,children:p.jsxs(Rn,{children:[p.jsx(Un,{onClick:o,children:p.jsx(ut,{})}),p.jsx(Nn,{children:p.jsx(Pn,{src:Y,alt:d})}),p.jsx(An,{children:p.jsxs("p",{children:[d," ",p.jsxs(de,{children:[O,","]})," ",a]})}),p.jsx(Dn,{children:p.jsxs("p",{children:[W," | id: ",s," | Year: ",a," | Type: ",h," | Fuel Consumption: ",y," | Engine Size: ",u]})}),p.jsx(Fn,{children:m}),p.jsxs("div",{children:[p.jsx("p",{children:"Accessories and functionalities:"}),p.jsxs(kn,{children:[b.map((R,N)=>p.jsxs("p",{children:[R," | "]},N)),x.map((R,N)=>p.jsxs("p",{children:[R," | "]},N))]}),p.jsxs("div",{children:[p.jsx("p",{children:"Rental Conditions: "}),p.jsxs(Ln,{children:[I.map((R,N)=>p.jsx(he,{children:R},N)),p.jsxs(he,{children:["Miliage: ",p.jsx(de,{children:L})]}),p.jsxs(he,{children:["Price: ",p.jsx(de,{children:k})]})]})]})]}),p.jsx(jn,{onClick:j,children:"Rental car"})]})})},zn=t=>{const{car:{id:e,img:o,make:r,model:s,year:d,rentalPrice:O,address:a,rentalCompany:v,type:h,mileage:y,accessories:u}}=t,m=a.split(" ").slice(-2).join(" ").replace(/,/g,"|"),x=nt(lt).some(N=>N.id===e),M=ot(),[L,k]=$.useState(x),[Y,W]=$.useState(!1),I=()=>{k(N=>!N),M(rt(t.car))},j=()=>{W(!0),document.body.style.overflow="hidden"},R=()=>{W(!1),document.body.style.overflow="auto"};return p.jsxs("div",{children:[p.jsx(pt,{children:p.jsx(ft,{src:o,alt:e})}),p.jsxs(dt,{children:[p.jsxs("p",{children:[r," ",p.jsx(ht,{children:s}),", ",d]}),p.jsx("p",{children:O})]}),p.jsx(mt,{children:p.jsxs("p",{children:[m," | ",v," | ",h," | ",r," | ",y," | ",u[0]]})}),p.jsx(vt,{type:"button",onClick:j,children:"Learn more"}),p.jsx(yt,{onClick:I,children:L?p.jsx(_e,{color:"#3470FF",fill:"#3470FF"}):p.jsx(_e,{color:"white"})}),Y&&p.jsx(In,{modalIsOpen:Y,closeModal:R,openModal:j,car:t})]})},Kn=g.li`
width: 274px;
height: 426px;
position: relative;
`,Yn=g.ul`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
`,Vn=g.div`
margin-top: 50px;
`,Xn=g.button`
  display: block;
  margin: 100px auto;
  background-color: transparent;
  color: #3470ff;
  border-bottom: 1px solid #3470ff;
`,Zn=g.div`
width: 1440px;
margin: 50px auto;
display: flex;
justify-content: center;
`,Gn=g.div`
text-align: center;
font-size: 30px;
font-weight: 700;
`;export{Vn as C,Zn as F,Yn as I,Xn as L,Gn as N,st as a,Bn as b,$n as c,qn as d,Kn as e,zn as f,lt as g,at as s};
