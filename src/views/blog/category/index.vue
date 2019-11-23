<template>
  <wx-container>
    <div>
      <a-spin :spinning="spinning">
        <a-row>
          <a-col
            class="cate-item"
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="6"
          >
            <div class="card-item dashed">
              <div
                class="card-item-add"
                @click="add"
              >
                <a-icon type="plus" />新增分类
              </div>
            </div>
          </a-col>
          <a-col
            v-for="item in categoryList"
            :key="item._id"
            class="cate-item"
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="6"
          >
            <div class="card-item">
              <div class="card-item-info">
                <div>
                  <h2 style="float:left">
                    {{ item.name }}
                  </h2>
                  <h5 style="float:right;color: rgba(0,0,0,.45);">
                    博客数量:{{ item.count }}
                  </h5>
                </div>
                <div class="clear-float" />
                <div class="item-img">
                  <img :src="item.imgUrl">
                </div>
              </div>
              <div class="card-footer">
                <div
                  class="footer-edit"
                  @click="toEdit(item)"
                >
                  编辑
                </div>
                <div class="footer-delete">
                  <a-popconfirm
                    title="Are you sure？"
                    ok-text="Yes"
                    cancel-text="No"
                    @confirm="toDelete(item._id)"
                  >
                    删除
                  </a-popconfirm>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
        <w-modal
          ref="modal"
          @refresh="refresh"
        />
      </a-spin>
    </div>
  </wx-container>
</template>

<script lang="ts">
  import { getBlogCategory, delCategory } from '../../../api/blogs'
  import Modal from './components/modal.vue'
  import { Provide, Vue, Component } from 'vue-property-decorator'
  @Component({
    components: {
       'w-modal': Modal
    }
  })
  export default class BlogCateGory extends Vue {
    @Provide() categoryList:any = [];
    @Provide() visible: Boolean = false;
    @Provide() spinning:Boolean = false

    mounted() {
      this.init()
    }
    init():void{
      this.spinning = true
       getBlogCategory()
        .then(result => {
          this.spinning = false
          this.categoryList = result
        })
        .catch(() => {
           this.spinning = false
        })
    }
    refresh(): void{
       this.init()
    }
    add(): void {
      const Modal: any = this.$refs.modal
      Modal.show()
    }
    toEdit(item:Object):void{
      const Modal: any = this.$refs.modal
      Modal.show(item)
    }
    toDelete(id:Number):void{
      delCategory(id)
      .then((result:any) => {
        this.$message.success('删除成功')
        this.init()
      }).catch(() => {

      })
    }
  }
</script>

<style scoped>
.cate-item {
  padding: 0 12px;
}
.card-item {
  background: #ffffff;
  height: 188px;
  border: 1px solid #e8e8e8;
  margin-bottom: 16px;
  overflow: hidden
}
.card-item.dashed {
  border: 1px dashed #e8e8e8;
}
.card-item.dashed:hover {
  border: 1px dashed var(--PC);
  cursor: pointer;
  color: var(--PC);
}
.card-item-add {
  text-align: center;
  line-height: 188px;
}
.card-item-info {
  padding: 16px;
}
.item-img {
  text-align: center;
  height: 60px;
}
.item-img img {
  height: 60px;
}
.clear-float {
  clear: both;
}

.card-footer {
  margin: 6px 1px 0 1px;
  height: 47px;
  background: #fafafa;
  border-top: 1px solid #e8e8e8;
}
.footer-edit {
  width: 50%;
  display: inline-block;
  height: 100%;
  text-align: center;
  line-height: 47px;
  border-right: 1px solid #e8e8e8;
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
}
.footer-delete {
  width: 50%;
  display: inline-block;
  height: 100%;
  line-height: 47px;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
}
</style>
