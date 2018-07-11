<template>
<div class="left-nav">
 <el-row>
  <el-col>
    <el-menu  default-active="/" router >
      <el-menu-item index="/">
        <i class="el-icon-news"></i>
        <span slot="title">预约</span>
      </el-menu-item>
      <el-menu-item index="/meeting">
        <i class="el-icon-menu"></i>
        <span slot="title">会议</span>
      </el-menu-item>
      <el-menu-item index="/meetingRoom">
        <i class="el-icon-document"></i>
        <span slot="title">管理</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
       <el-menu-item index="/help">
        <i class="el-icon-question"></i>
        <span slot="title">帮助</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.left-nav {
  height: 100%;
  float: left;
  width: 10%;
}
</style>

