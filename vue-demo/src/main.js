import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false




/* 定义全局指令 */
Vue.directive('convert1', (el, binding) => {

  el.textContent = binding.value.toUpperCase();
  /* console.log(el);
  console.log(binding); */
});

Vue.filter('money2', (value) => {
  return "￥" + Number(value).toFixed(2);
})




new Vue({
  router,
  store,
  /* 
  解释
  render(xxx){
    return xxx(App)
  }
  */
  render: h => h(App)
}).$mount('#app')




