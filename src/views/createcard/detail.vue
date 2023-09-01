<template>
  <el-row>
    <div>
    <el-col :span="9" >
      <!-- 左侧图片区域 -->
      <!-- <img src='@/assets/404_images/default_card.png' alt="Image" class="custom-image" /> -->
      <!-- <div class="chose-card">
                <img class="card-bg" src="http://47.92.215.156/lanse.png" alt="">
                <span class="card-name">jorry</span>=
                <img class="company-logo" src="http://47.92.215.156/heise.png" alt="">
                <img class="other-logo" src="http://47.92.215.156/yinse.png" alt="">
       </div> -->

        <!-- <div class="name">jorry</div>
        <div class="logo">
          <img src='@/assets/404_images/default_card.png' alt="Logo">
        </div>
        <div class="small-logo">
           <img src='@/assets/404_images/default_card.png' alt="Small Logo">
        </div> -->
    </el-col>
  </div>
  
    <el-col :span="9" style="margin-top: 50px;">
      <el-row class="custom-content">
        <el-col :span="24" class="custom-section">
          <h2>联系方式</h2>
          <div class="controls">
            <el-lable >email</el-lable>
            <el-lable v-model="addressModel.email" style="color:crimson">{{ addressModel.email }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >first_name</el-lable>
            <el-lable v-model="addressModel.first_name" style="color:crimson">{{ addressModel.first_name }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >last_name</el-lable>
            <el-lable v-model="addressModel.last_name" style="color:crimson">{{ addressModel.last_name }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >company</el-lable>
            <el-lable v-model="addressModel.company" style="color:crimson">{{ addressModel.company }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >full_address</el-lable>
            <el-lable v-model="addressModel.full_address" style="color:crimson">{{ addressModel.full_address }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >address_line</el-lable>
            <el-lable v-model="addressModel.address_line" style="color:crimson">{{ addressModel.address_line }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >city</el-lable>
            <el-lable v-model="addressModel.city" style="color:crimson">{{ addressModel.city }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >zip_code</el-lable>
            <el-lable v-model="addressModel.zip_code" style="color:crimson">{{ addressModel.zip_code }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >state</el-lable>
            <el-lable v-model="addressModel.state" style="color:crimson">{{ addressModel.state }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >phone_number</el-lable>
            <el-lable v-model="addressModel.phone_number" style="color:crimson">{{ addressModel.phone_number }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >vat</el-lable>
            <el-lable v-model="addressModel.vat" style="color:crimson">{{ addressModel.vat }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >country</el-lable>
            <el-lable v-model="addressModel.country" style="color:crimson">{{ addressModel.country }}</el-lable>
          </div>
        </el-col>
        <el-col :span="24" class="custom-section">
          <h2>卡片信息</h2>
          <div class="controls">
            <el-lable >卡片材质</el-lable>
            <el-lable v-model="cardModel.cardLink" style="color:crimson">{{cardModel.cardLink}}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >卡片数量 X</el-lable>
            <el-lable v-model="cardModel.cardCount" style="color:crimson">{{cardModel.cardCount}}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            
            <el-lable v-model="cardModel.cardCount">卡片链接</el-lable>
          </div>
          <ul id="example-1">
              <li v-for="item in cardLinks" :key="item.link" style="margin-top: 25px;color:crimson;">
                {{ item.link }}
              </li>
          </ul>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >公司logo</el-lable>
            <el-lable v-model="cardModel.cardCompanyLogo" style="color:crimson">{{ cardModel.cardCompanyLogo }}</el-lable>
          </div>
          <div class="controls" style="margin-top: 20px;">
            <el-lable >个人logo</el-lable>
            <el-lable style="color:crimson">{{ cardModel.cardUserLogo }}</el-lable>
          </div>
          
          <div class="controls" style="margin-top: 20px;">
            <el-lable >卡片用户名</el-lable>
            <el-lable v-model="cardModel.cardUserName" style="color:crimson">{{ cardModel.cardUserName }}</el-lable>
          </div>
          
          <div class="controls" style="margin-top: 20px;">
            <el-lable >用户名的字体颜色</el-lable>
            <el-lable v-model="cardModel.cardUserFountColor" style="color:crimson">{{ cardModel.cardUserFountColor }}</el-lable>
          </div>

          <div class="controls" style="margin-top: 20px;">
            <el-lable >卡片背面二维码链接</el-lable>
            <el-lable style="color:crimson">和卡片链接保持一致</el-lable>
          </div>

      
          
          <el-button  type="primary" style="width:100%;margin-bottom:30px; margin-top: 30px;" @click.native.prevent="update">制卡完成</el-button>

        </el-col>
      </el-row>
    </el-col>

  </el-row>
</template>
<style>
.custom-image {
  margin-left: 100px;
  margin-top: 200px;
  width: 400px; /* 设置图片宽度 */
  height: 250px; /* 设置图片高度 */
}.custom-content {
  padding: 20px;
}.chose-cont{
	width: 100%;
}

.custom-section {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}.card-name{
	font-size: 19px;
	font-weight: 400;
	color: #FFFFFF;
	line-height: 28px;
	position: absolute;
	left: 16px;
	top: 16px;
	display: block;
	max-width: 224px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}.card {
  width: 400px;
  margin-left: 300px;
  height: 300px;
  background-image: url('http://tapshark.co/image/lanse.png'); /* 添加背景图片 */
  background-size: cover;
  background-position: center;
  position: relative;
}

.name {
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: bold;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}
.wap-cont{
	width: 100%;
	min-height: 100vh;
	padding: 1rem 0.3rem 0;
	box-sizing: border-box;

}
.logo img {
  max-width: 100%;
  max-height: 100%;
}
.card-bg{
	width: 420px;
	height: 100%;
	display: block;
}
.company-logo{
	max-width: 235px;
	display: block;
	position: absolute;
	left: 30%;
	top: 50%;
	transform: translate(-50%,-50%);
}.other-logo{
	max-width: 56px;
	max-height: 22px;
	display: block;
	position: absolute;
	right: 16px;
	bottom: 16px;
}
.chose-card{
	width: 400;
	height: 243px;
  margin-left: 100px;
  margin-top: 200px;
	position: relative;
	overflow: hidden;

}
.small-logo {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.small-logo img {
  width: 30px;
  height: 30px;
}
</style>
<script>
import { getCardDetail,cardDetailByOrderIdUpdate } from '@/api/table'
export default {
  data() {
    return {
      form:{
        orderId : ''
      },
      items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
      cardLinks:[
      { link: '' }
      ],
      contactModel:{
          email: '',
          shipTo : '',
          Tel : ''
      },
      addressModel:{
        email: '',
        first_name : '',
        last_name : '',
        company : '',
        full_address: '',
        address_line:'',
        city:'',
        state:'',
        zip_code:'',
        phone_number:'',
        vat:'',
        country:'',
      },
      cardModel:{
          cardType: '',
          cardLink : '',
          cardCompanyLogo : '',
          cardUserFountColor : '',
          cardUserLogo: '',
          cardUserName:'',
          cardCount:''
      }
    };
  }
  ,created(){
    this.form.orderId = this.$route.query.param1;
    this.fetchData();

  },methods:{
    update(){
      cardDetailByOrderIdUpdate(this.form).then(response => {
          alert('订单完成')
      })
    }
   ,
    fetchData(){
      getCardDetail(this.form).then(response => {
        this.cardModel.cardCompanyLogo = response.body.company_logo
        this.cardModel.cardUserLogo = response.body.user_logo,
        this.cardModel.cardUserName = response.body.user_name,
        this.cardModel.cardUserFountColor = response.body.font_color,
        this.cardModel.cardCount = response.count,
        this.cardModel.cardLink = response.body.card_material_url,
        this.cardLinks = response.cardLink,
        
        this.addressModel.email = response.body.email,
        this.addressModel.first_name = response.body.first_name,
        this.addressModel.last_name = response.body.last_name,
        this.addressModel.company = response.body.company,
        this.addressModel.full_address = response.body.full_address,
        this.addressModel.address_line = response.body.address_line,
        this.addressModel.city = response.body.city,
        this.addressModel.state = response.body.state,
        this.addressModel.zip_code = response.body.zip_code,
        this.addressModel.phone_number = response.body.phone_number,
        this.addressModel.vat = response.body.vat,
        this.addressModel.country = response.body.country,

        this.listLoading = false
      })
    }
  }
};
</script>