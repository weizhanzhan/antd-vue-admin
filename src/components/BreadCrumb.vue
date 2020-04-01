
<template>
  <a-breadcrumb>
    <a-breadcrumb-item
      v-for="(item,index) in levelList"
      :key="item.path"
    >
      <span
        v-if="index!==0"
        class="no-redirect"
      >{{ $t(`menu.${item.meta.title}`) }} </span>
      <a
        v-else
        @click.prevent="handleLink(item)"
      >{{ $t(`menu.${item.meta.title}`) }}</a>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
  import pathToRegexp from 'path-to-regexp'
  import { Vue, Component, Watch } from 'vue-property-decorator'
  import { Breadcrumb } from 'ant-design-vue'
  @Component({
    components: {
      'a-breadcrumb': Breadcrumb,
      'a-breadcrumb-item': Breadcrumb.Item
    }
  })
  export default class BreadCrumb extends Vue {
      levelList:any = []
      created() {
        this.getBreadcrumb()
      }
      @Watch('$route')
      onRouteChange() {
        this.getBreadcrumb()
      }
      getBreadcrumb() {
        const matched:any = this.$route.matched.filter(item => item.name)
        // const first = matched[0]
        // if (first && first.name !== 'dashboard') {
        //   matched = [{ path: '/dashboard', meta: { title: 'home' }}].concat(matched)
        // }

        this.levelList = matched.filter((item:any) => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      }
      pathCompile(path:string) {
        // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
        const { params } = this.$route
        var toPath = pathToRegexp.compile(path)
        return toPath(params)
      }
      handleLink(item:any) {
        const { redirect, path } = item
        if (redirect) {
          this.$router.push(redirect)
          return
        }
        this.$router.push(path)
      }
  }
</script>

<style scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}
</style>
