(this["webpackJsonpechelon-test"]=this["webpackJsonpechelon-test"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(7),a=n.n(r),i=(n(13),n(2)),l=(n(14),n(5)),o=n.n(l),u=n(8);function j(e){return Array.isArray(e)}function d(){return(d=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gist.githubusercontent.com/jasonbyrne/881459829d342a2ddd495165fb815c2d/raw/e0fb08e2fa2a8288a124b1a187b86ecba35d2cb9/echelon-videos-example.json");case 3:return t=e.sent,e.next=6,t.json();case 6:if(!j((n=e.sent).items)){e.next=11;break}return e.abrupt("return",n.items.sort((function(e,t){return e.sortOrder-t.sortOrder})));case 11:return e.abrupt("return",!1);case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}var b=n(0);var O=function(){return Object(b.jsx)("div",{className:"center-screen",children:"Loading"})};var m=function(){return Object(b.jsxs)("div",{className:"center-screen",children:[Object(b.jsx)("p",{children:"Error retrieving data!"}),Object(b.jsx)("button",{onClick:function(){return window.location.reload()},children:"Reload"})]})};n(17);var f=function(e){var t=e.classInfo,n=e.setCurrentClass;return Object(b.jsxs)("div",{className:"class-card",onClick:function(){return n(t)},children:[Object(b.jsxs)("p",{className:"class-card__title",children:[function(e){switch(e){case"Beginner":return"\ud83d\udc9a";case"Intermediate":return"\ud83d\udc9b";case"Advanced":return"\u2764\ufe0f";default:return"\u26aa"}}(t.level)," ",t.name]}),Object(b.jsx)("img",{className:"class-card__img",src:t.image,alt:t.name+" thumbnail"})]})};n(18);var v=function(e){var t=e.currentClass,n=e.setCurrentClass,s=Object(c.useRef)(null),r=function(){return n(null)};return Object(b.jsx)("div",{className:"class-modal column ".concat(t?"class-modal--open":""),onClick:function(e){var t;(null===(t=s.current)||void 0===t?void 0:t.contains(e.target))||r()},children:Object(b.jsxs)("div",{ref:s,className:"class-modal__content column",children:[Object(b.jsx)("button",{onClick:r,className:"close-button",children:"\u2716"}),Object(b.jsx)("h2",{className:"class-modal__class-title",children:null===t||void 0===t?void 0:t.name}),(null===t||void 0===t?void 0:t.desc)&&Object(b.jsx)("p",{children:t.desc}),Object(b.jsx)("img",{src:null===t||void 0===t?void 0:t.image,alt:null===t||void 0===t?void 0:t.name}),Object(b.jsxs)("h3",{children:["Instructor: ",null===t||void 0===t?void 0:t.inst]}),Object(b.jsxs)("p",{children:["Level: ",null===t||void 0===t?void 0:t.level]}),Object(b.jsxs)("div",{className:"row f-center",children:[Object(b.jsxs)("p",{children:["Category: ",null===t||void 0===t?void 0:t.cat]}),Object(b.jsxs)("p",{children:["Product: ",null===t||void 0===t?void 0:t.product]}),Object(b.jsxs)("p",{children:["Length: ",null===t||void 0===t?void 0:t.len]})]}),Object(b.jsx)("button",{className:"button-as-link",onClick:r,children:"Dismiss"})]})})},h=n(3),p=n(6);var x=function(e){var t=e.groupName,n=e.optionsList,c=e.optionsFilters,s=e.setOptionsFilters;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:"filter-menu__filter-title",children:t}),Object(b.jsx)("div",{className:"filter-menu__input-group",children:n.map((function(e,t){return Object(b.jsxs)("label",{children:[e,Object(b.jsx)("input",{type:"checkbox",name:e,value:e,checked:c[e],onChange:(n=c,r=s,function(e){r(Object(p.a)(Object(p.a)({},n),{},Object(h.a)({},e.target.name,!n[e.target.name])))})})]},t);var n,r}))})]})};n(19);function g(e,t){return Array.from(t.reduce((function(t,n){return t.add(n[e])}),new Set))}function C(e){return e.reduce((function(e,t){return e[t]=!1,e}),{})}var N=function(e){var t=e.classList,n=g("level",t),s=C(n),r=Object(c.useState)(s),a=Object(i.a)(r,2),l=a[0],o=a[1],u=g("inst",t),j=C(u),d=Object(c.useState)(j),O=Object(i.a)(d,2),m=O[0],h=O[1],p=g("cat",t),N=C(p),k=Object(c.useState)(N),_=Object(i.a)(k,2),F=_[0],w=_[1],L=Object(c.useRef)(null),S=Object(c.useState)(""),y=Object(i.a)(S,2),I=y[0],A=y[1],B=Object(c.useState)(!1),E=Object(i.a)(B,2),T=E[0],D=E[1],P=Object(c.useState)(null),R=Object(i.a)(P,2),J=R[0],M=R[1];function U(e,t,n){var c=Object.values(t).every((function(e){return!0===e})),s=Object.values(t).every((function(e){return!1===e}));return c||s?n:n.filter((function(n){return t[n[e]]}))}function q(){D(!T)}function z(){A(""),o(s),h(j),w(N)}var G=function(e){var t=e.filter((function(e){return e.name.toLowerCase().includes(I.toLowerCase())})),n=U("level",l,t),c=U("inst",m,n);return U("cat",F,c)}(t);return Object(b.jsxs)("div",{className:"main-page",onClick:function(e){var t,n=e.target;(null===(t=L.current)||void 0===t?void 0:t.contains(n))||"BUTTON"===n.nodeName||D(!1)},children:[Object(b.jsx)("h1",{className:"main-page__title",children:"Echelon Classes"}),Object(b.jsxs)("div",{className:"main-page__filter-controls row f-center",children:[Object(b.jsx)("input",{placeholder:"Filter Class Names",type:"text",value:I,onChange:function(e){return A(e.target.value)},tabIndex:J?-1:0}),Object(b.jsx)("button",{tabIndex:J?-1:0,className:"button-as-link",onClick:q,children:"Show Filters"}),Object(b.jsx)("button",{tabIndex:J?-1:0,className:"button-as-link",onClick:z,children:"Clear"})]}),Object(b.jsxs)("div",{ref:L,className:"filter-menu column ".concat(T?"filter-menu--open":""),"aria-hidden":!T,children:[Object(b.jsx)("button",{className:"close-button",onClick:q,children:"\u2716"}),Object(b.jsx)(x,{groupName:"Difficulties",optionsList:n,optionsFilters:l,setOptionsFilters:o}),Object(b.jsx)(x,{groupName:"Instructors",optionsList:u,optionsFilters:m,setOptionsFilters:h}),Object(b.jsx)(x,{groupName:"Categories",optionsList:p,optionsFilters:F,setOptionsFilters:w}),Object(b.jsxs)("div",{className:"row f-center",children:[Object(b.jsx)("button",{onClick:z,className:"button-as-link",children:"Clear All"}),Object(b.jsx)("button",{onClick:q,className:"button-as-link",children:"Close"})]})]}),Object(b.jsx)("div",{className:"main-page__class-cards-container",children:G.length?G.map((function(e,t){return Object(b.jsx)(f,{classInfo:e,setCurrentClass:M},t)})):Object(b.jsx)("h2",{className:"main-page__no-classes-msg",children:"No Classes Found"})}),Object(b.jsx)(v,{currentClass:J,setCurrentClass:M})]})};var k=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),a=Object(i.a)(r,2),l=a[0],o=a[1],u=Object(c.useState)(!1),j=Object(i.a)(u,2),f=j[0],v=j[1];return Object(c.useEffect)((function(){(function(){return d.apply(this,arguments)})().then((function(e){e?s(e):v(!0),o(!1)}))}),[]),Object(b.jsx)(b.Fragment,{children:l?Object(b.jsx)(O,{}):f?Object(b.jsx)(m,{}):Object(b.jsx)(N,{classList:n})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),_()}],[[20,1,2]]]);
//# sourceMappingURL=main.630d47a7.chunk.js.map