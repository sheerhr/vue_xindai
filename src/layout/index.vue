<template>
  <div>
    <el-container>
      <Sidebar />
      <el-container direction="vertical" class="contain">
        <Header />
        <Main />
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { Header, Main, Sidebar } from "./container/index";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Main,
    Sidebar,
  },
};
// this.$router.push('/login');
</script>
<style lang="scss">
.contain {
  justify-content: space-between;
}
</style>