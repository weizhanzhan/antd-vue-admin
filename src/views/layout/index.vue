<template>
    <a-layout style="min-height: 100vh;">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
            <side-bar></side-bar>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <header-bar :collapsed="collapsed" @trigger="trigger"></header-bar>
            </a-layout-header>
            <a-layout-content>
                <div style="padding:16px 0 0 16px">
                    <breadCrumb />
                </div>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
    import headerBar from './components/header_bar'
    import sideBar from './components/side_bar'
    import breadCrumb from '../../components/bread_crumb'

    export default {
        data() {
            return {
                collapsed: false,
            }
        },
        methods:{
            trigger(){
                this.collapsed = !this.collapsed;
            }
        },
        components: {
            sideBar,
            headerBar,
            breadCrumb
        }
    }
</script>
<style lang="scss">
  @import '../../assets/style/layout.scss';
</style>