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
                           <el-select v-model="qureyData.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" >查询</el-button>
                        </el-form-item>
                        </el-form>
                </el-col>
            </el-row>
        </div>
        <div class="body">
            <div class="container"  v-for="(item,id) in 3" :key="id">
                <el-row>
                <el-col :span="6" class="leftRow">
                    <el-row>
                        <el-col :span="8">
                            <img src="http://d.hiphotos.baidu.com/image/pic/item/48540923dd54564e39103dcfbfde9c82d0584fcb.jpg" class="meetingImg">
                        </el-col>
                        <el-col :span="16">
                            <p>M5会议室</p>
                            <p class="miniText">坐席10人</p>
                        </el-col>
     
                    </el-row>

                </el-col>
                <el-col :span="18" >
                    <div class="mainRow">
                        <el-tabs value="today" :stretch="false">
                               <el-tab-pane label="今天" name="today">
                                   <div class="tab-container">
                                       <div>使用情况表格</div>
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
      qureyData: {}
    };
  }
};
</script>
<style scoped>
.header {
  border-bottom: 1px solid #dcdfe6;
  background-color: #fff;
  height: 50px;
  padding: 10px 20px 0px 20px;
}
.body {
  margin: 20px;
  background-color: #fff;
  border: #dcdfe6 solid 1px;
}
.container {
  border: #dcdfe6 solid 1px;
  margin: 20px;
}
.leftRow {
  padding: 20px;
  clear: both;
}
.mainRow {
  border-left: #dcdfe6 solid 1px;
}
.tab-container {
  padding: 20px;
}
.meetingImg {
  width: 60px;
  height: 60px;
  border: 0px;
}
.miniText {
  font-size: 12px;
  color: #606266;
  margin-right: 5px;
}
</style>
