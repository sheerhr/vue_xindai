<template>
    <el-header>Header
        <el-button @click="logout()">
            退出
        </el-button>
    </el-header>
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
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>