(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3333:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),i=t(6265),o=(t(2702),function(){setTimeout((function(){document.querySelectorAll("section").forEach((function(e){new IntersectionObserver((function(n){!0===n[0].isIntersecting&&e.classList.add("in-viewport")}),{threshold:[.2]}).observe(e)}))}),1e3)}),c=function(){setTimeout((function(){document.querySelector("#form-block").innerHTML='<form id="form">\n        <div class="field">\n          <label for="name">Your Name</label>\n          <input type="text" name="name" id="name" required>\n        </div>\n        <div class="columns-2">\n          <div class="field">\n            <label for="email">Your Email</label>\n            <input type="email" name="email" id="email" required>\n          </div>\n          <div class="field">\n            <label for="phone">Your Phone</label>\n            <input type="tel" name="phone" id="phone" required>\n          </div>\n        </div>\n        <div class="field">\n          <label for="message">Message</label>\n          <textarea name="message" id="message" required><textarea/>\n        </div>\n      \n        <input type="submit" id="button" value="SEND" >\n      </form>\n      \n      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"><\/script>\n      <script type="text/javascript">\n        emailjs.init(\'user_FJXSeY8MrVjkBqdwgty5z\')\n      <\/script>';var e=document.getElementById("button");document.getElementById("form").addEventListener("submit",(function(n){n.preventDefault(),e.value="Sending...";emailjs.sendForm("default_service","template_30f9zce",this).then((function(){e.value="Send Email",alert("Sent!")}),(function(n){e.value="Send Email",alert(JSON.stringify(n))}))})),document.querySelectorAll(".getintouch").forEach((function(e){e.onclick=function(){document.querySelector("#form-block").classList.add("opened")}}))}),1e3)};function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,a({},t)),o(),c()]})}},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(3333)}])},2702:function(){},6265:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(4651)}));var t=e.O();_N_E=t}]);