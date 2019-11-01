<template>
  <div>
    <div class="wz-body ">
      <FilterForm>
        <a-form
          class="ant-advanced-search-form"
          :form="form"
          @submit="handleSearch"
        >
          <a-row :gutter="24">
            <a-col
              v-for="i in 10"
              :key="i"
              :span="8"
              :style="{ display: i < count ? 'block' : 'none' }"
            >
              <a-form-item :label="`Field ${i}`">
                <a-input
                  v-decorator="[
                    `field-${i}`,
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Input something!',
                        },
                      ],
                    },
                  ]"
                  placeholder="placeholder"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col
              :span="24"
              :style="{ textAlign: 'right' }"
            >
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
              <a
                :style="{ marginLeft: '8px', fontSize: '12px' }"
                @click="toggle"
              >
                Collapse
                <a-icon :type="expand ? 'up' : 'down'" />
              </a>
            </a-col>
          </a-row>
        </a-form>
      </FilterForm>
    </div>
    <div class="wz-body m_t_16">
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
  </div>
</template>

<script lang="ts">
  import FilterForm from '../../../components/FilterForm/index.vue';
  import { Provide, Vue, Component } from 'vue-property-decorator';
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
  toggle() {}
  handleSearch() {}
  handleReset() {}
  }
</script>

<style scoped>
</style>
