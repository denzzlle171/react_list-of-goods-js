(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),o=n(5),r=n(7),i=(n(12),n(13),n(1)),a=n(0),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l="alphabet",b="length";var j=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),j=Object(o.a)(s,2),h=j[0],d=j[1],g=function(t,e,n){var c=Object(r.a)(t);return e&&c.sort((function(t,n){switch(e){case l:return t.localeCompare(n);case b:return t.length-n.length;default:return 0}})),n&&(c=c.reverse()),c}(u,n,h);return Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{type:"button",className:"button is-info ".concat(n!==l&&"is-light"),onClick:function(){return c(l)},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",className:"button is-success ".concat(n!==b&&"is-light"),onClick:function(){return c(b)},children:"Sort by length"}),Object(a.jsx)("button",{type:"button",className:"button is-warning ".concat(!h&&"is-light"),onClick:function(){return d((function(t){return!t}))},children:"Reverse"}),(n||h)&&Object(a.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),d(!1)},children:"Reset"})]}),Object(a.jsx)("ul",{children:g.map((function(t){return Object(a.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bea88941.chunk.js.map