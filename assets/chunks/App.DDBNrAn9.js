var M=Object.defineProperty;var x=(l,e,t)=>e in l?M(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var s=(l,e,t)=>(x(l,typeof e!="symbol"?e+"":e,t),t);import{h as C,o as w,c as S,E as h}from"./framework.CUVM_E8k.js";import"./theme.DWHu_bhI.js";const $=l=>{Object.prototype.toString.call(l)!=="[object Object]"&&(l={});const e={list:[],moveTime:4,concatCount:4,colCount:3,onend:null,...l};let t=[];if(e.list.length)for(let i=0;i<e.concatCount;i++)t=t.concat(e.list);return e._list=t,e},I=l=>{const e=l._list;if(!e||!e.length)return;let t="";for(let r of e){const a='<div class="slotMachine__li">'+(r.image?`<img class="slotMachine__image" src="${r.image}" alt="">`:"")+(r.label?`<span class="slotMachine__label">${r.label}</span>`:"")+"</div>";t+=a}const i=document.createElement("div");i.className="slotMachine__col";const n=document.createElement("div");n.className="slotMachine__ul",n.innerHTML=t;const o=document.createElement("div");return o.className="slotMachine__li hide",i.appendChild(n),i.appendChild(o),i.play=r=>{const{list:a,concatCount:c,moveTime:m}=l,u=n.clientHeight,b=o.clientHeight,y=-(u/c)+(a.length-r)*b,v=["transition-property: transform",`transition-duration: ${m}s`,"transition-timing-function: ease-in-out",`transform: translateY(${y}px)`];n.style=v.join(";"),setTimeout(()=>{const T=-u+(a.length-r)*b;n.style=`transform: translateY(${T}px);`},m*1e3)},setTimeout(()=>{const r=n.clientHeight,a=o.clientHeight;n.style=`transform: translateY(${-r+a}px);`},0),i},L=l=>{const e=document.createElement("div");e.className="slotMachine";for(let t=0;t<l.colCount;t++)e.appendChild(I(l));return e};class k{constructor(e){s(this,"options",{});s(this,"element",null);s(this,"oSlotMachineUl",null);s(this,"oSlotMachineLi",null);s(this,"colPlaying",!1);s(this,"going",!1);if(!e.element||typeof e.element!="string"){console.error("SlotMachine init error: The variable type of 'element' should be a string");return}if(!e.list||Object.prototype.toString.call(e.list)!=="[object Array]"){console.error("SlotMachine init error: The variable type of 'list' should be an array");return}if(this.options=$(e),e.element.indexOf("#")===0?this.element=document.getElementById(e.element):e.element.indexOf(".")===0&&(this.element=document.querySelector(e.element)),!this.element){console.error("lottery init error: Unable to get dom element: "+e.element);return}this.element.appendChild(L(this.options))}go(e){if(Object.prototype.toString.call(e)!=="[object Array]"){console.error("go function error: The parameter type should be Array");return}if(e.length!==this.options.colCount){console.error(`go function error: The length of the argument must be equal to ${this.options.colCount}`);return}if(this.going){console.warn("go function warning: Call repeatedly");return}this.going=!0;const t=document.querySelectorAll(".slotMachine__col");for(let i=0;i<t.length;i++)setTimeout(()=>{t[i].play(e[i]),i===t.length-1&&setTimeout(()=>{this.going=!1,typeof this.options.onend=="function"&&this.options.onend(e)},this.options.moveTime*1e3)},i*500)}}const d=({label:l,image:e,isAct:t,style:i})=>`<div style="${i}" class="lattice__lottery__item prize__item ${t?" lattice__lottery__actItem":""}">`+(e?`<img class="prize__item__image" src="${e}" alt="" />`:"")+(t?'<div class="prize__item__mask"></div>':"")+(l?`<span>${l}</span>`:"")+"</div>",_=({name:l,label:e,onsubmit:t,className:i})=>{const n=`lotteryBtn_${l}`;return window[n]||(window[n]=function(){typeof t=="function"&&t()}),`
    <div onclick="${n}()" class="lattice__lottery__btn lottery__button ${i}">
      ${e?`<span>${e}</span>`:""}
    </div>
  `};function g(l,e){return Math.round(Math.random()*(e-l)+l)}function O(){let l="";for(var e=0;e<6;e++){var t=g(1,3);switch(t){case 1:l+=String.fromCharCode(g(48,57));break;case 2:l+=String.fromCharCode(g(65,90));break;case 3:l+=String.fromCharCode(g(97,122));break}}return l}class p{constructor(){s(this,"name","");s(this,"element",null);s(this,"options",{});s(this,"isMoving",!1);s(this,"listIndex",null);s(this,"luckyIndex",0);s(this,"baseSpeed",300);s(this,"speed",20);s(this,"hasCircleTimes",0);s(this,"hasMoveTimes",0);s(this,"createHtml",null)}init(e,t,i){if(!t.element||typeof t.element!="string"){console.error("lottery init error: The variable type of 'element' should be a string");return}if(this.options=this.defaultOption(t,e),this.createHtml=i,t.element.indexOf("#")===0?this.element=document.getElementById(t.element):t.element.indexOf(".")===0&&(this.element=document.querySelector(t.element)),!this.element){console.error("lottery init error: Unable to get dom element: "+t.element);return}this.name=O(),this.updateView()}updateView(){this.element&&typeof this.createHtml=="function"?this.element.innerHTML=this.createHtml({name:this.name,list:this.options._list,listIndex:this.listIndex,btnText:this.options.btnText,onsubmit:this.options.onsubmit}):console.error("lottery error: An exception that cannot be handled")}defaultOption(e,t){Object.prototype.toString.call(e)!=="[object Object]"&&(e={});const i={list:[],circleTimes:3,velocity:"speed",btnText:"抽奖",onsubmit:null,onend:null,...e};if(!i.list||Object.prototype.toString.call(i.list)!=="[object Array]"){console.error("lottery init error: The variable type of 'list' should be an array");return}let n=JSON.parse(JSON.stringify(i.list));if(t==="grid"){const o=n.length;if(o<8)for(let r=0;r<8-o;r++)n.push({label:"谢谢参与",id:r+o+1,index:r+o});else o>8&&n.splice(8)}return i._list=n,i}start(e){const{velocity:t,circleTimes:i,_list:n,onend:o}=this.options;t==="speed"&&(this.hasMoveTimes<5?e-=this.speed+this.hasMoveTimes*10:this.hasMoveTimes>i*8-7&&(e+=this.speed+(i*8-this.hasMoveTimes)*10)),setTimeout(()=>{this.hasCircleTimes!==-1?(this.listIndex<n.length-1?this.listIndex+=1:(this.listIndex=0,this.hasCircleTimes++),this.hasCircleTimes>=i&&(this.hasCircleTimes=-1),this.hasMoveTimes++,this.updateView(),this.start(e)):this.listIndex<this.luckyIndex?(this.listIndex+=1,this.hasMoveTimes++,this.updateView(),this.start(e)):(n[this.luckyIndex]?typeof o=="function"&&o(n[this.luckyIndex]):(this.listIndex=0,console.error(`go function error: undefined list[${this.luckyIndex}]`)),this.hasMoveTimes=0,this.isMoving=!1,this.updateView())},e)}go(e){if(this.isMoving){console.warn("go function warning: Call repeatedly");return}let t=Number(e);if(isNaN(t)){console.error("go function error: The parameter type should be Number");return}if(t<0||t>=this.options._list.length){console.error(`go function error: Parameter values should be between 0 and ${this.options._list.length-1}`);return}this.isMoving=!0,this.luckyIndex=t,this.hasCircleTimes=0,this.listIndex===null?this.listIndex=0:this.listIndex+=1,typeof this.options.onstart=="function"&&this.options.onstart(),this.updateView(),this.start(this.baseSpeed)}}const N=({name:l,list:e,listIndex:t,btnText:i,onsubmit:n})=>{let o="";for(let c=0;c<3;c++)o+=d({isAct:c===t,image:e[c].image,label:e[c].label});let r="";for(let c=4;c<7;c++)r+=d({isAct:c===t,image:e[c].image,label:e[c].label});return`
    <div class="lottery__box--grid">
      <div class="lattice__lottery__box">
        <div class="lottery__row">
          ${o}
        </div>
        <div class="lottery__row right">
          ${d({isAct:t===3,image:e[3].image,label:e[3].label})}
          ${_({name:l,label:i,onsubmit:n})}
          ${d({isAct:t===7,image:e[7].image,label:e[7].label})}
        </div>
        <div class="lottery__row right">
          ${r}
        </div>
      </div>
    </div>
  `};class B extends p{constructor(e){super(),this.init("grid",e,N)}}const H=({name:l,list:e,listIndex:t,btnText:i,onsubmit:n})=>{let o="";for(let a=0;a<e.length;a++)o+=d({isAct:a===t,image:e[a].image,label:e[a].label,style:a>5?"margin-bottom: 0;":""});return`
    <div class="lottery__box--list">
      <div class="lottery__list lattice__lottery__box">
        ${o}
      </div>
      <div class="lottery__btn">
        ${_({label:i,onsubmit:n,className:"list",name:l})}
      </div>
    </div>
  `};class j extends p{constructor(e){super(),this.init("list",e,H)}}const A=l=>(Object.prototype.toString.call(l)!=="[object Object]"&&(l={}),{list:[],tableBg:"",skew:!1,onend:null,onsubmit:null,...l});class E{constructor(e){s(this,"element",null);s(this,"options",{});s(this,"drawing",!1);s(this,"deg",0);s(this,"prizeIndex",0);s(this,"isFirstMove",!0);s(this,"listLength",0);s(this,"rotateDeg",0);s(this,"turntable__table",null);if(!e.element||typeof e.element!="string"){console.error("SlotMachine init error: The variable type of 'element' should be a string");return}if(!e.list||Object.prototype.toString.call(e.list)!=="[object Array]"){console.error("SlotMachine init error: The variable type of 'list' should be an array");return}if(!e.tableBg){console.error("SlotMachine init error: The tableBg field cannot be null");return}if(!e.tableBtn){console.error("SlotMachine init error: The tableBtn field cannot be null");return}this.options=A(e);const t=this.options.list.length;if(this.listLength=t,this.rotateDeg=Number((360/t).toFixed(2)),this.options.skew&&(this.deg=-1*Math.floor(this.rotateDeg/2)),e.element.indexOf("#")===0?this.element=document.getElementById(e.element):e.element.indexOf(".")===0&&(this.element=document.querySelector(e.element)),!this.element){console.error("lottery init error: Unable to get dom element: "+e.element);return}this.element.appendChild(this.createHtml())}createHtml(){const e=document.createElement("div");e.className="turntable";const t=document.createElement("div");t.className="turntable__table",t.style=`transform: rotate(${this.deg}deg); background-image: url('${this.options.tableBg}');`,this.turntable__table=t;const i=document.createElement("div");i.className="turntable__btn",i.style=`background-image: url('${this.options.tableBtn}');`;const n=this;return i.onclick=function(){typeof n.options.onsubmit=="function"&&n.options.onsubmit()},e.appendChild(t),e.appendChild(i),e}start(){this.drawing?this.turntable__table.className="turntable__table move":this.turntable__table.className="turntable__table",this.turntable__table.style=`transform: rotate(${this.deg}deg); background-image: url('${this.options.tableBg}');`}go(e){let t=Number(e)+1;if(!t){console.warn("Turntable go error: The parameter type should be Number");return}if(t>=this.listLength){console.warn(`Turntable go error: Parameter values should be between 0 and ${this.options.list.length-1}`);return}this.drawing||(this.drawing=!0,this.deg=this.deg+360*6+(360-(t-this.prizeIndex)*this.rotateDeg),this.isFirstMove&&(this.deg+=Math.floor(this.rotateDeg/2),this.isFirstMove=!1),this.prizeIndex=t,this.start(),setTimeout(()=>{this.drawing=!1,this.start();const i=this.options.list[e];typeof this.options.onend=="function"&&this.options.onend(i)},6e3))}}const f=l=>new URL(l,import.meta.url).href,z=h("div",{class:"SlotMachine"},null,-1),V=h("hr",null,null,-1),q=h("div",{class:"LotteryGrid"},null,-1),D=h("hr",null,null,-1),F=h("div",{class:"LotteryList"},null,-1),G=h("hr",null,null,-1),U=h("div",{class:"Turntable"},null,-1),K={__name:"App",setup(l){let e=null,t=null,i=null,n=null;const o=[{label:"华为Mate 60 Pro+"},{label:"1000元现金红包"},{label:"三等奖"},{label:"500元现金红包"},{label:"谢谢参与"},{label:"六等奖"},{label:"7等奖"},{label:"8等奖"},{label:"9等奖",image:f("/src/assets/images/prize1.png")}];C(()=>{e=new k({element:".SlotMachine",list:o}),t=new B({element:".LotteryGrid",list:o,onend:u=>{console.log("结束",u)},onsubmit:()=>{t.go(4)}}),i=new j({element:".LotteryList",list:o,onend:u=>{console.log("结束",u)},onsubmit:()=>{i.go(4)}}),n=new E({element:".Turntable",list:o.slice(0,6),tableBg:f("/src/assets/images/tableBg.png"),tableBtn:f("/src/assets/images/tableBtn.png"),onend:u=>{console.log("结束：",u)},onsubmit:()=>{m()}})});const r=()=>{e&&e.go([1,2,3])},a=()=>{t&&(console.log(t),t.go(2))},c=()=>{i&&(console.log(i),i.go(2))},m=()=>{n&&(console.log(n),n.go(2))};return(u,b)=>(w(),S("div",null,[z,h("div",{onClick:r,class:"SlotMachine"},"go"),V,q,h("div",{onClick:a,class:"LotteryGrid"},"go"),D,F,h("div",{onClick:c,class:"LotteryList"},"go"),G,U,h("div",{onClick:m,class:"Turntable"},"go")]))}};export{K as default};