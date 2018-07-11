<template>
    <div class="meeting">     
        <el-tabs v-model="activeName" >
            <el-tab-pane label="我的会议" name="myMeeting">
                <el-row>
                    <el-col>
                      <div class="qureyform">
                        <el-form :inline="true" :model="qureyData" class="demo-form-inline" size="small">
                            <el-form-item label="会议室名称：">
                                <el-input v-model="qureyData.name" placeholder="会议室名称"></el-input>
                            </el-form-item>
                        <el-form-item label="会议室位置：">
                           <el-select v-model="qureyData.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" >查询</el-button>
                        </el-form-item>
                        </el-form>
                      </div>
                    </el-col>
                </el-row>
                <hr>
                <el-row v-for="(item, idx) in meetings" :key="idx">
                    <el-col>
                        <div class="meetings">
                            <el-card shadow="hover" :body-style="{ padding: '0px',margin:'20px' }">
                                 <div slot="header" class="clearfix">  
                                       <strong>{{item.meetingName}}</strong>
                                       <span class="miniText">会议时间：{{item.meetingTime}}</span>
                                       <span class="miniText">会议室：{{item.meetingRoom}}</span>  
                                       <el-tag type="success" style="float: right;">已完成</el-tag>                                   
                                 </div>
                                    <el-row>
                                    <el-col :span="18">
                                        <el-row>
                                            <el-col :span="3">
                                                 <img :src="item.img" class="image">                                               
                                            </el-col>
                                            <el-col :span="21">
                                                 <p class="miniText"> 与会地点：{{ item.meetingsAddress }}</p>
                                                 <p class="miniText">
                                                     <span>发起人:{{item.initiator}}</span>
                                                     <span>主持人:{{item.host}}</span>
                                                     <span>参与人:{{item.personCount}}人</span>
                                                 </p> 
                                                 <p>
                                                     <el-tag size="small" type="info" v-for="(r,id) in item.resource" :key="id" >{{r}}</el-tag> 
                                                 </p>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="6">
                                        <div>                                                                  
                                            <el-button   type="primary" icon="el-icon-tickets">详细信息</el-button>
                                        </div>
                                    </el-col>
                                  </el-row>                                    
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="预约会议" name="subscribe">
                <el-form ref="form" :model="formMeeting" label-width="100px">
                      <el-form-item label="会议室名称">
                           <el-input v-model="formMeeting.name"></el-input>
                      </el-form-item>
                       <el-form-item label="会议室图片">
                           <el-input v-model="formMeeting.img"></el-input>
                      </el-form-item>
                      <el-form-item label="会议室地点">
                           <el-input v-model="formMeeting.address"></el-input>
                      </el-form-item>
                      <el-form-item label=" 坐 席 人 数">
                           <el-input-number v-model="formMeeting.seats"  :min="1" :max="100" label="描述文字"></el-input-number>
                      </el-form-item>
                      <el-form-item label="会议室配置">
                            <el-select v-model="formMeeting.resource" multiple placeholder="请选择">
                                    <el-option  v-for="item in formMeeting"  :key="item.value"  :label="item.label"  :value="item.value"></el-option>
                            </el-select>
                      </el-form-item>
                      <el-form-item label="管理员">
                             <el-input v-model="formMeeting.administrator"></el-input>
                      </el-form-item>
                       <el-form-item label="开启审批">
                           <el-switch  v-model="formMeeting.approval"  active-text="开" inactive-text="关" active-color="#13ce66"  inactive-color="#ff4949"></el-switch>
                      </el-form-item>
                      <el-form-item>
                            <el-button type="primary" >保存</el-button>
                            <el-button >重置</el-button>
                      </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
   </div> 
</template>
<script>
export default {
  data() {
    return {
      activeName: "myMeeting",
      formMeeting: {
        roomId: "",
        name: "",
        img: "",
        address: "",
        seats: 1,
        resource: [],
        administrator: "",
        approval: false
      },
      qureyData: { name: "", region: "" },
      meetings: [
        {
          meetingName: "关于收银系统会议",
          img:
            "http://d.hiphotos.baidu.com/image/pic/item/48540923dd54564e39103dcfbfde9c82d0584fcb.jpg",
          meetingTime: "2018-07-08 22:50 至 2018-07-08 23:30",
          meetingRoom: "M5会议室",
          meetingsAddress: "高朋大道3号东方希望大厦709",
          initiator: "高金龙",
          host: "黄娟",
          personCount: 12,
          resource: ["白板", "投影仪"],
          status:1
        }
      ]
    };
  }
};
</script>
<style scoped>
.meeting {
  margin: 10px 20px 10px 20px;
  padding: 10px 20px 10px 20px;
  background-color: #f2f6fc;
}
.meetings {
  margin: 20px;
}
hr {
  border: 0;
  background-color: #dcdfe6;
  height: 1px;
}
span,
p {
  font-size: 12px;
  color: #606266;
  margin-right: 5px;
}
.image {
  width: 80px;
  height: 80px;
  border: 0px;
}
</style>
