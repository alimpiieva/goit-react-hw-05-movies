"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{733:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),i=r(243),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:"79fd63476190a574bb2d210b52a840b7"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Nothing to show:",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=o,h=r(689),l=r(184),f=function(){var e=(0,h.UO)().movieId,t=(0,u.useState)([]),r=(0,a.Z)(t,2),c=r[0],i=r[1],o=(0,u.useState)(!1),f=(0,a.Z)(o,2),d=f[0],v=f[1],m=(0,u.useState)(null),w=(0,a.Z)(m,2),x=w[0],b=w[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,p(e);case 4:(r=t.sent)&&i(r.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),b(t.t0);case 11:return t.prev=11,v(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),d?(0,l.jsx)("div",{children:"Loading cast..."}):x?(0,l.jsx)("p",{children:"Oops... Something went wrong while fetching cast..."}):(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Cast"}),(0,l.jsx)("ul",{children:c.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("p",{children:["Name: ",e.name]}),e.profile_path&&(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.profile_path),alt:e.name})]},e.id)}))})]})}}}]);
//# sourceMappingURL=733.f2c9cbdd.chunk.js.map