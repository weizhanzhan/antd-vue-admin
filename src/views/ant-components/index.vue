
<template>
<div class="container-view">
    <div class="locale-components" > <!-- HACK: just refresh in production environment-->
        <div class="example">
          <a-pagination :defaultCurrent="1" :total="50" showSizeChanger />
        </div>
        <div class="example">
          <a-select showSearch style="width: 200px">
            <a-select-option value="jack">jack</a-select-option>
            <a-select-option value="lucy">lucy</a-select-option>
          </a-select>
          <a-date-picker />
          <a-time-picker />
          <a-range-picker style=" width: 200px " />
        </div>
        <div class="example">
          <a-button type="primary" @click="showModal">Show Modal</a-button>
          <a-button @click="info">Show info</a-button>
          <a-button @click="confirm">Show confirm</a-button>
          <a-popconfirm title="Question?">
            <a href="#">Click to confirm</a>
          </a-popconfirm>
        </div>
        <div className="example">
          <a-transfer
            :dataSource="[]"
            showSearch
            :targetKeys="[]"
            :render="item => item.title"
          />
        </div>
        <div :style="{ width: '319px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
          <a-calendar :fullscreen="false"  />
        </div>
        <a-modal title="Locale Modal" v-model="visible">
          <p>Locale Modal</p>
        </a-modal>
      </div>
  <!-- </a-locale-provider> -->
</div>
</template>
<script>

export default {
  data() {
    return {
      visible: false,
      locale: null,
    }
  },
  methods: {
   
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    info() {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    },
    confirm() {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    },
    changeLocale(e) {

    },
  }
}
</script>

<style scoped>
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
</style>