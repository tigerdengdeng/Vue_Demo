<template>
  <div id="home">
     <ul>
      <li><router-link to="/">Home</router-link></li>  <!-- <router-link 路由跳转-->
      <li><router-link to="/Hello">Hello</router-link></li>
    </ul>
    <app_header v-on:changzf="updatetitle($event)" v-bind:title1="title1"></app_header>
    <users v-bind:users="users"> //子组件赋值
    </users>
     <users v-bind:users="users"> //子组件赋值
    </users>
    <app_footer v-bind:title2="title2"></app_footer>

  </div>
</template>

<script>
  //局部注册组件
  import Users from './Users'
  import Header from  './Header'
  import Footer from  './Footer'

  export default {
    name: 'home',
    data() {
      return {
         users:[

             ],
         title1:  "我是头部 我是父组件向子组件传值",
         title2: "我是尾部 我是父组件向子组件传值"
      }
    },components:{  //局部注册组件
      "users":  Users,
      "app_header": Header,
      "app_footer": Footer //局部注册组件
     },
    methods:{
           updatetitle(title) {
              this.title1  =  title
           }
    },
    created() {  //页面加载之前获取数据
       this.$http.get("http://127.0.0.1:8000/menu")
         .then((data) => {
           this.users = data.body
           console.log((data.body))
         })
    }
  }
</script>

<style scoped>
  h1{
    color:red;
  }

</style>
