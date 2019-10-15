<template>
  <div class="container-view">
    <a-table
      :columns="columns"
      :data-source="datas"
      :loading="loading"
      :pagination="false"
    >
      <a
        slot="titles"
        slot-scope="text"
        href="javascript:;"
      >{{ text }}</a>
      <span slot="customTitle">
        <a-icon type="smile-o" /> Title</span>
      <span
        slot="likesCount"
        slot-scope="likesCount"
      >{{ likesCount }}</span>
      <span
        slot="tags"
        slot-scope="tags"
      >
        <a-tag
          v-for="tag in tags"
          :key="tag"
          color="blue"
        >{{ tag }}</a-tag>
      </span>
      <span
        slot="action"
        slot-scope="text, record"
      >
        <!--slot-scope="text, record" text,record 是一列的数据 -->
        <a
          href="javascript:;"
          @click="onEdit(record)"
        >Edit</a>
        <a-divider type="vertical" />
        <a-popconfirm
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </span>
    </a-table>
    <div style="text-align:right;padding-top:10px">
      <a-pagination
        v-model="nowpage"
        :total="total"
        @change="pageChange"
      />
    </div>
  </div>
</template>
<script>
  import globalMixin from '@/mixins/global.js'
  import {
    getAllBlogs, deleteBlog
  } from '@/api/blogs'
  const columns = [{
    dataIndex: 'titles',
    key: 'titles',
    slots: {
      title: 'customTitle'
    },
    scopedSlots: {
      customRender: 'titles'
    }
  }, {
    title: '观看数',
    dataIndex: 'views',
    key: 'views'
  }, {
    title: '点赞数量',
    dataIndex: 'likes',
    key: 'likes',
    scopedSlots: {
      customRender: 'likesCount'
    }
  }, {
    title: '发布时间',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: '分类',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: {
      customRender: 'tags'
    }
  }, {
    title: 'Action',
    key: 'action',
    scopedSlots: {
      customRender: 'action'
    }
  }]

  export default {
    mixins: [globalMixin],
    data() {
      return {
        columns,
        datas: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.loading = true
        getAllBlogs({
          nowpage: this.nowpage,
          pagesize: this.pagesize
        }).then(res => {
          this.loading = false
          this.total = res.count
          this.datas = res.blogs.map(blog => {
            return {
              key: blog._id,
              titles: blog.title,
              views: blog.views,
              likes: blog.likes,
              address: blog.date,
              tags: [blog.classify]
            }
          })
        }).catch(() => {
          this.loading = false
        })
      },
      pageChange(page, size) {
        this.nowpage = page
        this.init()
      },
      onDelete(id) {
        deleteBlog(id).then(res => {
          this.$message.success(res.msg)
          this.init()
        })
      },
      onEdit(row) {
        this.$router.push({ path: '/blog/create', query: { id: row.key }})
      }
    }
  }
</script>

<style scoped>

</style>
