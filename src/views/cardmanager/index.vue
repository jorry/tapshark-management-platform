<template>
  <div class="app-container">
    
    <!-- <el-row style="margin-left: 330px;">
      <el-col :span="14">
        <el-input ref="inputValue" v-model="form.inputValue" placeholder="请输入email"></el-input>
      </el-col>
      <el-col :span="4" style="margin-left: 50px;">
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-col>
    </el-row> -->

    <el-table
      style="margin-left: 300px;margin-top: 30px;"
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
      <el-table-column label="创建时间" width="170" align="center">
        <template slot-scope="scope">
          {{ scope.row.create_time }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180px" align="center">
        <template slot-scope="scope">
          {{ scope.row.user_name }}
        </template>
      </el-table-column>
      <el-table-column label="卡号" align="center" width="395">
        <template slot-scope="scope">
          {{ scope.row.card_num }}
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="410" align="center">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
import { getCardManager ,searchCardManagerById} from '@/api/table'

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
      total: '',
      page: '',
      value: true,
      searchModel:{
        search:''
      },
      list: null,
      listLoading: true,
      form:{
        inputValue: ''
     },
    }
  },
  created() {
    this.getCardManager();
  },
  methods: {
    
    getCardManager() {
      this.listLoading = true
      getCardManager().then(response => {
        this.list = response.body

        this.listLoading = false
      })
    },
    onSubmit(){
      var seach = this.form.inputValue;
      searchCardManagerById(seach).then(response => {
        this.list = response.data.items
        this.listLoading = false
      });
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
