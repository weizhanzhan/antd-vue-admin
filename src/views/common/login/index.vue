<template>
  <div class="login-container">
    <div class="login-form-container">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[ 'userName', { rules: [{ required: true, message: 'Please input your username!' }] } ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[ 'password', { rules: [{ required: true, message: 'Please input your Password!' }] } ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0,0,0,.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-decorator="[ 'remember', { valuePropName: 'checked', initialValue: true, } ]">
            <span style="color:#ffffff">Remember me</span>
          </a-checkbox>
          <a
            class="login-form-forgot"
            href=""
          >
            Forgot password
          </a>
          <a-button
            type="primary"
            :loading="loading"
            class="login-form-button"
            html-type="submit"
          >
            Login
          </a-button>
          <span style="color:#ffffff"> Or</span>
          <a href="">  register now!   </a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import {
    Form, Button, Input, Icon, Checkbox
  } from 'ant-design-vue'
  @Component({
    components: {
      'a-form': Form,
      'a-form-item': Form.Item,
      'a-button': Button,
      'a-input': Input,
      'a-icon': Icon,
      'a-checkbox': Checkbox
    }
  })
  export default class Login extends Vue {
    loginForm: { username: string; password: string; } = { username: '', password: '' };
    loading = false;
    form:any;
    beforeCreate() {
      this.form = this.$form.createForm(this)
    }
    handleSubmit(e:any) {
      e.preventDefault()
      this.form.validateFields((err:any, values:object) => {
        if (!err) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', values)
          .then(() => {
            this.loading = false
            this.$message.success('登陆成功')
            this.$router.push('/')
          }).catch(() => {
            this.loading = false
          })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
$color:red;

.login-container{
    width:100%;
    min-height:100%;
    min-width: 1200px;
    box-shadow: 2px 2px 20px #eeeeee;
    // background-image: url('/banner2.jpg');
    background-repeat:no-repeat;
    background-size: 100% 100%;
    align-items: center;

    .login-form-container {
        max-width: 300px;
        margin: 0 auto;
        padding-top: 250px;
    }
    .login-form{
        // background: rgba(0, 0, 0, 0.1);
        padding: 40px 30px 5px 30px;
        border-radius: 4px;

    }
    .login-form-forgot {
        float: right;
    }
    .login-form-button {
        width: 100%;
    }
}
</style>
