<template>
  <a-col
    class="w_menu_card"
    :xs="24"
    :sm="24"
    :md="12"
    :lg="12"
    :xl="6"
  >
    <div class="w_card_content">
      <h5>
        <span>{{ title }}</span>
        <span class="w_card_title">{{ subTitle }}</span>
      </h5>
      <h2>
        <span>{{ count }}</span>
        <span class="w_card_remark">stars</span>
      </h2>
      <IconSlider
        min="0"
        :max="value"
      />
    </div>
  </a-col>
</template>

<script lang="ts">
  import IconSlider from '../../../components/IconSlider/index.vue'
  import { Prop, Vue, Component } from 'vue-property-decorator'
  @Component({
    components: {
      IconSlider
    }
  })
  export default class MenuCard extends Vue {
    @Prop(String) title: string | undefined
    @Prop(String) subTitle: string | undefined
    @Prop(Number) count: number | undefined
    @Prop(Number) value: number | undefined
  }
</script>

<style>

</style>
