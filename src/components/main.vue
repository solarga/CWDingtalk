<template>
    <div>
        <div class="header">
            <el-row>
                <el-col>
                    <el-form :inline="true" :model="qureyData" class="demo-form-inline" size="small">
                            <el-form-item label="会议室名称：">
                                <el-input v-model="qureyData.name" placeholder="会议室名称"></el-input>
                            </el-form-item>
                        <el-form-item label="会议室位置：">
                           <el-select v-model="qureyData.region" placeholder="位置">
                                <el-option label="倍特办公区" value="shanghai"></el-option>
                                <el-option label="M3办公区" value="beijing"></el-option>
                                <el-option label="M4办公区" value="beijing"></el-option>
                                <el-option label="L1办公区" value="beijing"></el-option>
                                <el-option label="誉峰会所办公区" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">筛选</el-button>
                        </el-form-item>
                        </el-form>
                </el-col>
            </el-row>
        </div>
        <div class="body">
            <div class="container"  v-for="(item,id) in meetingRooms" :key="id">
                <el-row>
                <el-col :span="8" class="leftRow">
                    <el-row>
                        <el-col :span="8">
                            <img :src="item.img" class="meetingImg">
                        </el-col>
                        <el-col :span="16">
                                <span>{{item.name}}</span>
                                <span class="miniText"> 坐席{{ item.seats }}人</span> 
                                <p class="miniText">{{item.address}}</p>
                                <p>
                                     <el-tag class="tags" size="mini" type="info" v-for="(r,id) in item.resource" :key="id" >{{r}}</el-tag> 
                                </p>
                        </el-col>
     
                    </el-row>
                    <el-row>
                        <router-link tag="el-button" :to="'/main/reserve/'+item.roomId" >立即预定</router-link>
                    </el-row>

                </el-col>
                <el-col :span="16" >
                    <div class="mainRow">
                        <el-tabs value="today" :stretch="true">
                               <el-tab-pane label="今天" name="today">
                                   <div class="tab-container">
                                       <div></div>
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
                </el-col>
               </el-row>  
            </div>       
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "today",
      qureyData: {},
       meetingRooms: [
        {
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
        {
          roomId: "372e3d28-3e3b-4281-8310-a052f9b75d52",
          name: "世家会议室",
          img:
            "http://d.hiphotos.baidu.com/image/pic/item/48540923dd54564e39103dcfbfde9c82d0584fcb.jpg",
          address: "青龙街51号倍特.康派大厦1902号",
          seats: 10,
          resource: ["空调", "白板"],
          administrator: "高金龙",
          approval: true
        }
      ],
    };
  }
};
</script>
<style scoped>
.header {
  border: 1px solid #dcdfe6;
  background-color: #fff;
  height: 50px;
  padding: 10px 20px 0px 20px;
}
.body {
  margin-top: 20px;
  background-color: #fff;
  border: #dcdfe6 solid 1px;
}
.container {
  border: #dcdfe6 solid 1px;
  margin: 20px;
}
.leftRow {
  padding: 20px;
  height: 200px;
  align-items: center;
  vertical-align: middle;
}
.mainRow {
  height: 200px;
  border-left:#dcdfe6 solid 1px;
}
.tab-container {
  padding: 20px;
}
.meetingImg {
  width: 80px;
  height: 80px;
  border: 0px;
}
.miniText {
  font-size: 12px;
  color: #999;
  margin-right: 5px;

}
.tags{
  margin-right: 5px;
}
</style>
