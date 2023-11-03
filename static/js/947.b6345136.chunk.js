"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[947],{947:function(e,n,t){t.r(n);var r,a,i,s,c,o,u=t(168),l=t(861),p=t(439),d=t(757),f=t.n(d),h=t(510),v=t(626),x=t(791),m=t(689),j=t(87),g=t(867),w=t(184);n.default=function(){var e,n=(0,m.UO)().movieId,t=(0,x.useState)(null),r=(0,p.Z)(t,2),a=r[0],i=r[1],s=(0,x.useState)(!1),c=(0,p.Z)(s,2),o=c[0],u=c[1],d=(0,m.TH)(),g=(0,x.useRef)((null===(e=d.state)||void 0===e?void 0:e.from)||"/");(0,x.useEffect)((function(){U(n)}),[n]);var U=function(){var e=(0,l.Z)(f().mark((function e(n){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,(0,v.yx)(n);case 4:t=e.sent,i(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}(),C=a||{},O=C.title,S=C.release_date,W=C.vote_average,G=C.overview,I=C.genres,L=C.poster_path,R=C.original_title;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(j.rU,{to:g.current,children:(0,w.jsx)(P,{children:"Go back"})}),o&&!a?(0,w.jsx)(h.a,{}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(Z,{children:[(0,w.jsx)(b,{children:L?(0,w.jsx)("img",{width:"200px",src:"https://image.tmdb.org/t/p/w500/".concat(L),alt:R}):(0,w.jsx)("img",{width:"200px",src:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:R})}),(0,w.jsxs)(k,{children:[O&&S?(0,w.jsxs)("h2",{children:[O," (",S.slice(0,4),")"]}):"We do not have Title for this films",W?(0,w.jsxs)("p",{children:["User Score : ",Math.ceil(10*W),"%"]}):"We do not have User Csore for this films",(0,w.jsx)("h3",{children:"Overview"}),G?(0,w.jsx)("p",{children:G}):"We do not have overview for this films",(0,w.jsx)("h3",{children:"Genres"}),I?(0,w.jsx)(y,{children:I.map((function(e){return(0,w.jsx)("li",{children:e.name},e.id)}))}):"We do not have Genres for this films"]})]}),(0,w.jsx)("hr",{}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:"Additional information"}),(0,w.jsxs)(_,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(j.OL,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(j.OL,{to:"reviews",children:"Reviews"})})]}),(0,w.jsx)("hr",{}),(0,w.jsx)(x.Suspense,{fallback:(0,w.jsx)(h.a,{}),children:(0,w.jsx)(m.j3,{})})]})]})]})};var Z=g.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),b=g.ZP.div(a||(a=(0,u.Z)(["\n  width: 200px;\n  display: flex;\n  align-items: center;\n"]))),k=g.ZP.div(i||(i=(0,u.Z)(["\n  width: 100%;\n  display: inline-block;\n"]))),y=g.ZP.ul(s||(s=(0,u.Z)(["\n  display: flex;\n  gap: 10px;\n  padding: 0;\n"]))),_=g.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  gap: 30px;\n"]))),P=g.ZP.button(o||(o=(0,u.Z)(["\n  margin-bottom: 20px;\n"])))},626:function(e,n,t){t.d(n,{Dd:function(){return p},bI:function(){return u},it:function(){return d},wr:function(){return o},yx:function(){return l}});var r=t(861),a=t(757),i=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="7223fe1feb6bb4929f794ea7615387c2",o=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(c,"&query=").concat(n,"&include_adult=false&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"?api_key=").concat(c));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(c));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(c,"&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=947.b6345136.chunk.js.map