(this.webpackJsonpsbrikkisbooks_official_website=this.webpackJsonpsbrikkisbooks_official_website||[]).push([[0],[,,,function(e,t,n){e.exports={navBar:"navBar_navBar__3w8sZ",logo:"navBar_logo__1WSxW",navigationDesktop:"navBar_navigationDesktop__3N9JK",navigationMobile:"navBar_navigationMobile__3RJAc",hamburger:"navBar_hamburger__qyanT",navBarDesktop:"navBar_navBarDesktop__3llAV"}},,,function(e,t,n){e.exports={kingHero:"kingHero_kingHero__13edf",players:"kingHero_players__2UOCe",countPlayers:"kingHero_countPlayers__1Q2AI"}},function(e,t,n){e.exports={navDesktop:"navigation_navDesktop__3OErR",navMobile:"navigation_navMobile__N_jzb",rotateMenu:"navigation_rotateMenu__2pzhN"}},,function(e,t,n){e.exports={logo:"logo_logo__KB9YB",pop:"logo_pop__1WyRC"}},function(e,t,n){e.exports={item:"navItem_item__2C0zg",hov:"navItem_hov__3iSkT"}},function(e,t,n){e.exports={hamburger:"hamburger_hamburger__89CFo",pop:"hamburger_pop___H6uc"}},function(e,t,n){e.exports={cross:"cross_cross__1Zve4"}},,,,function(e,t,n){e.exports={gif:"bookAnimation_gif__MxLku",fadeInAndPop:"bookAnimation_fadeInAndPop__3f1R7"}},,function(e,t,n){e.exports={text:"text_text__39Fn5","slide-right":"text_slide-right__3Jd4a"}},function(e,t,n){e.exports={hero:"hero_hero__1924p"}},function(e,t,n){e.exports={separator:"separator_separator__2U1O-"}},,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),o=n(8),c=n.n(o),a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),o(e),c(e)}))},r=(n(25),n(5)),l=n(3),j=n.p+"static/media/logo.72546d34.svg",b=n(9),u=n(0),d=function(e){return Object(u.jsx)("img",{src:j,alt:"Logo",className:b.logo})},_=n(10),x=function(e){return Object(u.jsx)("a",{className:_.item,href:e.link,children:e.text})},g=n(7),p=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:g.navDesktop,children:[Object(u.jsx)(x,{text:"Home",link:"/"}),Object(u.jsx)(x,{text:"King",link:"/king"})]}),Object(u.jsxs)("div",{className:g.navMobile,children:[Object(u.jsx)(x,{text:"Home",link:"/"}),Object(u.jsx)(x,{text:"King",link:"/king"})]})]})},O=n(11),v=n.p+"static/media/hamburger.d46ad84e.svg";var h=function(e){return Object(u.jsx)("img",{src:v,className:O.hamburger,alt:"Open",onClick:e.onclick})},k=n.p+"static/media/cross.7714b4bb.svg",m=n(12);var f=function(e){return Object(u.jsx)("img",{src:k,alt:"Close",className:m.cross,onClick:e.onclick})},B=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1];Object(i.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;e>t?document.getElementById("navBar").style.top="0":n||(document.getElementById("navBar").style.top="-80px"),e=t}}));return Object(u.jsxs)("div",{className:l.navBar,id:"navBar",children:[Object(u.jsx)("div",{className:l.logo,children:Object(u.jsx)(d,{})}),Object(u.jsx)("div",{className:l.navigationDesktop,children:Object(u.jsx)(p,{})}),n?Object(u.jsx)("div",{className:l.navigationMobile,children:Object(u.jsx)(p,{})}):null,Object(u.jsx)("div",{className:l.hamburger,children:n?Object(u.jsx)(f,{onclick:function(){s(!1)}}):Object(u.jsx)(h,{onclick:function(){s(!0)}})})]})},N=n(13),y=function(e){return Object(u.jsxs)(N.a,{children:[Object(u.jsx)("title",{children:e.title}),Object(u.jsx)("meta",{name:"description",content:e.description}),Object(u.jsx)("meta",{name:"keywords",content:e.keywords}),Object(u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]})},w=n.p+"static/media/book-paging.c80b5674.gif",C=n(16);var M=function(){return Object(u.jsx)("img",{src:w,alt:"Reading...",className:C.gif})},S=n(17),H=n.n(S),D=function(){return Object(u.jsx)(H.a,{options:{strings:["We read...","We drink...","We vaccinate ourselves...","We have fun!"],autoStart:!0,loop:!0,deleteSpeed:50}})},I=n(18);var F=function(){return Object(u.jsxs)("div",{className:I.text,children:[Object(u.jsx)("h1",{children:"Welcome to Sbrikki's Books"}),Object(u.jsx)("h2",{children:"Join us in this Book Club for nights full of reading"}),Object(u.jsx)("h2",{children:Object(u.jsx)(D,{})})]})},W=n(19),A=function(){return Object(u.jsxs)("div",{className:W.hero,id:"/",children:[Object(u.jsx)(F,{}),Object(u.jsx)(M,{})]})},P=n(6),J=function(){var e=Object(i.useState)(5),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(u.jsxs)("div",{className:P.kingHero,id:"/king",children:[Object(u.jsx)("h1",{children:"Mbare let's play King"}),Object(u.jsxs)("div",{className:P.players,children:[Object(u.jsx)("h2",{children:"How many players?"}),Object(u.jsxs)("div",{className:P.countPlayers,children:[Object(u.jsx)("button",{onClick:function(){n>0&&s(n-1),n<=0&&alert("Mbare ocaca menu un cristiano non si po fari")},children:Object(u.jsx)("p",{children:"-"})}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("button",{onClick:function(){n<10&&s(n+1),n>=10&&alert("Mbare quantu spacchiu siti")},children:Object(u.jsx)("p",{children:"+"})})]})]})]})},E=n(20),K=function(){return Object(u.jsx)("div",{className:E.separator,children:Object(u.jsx)("p",{})})},R=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y,{title:"Sbrikki's Books",description:"Sbrikki's Books - Book Club",keywords:"sbrikki, books, sbrikkis, book, club, libro"}),Object(u.jsx)(B,{}),Object(u.jsx)(A,{}),Object(u.jsx)(K,{}),Object(u.jsx)(J,{})]})};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),a(console.log)}],[[31,1,2]]]);
//# sourceMappingURL=main.3bc043d1.chunk.js.map