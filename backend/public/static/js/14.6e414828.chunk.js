(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[14],{135:function(e,t,a){"use strict";var n=a(133),c=a.n(n),r=a(134),l=a(10),s=a(0);t.a=function(e){var t=Object(s.useState)(e),a=Object(l.a)(t,2),n=a[0],i=a[1],o=Object(s.useState)(!1),u=Object(l.a)(o,2),m=u[0],f=u[1],d=Object(s.useState)(),p=Object(l.a)(d,2),h=p[0],v=p[1],b=Object(s.useState)(!1),E=Object(l.a)(b,2),j=E[0],O=E[1],g=Object(s.useRef)([]),k=Object(s.useCallback)(function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n,r,l,s,i,o=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{},f(!0),l=new AbortController,g.current.push(l),e.prev=6,e.next=9,fetch(t,{method:a,body:n,headers:r,signal:l.signal});case 9:return s=e.sent,e.next=12,s.json();case 12:if(i=e.sent,g.current=g.current.filter((function(e){return e!==l})),s.ok){e.next=16;break}throw new Error(i.message);case 16:return f(!1),e.abrupt("return",i);case 20:throw e.prev=20,e.t0=e.catch(6),v(e.t0.message),f(!1),O(!0),e.t0;case 26:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(s.useEffect)((function(){return function(){g.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:m,error:h,open:j,sendRequest:k,clearError:function(){v(null),O(!1),i("")},state:n}}},137:function(e,t,a){},139:function(e,t,a){"use strict";a(137);var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement("div",{className:"container"},e.children)}},143:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(137);t.a=function(e){return c.a.createElement("div",{id:"page-title"},e.children)}},156:function(e,t){},288:function(e,t,a){},381:function(e,t,a){"use strict";a.r(t);var n=a(133),c=a.n(n),r=a(134),l=a(0),s=a.n(l),i=a(139),o=a(14),u=(a(288),a(135)),m=a(143),f=a(4),d=a(7),p=a(142),h=a.n(p);t.default=function(){var e=Object(u.a)(),t=(e.isLoading,e.error,e.open,e.sendRequest),a=(e.clearError,Object(l.useContext)(o.b)),n=Object(f.g)(),p=a.globalState.telltales;return Object(l.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("".concat("https://love-website.herokuapp.com/api","/telltales"));case 3:n=e.sent,a.functions.telltale.fetchTelltales(n.telltales),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,null,"Masallar"),s.a.createElement(i.a,null,s.a.createElement("div",{className:"masallar-main"},s.a.createElement("div",{className:"masallar-titles"},p.slice(0,10).map((function(e){return s.a.createElement("div",{key:e._id,className:"masallar-title"},s.a.createElement(d.c,{to:"".concat(n.path,"/").concat(e._id,"/").concat(e.title)},e.title))}))),s.a.createElement("div",{className:"masallar-titles"},p.slice(10,20).map((function(e){return s.a.createElement("div",{key:e._id,className:"masallar-title"},s.a.createElement(d.c,{to:"".concat(n.path,"/").concat(e._id,"/").concat(e.title)},e.title))}))),s.a.createElement("div",{className:"masallar-titles"},p.slice(20,30).map((function(e){return s.a.createElement("div",{key:e._id,className:"masallar-title"},s.a.createElement(d.c,{to:"".concat(n.path,"/").concat(e._id,"/").concat(e.title)},e.title))})))),s.a.createElement("div",{className:"masallar-hr"},s.a.createElement("hr",null)),p.map((function(e){return s.a.createElement(f.a,{key:e._id,path:"".concat(n.path,"/").concat(e._id,"/").concat(e.title)},s.a.createElement("div",null,s.a.createElement("h3",{className:"masal-title"},e.title),s.a.createElement("img",{src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.imageUrl),alt:e.title})," ",s.a.createElement("div",{className:"masallar-content"},h()(e.content))))}))))}}}]);
//# sourceMappingURL=14.6e414828.chunk.js.map