<template>
    <Header>
      <h1 v-on:click="changtitle1">注意： {{title1}}</h1>
    </Header>
</template>

<script>
  export default {
    name: "app-Header",
    props: {
      title1: {
        type: String
      }
    },
    data() {
      return {}
    }, methods: {
      changtitle1: function () {
        //  this.title1="ddd" //点击事件改变值
        this.$emit("changzf", "我是子组件传给父组件")  //注册事件
      }
    }
    // }, beforeCreate: function () {
    //     alert("组件实例化之前执行的函数");
    //   },
    //   created: function () {
    //     alert("组件实例化完毕，但页面还未显示");
    //   },
    //   beforeMount: function () {
    //     alert("组件挂在前，页面仍未展示，但虚拟Dom已经配置");
    //   },
    //   mounted: function () {
    //     alert("组件挂在后,次方法执行后,页面显示");
    //   },
    //   beforeUpdate: function () {
    //     alert("组件更新前，页面仍未更新，但虚拟Dom已经配置");
    //   },
    //   updated: function () {
    //     alert("组件更新前，此方法执行后，页面显示");
    //   },
    //   beforeDestory: function () {
    //     alert("组件销毁前");
    //   },
    //   destoryed: function () {
    //     alert("组件销毁");
    //   }
  }
</script>
<style scoped>

</style>
