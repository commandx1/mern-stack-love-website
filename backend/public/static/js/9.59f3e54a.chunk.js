(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{135:function(e,t,a){"use strict";var n=a(133),r=a.n(n),o=a(134),i=a(10),c=a(0);t.a=function(e){var t=Object(c.useState)(e),a=Object(i.a)(t,2),n=a[0],l=a[1],s=Object(c.useState)(!1),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(c.useState)(),b=Object(i.a)(p,2),f=b[0],h=b[1],g=Object(c.useState)(!1),v=Object(i.a)(g,2),y=v[0],j=v[1],O=Object(c.useRef)([]),E=Object(c.useCallback)(function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n,o,i,c,l,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,o=s.length>3&&void 0!==s[3]?s[3]:{},d(!0),i=new AbortController,O.current.push(i),e.prev=6,e.next=9,fetch(t,{method:a,body:n,headers:o,signal:i.signal});case 9:return c=e.sent,e.next=12,c.json();case 12:if(l=e.sent,O.current=O.current.filter((function(e){return e!==i})),c.ok){e.next=16;break}throw new Error(l.message);case 16:return d(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(6),h(e.t0.message),d(!1),j(!0),e.t0;case 26:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(c.useEffect)((function(){return function(){O.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:u,error:f,open:y,sendRequest:E,clearError:function(){h(null),j(!1),l("")},state:n}}},137:function(e,t,a){},139:function(e,t,a){"use strict";a(137);var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{className:"container"},e.children)}},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),o=a(396),i=a(393);function c(e){var t=e.open,a=e.message,n=e.alert,c=e.onClose;function l(e){return r.a.createElement(i.a,Object.assign({elevation:6,variant:"filled"},e))}return r.a.createElement("div",null,r.a.createElement(o.a,{autoHideDuration:6e3,onClose:c,anchorOrigin:{vertical:"top",horizontal:"right"},key:"top, right",open:t},r.a.createElement(l,{severity:n,onClose:c},a)))}},141:function(e,t,a){"use strict";var n=a(2),r=a(0),o=a.n(r),i=a(180),c=a.n(i),l=a(182),s=a.n(l),m=(a(167),[{color:"hsl(0, 0%, 0%)",label:"Siyah"},{color:"hsl(0, 0%, 30%)",label:"Koyu gri"},{color:"hsl(0, 0%, 60%)",label:"Gri"},{color:"hsl(0, 0%, 90%)",label:"A\xe7\u0131k gri"},{color:"hsl(0, 0%, 100%)",label:"Beyaz",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"K\u0131rm\u0131z\u0131"},{color:"hsl(30, 75%, 60%)",label:"Turuncu"},{color:"hsl(60, 75%, 60%)",label:"Sar\u0131"},{color:"hsl(90, 75%, 60%)",label:"A\xe7\u0131k ye\u015fil"},{color:"hsl(120, 75%, 60%)",label:"Ye\u015fil"},{color:"hsl(150, 75%, 60%)",label:"Akuamarin"},{color:"hsl(180, 75%, 60%)",label:"Turkuaz"},{color:"hsl(210, 75%, 60%)",label:"A\xe7\u0131k mavi"},{color:"hsl(240, 75%, 60%)",label:"Mavi"},{color:"hsl(270, 75%, 60%)",label:"Mor"}]),u={fontColor:{columns:3,colors:m},fontBackgroundColor:{columns:3,colors:m},fontSize:{options:[{title:"\xc7ok K\xfc\xe7\xfck",model:"0.5rem"},{title:"K\xfc\xe7\xfck",model:"0.75rem"},{title:"Normal",model:"1rem"},{title:"B\xfcy\xfck",model:"1.25rem"},{title:"\xc7ok B\xfcy\xfck",model:"1.5rem"}]},heading:{options:[{model:"paragraph",title:"Paragraf",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Ba\u015fl\u0131k 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Ba\u015fl\u0131k 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Ba\u015fl\u0131k 3",class:"ck-heading_heading3"}]}};t.a=function(e){var t;switch(e.type){case"memory":t=["heading","|","fontSize","bold","italic","fontColor","fontBackgroundColor","bulletedList","blockQuote","undo","redo"];break;case"poem":t=["bold","italic","fontColor","underline","undo","redo"];break;case"telltale":t=["heading","|","fontSize","bold","italic","fontColor","fontBackgroundColor","alignment","underline","strikeThrough","bulletedList","numberedList","blockQuote","link","undo","redo"];break;case"blog":t=["heading","|","fontSize","bold","italic","fontColor","fontBackgroundColor","alignment","insertTable","insertImage","underline","strikeThrough","bulletedList","numberedList","blockQuote","link","undo","redo"]}return o.a.createElement("div",{style:e.style},o.a.createElement(c.a,{onInit:function(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},value:e.value,data:e.data,onChange:e.onChange,editor:s.a,config:Object(n.a)(Object(n.a)({},u),{},{toolbar:t})}))}},143:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(137);t.a=function(e){return r.a.createElement("div",{id:"page-title"},e.children)}},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(10),r=a(48),o=a(2),i=a(0),c=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(o.a)(Object(o.a)({},e),{},{inputs:Object(o.a)(Object(o.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},l=function(e,t){var a=Object(i.useReducer)(c,{inputs:e,isValid:t}),r=Object(n.a)(a,2),o=r[0],l=r[1];return[o,Object(i.useCallback)((function(e,t,a){l({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(i.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},146:function(e,t,a){"use strict";var n=a(10),r=a(0),o=a.n(r),i=a(147),c=a.n(i),l=a(186),s=a.n(l);a(184);t.a=function(e){var t,a=Object(r.useState)(),i=Object(n.a)(a,2),l=i[0],m=i[1],u=Object(r.useState)(),d=Object(n.a)(u,2),p=d[0],b=d[1],f=Object(r.useState)(!1),h=Object(n.a)(f,2),g=h[0],v=h[1],y=Object(r.useRef)();t=p?o.a.createElement("img",{src:p,alt:"preview"}):e.updateUrl?o.a.createElement("img",{src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.updateUrl),alt:"update"}):null,Object(r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){b(e.result)},e.readAsDataURL(l)}}),[l]);return o.a.createElement("div",{className:"form-control"},o.a.createElement("input",{id:e.id,ref:y,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=g;t.target.files&&1===t.target.files.length?(a=t.target.files[0],m(a),v(!0),n=!0):(v(!1),n=!1),e.onInput(e.id,a,n)}}),o.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},o.a.createElement("div",{className:"image-upload__preview"},t,!p&&!e.updateUrl&&o.a.createElement("p",null,"A\u015fa\u011f\u0131daki butona basarak foto\u011fraf ekleyebilirsin \ud83d\ude09")),e.updateUrl?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{className:"image-form-button",variant:"contained",color:"primary",type:"button",onClick:function(){y.current.click()}},o.a.createElement(s.a,null)),!g&&o.a.createElement("p",{style:{color:"red",fontWeight:"600",textAlign:"center"}},"L\xfctfen .png, .jpg, .jpeg formatlar\u0131nda bir resim dosyas\u0131 ekleyiniz"))))}},149:function(e,t,a){"use strict";var n=a(10),r=a(0),o=a.n(r),i=a(75),c=a(131);t.a=function(e){var t,a,l,s=e.placeholder,m=e.style,u=e.name,d=e.label,p=e.type,b=e.onChange,f=e.inputStyle,h=e.required,g=e.value,v=e.bg,y=Object(c.a)("(max-width: 769px)");t=Object(c.a)("(max-height: 350px)")?".7rem":y?".9rem":"1.3rem",l="white"===(a=v||"#41AD19")?"black":"white";var j=Object(r.useState)(!1),O=Object(n.a)(j,2),E=O[0],k=O[1],x=Object(i.a)({root:{textAlign:"center",fontSize:t},label:{textDecoration:"underline"},input:{transition:"300ms",width:"100%",backgroundColor:E?"#EBF39C":a,color:E?"black":l,border:".5px solid green",borderRadius:"1rem",letterSpacing:"0.04rem",fontSize:t}})();return o.a.createElement("div",{style:m,className:x.root},o.a.createElement("label",{className:x.label,htmlFor:u},d),o.a.createElement("input",{name:u,className:x.input,type:p,onChange:b,onFocus:function(){return k(!0)},onBlur:function(){return k(!1)},style:f,required:h,value:g,placeholder:s}))}},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(163);t.a=function(e){return r.a.createElement("div",{onClick:e.backdropClickHandler,className:"backdrop"})}},156:function(e,t){},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(116),i=a(395),c=a(213),l=a(214),s=a(131),m=a(383);a(165);function u(e){var t=e.open,a=e.handleClose,n=e.deleteHandler,u=e.elementId,d=e.element,p=Object(s.a)("(max-width: 769px)"),b=Object(o.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:p&&"90%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))();return r.a.createElement(i.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:b.modal,open:t,onClose:a,closeAfterTransition:!0,BackdropComponent:c.a,BackdropProps:{timeout:500}},r.a.createElement(l.a,{in:t},r.a.createElement("div",{className:b.paper},r.a.createElement("h2",{id:"transition-modal-title"},d," silmek istedi\u011finize emin misiniz? \ud83e\udd14"),r.a.createElement(m.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){return n(u)}},"Sil"),r.a.createElement(m.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return a()}},"Vazge\xe7"))))}},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(10),r=a(48),o=a(0),i=a.n(o),c=a(116),l=a(395);function s(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var m=Object(c.a)((function(e){var t;return{paper:(t={transform:"translate(-50%, -50%)",position:"absolute",borderRadius:"30px",width:500,background:"#ED213A"},Object(r.a)(t,"background","-webkit-linear-gradient(to right, #93291E, #ED213A)"),Object(r.a)(t,"background","linear-gradient(to right, #93291E, #ED213A)"),Object(r.a)(t,"border","2px solid #000"),Object(r.a)(t,"boxShadow",e.shadows[5]),Object(r.a)(t,"padding",e.spacing(2,4,3)),Object(r.a)(t,"color","white"),t)}}));function u(e){var t=m(),a=i.a.useState(s),r=Object(n.a)(a,1)[0],o=i.a.createElement("div",{style:r,className:t.paper},i.a.createElement("h2",{id:"simple-modal-title"},"Bir hata meydana geldi!"),i.a.createElement("p",{id:"simple-modal-description"},e.error));return i.a.createElement(l.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},o)}},163:function(e,t,a){},165:function(e,t,a){},167:function(e,t,a){},179:function(e,t,a){"use strict";var n=a(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(76)).default)(r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},184:function(e,t,a){},186:function(e,t,a){"use strict";var n=a(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(76)).default)(r.default.createElement("path",{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"}),"AddAPhoto");t.default=o},213:function(e,t,a){"use strict";var n=a(1),r=a(3),o=a(0),i=(a(12),a(17)),c=a(29),l=a(214),s=o.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,m=e.invisible,u=void 0!==m&&m,d=e.open,p=e.transitionDuration,b=e.TransitionComponent,f=void 0===b?l.a:b,h=Object(r.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return o.createElement(f,Object(n.a)({in:d,timeout:p},h),o.createElement("div",{className:Object(i.default)(c.root,s,u&&c.invisible),"aria-hidden":!0,ref:t},a))}));t.a=Object(c.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(s)},214:function(e,t,a){"use strict";var n=a(1),r=a(49),o=a(3),i=a(0),c=(a(12),a(398)),l=a(50),s=a(47),m=a(166),u=a(136),d={entering:{opacity:1},entered:{opacity:1}},p={enter:l.b.enteringScreen,exit:l.b.leavingScreen},b=i.forwardRef((function(e,t){var a=e.children,l=e.disableStrictModeCompat,b=void 0!==l&&l,f=e.in,h=e.onEnter,g=e.onEntered,v=e.onEntering,y=e.onExit,j=e.onExited,O=e.onExiting,E=e.style,k=e.TransitionComponent,x=void 0===k?c.a:k,w=e.timeout,C=void 0===w?p:w,S=Object(o.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),A=Object(s.a)(),N=A.unstable_strictMode&&!b,z=i.useRef(null),T=Object(u.a)(a.ref,t),I=Object(u.a)(N?z:void 0,T),D=function(e){return function(t,a){if(e){var n=N?[z.current,t]:[t,a],o=Object(r.a)(n,2),i=o[0],c=o[1];void 0===c?e(i):e(i,c)}}},B=D(v),_=D((function(e,t){Object(m.b)(e);var a=Object(m.a)({style:E,timeout:C},{mode:"enter"});e.style.webkitTransition=A.transitions.create("opacity",a),e.style.transition=A.transitions.create("opacity",a),h&&h(e,t)})),V=D(g),H=D(O),M=D((function(e){var t=Object(m.a)({style:E,timeout:C},{mode:"exit"});e.style.webkitTransition=A.transitions.create("opacity",t),e.style.transition=A.transitions.create("opacity",t),y&&y(e)})),R=D(j);return i.createElement(x,Object(n.a)({appear:!0,in:f,nodeRef:N?z:void 0,onEnter:_,onEntered:V,onEntering:B,onExit:M,onExited:R,onExiting:H,timeout:C},S),(function(e,t){return i.cloneElement(a,Object(n.a)({style:Object(n.a)({opacity:0,visibility:"exited"!==e||f?void 0:"hidden"},d[e],E,a.props.style),ref:I},t))}))}));t.a=b},297:function(e,t,a){},394:function(e,t,a){"use strict";a.r(t);var n=a(133),r=a.n(n),o=a(134),i=a(10),c=a(0),l=a.n(c),s=a(14),m=a(135),u=(a(297),a(139)),d=a(143),p=a(142),b=a.n(p),f=a(4),h=a(7),g=a(179),v=a.n(g),y=a(45),j=a(157),O=function(e){var t,a=Object(f.g)(),n=Object(c.useContext)(s.a),u=Object(m.a)(),d=u.isLoading,p=(u.error,u.open,u.sendRequest),g=(u.clearError,Object(c.useContext)(s.b)),O=Object(c.useState)(!1),E=Object(i.a)(O,2),k=E[0],x=E[1],w=function(){x(!1)};t=e.memory.date===e.memory.update?l.a.createElement("div",{className:"memory-date"},e.memory.date," tarihinde yay\u0131mland\u0131 ",e.memory.username):l.a.createElement("div",{className:"memory-date update-day"},e.memory.update," tarihinde g\xfcncellendi ",e.memory.username);var C=function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(),t.prev=1,t.next=4,p("".concat("https://love-website.herokuapp.com/api","/memories/").concat(a),"DELETE");case 4:n=t.sent,e.setShowSnackbar(!0),e.setmessage({type:n.message.type,content:n.message.content}),g.functions.memory.removeMemory(a),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(1);case 12:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement(c.Fragment,null,d&&l.a.createElement(y.a,null),l.a.createElement(j.a,{element:"".concat(e.memory.title," isimli an\u0131y\u0131"),elementId:e.memory._id,open:k,handleClose:w,deleteHandler:C}),l.a.createElement("div",{key:e.memory._id,className:"memory-main"},n.name===e.memory.username?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"delete-memory",onClick:function(){x(!0)}},l.a.createElement(v.a,null)),l.a.createElement(h.c,{to:"".concat(a.path,"/").concat(e.memory.title)},l.a.createElement("button",{onClick:function(){return e.setopen2(!0)}},"G\xfcncelle"))):null,l.a.createElement("div",{className:"memory-header"},e.memory.title),l.a.createElement("div",{className:"memory-content"},b()(e.memory.content)),e.memory.imageUrl?l.a.createElement("img",{src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.memory.imageUrl),style:{maxHeight:"40vh",maxWidth:"100%",margin:"1rem auto"}}):null,t))},E=a(2),k=a(149),x=a(383),w=a(75),C=a(131),S=a(48),A=a(46),N=a.n(A),z=a(154),T=function(e){Object(C.a)("(max-width: 800px) and (min-width: 620px)");var t,a,n=Object(C.a)("(max-width: 500px)"),r=Object(C.a)("(max-height: 319px)"),o=Object(C.a)("(max-height: 420px)"),s=(Object(C.a)("(min-height: 1000px)"),Object(c.useState)(!1)),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(f.f)(),b=Object(w.a)({root:{width:"100%",height:"100%",position:"fixed",left:0,top:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:101,pointerEvents:"none"},modal:(t={pointerEvents:"visible",background:"#fe8c00"},Object(S.a)(t,"background","-webkit-linear-gradient(to right, #f83600, #fe8c00)"),Object(S.a)(t,"background","linear-gradient(to right, #70e1f5, #ffd194)"),Object(S.a)(t,"color","black"),Object(S.a)(t,"minWidth","50%"),Object(S.a)(t,"width",n&&"90vw"),Object(S.a)(t,"maxWidth",o?"70%":"90%"),Object(S.a)(t,"overflowY",r?"scroll":"hidden"),Object(S.a)(t,"height","80%"),Object(S.a)(t,"zIndex",102),Object(S.a)(t,"alignItems","center"),Object(S.a)(t,"overflow","hidden"),Object(S.a)(t,"justifyContent","center"),Object(S.a)(t,"fontSize","1.1rem"),Object(S.a)(t,"display","flex"),Object(S.a)(t,"transform",u?"translateY(0)":"translateY(-1200%)"),Object(S.a)(t,"transition","700ms"),t)});a=l.a.createElement(z.a,{backdropClickHandler:function(){sessionStorage.removeItem("memory-modal"),p.push(e.path),d(!1)}}),Object(c.useEffect)((function(){return e.open&&setTimeout((function(){d(!0)}),10),function(){!e.open&&d(!1)}}));var h=b();return N.a.createPortal(l.a.createElement(l.a.Fragment,null,u?a:null,l.a.createElement("div",{className:h.root},l.a.createElement("div",{className:h.modal},e.children))),document.getElementById("memories-modal-root"))},I=a(141),D=a(145),B=a(146),_=function(e){var t,a=Object(C.a)("(max-width: 769px)"),n=Object(C.a)("(max-height: 375px)"),u=Object(c.useContext)(s.a),d=Object(c.useContext)(s.b),p=Object(f.f)(),b=Object(D.a)({image:{value:null,isValid:!1}},!1),h=Object(i.a)(b,3),g=h[0],v=h[1],j=(h[2],Object(c.useState)({title:"",content:""})),O=Object(i.a)(j,2),S=O[0],A=O[1],N=Object(m.a)(),_=N.isLoading,V=(N.error,N.open,N.sendRequest),H=(N.clearError,Object(w.a)({form:{display:"flex",flexDirection:"column",margin:"0 auto",width:a?"97%":"90%",height:"92%",justifyContent:"space-between",textAlign:"center",overflowX:"hidden"},label:{textDecoration:"underline",margin:".3rem auto .2rem auto",fontSize:n?".6rem":"1rem"}})),M=function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),sessionStorage.removeItem("memory-modal"),t.prev=2,(n=new FormData).append("image",g.inputs.image.value),n.append("username",u.name),n.append("kullanici",u.userId),n.append("content",S.content),n.append("title",S.title),t.next=11,V("https://love-website.herokuapp.com/api/memories","POST",n);case 11:o=t.sent,A({title:"",content:""}),v("image","",!1),e.setOpenModal(!1),d.functions.memory.addMemory(o.memory),p.push("/An\u0131lar"),t.next=21;break;case 19:t.prev=19,t.t0=t.catch(2);case 21:case"end":return t.stop()}}),t,null,[[2,19]])})));return function(e){return t.apply(this,arguments)}}(),R=H();return t=l.a.createElement(z.a,{backdropClickHandler:function(){sessionStorage.removeItem("memory-modal"),p.push("/An\u0131lar"),e.setOpenModal(!1)}}),l.a.createElement(l.a.Fragment,null," ",e.open&&t,l.a.createElement(T,{open:e.open},_&&l.a.createElement(y.a,null),l.a.createElement("form",{className:R.form,onSubmit:M},l.a.createElement(k.a,{required:!0,placeholder:"",style:{marginTop:".1rem"},bg:"white",inputStyle:{color:"black",textAlign:"center"},label:"An\u0131 Ba\u015fl\u0131\u011f\u0131",type:"text",name:"memory-header",value:S.title,onChange:function(e){return A(Object(E.a)(Object(E.a)({},S),{},{title:e.target.value}))}}),l.a.createElement("p",{className:R.label},"An\u0131 \u0130\xe7eri\u011fi"),l.a.createElement(I.a,{type:"memory",data:S.content,onChange:function(e,t){var a=t.getData();A(Object(E.a)(Object(E.a)({},S),{},{content:a}))}}),l.a.createElement(B.a,{id:"image",onInput:v,center:!0,errorText:"L\xfctfen Ge\xe7erli Bir Resim Y\xfckleyiniz"}),l.a.createElement(x.a,{style:{flex:1},variant:"contained",color:"primary",fullWidth:!0,type:"submit"},"G\xf6nder"))))},V=a(147),H=a.n(V),M=function(e){var t=Object(C.a)("(max-width: 769px)"),a=Object(C.a)("(max-height: 375px)"),n=Object(f.f)(),u=Object(c.useContext)(s.b),d=Object(w.a)({form:{display:"flex",flexDirection:"column",margin:"0 auto",width:t?"97%":"90%",height:"92%",justifyContent:"space-between",textAlign:"center",overflowX:"hidden"},label:{textDecoration:"underline",margin:".3rem auto .2rem auto",fontSize:a?".6rem":"1rem"},imageDiv:{border:"1px solid",width:"90%",margin:".5rem auto 1rem",paddingTop:"1rem",background:"cadetblue"}}),p=Object(c.useState)({_id:e.m._id,title:e.m.title,content:e.m.content}),b=Object(i.a)(p,2),h=b[0],g=b[1],v=Object(m.a)(),j=v.isLoading,O=(v.error,v.open,v.sendRequest),x=(v.clearError,Object(D.a)({image:{value:null,isValid:!1}},!1)),S=Object(i.a)(x,3),A=S[0],N=S[1],z=(S[2],function(){var t=Object(o.a)(r.a.mark((function t(a){var o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(o=new FormData).append("content",a.content),o.append("title",a.title),t.next=6,O("".concat("https://love-website.herokuapp.com/api","/memories/").concat(a._id),"PATCH",o);case 6:"success"===(i=t.sent).message.type&&u.functions.memory.updateMemory(i.memory),e.setShowSnackbar(!0),e.setmessage({type:i.message.type,content:i.message.content}),e.setopen2(!1),n.goBack(),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()),_=function(){var t=Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O("".concat("https://love-website.herokuapp.com/api","/memories/image/").concat(e.m._id),"DELETE");case 3:a=t.sent,u.functions.memory.removeImageFromMemory(e.m._id),e.setShowSnackbar(!0),e.setmessage({type:a.message.type,content:a.message.content}),e.setopen2(!1),n.goBack(),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),V=function(){var t=Object(o.a)(r.a.mark((function t(){var a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(a=new FormData).append("image",A.inputs.image.value),t.next=5,O("".concat("https://love-website.herokuapp.com/api","/memories/image/").concat(e.m._id),"PATCH",a);case 5:o=t.sent,console.log(o),u.functions.memory.addImageToMemory(o.memory),e.setShowSnackbar(!0),e.setmessage({type:o.message.type,content:o.message.content}),e.setopen2(!1),n.goBack(),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}(),M=d();return l.a.createElement(T,{path:"/An\u0131lar",open:e.open},j&&l.a.createElement(y.a,null),l.a.createElement("form",{className:M.form,onSubmit:function(e){e.preventDefault(),z(h)}},l.a.createElement("div",{className:M.imageDiv},e.m.imageUrl?l.a.createElement(H.a,{onClick:_,color:"secondary",variant:"contained"},"Foto\u011fraf\u0131 Kald\u0131r"):l.a.createElement(H.a,{onClick:V,color:"primary",variant:"contained",disabled:!A.isValid},"Foto\u011fraf\u0131 ekle"),l.a.createElement(B.a,{updateUrl:e.m.imageUrl,id:"image",onInput:N,center:!0,errorText:"L\xfctfen Ge\xe7erli Bir Resim Y\xfckleyiniz"})),l.a.createElement(k.a,{style:{flex:1},inputStyle:{textAlign:"center"},label:"An\u0131 Ba\u015fl\u0131\u011f\u0131",type:"text",value:h.title,onChange:function(e){return g(Object(E.a)(Object(E.a)({},h),{},{title:e.target.value}))}}),l.a.createElement("p",{className:M.label},"An\u0131 \u0130\xe7eri\u011fi"),l.a.createElement(I.a,{type:"memory",style:{flex:15},data:h.content,onChange:function(e,t){var a=t.getData();g(Object(E.a)(Object(E.a)({},h),{},{content:a}))}}),l.a.createElement(H.a,{style:{flex:1},variant:"contained",color:"primary",fullWidth:!0,type:"submit",disabled:e.m.title===h.title&&e.m.content===h.content},e.m.title===h.title&&e.m.content===h.content?"Herhangi bir de\u011fi\u015fiklik yap\u0131lmad\u0131":"G\xf6nder")))},R=a(140),F=a(161);t.default=function(){var e=Object(f.g)(),t=Object(c.useContext)(s.b),a=Object(c.useState)(!1),n=Object(i.a)(a,2),p=n[0],b=n[1],g=Object(c.useState)(!1),v=Object(i.a)(g,2),j=v[0],E=v[1],k=Object(c.useState)({type:"",content:""}),x=Object(i.a)(k,2),w=x[0],C=x[1],S=Object(c.useState)(!1),A=Object(i.a)(S,2),N=A[0],z=A[1],T=t.globalState.memories,I=Object(m.a)(),D=I.isLoading,B=I.error,V=I.open,H=I.sendRequest,L=I.clearError;return Object(c.useEffect)((function(){return b(sessionStorage.getItem("memory-modal"))})),Object(c.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H("".concat("https://love-website.herokuapp.com/api","/memories"));case 3:a=e.sent,t.functions.memory.fetchMemories(a.memories),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[H]),l.a.createElement(c.Fragment,null,l.a.createElement(R.a,{open:N,onClose:function(){return z(!1)},message:w.content,alert:w.type}),l.a.createElement(F.a,{open:V,handleClose:L,error:B}),D&&l.a.createElement(y.a,null),l.a.createElement(f.a,{path:"".concat(e.path,"/yeni-an\u0131-ekle")},l.a.createElement(_,{open:p,setOpenModal:b})),T.map((function(t){return l.a.createElement(f.a,{key:t._id,path:"".concat(e.path,"/").concat(t.title)},l.a.createElement(M,{open:j,setmessage:C,setShowSnackbar:z,setopen2:E,m:t,memories:T}))})),l.a.createElement(d.a,null,"An\u0131lar\u0131m\u0131zz"),l.a.createElement(u.a,null,l.a.createElement("div",{className:"new-memory"},"Yeni an\u0131 eklemek i\xe7in"," ",l.a.createElement("span",{onClick:function(){sessionStorage.setItem("memory-modal",!0),b(!0)}},l.a.createElement(h.c,{to:"".concat(e.path,"/yeni-an\u0131-ekle")},"t\u0131klay\u0131n"))),l.a.createElement("div",{id:"memories"},T.map((function(e){return l.a.createElement(O,{setmessage:C,setShowSnackbar:z,key:e._id,memory:e,setopen2:E})})))))}}}]);
//# sourceMappingURL=9.59f3e54a.chunk.js.map