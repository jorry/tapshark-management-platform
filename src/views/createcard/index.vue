<template>
  <div class="app-container">
<!--     
    <el-row style="margin-left: 330px;">
      <el-col :span="14">
        <el-input ref="inputValue" v-model="form.inputValue" placeholder="请输入email"></el-input>
      </el-col>
      <el-col :span="4" style="margin-left: 50px;">
        <el-button type="primary" @click="onSearch">搜索</el-button>
      </el-col>
    </el-row> -->

    <el-table
      style="margin-left: 100px;margin-top: 30px;"
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
    
      <el-table-column align="center" label="ID" width="95" style="margin-top: 100px;">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="日期" width="180px" align="center">
        <template slot-scope="scope">
          {{ scope.row.created_at }}
        </template>
      </el-table-column>
      <el-table-column label="卡片数量" align="center" width="95">
        <template slot-scope="scope">
          {{ scope.row.card_count }}
        </template>
      </el-table-column>
      <el-table-column label="是否已制作" width="120" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.status }}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="410" align="center">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Actions" width="150">
        <template slot-scope="scope">
          
          <router-link :to="{path:'/example/createcardDetail/',query:{param1:scope.row.order_id}}">
            <el-button type="primary" size="small" icon="el-icon-edit">
              查看
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    
    </el-table>
  </div>
</template>

<script>
import { getCreateCardList,getCreateCardSearch } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
     form:{
      inputValue: ''
     },
      list: null,
      listLoading: true
    }
  },
  created() {
    this.getCreateCardList();
  },
  methods: {
    
    getCreateCardList() {
      console.log('111111111');
      this.listLoading = true
      getCreateCardList().then(response => {
        this.list = response.body
        this.listLoading = false
      })
    },
    onSearch(){
      this.listLoading = true
      getCreateCardSearch().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
<style scoped>
.line{
  text-align: center;
}.container {
  display: flex;
  justify-content: center;
}

.flex-container {
  display: flex;
  align-items: center;
}
