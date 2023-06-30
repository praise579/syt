<template>
  <div class="container">
    <!-- 顶部 -->
    <HospitalTop />
    <!-- 路由组件 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <HospitalButtom />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin-top: 80px;
    width: 1200px;
    height: 1000px;
  }
}
</style>