(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{276:function(e,t){},383:function(e,t,a){},446:function(e,t,a){"use strict";a.r(t);var l=a(22),c=a.n(l),n=a(38),r=a(0),s=a.n(r),i=a(91),m=a(20),o=(a(383),a(89)),u=a(93),p=a(8),d=a(12),E=a(268),f=a.n(E);t.default=function(){var e=Object(o.a)(),t=(e.isLoading,e.error,e.open,e.sendRequest),a=(e.clearError,Object(r.useContext)(m.b)),l=Object(p.g)(),E=a.globalState.telltales;return Object(r.useEffect)((function(){(function(){var e=Object(n.a)(c.a.mark((function e(){var l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("".concat("https://love-website.herokuapp.com/api","/telltales"));case 3:l=e.sent,a.functions.telltale.fetchTelltales(l.telltales),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,"Masallar"),s.a.createElement(i.a,null,s.a.createElement("div",{className:"masallar-main"},s.a.createElement("div",{className:"masallar-titles"},E.slice(0,10).map((function(e){return s.a.createElement("div",{key:e._id,className:"masallar-title"},s.a.createElement(d.c,{to:"".concat(l.path,"/").concat(e._id,"/").concat(e.title)},e.title))}))),s.a.createElement("div",{className:"masallar-titles"},E.slice(10,20).map((function(e){return s.a.createElement("div",{key:e._id,className:"masallar-title"},s.a.createElement(d.c,{to:"".concat(l.path,"/").concat(e._id,"/").concat(e.title)},e.title))}))),s.a.createElement("div",{className:"masallar-titles"},E.slice(20,30).map((function(e){return s.a.createElement("div",{key:e._id,className:"masallar-title"},s.a.createElement(d.c,{to:"".concat(l.path,"/").concat(e._id,"/").concat(e.title)},e.title))})))),s.a.createElement("div",{className:"masallar-hr"},s.a.createElement("hr",null)),E.map((function(e){return s.a.createElement(p.a,{key:e._id,path:"".concat(l.path,"/").concat(e._id,"/").concat(e.title)},s.a.createElement("div",null,s.a.createElement("h3",{className:"masal-title"},e.title),s.a.createElement("img",{src:"".concat("https://cerenserhat-love.s3.eu-central-1.amazonaws.com","/").concat(e.imageUrl),alt:e.title})," ",s.a.createElement("div",{className:"masallar-content"},f()(e.content))))}))))}}}]);
//# sourceMappingURL=15.7977f35e.chunk.js.map