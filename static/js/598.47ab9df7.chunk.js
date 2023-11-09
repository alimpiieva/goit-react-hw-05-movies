"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[598],{598:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var r=a(861),s=a(439),n=a(757),c=a.n(n),i=a(791),l=a(689),o=a(87),u=a(243),d=function(){var e=(0,r.Z)(c().mark((function e(t){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:"79fd63476190a574bb2d210b52a840b7"}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=d,p=(a(632),a(184)),h=function(){var e,t=(0,l.UO)().movieId,a=(0,l.TH)(),n=(0,i.useRef)((null===(e=a.state)||void 0===e?void 0:e.from)||"/"),u=(0,i.useState)(null),d=(0,s.Z)(u,2),h=d[0],v=d[1],x=(0,i.useState)(!1),f=(0,s.Z)(x,2),b=f[0],j=f[1],N=(0,i.useState)(null),g=(0,s.Z)(N,2),w=g[0],k=g[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,m(t);case 4:a=e.sent,v(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),k(e.t0);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,p.jsxs)(p.Fragment,{children:[b&&(0,p.jsx)("div",{className:"text-center",children:"Loading..."}),w&&(0,p.jsx)("p",{className:"text-danger text-center",children:"Oops... Something went wrong..."}),h&&(0,p.jsxs)("div",{className:"container mt-4",children:[(0,p.jsx)(o.rU,{to:n.current,className:"btn btn-outline-primary mb-3",children:"Back to Movies"}),(0,p.jsx)("div",{className:"card",children:(0,p.jsxs)("div",{className:"card-body",children:[(0,p.jsxs)("h1",{className:"card-title mb-4",children:["MovieDetails: ",h.title]}),(0,p.jsx)("img",{src:h.poster_path?"https://image.tmdb.org/t/p/w500/".concat(h.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:h.title,className:"img-fluid mb-4"}),(0,p.jsxs)("p",{className:"card-text",children:["Overview: ",h.overview]}),(0,p.jsxs)("p",{className:"card-text",children:["Release Date: ",h.release_date]})]})}),(0,p.jsx)("hr",{className:"mt-4"}),(0,p.jsxs)("ul",{className:"nav nav-pills",children:[(0,p.jsx)("li",{className:"nav-item",children:(0,p.jsx)(o.rU,{to:"cast",className:"nav-link btn btn-outline-info",children:"Cast"})}),(0,p.jsx)("li",{className:"nav-item",children:(0,p.jsx)(o.rU,{to:"reviews",className:"nav-link btn btn-outline-success",children:"Reviews"})})]}),(0,p.jsx)("hr",{}),(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading details..."}),children:(0,p.jsx)(l.j3,{})})]})]})}}}]);
//# sourceMappingURL=598.47ab9df7.chunk.js.map