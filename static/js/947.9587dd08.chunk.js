"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[947],{854:function(e,n,r){r.d(n,{a:function(){return o}});var t,i=r(168),a=(r(791),r(430)),s=r(867),c=r(184),o=function(){return(0,c.jsx)(u,{children:(0,c.jsx)(a.Z1,{height:"50",width:"50",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"red",innerCircleColor:"blue",middleCircleColor:"yellow"})})},u=s.ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))},947:function(e,n,r){r.r(n);var t,i,a,s,c,o,u=r(168),l=r(861),p=r(439),d=r(757),f=r.n(d),h=r(854),v=r(626),x=r(791),m=r(689),w=r(87),g=r(867),j=r(184);n.default=function(){var e,n=(0,m.UO)().movieId,r=(0,x.useState)(null),t=(0,p.Z)(r,2),i=t[0],a=t[1],s=(0,x.useState)(!1),c=(0,p.Z)(s,2),o=c[0],u=c[1],d=(0,m.TH)(),g=(0,x.useRef)((null===(e=d.state)||void 0===e?void 0:e.from)||"/");(0,x.useEffect)((function(){P(n)}),[n]);var P=function(){var e=(0,l.Z)(f().mark((function e(n){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,(0,v.yx)(n);case 4:r=e.sent,a(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}(),S=i||{},U=S.title,L=S.release_date,O=S.vote_average,W=S.overview,G=S.genres,I=S.poster_path,R=S.original_title;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w.rU,{to:g.current,children:(0,j.jsx)(C,{children:"Go back"})}),o&&!i?(0,j.jsx)(h.a,{}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(Z,{children:[(0,j.jsx)(y,{children:I?(0,j.jsx)("img",{width:"200px",src:"https://image.tmdb.org/t/p/w500/".concat(I),alt:R}):(0,j.jsx)("img",{width:"200px",src:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:R})}),(0,j.jsxs)(b,{children:[U&&L?(0,j.jsxs)("h2",{children:[U," (",L.slice(0,4),")"]}):"We do not have Title for this films",O?(0,j.jsxs)("p",{children:["User Score : ",Math.ceil(10*O),"%"]}):"We do not have User Csore for this films",(0,j.jsx)("h3",{children:"Overview"}),W?(0,j.jsx)("p",{children:W}):"We do not have overview for this films",(0,j.jsx)("h3",{children:"Genres"}),G?(0,j.jsx)(k,{children:G.map((function(e){return(0,j.jsx)("li",{children:e.name},e.id)}))}):"We do not have Genres for this films"]})]}),(0,j.jsx)("hr",{}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:"Additional information"}),(0,j.jsxs)(_,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(w.OL,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(w.OL,{to:"reviews",children:"Reviews"})})]}),(0,j.jsx)("hr",{}),(0,j.jsx)(x.Suspense,{children:(0,j.jsx)(m.j3,{})})]})]})]})};var Z=g.ZP.div(t||(t=(0,u.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),y=g.ZP.div(i||(i=(0,u.Z)(["\n  width: 200px;\n  display: flex;\n  align-items: center;\n"]))),b=g.ZP.div(a||(a=(0,u.Z)(["\n  width: 100%;\n  display: inline-block;\n"]))),k=g.ZP.ul(s||(s=(0,u.Z)(["\n  display: flex;\n  gap: 10px;\n  padding: 0;\n"]))),_=g.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  gap: 30px;\n"]))),C=g.ZP.button(o||(o=(0,u.Z)(["\n  margin-bottom: 20px;\n"])))},626:function(e,n,r){r.d(n,{Dd:function(){return p},bI:function(){return u},it:function(){return d},wr:function(){return o},yx:function(){return l}});var t=r(861),i=r(757),a=r.n(i),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="7223fe1feb6bb4929f794ea7615387c2",o=function(){var e=(0,t.Z)(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(c,"&query=").concat(n,"&include_adult=false&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"?api_key=").concat(c));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(c));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(c,"&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=947.9587dd08.chunk.js.map