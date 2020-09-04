
<template>
  <a-modal
    :title="title"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleFormSubmit"
    @cancel="handleCancel"
  >
    <a-form
      ref="form"
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item
        label="名称"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 16 }"
      >
        <a-input
          v-decorator="[
            'name',
            {rules: [{ required: true, message: 'Please input your category name!' }]}
          ]"
        />
      </a-form-item>

      <a-form-item
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 16 }"
        label="Logo"
        extra="请上传png/jpg格式的图片"
      >
        <div v-if="fileBase">
          <img
            :src="fileBase"
            alt=""
            style="width:60px"
          >
        </div>
        <a-upload
          v-decorator="[
            'logo',
            {rules: [{ required: true, message: 'Please input your category logo!' }]}
          ]"
          name="logo"
          :file-list="fileList"
          :remove="handleRemove"
          :before-upload="beforeUpload"
        >
          <a-button>
            <a-icon type="upload" /> {{ title=='新增'?'Click to upload':'Click to Change' }}
          </a-button>
        </a-upload>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
  import { Provide, Vue, Component } from 'vue-property-decorator'
@Component({
  components: {}
})
  export default class WxModal extends Vue {
    @Provide() visible: Boolean = false
    @Provide() confirmLoading: Boolean = false;
    @Provide() form: any = null
    @Provide() fileList: Array<any> =[]
    @Provide() fileBase:any = ''
    @Provide() title:any = ''
    @Provide() edit:any = null
    handleCancel(): void {
      this.visible = false
    }
    show(data:any): void{
      this.form = this.$form.createForm(this)
      this.fileBase = ''
      this.visible = true
      this.title = '新增'
      if (data) {
        this.title = '编辑'
        this.edit = data
        this.$nextTick(() => {
          this.fileBase = data.imgUrl
          this.form.setFieldsValue({
            name: data.name,
            logo: [data.imgUrl]
          })
        })
      }
    }
    handleFormSubmit(): void {
      const form:any = this.$refs.form
      form.onSubmit()
    }
    handleSubmit(e:any) {
      e && e.preventDefault()
      this.form.validateFields((err:any, values:any) => {
        if (!err) {
         console.log('test')
        }
      })
    }
    isBase64(str:any) {
        if (str.indexOf('data:') !== -1 && str.indexOf('base64') !== -1) {
          return true
        } else {
          return false
        }
      }
     normFile(e:any) {
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    }
     handleRemove(file:any) {
      const index = this.fileList.indexOf(file)
      const newFileList = this.fileList.slice()
      newFileList.splice(index, 1)
      this.fileList = newFileList
    }
    beforeUpload(file:any) {
      var reader = new FileReader()

      var AllowImgFileSize = 2100000 // 上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败

      if (file) {
          // 将文件以Data URL形式读入页面
          reader.readAsDataURL(file)
          reader.onload = (e) => {
            // var ImgFileSize = reader.result.substring(reader.result.indexOf(",") + 1).length;//截取base64码部分（可选可不选，需要与后台沟通）
            if (AllowImgFileSize !== 0 && AllowImgFileSize < file.size) {
                  alert('上传失败，请上传不大于2M的图片！')
                  return
              } else {
                  // 执行上传操作
                 this.fileList = [file]
                 this.fileBase = reader ? reader.result : ''
              }
          }
        }
      return false
    }
  }
</script>

<style scoped>
</style>
