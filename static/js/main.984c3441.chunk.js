(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),r=c.n(s),i=c(18),a=c.n(i),o=(c(25),function(){return Object(n.jsx)("div",{className:"",children:Object(n.jsx)("h1",{children:"About Page"})})}),j=c(9),h=c.n(j),u=c(11),b=c(12),d=c(7),p=function(e){Object(s.useEffect)((function(){a()}),[]);var t=Object(s.useState)([]),c=Object(b.a)(t,2),r=c[0],i=c[1],a=function(){var e=Object(u.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortniteapi.io/v1/items/upcoming?lang=en",{headers:{Authorization:"95022892-ec860967-8130e140-2445c59a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,i(c.items);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"Shop",children:[Object(n.jsx)("h1",{children:"Shopping Page"}),Object(n.jsx)("h3",{children:Object(n.jsx)("code",{children:"list of shop will go here and the pages too"})}),Object(n.jsx)("div",{children:r.map((function(e){return Object(n.jsx)("h1",{className:"product",children:Object(n.jsx)(d.b,{to:"/shop/".concat(e.id),children:e.name})},e.id)}))})]})},l=function(){return Object(n.jsxs)("nav",{children:[Object(n.jsx)(d.b,{to:"/",children:Object(n.jsx)("h3",{children:"Home"})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)(d.b,{to:"/about",children:Object(n.jsx)("li",{children:"About"})}),Object(n.jsx)(d.b,{to:"/shop",children:Object(n.jsx)("li",{children:"Shoppings"})}),Object(n.jsx)(d.b,{to:"/product",children:Object(n.jsx)("li",{children:"Product Details"})})]})]})},x=function(e){var t=e.match;Object(s.useEffect)((function(){j()}),[]);var c=t.params.id,r=Object(s.useState)({images:{}}),i=Object(b.a)(r,2),a=i[0],o=i[1],j=function(){var e=Object(u.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortniteapi.io/v1/items/get?id=".concat(c,"&lang=en"),{headers:{Authorization:"95022892-ec860967-8130e140-2445c59a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n.item);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"item"}),Object(n.jsx)("h2",{children:a.name}),Object(n.jsx)("img",{className:"logo",src:a.images.icon,alt:"imag"})]})},O=(c(32),c(2)),f=function(){return Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(l,{}),Object(n.jsx)(O.a,{path:"/about",component:o,exact:!0}),Object(n.jsx)(O.a,{path:"/shop",component:p,exact:!0}),Object(n.jsx)(O.a,{path:"/shop/:id",component:x,exact:!0})]})})};a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.984c3441.chunk.js.map