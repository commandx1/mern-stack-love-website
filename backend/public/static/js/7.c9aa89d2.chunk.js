(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{267:function(e,t,a){"use strict";var n=a(4),r=a(0),o=a.n(r),c=a(292),l=a.n(c),i=a(294),s=a.n(i),m=(a(281),[{color:"hsl(0, 0%, 0%)",label:"Siyah"},{color:"hsl(0, 0%, 30%)",label:"Koyu gri"},{color:"hsl(0, 0%, 60%)",label:"Gri"},{color:"hsl(0, 0%, 90%)",label:"A\xe7\u0131k gri"},{color:"hsl(0, 0%, 100%)",label:"Beyaz",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"K\u0131rm\u0131z\u0131"},{color:"hsl(30, 75%, 60%)",label:"Turuncu"},{color:"hsl(60, 75%, 60%)",label:"Sar\u0131"},{color:"hsl(90, 75%, 60%)",label:"A\xe7\u0131k ye\u015fil"},{color:"hsl(120, 75%, 60%)",label:"Ye\u015fil"},{color:"hsl(150, 75%, 60%)",label:"Akuamarin"},{color:"hsl(180, 75%, 60%)",label:"Turkuaz"},{color:"hsl(210, 75%, 60%)",label:"A\xe7\u0131k mavi"},{color:"hsl(240, 75%, 60%)",label:"Mavi"},{color:"hsl(270, 75%, 60%)",label:"Mor"}]),u={fontColor:{columns:3,colors:m},fontBackgroundColor:{columns:3,colors:m},fontSize:{options:[{title:"\xc7ok K\xfc\xe7\xfck",model:"0.5rem"},{title:"K\xfc\xe7\xfck",model:"0.75rem"},{title:"Normal",model:"1rem"},{title:"B\xfcy\xfck",model:"1.25rem"},{title:"\xc7ok B\xfcy\xfck",model:"1.5rem"}]},heading:{options:[{model:"paragraph",title:"Paragraf",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Ba\u015fl\u0131k 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Ba\u015fl\u0131k 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Ba\u015fl\u0131k 3",class:"ck-heading_heading3"}]}};t.a=function(e){var t;switch(e.type){case"memory":t=["heading","|","fontSize","bold","italic","fontColor","fontBackgroundColor","bulletedList","blockQuote","undo","redo"];break;case"poem":t=["bold","italic","fontColor","underline","undo","redo"];break;case"telltale":t=["heading","|","fontSize","bold","italic","fontColor","fontBackgroundColor","alignment","underline","strikeThrough","bulletedList","numberedList","blockQuote","link","undo","redo"];break;case"blog":t=["heading","|","fontSize","bold","italic","fontColor","fontBackgroundColor","alignment","insertTable","insertImage","underline","strikeThrough","bulletedList","numberedList","blockQuote","link","undo","redo"]}return o.a.createElement("div",{style:e.style},o.a.createElement(l.a,{onInit:function(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},value:e.value,data:e.data,onChange:e.onChange,editor:s.a,config:Object(n.a)(Object(n.a)({},u),{},{toolbar:t})}))}},269:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),o=a(470),c=a(467);function l(e){var t=e.open,a=e.message,n=e.alert,l=e.onClose;function i(e){return r.a.createElement(c.a,Object.assign({elevation:6,variant:"filled"},e))}return r.a.createElement("div",null,r.a.createElement(o.a,{autoHideDuration:6e3,onClose:l,anchorOrigin:{vertical:"top",horizontal:"right"},key:"top, right",open:t},r.a.createElement(i,{severity:n,onClose:l},a)))}},270:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(7),r=a(90),o=a(4),c=a(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(o.a)(Object(o.a)({},e),{},{inputs:Object(o.a)(Object(o.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},i=function(e,t){var a=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(n.a)(a,2),o=r[0],i=r[1];return[o,Object(c.useCallback)((function(e,t,a){i({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(c.useCallback)((function(e,t){i({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},271:function(e,t,a){"use strict";var n=a(7),r=a(0),o=a.n(r),c=a(272),l=a.n(c),i=a(296),s=a.n(i);a(295);t.a=function(e){var t,a=Object(r.useState)(),c=Object(n.a)(a,2),i=c[0],m=c[1],u=Object(r.useState)(),d=Object(n.a)(u,2),p=d[0],b=d[1],f=Object(r.useState)(!1),h=Object(n.a)(f,2),g=h[0],v=h[1],y=Object(r.useRef)();t=p?o.a.createElement("img",{src:p,alt:"preview"}):e.updateUrl?o.a.createElement("img",{src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.updateUrl),alt:"update"}):null,Object(r.useEffect)((function(){if(i){var e=new FileReader;e.onload=function(){b(e.result)},e.readAsDataURL(i)}}),[i]);return o.a.createElement("div",{className:"form-control"},o.a.createElement("input",{id:e.id,ref:y,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=g;t.target.files&&1===t.target.files.length?(a=t.target.files[0],m(a),v(!0),n=!0):(v(!1),n=!1),e.onInput(e.id,a,n)}}),o.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},o.a.createElement("div",{className:"image-upload__preview"},t,!p&&!e.updateUrl&&o.a.createElement("p",null,"A\u015fa\u011f\u0131daki butona basarak foto\u011fraf ekleyebilirsin \ud83d\ude09")),e.updateUrl?null:o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{className:"image-form-button",variant:"contained",color:"primary",type:"button",onClick:function(){y.current.click()}},o.a.createElement(s.a,null)),!g&&o.a.createElement("p",{style:{color:"red",fontWeight:"600",textAlign:"center"}},"L\xfctfen .png, .jpg, .jpeg formatlar\u0131nda bir resim dosyas\u0131 ekleyiniz"))))}},273:function(e,t,a){"use strict";var n=a(7),r=a(0),o=a.n(r),c=a(146),l=a(259);t.a=function(e){var t,a,i,s=e.placeholder,m=e.style,u=e.name,d=e.label,p=e.type,b=e.onChange,f=e.inputStyle,h=e.required,g=e.value,v=e.bg,y=Object(l.a)("(max-width: 769px)");t=Object(l.a)("(max-height: 350px)")?".7rem":y?".9rem":"1.3rem",i="white"===(a=v||"#41AD19")?"black":"white";var j=Object(r.useState)(!1),O=Object(n.a)(j,2),k=O[0],E=O[1],x=Object(c.a)({root:{textAlign:"center",fontSize:t},label:{textDecoration:"underline"},input:{transition:"300ms",width:"100%",backgroundColor:k?"#EBF39C":a,color:k?"black":i,border:".5px solid green",borderRadius:"1rem",letterSpacing:"0.04rem",fontSize:t}})();return o.a.createElement("div",{style:m,className:x.root},o.a.createElement("label",{className:x.label,htmlFor:u},d),o.a.createElement("input",{name:u,className:x.input,type:p,onChange:b,onFocus:function(){return E(!0)},onBlur:function(){return E(!1)},style:f,required:h,value:g,placeholder:s}))}},275:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(279);t.a=function(e){return r.a.createElement("div",{onClick:e.backdropClickHandler,className:"backdrop"})}},277:function(e,t){},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(7),r=a(90),o=a(0),c=a.n(o),l=a(243),i=a(265);function s(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var m=Object(l.a)((function(e){var t;return{paper:(t={transform:"translate(-50%, -50%)",position:"absolute",borderRadius:"30px",width:500,background:"#ED213A"},Object(r.a)(t,"background","-webkit-linear-gradient(to right, #93291E, #ED213A)"),Object(r.a)(t,"background","linear-gradient(to right, #93291E, #ED213A)"),Object(r.a)(t,"border","2px solid #000"),Object(r.a)(t,"boxShadow",e.shadows[5]),Object(r.a)(t,"padding",e.spacing(2,4,3)),Object(r.a)(t,"color","white"),t)}}));function u(e){var t=m(),a=c.a.useState(s),r=Object(n.a)(a,1)[0],o=c.a.createElement("div",{style:r,className:t.paper},c.a.createElement("h2",{id:"simple-modal-title"},"Bir hata meydana geldi!"),c.a.createElement("p",{id:"simple-modal-description"},e.error));return c.a.createElement(i.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},o)}},279:function(e,t,a){},281:function(e,t,a){},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(243),c=a(265),l=a(262),i=a(247),s=a(259),m=a(451);a(290);function u(e){var t=e.open,a=e.handleClose,n=e.deleteHandler,u=e.elementId,d=e.element,p=Object(s.a)("(max-width: 769px)"),b=Object(o.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:p&&"90%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))();return r.a.createElement(c.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:b.modal,open:t,onClose:a,closeAfterTransition:!0,BackdropComponent:l.a,BackdropProps:{timeout:500}},r.a.createElement(i.a,{in:t},r.a.createElement("div",{className:b.paper},r.a.createElement("h2",{id:"transition-modal-title"},d," silmek istedi\u011finize emin misiniz? \ud83e\udd14"),r.a.createElement(m.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){return n(u)}},"Sil"),r.a.createElement(m.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return a()}},"Vazge\xe7"))))}},290:function(e,t,a){},291:function(e,t,a){"use strict";var n=a(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(56)).default)(r.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},295:function(e,t,a){},296:function(e,t,a){"use strict";var n=a(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(56)).default)(r.default.createElement("path",{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"}),"AddAPhoto");t.default=o},390:function(e,t,a){},468:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a.n(n),o=a(38),c=a(7),l=a(0),i=a.n(l),s=a(20),m=a(89),u=(a(390),a(91)),d=a(93),p=a(268),b=a.n(p),f=a(8),h=a(10),g=a(291),v=a.n(g),y=a(54),j=a(285),O=function(e){var t,a=Object(f.g)(),n=Object(l.useContext)(s.a),u=Object(m.a)(),d=u.isLoading,p=(u.error,u.open,u.sendRequest),g=(u.clearError,Object(l.useContext)(s.b)),O=Object(l.useState)(!1),k=Object(c.a)(O,2),E=k[0],x=k[1],w=function(){x(!1)};t=e.memory.date===e.memory.update?i.a.createElement("div",{className:"memory-date"},e.memory.date," tarihinde yay\u0131mland\u0131 ",e.memory.username):i.a.createElement("div",{className:"memory-date update-day"},e.memory.update," tarihinde g\xfcncellendi ",e.memory.username);var C=function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(),t.prev=1,t.next=4,p("".concat("https://love-website.herokuapp.com/api","/memories/").concat(a),"DELETE");case 4:n=t.sent,e.setShowSnackbar(!0),e.setmessage({type:n.message.type,content:n.message.content}),g.functions.memory.removeMemory(a),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(1);case 12:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return i.a.createElement(l.Fragment,null,d&&i.a.createElement(y.a,null),i.a.createElement(j.a,{element:"".concat(e.memory.title," isimli an\u0131y\u0131"),elementId:e.memory._id,open:E,handleClose:w,deleteHandler:C}),i.a.createElement("div",{key:e.memory._id,className:"memory-main"},n.name===e.memory.username?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"delete-memory",onClick:function(){x(!0)}},i.a.createElement(v.a,null)),i.a.createElement(h.c,{to:"".concat(a.path,"/").concat(e.memory.title)},i.a.createElement("button",{onClick:function(){return e.setopen2(!0)}},"G\xfcncelle"))):null,i.a.createElement("div",{className:"memory-header"},e.memory.title),i.a.createElement("div",{className:"memory-content"},b()(e.memory.content)),e.memory.imageUrl?i.a.createElement("img",{src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.memory.imageUrl),style:{maxHeight:"40vh",maxWidth:"100%",margin:"1rem auto"}}):null,t))},k=a(4),E=a(273),x=a(451),w=a(146),C=a(259),S=a(90),A=a(13),I=a.n(A),z=a(275),N=function(e){Object(C.a)("(max-width: 800px) and (min-width: 620px)");var t,a,n=Object(C.a)("(max-width: 500px)"),r=Object(C.a)("(max-height: 319px)"),o=Object(C.a)("(max-height: 420px)"),s=(Object(C.a)("(min-height: 1000px)"),Object(l.useState)(!1)),m=Object(c.a)(s,2),u=m[0],d=m[1],p=Object(f.f)(),b=Object(w.a)({root:{width:"100%",height:"100%",position:"fixed",left:0,top:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:101,pointerEvents:"none"},modal:(t={pointerEvents:"visible",background:"#fe8c00"},Object(S.a)(t,"background","-webkit-linear-gradient(to right, #f83600, #fe8c00)"),Object(S.a)(t,"background","linear-gradient(to right, #70e1f5, #ffd194)"),Object(S.a)(t,"color","black"),Object(S.a)(t,"minWidth","50%"),Object(S.a)(t,"width",n&&"90vw"),Object(S.a)(t,"maxWidth",o?"70%":"90%"),Object(S.a)(t,"overflowY",r?"scroll":"hidden"),Object(S.a)(t,"height","80%"),Object(S.a)(t,"zIndex",102),Object(S.a)(t,"alignItems","center"),Object(S.a)(t,"overflow","hidden"),Object(S.a)(t,"justifyContent","center"),Object(S.a)(t,"fontSize","1.1rem"),Object(S.a)(t,"display","flex"),Object(S.a)(t,"transform",u?"translateY(0)":"translateY(-1200%)"),Object(S.a)(t,"transition","700ms"),t)});a=i.a.createElement(z.a,{backdropClickHandler:function(){sessionStorage.removeItem("memory-modal"),p.push(e.path),d(!1)}}),Object(l.useEffect)((function(){return e.open&&setTimeout((function(){d(!0)}),10),function(){!e.open&&d(!1)}}));var h=b();return I.a.createPortal(i.a.createElement(i.a.Fragment,null,u?a:null,i.a.createElement("div",{className:h.root},i.a.createElement("div",{className:h.modal},e.children))),document.getElementById("memories-modal-root"))},T=a(267),B=a(270),D=a(271),_=function(e){var t,a=Object(C.a)("(max-width: 769px)"),n=Object(C.a)("(max-height: 375px)"),u=Object(l.useContext)(s.a),d=Object(l.useContext)(s.b),p=Object(f.f)(),b=Object(B.a)({image:{value:null,isValid:!1}},!1),h=Object(c.a)(b,3),g=h[0],v=h[1],j=(h[2],Object(l.useState)({title:"",content:""})),O=Object(c.a)(j,2),S=O[0],A=O[1],I=Object(m.a)(),_=I.isLoading,V=(I.error,I.open,I.sendRequest),H=(I.clearError,Object(w.a)({form:{display:"flex",flexDirection:"column",margin:"0 auto",width:a?"97%":"90%",height:"92%",justifyContent:"space-between",textAlign:"center",overflowX:"hidden"},label:{textDecoration:"underline",margin:".3rem auto .2rem auto",fontSize:n?".6rem":"1rem"}})),F=function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),sessionStorage.removeItem("memory-modal"),t.prev=2,(n=new FormData).append("image",g.inputs.image.value),n.append("username",u.name),n.append("kullanici",u.userId),n.append("content",S.content),n.append("title",S.title),t.next=11,V("https://love-website.herokuapp.com/api/memories","POST",n);case 11:o=t.sent,A({title:"",content:""}),v("image","",!1),e.setOpenModal(!1),d.functions.memory.addMemory(o.memory),t.next=20;break;case 18:t.prev=18,t.t0=t.catch(2);case 20:return t.prev=20,t.next=23,V("https://love-website.herokuapp.com/api/notifications","POST",JSON.stringify({userId:u.userId,username:u.name,redirect:"/An\u0131lar",content:"".concat(u.name," bir an\u0131 payla\u015ft\u0131.")}),{"Content-Type":"application/json"});case 23:p.push("/An\u0131lar"),t.next=28;break;case 26:t.prev=26,t.t1=t.catch(20);case 28:case"end":return t.stop()}}),t,null,[[2,18],[20,26]])})));return function(e){return t.apply(this,arguments)}}(),M=H();return t=i.a.createElement(z.a,{backdropClickHandler:function(){sessionStorage.removeItem("memory-modal"),p.push("/An\u0131lar"),e.setOpenModal(!1)}}),i.a.createElement(i.a.Fragment,null," ",e.open&&t,i.a.createElement(N,{open:e.open},_&&i.a.createElement(y.a,null),i.a.createElement("form",{className:M.form,onSubmit:F},i.a.createElement(E.a,{required:!0,placeholder:"",style:{marginTop:".1rem"},bg:"white",inputStyle:{color:"black",textAlign:"center"},label:"An\u0131 Ba\u015fl\u0131\u011f\u0131",type:"text",name:"memory-header",value:S.title,onChange:function(e){return A(Object(k.a)(Object(k.a)({},S),{},{title:e.target.value}))}}),i.a.createElement("p",{className:M.label},"An\u0131 \u0130\xe7eri\u011fi"),i.a.createElement(T.a,{type:"memory",data:S.content,onChange:function(e,t){var a=t.getData();A(Object(k.a)(Object(k.a)({},S),{},{content:a}))}}),i.a.createElement(D.a,{id:"image",onInput:v,center:!0,errorText:"L\xfctfen Ge\xe7erli Bir Resim Y\xfckleyiniz"}),i.a.createElement(x.a,{style:{flex:1},variant:"contained",color:"primary",fullWidth:!0,type:"submit"},"G\xf6nder"))))},V=a(272),H=a.n(V),F=function(e){var t=Object(C.a)("(max-width: 769px)"),a=Object(C.a)("(max-height: 375px)"),n=Object(f.f)(),u=Object(l.useContext)(s.b),d=Object(l.useContext)(s.a),p=Object(w.a)({form:{display:"flex",flexDirection:"column",margin:"0 auto",width:t?"97%":"90%",height:"92%",justifyContent:"space-between",textAlign:"center",overflowX:"hidden"},label:{textDecoration:"underline",margin:".3rem auto .2rem auto",fontSize:a?".6rem":"1rem"},imageDiv:{border:"1px solid",width:"90%",margin:".5rem auto 1rem",paddingTop:"1rem",background:"cadetblue"}}),b=Object(l.useState)({_id:e.m._id,title:e.m.title,content:e.m.content}),h=Object(c.a)(b,2),g=h[0],v=h[1],j=Object(m.a)(),O=j.isLoading,x=(j.error,j.open,j.sendRequest),S=(j.clearError,Object(B.a)({image:{value:null,isValid:!1}},!1)),A=Object(c.a)(S,3),I=A[0],z=A[1],_=(A[2],function(){var t=Object(o.a)(r.a.mark((function t(a){var o,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(o=new FormData).append("content",a.content),o.append("title",a.title),t.next=6,x("".concat("https://love-website.herokuapp.com/api","/memories/").concat(a._id),"PATCH",o);case 6:"success"===(c=t.sent).message.type&&u.functions.memory.updateMemory(c.memory),e.setShowSnackbar(!0),e.setmessage({type:c.message.type,content:c.message.content}),e.setopen2(!1),t.next=15;break;case 13:t.prev=13,t.t0=t.catch(0);case 15:return t.prev=15,t.next=18,x("https://love-website.herokuapp.com/api/notifications","POST",JSON.stringify({userId:d.userId,username:d.name,redirect:"/An\u0131lar",content:"".concat(d.name," bir an\u0131y\u0131 g\xfcncelledi.")}),{"Content-Type":"application/json"});case 18:n.goBack(),t.next=23;break;case 21:t.prev=21,t.t1=t.catch(15);case 23:case"end":return t.stop()}}),t,null,[[0,13],[15,21]])})));return function(e){return t.apply(this,arguments)}}()),V=function(){var t=Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x("".concat("https://love-website.herokuapp.com/api","/memories/image/").concat(e.m._id),"DELETE");case 3:a=t.sent,u.functions.memory.removeImageFromMemory(e.m._id),e.setShowSnackbar(!0),e.setmessage({type:a.message.type,content:a.message.content}),e.setopen2(!1),n.goBack(),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),F=function(){var t=Object(o.a)(r.a.mark((function t(){var a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(a=new FormData).append("image",I.inputs.image.value),t.next=5,x("".concat("https://love-website.herokuapp.com/api","/memories/image/").concat(e.m._id),"PATCH",a);case 5:o=t.sent,console.log(o),u.functions.memory.addImageToMemory(o.memory),e.setShowSnackbar(!0),e.setmessage({type:o.message.type,content:o.message.content}),e.setopen2(!1),n.goBack(),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}(),M=p();return i.a.createElement(N,{path:"/An\u0131lar",open:e.open},O&&i.a.createElement(y.a,null),i.a.createElement("form",{className:M.form,onSubmit:function(e){e.preventDefault(),_(g)}},i.a.createElement("div",{className:M.imageDiv},e.m.imageUrl?i.a.createElement(H.a,{onClick:V,color:"secondary",variant:"contained"},"Foto\u011fraf\u0131 Kald\u0131r"):i.a.createElement(H.a,{onClick:F,color:"primary",variant:"contained",disabled:!I.isValid},"Foto\u011fraf\u0131 ekle"),i.a.createElement(D.a,{updateUrl:e.m.imageUrl,id:"image",onInput:z,center:!0,errorText:"L\xfctfen Ge\xe7erli Bir Resim Y\xfckleyiniz"})),i.a.createElement(E.a,{style:{flex:1},inputStyle:{textAlign:"center"},label:"An\u0131 Ba\u015fl\u0131\u011f\u0131",type:"text",value:g.title,onChange:function(e){return v(Object(k.a)(Object(k.a)({},g),{},{title:e.target.value}))}}),i.a.createElement("p",{className:M.label},"An\u0131 \u0130\xe7eri\u011fi"),i.a.createElement(T.a,{type:"memory",style:{flex:15},data:g.content,onChange:function(e,t){var a=t.getData();v(Object(k.a)(Object(k.a)({},g),{},{content:a}))}}),i.a.createElement(H.a,{style:{flex:1},variant:"contained",color:"primary",fullWidth:!0,type:"submit",disabled:e.m.title===g.title&&e.m.content===g.content},e.m.title===g.title&&e.m.content===g.content?"Herhangi bir de\u011fi\u015fiklik yap\u0131lmad\u0131":"G\xf6nder")))},M=a(269),L=a(278);t.default=function(){var e=Object(f.g)(),t=Object(l.useContext)(s.b),a=Object(l.useState)(!1),n=Object(c.a)(a,2),p=n[0],b=n[1],g=Object(l.useState)(!1),v=Object(c.a)(g,2),j=v[0],k=v[1],E=Object(l.useState)({type:"",content:""}),x=Object(c.a)(E,2),w=x[0],C=x[1],S=Object(l.useState)(!1),A=Object(c.a)(S,2),I=A[0],z=A[1],N=t.globalState.memories,T=Object(m.a)(),B=T.isLoading,D=T.error,V=T.open,H=T.sendRequest,P=T.clearError;return Object(l.useEffect)((function(){return b(sessionStorage.getItem("memory-modal"))})),Object(l.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H("".concat("https://love-website.herokuapp.com/api","/memories"));case 3:a=e.sent,t.functions.memory.fetchMemories(a.memories),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[H]),i.a.createElement(l.Fragment,null,i.a.createElement(d.a,null,"An\u0131lar\u0131m\u0131zz"),i.a.createElement(M.a,{open:I,onClose:function(){return z(!1)},message:w.content,alert:w.type}),i.a.createElement(L.a,{open:V,handleClose:P,error:D}),B&&i.a.createElement(y.a,null),i.a.createElement(f.a,{path:"".concat(e.path,"/yeni-an\u0131-ekle")},i.a.createElement(_,{open:p,setOpenModal:b})),N.map((function(t){return i.a.createElement(f.a,{key:t._id,path:"".concat(e.path,"/").concat(t.title)},i.a.createElement(F,{open:j,setmessage:C,setShowSnackbar:z,setopen2:k,m:t,memories:N}))})),i.a.createElement(u.a,null,i.a.createElement("div",{className:"new-memory"},"Yeni an\u0131 eklemek i\xe7in"," ",i.a.createElement("span",{onClick:function(){sessionStorage.setItem("memory-modal",!0),b(!0)}},i.a.createElement(h.c,{to:"".concat(e.path,"/yeni-an\u0131-ekle")},"t\u0131klay\u0131n"))),i.a.createElement("div",{id:"memories"},N.map((function(e){return i.a.createElement(O,{setmessage:C,setShowSnackbar:z,key:e._id,memory:e,setopen2:k})})))))}}}]);
//# sourceMappingURL=7.c9aa89d2.chunk.js.map