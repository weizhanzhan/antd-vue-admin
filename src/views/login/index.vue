<template>
    <div class="login-container">
        <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
            <a-form-item>
                <a-input v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
                    placeholder="Username">
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
                    type="password" placeholder="Password">
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]">
                    Remember me
                </a-checkbox>
                <a class="login-form-forgot" href="">
                    Forgot password
                </a>
                <a-button type="primary" html-type="submit" class="login-form-button">
                    Log in
                </a-button>
                Or <a href="">
                    register now!
                </a>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    export default {
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.$store.dispatch('LoginByUsername', values).then(() => {
                            this.$message.success('登陆成功')
                            this.$router.push('/dashboard')
                            //   this.$router.push({ path: this.redirect || '/' })
                        }).catch(() => {
                            this.$message.error('登陆失败')
                        })
                    }
                });
            },
        },
    };
</script>
<style lang="scss">
 @import '../../assets/style/login.scss'
</style>
