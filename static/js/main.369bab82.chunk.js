(this.webpackJsonpsbrikkisbooks_official_website=this.webpackJsonpsbrikkisbooks_official_website||[]).push([[0],[,,,,function(e,t,n){e.exports={navBar:"navBar_navBar__3w8sZ",logo:"navBar_logo__1WSxW",navigationDesktop:"navBar_navigationDesktop__3N9JK",navigationMobile:"navBar_navigationMobile__3RJAc",hamburger:"navBar_hamburger__qyanT",navBarDesktop:"navBar_navBarDesktop__3llAV"}},,function(e,t,n){e.exports={playerGame:"playerGame_playerGame__29oGi",field:"playerGame_field__2ihky",win:"playerGame_win__YeMob",bet:"playerGame_bet__C_BYH"}},function(e,t,n){e.exports={navDesktop:"navigation_navDesktop__3OErR",navMobile:"navigation_navMobile__N_jzb",rotateMenu:"navigation_rotateMenu__2pzhN"}},function(e,t,n){e.exports={hamburger:"hamburger_hamburger__89CFo",pop:"hamburger_pop___H6uc",flip:"hamburger_flip__1DSLn"}},function(e,t,n){e.exports={kingHero:"kingHero_kingHero__13edf",play:"kingHero_play__3J5kx"}},function(e,t,n){e.exports={list:"playersList_list__2TjKI",pop:"playersList_pop__3d9hK",hiddenList:"playersList_hiddenList__1dR2y"}},function(e,t,n){e.exports={players:"choosePlayers_players__r1Qsb",countPlayers:"choosePlayers_countPlayers__u1Mj_",pop:"choosePlayers_pop__2bzu3"}},,function(e,t,n){e.exports={logo:"logo_logo__KB9YB",pop:"logo_pop__1WyRC"}},function(e,t,n){e.exports={item:"navItem_item__2C0zg",hov:"navItem_hov__3iSkT"}},function(e,t,n){e.exports={cross:"cross_cross__1Zve4"}},,,,function(e,t,n){e.exports={gif:"bookAnimation_gif__MxLku",fadeInAndPop:"bookAnimation_fadeInAndPop__3f1R7"}},,function(e,t,n){e.exports={text:"text_text__39Fn5",pop:"text_pop__30HZr"}},function(e,t,n){e.exports={hero:"hero_hero__1924p"}},function(e,t,n){e.exports={separator:"separator_separator__2U1O-"}},,,,,function(e,t,n){},,,,,,function(e,t,n){e.exports={fadeIn:"spotify_fadeIn__3Pag_"}},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(12),r=n.n(s),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),s(e),r(e)}))},a=n(3),l=(n(28),n(4)),j=n.p+"static/media/logo.72546d34.svg",b=n(13),u=n(0),d=function(e){return Object(u.jsx)("img",{src:j,alt:"Logo",className:b.logo})},p=n(14),x=function(e){return Object(u.jsx)("button",{className:p.item,onClick:e.onClick,children:e.text})},h=n(7),O=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:h.navDesktop,children:[Object(u.jsx)(x,{text:"Home",onClick:e.viewHero}),Object(u.jsx)(x,{text:"Spotify",onClick:e.viewSpotify}),Object(u.jsx)(x,{text:"King",onClick:e.viewKing})]}),Object(u.jsxs)("div",{className:h.navMobile,children:[Object(u.jsx)(x,{text:"Home",onClick:e.viewHero}),Object(u.jsx)(x,{text:"Spotify",onClick:e.viewSpotify}),Object(u.jsx)(x,{text:"King",onClick:e.viewKing})]})]})},_=n(8),m=n.p+"static/media/hamburger.d46ad84e.svg";var f=function(e){return Object(u.jsx)("div",{className:_.flip,children:Object(u.jsx)("img",{src:m,className:_.hamburger,alt:"Open",onClick:e.onclick})})},v=n.p+"static/media/cross.7714b4bb.svg",g=n(15);var y=function(e){return Object(u.jsx)("img",{src:v,alt:"Close",className:g.cross,onClick:e.onclick})},k=function(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),c=n[0],s=n[1];Object(i.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;0===t||e>t?document.getElementById("navBar").style.top="0":c||(document.getElementById("navBar").style.top="-80px"),e=t}}));var r=function(){s(!1)};return Object(u.jsxs)("div",{className:l.navBar,id:"navBar",children:[Object(u.jsx)("div",{className:l.logo,children:Object(u.jsx)(d,{})}),Object(u.jsx)("div",{className:l.navigationDesktop,children:Object(u.jsx)(O,{viewHero:e.viewHero,viewKing:e.viewKing,viewSpotify:e.viewSpotify})}),c?Object(u.jsx)("div",{className:l.navigationMobile,children:Object(u.jsx)(O,{viewHero:function(){r(),e.viewHero()},viewKing:function(){r(),e.viewKing()},viewSpotify:function(){r(),e.viewSpotify()}})}):null,Object(u.jsx)("div",{className:l.hamburger,children:c?Object(u.jsx)(y,{onclick:r}):Object(u.jsx)(f,{onclick:function(){s(!0)}})})]})},w=n(16),B=function(e){return Object(u.jsxs)(w.a,{children:[Object(u.jsx)("title",{children:e.title}),Object(u.jsx)("meta",{name:"description",content:e.description}),Object(u.jsx)("meta",{name:"keywords",content:e.keywords}),Object(u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]})},S=n.p+"static/media/book-paging.c80b5674.gif",N=n(19);var C=function(){return Object(u.jsx)("img",{src:S,alt:"Reading...",className:N.gif})},P=n(20),H=n.n(P),I=function(){return Object(u.jsx)(H.a,{options:{strings:["We read...","We drink...","We vaccinate ourselves...","We have fun!"],autoStart:!0,loop:!0,deleteSpeed:50}})},K=n(21);var M=function(){return Object(u.jsxs)("div",{className:K.text,children:[Object(u.jsx)("h1",{children:"Welcome to Sbrikki's Books"}),Object(u.jsx)("h2",{children:"Join us in this Book Club for nights full of reading"}),Object(u.jsx)("h2",{children:Object(u.jsx)(I,{})})]})},L=n(22),W=function(){return Object(u.jsxs)("div",{className:L.hero,id:"/",children:[Object(u.jsx)(M,{}),Object(u.jsx)(C,{})]})},F=n(9),D=n(10);var R=function(e){var t,n=[],c=Object(i.useState)(!1),s=Object(a.a)(c,2),r=s[0],o=s[1];for(t=0;t<e.numPlayers;t++)n.push(t);return Object(i.useEffect)((function(){var e=document.getElementById("list").getBoundingClientRect();e.top>=0&&e.left>=0&&e.right<=window.innerWidth&&e.bottom<=window.innerHeight?o(!0):o(!1)}),[]),Object(u.jsxs)(u.Fragment,{children:[n.map((function(e){return Object(u.jsx)("div",{className:r?D.list:D.hiddenList,id:"list",children:Object(u.jsx)("input",{type:"input",id:"player"+e,placeholder:"Name"})},e)})),e.numPlayers>0?Object(u.jsx)("button",{onClick:e.onClick,children:Object(u.jsx)("h3",{children:"START!"})}):null]})},E=n(11);var G=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:E.players,children:[Object(u.jsx)("h2",{children:"How many players?"}),Object(u.jsxs)("div",{className:E.countPlayers,children:[Object(u.jsx)("button",{onClick:e.decreasePlayers,children:Object(u.jsx)("p",{children:"-"})}),Object(u.jsx)("p",{children:e.numPlayers}),Object(u.jsx)("button",{onClick:e.increasePlayers,children:Object(u.jsx)("p",{children:"+"})})]})]}),Object(u.jsx)(R,{numPlayers:e.numPlayers,onClick:e.getPlayers})]})},T=n(6),A=function(e){var t,n=[];for(t=1;t<e.rounds;t++)n.push(t);return Object(u.jsx)("table",{className:T.playerGame,children:Object(u.jsxs)("tbody",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("tr",{children:n.map((function(t){return Object(u.jsxs)("td",{children:[Object(u.jsx)("td",{children:Object(u.jsxs)("h6",{children:["Round ",t]})}),Object(u.jsxs)("div",{className:T.bet,children:[Object(u.jsx)("h5",{children:"Bet"}),Object(u.jsx)("input",{type:"number",id:"num"+e.name+t,min:"0",max:t,step:"1",placeholder:"0"})]}),Object(u.jsxs)("div",{className:T.win,children:[Object(u.jsx)("h5",{children:"Win?"}),Object(u.jsx)("input",{type:"checkbox",id:"check"+e.name+t,onChange:void e.name})]})]})}))})]})})},Y=function(e){return Object(u.jsx)(u.Fragment,{children:e.players.map((function(t){return Object(u.jsx)("div",{children:Object(u.jsx)(A,{name:t.name,rounds:e.rounds})},t.key)}))})},J=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(5),r=Object(a.a)(s,2),o=r[0],l=r[1],j=Object(i.useState)([]),b=Object(a.a)(j,2),d=b[0],p=b[1],x=Object(i.useState)(0),h=Object(a.a)(x,2),O=h[0],_=h[1],m=Object(i.useState)(0),f=Object(a.a)(m,2),v=f[0],g=f[1],y=[];return Object(u.jsxs)("div",{className:F.kingHero,id:"/king",children:[Object(u.jsx)("h1",{children:"Let's play King"}),n?null:Object(u.jsx)(G,{decreasePlayers:function(){o>0&&l(o-1),o<=0&&alert("Mbare ocaca menu un cristiano nun si po fari")},increasePlayers:function(){o<10&&l(o+1),o>=10&&alert("Mbare quantu spacchiu siti")},numPlayers:o,getPlayers:function(){for(var e=!0,t=0;t<o;t++){""===document.getElementById("player"+t).value&&(e=!1)}if(e){for(var n=0;n<o;n++){var i=document.getElementById("player"+n);y.push({id:n,key:n,name:i.value})}p(y),c(!0),_(parseInt(40/o)),g(40%o)}}}),v>0?Object(u.jsxs)("h3",{children:["You have to remove ",v," ",1===v?"card":"cards"," from the deck"]}):null,O>0?Object(u.jsxs)("h3",{children:["We are going to play ",O," ",1===O?"round":"rounds"]}):Object(u.jsx)("h3",{children:"Insert names to start"}),n?Object(u.jsx)("div",{className:F.play,children:Object(u.jsx)(Y,{players:d,rounds:O})}):null]})},z=n(23),Z=function(){return Object(u.jsx)("div",{className:z.separator,children:Object(u.jsx)("p",{})})};n(34);var q=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/3XWNoTPdXdIRapbK86Y11l",width:"100%",height:"380",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media",title:"Spotify"})})},X=function(){var e=Object(i.useState)(!0),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(i.useState)(!1),r=Object(a.a)(s,2),o=r[0],l=r[1],j=Object(i.useState)(!1),b=Object(a.a)(j,2),d=b[0],p=b[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(B,{title:"Sbrikki's Books",description:"Sbrikki's Books - Book Club",keywords:"sbrikki, books, sbrikkis, book, club, libro"}),Object(u.jsx)(k,{viewHero:function(){c(!0),l(!1),p(!1)},viewKing:function(){c(!1),l(!0),p(!1)},viewSpotify:function(){c(!1),l(!1),p(!0)}}),n?Object(u.jsx)(W,{}):null,o?Object(u.jsx)(J,{}):null,d?Object(u.jsx)(q,{}):null,Object(u.jsx)(Z,{})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root")),o(console.log)}],[[35,1,2]]]);
//# sourceMappingURL=main.369bab82.chunk.js.map