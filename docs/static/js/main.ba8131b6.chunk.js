(this["webpackJsonpgift-app"]=this["webpackJsonpgift-app"]||[]).push([[0],{34:function(e,t,a){e.exports=a(46)},39:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(39),a(40),a(52)),i=a(49),u=a(33),m=a(9),s=a(53),g=a(51),d=a(48),E=function(e){var t=e.onChangeCategory,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(!0),u=Object(m.a)(i,2),E=u[0],f=u[1];return r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{variant:"danger",onClose:function(){return f(!0)},dismissible:!0,hidden:E},r.a.createElement(s.a.Heading,null,"Error al almacenar la categoria"),r.a.createElement("p",null," Agrega un valor correcto  ")),r.a.createElement(g.a,null,r.a.createElement(g.a.Group,{controlId:"id-category"},r.a.createElement(g.a.Label,null,"Agregar categoria"),r.a.createElement(g.a.Control,{type:"text",placeholder:"Cual es la nueva categoria ?",onChange:function(e){return o(e.target.value)},value:l})),r.a.createElement(d.a,{bg:"bark",onClick:function(e){e.preventDefault(),l.trim().length>2?(o(""),t(l)):f(!1)}},"Agregar")))},f=a(50),p=a(31),h=a(54),v=function(e){var t=e.gif,a=t.id,c=t.title,l=t.img;return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,{md:"3"},r.a.createElement(h.a,{id:"id-card-".concat(a)},r.a.createElement(h.a.Img,{variant:"top",src:l}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,{as:"h6"},c)))))},b=(a(44),a(25)),y=a.n(b),O=a(32),j=function(){var e=Object(O.a)(y.a.mark((function e(t){var a,n,r,c,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=s9cgu35D9q6O0a0tuUSx9bNW5oRcFZUt&q=".concat(encodeURI(t),"&limit=",5),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,l=c.map((function(e){var t;return{id:e.id,title:e.title,img:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=e.category,a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){j(t).then(o)}),[t]),r.a.createElement(n.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,{md:"12",className:"content-category animate__animated animate__fadeIn"},r.a.createElement("h3",null,t),r.a.createElement(f.a,null,l&&l.map((function(e,t){return r.a.createElement(v,{key:t,gif:e})})))))))},w=function(){var e=Object(n.useState)(["One punch"]),t=Object(m.a)(e,2),a=t[0],c=t[1];return r.a.createElement(n.Fragment,null,r.a.createElement(E,{onChangeCategory:function(e){c([e].concat(Object(u.a)(a)))}}),r.a.createElement("ol",{className:"mt-3"},a.map((function(e,t){return r.a.createElement(k,{key:e,category:e})}))))};var C=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(o.a,{bg:"dark",className:"p-3"},r.a.createElement(o.a.Brand,{href:"#home",className:"text-light"},"Brand link")),r.a.createElement(i.a,{className:"mt-4"},r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.ba8131b6.chunk.js.map