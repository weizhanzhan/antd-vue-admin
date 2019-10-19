<template>
  <a-dropdown
    v-model="visible"
    overlay-class-name="theme-config"
  >
    <div class="menu-icon">
      <span>
        <a-icon
          type="bg-colors"
          class="menu-icon-item"
        />
      </span>
    </div>
    <div
      slot="overlay"
    >
      <div class="w_theme_select">
        <h3
          class="w_theme_select_title"
        >
          Theme Color
        </h3>
        <div class="w_theme_content">
          <div
            v-for="color in colors"
            :key="color"
            class="w_theme_color_block"
            :style="[{'background':color}]"
            @click="changeTheme(color)"
          >
            <a-icon
              v-if="activeTheme===color"
              type="check"
            />
          </div>
        </div>
        <h3 class="w_theme_select_title">
          Menu Color
        </h3>
        <div>
          <a-switch
            checked-children="深色"
            un-checked-children="浅色"
            default-checked
            @change="changeMenuTheme"
          />
        </div>
      </div>
    </div>
  </a-dropdown>
</template>

<script>
  import { updateTheme } from '../../../../../utils/common.js'

  export default {
    data() {
      return {
        colors: ['#F5222D', '#FA541C', '#FAAD14', '#13C2C2', '#52C41A', '#1890FF', '#2F54E8', '#722ED1'],
        themeTigger: true,
        activeTheme: '#2F54E8',
        visible: false
      }
    },
    methods: {
      changeTheme(color) {
        this.activeTheme = color
        updateTheme(color)
      },
      changeMenuTheme(val) { this.$emit('changeLeftBar', val) }
    }

  }

</script>

<style scoped>

</style>
