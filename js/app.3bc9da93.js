(function(e){function t(t){for(var o,s,i=t[0],l=t[1],c=t[2],p=0,v=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(v.length)v.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4"),n("b680"),n("a9e3");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("p",[e._v("双括号表达式：姓名"+e._s(e.name))]),n("p",[e._v(e._s(e.name+123))]),n("p",[e._v(e._s(e.name.toUpperCase()))]),n("hr"),n("p",{domProps:{textContent:e._s(e.cont)}},[e._v("1111111111111")]),n("p",{domProps:{innerHTML:e._s(e.cont2)}},[e._v("123123")]),n("p",{pre:!0,attrs:{"v-cloak":"","v-once":""}},[e._v("{{ cont2 }}")]),n("hr"),n("a",{attrs:{href:e.href}},[e._v("v-bind(简写 : )意为绑定元素")]),n("hr"),n("span",{on:{click:function(t){return e.click("你好")}}},[e._v("点击我")]),n("hr"),n("p",[e._v("计算属性和侦听器")]),n("Computedandwatch"),n("p",{class:e.one},[e._v("绑定样式")]),n("p",{class:{classone:!0,classtwo:!0}},[e._v("绑定样式")]),n("p",{class:["classone","classtwo"]},[e._v("绑定样式")]),n("p",{class:[e.one,e.two]},[e._v("绑定样式")]),n("hr"),n("p",{style:{color:e.color,fontSize:e.fsize}},[e._v("style绑定的使用")]),n("hr"),n("button",{on:{click:function(t){e.flg=!e.flg}}},[e._v("控制显示隐藏")]),e.flg?n("p",[e._v("这是被控制的文字")]):n("p",[e._v("被控制的else")]),n("button",{on:{click:function(t){e.flg2=!e.flg2}}},[e._v("控制v-show")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.flg2,expression:"flg2"}]},[e._v("这是一个v-show")]),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.flg2,expression:"!flg2"}]},[e._v("这是一个v-show取反")]),n("hr"),n("p",[e._v("v-for的使用")]),e._l(e.vfor,(function(t,o){return n("p",{key:t.id},[e._v(" 序号："+e._s(o+1)+" 姓名："+e._s(t.name)+" 年龄："+e._s(t.age)+" ")])})),n("hr"),n("p",{ref:"fish"},[e._v("我是一只鱼")]),n("button",{on:{click:function(t){return e.chiyu()}}},[e._v("吃鱼")]),n("hr"),e._v(" 自定义全局指令大小写转换"),n("span",{directives:[{name:"convert1",rawName:"v-convert1",value:e.hello1,expression:"hello1"}]}),n("p"),e._v(" 自定义局部指令大小写转换"),n("span",{directives:[{name:"convert2",rawName:"v-convert2",value:e.hello2,expression:"hello2"}]}),n("hr"),n("p",[e._v("两种绑定事件的event")]),n("button",{on:{click:e.click1}},[e._v("第一")]),n("button",{on:{click:function(t){return e.click2(1,t)}}},[e._v("第二")]),n("hr"),n("p",[e._v("键盘触发")]),n("input",{attrs:{type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dekey(t)}}}),n("hr"),n("p",[e._v("金钱过滤")]),n("h3",[e._v(e._s(e._f("money")(e.qian)))]),n("h3",[e._v(e._s(e._f("money2")(e.qian)))]),n("hr"),n("p",[e._v("过渡/动画")]),n("div",{attrs:{id:"example-1"}},[n("transition",{attrs:{name:"slide"}},[e.show?n("div",{staticClass:"guodu"}):e._e()]),n("button",{on:{click:function(t){e.show=!e.show}}},[e._v("切换")]),n("transition",{attrs:{name:"donghua"}},[e.show?n("div",{staticClass:"donghua2"}):e._e()])],1)],2)])},a=[],s=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 输入姓："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],attrs:{type:"text"},domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}}),e._v(" "),n("br"),e._v(" 输入名："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],attrs:{type:"text"},domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}}),n("br"),e._v(" 这是你的姓名："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.fullname,expression:"fullname"}],attrs:{type:"text"},domProps:{value:e.fullname},on:{input:function(t){t.target.composing||(e.fullname=t.target.value)}}}),n("br"),n("hr"),e._v(" 监听"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.jt,expression:"jt"}],attrs:{type:"text"},domProps:{value:e.jt},on:{input:function(t){t.target.composing||(e.jt=t.target.value)}}})])}),i=[],l=(n("ac1f"),n("1276"),{data:function(){return{firstname:"",lastname:"",jt:""}},methods:{button:function(){}},computed:{fullname:{get:function(){return this.firstname+"-"+this.lastname},set:function(e){this.firstname=e.split("-")[0],this.lastname=e.split("-")[1]}},full:function(){}},watch:{jt:function(e){console.log(e),this.fullname+=e}}}),c=l,u=n("2877"),p=Object(u["a"])(c,s,i,!1,null,"531f5a42",null),v=p.exports,f={components:{Computedandwatch:v},data:function(){return{name:" 张三 hahah  ",cont:"使用v-text内容标签内容将不生效",cont2:"<a href='#'>v-html可以渲染标签</ a>",href:"http://www.baidu.com",one:"classone",two:"classtwo",color:"red",fsize:"30px",flg:!0,flg2:!0,hello1:"hello",hello2:"hello",qian:123132,show:!0,vfor:[{id:1,name:"张三",age:"17"},{id:2,name:"李四",age:"18"},{id:3,name:"王五",age:"19"}]}},methods:{click:function(e){alert(e+this.name+this.href),console.log("".concat(this.name,"你好啊！"))},chiyu:function(){console.log(this.$refs.fish)},click1:function(e){console.log(e)},click2:function(e,t){console.log(t)},dekey:function(e){console.log(e["keyCode"]),alert("0")}},directives:{convert2:function(e,t){e.textContent=t.value.toUpperCase()}},filters:{money:function(e){return"￥"+Number(e).toFixed(2)}}},m=f,d=(n("7c55"),Object(u["a"])(m,r,a,!1,null,null,null)),h=d.exports,_=n("8c4f");o["a"].use(_["a"]);var g=[],w=new _["a"]({mode:"history",base:"",routes:g}),y=w,b=n("2f62");o["a"].use(b["a"]);var x=new b["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,o["a"].directive("convert1",(function(e,t){e.textContent=t.value.toUpperCase()})),o["a"].filter("money2",(function(e){return"￥"+Number(e).toFixed(2)})),new o["a"]({router:y,store:x,render:function(e){return e(h)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";n("2395")}});
//# sourceMappingURL=app.3bc9da93.js.map