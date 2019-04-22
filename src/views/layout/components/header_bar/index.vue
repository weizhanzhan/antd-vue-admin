<template>
    <!-- <div>
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="changeCollapsed" /> 
    </div> -->
    <a-row>
        <a-col :span="8">
            <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="changeCollapsed" /> 
        </a-col>
        <a-col :span="8" :offset="8">    
            <a-row>
                <a-col :span="7" :offset="14">
                    <a-dropdown>
                        <div class="menu-icon">
                            <span >
                                <!-- <a-icon type="user" style="color:#cccccc;fontSize:18px"/> -->
                                <a-avatar :src="user.avatar" size="small" />
                                <span>&nbsp;{{user.name}}</span>
                            </span>
                        </div>
                        <a-menu slot="overlay" @click="dropClick">
                            <a-menu-item key="info">
                                <span rel="noopener noreferrer" >个人中心</span>
                            </a-menu-item>
                            <a-menu-item key="logout">
                                <span rel="noopener noreferrer">退出</span>
                            </a-menu-item>                    
                        </a-menu>
                    </a-dropdown>
                </a-col>
                <a-col :span="3">
                    <a-dropdown>
                        <div class="menu-icon">
                            <span >
                                <a-icon type="global" style="color:#cccccc;fontSize:18px"/>
                            </span>
                        </div>
                        <a-menu slot="overlay" @click="langChage">
                            <a-menu-item key="zh-cn">
                                <span rel="noopener noreferrer" >中文</span>
                            </a-menu-item>
                            <a-menu-item key="en">
                                <span rel="noopener noreferrer">English</span>
                            </a-menu-item>                    
                        </a-menu>
                    </a-dropdown>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:{
        collapsed:{
            type:Boolean
        }
    },
    methods:{
        changeCollapsed(){
            this.$emit('trigger')
        },
        dropClick({key}){
            switch(key){
                case 'info':
                    this.$router.push('/account/index')
                    break;
                case 'logout':
                    this.$store.dispatch('Logout');
                    window.location.reload();
                    break;
                default:
                    break;
            }
        },
        langChage({key}){
            this.$bus.$emit('change-lang',key)
        }
    },
    computed:{
     
         ...mapGetters(['user'])
    }
}
</script>

<style scoped>
    .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    }

    .trigger:hover {
        color: #1890ff;
    }
    .menu-icon{
        text-align: center
    }
    .menu-icon:hover{
        background: rgba(0, 0, 0, 0.025)
    }
</style>
