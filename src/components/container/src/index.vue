<template>
  <el-container>
    <el-aside width="auto">
      <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-menu-item index="1">
          <el-icon><el-icon-menu /></el-icon>
          <span>导航1</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><el-icon-menu /></el-icon>
          <span>导航2</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><el-icon-menu /></el-icon>
          <span>导航3</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggle">
          <el-icon v-if="isCollapse"><el-icon-expand /></el-icon>
          <el-icon v-else><el-icon-fold /></el-icon>
        </span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapse = ref(false)

const toggle = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
