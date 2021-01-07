<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li :class="{'current': item.current}" v-for="(item,index) in menuTab" :key="item.id"  @click="toggleMenu(item)">{{item.txt}}</li>
      </ul>
      <!---表单的开始-->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-form" size="medium">
        <el-form-item  prop="username" class="item-form">
          <label>邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item  prop="password" class="item-form">
          <label>密码</label>
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>

        <el-form-item  prop="repassword" class="item-form" v-show="model==='register'">
          <label>确认密码</label>
          <el-input type="password" v-model="ruleForm.repassword" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>

        <el-form-item prop="code" class="item-form">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="14"><el-input v-model.number="ruleForm.code"></el-input></el-col>
            <el-col :span="10"><el-button type="success" class="block">获取验证码</el-button></el-col>

          </el-row>

        </el-form-item>

        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')"  class="login-btn block">提交</el-button>

        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  import {stripscript,validateEmail,validatePass,validateCode1} from '@/utils/validate.js'
  export default {
    name: 'login',
    data(){
      //验证用户名为邮箱
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if(!validateEmail(value)) {
          callback(new Error('用户名格式有误'));
        } else{
           callback() //true
        }
      };

      //验证密码
      var validatePassword = (rule, value, callback) => {
        //过滤后的数据
        this.ruleForm.password=stripscript(value)
        value=this.ruleForm.password
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (!validatePass(value)) {
          callback(new Error('密码为6至20位的字母和数字'));
        } else {
          callback();
        }
      };

      //验证确认密码
      var validatePasswords = (rule, value, callback) => {
        if (this.model =='login'){
          callback()
        }
        //过滤后的数据
        this.ruleForm.passwords=stripscript(value)
        value=this.ruleForm.passwords
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value!=this.ruleForm.password) {
          callback(new Error('两次输入密码不一样'));
        } else {
          callback();
        }
      };

      //验证验证码
      var validateCode = (rule, value, callback) => {
        //过滤后的数据
        this.ruleForm.code=stripscript(value)
        value=this.ruleForm.code

        if (value === '') {
          callback(new Error('请输入验证码'));
        } else if (!validateCode1(value)) {
          callback(new Error('验证码格式有误'));
        } else {
          callback();
        }
      };

      return {
        menuTab:[
          {txt:'登录',current:true,type:'login'},
          {txt:'注册',current:false,type:'register'}
        ],
        //模块的值
        model:'login',

        //表单的数据
        ruleForm: {
          username: '',
          password: '',
          repassword:'',
          code: ''
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          repassword: [
            { validator: validatePasswords, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ]
        }
      };
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
         //高光
         data.current=true
        //修改值
        this.model=data.type
       },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

  },
    props:{},
    watch:{}
  }
</script>

<style lang="scss"  >

  * {
    margin: 0;
    padding: 0;
    /*overflow: hidden;*/
  }
   #login{
     height: 100vh;
     /*outline:none;*/
     background-color: #344a5f;
   }
  .login-wrap{
    width: 360px;
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

  .login-form{
    margin-top: 29px;
    label{
      display: block;
      margin-bottom: 3px;
      font-size: 14px;
      color: #ffffff;
    }
  }

  .item-form{
    margin-bottom: 13px;
  }

  .block{
    width: 100%;
    display: block;
  }
  .login-btn{
    margin-top: 19px;
  }
</style>
