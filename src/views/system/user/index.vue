<template>
  <wx-container>
    <div class="wx-body">
      <FilterForm>
        <a-form
          layout="inline"
          :form="form"
          @submit.prevent="handleSearch"
        >
          <a-row>
            <a-col :span="6">
              <a-form-item label="用户名">
                <a-input
                  v-decorator="[ 'username', { rules: [ { message: 'Input something!'}]}]"
                  placeholder="placeholder"
                />
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="岗位">
                <a-input
                  v-decorator="[ 'station', { rules: [ { message: 'Input something!'}]}]"
                  placeholder="placeholder"
                />
              </a-form-item>
            </a-col>
            <a-col :span="6">
              <a-form-item label="角色">
                <a-input
                  v-decorator="[ 'role', { rules: [ { message: 'Input something!'}]}]"
                  placeholder="placeholder"
                />
              </a-form-item>
            </a-col>
            <a-col
              :span="6"
              :style="{textAlign:'right'}"
            >
              <a-form-item class="form-item-btn">
                <a-button
                  type="primary"
                  html-type="submit"
                >
                  Search
                </a-button>
                <a-button
                  :style="{ marginLeft: '8px' }"
                  @click="handleReset"
                >
                  Clear
                </a-button>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </FilterForm>
    </div>
    <div class="wx-body m_t_16">
      <a-row>
        <a-col :span="12">
          数据列表
        </a-col>
        <a-col
          :span="12"
          style="text-align:right"
        >
          <a-button
            type="primary"
            icon="plus"
          >
            新增
          </a-button>

          &nbsp;
          <a-button icon="download">
            Download
          </a-button>
        </a-col>
      </a-row>
    </div>
  </wx-container>
</template>

<script lang="ts">
  import FilterForm from '../../../components/FilterForm/index.vue'
  import { Provide, Vue, Component } from 'vue-property-decorator'
@Component({
  components: {
    FilterForm: FilterForm
  }
})
  export default class BlogCateGory extends Vue {
  @Provide() expand: Boolean = false;
  @Provide() form: any = {};
  @Provide() count: Number = 4;

  created() {
    this.form = this.$form.createForm(this)
  }

  handleSearch() {
    console.log(2323)
  }
  handleReset() {}
  }
</script>

<style scoped>
</style>
