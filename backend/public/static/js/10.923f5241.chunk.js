(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[10],{267:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),o=a(470),c=a(467);function l(e){var t=e.open,a=e.message,n=e.alert,l=e.onClose;function i(e){return r.a.createElement(c.a,Object.assign({elevation:6,variant:"filled"},e))}return r.a.createElement("div",null,r.a.createElement(o.a,{autoHideDuration:6e3,onClose:l,anchorOrigin:{vertical:"top",horizontal:"right"},key:"top, right",open:t},r.a.createElement(i,{severity:n,onClose:l},a)))}},268:function(e,t,a){"use strict";var n=a(4),r=a(0),o=a.n(r),c=a(295),l=a.n(c),i=a(297),s=a.n(i),m=(a(283),[{color:"hsl(0, 0%, 0%)",label:"Siyah"},{color:"hsl(0, 0%, 30%)",label:"Koyu gri"},{color:"hsl(0, 0%, 60%)",label:"Gri"},{color:"hsl(0, 0%, 90%)",label:"A\xe7\u0131k gri"},{color:"hsl(0, 0%, 100%)",label:"Beyaz",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"K\u0131rm\u0131z\u0131"},{color:"hsl(30, 75%, 60%)",label:"Turuncu"},{color:"hsl(60, 75%, 60%)",label:"Sar\u0131"},{color:"hsl(90, 75%, 60%)",label:"A\xe7\u0131k ye\u015fil"},{color:"hsl(120, 75%, 60%)",label:"Ye\u015fil"},{color:"hsl(150, 75%, 60%)",label:"Akuamarin"},{color:"hsl(180, 75%, 60%)",label:"Turkuaz"},{color:"hsl(210, 75%, 60%)",label:"A\xe7\u0131k mavi"},{color:"hsl(240, 75%, 60%)",label:"Mavi"},{color:"hsl(270, 75%, 60%)",label:"Mor"}]),u={fontColor:{columns:3,colors:m},fontBackgroundColor:{columns:3,colors:m},fontSize:{options:[{title:"\xc7ok K\xfc\xe7\xfck",model:"0.5rem"},{title:"K\xfc\xe7\xfck",model:"0.75rem"},{title:"Normal",model:"1rem"},{title:"B\xfcy\xfck",model:"1.25rem"},{title:"\xc7ok B\xfcy\xfck",model:"1.5rem"}]},heading:{options:[{model:"paragraph",title:"Paragraf",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Ba\u015fl\u0131k 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Ba\u015fl\u0131k 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Ba\u015fl\u0131k 3",class:"ck-heading_heading3"}]}};t.a=function(e){var t;switch(e.type){case"memory":t=["heading","|","fontSize","bold","italic","fontColor","fontBackgroundColor","bulletedList","blockQuote","undo","redo"];break;case"poem":t=["bold","italic","fontColor","underline","undo","redo"];break;case"telltale":t=["heading","|","fontSize","bold","italic","fontColor","fontBackgroundColor","alignment","underline","strikeThrough","bulletedList","numberedList","blockQuote","link","undo","redo"];break;case"blog":t=["heading","|","fontSize","bold","italic","fontColor","fontBackgroundColor","alignment","insertTable","insertImage","underline","strikeThrough","bulletedList","numberedList","blockQuote","link","undo","redo"]}return o.a.createElement("div",{style:e.style},o.a.createElement(l.a,{onInit:function(e){e.ui.getEditableElement().parentElement.insertBefore(e.ui.view.toolbar.element,e.ui.getEditableElement())},value:e.value,data:e.data,onChange:e.onChange,editor:s.a,config:Object(n.a)(Object(n.a)({},u),{},{toolbar:t})}))}},277:function(e,t){},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(243),c=a(265),l=a(262),i=a(247),s=a(259),m=a(450);a(282);function u(e){var t=e.open,a=e.handleClose,n=e.deleteHandler,u=e.elementId,p=e.element,d=Object(s.a)("(max-width: 769px)"),b=Object(o.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:d&&"90%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}))();return r.a.createElement(c.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:b.modal,open:t,onClose:a,closeAfterTransition:!0,BackdropComponent:l.a,BackdropProps:{timeout:500}},r.a.createElement(i.a,{in:t},r.a.createElement("div",{className:b.paper},r.a.createElement("h2",{id:"transition-modal-title"},p," silmek istedi\u011finize emin misiniz? \ud83e\udd14"),r.a.createElement(m.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){return n(u)}},"Sil"),r.a.createElement(m.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){return a()}},"Vazge\xe7"))))}},282:function(e,t,a){},283:function(e,t,a){},415:function(e,t,a){},466:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a.n(n),o=a(38),c=a(7),l=a(0),i=a.n(l),s=a(93),m=a(20),u=a(89),p=(a(415),a(456)),d=a(91),b=a(243),h=a(411),f=a(413),g=a(10),v=Object(b.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto",backgroundColor:"rgba(250,250,250, .5)"},toolbarLink:{padding:e.spacing(1),flexShrink:0,textDecoration:"none",color:"#f1f1f1","& a":{textDecoration:"none"},"& a:hover":{textDecoration:"none"},"&:hover":{color:"#060606"}}}}));function k(e){var t=v();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:t.toolbar}),i.a.createElement(h.a,{component:"nav",variant:"dense",className:t.toolbarSecondary},!e.isLoading&&e.categories.length>0&&e.categories.map((function(a,n){return i.a.createElement(g.c,{key:n,className:t.toolbarLink,to:"".concat(e.route.path,"/kategori/").concat(a.label)},i.a.createElement(f.a,{color:"inherit",noWrap:!0,key:a.title,variant:"body2"},a.label))}))))}var E=a(90),y=a(451),O=a(412),j=Object(b.a)((function(e){return{mainFeaturedPost:{position:"relative",color:e.palette.common.white,marginBottom:e.spacing(4),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.4)"},mainFeaturedPostContent:Object(E.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0}),linktext:{color:"#bababa","&:hover":{color:"#f95"}}}}));function x(e){var t=j(),a=e.post;return i.a.createElement(y.a,{className:t.mainFeaturedPost,style:{backgroundImage:"url(".concat(a.image,")")}},i.a.createElement("img",{style:{display:"none"},src:a.image,alt:a.imageText}),i.a.createElement("div",{className:t.overlay}),i.a.createElement(p.a,{container:!0},i.a.createElement(p.a,{item:!0,md:6},i.a.createElement("div",{className:t.mainFeaturedPostContent},i.a.createElement(f.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},a.title),i.a.createElement(f.a,{variant:"h5",color:"inherit",paragraph:!0},a.description),i.a.createElement(O.a,{className:t.linktext,variant:"subtitle1",href:"#"},a.linkText)))))}var w=a(457),C=a(458),S=a(459),N=a(460),B=a(469),_=a(269),z=a.n(_),T=Object(b.a)({root:{"& a":{textDecoration:"none"},"& a:active":{color:"gray"}},card:{display:"flex",height:330},cardDetails:{flex:1,overflow:"auto","&::-webkit-scrollbar":{display:"none"}},cardMedia:{width:160,maxHeight:"100%","& img":{maxHeight:"100%"}},Link:{textDecoration:"none","& h6":{textDecoration:"underline"},"& h6:hover":{color:"red"}},ul:{"& ul":{width:"90%",margin:"0 auto"}}});function I(e){var t=e.post,a=e.image,n=e.route,r=T();return i.a.createElement(p.a,{item:!0,xs:12,md:6,className:r.root},i.a.createElement(g.b,{to:"".concat(n,"/postId/").concat(t._id,"/Ba\u015fl\u0131k/").concat(t.title)},i.a.createElement(w.a,{component:"div"},i.a.createElement(C.a,{className:r.card},i.a.createElement("div",{className:r.cardDetails},i.a.createElement(S.a,null,i.a.createElement(f.a,{component:"h2",variant:"h5"},t.title),i.a.createElement(f.a,{variant:"subtitle1",color:"textSecondary"},t.date),i.a.createElement(f.a,{variant:"subtitle1",paragraph:!0,className:r.ul},z()(t.content.substr(0,300))),i.a.createElement(f.a,{variant:"subtitle1",color:"primary"},"Devam\u0131n\u0131 oku..."))),a?i.a.createElement(B.a,{xsDown:!0},i.a.createElement(N.a,{className:r.cardMedia,image:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(a),title:t.title})):null))))}var D=a(8),L=a(31),P=a(272),A=a.n(P),F=a(268),H=a(54),R=a(278),J=a(267),K=a(104),q=a.n(K),Y=a(416),M=a.n(Y),U=function(e){var t=Object(l.useContext)(m.a),a=Object(u.a)(),n=a.sendRequest,s=a.isLoading,p=Object(l.useState)([]),d=Object(c.a)(p,2),b=d[0],h=d[1],f=Object(l.useState)(""),g=Object(c.a)(f,2),v=g[0],k=g[1],E=Object(l.useState)(!1),y=Object(c.a)(E,2),O=y[0],j=y[1],x=Object(l.useState)(!1),w=Object(c.a)(x,2),C=w[0],S=w[1],N=Object(l.useState)(!1),B=Object(c.a)(N,2),_=B[0],T=B[1],I=Object(l.useState)({type:"",content:""}),D=Object(c.a)(I,2),P=D[0],K=D[1];Object(l.useEffect)((function(){(function(){var t=Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("".concat("https://love-website.herokuapp.com/api","/blog/replies/comment/").concat(e.comment._id));case 3:a=t.sent,h(a.replies),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[e.comment._id]);var Y=function(){var a=Object(o.a)(r.a.mark((function a(){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,n("".concat("https://love-website.herokuapp.com/api","/blog/replies"),"POST",JSON.stringify({content:v,kullanici:t.userId,username:t.name,comment:e.comment._id}),{"Content-Type":"application/json"});case 3:o=a.sent,k(""),S(!1),r=o.reply,h([].concat(Object(L.a)(b),[r])),a.next=11;break;case 9:a.prev=9,a.t0=a.catch(0);case 11:return a.prev=11,a.next=14,n("https://love-website.herokuapp.com/api/notifications","POST",JSON.stringify({userId:t.userId,username:t.name,redirect:"/Blog/postId/".concat(e.post._id,"/Ba\u015fl\u0131k/").concat(e.post.title),content:"".concat(t.name," bir yoruma cevap verdi.")}),{"Content-Type":"application/json"});case 14:a.next=18;break;case 16:a.prev=16,a.t1=a.catch(11);case 18:case"end":return a.stop()}var r}),a,null,[[0,9],[11,16]])})));return function(){return a.apply(this,arguments)}}(),U=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!1),e.prev=1,e.next=4,n("".concat("https://love-website.herokuapp.com/api","/blog/replies/").concat(t),"DELETE");case 4:a=e.sent,T(!0),o=b.filter((function(e){return e._id!==t})),h(o),K({type:a.message.type,content:a.message.content}),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(l.Fragment,null,i.a.createElement(J.a,{onClose:function(){return T(!1)},open:_,message:P.content,alert:P.type}),s&&i.a.createElement(H.a,null),!s&&b.length>0&&b.map((function(e){return i.a.createElement("div",{className:t.name===e.username?"reply-myBg":"reply-yourBg",key:e._id},i.a.createElement(R.a,{element:"Cevab\u0131",elementId:e._id,deleteHandler:U,open:O,handleClose:function(){return j(!1)}}),i.a.createElement("div",{className:"reply"},i.a.createElement("div",{className:"reply-header"},i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{className:"reply-header-name"},e.username.split(" ")[0].charAt(0)+e.username.split(" ")[1].charAt(0)),"".concat(e.date)),t.name===e.username?i.a.createElement(q.a,{onClick:function(){return j(!0)},color:"primary","aria-label":"upload picture",component:"span"},i.a.createElement(M.a,null)):null),i.a.createElement("div",{style:{borderTop:"1px dashed",paddingTop:".5rem"}},z()(e.content))))})),C?i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Y()},className:"comment-form"},i.a.createElement(F.a,{data:v,type:"poem",onChange:function(e,t){var a=t.getData();k(a)}}),i.a.createElement(A.a,{type:"submit",variant:"contained",color:"primary"},"G\xf6nder"),i.a.createElement(A.a,{onClick:function(){return S(!1)},variant:"contained",color:"secondary"},"Vazge\xe7")):i.a.createElement(A.a,{style:{marginTop:".5rem"},color:"primary",onClick:function(){return S(!0)},variant:"contained"},i.a.createElement("span",{style:{padding:"0.1rem 1rem"}},"Cevapla")))},G=function(e){var t=e.comments,a=e.setcomments,n=e.post,s=Object(l.useContext)(m.a),p=Object(u.a)(),d=p.sendRequest,b=p.isLoading,h=Object(l.useState)(!1),f=Object(c.a)(h,2),g=f[0],v=f[1],k=Object(l.useState)(!1),E=Object(c.a)(k,2),y=E[0],O=E[1],j=Object(l.useState)({type:"",content:""}),x=Object(c.a)(j,2),w=x[0],C=x[1],S=function(){var e=Object(o.a)(r.a.mark((function e(n){var o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!1),e.prev=1,e.next=4,d("".concat("https://love-website.herokuapp.com/api","/blog/comments/").concat(n),"DELETE");case 4:o=e.sent,O(!0),c=t.filter((function(e){return e._id!==n})),a(c),C({type:o.message.type,content:o.message.content}),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(l.Fragment,null,b&&i.a.createElement(H.a,null),t.length>0&&t.map((function(e){return i.a.createElement(l.Fragment,{key:e._id},i.a.createElement(J.a,{onClose:function(){return O(!1)},open:y,message:w.content,alert:w.type}),e.username===s.name?i.a.createElement("div",{className:"delete-comment"},i.a.createElement(A.a,{onClick:function(){return v(!0)},variant:"contained",color:"secondary"},"Yorumu Sil")):null,i.a.createElement("div",{key:e._id,style:{},className:e.username===s.name?"post-comment myBg":"post-comment yourBg"},i.a.createElement("div",{className:"comment-infos",style:e.username===s.name?{left:"1rem"}:{right:"1rem"}},i.a.createElement("div",{className:"comment-publisher"},e.username),i.a.createElement("div",{className:"comment-time"},"(",e.date,")")),i.a.createElement("div",{className:"comment-content"},i.a.createElement("div",null,z()(e.content)),i.a.createElement(U,{post:n,comment:e}))),i.a.createElement(R.a,{element:"Yorumu",elementId:e._id,deleteHandler:S,open:g,handleClose:function(){return v(!1)}}))})))},Q=function(e){var t=e.post,a=Object(l.useState)(!1),n=Object(c.a)(a,2),s=n[0],p=n[1],b=Object(l.useContext)(m.a),h=Object(u.a)(),f=h.sendRequest,g=h.isLoading,v=Object(l.useState)([]),k=Object(c.a)(v,2),E=k[0],y=k[1],O=Object(l.useState)(""),j=Object(c.a)(O,2),x=j[0],w=j[1],C=t.date===t.update?"".concat(t.date," tarihinde yay\u0131mland\u0131"):"".concat(t.update," tarihinde g\xfcncellendi"),S=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://love-website.herokuapp.com/api/blog/comments","POST",JSON.stringify({content:x,kullanici:b.userId,username:b.name,post:t._id}),{"Content-Type":"application/json"});case 3:a=e.sent,w(""),p(!1),n=a.comment,y([].concat(Object(L.a)(E),[n])),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.prev=11,e.next=14,f("https://love-website.herokuapp.com/api/notifications","POST",JSON.stringify({userId:b.userId,username:b.name,redirect:"/Blog/postId/".concat(t._id,"/Ba\u015fl\u0131k/").concat(t.title),content:"".concat(b.name," blogdaki bir posta yorum yapt\u0131.")}),{"Content-Type":"application/json"});case 14:e.next=18;break;case 16:e.prev=16,e.t1=e.catch(11);case 18:case"end":return e.stop()}var n}),e,null,[[0,9],[11,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://love-website.herokuapp.com/api"+"/blog/comments/post/".concat(t._id));case 3:a=e.sent,y(a.comments),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t._id]),i.a.createElement(d.a,null,g&&i.a.createElement(H.a,null),i.a.createElement("div",{className:"selected-post-wrapper"},i.a.createElement("div",{className:"selected-post-published"},i.a.createElement("div",null,t.username," taraf\u0131ndan ",C)),t.imageUrl?i.a.createElement("div",{className:"post-main_image",style:{backgroundImage:"url(".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(t.imageUrl,")")}}):null,i.a.createElement("div",{className:"selected-post-title"},t.title),i.a.createElement("div",{className:"selected-post-content"},z()(t.content)),i.a.createElement(G,{post:t,comments:E,setcomments:y}),i.a.createElement("div",{style:{margin:"1rem auto"}},s?i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),S(t)},className:"comment-form"},i.a.createElement(F.a,{data:x,type:"poem",onChange:function(e,t){var a=t.getData();w(a)}}),i.a.createElement(A.a,{type:"submit",variant:"contained",color:"primary"},"G\xf6nder"),i.a.createElement(A.a,{onClick:function(){return p(!1)},variant:"contained",color:"secondary"},"Vazge\xe7")):i.a.createElement(A.a,{color:"primary",onClick:function(){return p(!0)},variant:"contained"},i.a.createElement("span",{style:{padding:"0.1rem 1rem"}},"Yorum yap")))))},V=a(461),W=function(e){var t=e.categoryId,a=e.route,n=Object(u.a)(),s=n.isLoading,m=n.sendRequest,d=Object(l.useState)([]),b=Object(c.a)(d,2),h=b[0],f=b[1];return Object(l.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("".concat("https://love-website.herokuapp.com/api","/blog/category/").concat(t));case 3:a=e.sent,f(a.posts),console.log(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),i.a.createElement(V.a,null,s||0!==h.length?i.a.createElement(p.a,{container:!0,spacing:4},h.map((function(e){return i.a.createElement(I,{route:a.path,image:e.imageUrl,key:e._id,post:e})}))):i.a.createElement("p",{style:{textAlign:"center"}},"Bu kategoride yaz\u0131lm\u0131\u015f post bulunamad\u0131 \ud83d\ude22 "))};t.default=function(){var e=Object(u.a)(),t=e.isLoading,a=e.sendRequest,n=Object(l.useState)([]),b=Object(c.a)(n,2),h=b[0],f=b[1],g=(Object(l.useContext)(m.a),Object(D.g)()),v=Object(l.useState)([]),E=Object(c.a)(v,2),y=E[0],O=E[1];return Object(l.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("https://love-website.herokuapp.com/api/blog/categories");case 3:t=e.sent,f(t.categories),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.useEffect)((function(){(function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("https://love-website.herokuapp.com/api/blog");case 3:t=e.sent,O(t.posts),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),!t&&h.length>0&&y.length>0&&i.a.createElement("div",null,i.a.createElement(s.a,null,"Blog"),i.a.createElement(k,{isLoding:t,categories:h,route:g}),i.a.createElement(D.a,{exact:!0,path:"/Blog"},i.a.createElement(x,{post:{title:"\u0130zmir'in \xdclkemizdeki En Ya\u015fan\u0131las\u0131 \u015eehir Oldu\u011funun 24 Kan\u0131t\u0131",description:"Herkesin akl\u0131nda ger\xe7ekle\u015ftirmek i\xe7in yan\u0131p tutu\u015ftu\u011fu bir hayal vard\u0131r: Tas\u0131 tara\u011f\u0131 toplay\u0131p \u0130zmir'e yerle\u015fmek. Kimileri ba\u015far\u0131r bunu, kimileri ise asla imkan bulamaz. Bu noktada en \u015fansl\u0131 olanlar, halihaz\u0131rda \u0130zmir'de ya\u015fayan ki\u015filerdir \xe7\xfcnk\xfc onlar bilir ki, \u0130zmir'i harika bir \u015fehir haline getiren onlarca \xf6zelli\u011fi var.",image:"https://ipektatil.com/wp-content/uploads/2017/12/5a1ec2540f25440f288d63a5.jpg",imgText:"\u0130zmir gece resmi",linkText:"Devam\u0131n\u0131 oku\u2026"}}),i.a.createElement(d.a,null,i.a.createElement(p.a,{container:!0,spacing:4},y.map((function(e){return i.a.createElement(I,{route:g.path,image:e.imageUrl,key:e._id,post:e})}))))),h.map((function(e){return i.a.createElement(D.a,{key:e._id,path:"".concat(g.path,"/kategori/").concat(e.label)},i.a.createElement(W,{route:g,categoryId:e._id}))})),y.map((function(e){return i.a.createElement(D.a,{key:e._id,path:"".concat(g.path,"/postId/").concat(e._id)},i.a.createElement(Q,{post:e}))})))}}}]);
//# sourceMappingURL=10.923f5241.chunk.js.map