import{_ as b,h as y,o as v,c as x,E as c,F as M,G as C}from"./framework.CUVM_E8k.js";import"./theme.DWHu_bhI.js";var T=Object.defineProperty,j=(t,e,o)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e,o)=>(j(t,typeof e!="symbol"?e+"":e,o),o);const S=t=>{Object.prototype.toString.call(t)!=="[object Object]"&&(t={});const e={list:[],moveTime:4,concatCount:4,colCount:3,onend:null,...t};let o=[];if(e.list.length)for(let n=0;n<e.concatCount;n++)o=o.concat(e.list);return e._list=o,e},w=t=>{const e=t._list;if(!e||!e.length)return;let o="";for(let i of e){const s='<div class="slotMachine__li">'+(i.image?`<img class="slotMachine__image" src="${i.image}" alt="">`:"")+(i.label?`<span class="slotMachine__label">${i.label}</span>`:"")+"</div>";o+=s}const n=document.createElement("div");n.className="slotMachine__col";const l=document.createElement("div");l.className="slotMachine__ul",l.innerHTML=o;const a=document.createElement("div");return a.className="slotMachine__li hide",n.appendChild(l),n.appendChild(a),n.play=i=>{const{list:s,concatCount:p,moveTime:h}=t,d=l.clientHeight,u=a.clientHeight,f=-(d/p)+(s.length-i)*u,g=["transition-property: transform",`transition-duration: ${h}s`,"transition-timing-function: ease-in-out",`transform: translateY(${f}px)`];l.style=g.join(";"),setTimeout(()=>{const _=-d+(s.length-i)*u;l.style=`transform: translateY(${_}px);`},h*1e3)},setTimeout(()=>{const i=l.clientHeight,s=a.clientHeight;l.style=`transform: translateY(${-i+s}px);`},0),n},E=t=>{const e=document.createElement("div");e.className="slotMachine";for(let o=0;o<t.colCount;o++)e.appendChild(w(t));return e};class O{constructor(e){if(r(this,"options",{}),r(this,"element",null),r(this,"oSlotMachineUl",null),r(this,"oSlotMachineLi",null),r(this,"colPlaying",!1),r(this,"going",!1),!e.element||typeof e.element!="string"){console.error("SlotMachine init error: The variable type of 'element' should be a string");return}if(!e.list||Object.prototype.toString.call(e.list)!=="[object Array]"){console.error("SlotMachine init error: The variable type of 'list' should be an array");return}if(this.options=S(e),e.element.indexOf("#")===0?this.element=document.getElementById(e.element):e.element.indexOf(".")===0&&(this.element=document.querySelector(e.element)),!this.element){console.error("lottery init error: Unable to get dom element: "+e.element);return}this.element.appendChild(E(this.options))}go(e){if(Object.prototype.toString.call(e)!=="[object Array]"){console.error("go function error: The parameter type should be Array");return}if(e.length!==this.options.colCount){console.error(`go function error: The length of the argument must be equal to ${this.options.colCount}`);return}if(this.going){console.warn("go function warning: Call repeatedly");return}this.going=!0;const o=document.querySelectorAll(".slotMachine__col");for(let n=0;n<o.length;n++)setTimeout(()=>{o[n].play(e[n]),n===o.length-1&&setTimeout(()=>{this.going=!1,typeof this.options.onend=="function"&&this.options.onend(e)},this.options.moveTime*1e3)},n*500)}}(function(){try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".slotMachine{display:flex;width:360px}.slotMachine__col{flex:1;box-shadow:0 0 10px #ccc;height:64px;overflow:hidden}.slotMachine__li{height:64px;display:flex;justify-content:center;align-items:center;flex-direction:column}.slotMachine__image{width:32px;height:32px}.slotMachine__li.hide{visibility:hidden}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();const m=t=>(M("data-v-ba81df1f"),t=t(),C(),t),$={class:"box"},N=m(()=>c("div",{class:"lottery"},null,-1)),H=m(()=>c("br",null,null,-1)),I={__name:"index",setup(t){const e=[{label:"华为Mate 60 Pro+"},{label:"1000元现金红包"},{label:"三等奖"},{label:"500元现金红包"},{label:"谢谢参与"},{label:"六等奖"},{label:"7等奖"},{label:"8等奖"},{label:"9等奖"}];let o=null;y(()=>{o=new O({element:".lottery",list:e,onend:l=>{alert(l)},onsubmit:()=>{}})});const n=()=>{o&&o.go([1,2,3])};return(l,a)=>(v(),x("div",$,[N,H,c("div",{onClick:n,class:"lottery-btn"},"抽奖")]))}},k=b(I,[["__scopeId","data-v-ba81df1f"]]);export{k as default};