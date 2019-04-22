<template>
    <div>
        <div class="logo" />
        <a-menu
        
            mode="inline"
            theme="dark"
            @click="menuClick"
            @openChange="handleOpenChange"
            :openKeys="openKeys"
            :selectedKeys="[$route.name]"  
            :inlineCollapsed="collapsed"
            >
            <template v-for="item in handleRoutes(routes)">
                <a-menu-item v-if="!item.children" :key="item.name">
                    <a-icon type="pie-chart" />
                    <span>{{item.meta.title}}</span>
                </a-menu-item>
                <sub-menu v-else :menu-info="item" :key="item.name"/>
            </template>
        </a-menu>
    </div>


</template>
/**
    :defaultSelectedKeys="[$route.name]"
            :defaultOpenKeys="[$route.matched[0].name]"
            :selectedKeys="[$route.name]"
 */
<script>
    import subMenu from './components/sub-menu.vue'
    import {
        mapGetters
    } from 'vuex'
    export default {
        data() {
            return {
                collapsed: false,    
                openKeys:[this.$route.matched[0].name]       
            }
        },
        computed: {
            ...mapGetters(['routes']),       
        },
        watch: {
            '$route'() {
                this.openKeys = [this.$route.matched[0].name]
            }
        },
        methods: {
            handleOpenChange(openKeys){
                let keys;
                if (openKeys.length > 1) {
                    if (openKeys.length > 2) {
                        keys = [openKeys[openKeys.length - 1]];
                    } else if (openKeys[1].indexOf(openKeys[0]) > -1) {
                        keys = [openKeys[0], openKeys[1]];
                    } else {
                        keys = [openKeys[openKeys.length - 1]];
                    }
                    this.openKeys = keys;
                } else {
                    this.openKeys = openKeys;
                }
            },
            menuClick({ key }) {
                this.$router.push({name:key})
            },
             /**
             * 过滤菜单，把hidden的去掉，把children只有一个 覆盖父级路由 显示单级菜单
             */
            handleRoutes(routes){
                let newRoutes = JSON.parse(JSON.stringify(routes))
                newRoutes = newRoutes.filter(route => !route.hidden)
                for(var i=0; i<newRoutes.length; i++){
                    let route = newRoutes[i]
                    if(route.children&&route.children.length == 1)
                        newRoutes[i] = route.children[0]
                    else if(route.children&&route.children.length>1){        
                        newRoutes[i].children = [...this.handleRoutes(route.children)]
                    }
                }       
                return newRoutes
            }    
        },
        components: { subMenu },
    }
</script>

<style scoped>
    .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }
</style>