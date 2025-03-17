<template>
  <div class="header">
    <span @click="toggle">
      <el-icon v-if="collapse"><el-icon-expand /></el-icon>
      <el-icon v-else><el-icon-fold /></el-icon>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean
}>()

const emit = defineEmits<{
  (e: 'update:collapse', value: boolean): void
}>()

const toggle = () => {
  emit('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
