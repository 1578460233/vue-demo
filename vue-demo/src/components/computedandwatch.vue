<template>
  <div>
    输入姓：<input v-model="firstname" type="text" /> <br />
    输入名：<input v-model="lastname" type="text" /><br />
    这是你的姓名：<input v-model="fullname" type="text" /><br />
    <hr />
    监听<input v-model="jt" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      jt: "",
    };
  },
  methods: {
    button() {},
  },
  computed: {
    fullname: {
      get() {
        return this.firstname + "-" + this.lastname;
      },
      set(value) {
        this.firstname = value.split("-")[0];
        this.lastname = value.split("-")[1];
      },
    },
    full() {},
  },
  watch: {
    jt(value) {
      console.log(value);
      this.fullname += value;
    },
  },
};
</script>

<style lang="less" scoped></style>
