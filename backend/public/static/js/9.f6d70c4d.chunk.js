(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{275:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(280);t.a=function(e){return r.a.createElement("div",{onClick:e.backdropClickHandler,className:"backdrop"})}},277:function(e,t){},280:function(e,t,a){},333:function(e,t,a){},334:function(e,t,a){e.exports=a.p+"static/media/slide1.61ad9cbf.jpeg"},335:function(e,t,a){e.exports=a.p+"static/media/slide2.6a3717e6.jpeg"},336:function(e,t,a){e.exports=a.p+"static/media/slide3.e7b93334.jpeg"},337:function(e,t,a){},338:function(e,t,a){e.exports=a.p+"static/media/serhat.414779bf.png"},339:function(e,t,a){e.exports=a.p+"static/media/ceren.4d589a78.jpg"},340:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},381:function(e,t,a){},464:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a(146),i=(a(333),a(334)),s=a.n(i),o=a(335),m=a.n(o),C=a(336),u=a.n(C),d=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(0),C=Object(c.a)(o,2),d=(C[0],C[1]),p=Object(n.useState)(0),h=Object(c.a)(p,2),H=h[0],f=h[1],E=Object(l.a)({images:{width:a?"130%":"100%",height:a?"130%":"100%",strokeOpacity:"initial",transition:"35s"}})(),g=[r.a.createElement("img",{src:s.a,className:E.images,alt:"slide1"}),r.a.createElement("img",{src:m.a,className:E.images,alt:"slide2"}),r.a.createElement("img",{src:u.a,className:E.images,alt:"slide4"})];return Object(n.useEffect)((function(){return d(1),setTimeout((function(){H===-100*(g.length-1)?f(0):f(H-100),i(!a)}),4e3),function(){d(0)}}),[H]),r.a.createElement("div",{className:"slider","data-aos":"fade-in","data-aos-duration":"1500"},g.map((function(e,t){return r.a.createElement("div",{key:t,className:"slide",style:{transform:"translateX(".concat(H,"%)")}},e)})))},p=(a(337),a(338)),h=a.n(p),H=a(339),f=a.n(H),E=function(){return r.a.createElement("div",{className:"images-container"},r.a.createElement("div",{className:"card","data-aos":"fade-left","data-aos-duration":"500"},r.a.createElement("h3",null,"Serhat"),r.a.createElement("img",{src:h.a,alt:"serhat"}),r.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eum!")),r.a.createElement("div",{id:"heart"}),r.a.createElement("div",{className:"card","data-aos":"fade-right","data-aos-duration":"500"},r.a.createElement("h3",null,"Ceren"),r.a.createElement("img",{src:f.a,alt:"ceren"}),r.a.createElement("p",null,"29 Kas\u0131m'da d\xfcnyaya g\xfcne\u015f gibi do\u011fan, sar\u0131 bir yavru ceylan...")))},g=function(e){var t=Object(l.a)({date:{textAlign:"center",padding:".7rem",border:"2px solid #03e9f4",color:"#c8c8c8",width:"100%",fontSize:"1.5rem",fontFamily:"Arial",fontWeight:600,boxShadow:"-1px 2px 4px rgba(255, 120, 120, .6)"},root:{margin:"10% auto",maxWidth:"300px",display:"flex",flexDirection:"column"},flex1:{display:"flex",width:"100%",height:"60px"},flex11:{borderRight:"2px solid #03e9f4",flex:1},flex12:{flex:1}})();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"".concat(t.root," ").concat(e.className),"data-aos":"fade-up"},r.a.createElement("div",{className:t.flex1},r.a.createElement("div",{className:t.flex11}),r.a.createElement("div",{className:t.flex12})),r.a.createElement("div",{className:t.date},"18.06.2019 - \ua74e ")))},b=a(22),k=a.n(b),w=a(38),x=a(90),V=a(20),v=a(259),L=a(89),M=a(10),Z=a(275),j=(a(340),function(){var e,t,a,i=Object(L.a)(),s=i.isLoading,o=(i.error,i.sendRequest),m=(i.clearError,Object(n.useContext)(V.a),Object(n.useState)(!1)),C=Object(c.a)(m,2),u=C[0],d=C[1],p=Object(n.useState)(""),h=Object(c.a)(p,2),H=h[0],f=h[1],E=Object(n.useState)([]),g=Object(c.a)(E,2),b=g[0],j=g[1],O=Object(v.a)("(max-width:769px)"),y=Object(v.a)("(max-width:650px)");a=y?"75px":O?"150px":"200px";var N=Object(l.a)({root:{width:"100%",backgroundPosition:"center",marginTop:"5%",padding:"3rem",display:"flex",flexDirection:"column"},images:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},image:{margin:O?"3%":"1%",width:a,borderRadius:"3rem",boxShadow:"2px 3px 1px rgba(255, 255, 255, .5)",marginBottom:O&&"2rem",transition:"400ms",cursor:"pointer",opacity:O?1:".7","&:hover":{opacity:"1",transform:"scale(1.1)",boxShadow:"0 0 15px #03e9f4, 0 0 35px #03e9f4, 0 0 70px #03e9f4, 0 0 250px #03e9f4"}},link:(t={fontSize:O?"1.1rem":"1.6rem",fontWeight:700,textDecoration:"none",borderRadius:"3rem",margin:"3% auto 0",padding:"1rem",color:"white",fontFamily:"Arial",background:" #FF0099"},Object(x.a)(t,"background","-webkit-linear-gradient(to right, #493240, #FF0099)"),Object(x.a)(t,"background","linear-gradient(to right, #493240, #FF0099)"),Object(x.a)(t,"transition",".5s"),Object(x.a)(t,"&:hover",(e={background:"#1f4037"},Object(x.a)(e,"background","-webkit-linear-gradient(to right, #99f2c8, #1f4037)"),Object(x.a)(e,"background","linear-gradient(to right, #99f2c8, #1f4037)"),Object(x.a)(e,"color","black"),e)),t),bigImage:{position:"fixed",display:"flex",alignItems:"center",width:" 100%",height:"100%",pointerEvents:"none",zIndex:101,top:0,left:0,justifyContent:"center"},img:{zIndex:102,pointerEvents:"auto",borderRadius:"2rem",maxWidth:O?"80%":"90%",maxHeight:O?"80%":"90%",transform:u?"translateX(0)":"translateX(-400%)",transition:"500ms"}})();return Object(n.useEffect)((function(){(function(){var e=Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("https://love-website.herokuapp.com/api/upload");case 3:t=e.sent,j(t.images),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,u&&r.a.createElement(Z.a,{backdropClickHandler:function(){return d(!1)}}),r.a.createElement("div",{className:N.bigImage},r.a.createElement("img",{className:N.img,src:H,alt:""})),!s&&b.length>0&&r.a.createElement("div",{className:N.root},r.a.createElement("div",{className:N.images},b.map((function(e,t){return r.a.createElement("div",{key:e._id,"data-aos":0===t?"fade-left":1===t?"zoom":"fade-right","data-aos-easing":"linear","data-aos-duration":"500"},r.a.createElement("img",{onClick:function(){d(!0),f("".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.imageUrl))},className:N.image,src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.imageUrl),alt:"x"}))}))),r.a.createElement(M.c,{to:"/Galeri",className:"neon-button",style:{margin:"5rem auto"}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),y?"Galeri":"Galeriye gitmek i\xe7in t\u0131klay\u0131n")))}),O=Object(l.a)({root:{display:"flex",justifyContent:"space-around",alignItems:"flex-end",width:"100%",textAlign:"center",padding:"1rem",marginBottom:"2rem",fontSize:"1.15rem",color:"white",fontFamily:"Itim, cursive",fontWeight:100,flexWrap:"wrap"},lasts:{width:"500px",border:"3px solid #03e9f4",padding:".5rem",margin:"1rem",boxShadow:"2px 3px 2px rgba(0, 0, 0, .5)"},date:{margin:"8px auto 4px",textAlign:"right",textDecoration:"overline",color:"#a7a7a7",width:"auto",fontSize:".9rem",textTransform:"capitalize"},links:{background:"#FAD2DE ",fontSize:"1.3rem",textTransform:"uppercase",borderRadius:"1rem",float:"right",marginTop:"1rem",padding:".5rem 2rem",cursor:"pointer",transition:"300ms",border:"none",display:"flex","&:hover":{background:"#F17FA0 "}}}),y=a(269),N=a.n(y),S=function(){var e=Object(L.a)(),t=e.sendRequest,a=e.isLoading,l=Object(n.useState)(),i=Object(c.a)(l,2),s=i[0],o=i[1],m=Object(n.useState)(),C=Object(c.a)(m,2),u=C[0],d=C[1],p=(Object(n.useContext)(V.b),Object(n.useContext)(V.a));Object(n.useEffect)((function(){(function(){var e=Object(w.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("".concat("https://love-website.herokuapp.com/api","/memories/getfirstthree"));case 3:a=e.sent,o(a.memories),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.useEffect)((function(){(function(){var e=Object(w.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("".concat("https://love-website.herokuapp.com/api","/poems/getfirst"));case 3:a=e.sent,d(a.poem[0]),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var h=O();return r.a.createElement("div",{className:h.root,"data-aos":"fade-up"},r.a.createElement("div",{className:h.lasts},r.a.createElement("h3",{style:{color:"red",textTransform:"uppercase"}},"Son An\u0131lar"),!a&&s&&s.map((function(e,t){return r.a.createElement("div",{key:t},e.title,N()(e.content.substr(0,200)+"..."),r.a.createElement("div",{className:h.date},e.username," - ",e.update),r.a.createElement("hr",null))})),p.isLoggedIn?r.a.createElement(M.c,{to:"/An\u0131lar",style:{margin:"1rem auto .5rem"},className:"neon-button anilar"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"An\u0131lar"):null),!a&&u&&r.a.createElement("div",{className:h.lasts},r.a.createElement("h3",{style:{color:"red",textTransform:"uppercase"}},"Son \u015eiir"),r.a.createElement("div",{style:{fontFamily:"Dancing Script"}},N()(u.content)),p.isLoggedIn?r.a.createElement(M.c,{to:"/\u015eiirler",style:{margin:"1rem auto .5rem"},className:"neon-button anilar"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"\u015eiirler"):null))},F=(a(379),a(380),function(){return r.a.createElement("div",{className:"homepage-titles-h2"},r.a.createElement("svg",{width:"556",height:"72",viewBox:"0 0 371 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("mask",{id:"path-1-outside-1",maskUnits:"userSpaceOnUse",x:"0.630859",y:"0.414062",width:"370",height:"48",fill:"black"},r.a.createElement("rect",{fill:"white",x:"0.630859",y:"0.414062",width:"370",height:"48"}),r.a.createElement("path",{d:"M9.95898 11.7188L20.1855 37.2422L30.4121 11.7188H35.7617V43H31.6367V30.8184L32.0234 17.6699L21.7539 43H18.5957L8.34766 17.7344L8.75586 30.8184V43H4.63086V11.7188H9.95898Z"}),r.a.createElement("path",{d:"M60.7051 34.8359H47.5996L44.6562 43H40.4023L52.3477 11.7188H55.957L67.9238 43H63.6914L60.7051 34.8359ZM48.8457 31.4414H59.4805L54.1523 16.8105L48.8457 31.4414Z"}),r.a.createElement("path",{d:"M81.3516 29.0566C77.8138 28.0397 75.2357 26.7936 73.6172 25.3184C72.013 23.8288 71.2109 21.9954 71.2109 19.8184C71.2109 17.3548 72.1921 15.321 74.1543 13.7168C76.1309 12.0983 78.6947 11.2891 81.8457 11.2891C83.9941 11.2891 85.9062 11.7044 87.582 12.5352C89.2721 13.3659 90.5755 14.5117 91.4922 15.9727C92.4232 17.4336 92.8887 19.0306 92.8887 20.7637H88.7422C88.7422 18.873 88.1406 17.3906 86.9375 16.3164C85.7344 15.2279 84.0371 14.6836 81.8457 14.6836C79.8118 14.6836 78.222 15.1348 77.0762 16.0371C75.9447 16.9251 75.3789 18.1641 75.3789 19.7539C75.3789 21.0286 75.916 22.11 76.9902 22.998C78.0788 23.8717 79.9193 24.6738 82.5117 25.4043C85.1185 26.1348 87.1523 26.944 88.6133 27.832C90.0885 28.7057 91.1771 29.7298 91.8789 30.9043C92.5951 32.0788 92.9531 33.4609 92.9531 35.0508C92.9531 37.5859 91.9648 39.6198 89.9883 41.1523C88.0117 42.6706 85.3691 43.4297 82.0605 43.4297C79.9121 43.4297 77.9069 43.0215 76.0449 42.2051C74.1829 41.3743 72.7435 40.2428 71.7266 38.8105C70.724 37.3783 70.2227 35.7526 70.2227 33.9336H74.3691C74.3691 35.8242 75.0638 37.321 76.4531 38.4238C77.8568 39.5124 79.7259 40.0566 82.0605 40.0566C84.2376 40.0566 85.9062 39.6126 87.0664 38.7246C88.2266 37.8366 88.8066 36.6263 88.8066 35.0938C88.8066 33.5612 88.2695 32.3796 87.1953 31.5488C86.1211 30.7038 84.1732 29.873 81.3516 29.0566Z"}),r.a.createElement("path",{d:"M115.533 34.8359H102.428L99.4844 43H95.2305L107.176 11.7188H110.785L122.752 43H118.52L115.533 34.8359ZM103.674 31.4414H114.309L108.98 16.8105L103.674 31.4414Z"}),r.a.createElement("path",{d:"M131.109 39.627H145.934V43H126.963V11.7188H131.109V39.627Z"}),r.a.createElement("path",{d:"M154.785 39.627H169.609V43H150.639V11.7188H154.785V39.627Z"}),r.a.createElement("path",{d:"M192.018 34.8359H178.912L175.969 43H171.715L183.66 11.7188H187.27L199.236 43H195.004L192.018 34.8359ZM180.158 31.4414H190.793L185.465 16.8105L180.158 31.4414Z"}),r.a.createElement("path",{d:"M214.92 30.3457H207.572V43H203.426V11.7188H213.781C217.305 11.7188 220.012 12.5208 221.902 14.125C223.807 15.7292 224.76 18.0638 224.76 21.1289C224.76 23.0768 224.23 24.7741 223.17 26.2207C222.124 27.6673 220.663 28.7487 218.787 29.4648L226.135 42.7422V43H221.709L214.92 30.3457ZM207.572 26.9727H213.91C215.958 26.9727 217.584 26.4427 218.787 25.3828C220.005 24.3229 220.613 22.9049 220.613 21.1289C220.613 19.1953 220.033 17.7129 218.873 16.6816C217.727 15.6504 216.066 15.1276 213.889 15.1133H207.572V26.9727Z"}),r.a.createElement("path",{d:"M241.475 43V11.7188H250.305C253.026 11.7188 255.432 12.3203 257.523 13.5234C259.615 14.7266 261.226 16.4382 262.357 18.6582C263.503 20.8783 264.083 23.4277 264.098 26.3066V28.3047C264.098 31.2552 263.525 33.8405 262.379 36.0605C261.247 38.2806 259.622 39.985 257.502 41.1738C255.396 42.3626 252.94 42.9714 250.133 43H241.475ZM245.6 15.1133V39.627H249.939C253.119 39.627 255.59 38.6387 257.352 36.6621C259.128 34.6855 260.016 31.8711 260.016 28.2188V26.3926C260.016 22.8405 259.178 20.0833 257.502 18.1211C255.84 16.1445 253.477 15.1419 250.412 15.1133H245.6Z"}),r.a.createElement("path",{d:"M274.775 43H270.65V11.7188H274.775V43ZM270.35 6.71289C270.35 6.06836 270.543 5.52409 270.93 5.08008C271.331 4.63607 271.918 4.41406 272.691 4.41406C273.465 4.41406 274.052 4.63607 274.453 5.08008C274.854 5.52409 275.055 6.06836 275.055 6.71289C275.055 7.35742 274.854 7.89453 274.453 8.32422C274.052 8.75391 273.465 8.96875 272.691 8.96875C271.918 8.96875 271.331 8.75391 270.93 8.32422C270.543 7.89453 270.35 7.35742 270.35 6.71289Z"}),r.a.createElement("path",{d:"M291.275 27.4238L299.439 11.7188H304.123L293.338 31.334V43H289.213V31.334L278.428 11.7188H283.154L291.275 27.4238Z"}),r.a.createElement("path",{d:"M323.416 34.8359H310.311L307.367 43H303.113L315.059 11.7188H318.668L330.635 43H326.402L323.416 34.8359ZM311.557 31.4414H322.191L316.863 16.8105L311.557 31.4414Z"}),r.a.createElement("path",{d:"M346.318 30.3457H338.971V43H334.824V11.7188H345.18C348.703 11.7188 351.41 12.5208 353.301 14.125C355.206 15.7292 356.158 18.0638 356.158 21.1289C356.158 23.0768 355.628 24.7741 354.568 26.2207C353.523 27.6673 352.062 28.7487 350.186 29.4648L357.533 42.7422V43H353.107L346.318 30.3457ZM338.971 26.9727H345.309C347.357 26.9727 348.982 26.4427 350.186 25.3828C351.403 24.3229 352.012 22.9049 352.012 21.1289C352.012 19.1953 351.432 17.7129 350.271 16.6816C349.126 15.6504 347.464 15.1276 345.287 15.1133H338.971V26.9727Z"}),r.a.createElement("path",{d:"M366.385 43H362.26V11.7188H366.385V43Z"})),r.a.createElement("path",{d:"M9.95898 11.7188L20.1855 37.2422L30.4121 11.7188H35.7617V43H31.6367V30.8184L32.0234 17.6699L21.7539 43H18.5957L8.34766 17.7344L8.75586 30.8184V43H4.63086V11.7188H9.95898Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M60.7051 34.8359H47.5996L44.6562 43H40.4023L52.3477 11.7188H55.957L67.9238 43H63.6914L60.7051 34.8359ZM48.8457 31.4414H59.4805L54.1523 16.8105L48.8457 31.4414Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M81.3516 29.0566C77.8138 28.0397 75.2357 26.7936 73.6172 25.3184C72.013 23.8288 71.2109 21.9954 71.2109 19.8184C71.2109 17.3548 72.1921 15.321 74.1543 13.7168C76.1309 12.0983 78.6947 11.2891 81.8457 11.2891C83.9941 11.2891 85.9062 11.7044 87.582 12.5352C89.2721 13.3659 90.5755 14.5117 91.4922 15.9727C92.4232 17.4336 92.8887 19.0306 92.8887 20.7637H88.7422C88.7422 18.873 88.1406 17.3906 86.9375 16.3164C85.7344 15.2279 84.0371 14.6836 81.8457 14.6836C79.8118 14.6836 78.222 15.1348 77.0762 16.0371C75.9447 16.9251 75.3789 18.1641 75.3789 19.7539C75.3789 21.0286 75.916 22.11 76.9902 22.998C78.0788 23.8717 79.9193 24.6738 82.5117 25.4043C85.1185 26.1348 87.1523 26.944 88.6133 27.832C90.0885 28.7057 91.1771 29.7298 91.8789 30.9043C92.5951 32.0788 92.9531 33.4609 92.9531 35.0508C92.9531 37.5859 91.9648 39.6198 89.9883 41.1523C88.0117 42.6706 85.3691 43.4297 82.0605 43.4297C79.9121 43.4297 77.9069 43.0215 76.0449 42.2051C74.1829 41.3743 72.7435 40.2428 71.7266 38.8105C70.724 37.3783 70.2227 35.7526 70.2227 33.9336H74.3691C74.3691 35.8242 75.0638 37.321 76.4531 38.4238C77.8568 39.5124 79.7259 40.0566 82.0605 40.0566C84.2376 40.0566 85.9062 39.6126 87.0664 38.7246C88.2266 37.8366 88.8066 36.6263 88.8066 35.0938C88.8066 33.5612 88.2695 32.3796 87.1953 31.5488C86.1211 30.7038 84.1732 29.873 81.3516 29.0566Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M115.533 34.8359H102.428L99.4844 43H95.2305L107.176 11.7188H110.785L122.752 43H118.52L115.533 34.8359ZM103.674 31.4414H114.309L108.98 16.8105L103.674 31.4414Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M131.109 39.627H145.934V43H126.963V11.7188H131.109V39.627Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M154.785 39.627H169.609V43H150.639V11.7188H154.785V39.627Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M192.018 34.8359H178.912L175.969 43H171.715L183.66 11.7188H187.27L199.236 43H195.004L192.018 34.8359ZM180.158 31.4414H190.793L185.465 16.8105L180.158 31.4414Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M214.92 30.3457H207.572V43H203.426V11.7188H213.781C217.305 11.7188 220.012 12.5208 221.902 14.125C223.807 15.7292 224.76 18.0638 224.76 21.1289C224.76 23.0768 224.23 24.7741 223.17 26.2207C222.124 27.6673 220.663 28.7487 218.787 29.4648L226.135 42.7422V43H221.709L214.92 30.3457ZM207.572 26.9727H213.91C215.958 26.9727 217.584 26.4427 218.787 25.3828C220.005 24.3229 220.613 22.9049 220.613 21.1289C220.613 19.1953 220.033 17.7129 218.873 16.6816C217.727 15.6504 216.066 15.1276 213.889 15.1133H207.572V26.9727Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M241.475 43V11.7188H250.305C253.026 11.7188 255.432 12.3203 257.523 13.5234C259.615 14.7266 261.226 16.4382 262.357 18.6582C263.503 20.8783 264.083 23.4277 264.098 26.3066V28.3047C264.098 31.2552 263.525 33.8405 262.379 36.0605C261.247 38.2806 259.622 39.985 257.502 41.1738C255.396 42.3626 252.94 42.9714 250.133 43H241.475ZM245.6 15.1133V39.627H249.939C253.119 39.627 255.59 38.6387 257.352 36.6621C259.128 34.6855 260.016 31.8711 260.016 28.2188V26.3926C260.016 22.8405 259.178 20.0833 257.502 18.1211C255.84 16.1445 253.477 15.1419 250.412 15.1133H245.6Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M274.775 43H270.65V11.7188H274.775V43ZM270.35 6.71289C270.35 6.06836 270.543 5.52409 270.93 5.08008C271.331 4.63607 271.918 4.41406 272.691 4.41406C273.465 4.41406 274.052 4.63607 274.453 5.08008C274.854 5.52409 275.055 6.06836 275.055 6.71289C275.055 7.35742 274.854 7.89453 274.453 8.32422C274.052 8.75391 273.465 8.96875 272.691 8.96875C271.918 8.96875 271.331 8.75391 270.93 8.32422C270.543 7.89453 270.35 7.35742 270.35 6.71289Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M291.275 27.4238L299.439 11.7188H304.123L293.338 31.334V43H289.213V31.334L278.428 11.7188H283.154L291.275 27.4238Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M323.416 34.8359H310.311L307.367 43H303.113L315.059 11.7188H318.668L330.635 43H326.402L323.416 34.8359ZM311.557 31.4414H322.191L316.863 16.8105L311.557 31.4414Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M346.318 30.3457H338.971V43H334.824V11.7188H345.18C348.703 11.7188 351.41 12.5208 353.301 14.125C355.206 15.7292 356.158 18.0638 356.158 21.1289C356.158 23.0768 355.628 24.7741 354.568 26.2207C353.523 27.6673 352.062 28.7487 350.186 29.4648L357.533 42.7422V43H353.107L346.318 30.3457ZM338.971 26.9727H345.309C347.357 26.9727 348.982 26.4427 350.186 25.3828C351.403 24.3229 352.012 22.9049 352.012 21.1289C352.012 19.1953 351.432 17.7129 350.271 16.6816C349.126 15.6504 347.464 15.1276 345.287 15.1133H338.971V26.9727Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"}),r.a.createElement("path",{d:"M366.385 43H362.26V11.7188H366.385V43Z",stroke:"white","stroke-width":"8",mask:"url(#path-1-outside-1)"})))}),z=function(){var e=Object(L.a)(),t=e.sendRequest,a=e.isLoading,l=Object(n.useState)([]),i=Object(c.a)(l,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(w.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("https://love-website.herokuapp.com/api/telltales/getfirstthree");case 3:a=e.sent,o(a.telltales),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null),!a&&s.length>0&&r.a.createElement("div",{id:"masal-info"},r.a.createElement("div",{className:"homepage-masallar","data-aos":"fade-up"},s.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("p",null,e.title),r.a.createElement("img",{src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.imageUrl),alt:e.title}),r.a.createElement(M.c,{to:"/Masallar/".concat(e.id,"/").concat(e.title)},"Masal\u0131 okumak i\xe7in t\u0131klay\u0131n..."))}))),r.a.createElement(M.c,{className:"neon-button",to:"/Masallar"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"Masallar sayfas\u0131na ilerle")))},A=(a(381),function(e){return r.a.createElement("div",{className:"isometric-card"},r.a.createElement("div",{className:"isometric-imgBx"},e.imageUrl?r.a.createElement("img",{src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.imageUrl),alt:e.title}):null,r.a.createElement("h3",null,e.title)),r.a.createElement("div",{className:"isometric-content"},r.a.createElement("p",null,e.content)))}),U=function(){return r.a.createElement("div",{className:"homepage-titles-h2"},r.a.createElement("svg",{width:"378",height:"72",viewBox:"0 0 252 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("mask",{id:"path-1-outside-1",maskUnits:"userSpaceOnUse",x:"0.234985",y:"0.225006",width:"252",height:"48",fill:"black"},r.a.createElement("rect",{fill:"white",x:"0.234985",y:"0.225006",width:"252",height:"48"}),r.a.createElement("path",{d:"M23.43 23.255C24.8233 23.475 26.0883 24.0433 27.225 24.96C28.3983 25.8767 29.315 27.0133 29.975 28.37C30.6717 29.7267 31.02 31.175 31.02 32.715C31.02 34.6583 30.525 36.4183 29.535 37.995C28.545 39.535 27.0967 40.7633 25.19 41.68C23.32 42.56 21.1017 43 18.535 43H4.23499V4.66501H17.985C20.5883 4.66501 22.8067 5.10501 24.64 5.98501C26.4733 6.82834 27.8483 7.98334 28.765 9.45001C29.6817 10.9167 30.14 12.5667 30.14 14.4C30.14 16.6733 29.5167 18.5617 28.27 20.065C27.06 21.5317 25.4467 22.595 23.43 23.255ZM9.23999 21.22H17.655C20.0017 21.22 21.8167 20.67 23.1 19.57C24.3833 18.47 25.025 16.9483 25.025 15.005C25.025 13.0617 24.3833 11.54 23.1 10.44C21.8167 9.34001 19.965 8.79 17.545 8.79H9.23999V21.22ZM18.095 38.875C20.5883 38.875 22.5317 38.2883 23.925 37.115C25.3183 35.9417 26.015 34.31 26.015 32.22C26.015 30.0933 25.2817 28.425 23.815 27.215C22.3483 25.9683 20.3867 25.345 17.93 25.345H9.23999V38.875H18.095Z"}),r.a.createElement("path",{d:"M42.9705 38.93H56.3905V43H37.9655V4.66501H42.9705V38.93Z"}),r.a.createElement("path",{d:"M79.0857 43.385C75.529 43.385 72.284 42.56 69.3507 40.91C66.4174 39.2233 64.089 36.895 62.3657 33.925C60.679 30.9183 59.8357 27.545 59.8357 23.805C59.8357 20.065 60.679 16.71 62.3657 13.74C64.089 10.7333 66.4174 8.40501 69.3507 6.755C72.284 5.06834 75.529 4.22501 79.0857 4.22501C82.679 4.22501 85.9424 5.06834 88.8757 6.755C91.809 8.40501 94.119 10.715 95.8057 13.685C97.4924 16.655 98.3357 20.0283 98.3357 23.805C98.3357 27.5817 97.4924 30.955 95.8057 33.925C94.119 36.895 91.809 39.2233 88.8757 40.91C85.9424 42.56 82.679 43.385 79.0857 43.385ZM79.0857 39.04C81.7624 39.04 84.164 38.4167 86.2907 37.17C88.454 35.9233 90.1407 34.145 91.3507 31.835C92.5974 29.525 93.2207 26.8483 93.2207 23.805C93.2207 20.725 92.5974 18.0483 91.3507 15.775C90.1407 13.465 88.4724 11.6867 86.3457 10.44C84.219 9.19334 81.799 8.57001 79.0857 8.57001C76.3724 8.57001 73.9524 9.19334 71.8257 10.44C69.699 11.6867 68.0124 13.465 66.7657 15.775C65.5557 18.0483 64.9507 20.725 64.9507 23.805C64.9507 26.8483 65.5557 29.525 66.7657 31.835C68.0124 34.145 69.699 35.9233 71.8257 37.17C73.989 38.4167 76.409 39.04 79.0857 39.04Z"}),r.a.createElement("path",{d:"M133.983 15.775C132.92 13.5383 131.38 11.815 129.363 10.605C127.346 9.35834 125 8.73501 122.323 8.73501C119.646 8.73501 117.226 9.35834 115.063 10.605C112.936 11.815 111.25 13.575 110.003 15.885C108.793 18.1583 108.188 20.7983 108.188 23.805C108.188 26.8117 108.793 29.4517 110.003 31.725C111.25 33.9983 112.936 35.7583 115.063 37.005C117.226 38.215 119.646 38.82 122.323 38.82C126.063 38.82 129.143 37.7017 131.563 35.465C133.983 33.2283 135.395 30.2033 135.798 26.39H120.508V22.32H141.133V26.17C140.84 29.3233 139.85 32.22 138.163 34.86C136.476 37.4633 134.258 39.535 131.508 41.075C128.758 42.5783 125.696 43.33 122.323 43.33C118.766 43.33 115.521 42.505 112.588 40.855C109.655 39.1683 107.326 36.84 105.603 33.87C103.916 30.9 103.073 27.545 103.073 23.805C103.073 20.065 103.916 16.71 105.603 13.74C107.326 10.7333 109.655 8.40501 112.588 6.755C115.521 5.06834 118.766 4.22501 122.323 4.22501C126.393 4.22501 129.986 5.23334 133.103 7.25001C136.256 9.26667 138.548 12.1083 139.978 15.775H133.983Z"}),r.a.createElement("path",{d:"M176.791 15.775C175.727 13.5383 174.187 11.815 172.171 10.605C170.154 9.35834 167.807 8.73501 165.131 8.73501C162.454 8.73501 160.034 9.35834 157.871 10.605C155.744 11.815 154.057 13.575 152.811 15.885C151.601 18.1583 150.996 20.7983 150.996 23.805C150.996 26.8117 151.601 29.4517 152.811 31.725C154.057 33.9983 155.744 35.7583 157.871 37.005C160.034 38.215 162.454 38.82 165.131 38.82C168.871 38.82 171.951 37.7017 174.371 35.465C176.791 33.2283 178.202 30.2033 178.606 26.39H163.316V22.32H183.941V26.17C183.647 29.3233 182.657 32.22 180.971 34.86C179.284 37.4633 177.066 39.535 174.316 41.075C171.566 42.5783 168.504 43.33 165.131 43.33C161.574 43.33 158.329 42.505 155.396 40.855C152.462 39.1683 150.134 36.84 148.411 33.87C146.724 30.9 145.881 27.545 145.881 23.805C145.881 20.065 146.724 16.71 148.411 13.74C150.134 10.7333 152.462 8.40501 155.396 6.755C158.329 5.06834 161.574 4.22501 165.131 4.22501C169.201 4.22501 172.794 5.23334 175.911 7.25001C179.064 9.26667 181.356 12.1083 182.786 15.775H176.791Z"}),r.a.createElement("path",{d:"M195.563 8.73501V21.55H209.533V25.675H195.563V38.875H211.183V43H190.558V4.61001H211.183V8.73501H195.563Z"}),r.a.createElement("path",{d:"M238.941 43L229.811 27.325H223.761V43H218.756V4.66501H231.131C234.028 4.66501 236.466 5.16001 238.446 6.15001C240.463 7.14001 241.966 8.47834 242.956 10.165C243.946 11.8517 244.441 13.7767 244.441 15.94C244.441 18.58 243.671 20.9083 242.131 22.925C240.628 24.9417 238.355 26.28 235.311 26.94L244.936 43H238.941ZM223.761 23.31H231.131C233.845 23.31 235.88 22.65 237.236 21.33C238.593 19.9733 239.271 18.1767 239.271 15.94C239.271 13.6667 238.593 11.9067 237.236 10.66C235.916 9.41334 233.881 8.79 231.131 8.79H223.761V23.31Z"})),r.a.createElement("path",{d:"M23.43 23.255C24.8233 23.475 26.0883 24.0433 27.225 24.96C28.3983 25.8767 29.315 27.0133 29.975 28.37C30.6717 29.7267 31.02 31.175 31.02 32.715C31.02 34.6583 30.525 36.4183 29.535 37.995C28.545 39.535 27.0967 40.7633 25.19 41.68C23.32 42.56 21.1017 43 18.535 43H4.23499V4.66501H17.985C20.5883 4.66501 22.8067 5.10501 24.64 5.98501C26.4733 6.82834 27.8483 7.98334 28.765 9.45001C29.6817 10.9167 30.14 12.5667 30.14 14.4C30.14 16.6733 29.5167 18.5617 28.27 20.065C27.06 21.5317 25.4467 22.595 23.43 23.255ZM9.23999 21.22H17.655C20.0017 21.22 21.8167 20.67 23.1 19.57C24.3833 18.47 25.025 16.9483 25.025 15.005C25.025 13.0617 24.3833 11.54 23.1 10.44C21.8167 9.34001 19.965 8.79 17.545 8.79H9.23999V21.22ZM18.095 38.875C20.5883 38.875 22.5317 38.2883 23.925 37.115C25.3183 35.9417 26.015 34.31 26.015 32.22C26.015 30.0933 25.2817 28.425 23.815 27.215C22.3483 25.9683 20.3867 25.345 17.93 25.345H9.23999V38.875H18.095Z",stroke:"white","stroke-width":"8"}),r.a.createElement("path",{d:"M42.9705 38.93H56.3905V43H37.9655V4.66501H42.9705V38.93Z",stroke:"white","stroke-width":"8"}),r.a.createElement("path",{d:"M79.0857 43.385C75.529 43.385 72.284 42.56 69.3507 40.91C66.4174 39.2233 64.089 36.895 62.3657 33.925C60.679 30.9183 59.8357 27.545 59.8357 23.805C59.8357 20.065 60.679 16.71 62.3657 13.74C64.089 10.7333 66.4174 8.40501 69.3507 6.755C72.284 5.06834 75.529 4.22501 79.0857 4.22501C82.679 4.22501 85.9424 5.06834 88.8757 6.755C91.809 8.40501 94.119 10.715 95.8057 13.685C97.4924 16.655 98.3357 20.0283 98.3357 23.805C98.3357 27.5817 97.4924 30.955 95.8057 33.925C94.119 36.895 91.809 39.2233 88.8757 40.91C85.9424 42.56 82.679 43.385 79.0857 43.385ZM79.0857 39.04C81.7624 39.04 84.164 38.4167 86.2907 37.17C88.454 35.9233 90.1407 34.145 91.3507 31.835C92.5974 29.525 93.2207 26.8483 93.2207 23.805C93.2207 20.725 92.5974 18.0483 91.3507 15.775C90.1407 13.465 88.4724 11.6867 86.3457 10.44C84.219 9.19334 81.799 8.57001 79.0857 8.57001C76.3724 8.57001 73.9524 9.19334 71.8257 10.44C69.699 11.6867 68.0124 13.465 66.7657 15.775C65.5557 18.0483 64.9507 20.725 64.9507 23.805C64.9507 26.8483 65.5557 29.525 66.7657 31.835C68.0124 34.145 69.699 35.9233 71.8257 37.17C73.989 38.4167 76.409 39.04 79.0857 39.04Z",stroke:"white","stroke-width":"8"}),r.a.createElement("path",{d:"M133.983 15.775C132.92 13.5383 131.38 11.815 129.363 10.605C127.346 9.35834 125 8.73501 122.323 8.73501C119.646 8.73501 117.226 9.35834 115.063 10.605C112.936 11.815 111.25 13.575 110.003 15.885C108.793 18.1583 108.188 20.7983 108.188 23.805C108.188 26.8117 108.793 29.4517 110.003 31.725C111.25 33.9983 112.936 35.7583 115.063 37.005C117.226 38.215 119.646 38.82 122.323 38.82C126.063 38.82 129.143 37.7017 131.563 35.465C133.983 33.2283 135.395 30.2033 135.798 26.39H120.508V22.32H141.133V26.17C140.84 29.3233 139.85 32.22 138.163 34.86C136.476 37.4633 134.258 39.535 131.508 41.075C128.758 42.5783 125.696 43.33 122.323 43.33C118.766 43.33 115.521 42.505 112.588 40.855C109.655 39.1683 107.326 36.84 105.603 33.87C103.916 30.9 103.073 27.545 103.073 23.805C103.073 20.065 103.916 16.71 105.603 13.74C107.326 10.7333 109.655 8.40501 112.588 6.755C115.521 5.06834 118.766 4.22501 122.323 4.22501C126.393 4.22501 129.986 5.23334 133.103 7.25001C136.256 9.26667 138.548 12.1083 139.978 15.775H133.983Z",stroke:"white","stroke-width":"8"}),r.a.createElement("path",{d:"M176.791 15.775C175.727 13.5383 174.187 11.815 172.171 10.605C170.154 9.35834 167.807 8.73501 165.131 8.73501C162.454 8.73501 160.034 9.35834 157.871 10.605C155.744 11.815 154.057 13.575 152.811 15.885C151.601 18.1583 150.996 20.7983 150.996 23.805C150.996 26.8117 151.601 29.4517 152.811 31.725C154.057 33.9983 155.744 35.7583 157.871 37.005C160.034 38.215 162.454 38.82 165.131 38.82C168.871 38.82 171.951 37.7017 174.371 35.465C176.791 33.2283 178.202 30.2033 178.606 26.39H163.316V22.32H183.941V26.17C183.647 29.3233 182.657 32.22 180.971 34.86C179.284 37.4633 177.066 39.535 174.316 41.075C171.566 42.5783 168.504 43.33 165.131 43.33C161.574 43.33 158.329 42.505 155.396 40.855C152.462 39.1683 150.134 36.84 148.411 33.87C146.724 30.9 145.881 27.545 145.881 23.805C145.881 20.065 146.724 16.71 148.411 13.74C150.134 10.7333 152.462 8.40501 155.396 6.755C158.329 5.06834 161.574 4.22501 165.131 4.22501C169.201 4.22501 172.794 5.23334 175.911 7.25001C179.064 9.26667 181.356 12.1083 182.786 15.775H176.791Z",stroke:"white","stroke-width":"8"}),r.a.createElement("path",{d:"M195.563 8.73501V21.55H209.533V25.675H195.563V38.875H211.183V43H190.558V4.61001H211.183V8.73501H195.563Z",stroke:"white","stroke-width":"8"}),r.a.createElement("path",{d:"M238.941 43L229.811 27.325H223.761V43H218.756V4.66501H231.131C234.028 4.66501 236.466 5.16001 238.446 6.15001C240.463 7.14001 241.966 8.47834 242.956 10.165C243.946 11.8517 244.441 13.7767 244.441 15.94C244.441 18.58 243.671 20.9083 242.131 22.925C240.628 24.9417 238.355 26.28 235.311 26.94L244.936 43H238.941ZM223.761 23.31H231.131C233.845 23.31 235.88 22.65 237.236 21.33C238.593 19.9733 239.271 18.1767 239.271 15.94C239.271 13.6667 238.593 11.9067 237.236 10.66C235.916 9.41334 233.881 8.79 231.131 8.79H223.761V23.31Z",stroke:"white","stroke-width":"8"})))},I=function(){var e=Object(L.a)(),t=e.sendRequest,a=e.isLoading,l=Object(n.useState)([]),i=Object(c.a)(l,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(w.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("".concat("https://love-website.herokuapp.com/api","/blog/first-three"));case 3:a=e.sent,o(a.posts),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement("div",{className:"isometric-container"},!a&&s.length>0&&s.map((function(e){return r.a.createElement(A,{imageUrl:e.imageUrl,title:e.title,content:N()(e.content.substring(0,200)+"...")})}))),r.a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:"2rem"}},r.a.createElement(M.c,{className:"neon-button",to:"/Blog"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"Blog sayfas\u0131na ilerle")))};t.default=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(d,null),r.a.createElement(E,null),r.a.createElement(g,null),r.a.createElement(j,null),r.a.createElement(S,null),r.a.createElement(z,null),r.a.createElement(I,null))}}}]);
//# sourceMappingURL=9.f6d70c4d.chunk.js.map