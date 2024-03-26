var d=Object.defineProperty,m=(i,t,e)=>t in i?d(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,r=(i,t,e)=>(m(i,typeof t!="symbol"?t+"":t,e),e);const c=({label:i,image:t,isAct:e,style:s})=>`<div style="${s}" class="lattice__lottery__item prize__item ${e?" lattice__lottery__actItem":""}">`+(t?`<img class="prize__item__image" src="${t}" alt="" />`:"")+(e?'<div class="prize__item__mask"></div>':"")+(i?`<span>${i}</span>`:"")+"</div>",p=({name:i,label:t,onsubmit:e,className:s})=>{const n=`lotteryBtn_${i}`;return window[n]||(window[n]=function(){typeof e=="function"&&e()}),`
    <div onclick="${n}()" class="lattice__lottery__btn lottery__button ${s}">
      ${t?`<span>${t}</span>`:""}
    </div>
  `};function h(i,t){return Math.round(Math.random()*(t-i)+i)}function u(){let i="";for(var t=0;t<6;t++){var e=h(1,3);switch(e){case 1:i+=String.fromCharCode(h(48,57));break;case 2:i+=String.fromCharCode(h(65,90));break;case 3:i+=String.fromCharCode(h(97,122));break}}return i}class _{constructor(){r(this,"name",""),r(this,"element",null),r(this,"options",{}),r(this,"isMoving",!1),r(this,"listIndex",null),r(this,"luckyIndex",0),r(this,"baseSpeed",300),r(this,"speed",20),r(this,"hasCircleTimes",0),r(this,"hasMoveTimes",0),r(this,"createHtml",null)}init(t,e,s){if(!e.element||typeof e.element!="string"){console.error("lottery init error: The variable type of 'element' should be a string");return}if(this.options=this.defaultOption(e,t),this.createHtml=s,e.element.indexOf("#")===0?this.element=document.getElementById(e.element):e.element.indexOf(".")===0&&(this.element=document.querySelector(e.element)),!this.element){console.error("lottery init error: Unable to get dom element: "+e.element);return}this.name=u(),this.updateView()}updateView(){this.element&&typeof this.createHtml=="function"?this.element.innerHTML=this.createHtml({name:this.name,list:this.options._list,listIndex:this.listIndex,btnText:this.options.btnText,onsubmit:this.options.onsubmit}):console.error("lottery error: An exception that cannot be handled")}defaultOption(t,e){Object.prototype.toString.call(t)!=="[object Object]"&&(t={});const s={list:[],circleTimes:3,velocity:"speed",btnText:"抽奖",onsubmit:null,onend:null,...t};if(!s.list||Object.prototype.toString.call(s.list)!=="[object Array]"){console.error("lottery init error: The variable type of 'list' should be an array");return}let n=JSON.parse(JSON.stringify(s.list));if(e==="grid"){const o=n.length;if(o<8)for(let a=0;a<8-o;a++)n.push({label:"谢谢参与",id:a+o+1,index:a+o});else o>8&&n.splice(8)}return s._list=n,s}start(t){const{velocity:e,circleTimes:s,_list:n,onend:o}=this.options;e==="speed"&&(this.hasMoveTimes<5?t-=this.speed+this.hasMoveTimes*10:this.hasMoveTimes>s*8-7&&(t+=this.speed+(s*8-this.hasMoveTimes)*10)),setTimeout(()=>{this.hasCircleTimes!==-1?(this.listIndex<n.length-1?this.listIndex+=1:(this.listIndex=0,this.hasCircleTimes++),this.hasCircleTimes>=s&&(this.hasCircleTimes=-1),this.hasMoveTimes++,this.updateView(),this.start(t)):this.listIndex<this.luckyIndex?(this.listIndex+=1,this.hasMoveTimes++,this.updateView(),this.start(t)):(n[this.luckyIndex]?typeof o=="function"&&o(n[this.luckyIndex]):(this.listIndex=0,console.error(`go function error: undefined list[${this.luckyIndex}]`)),this.hasMoveTimes=0,this.isMoving=!1,this.updateView())},t)}go(t){if(this.isMoving){console.warn("go function warning: Call repeatedly");return}let e=Number(t);if(isNaN(e)){console.error("go function error: The parameter type should be Number");return}if(e<0||e>=this.options._list.length){console.error(`go function error: Parameter values should be between 0 and ${this.options._list.length-1}`);return}this.isMoving=!0,this.luckyIndex=e,this.hasCircleTimes=0,this.listIndex===null?this.listIndex=0:this.listIndex+=1,typeof this.options.onstart=="function"&&this.options.onstart(),this.updateView(),this.start(this.baseSpeed)}}const b=({name:i,list:t,listIndex:e,btnText:s,onsubmit:n})=>{let o="";for(let l=0;l<3;l++)o+=c({isAct:l===e,image:t[l].image,label:t[l].label});let a="";for(let l=4;l<7;l++)a+=c({isAct:l===e,image:t[l].image,label:t[l].label});return`
    <div class="lottery__box--grid">
      <div class="lattice__lottery__box">
        <div class="lottery__row">
          ${o}
        </div>
        <div class="lottery__row right">
          ${c({isAct:e===3,image:t[3].image,label:t[3].label})}
          ${p({name:i,label:s,onsubmit:n})}
          ${c({isAct:e===7,image:t[7].image,label:t[7].label})}
        </div>
        <div class="lottery__row right">
          ${a}
        </div>
      </div>
    </div>
  `};class y extends _{constructor(t){super(),this.init("grid",t,b)}}(function(){try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(".lattice__lottery__box{width:320px}.lattice__lottery__item{width:100px;height:100px;margin-bottom:10px;border:1px solid #ccc}.lattice__lottery__btn{width:100px;height:100px;font-size:24px;border:1px solid #ccc}.lattice__lottery__btn.list{margin-top:24px}.prize__item{box-sizing:border-box;position:relative;font-size:14px;line-height:20px;transition:all .1s;overflow:hidden;display:flex;justify-content:center;align-items:center;flex-direction:column;flex-shrink:0}.prize__item__mask{position:absolute;width:100%;height:100%;background-color:#ffb6c199}.prize__item__image{width:60px;height:60px}.lottery__button{box-sizing:border-box;display:flex;justify-content:center;align-items:center;flex-direction:column;flex-shrink:0;cursor:pointer}.lottery__box--grid{display:inline-block}.lottery__row{display:flex;justify-content:space-between}.lottery__row.right{flex-direction:row-reverse}.lottery__box--list{display:inline-block}.lottery__list{overflow:hidden;display:flex;flex-wrap:wrap;justify-content:space-between}.lottery__btn{width:100%;display:flex;justify-content:center}")),document.head.appendChild(i)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();export{y as p};