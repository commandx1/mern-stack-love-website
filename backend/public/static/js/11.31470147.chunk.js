(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11],{135:function(e,t,a){"use strict";var n=a(133),r=a.n(n),c=a(134),i=a(10),l=a(0);t.a=function(e){var t=Object(l.useState)(e),a=Object(i.a)(t,2),n=a[0],s=a[1],o=Object(l.useState)(!1),u=Object(i.a)(o,2),m=u[0],d=u[1],p=Object(l.useState)(),f=Object(i.a)(p,2),g=f[0],b=f[1],h=Object(l.useState)(!1),v=Object(i.a)(h,2),x=v[0],E=v[1],j=Object(l.useRef)([]),O=Object(l.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,c,i,l,s,o=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,c=o.length>3&&void 0!==o[3]?o[3]:{},d(!0),i=new AbortController,j.current.push(i),e.prev=6,e.next=9,fetch(t,{method:a,body:n,headers:c,signal:i.signal});case 9:return l=e.sent,e.next=12,l.json();case 12:if(s=e.sent,j.current=j.current.filter((function(e){return e!==i})),l.ok){e.next=16;break}throw new Error(s.message);case 16:return d(!1),e.abrupt("return",s);case 20:throw e.prev=20,e.t0=e.catch(6),b(e.t0.message),d(!1),E(!0),e.t0;case 26:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(l.useEffect)((function(){return function(){j.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:m,error:g,open:x,sendRequest:O,clearError:function(){b(null),E(!1),s("")},state:n}}},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(163);t.a=function(e){return r.a.createElement("div",{onClick:e.backdropClickHandler,className:"backdrop"})}},155:function(e,t){},163:function(e,t,a){},176:function(e,t,a){e.exports=a.p+"static/media/deneme2.a637893e.png"},235:function(e,t,a){},236:function(e,t,a){e.exports=a.p+"static/media/slide1.61ad9cbf.jpeg"},237:function(e,t,a){e.exports=a.p+"static/media/deneme4.280ba9a5.png"},238:function(e,t,a){e.exports=a.p+"static/media/deneme3.9c317f44.png"},239:function(e,t,a){},240:function(e,t,a){e.exports=a.p+"static/media/serhat.414779bf.png"},241:function(e,t,a){e.exports=a.p+"static/media/ceren.4d589a78.jpg"},283:function(e,t,a){"use strict";var n=a(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(76)).default)(r.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=c},284:function(e,t,a){"use strict";var n=a(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(76)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.default=c},285:function(e,t,a){},389:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a(75),l=(a(235),a(236)),s=a.n(l),o=a(176),u=a.n(o),m=a(237),d=a.n(m),p=a(238),f=a.n(p),g=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(0),m=Object(c.a)(o,2),p=(m[0],m[1]),g=Object(n.useState)(0),b=Object(c.a)(g,2),h=b[0],v=b[1],x=Object(i.a)({images:{width:a?"130%":"100%",height:a?"130%":"100%",strokeOpacity:"initial",transition:"35s"}})(),E=[r.a.createElement("img",{src:s.a,className:x.images,alt:"slide1"}),r.a.createElement("img",{src:u.a,className:x.images,alt:"slide2"}),r.a.createElement("img",{src:f.a,className:x.images,alt:"slide3"}),r.a.createElement("img",{src:d.a,className:x.images,alt:"slide4"})];return Object(n.useEffect)((function(){return p(1),setTimeout((function(){h===-100*(E.length-1)?v(0):v(h-100),l(!a)}),4e3),function(){p(0)}}),[h]),r.a.createElement("div",{className:"slider","data-aos":"fade-in","data-aos-duration":"1500"},E.map((function(e,t){return r.a.createElement("div",{key:t,className:"slide",style:{transform:"translateX(".concat(h,"%)")}},e)})))},b=(a(239),a(240)),h=a.n(b),v=a(241),x=a.n(v),E=function(){return r.a.createElement("div",{className:"images-container"},r.a.createElement("div",{className:"card","data-aos":"fade-left","data-aos-duration":"500"},r.a.createElement("h3",null,"Serhat"),r.a.createElement("img",{src:h.a,alt:"serhat"}),r.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eum!")),r.a.createElement("div",{id:"heart"}),r.a.createElement("div",{className:"card","data-aos":"fade-right","data-aos-duration":"500"},r.a.createElement("h3",null,"Ceren"),r.a.createElement("img",{src:x.a,alt:"ceren"}),r.a.createElement("p",null,"29 Kas\u0131m'da d\xfcnyaya g\xfcne\u015f gibi do\u011fan, sar\u0131 bir yavru ceylan...")))},j=a(131),O=function(e){Object(j.a)("(max-width:769px)");var t=Object(i.a)({date:{textAlign:"center",padding:".7rem",border:"2px solid #bb0d0d",color:"black",width:"100%",fontSize:"1.5rem",fontFamily:"Arial",fontWeight:600,boxShadow:"-1px 2px 4px rgba(255, 120, 120, .6)"},root:{margin:"10% auto",maxWidth:"300px",display:"flex",flexDirection:"column"},flex1:{display:"flex",width:"100%",height:"60px"},flex11:{borderRight:"2px solid #bb0d0d",flex:1},flex12:{flex:1}})();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"".concat(t.root," ").concat(e.className),"data-aos":"fade-up"},r.a.createElement("div",{className:t.flex1},r.a.createElement("div",{className:t.flex11}),r.a.createElement("div",{className:t.flex12})),r.a.createElement("div",{className:t.date},"18.06.2019 - \ua74e ")))},k=a(133),w=a.n(k),y=a(134),N=a(48),S=a(14),L=a(135),A=a(7),C=a(153),z=function(){var e,t,a,l=Object(L.a)(),s=l.isLoading,o=(l.error,l.sendRequest),u=(l.clearError,Object(n.useContext)(S.a)),m=Object(n.useState)(!1),d=Object(c.a)(m,2),p=d[0],f=d[1],g=Object(n.useState)(""),b=Object(c.a)(g,2),h=b[0],v=b[1],x=Object(n.useState)([]),E=Object(c.a)(x,2),O=E[0],k=E[1],z=Object(j.a)("(max-width:769px)"),F=Object(j.a)("(max-width:650px)");a=F?"75px":z?"150px":"200px";var R=Object(i.a)({root:{width:"100%",backgroundPosition:"center",marginTop:"5%",padding:"3rem",display:"flex",flexDirection:"column"},images:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},image:{margin:z?"3%":"1%",width:a,border:"1px solid wheat",borderRadius:"3rem",boxShadow:"2px 3px 1px rgba(255, 255, 255, .5)",marginBottom:z&&"2rem",transition:"400ms",cursor:"pointer","&:hover":{opacity:"0.7",transform:"scale(1.1)"}},link:(t={fontSize:z?"1.1rem":"1.6rem",fontWeight:700,textDecoration:"none",borderRadius:"3rem",margin:"3% auto 0",padding:"1rem",color:"white",fontFamily:"Arial",background:" #FF0099"},Object(N.a)(t,"background","-webkit-linear-gradient(to right, #493240, #FF0099)"),Object(N.a)(t,"background","linear-gradient(to right, #493240, #FF0099)"),Object(N.a)(t,"transition",".5s"),Object(N.a)(t,"&:hover",(e={background:"#1f4037"},Object(N.a)(e,"background","-webkit-linear-gradient(to right, #99f2c8, #1f4037)"),Object(N.a)(e,"background","linear-gradient(to right, #99f2c8, #1f4037)"),Object(N.a)(e,"color","black"),e)),t),bigImage:{position:"fixed",display:"flex",alignItems:"center",width:" 100%",height:"100%",pointerEvents:"none",zIndex:101,top:0,left:0,justifyContent:"center"},img:{zIndex:102,pointerEvents:"auto",borderRadius:"2rem",maxWidth:z?"80%":"90%",maxHeight:z?"80%":"90%",transform:p?"translateX(0)":"translateX(-400%)",transition:"500ms"}})();return Object(n.useEffect)((function(){(function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("https://love-website.herokuapp.com/api/upload");case 3:t=e.sent,k(t.images),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,p&&r.a.createElement(C.a,{backdropClickHandler:function(){return f(!1)}}),r.a.createElement("div",{className:R.bigImage},r.a.createElement("img",{className:R.img,src:h,alt:""})),!s&&O.length>0&&r.a.createElement("div",{className:R.root},r.a.createElement("div",{className:R.images},O.map((function(e,t){return r.a.createElement("div",{key:e._id,"data-aos":0===t?"fade-left":1===t?"zoom":"fade-right","data-aos-easing":"linear","data-aos-duration":"500"},r.a.createElement("img",{onClick:function(){f(!0),v("".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.imageUrl))},className:R.image,src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.imageUrl),alt:"x"}))}))),u.isLoggedIn?r.a.createElement(A.c,{to:"/Galeri",className:R.link},"Galeriye gitmek i\xe7in t\u0131klay\u0131n"):r.a.createElement(A.c,{to:"/Login",className:R.link},"Galeriyi g\xf6rmek i\xe7in giri\u015f yapmal\u0131s\u0131n\u0131z")))},F=Object(i.a)({root:{display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%",textAlign:"center",padding:"1rem",marginBottom:"2rem",fontSize:"1.15rem",color:"rgba(13, 10, 0, .8)",fontFamily:"Itim, cursive",fontWeight:100,flexWrap:"wrap"},lasts:{backgroundColor:"rgba(255, 255, 255, .6)",width:"500px",border:"3px solid white",padding:".5rem",margin:"1rem",boxShadow:"2px 3px 2px rgba(0, 0, 0, .5)"},date:{margin:"8px auto 4px",textAlign:"right",textDecoration:"overline",color:"#751B09",width:"auto",fontSize:".9rem",textTransform:"capitalize"},links:{background:"#FAD2DE ",fontSize:"1.3rem",textTransform:"uppercase",borderRadius:"1rem",float:"right",marginTop:"1rem",padding:".5rem 2rem",cursor:"pointer",transition:"300ms",border:"none",display:"flex","&:hover":{background:"#F17FA0 "}}}),R=a(284),I=a.n(R),D=a(283),M=a.n(D),T=a(142),W=a.n(T),_=function(){var e=Object(L.a)(),t=e.sendRequest,a=e.isLoading,i=Object(n.useState)(),l=Object(c.a)(i,2),s=l[0],o=l[1],u=Object(n.useState)(),m=Object(c.a)(u,2),d=m[0],p=m[1],f=(Object(n.useContext)(S.b),Object(n.useContext)(S.a));Object(n.useEffect)((function(){(function(){var e=Object(y.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("".concat("https://love-website.herokuapp.com/api","/memories/getfirstthree"));case 3:a=e.sent,o(a.memories),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.useEffect)((function(){(function(){var e=Object(y.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("".concat("https://love-website.herokuapp.com/api","/poems/getfirst"));case 3:a=e.sent,p(a.poem[0]),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var g=F();return r.a.createElement("div",{className:g.root,"data-aos":"fade-up"},r.a.createElement("div",{className:g.lasts},r.a.createElement("h3",{style:{color:"red",textTransform:"uppercase"}},"Son An\u0131lar"),!a&&s&&s.map((function(e,t){return r.a.createElement("div",{key:t},e.title,W()(e.content.substr(0,200)+"..."),r.a.createElement("div",{className:g.date},e.username," - ",e.update),r.a.createElement("hr",null))})),f.isLoggedIn?r.a.createElement(A.c,{to:"/An\u0131lar"},r.a.createElement("button",{className:g.links},r.a.createElement(M.a,null),"An\u0131lar",r.a.createElement(I.a,null))):null),!a&&d&&r.a.createElement("div",{className:g.lasts},r.a.createElement("h3",{style:{color:"red",textTransform:"uppercase"}},"Son \u015eiir"),r.a.createElement("div",{style:{fontFamily:"Dancing Script"}},W()(d.content)),f.isLoggedIn?r.a.createElement(A.c,{to:"/\u015eiirler"},r.a.createElement("button",{className:g.links},r.a.createElement(M.a,null),"\u015eiirler",r.a.createElement(I.a,null))):null))},q=(a(285),function(){var e=Object(L.a)(),t=(e.error,e.open,e.clearError,e.sendRequest),a=e.isLoading,i=Object(n.useState)([]),l=Object(c.a)(i,2),s=l[0],o=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(y.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("https://love-website.herokuapp.com/api/telltales/getfirstthree");case 3:a=e.sent,o(a.telltales),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),!a&&s.length>0&&r.a.createElement("div",{id:"masal-info","data-aos":"fade-up"},r.a.createElement("div",{id:"homepage-masal-title"},r.a.createElement("p",null,"........."),r.a.createElement("h2",null,"MASALLAR DiYARI"),r.a.createElement("p",null,".........")),r.a.createElement("div",{className:"homepage-masallar"},s.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("p",null,e.title),r.a.createElement("img",{src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.imageUrl),alt:e.title}),r.a.createElement(A.c,{to:"/Masallar/".concat(e.title)},"Masal\u0131 okumak i\xe7in t\u0131klay\u0131n..."))}))),r.a.createElement(A.c,{id:"masallar-btn",to:"/Masallar"},"Masallar sayfas\u0131na ilerle"))});t.default=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g,null),r.a.createElement(E,null),r.a.createElement(O,null),r.a.createElement(z,null),r.a.createElement(_,null),r.a.createElement(q,null))}}}]);
//# sourceMappingURL=11.31470147.chunk.js.map