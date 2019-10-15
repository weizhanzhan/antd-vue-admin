<template>
  <div>
    <span
      class="w_process_text"
      :style="{'color':stateColor}"
    >{{ max }}%</span>
    <div class="w_process">
      <div
        class="w_process_bar"
        :style="[{'width':max+'%','background':stateColor}]"
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      min: String,
      max: Number
    },
    computed: {
      stateColor() {
        if (this.max > 85) return 'rgb(82, 196, 26)'
        else if (this.max > 60) return 'rgb(250, 173, 20)'
        else if (this.max > 30) return 'rgb(245, 34, 45)'
        return 'rgb(245, 34, 45)'
      }
    }
  }
</script>

<style lang="scss" scoped>
.w_process{
    height: 5px;
    margin-bottom: 0;
    overflow: hidden;
    background-color: #f5f5f5;
    border-radius: 4px;
    box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
}
.w_process_text{
    // color: var(--PC);
}
.w_process_bar {
    float: left;
    width: 20%;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    // background-color: var(--PC);
    -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
    box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
    -webkit-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease;
}
</style>
