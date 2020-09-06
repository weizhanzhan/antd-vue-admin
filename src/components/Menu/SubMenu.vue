<template>
  <div>
    1
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const state = reactive({
      name: "weizhan"
    });
    const collapsed = ref(false);
    const selectedKeys = ref(["1"]);
    return {
      state,
      collapsed,
      selectedKeys
    };
  }
});
</script>

<style></style>
