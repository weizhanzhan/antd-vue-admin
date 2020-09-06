<template>
  <div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <template v-for="route in handleShowRoutes">
        <a-menu-item :key="route.path">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
/* eslint-disable vue/no-v-for-template-key-on-child */
import { defineComponent, ref } from "vue";
import {
  UserOutlined
  // VideoCameraOutlined,
  // UploadOutlined
} from "@ant-design/icons-vue";
import routes from "../config/router.config";
interface RouteOption {
  path: string;
  name: string;
  meta?: {
    title: string;
  };
  component: string;
  redirect?: string;
  alwaysShow?: boolean;
  hidden?: boolean;
  children?: Array<RouteOption>;
}
export default defineComponent({
  components: {
    UserOutlined
    // VideoCameraOutlined,
    // UploadOutlined
  },
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const configRoutes: Array<RouteOption> = routes[0].menus;
    const openKeys = ref([]);
    const selectedKeys = ref(["1"]);
    const handleShowRoutes = (routes: Array<RouteOption>) => {
      let newRoutes = JSON.parse(JSON.stringify(routes));
      newRoutes = newRoutes.filter((route: RouteOption) => !route.hidden);
      for (let i = 0; i < newRoutes.length; i++) {
        const route = newRoutes[i];
        if (route.children && route.children.length === 1) {
          if (!route.alwaysShow) {
            newRoutes[i] = route.children[0];
          }
        } else if (route.children && route.children.length > 1) {
          newRoutes[i].children = [...handleShowRoutes(route.children)];
        }
      }
      return newRoutes;
    };
    return {
      configRoutes,
      openKeys,
      selectedKeys,
      handleShowRoutes
    };
  },
  mounted() {
    console.log(this.handleShowRoutes(this.configRoutes));
  }
});
</script>

<style></style>
