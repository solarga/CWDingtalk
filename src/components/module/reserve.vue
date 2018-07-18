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
                <el-button type="primary" @click="getMyCode">发起会议</el-button>
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
                    
                    <el-form-item label="主持人"> 
                       <el-tag  class="tag" :key="tag.emplId"  v-for="tag in formData.host"  closable  :disable-transitions="false"  @close="handleClose(formData.host,tag)" >{{tag.name}}</el-tag>
                       <el-button icon="el-icon-plus"  type="primary" @click="chooseEmp(formData.host,2,true)" circle></el-button>
                       <el-button type="danger" icon="el-icon-delete" circle v-if="formData.host.length !== 0" @click="clearAll(formData.host)"></el-button>
                    </el-form-item>
                </td>
                <td>
                    <el-form-item label="会议主题"> <el-input v-model="formData.subject" placeholder="请输入会议主题"></el-input></el-form-item>
                </td>
              </tr>
              <tr>
                <td>
                   <el-form-item label="参会人"> 
                       <el-tag  class="tag" :key="tag.emplId"  v-for="tag in formData.attendee"  closable  :disable-transitions="false"  @close="handleClose(formData.attendee,tag)" >{{tag.name}}</el-tag>
                       <el-button icon="el-icon-plus"  type="primary" @click="chooseEmp(formData.attendee,meetingRooms.seats,true)" circle></el-button>
                       <el-button type="danger" icon="el-icon-delete" circle v-if="formData.attendee.length !== 0" @click="clearAll(formData.attendee)"></el-button>
                   </el-form-item>
                </td>
                <td>
                  <el-form-item label="会议描述"> <el-input v-model="formData.describtion" placeholder="请输入会议描述内容"></el-input></el-form-item>
                </td>
              </tr>
              <tr>
                <td>
                   <el-form-item label="抄送人"> <el-input v-model="formData.name" placeholder="请选择抄送人"></el-input></el-form-item>
                </td>
                <td>
                   <el-form-item label="发起人"> <el-input v-model="formData.name" placeholder="请选择会议发起人"></el-input></el-form-item>
                </td>
              </tr>
              <tr>
                <td>
                   <el-form-item label="通 知" >
                     <el-select v-model="meetingRooms.dd" placeholder="请选择"><el-option label="通知"  value="通知"></el-option></el-select>
                   </el-form-item>
                </td>      
                <td rowspan="3">
                   <el-form-item label="会议议题" prop="desc"><el-input type="textarea" v-model="formData.desc" :rows="10"></el-input></el-form-item>
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
import * as dd from "dingtalk-jsapi";
import axios from "axios";
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
      }, //会议室数据
      formData: { host: [], attendee: [] }, //表单数据
      config: {}, //jsapi鉴权配置信息
      myEmpId: "", //当前用户的userid
      myCode: ""
    };
  },
  mounted: function() {
    this.roomId = this.$route.params.meetingRoomId; //获取请求的roomid并保持
    //请求jsapi鉴权信息
    axios
      .get("http://localhost:8070/home/JsAuth")
      .then(Response => {
        this.config = Response.data;
        //console.log(this.config.access_token);
        this.getMyCode();
      })
      .catch(error => {
        console.log(error);
      });
    //初始化当前用户信息
  },
  methods: {
    handleClose(o, tag) {
      //删除选定的某人
      o.splice(o.indexOf(tag), 1);
    },
    clearAll(o) {
      //清空所选
      o.splice(0);
    },
    getMyCode() {
      let that = this;
      dd.ready(function() {
        dd.runtime.permission.requestAuthCode({
          corpId: that.config.corpId, // 企业id
          onSuccess: function(info) {
            that.myCode = info.code; // 通过该免登授权码可以获取用户身份
            console.log(that.myCode);
            console.log(that.config.access_token);
            
            axios
              .get(
                "https://oapi.dingtalk.com/user/getuserinfo?access_token=" +
                  that.config.access_token +
                  "&code=" +
                  that.myCode
              )
              .then(Response => {
                that.myEmpId = Response.data;
              })
              .catch(error => {
                console.log(error);
              });
          }
        });
      });
    },
    ddinit() {
      dd.config({
        agentId: "183945286", // 必填，微应用ID
        corpId: this.config.corpId, //必填，企业ID
        timeStamp: this.config.timeStamp, // 必填，生成签名的时间戳
        nonceStr: this.config.nonceStr, // 必填，生成签名的随机串
        signature: this.config.signature, // 必填，签名
        type: 0, //选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
        jsApiList: [
          "runtime.info",
          "biz.contact.choose",
          "device.notification.confirm",
          "device.notification.alert",
          "device.notification.prompt",
          "biz.ding.post",
          "biz.util.openLink"
        ] // 必填，需要使用的jsapi列表，注意：不要带dd。
      });
    },
    chooseEmp(oje, _max, _multiple) {
      let user = [];
      for (let i = 0; i < oje.length; i++) {
        user.push(oje[i].emplId);
      }
      let that = this;
      this.ddinit();
      dd.biz.contact.choose({
        multiple: _multiple, //是否多选：true多选 false单选； 默认true
        users: user, //默认选中的用户列表，员工userid；成功回调中应包含该信息
        corpId: this.config.corpId, //企业id
        max: _max, //人数限制，当multiple为true才生效，可选范围1-1500
        onSuccess: function(data) {
          for (let i = 0; i < data.length; i++) {
            oje.splice(i, 1, data[i]); //用splice方法手动触发vue更新
          }
        },
        onFail: function(err) {}
      });
    },
    t() {
      dd.device.notification.alert({
        message: "亲爱的",
        title: "提示", //可传空
        buttonName: "收到",
        onSuccess: function() {
          //onSuccess将在点击button之后回调
          /*回调*/
        },
        onFail: function(err) {}
      });
    }
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
td {
  width: 50%;
}
.tag {
  margin-right: 5px;
}
</style>

