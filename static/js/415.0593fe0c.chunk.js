"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{877:function(r,e,t){var n=t(861),a=t(757),c=t.n(a),u=t(243),o=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat("79fd63476190a574bb2d210b52a840b7"));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("No movies found",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();e.Z=o},126:function(r,e,t){t(791);var n=t(689),a=t(87),c=t(184);e.Z=function(r){var e=r.movies,t=(0,n.TH)();return(0,c.jsxs)("div",{children:[(0,c.jsx)("ul",{children:e.map((function(r){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(r.id),state:{from:t},children:r.title})},r.id)}))}),(0,c.jsx)("hr",{})]})}},415:function(r,e,t){t.r(e);var n=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),s=t(877),i=t(126),p=t(184);e.default=function(){var r=(0,o.useState)([]),e=(0,a.Z)(r,2),t=e[0],c=e[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.Z)();case 3:e=r.sent,c(e),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching popular movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(i.Z,{movies:t})]})}}}]);
//# sourceMappingURL=415.0593fe0c.chunk.js.map