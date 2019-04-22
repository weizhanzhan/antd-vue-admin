<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
    class="create-form"
  >
    <a-form-item
      label="标题"
      :label-col="{ span: 3 }"
      :wrapper-col="{ span: 10 }"
    >
      <a-input
        v-decorator="[
          'title',
          {rules: [{ required: true, message: '标题不能为空!' }]}
        ]"
      />
    </a-form-item>
    <a-form-item
      label="分类"
      :label-col="{ span: 3 }"
      :wrapper-col="{ span: 10 }"
    >
      <a-select
        v-decorator="[
          'classify',
          {rules: [{ required: true, message: '请选择分类信息!' }]}
        ]"
        placeholder="请选择分类信息"
      >
        <a-select-option v-for="c in classify" :key="c" :value="c" >
          {{c}}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 17, offset: 3 }">
         <mavon-editor ref="md"  v-model="handbook" @imgAdd="imgAdd"/>
    </a-form-item>
    <a-form-item
      :wrapper-col="{ span: 12, offset: 3 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>
  
  </a-form>
</template>

<script>
import { mavonEditor  } from 'mavon-editor';
import { uploadBlog, baseToImg ,getBlogById,editBlog} from '../../../../api/blog.js'
import qs from 'qs';
import 'mavon-editor/dist/css/index.css';
export default {
  props:{
    id:String
  },
  data () {
    return {
      form: this.$form.createForm(this),
      //:toolbars="markdownOption"
      markdownOption: {
          // bold: true, // 粗体
      },
      handbook: "",
      classify:['Vue.js','React.js','Angular','Python','Javascript','Html5','NodeJs','Css']
    };
  },
  components:{ mavonEditor },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          if(!this.handbook)
            this.$message.error('博客内容不能为空')
          else{
            if(this.id)
              this.doEdit(values)
            else
              this.doAdd(values)
          }
          
        }
      });
    },
    async imgAdd(pos, $file) { //base转在线地址
      let res = await baseToImg({url:$file.miniurl,name: $file.name})
      let url = res.url
      this.$refs.md.$img2Url(pos,url)
    },
    doAdd(values){
        let blog = {...values}
        blog.author = 'zhanwei'
        blog.content = this.handbook
        uploadBlog(qs.stringify(blog))
          .then(res => {
            this.$message.success(res.msg)
          })
          .error(err => {
            this.$message.error(err)
          })
    },
    doEdit(values){
      let blog = {...values}
      blog.author = 'zhanwei'
      blog.content = this.handbook
      editBlog(this.id,blog)
        .then(res=>{
          this.$message.success('修改成功！')
        })
        .catch(err =>{
           this.$message.error(err)
        })
    },
    getEditBlog(){
      getBlogById(this.id)
        .then(res=>{
            this.form.setFieldsValue({
              'title':res.title,
              'classify':res.classify
            })
            this.handbook = res.content
        })
        .catch(err=>{
           this.$message.error(err)
        })
    }
  },
  mounted(){
    if(this.id)
      this.getEditBlog()
  }
};
</script>
<style lang="scss">
.create-form{
  .v-note-wrapper{
    z-index: 100;
  }
}  
</style>