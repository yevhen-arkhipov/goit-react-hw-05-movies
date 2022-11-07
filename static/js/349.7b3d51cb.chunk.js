"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[349],{897:function(n,t,e){e.d(t,{Z:function(){return w}});var r,c,a,o,u,i,s=e(689),p=e(168),f=e(731),l=e(444),h=l.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 32px;\n  margin: 0px auto;\n  padding: 0px;\n  list-style: none;\n"]))),d=l.ZP.li(c||(c=(0,p.Z)(["\n  margin-bottom: ","px;\n\n  &:nth-last-child(-n + 2) {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.theme.space[3]})),x=l.ZP.h3(a||(a=(0,p.Z)(["\n  margin-bottom: ","px;\n  font-size: ","px;\n  text-transform: uppercase;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.xl})),v=(0,l.ZP)(f.rU)(o||(o=(0,p.Z)(["\n  text-decoration: none;\n  color: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.hoverText})),m=l.ZP.img(u||(u=(0,p.Z)(["\n  width: 340px;\n  height: 476px;\n"]))),Z=l.ZP.p(i||(i=(0,p.Z)(["\n  max-width: 340px;\n  margin-top: ","px;\n  font-size: ","px;\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.fontSizes.xl})),g=e(184),w=function(n){var t=n.movies,e=n.sectionTitle,r=void 0===e?null:e,c=(0,s.TH)();return(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)(x,{children:r}),(0,g.jsx)(h,{children:t.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return(0,g.jsx)(d,{children:(0,g.jsxs)(v,{state:{from:c},to:"/movies/".concat(t),children:[(0,g.jsx)(m,{src:r?"".concat("https://image.tmdb.org/t/p/w342/").concat(r):"https://i.ibb.co/nw331jk/1.jpg",alt:e}),(0,g.jsx)(Z,{children:e})]})},t)}))})]})}},349:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,c,a=e(861),o=e(885),u=e(757),i=e.n(u),s=e(791),p=e(390),f=e(897),l=e(168),h=e(444),d=h.ZP.section(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-top: ","px;\n  padding-bottom: ","px;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]})),x=h.ZP.div(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 1280px;\n  font-size: ","px;\n"])),(function(n){return n.theme.fontSizes.xxl})),v=e(184),m=function(){var n=(0,s.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.yW)();case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsx)(d,{children:(0,v.jsx)(x,{children:(0,v.jsx)(f.Z,{movies:e,sectionTitle:"Trending today"})})})}},390:function(n,t,e){e.d(t,{Bc:function(){return p},bG:function(){return h},eQ:function(){return f},p2:function(){return l},yW:function(){return s}});var r=e(861),c=e(757),a=e.n(c),o=e(44);o.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u="f770e26d26a9f8dc8d3f9af112edaff0",i="/movie/",s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat("/trending/movie/day","?api_key=").concat(u));case 3:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat(i).concat(t,"?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat("/search/movie","?api_key=").concat(u,"&query=").concat(t,"&include_adult=false"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat(i).concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("".concat(i).concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=349.7b3d51cb.chunk.js.map