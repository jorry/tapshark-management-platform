<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="输入邮箱">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="卡片数量" >
        <el-select ref="mySelectCardCount" v-model="form.region"  placeholder="please select your zone">
          <el-option label="1张卡片" value="1" />
          <el-option label="2张卡片" value="2" />
          <el-option label="3张卡片" value="3" />
          <el-option label="4张卡片" value="4" />
          <el-option label="5张卡片" value="5" />
          <el-option label="6张卡片" value="6" />
        </el-select>
      </el-form-item>

      <el-form-item label="支付金额">
        <el-input v-model="form.name" />
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">生成支付码</el-button>
        <el-form-item  v-model="form.rechangeCdoe">{{ form.rechangeCdoe }}</el-form-item >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '1张卡片',
        date1: '',
        date2: '',
        rechangeCdoe:'',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message(this.$refs.mySelectCardCount.value)
      this.form.rechangeCdoe = 1111;
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}.el-form-item-center {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}

</style>

