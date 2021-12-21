"use strict";(self.webpackChunksbrikkisbooks=self.webpackChunksbrikkisbooks||[]).push([[31],{643:function(e,t,n){n.d(t,{Z:function(){return a}});var l=n(7294),a=function(){return l.createElement("div",{className:"separator-module--separator--elrPK"})}},7449:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(7294);var a=function(e){var t,n=[],a=(0,l.useState)(!1),r=a[0],u=a[1];for(t=0;t<e.numPlayers;t++)n.push(t);return(0,l.useEffect)((function(){var e=document.getElementById("list").getBoundingClientRect();e.top>=0&&e.left>=0&&e.right<=window.innerWidth&&e.bottom<=window.innerHeight?u(!0):u(!1)}),[]),l.createElement(l.Fragment,null,n.map((function(e){return l.createElement("div",{className:r?"playersList-module--list--tarmp":"playersList-module--hiddenList--ZXnSc",id:"list",key:e},l.createElement("input",{type:"input",id:"player"+e,placeholder:"Name",className:"playersList-module--playerInput--z5a6o"}))})),e.numPlayers>0?l.createElement("button",{onClick:e.onClick},l.createElement("h3",null,"START!")):null)};var r=function(e){return l.createElement(l.Fragment,null,l.createElement("div",{className:"choosePlayers-module--players--hYuqk"},l.createElement("h2",null,"How many players?"),l.createElement("div",{className:"choosePlayers-module--countPlayers--o3xT5"},l.createElement("button",{onClick:e.decreasePlayers},l.createElement("p",null,"-")),l.createElement("p",null,e.numPlayers),l.createElement("button",{onClick:e.increasePlayers},l.createElement("p",null,"+")))),l.createElement(a,{numPlayers:e.numPlayers,onClick:e.getPlayers}))},u=function(e){var t,n=[],a=(0,l.useState)(0),r=a[0],u=a[1];for(t=1;t<=e.rounds;t++)n.push(t);var c=function(e,t){e?(u(1*r+10+1*document.getElementById(t).value),document.getElementById(t).disabled=!0):(u(1*r-10-1*document.getElementById(t).value),document.getElementById(t).disabled=!1)},o=function(e){for(var t=[],n=0;n<=e;n++)t.push(n);return t};return l.createElement(l.Fragment,null,l.createElement("table",{className:"playerGame-module--playerGame--RY64B"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,l.createElement("p",{className:"playerGame-module--name--Zfxw6"},l.createElement("strong",null,e.name)," (Points: ",l.createElement("strong",null,r),")"))),l.createElement("tr",null,n.map((function(t,n){return l.createElement("td",{className:"playerGame-module--round--V59cS"},l.createElement("h6",null,"Round ",t),l.createElement("div",{className:"playerGame-module--bet--9lgTg"},l.createElement("h5",null,"Bet"),n!==e.currentRound-1||(a="check"+e.name+t,null!=document.getElementById(a)&&document.getElementById(a).checked)?l.createElement("select",{id:"num"+e.name+t,placeholder:"0",disabled:!0},o(t).map((function(e){return l.createElement("option",{key:e,value:e}," ",e," ")}))):l.createElement("select",{id:"num"+e.name+t,placeholder:"0"},o(t).map((function(e){return l.createElement("option",{key:e,value:e}," ",e," ")})))),l.createElement("div",{className:"playerGame-module--win--DAnBb"},l.createElement("h5",null,"Won?"),n===e.currentRound-1?l.createElement("input",{type:"checkbox",id:"check"+e.name+t,onChange:function(n){return c(n.target.checked,"num"+e.name+t)}}):l.createElement("input",{type:"checkbox",id:"check"+e.name+t,onChange:function(n){return c(n.target.checked,"num"+e.name+t)},disabled:!0})));var a}))))))},c=function(e){return l.createElement("form",null,e.players.map((function(t,n){return l.createElement("div",{key:t.key,id:"table"+n},l.createElement(u,{name:t.name,rounds:e.rounds,currentRound:e.currentRound}))})))},o=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1],a=(0,l.useState)(5),u=a[0],o=a[1],m=(0,l.useState)([]),s=m[0],i=m[1],d=(0,l.useState)(0),E=d[0],p=d[1],y=(0,l.useState)(0),g=y[0],f=y[1],k=(0,l.useState)(1),h=k[0],v=k[1],b=[];return l.createElement("div",{className:"kingHero-module--kingHero--tqT75",id:"/king"},l.createElement("h1",null,"Let's play King"),t?null:l.createElement(r,{decreasePlayers:function(){u>0&&o(u-1),u<=0&&alert("Mbare ocaca menu un cristiano nun si po fari")},increasePlayers:function(){u<10&&o(u+1),u>=10&&alert("Mbare quantu spacchiu siti")},numPlayers:u,getPlayers:function(){for(var e=!0,t=0;t<u;t++){""===document.getElementById("player"+t).value&&(e=!1)}if(e){for(var l=0;l<u;l++){var a=document.getElementById("player"+l);b.push({id:l,key:l,name:a.value})}i(b),n(!0),p(parseInt(40/u)),f(40%u)}}}),E>0?l.createElement("h3",null,"We are going to play ",E," ",1===E?"round":"rounds",g>0?" and you have to remove "+g+" "+(1===g?"card":"cards")+" from the deck":null):l.createElement("h3",null,"Insert names to start"),t?l.createElement(l.Fragment,null,l.createElement("div",{className:"kingHero-module--play--so5EE"},l.createElement(c,{players:s,rounds:E,currentRound:h})),l.createElement("div",{className:"kingHero-module--changeRound--8SGxt"},h>1?l.createElement("button",{onClick:function(){v(h-1)}},"<-"):l.createElement("button",{disabled:!0},"<-"),l.createElement("p",{className:"kingHero-module--roundText--AaZw3"},"Round ",h),h<E?l.createElement("button",{onClick:function(){v(h+1)}},"->"):l.createElement("button",{disabled:!0},"->"))):null)},m=n(643),s=n(463),i=n(6811),d=function(){return(0,l.useEffect)((function(){return window.addEventListener("beforeunload",(function(e){e.preventDefault(),e.returnValue=""})),window.addEventListener("beforeunload",(function(e){delete e.returnValue}))}),[]),l.createElement(s.Z,{isBlocking:true},l.createElement(i.Z,{title:"King",description:"Let's play king!"}),l.createElement("div",{className:"king-module--kingPage--Yl-xU"},l.createElement("button",{className:"king-module--buttonBlocked--Gi28P"},"Click to allow exit"),l.createElement("p",null,l.createElement("strong",null,"King")," is a very good ",l.createElement("strong",null,"card game")," mbare.",l.createElement("br",null),"In this section you ",l.createElement("strong",null,"cannot")," play, it's a"," ",l.createElement("strong",null,"scorer")),l.createElement(o,null),l.createElement(m.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-king-jsx-03a3c4c6e7104d5518d4.js.map