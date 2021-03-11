<template>
  <el-aside width="200px">
    <el-menu router>
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="/loan-input">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-submenu index="/loan-approve">
        <template slot="title">贷款审核</template>
        <el-menu-item index="/loan-approve/first">初审</el-menu-item>
        <el-menu-item index="/loan-approve/end">终审</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>
<style>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
}
</style>