(this["webpackJsonpechelon-test"]=this["webpackJsonpechelon-test"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=(n(13),n(2)),u=(n(14),n(5)),l=n.n(u),o=n(8);function j(e){return Array.isArray(e)}function b(){return(b=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gist.githubusercontent.com/jasonbyrne/881459829d342a2ddd495165fb815c2d/raw/e0fb08e2fa2a8288a124b1a187b86ecba35d2cb9/echelon-videos-example.json");case 3:return t=e.sent,e.next=6,t.json();case 6:if(!j((n=e.sent).items)){e.next=11;break}return e.abrupt("return",n.items.sort((function(e,t){return e.sortOrder-t.sortOrder})));case 11:return e.abrupt("return",!1);case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}var f=n(0);var d=function(){return Object(f.jsx)("div",{className:"center-screen",children:"Loading"})};var m=function(){return Object(f.jsxs)("div",{className:"center-screen",children:[Object(f.jsx)("p",{children:"Error retrieving data!"}),Object(f.jsx)("button",{onClick:function(){return window.location.reload()},children:"Reload"})]})},O=n(3),h=n(6);n(17);var p=function(e){var t=e.classInfo;return Object(f.jsxs)("div",{className:"class-card",children:[Object(f.jsxs)("p",{className:"class-card__title",children:[function(e){switch(e){case"Beginner":return"&#128994;";case"Intermediate":return"&#128993";case"Advanced":return"&#128308;";default:return"&#9898;"}}(t.level)," ",t.name]}),Object(f.jsx)("img",{className:"class-card__img",src:t.image,alt:t.name+" thumbnail"})]})};n(18);function x(e,t){return Array.from(t.reduce((function(t,n){return t.add(n[e])}),new Set))}function v(e){return e.reduce((function(e,t){return e[t]=!1,e}),{})}var g=function(e){var t=e.classList,n=x("level",t),r=v(n),a=Object(c.useState)(r),s=Object(i.a)(a,2),u=s[0],l=s[1],o=x("inst",t),j=v(o),b=Object(c.useState)(j),d=Object(i.a)(b,2),m=d[0],g=d[1],_=x("cat",t),N=v(_),C=Object(c.useState)(N),k=Object(i.a)(C,2),w=k[0],y=k[1],S=Object(c.useRef)(null),L=Object(c.useState)(""),F=Object(i.a)(L,2),I=F[0],A=F[1];function B(e,t){return function(n){t(Object(h.a)(Object(h.a)({},e),{},Object(O.a)({},n.target.name,!e[n.target.name])))}}function E(e,t,n){var c=Object.values(t).every((function(e){return!0===e})),r=Object.values(t).every((function(e){return!1===e}));return c||r?n:n.filter((function(n){return t[n[e]]}))}function T(){S.current&&S.current.classList.toggle("filter-menu--open")}var D=function(e){var t=e.filter((function(e){return e.name.toLowerCase().includes(I.toLowerCase())})),n=E("level",u,t),c=E("inst",m,n);return E("cat",w,c)}(t);return Object(f.jsxs)("div",{className:"main-page",onClick:function(e){var t=e.target;S.current&&!S.current.contains(t)&&"BUTTON"!==t.nodeName&&S.current.classList.remove("filter-menu--open")},children:[Object(f.jsx)("h1",{className:"main-page__title",children:"Echelon Classes"}),Object(f.jsxs)("div",{className:"main-page__filter-controls row f-center",children:[Object(f.jsx)("input",{placeholder:"Filter Class Names",type:"text",value:I,onChange:function(e){return A(e.target.value)}}),Object(f.jsx)("button",{className:"button-as-link",onClick:T,children:"Show Filters"}),Object(f.jsx)("button",{className:"button-as-link",onClick:function(){A(""),l(r),g(j),y(N)},children:"Clear"})]}),Object(f.jsxs)("div",{ref:S,className:"filter-menu column",children:[Object(f.jsx)("button",{className:"filter-menu__button",onClick:T,children:"\u2716"}),Object(f.jsx)("p",{className:"filter-menu__filter-title",children:"Difficulties"}),Object(f.jsx)("div",{className:"filter-menu__input-group",children:n.map((function(e,t){return Object(f.jsxs)("label",{children:[e,Object(f.jsx)("input",{type:"checkbox",name:e,value:e,checked:u[e],onChange:B(u,l)})]},t)}))}),Object(f.jsx)("p",{className:"filter-menu__filter-title",children:"Instructors"}),Object(f.jsx)("div",{className:"filter-menu__input-group",children:o.map((function(e,t){return Object(f.jsxs)("label",{children:[e,Object(f.jsx)("input",{type:"checkbox",name:e,value:e,checked:m[e],onChange:B(m,g)})]},t)}))}),Object(f.jsx)("p",{className:"filter-menu__filter-title",children:"Categories"}),Object(f.jsx)("div",{className:"filter-menu__input-group",children:_.map((function(e,t){return Object(f.jsxs)("label",{children:[e,Object(f.jsx)("input",{type:"checkbox",name:e,value:e,checked:w[e],onChange:B(w,y)})]},t)}))})]}),Object(f.jsx)("div",{className:"main-page__class-cards-container",children:D.length?D.map((function(e,t){return Object(f.jsx)(p,{classInfo:e},t)})):Object(f.jsx)("h2",{className:"main-page__no-classes-msg",children:"No Classes Found"})})]})};var _=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),s=Object(i.a)(a,2),u=s[0],l=s[1],o=Object(c.useState)(!1),j=Object(i.a)(o,2),O=j[0],h=j[1];return Object(c.useEffect)((function(){(function(){return b.apply(this,arguments)})().then((function(e){e?r(e):h(!0),l(!1)}))}),[]),Object(f.jsx)(f.Fragment,{children:u?Object(f.jsx)(d,{}):O?Object(f.jsx)(m,{}):Object(f.jsx)(g,{classList:n})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root")),N()}},[[19,1,2]]]);
//# sourceMappingURL=main.4c46e1be.chunk.js.map