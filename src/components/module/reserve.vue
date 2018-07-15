<template>
  <div>
    <div class="topNav">
        <el-row>
            <el-col :span="2">
                <router-link tag="el-button" to="/">返回</router-link>
            </el-col>
            <el-col :span="20">
                &nbsp;
            </el-col>
            <el-col :span="2">
                <el-button type="primary">发起会议</el-button>
            </el-col>
        </el-row>
    </div>
    <div class="mainDiv">
        <div class="mainTop">
            <el-row>
                <el-col :span="2" class="mainTopLeft">                  
                     <img :src="meetingRooms.img" />                                      
                </el-col>
                <el-col :span="6" class="mainTopLeft">
                  <div>
                      <strong>{{meetingRooms.name}}</strong>
                      <p>坐席：{{meetingRooms.seats}}人</p>
                      <p>地点：{{meetingRooms.address}}</p>
                   </div>
                </el-col>
                <el-col :span="8">&nbsp;</el-col>
                <el-col :span="8"  class="mainTopright">
                   <p>
                     <el-tag size="mini" type="info" v-for="(item,id) in meetingRooms.resource" :key="id">{{item}}</el-tag>
                    </p>
                   <p>会议日期：2018-07-13 08:00 至 2018-07-13 10:00</p>
                   <p>会议时长：120分钟</p>
                </el-col>
            </el-row>
        </div>
        <div class="mainDate">
           <el-tabs value="today" :stretch="true" >
                               <el-tab-pane label="今天" name="today">
                                   <div class="tab-container">
                                       <div>
                                         ddd
                                       </div>
                                   </div>
                               </el-tab-pane>
                               <el-tab-pane label="明天" name="second">
                                   <div class="tab-container">
                                       ddd
                                   </div>
                               </el-tab-pane>
                               <el-tab-pane label="后天" name="third">
                                   <div class="tab-container">
                                       ddd
                                   </div>
                               </el-tab-pane>
                               <el-tab-pane label="2018-07-12" name="fourth">
                                   <div class="tab-container">
                                       ddd
                                   </div>
                               </el-tab-pane>
             </el-tabs>
        </div>
        <div>
          <el-form ref="form" :model="formData" label-width="100px" size="small">
            <table >
              <tr>
                <td>
                    <el-form-item label="主持人"> <el-input v-model="formData.name" placeholder="请输入会议主题"></el-input></el-form-item>
                </td>
                <td>
                    <el-form-item label="会议主题"> <el-input v-model="formData.name" placeholder="请输入会议主题"></el-input></el-form-item>
                </td>
              </tr>
              <tr>
                <td>
                   <el-form-item label="参会人"> <el-input v-model="formData.name" placeholder="请输入会议主题"></el-input></el-form-item>
                </td>
                <td>
                  <el-form-item label="会议描述"> <el-input v-model="formData.name" placeholder="请输入会议描述内容"></el-input></el-form-item>
                </td>
              </tr>
              <tr>
                <td>
                   <el-form-item label="抄送人"> <el-input v-model="formData.name" placeholder="请输入会议主题"></el-input></el-form-item>
                </td>
                <td rowspan="4">
                   <el-form-item label="会议主题" prop="desc"><el-input type="textarea" v-model="formData.desc" :rows="10"></el-input></el-form-item>

                </td>
              </tr>
              <tr>
                <td>
                   <el-form-item label="通 知" >
                     <el-select v-model="meetingRooms.dd" placeholder="请选择"><el-option label="通知"  value="通知"></el-option></el-select>
                   </el-form-item>
                </td>              
              </tr>
              <tr>
                <td>
                  <el-form-item label="提 醒" >
                     <el-select v-model="meetingRooms.dd" placeholder="请选择"><el-option label="通知"  value="通知"></el-option></el-select>
                   </el-form-item>  
                </td>               
              </tr>
              <tr>
                <td>
                  <el-form-item label="参会人数">
                           <el-input-number v-model="formData.count"  :min="1" :max="100" label="描述文字"></el-input-number>
                  </el-form-item>
                </td>               
              </tr>
            </table>
          </el-form>
        </div>    
    </div>
  </div>   
</template>
<script>
export default {
  data() {
    return {
      roomId: "",
      meetingRooms: {
        roomId: "4222068e-3423-4f0a-a2ae-ce230c6fb888",
        name: "M5会议室",
        img:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530881310671&di=df8b6752485dd96ae66569591d1d5c8d&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fa8773912b31bb051d18c53de3a7adab44bede098.jpg",
        address: "交子大道300号ICP3栋1206号",
        seats: 10,
        resource: ["空调", "白板"],
        administrator: "高金龙",
        approval: true
      },
      formData: {}
    };
  },
  mounted: function() {
    this.roomId = this.$route.params.meetingRoomId;
  }
};
</script>
<style scoped>
.mainDiv {
  padding: 20px;
  background-color: #fff;
  height: 100%;
}
.topNav {
  margin: -20px -20px 10px -20px;
  padding: 10px 20px 0px 20px;
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
  height: 50px;
}
.mainTop {
  height: 80px;
  border: #dcdfe6 solid 1px;
  padding: 10px;
  text-align: right;
}
.mainTopLeft {
  text-align: left;
}
.mainTopright {
  text-align: right;
}
.RoomTitle {
  font-size: 18px;
}
.mainTop p {
  line-height: 90%;
  font-size: 12px;
  color: #999;
}
img {
  height: 80px;
  width: 80px;
  border: none;
}
.mainDate {
  border: #dcdfe6 solid 1px;
  border-top: none;
  border-bottom: none;
  padding: 0px 0px 20px 0px;
  height: 250px;
}
table tr td {
  border: #dcdfe6 solid 1px;
  padding-top: 15px;
  padding-right: 30px;
  
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 13px;
}
</style>

