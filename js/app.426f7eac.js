(function(e){function t(t){for(var n,a,c=t[0],l=t[1],i=t[2],u=0,b=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&b.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/password-generator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0256":function(e,t,r){"use strict";r("9e1b")},"552d":function(e,t,r){"use strict";r("ca16")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("7a23");function s(e,t,r,s,o,a){const c=Object(n["h"])("PasswordGenerator");return Object(n["g"])(),Object(n["b"])(c)}const o={class:"container"},a=Object(n["d"])("h1",null,"Password Generator",-1),c={class:"input-field"},l=Object(n["d"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[Object(n["d"])("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"})],-1),i=[l],d={class:"generator"},u={class:"field"},b=Object(n["d"])("p",null,"Character Length",-1),h={class:"number"},p={class:"slider-container"},g=Object(n["e"])('<div class="checkbox-area"><label class="checkbox-field"><input id="upper" type="checkbox" name="checkbox"> Include Uppercase Letters </label><label class="checkbox-field"><input id="lower" type="checkbox" name="checkbox"> Include Lowercase Letters </label><label class="checkbox-field"><input id="numbers" type="checkbox" name="checkbox"> Include Numbers </label><label class="checkbox-field"><input id="symbols" type="checkbox" name="checkbox"> Include Symbols </label></div>',1),f={class:"field strength-state"},w=Object(n["d"])("p",null,"strength",-1),m={class:"chart"},v={class:"password-power"},y=Object(n["e"])('<div class="pines"><div class="pine neutral"></div><div class="pine neutral"></div><div class="pine neutral"></div><div class="pine neutral"></div></div>',1),j=Object(n["f"])(" GENERATE "),k=Object(n["d"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"3",stroke:"currentColor",class:"w-6 h-6"},[Object(n["d"])("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})],-1),O=[j,k];function x(e,t,r,s,l,j){return Object(n["g"])(),Object(n["c"])("div",o,[a,Object(n["d"])("div",c,[Object(n["l"])(Object(n["d"])("textarea",{class:"psswd","onUpdate:modelValue":t[0]||(t[0]=e=>l.password=e),placeholder:"P4$5W0rD!"},null,512),[[n["j"],l.password]]),Object(n["d"])("button",{onClick:t[1]||(t[1]=(...e)=>j.copyPsswd&&j.copyPsswd(...e)),class:"copy-btn"},i)]),Object(n["d"])("div",d,[Object(n["d"])("div",u,[b,Object(n["d"])("p",h,Object(n["i"])(l.length),1)]),Object(n["d"])("div",p,[Object(n["l"])(Object(n["d"])("input",{id:"sliderInput",class:"slider",type:"range",min:"0",max:"50","onUpdate:modelValue":t[2]||(t[2]=e=>l.length=e)},null,512),[[n["j"],l.length]])]),g,Object(n["d"])("div",f,[w,Object(n["d"])("div",m,[Object(n["d"])("p",v,Object(n["i"])(l.power),1),y])]),Object(n["d"])("button",{onClick:t[3]||(t[3]=(...e)=>j.generatePassword&&j.generatePassword(...e)),class:"generate-password-btn"},O),Object(n["l"])(Object(n["d"])("p",{class:"error"},Object(n["i"])(l.errorMessage),513),[[n["k"],l.error]])])])}var P=r("e465"),M={data(){return{password:"",length:0,power:"",error:!1,errorMessage:""}},methods:{copyPsswd(){try{navigator.clipboard.writeText(this.password),alert("Copied succesfully")}catch(e){console.error(e)}},sliderRangeColor(){const e=document.getElementById("sliderInput"),t=e.min,r=e.max,n=e.value;e.style.background=`linear-gradient(to right, rgba(164, 255, 175, 1) 0%, rgba(164, 255, 175, 1) ${(n-t)/(r-t)*100}%, rgba(19, 18, 24, 1) ${(n-t)/(r-t)*100}%, rgba(19, 18, 24, 1) 100%)`,e.oninput=function(){this.style.background=`linear-gradient(to right, rgba(164, 255, 175, 1) 0%, rgba(164, 255, 175, 1) ${(this.value-this.min)/(this.max-this.min)*100}%, rgba(19, 18, 24, 1) ${(this.value-this.min)/(this.max-this.min)*100}%, rgba(19, 18, 24, 1) 100%)`}},createCharacters(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t="abcdefghijklmnopqrstuvwxyz",r="0123456789",n="~!@#$%^&*(){}[],./?";let s=[],o=document.getElementById("upper"),a=document.getElementById("lower"),c=document.getElementById("numbers"),l=document.getElementById("symbols");return o.checked&&(s+=e),a.checked&&(s+=t),c.checked&&(s+=r),l.checked&&(s+=n),s},shuffle(e){return e.split("").sort((function(){return.5-Math.random()})).join("")},Password(e){var t=e.length;let r="";for(var n=0;n<this.length;n++)r+=e.charAt(Math.floor(Math.random()*t));return r},showPasswordStrength(e){let t=[{id:0,value:"Too weak",minDiversity:0,minLength:0},{id:1,value:"Weak",minDiversity:2,minLength:6},{id:2,value:"Medium",minDiversity:3,minLength:10},{id:3,value:"Strong",minDiversity:4,minLength:16}],r=Object(P["passwordStrength"])(e,t).value,n=document.querySelectorAll(".pine");switch(n.forEach(e=>{e.style.background="transparent",e.style.border="2px solid rgb(229, 228, 233)"}),r){case"Too weak":this.power=r;for(let e=0;e<1;e++)n[e].style.background="rgb(74, 8, 8)",n[e].style.border="none";break;case"Weak":this.power=r;for(let e=0;e<2;e++)n[e].style.background="rgb(207, 74, 26)",n[e].style.border="none";break;case"Medium":this.power=r;for(let e=0;e<3;e++)n[e].style.background="rgb(248, 204, 101)",n[e].style.border="none";break;case"Strong":this.power=r;for(let e=0;e<4;e++)n[e].style.background="rgb(74, 140, 56)",n[e].style.border="none";break}},generatePassword(){let e=this.createCharacters();if(0===e.length)this.error=!0,this.errorMessage="At least one checkbox is required!",setTimeout(()=>{this.error=!1,this.errorMessage=""},4e3);else if(0===this.length)this.error=!0,this.errorMessage="Select length of a password",setTimeout(()=>{this.error=!1,this.errorMessage=""},4e3);else{console.log("unshuffled",e);let t=this.shuffle(e);console.log("shuffled",t);let r=this.Password(t);console.log("final password to show",r),this.showPasswordStrength(r),this.password=r}}},mounted(){this.sliderRangeColor()}},S=(r("552d"),r("6b0d")),I=r.n(S);const C=I()(M,[["render",x]]);var E=C,L={name:"App",components:{PasswordGenerator:E}};r("0256");const T=I()(L,[["render",s]]);var B=T;Object(n["a"])(B).mount("#app")},"9e1b":function(e,t,r){},ca16:function(e,t,r){}});
//# sourceMappingURL=app.426f7eac.js.map