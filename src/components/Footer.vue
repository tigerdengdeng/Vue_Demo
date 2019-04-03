<template>
  <footer>
    <h1 v-on:click="changtitle">{{title}} {{title2}}</h1>
  </footer>
</template>

<script>
  export default {
    name: "app-Footer",
    props: {
      title2: {
        type: String
      }
    },
    data() {
      return {
        title: "注意："
      }
    },
    methods: {
      changtitle: function () {
        this.title2 = "我是点击改变当前值"
      }
    }

  }
</script>

<style scoped>

</style>
