<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="输入邮箱">
        <el-input v-model="form.email" />
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
        <el-input v-model="form.payMonney" />
      </el-form-item>
      
      <el-form-item>
        <el-button v-show="isVisible" type="primary" @click="onSubmit">生成支付码</el-button>
        <el-form-item  v-model="form.rechangeCdoe">{{ form.rechangeCdoe }}</el-form-item >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { createRechargeCode } from '@/api/table'

export default {
  data() {
    return {
      isVisible : true,
      form: {
        email: '',
        region: '1',
        rechangeCdoe:'',
        payMonney: ''
      }
    }
  },
  created() {
  },
  computed(){},
  methods: {
    onSubmit() {
      if(this.form.email === '' || this.form.email === null){
        this.$message('请填写邮件')
        return;
      }
      if(this.form.payMonney === '' || this.form.email === null){
        this.$message('请填写支付金额')
        return;
      }

      createRechargeCode(this.form).then(response => {
        this.form.rechangeCdoe = response.body;
        this.isVisible = false;
      })

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

