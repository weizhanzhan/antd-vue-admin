<template>
  <wx-container show-bread>
    <template v-slot:header>
      <h2>Web Video</h2>
      <div>
        <a-icon
          type="video-camera"
          class="header-icon"
        />
        阿里云视频点播（ApsaraVideo for VoD）是集音视频采集、编辑、上传、自动化转码处理、媒体资源管理、高效云剪辑处理、分发加速、视频播放于一体的一站式音视频点播解决方案，<br>整体服务构建在阿里云强大的基础设施服务之上，提供端到端的视频全链路服务，帮助企业和开发者快速搭建安全、弹性、高可定制的视频点播平台和应用。
        <a
          href="https://player.alicdn.com/aliplayer/index.html"
          target="view_window"
        >Aliplayer官网</a>
      </div>
    </template>
    <div class="wx-body">
      <div
        v-show="player"
        id="player-con"
        class="prism-player"
      />
      <div
        v-show="!player"
        class="load_player"
      >
        AliyunPlayer正在加载...
      </div>
    </div>
  </wx-container>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator'

  Component.registerHooks(['beforeRouteLeave'])// 注册事件 否则执行不了
  @Component
  export default class ComponentVideo extends Vue {
    player:any = null

    mounted() {
      setTimeout(this.loadPlayer, 1000)
    }
    loadPlayer() {
      const Aliplayer = (window as any).Aliplayer
      const AliPlayerComponent = (window as any).AliPlayerComponent
      if (Aliplayer) {
        this.player = new Aliplayer({
          'id': 'player-con',
          'source': '//player.alicdn.com/video/aliyunmedia.mp4',
          'width': '100%',
          'height': '500px',
          'autoplay': true,
          'isLive': false,
          'rePlay': false,
          'playsinline': true,
          'preload': true,
          'controlBarVisibility': 'hover',
          'useH5Prism': true,
            components: [{
              name: 'StartADComponent',
              type: AliPlayerComponent.StartADComponent,
              args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html', 3]
            }, {
              name: 'PauseADComponent',
              type: AliPlayerComponent.PauseADComponent,
              args: ['https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg', 'https://promotion.aliyun.com/ntms/act/videoai.html']
            }]
          }
        )
      }
    }

    beforeRouteLeave(to:any, from:any, next:Function) {
    //  this.aliplayer.remove()
      next()
    }
  }
</script>

<style lang="scss" scoped>
.load_player{
  height: 500px;
  width: 100%;
}
</style>
