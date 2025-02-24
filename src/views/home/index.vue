<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="el-aside">Aside</el-aside>
      <el-container>
        <el-header class="el-header">Header</el-header>
        <el-main class="el-main">Main</el-main>
        <el-footer class="el-footer">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
</script>

<style scoped>
</style>
<style lang="scss">
.common-layout {
  height: 100vh;
}
.el-header {
  background-color: aquamarine;
}
</style>