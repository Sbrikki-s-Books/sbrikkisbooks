(this.webpackJsonpsbrikkisbooks_official_website=this.webpackJsonpsbrikkisbooks_official_website||[]).push([[0],[,,,,function(e,t,n){e.exports={navBar:"navBar_navBar__3w8sZ",logo:"navBar_logo__1WSxW",navigationDesktop:"navBar_navigationDesktop__3N9JK",navigationMobile:"navBar_navigationMobile__3RJAc",hamburger:"navBar_hamburger__qyanT",navBarDesktop:"navBar_navBarDesktop__3llAV"}},,function(e,t,n){e.exports={kingHero:"kingHero_kingHero__13edf",players:"kingHero_players__2UOCe",countPlayers:"kingHero_countPlayers__1Q2AI","slide-left":"kingHero_slide-left__KVer5"}},function(e,t,n){e.exports={navDesktop:"navigation_navDesktop__3OErR",navMobile:"navigation_navMobile__N_jzb",rotateMenu:"navigation_rotateMenu__2pzhN"}},,function(e,t,n){e.exports={logo:"logo_logo__KB9YB",pop:"logo_pop__1WyRC"}},function(e,t,n){e.exports={item:"navItem_item__2C0zg",hov:"navItem_hov__3iSkT"}},function(e,t,n){e.exports={hamburger:"hamburger_hamburger__89CFo",pop:"hamburger_pop___H6uc"}},function(e,t,n){e.exports={cross:"cross_cross__1Zve4"}},,,,function(e,t,n){e.exports={gif:"bookAnimation_gif__MxLku",fadeInAndPop:"bookAnimation_fadeInAndPop__3f1R7"}},,function(e,t,n){e.exports={text:"text_text__39Fn5","slide-right":"text_slide-right__3Jd4a"}},function(e,t,n){e.exports={hero:"hero_hero__1924p"}},function(e,t,n){},function(e,t,n){e.exports={separator:"separator_separator__2U1O-"}},,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),c=n(8),s=n.n(c),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),o(e),c(e),s(e)}))},a=n(3),l=(n(26),n(4)),j=n.p+"static/media/logo.72546d34.svg",b=n(9),u=n(0),d=function(e){return Object(u.jsx)("img",{src:j,alt:"Logo",className:b.logo})},x=n(10),v=function(e){return Object(u.jsx)("button",{className:x.item,onClick:e.onClick,children:e.text})},_=n(7),g=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:_.navDesktop,children:[Object(u.jsx)(v,{text:"Home",onClick:e.viewHero}),Object(u.jsx)(v,{text:"King",onClick:e.viewKing})]}),Object(u.jsxs)("div",{className:_.navMobile,children:[Object(u.jsx)(v,{text:"Home",onClick:e.viewHero}),Object(u.jsx)(v,{text:"King",onClick:e.viewKing})]})]})},O=n(11),p=n.p+"static/media/hamburger.d46ad84e.svg";var f=function(e){return Object(u.jsx)("img",{src:p,className:O.hamburger,alt:"Open",onClick:e.onclick})},h=n.p+"static/media/cross.7714b4bb.svg",k=n(12);var m=function(e){return Object(u.jsx)("img",{src:h,alt:"Close",className:k.cross,onClick:e.onclick})},w=function(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),o=n[0],c=n[1];Object(i.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;0===t||e>t?document.getElementById("navBar").style.top="0":o||(document.getElementById("navBar").style.top="-80px"),e=t}}));var s=function(){c(!1)};return Object(u.jsxs)("div",{className:l.navBar,id:"navBar",children:[Object(u.jsx)("div",{className:l.logo,children:Object(u.jsx)(d,{})}),Object(u.jsx)("div",{className:l.navigationDesktop,children:Object(u.jsx)(g,{viewHero:e.viewHero,viewKing:e.viewKing})}),o?Object(u.jsx)("div",{className:l.navigationMobile,children:Object(u.jsx)(g,{viewHero:function(){s(),e.viewHero()},viewKing:function(){s(),e.viewKing()}})}):null,Object(u.jsx)("div",{className:l.hamburger,children:o?Object(u.jsx)(m,{onclick:s}):Object(u.jsx)(f,{onclick:function(){c(!0)}})})]})},B=n(13),N=function(e){return Object(u.jsxs)(B.a,{children:[Object(u.jsx)("title",{children:e.title}),Object(u.jsx)("meta",{name:"description",content:e.description}),Object(u.jsx)("meta",{name:"keywords",content:e.keywords}),Object(u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]})},y=n.p+"static/media/book-paging.c80b5674.gif",C=n(16);var H=function(){return Object(u.jsx)("img",{src:y,alt:"Reading...",className:C.gif})},S=n(17),K=n.n(S),M=function(){return Object(u.jsx)(K.a,{options:{strings:["We read...","We drink...","We vaccinate ourselves...","We have fun!"],autoStart:!0,loop:!0,deleteSpeed:50}})},D=n(18);var I=function(){return Object(u.jsxs)("div",{className:D.text,children:[Object(u.jsx)("h1",{children:"Welcome to Sbrikki's Books"}),Object(u.jsx)("h2",{children:"Join us in this Book Club for nights full of reading"}),Object(u.jsx)("h2",{children:Object(u.jsx)(M,{})})]})},P=n(19),A=function(){return Object(u.jsxs)("div",{className:P.hero,id:"/",children:[Object(u.jsx)(I,{}),Object(u.jsx)(H,{})]})},F=n(6),W=n(20);var J=function(e){var t;for(t=0;t<e.numPlayers;t++)return Object(u.jsx)("div",{className:W.list,children:Object(u.jsx)("input",{type:"input",placeholder:"Name"})})},R=function(){var e=Object(i.useState)(5),t=Object(a.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)(!1),s=Object(a.a)(c,2),r=s[0],l=s[1];return Object(u.jsxs)("div",{className:F.kingHero,id:"/king",children:[Object(u.jsx)("h1",{children:"Let's play King"}),Object(u.jsxs)("div",{className:F.players,children:[Object(u.jsx)("h2",{children:"How many players?"}),Object(u.jsxs)("div",{className:F.countPlayers,children:[Object(u.jsx)("button",{onClick:function(){n>0&&o(n-1),n<=0&&alert("Mbare ocaca menu un cristiano non si po fari")},children:Object(u.jsx)("p",{children:"-"})}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("button",{onClick:function(){n<10&&o(n+1),n>=10&&alert("Mbare quantu spacchiu siti")},children:Object(u.jsx)("p",{children:"+"})})]})]}),Object(u.jsx)("button",{onClick:function(){return l(!0)},children:Object(u.jsx)("h3",{children:"START!"})}),r?Object(u.jsx)(J,{numPlayers:n}):null]})},T=n(21),E=function(){return Object(u.jsx)("div",{className:T.separator,children:Object(u.jsx)("p",{})})},L=function(){var e=Object(i.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)(!1),s=Object(a.a)(c,2),r=s[0],l=s[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N,{title:"Sbrikki's Books",description:"Sbrikki's Books - Book Club",keywords:"sbrikki, books, sbrikkis, book, club, libro"}),Object(u.jsx)(w,{viewHero:function(){o(!0),l(!1)},viewKing:function(){o(!1),l(!0)}}),n?Object(u.jsx)(A,{}):null,r?Object(u.jsx)(R,{}):null,Object(u.jsx)(E,{})]})};s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),r(console.log)}],[[32,1,2]]]);
//# sourceMappingURL=main.9f527e24.chunk.js.map