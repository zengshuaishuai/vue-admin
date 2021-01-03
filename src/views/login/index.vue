<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li :class="{'current': item.current}" v-for="(item,index) in menuTab" :key="item.id"  @click="toggleMenu(item)">{{item.txt}}</li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'login',
    data(){
      return {
        menuTab:[
          {txt:'登录',current:true},
          {txt:'注册',current:false}
        ],
        isActive: false
      }
    },
    created() {
    },
    mounted() {
      //挂载完成后自动执行
    },
    methods:{
      //写函数的地方
       toggleMenu(data){
         this.menuTab.forEach(elem=>{
           elem.current=false
         })
         data.current=true
       }
    },
    props:{},
    watch:{}
  }
</script>

<style lang="scss"  >

  html,body,div
  {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
   #login{
     height: 100vh;
     /*outline:none;*/
     background-color: #344a5f;
   }
  .login-wrap{
    width: 330px;
    margin: auto;
  }
  .menu-tab{
    text-align: center;
    li{
      display: inline-block;
      width: 88px;
      line-height: 36px;
      font-size: 14px;
      color: #fff;
      border-radius: 2px;
      cursor: pointer;
    }
    .current{
      background-color: rgba(0,0,0,.1);
    }

  }
</style>
