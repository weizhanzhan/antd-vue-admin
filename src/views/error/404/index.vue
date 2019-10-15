<template>
  <div style="background:#f0f2f5;margin-top: -20px;">
    <div class="wscn-http404">
      <div
        class="pic-404"
        style="text-align:center;margin-top:150px"
      >
        <img
          :src="img404"
          class="pic-404__parent"
          alt="404"
        >
        <!-- <img
          :src="img404cloud"
          class="pic-404__child left"
          alt="404"
        >
        <img
          :src="img404cloud"
          class="pic-404__child mid"
          alt="404"
        >
        <img
          :src="img404cloud"
          class="pic-404__child right"
          alt="404"
        > -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Emit, Vue, Component } from 'vue-property-decorator'

  const img404 = require('@/assets/images/404.png')
  const img404cloud = require('@/assets/images/404_cloud.png')

  @Component
  export default class UpdatePwd extends Vue {
    img404: any = img404;

    img404cloud: any = img404cloud;

    message: string = '特朗普说这个页面你不能进......';
  }
</script>

