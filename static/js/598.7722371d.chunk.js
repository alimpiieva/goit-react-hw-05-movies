"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[598],{598:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),s=r(439),a=r(757),i=r.n(a),c=r(791),l=r(689),o=r(87),u=r(243),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:"79fd63476190a574bb2d210b52a840b7"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=p,d=r(184),v=function(){var e,t=(0,l.UO)().movieId,r=(0,l.TH)(),a=(0,c.useRef)((null===(e=r.state)||void 0===e?void 0:e.from)||"/"),u=(0,c.useState)(null),p=(0,s.Z)(u,2),v=p[0],f=p[1],x=(0,c.useState)(!1),m=(0,s.Z)(x,2),j=m[0],w=m[1],g=(0,c.useState)(null),b=(0,s.Z)(g,2),k=b[0],_=b[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,h(t);case 4:r=e.sent,f(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),_(e.t0);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,d.jsxs)(d.Fragment,{children:[j&&(0,d.jsx)("div",{children:"Loading..."}),k&&(0,d.jsx)("p",{children:"Oops... Something went wrong..."}),v&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.rU,{to:a.current,children:"Back to movies"}),(0,d.jsxs)("h1",{children:["MovieDetails: ",v.title]}),(0,d.jsx)("img",{src:v.poster_path?"https://image.tmdb.org/t/p/w500/".concat(v.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:v.title,width:400}),(0,d.jsxs)("p",{children:["Overview: ",v.overview]}),(0,d.jsxs)("p",{children:["Release Date: ",v.release_date]}),(0,d.jsx)("hr",{}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)("hr",{}),(0,d.jsx)(c.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading details..."}),children:(0,d.jsx)(l.j3,{})})]})]})}}}]);
//# sourceMappingURL=598.7722371d.chunk.js.map