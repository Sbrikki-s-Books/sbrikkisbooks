(this.webpackJsonpsbrikkisbooks_official_website=this.webpackJsonpsbrikkisbooks_official_website||[]).push([[0],[,,,,,,function(e,t,n){e.exports={navBar:"navBar_navBar__3w8sZ",logo:"navBar_logo__1WSxW",navigationDesktop:"navBar_navigationDesktop__3N9JK",navigationMobile:"navBar_navigationMobile__3RJAc",hamburger:"navBar_hamburger__qyanT",navBarDesktop:"navBar_navBarDesktop__3llAV"}},function(e,t,n){e.exports={playerGame:"playerGame_playerGame__29oGi",field:"playerGame_field__2ihky",tot:"playerGame_tot__2yIRo",win:"playerGame_win__YeMob",bet:"playerGame_bet__C_BYH",name:"playerGame_name__2Hcn6"}},,,,function(e,t,n){e.exports={navDesktop:"navigation_navDesktop__3OErR",navMobile:"navigation_navMobile__N_jzb",rotateMenu:"navigation_rotateMenu__2pzhN"}},function(e,t,n){e.exports={hamburger:"hamburger_hamburger__89CFo",pop:"hamburger_pop___H6uc",flip:"hamburger_flip__1DSLn"}},function(e,t,n){e.exports={kingHero:"kingHero_kingHero__27ymq",play:"kingHero_play__UuK7Y"}},function(e,t,n){e.exports={list:"playersList_list__2TjKI",pop:"playersList_pop__3d9hK",hiddenList:"playersList_hiddenList__1dR2y"}},function(e,t,n){e.exports={players:"choosePlayers_players__r1Qsb",countPlayers:"choosePlayers_countPlayers__u1Mj_",pop:"choosePlayers_pop__2bzu3"}},,function(e,t,n){e.exports={gif:"bookAnimation_gif__MxLku",fadeInAndPop:"bookAnimation_fadeInAndPop__3f1R7"}},,function(e,t,n){e.exports={text:"text_text__39Fn5",pop:"text_pop__30HZr"}},function(e,t,n){e.exports={hero:"hero_hero__1924p"}},function(e,t,n){e.exports={separator:"separator_separator__2U1O-"}},function(e,t,n){e.exports={logo:"logo_logo__KB9YB",pop:"logo_pop__1WyRC"}},function(e,t,n){e.exports={item:"navItem_item__2C0zg",hov:"navItem_hov__3iSkT"}},function(e,t,n){e.exports={cross:"cross_cross__1Zve4"}},function(e,t,n){e.exports={tmp:"stats_tmp__3ETgO"}},,,,,,,,function(e,t,n){},,,function(e,t,n){e.exports={fadeIn:"spotify_fadeIn__LJz59"}},,,,function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(16),a=n.n(c),o=(n(33),n.p+"static/media/book-paging.c80b5674.gif"),r=n(17),l=n(0);var j=function(){return Object(l.jsx)("img",{src:o,alt:"Reading...",className:r.gif})},b=n(18),d=n.n(b),u=function(){return Object(l.jsx)(d.a,{options:{strings:["We read...","We drink...","We do stuff...","We have fun!"],autoStart:!0,loop:!0,deleteSpeed:50}})},p=n(19);var h=function(){return Object(l.jsxs)("div",{className:p.text,children:[Object(l.jsx)("h1",{children:"Welcome to Sbrikki's Books"}),Object(l.jsx)("h2",{children:"Join us in this Book Club for nights full of reading"}),Object(l.jsx)("h2",{children:Object(l.jsx)(u,{})})]})},_=n(20),x=function(){return Object(l.jsxs)("div",{className:_.hero,id:"/",children:[Object(l.jsx)(h,{}),Object(l.jsx)(j,{})]})},m=n(21),O=function(){return Object(l.jsx)("div",{className:m.separator,children:Object(l.jsx)("p",{})})},f=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(O,{})]})},k=n(9),g=n(2);n(36);var v=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/3XWNoTPdXdIRapbK86Y11l",width:"100%",height:"380",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:"Spotify"})})},y=n(4),w=n(6),B=n.p+"static/media/logo.72546d34.svg",N=n(22),C=function(e){return Object(l.jsx)("img",{src:B,alt:"Logo",className:N.logo})},P=n(23),S=function(e){return Object(l.jsx)(k.b,{className:P.item,to:e.path,onClick:e.onClick,children:e.text})},I=n(11),E=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:I.navDesktop,children:[Object(l.jsx)(S,{text:"Home",path:"/sbrikkisbooks_official_website/"}),Object(l.jsx)(S,{text:"Spotify",path:"/sbrikkisbooks_official_website/spotify"}),Object(l.jsx)(S,{text:"Stats",path:"/sbrikkisbooks_official_website/stats"}),Object(l.jsx)(S,{text:"King",path:"/sbrikkisbooks_official_website/king"})]}),Object(l.jsxs)("div",{className:I.navMobile,children:[Object(l.jsx)(S,{text:"Home",path:"/sbrikkisbooks_official_website/",onClick:e.onClick}),Object(l.jsx)(S,{text:"Spotify",path:"/sbrikkisbooks_official_website/spotify",onClick:e.onClick}),Object(l.jsx)(S,{text:"Stats",path:"/sbrikkisbooks_official_website/stats",onClick:e.onClick}),Object(l.jsx)(S,{text:"King",path:"/sbrikkisbooks_official_website/king",onClick:e.onClick})]})]})},M=n(12),H=n.p+"static/media/hamburger.d46ad84e.svg";var L=function(e){return Object(l.jsx)("div",{className:M.flip,children:Object(l.jsx)("img",{src:H,className:M.hamburger,alt:"Open",onClick:e.onclick})})},W=n.p+"static/media/cross.7714b4bb.svg",F=n(24);var R=function(e){return Object(l.jsx)("img",{src:W,alt:"Close",className:F.cross,onClick:e.onclick})},D=function(e){var t=Object(s.useState)(!1),n=Object(y.a)(t,2),i=n[0],c=n[1];Object(s.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;0===t||e>t?document.getElementById("navBar").style.top="0":i||(document.getElementById("navBar").style.top="-80px"),e=t}}));var a=function(){c(!1)};return Object(l.jsxs)("div",{className:w.navBar,id:"navBar",children:[Object(l.jsx)("div",{className:w.logo,children:Object(l.jsx)(C,{})}),Object(l.jsx)("div",{className:w.navigationDesktop,children:Object(l.jsx)(E,{})}),i?Object(l.jsx)("div",{className:w.navigationMobile,children:Object(l.jsx)(E,{onClick:a})}):null,Object(l.jsx)("div",{className:w.hamburger,children:i?Object(l.jsx)(R,{onclick:a}):Object(l.jsx)(L,{onclick:function(){c(!0)}})})]})},G=n(13),T=n(14);var K=function(e){var t,n=[],i=Object(s.useState)(!1),c=Object(y.a)(i,2),a=c[0],o=c[1];for(t=0;t<e.numPlayers;t++)n.push(t);return Object(s.useEffect)((function(){var e=document.getElementById("list").getBoundingClientRect();e.top>=0&&e.left>=0&&e.right<=window.innerWidth&&e.bottom<=window.innerHeight?o(!0):o(!1)}),[]),Object(l.jsxs)(l.Fragment,{children:[n.map((function(e){return Object(l.jsx)("div",{className:a?T.list:T.hiddenList,id:"list",children:Object(l.jsx)("input",{type:"input",id:"player"+e,placeholder:"Name"})},e)})),e.numPlayers>0?Object(l.jsx)("button",{onClick:e.onClick,children:Object(l.jsx)("h3",{children:"START!"})}):null]})},Y=n(15);var A=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:Y.players,children:[Object(l.jsx)("h2",{children:"How many players?"}),Object(l.jsxs)("div",{className:Y.countPlayers,children:[Object(l.jsx)("button",{onClick:e.decreasePlayers,children:Object(l.jsx)("p",{children:"-"})}),Object(l.jsx)("p",{children:e.numPlayers}),Object(l.jsx)("button",{onClick:e.increasePlayers,children:Object(l.jsx)("p",{children:"+"})})]})]}),Object(l.jsx)(K,{numPlayers:e.numPlayers,onClick:e.getPlayers})]})},J=n(7),z=function(e){var t,n=[],i=Object(s.useState)(0),c=Object(y.a)(i,2),a=c[0],o=c[1];for(t=1;t<=e.rounds;t++)n.push(t);var r=function(e){for(var t=[],n=0;n<=e;n++)t.push(n);return t};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("table",{className:J.playerGame,children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("p",{className:J.name,children:[Object(l.jsx)("strong",{children:e.name})," (Points: ",Object(l.jsx)("strong",{children:a}),")"]}),Object(l.jsxs)("tr",{children:[n.map((function(t){return Object(l.jsxs)("td",{children:[Object(l.jsx)("td",{children:Object(l.jsxs)("h6",{children:["Round ",t]})}),Object(l.jsxs)("div",{className:J.bet,children:[Object(l.jsx)("h5",{children:"Bet"}),Object(l.jsx)("select",{id:"num"+e.name+t,placeholder:"0",children:r(t).map((function(e){return Object(l.jsxs)("option",{value:e,children:[" ",e," "]},e)}))})]}),Object(l.jsxs)("div",{className:J.win,children:[Object(l.jsx)("h5",{children:"Win?"}),Object(l.jsx)("input",{type:"checkbox",id:"check"+e.name+t,onChange:function(n){return s=n.target.checked,i="num"+e.name+t,void(s?(o(1*a+10+1*document.getElementById(i).value),document.getElementById(i).disabled=!0):(o(1*a-10-1*document.getElementById(i).value),document.getElementById(i).disabled=!1));var s,i}})]})]})})),Object(l.jsxs)("div",{className:J.tot,children:[Object(l.jsx)("h4",{children:"Tot"}),Object(l.jsx)("h4",{children:a})]})]})]})})})},q=function(e){return Object(l.jsx)(l.Fragment,{children:e.players.map((function(t){return Object(l.jsx)("div",{children:Object(l.jsx)(z,{name:t.name,rounds:e.rounds})},t.key)}))})},Z=function(){var e=Object(s.useState)(!1),t=Object(y.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)(5),a=Object(y.a)(c,2),o=a[0],r=a[1],j=Object(s.useState)([]),b=Object(y.a)(j,2),d=b[0],u=b[1],p=Object(s.useState)(0),h=Object(y.a)(p,2),_=h[0],x=h[1],m=Object(s.useState)(0),O=Object(y.a)(m,2),f=O[0],k=O[1],g=[];return Object(l.jsxs)("div",{className:G.kingHero,id:"/king",children:[Object(l.jsx)("h1",{children:"Let's play King"}),n?null:Object(l.jsx)(A,{decreasePlayers:function(){o>0&&r(o-1),o<=0&&alert("Mbare ocaca menu un cristiano nun si po fari")},increasePlayers:function(){o<10&&r(o+1),o>=10&&alert("Mbare quantu spacchiu siti")},numPlayers:o,getPlayers:function(){for(var e=!0,t=0;t<o;t++){""===document.getElementById("player"+t).value&&(e=!1)}if(e){for(var n=0;n<o;n++){var s=document.getElementById("player"+n);g.push({id:n,key:n,name:s.value})}u(g),i(!0),x(parseInt(40/o)),k(40%o)}}}),f>0?Object(l.jsxs)("h3",{children:["You have to remove ",f," ",1===f?"card":"cards"," from the deck"]}):null,_>0?Object(l.jsxs)("h3",{children:["We are going to play ",_," ",1===_?"round":"rounds"]}):Object(l.jsx)("h3",{children:"Insert names to start"}),n?Object(l.jsx)("div",{className:G.play,children:Object(l.jsx)(q,{players:d,rounds:_})}):null]})},U=n(25),X=function(){return Object(l.jsx)("div",{className:U.tmp,children:Object(l.jsx)("h1",{children:"We'll be here soon"})})},Q=n(26),V=function(e){return Object(l.jsxs)(Q.a,{children:[Object(l.jsx)("title",{children:e.title}),Object(l.jsx)("meta",{name:"description",content:e.description}),Object(l.jsx)("meta",{name:"keywords",content:e.keywords}),Object(l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]})},$=function(){return Object(l.jsxs)(k.a,{children:[Object(l.jsx)(V,{title:"Sbrikki's Books",description:"Sbrikki's Books - Book Club",keywords:"sbrikki, books, sbrikkis, book, club, libro"}),Object(l.jsx)(D,{}),Object(l.jsx)("div",{children:Object(l.jsxs)(g.c,{children:[Object(l.jsx)(g.a,{exact:!0,path:"/sbrikkisbooks_official_website",element:Object(l.jsx)(f,{})}),Object(l.jsx)(g.a,{path:"/sbrikkisbooks_official_website/spotify",element:Object(l.jsx)(v,{})}),Object(l.jsx)(g.a,{path:"/sbrikkisbooks_official_website/stats",element:Object(l.jsx)(X,{})}),Object(l.jsx)(g.a,{path:"/sbrikkisbooks_official_website/king",element:Object(l.jsx)(Z,{})})]})})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)($,{})}),document.getElementById("root")),ee(console.log)}],[[40,1,2]]]);
//# sourceMappingURL=main.ccadf980.chunk.js.map