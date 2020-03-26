<template>
  <a-col
    class="w_menu_card"
  >
    <div class="w_card_content">
      <h5><span>{{ title }}</span></h5>
      <a-row>
        <a-col :span="8">
          <total-item-chart />
        </a-col>
        <a-col
          :span="16"
          class="statistics-text"
        >
          <div class="statistics-text-value">
            <a-icon
              type="rise"
              class="value-rise"
            /><span class="value-label">{{ value }}</span>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-col>
</template>

<script lang="ts">
  import chartBarItem from './bar-chart/index.vue'
  import { Component, Vue } from 'vue-property-decorator'
  @Component({
    components: {
      'total-item-chart': chartBarItem
    },
    props: {
      title: String,
      value: String
    }
  })
  export default class TotalItem extends Vue {

  }
</script>

<style lang="scss" scoped>
@import './common.scss';
.statistics-text {
  text-align: right;
  height: 65px;
  position: relative;
  .statistics-text-value {
    position: absolute;
    bottom: 0;
    right: 0;
    .value-rise {
      color: #096dd9
    }
    .value-fall {
      color: #f5222d
    }
    .value-label {
      font-size: 20px;
      font-weight: 700;
      padding-left: 6px
    }
  }
}
</style>
