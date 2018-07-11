<template>
   <div class="manage">     
        <el-tabs v-model="activeName"  @tab-click="addNewRoom">
            <el-tab-pane label="会议室管理" name="manage">
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
                <el-row v-for="(item, idx) in meetingRooms" :key="idx">
                    <el-col>
                        <div class="meetingRooms">
                            <el-card shadow="hover" :body-style="{ padding: '0px',margin:'20px' }">
                                <el-row>
                                    <el-col :span="18">
                                        <el-row>
                                            <el-col :span="3">
                                                 <img :src="item.img" class="image">                                               
                                            </el-col>
                                            <el-col :span="21">
                                                 <span>{{item.name}}</span>
                                                 <span class="miniText"> 坐席{{ item.seats }}人</span> 
                                                 <p class="miniText">会议室地点：{{item.address}}</p>
                                                  <p>
                                                     <el-tag class="tags" size="small" type="info" v-for="(r,id) in item.resource" :key="id" >{{r}}</el-tag> 
                                                 </p>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="6">
                                        <div>                                                                  
                                            <el-button  size="small" type="primary" icon="el-icon-edit-outline"  @click="editRoom(idx)">编辑</el-button>
                                            <el-button  size="small" type="danger" icon="el-icon-delete" @click="deleteRoom(idx)">删除</el-button>
                                            <el-button  size="small" icon="el-icon-picture">二维码</el-button>
                                        </div>
                                    </el-col>
                                </el-row>
                               
                                  
                                          
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="添加会议室" name="add">
                <el-form ref="form" :model="formMeetingRoom" label-width="100px">
                      <el-form-item label="会议室名称">
                           <el-input v-model="formMeetingRoom.name"></el-input>
                      </el-form-item>
                       <el-form-item label="会议室图片">
                           <el-input v-model="formMeetingRoom.img"></el-input>
                      </el-form-item>
                      <el-form-item label="会议室地点">
                           <el-input v-model="formMeetingRoom.address"></el-input>
                      </el-form-item>
                      <el-form-item label=" 坐 席 人 数">
                           <el-input-number v-model="formMeetingRoom.seats"  :min="1" :max="100" label="描述文字"></el-input-number>
                      </el-form-item>
                      <el-form-item label="会议室配置">
                            <el-select v-model="formMeetingRoom.resource" multiple placeholder="请选择">
                                    <el-option  v-for="item in meetingRoomsResource"  :key="item.value"  :label="item.label"  :value="item.value"></el-option>
                            </el-select>
                      </el-form-item>
                      <el-form-item label="管理员">
                             <el-input v-model="formMeetingRoom.administrator"></el-input>
                      </el-form-item>
                       <el-form-item label="开启审批">
                           <el-switch  v-model="formMeetingRoom.approval"  active-text="开" inactive-text="关" active-color="#13ce66"  inactive-color="#ff4949"></el-switch>
                      </el-form-item>
                      <el-form-item>
                            <el-button type="primary" @click="saveData()">保存</el-button>
                            <el-button @click="addNewRoom()">重置</el-button>
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
      activeName: "manage",
      qureyData: { name: "", region: [] },
      meetingRoomsResource: [
        {
          value: "投影仪",
          label: "投影仪"
        },
        {
          value: "空调",
          label: "空调"
        },
        {
          value: "白板",
          label: "白板"
        },
        {
          value: "音响",
          label: "音响"
        },
        {
          value: "激光笔",
          label: "激光笔"
        }
      ],
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
      formMeetingRoom: {}
    };
  },
  methods: {
    //删除现有会议室
    deleteRoom: function(idx) {
      //this.meetingRooms.splice(idx,1);
      // alert(this.meetingRooms[0].name);
      this.$confirm("删除此会议室信息删除后不可恢复，确定继续删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.meetingRooms.splice(idx, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //编辑现有会议室
    editRoom: function(id) {
      this.formMeetingRoom = this.meetingRooms[id];
      this.activeName = "add";
    },
    //添加新会议室，初始化表单
    addNewRoom: function() {
      this.formMeetingRoom = {
        roomId: guid(),
        name: "",
        img: "",
        address: "",
        seats: 1,
        resource: [],
        administrator: "",
        approval: false
      };
    },
    //保存数据
    saveData: function() {
      //判断是否存在该roomid会议室，如果有就修改，如果没有就push
      let here = false;
      let index;
      for (let i = 0; i < this.meetingRooms.length; i++) {
        if (this.meetingRooms[i].roomId == this.formMeetingRoom.roomId) {
          here = true; 
        }
      }
      //如果存在就将现数据覆盖原数组[index]的数据，不存在就追加到数组
      if (here) {
        index = this.meetingRooms.findIndex(
          o => o.roomId == this.formMeetingRoom.roomId
        );
        this.meetingRooms[index] = this.formMeetingRoom;
      } else {
        this.meetingRooms.push(this.formMeetingRoom);
        this.addNewRoom();
      }
      //提示窗口
      this.$message({
        message: "保存成功",
        type: "success"
      });
    }
  }
};
//生成guid
function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
</script>
<style scoped>
.manage {
  margin: 10px 20px 10px 20px;
  padding: 10px 20px 10px 20px;
  background-color: #f2f6fc;
}
.meetingRooms {
  margin: 10px;
}
.qureyform {
  margin: 10px 20px 0px 20px;
}
.miniText {
  font-size: 12px;
  color: #999;
}
.image {
  width: 80px;
  height: 80px;
  border: 0px;
}
hr {
  border: 0;
  background-color: #dcdfe6;
  height: 1px;
}
.tags{
  margin-right: 5px;
}
</style>
