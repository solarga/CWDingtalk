<template>
  <div id="app">
    <el-container>
       <el-aside width="120px">
            <leftNav></leftNav>
       </el-aside>
      <el-main>       
         <div class="main">
               <router-view/>
         </div>
      </el-main>
    </el-container>  
  </div>
</template>
<script>
import leftNav from "./components/leftNav";
export default {
  name: "App",
  components: { leftNav }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-container{
  height: 100%;
}
.el-aside {
  background-color: #409eff;
  text-align: center;
}
.el-main {
  background-color:#EBEEF5;
}
.el-menu{
  border: none;
}
</style>
