<template>
    <div class="Users">
       <ul>
         <li v-for="item in users"> <!--v-on:click="item.show=!item.show"-->
           <h2>{{item.name}}</h2>
         </li>
       </ul>
      <button v-on:click="deletetitle">删除</button>
    </div>
</template>

<script>
    export default {
        name: "Users",
        props: {
          users: {     //取父组件的值
            type: Array,
            required: true
          }
        },
        data () {
           return {

           }
        },
      methods:{
          deletetitle:function () {
             this.users.pop()
          }
      }
    }
</script>

<style scoped > #scoped 代表各自引用自己的CSS
h1{
  color:rebeccapurple;
}
</style>
