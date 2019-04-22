<template>
    <a-breadcrumb>
        <a-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <span v-if="index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
            <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
export default {
    data() {
        return {
            levelList: null
        }
    },
    created() {
        this.getBreadcrumb()
    },
    watch: {
       '$route'(){
           this.getBreadcrumb()
       } 
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.name)
            const first = matched[0]
            if (first && first.name !== 'dashBoard') {
                matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
            }
            this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
        },
        pathCompile(path) {
            // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
            const { params } = this.$route
            var toPath = pathToRegexp.compile(path)
            return toPath(params)
        },
        handleLink(item) {
            const { redirect, path } = item
            if (redirect) {
                this.$router.push(redirect)
                return
            }
            this.$router.push(this.pathCompile(path))
        }
    }
}
</script>

<style>
.no-redirect {
      color: #97a8be;
      cursor: text;
    }
</style>
