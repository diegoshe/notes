(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{35:function(e,t,n){e.exports=n(64)},40:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),o=n(14),l=n.n(o),i=(n(40),n(13)),s=n(9),u=n(12),m=Object(a.createContext)(),p=Object(a.createContext)(),b=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useContext)(m),l=Object(a.useContext)(p);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.trim()?(l.addNote(n.trim()).then((function(){o.show("\u0417\u0430\u043c\u0435\u0442\u043a\u0430 \u0431\u044b\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430","success")})).catch((function(){o.show("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a","danger")})),r("")):o.show("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438")}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0438",value:n,onChange:function(e){return r(e.target.value)}})))},f=n(66),O=n(65),d=function(e){var t=e.notes,n=e.onRemove;return c.a.createElement(f.a,{component:"ul",className:"list-group"},t.map((function(e){return c.a.createElement(O.a,{key:e.id,classNamess:"note",timeout:800},c.a.createElement("li",{key:e.id,className:"list-group-item note"},c.a.createElement("div",null,c.a.createElement("strong",null,e.title),c.a.createElement("small",null,e.date.slice(0,-5))),c.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:function(){return n(e.id)}},"\xd7")))})))},E=function(){return c.a.createElement("div",{className:"spinner-border",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))},v=function(){var e=Object(a.useContext)(p),t=e.loading,n=e.notes,r=e.fetchNotes,o=e.removeNote;return Object(a.useEffect)((function(){r()}),[]),c.a.createElement(a.Fragment,null,c.a.createElement(b,null),c.a.createElement("hr",null),t?c.a.createElement(E,null):c.a.createElement(d,{notes:n,onRemove:o}))},j=function(){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"\u0417\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0439, \u043d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439..."),c.a.createElement("p",{className:"lead"},"\u041f\u0440\u0438\u0432\u044b\u0447\u043a\u0430 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u2013 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u0441\u0435\u043a\u0440\u0435\u0442 \u0445\u043e\u0440\u043e\u0448\u0435\u0439 \u043f\u0430\u043c\u044f\u0442\u0438.")))},y=function(){return c.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg bg-primary"},c.a.createElement("div",{className:"navbar-brand"},"Note App"),c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item "},c.a.createElement(i.b,{className:"nav-link",to:"/",exact:!0},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),c.a.createElement("li",{className:"nav-item "},c.a.createElement(i.b,{className:"nav-link",to:"/about"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))))},h=function(){var e=Object(a.useContext)(m),t=e.alert,n=e.hide;return c.a.createElement(O.a,{in:t.visible,timeout:{enter:500,exit:350},classNames:"alert",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("div",{className:"alert alert-".concat(t.type||"warning"," alert-dismissible")},c.a.createElement("strong",null,"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435 !"),"\xa0",t.text,c.a.createElement("button",{onClick:n,type:"button",className:"close","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))},g=n(3);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D,P=(r={},Object(g.a)(r,"SHOW_ALERT",(function(e,t){return N({},t.payload,{visible:!0})})),Object(g.a)(r,"HIDE_ALERT",(function(e){return N({},e,{visible:!1})})),Object(g.a)(r,"DEFAULT",(function(e){return e})),r),x=function(e,t){return(P[t.type]||P.DEFAULT)(e,t)},k=function(e){var t=e.children,n=Object(a.useReducer)(x,{visible:!1}),r=Object(u.a)(n,2),o=r[0],l=r[1];return c.a.createElement(m.Provider,{value:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";l({type:"SHOW_ALERT",payload:{text:e,type:t}})},hide:function(){return l({type:"HIDE_ALERT"})},alert:o}},t)},T=n(11),S=n.n(T),A=n(15),C=n(16),L=n.n(C),R=n(32);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=(D={},Object(g.a)(D,"SHOW_LOADER",(function(e){return H({},e,{loading:!0})})),Object(g.a)(D,"ADD_NOTE",(function(e,t){var n=t.payload;return H({},e,{notes:[].concat(Object(R.a)(e.notes),[n])})})),Object(g.a)(D,"FETCH_NOTES",(function(e,t){return H({},e,{notes:t.payload,loading:!1})})),Object(g.a)(D,"REMOVE_NOTE",(function(e,t){var n=t.payload;return H({},e,{notes:e.notes.filter((function(e){return e.id!==n}))})})),Object(g.a)(D,"DEFAULT",(function(e){return e})),D),W=function(e,t){return(F[t.type]||F.DEFAULT)(e,t)};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){Object(g.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J="https://todo-list-first.firebaseio.com",B=function(e){var t=e.children,n=Object(a.useReducer)(W,{notes:[],loading:!1}),r=Object(u.a)(n,2),o=r[0],l=r[1],i=function(){return l({tupe:"SHOW_LOADER"})},s=function(){var e=Object(A.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,L.a.get("".concat(J,"/notes.json"));case 3:t=e.sent,n=Object.keys(t.data||[]).map((function(e){return I({},t.data[e],{id:e})})),l({type:"FETCH_NOTES",payload:n});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(A.a)(S.a.mark((function e(t){var n,r,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t,date:(new Date).toJSON()},e.prev=1,e.next=4,L.a.post("".concat(J,"/notes.json"),n);case 4:r=e.sent,a=I({},n,{id:r.data.name}),l({type:"ADD_NOTE",payload:a}),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(A.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.delete("".concat(J,"/notes/").concat(t,".json"));case 2:l({type:"REMOVE_NOTE",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(p.Provider,{value:{showLoader:i,addNote:m,removeNote:b,fetchNotes:s,loading:o.loading,notes:o.notes}},t)};var M=function(){return c.a.createElement(B,null,c.a.createElement(k,null,c.a.createElement(i.a,null,c.a.createElement(y,null),c.a.createElement("div",{className:"container pt-4"},c.a.createElement(h,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:v}),c.a.createElement(s.a,{path:"/about",component:j}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.61fb01d9.chunk.js.map