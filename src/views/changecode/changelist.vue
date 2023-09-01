<template>
  <div class="app-container">

    <!-- <el-row style="margin-left: 330px;">
      <el-col :span="14">
        <el-input ref="inputValue" v-model="form.inputValue" placeholder="请输入email"></el-input>
      </el-col>
      <el-col :span="4" style="margin-left: 50px;">
        <el-button type="primary" @click="onSearch">搜索</el-button>
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
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="支付码" width="310" align="center">
        <template slot-scope="scope">
          {{ scope.row.discountCode }}
        </template>
      </el-table-column>
      <el-table-column label="Email" align="center" width="350">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column label="金额" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.payMonney }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="160" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
    
    </el-table>
  </div>
</template>

<script>
import { getRechargeCodeList,getRechargeCodeSearch } from '@/api/table'

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
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getRechargeCodeList().then(response => {
        this.list = response.body
        this.listLoading = false
      })
    },
    onSearch(){
      this.listLoading = true
      getRechargeCodeSearch().then(response => {
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