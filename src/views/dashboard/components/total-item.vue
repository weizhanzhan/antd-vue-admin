<template>
  <a-col
    class="w_menu_card"
  >
    <div class="w_card_content">
      <h5><span>{{ title }}</span></h5>
      <a-row>
        <a-col :span="8">
          <chartBarItem />
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
  import chartBarItem from '@/components/ChartBar/index.vue'
  import { Component, Vue } from 'vue-property-decorator'
  @Component({
    components: {
      chartBarItem
    },
    props: {
      title: String,
      value: String
    }
  })
  export default class TotalItem extends Vue {

  }
</script>

<style scoped>

</style>
