!function(o){function e(t){if(n[t])return n[t].exports;var r=n[t]={exports:{},id:t,loaded:!1};return o[t].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=o,e.c=n,e.p="",e(0)}([function(o,e){"use strict";var n=document.querySelector("#login");window.handlerError=function(o){o.error?alert(o.msg):(window.localStorage.pj=location.query.id,window.localStorage.token=o.token,window.localStorage.theme=o.theme,window.location.href="dashboard.html")},n.addEventListener("load",function(){n.contentWindow.postMessage(JSON.stringify({type:"INIT",data:window.config.services}),"*")}),n.src=window.config.plugins.login.link+"?id="+location.query.id+"&theme="+(window.location.query.theme||window.config.theme)+"&output=embed"}]);