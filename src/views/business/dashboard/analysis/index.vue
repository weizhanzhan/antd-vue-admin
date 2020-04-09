<template>
  <wx-container show-bread>
    <template v-slot:header>
      <div>
        <h2>大数据中心</h2>
        <a-icon
          type="pie-chart"
          class="header-icon"
          theme="twoTone"
          two-tone-color="#eb2f96"
        />
        这里是数据分析的一些注释
      </div>
    </template>
    <div>
      <div class="dashboard">
        <div>
          <a-row :gutter="16">
            <menu-card
              title="Vue.js"
              sub-title="Evan You"
              :count="141000"
              :value="20"
            />
            <menu-card
              title="React.js"
              sub-title="Facebook"
              :count="131000"
              :value="50"
            />
            <menu-card
              title="Angular.js"
              sub-title="Google"
              :count="50000"
              :value="70"
            />
            <menu-card
              title="Jquery.js"
              sub-title="John Resig"
              :count="51000"
              :value="90"
            />
          </a-row>
        </div>
        <a-row :gutter="16">
          <a-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="24"
            :xl="18"
          >
            <div class="dashboard_chart">
              <data-sheet />
            </div>
          </a-col>
          <a-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="24"
            :xl="6"
          >
            <a-row>
              <total-item
                title="Vue Total Visit"
                value="20000"
              />
              <total-item
                title="React Total Visit"
                value="50000"
              />
              <total-item
                title="Angular Total Visit"
                value="30000"
              />
              <total-item
                title="Jquery Total Visit"
                value="15000"
              />
            </a-row>
          </a-col>
        </a-row>
      </div>
    </div>
  </wx-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import MenuCard from './components/menu-card.vue'
  import TotalItem from './components/total-item.vue'
  import DataSheet from './components/line-chart/index.vue'
  @Component({
    components: {
      'menu-card': MenuCard,
      'total-item': TotalItem,
      'data-sheet': DataSheet
    }
  })
  export default class Analysis extends Vue {
  }
</script>

<style lang="scss" scoped>
.dashboard_chart {
  background: #fff;
  padding: 20px
}
</style>
