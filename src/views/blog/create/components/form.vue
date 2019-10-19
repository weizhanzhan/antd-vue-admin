<template>
  <a-form
    :form="form"
    class="ant-advanced-search-form"
    @submit="handleSubmit"
  >
    <a-row :gutter="24">
      <a-col
        :span="8"
      >
        <a-form-item
          label="标题"
        >
          <a-input
            v-decorator="[
              'title',
              {rules: [{ required: true, message: '标题不能为空!' }]}
            ]"
          />
        </a-form-item>
      </a-col>
      <a-col
        :span="8"
      >
        <a-form-item
          label="分类"
        >
          <a-select
            v-decorator="[
              'categoryId',
              {rules: [{ required: true, message: '请选择分类信息!' }]}
            ]"
            placeholder="请选择分类信息"
          >
            <a-select-option
              v-for="c in category"
              :key="c._id"
              :value="c._id"
            >
              {{ c.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <mavon-editor
      ref="md"
      v-model="handbook"
      @imgAdd="imgAdd"
    />

    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
      >
        提交
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'

  import { uploadBlog, baseToImg, getBlogById, editBlog, getBlogCategory } from '../../../../api/blogs'
  import qs from 'qs'
  import 'mavon-editor/dist/css/index.css'
  export default {
    components: { mavonEditor },
    props: {
      id: String
    },
    data() {
      return {
        form: this.$form.createForm(this),
        handbook: '',
        classify: ['Vue.js', 'React.js', 'Angular', 'Python', 'Javascript', 'Html5', 'NodeJs', 'Css', 'Plan'],
        category: []
      }
    },
    mounted() {
      this.getBlogCategory()
      if (this.id) { this.getEditBlog() }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        this.form.validateFields((err, values) => {
          if (!err) {
            if (!this.handbook) { this.$message.error('博客内容不能为空') } else {
              if (this.id) { this.doEdit(values) } else { this.doAdd(values) }
            }
          }
        })
      },
      async imgAdd(pos, $file) { // base转在线地址
        const res = await baseToImg({ url: $file.miniurl, name: $file.name })
        const url = res.url
        this.$refs.md.$img2Url(pos, url)
      },
      doAdd(values) {
        const blog = { ...values }
        blog.author = 'zhanwei'
        blog.content = this.handbook

        uploadBlog(qs.stringify(blog))
          .then(res => {
            this.$message.success(res.msg.success)
          })
          .catch(err => {
            this.$message.error(err)
          })
      },
      doEdit(values) {
        const blog = { ...values }
        blog.author = 'zhanwei'
        blog.content = this.handbook
        editBlog(this.id, blog)
          .then(res => {
            this.$message.success('修改成功！')
          })
          .catch(err => {
            this.$message.error(err)
          })
      },
      getBlogCategory() {
        getBlogCategory()
          .then((result) => {
            this.category = result
          }).catch(() => {

          })
      },
      getEditBlog() {
        getBlogById(this.id)
          .then(res => {
            this.form.setFieldsValue({
              'title': res.title,
              'categoryId': res.category
            })
            this.handbook = res.content
          })
          .catch(err => {
            this.$message.error(err)
          })
      }
    }
  }
</script>
<style lang="scss">
.v-note-wrapper{
  z-index: 100 !important;
  min-height: 600px !important;
}

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}

#components-form-demo-advanced-search .ant-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
.v-note-wrapper .v-note-panel.shadow{
  border: 1px solid #e0e0e0 !important;
  box-shadow: none !important;
}
.v-note-wrapper .v-note-op.shadow{
  border: 1px solid #e0e0e0 !important;
  box-shadow: none !important;
}
</style>
