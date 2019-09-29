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
  import { setCategoryBaseToImg, editCategory, addCategory } from '../../../../api/blogs'
  import { Provide, Vue, Component } from 'vue-property-decorator'

  @Component
  export default class Modal extends Vue {
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
          console.log('Received values of form: ', values)
          if (this.title === '新增') {
            const { logo: { file }, name } = values
            const fileSplit = file.name.split('.')
            const type = fileSplit[fileSplit.length - 1]
            addCategory({ base: this.fileBase, fileName: name + '.' + type, name })
            .then((result) => {
              this.visible = false
              this.$message.success('添加成功')
              this.$emit('refresh')
            }).catch(() => {
            })
          } else {
            const { logo, name } = values
            const post:any = { name }
            if (Array.isArray(logo)) { // 为数组的时候 是自己编辑赋值的 没有通过上传
              const img = logo[0]
              post.imgUrl = img
            } else { // 通过上传得到的对象是object
              const { file } = logo
              const fileSplit = file.name.split('.')
              const type = fileSplit[fileSplit.length - 1]
              post.base = this.fileBase
              post.fileName = name + '.' + type
            }
            editCategory(this.edit._id, post)
            .then((result) => {
              this.visible = false
              this.$message.success('编辑成功')
              this.$emit('refresh')
            }).catch(() => {

            })
            console.log(post)
          }
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
      console.log('Upload event:', e)
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
            console.log(file)
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
  // handleSelectChange(value:any) {
  //   console.log(value)
  //   this.form.setFieldsValue({
  //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
  //   })
  // }
  }
</script>

<style lang="scss" scoped>

</style>
