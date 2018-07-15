<template>
<div class="left-nav">
 <el-row>
  <el-col>
    <el-menu  default-active="/" router  class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="#ffd04b">
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
i{
  color:aliceblue;
}
</style>

