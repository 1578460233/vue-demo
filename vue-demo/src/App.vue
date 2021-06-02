<template>
  <div id="app">
    <div id="nav">
      <p>双括号表达式：姓名{{ name }}</p>
      <p>{{ name + 123 }}</p>
      <p>{{ name.toUpperCase() }}</p>
      <hr />
      <p v-text="cont">1111111111111</p>
      <p v-html="cont2">123123</p>
      <p v-pre v-cloak v-once>{{ cont2 }}</p>
      <!-- v-pre 原样显示，v-cloak 防止闪现 v-once只渲染一次-->
      <hr />
      <a :href="href">v-bind(简写 : )意为绑定元素</a>
      <hr />
      <span @click="click('你好')">点击我</span>
      <hr />
      <p>计算属性和侦听器</p>
      <Computedandwatch></Computedandwatch>
      <p :class="one">绑定样式</p>
      <p :class="{ classone: true, classtwo: true }">绑定样式</p>
      <p :class="['classone', 'classtwo']">绑定样式</p>
      <p :class="[one, two]">绑定样式</p>
      <hr />
      <p :style="{ color: color, fontSize: fsize }">style绑定的使用</p>
      <hr />
      <button @click="flg = !flg">控制显示隐藏</button>
      <p v-if="flg">这是被控制的文字</p>
      <p v-else>被控制的else</p>
      <button @click="flg2 = !flg2">控制v-show</button>
      <p v-show="flg2">这是一个v-show</p>
      <p v-show="!flg2">这是一个v-show取反</p>
      <hr />
      <p>v-for的使用</p>
      <p v-for="(item, index) in vfor" :key="item.id">
        序号：{{ index + 1 }} 姓名：{{ item.name }} 年龄：{{ item.age }}
      </p>
      <hr />
      <p ref="fish">我是一只鱼</p>
      <button @click="chiyu()">吃鱼</button>
      <hr />
      自定义全局指令大小写转换<span v-convert1="hello1"></span>
      <p></p>
      自定义局部指令大小写转换<span v-convert2="hello2"></span>
      <hr />
      <p>两种绑定事件的event</p>
      <button @click="click1">第一</button>
      <button @click="click2(1, $event)">第二</button>
      <hr />
      <p>键盘触发</p>
      <input type="text" @keyup.enter="dekey" />
      <hr />
      <p>金钱过滤</p>
      <h3>{{ qian | money }}</h3>
      <h3>{{ qian | money2 }}</h3>
      <hr />
      <p>过渡/动画</p>
      <!-- <div class="donghua"></div> -->
      <div id="example-1">
        <transition name="slide">
          <div v-if="show" class="guodu"></div>
        </transition>
        <button @click="show = !show">切换</button>
        <transition name="donghua">
          <div v-if="show" class="donghua2"></div>
        </transition>
        <!-- 使用动画插件时候只需要上面的transition 绑定属性即可，看官方文档-->
      </div>
      <!-- ref搭配$refs可以操作dom -->
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Computedandwatch from "./components/computedandwatch.vue";
export default {
  components: {
    Computedandwatch,
  },
  data() {
    return {
      name: " 张三 hahah  ",
      cont: "使用v-text内容标签内容将不生效",
      cont2: "<a href='#'>v-html可以渲染标签</ a>",
      href: "http://www.baidu.com",
      one: "classone",
      two: "classtwo",
      color: "red",
      fsize: "30px",
      flg: true,
      flg2: true,
      hello1: "hello",
      hello2: "hello",
      qian: 123132,
      show: true,
      vfor: [
        {
          id: 1,
          name: "张三",
          age: "17",
        },
        {
          id: 2,
          name: "李四",
          age: "18",
        },
        {
          id: 3,
          name: "王五",
          age: "19",
        },
      ],
    };
  },
  methods: {
    click(a) {
      alert(a + this.name + this.href);
      console.log(`${this.name}你好啊！`); //es6语法
    },
    chiyu() {
      console.log(this.$refs.fish);
    },
    click1(e) {
      console.log(e);
    },
    click2(index, event) {
      console.log(event);
    },
    dekey(event) {
      console.log(event["keyCode"]);
      alert("0");
    },
  },
  directives: {
    /* 自定义局部指令 */
    convert2(el, binding) {
      el.textContent = binding.value.toUpperCase();
    },
  },
  /* 注意局部和全局过滤器名 */
  filters: {
    money(value) {
      return "￥" + Number(value).toFixed(2);
    },
  },

  /* 过滤时间的插件----moment */

  /* @click常用

.stop - 调用 event.stopPropagation()。//阻止冒泡
.prevent - 调用 event.preventDefault()。//阻止默认事件

https://cn.vuejs.org/v2/api/#v-on

*/
};
</script>
<style lang="less">
.classone {
  color: red;
}
.classtwo {
  font-weight: 700;
}
.donghua2 {
  width: 100px;
  height: 100px;
  background-color: pink;
}
.guodu {
  width: 100px;
  height: 100px;
  background-color: red;
}
/* 过渡 */
.slide-enter-to {
  opacity: 1;
}
.slide-leave-active,
.slide-enter-active {
  transition: all 2s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
/* 动画 */
.donghua-enter-active {
  animation: bounce 1s;
}
.donghua-leave-active {
  animation: bounce 1s reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(0.1);
  }
  50% {
    transform: scale(0.3);
  }
  75% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
}
</style>
