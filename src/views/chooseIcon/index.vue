<template>
  <div>
    <ChooseIcon title="选择图标" v-model:visible="visible">
      选择图标
    </ChooseIcon>
  </div>
</template>

<script setup lang="ts">
import ChooseIcon from '../../components/chooseIcon/src/index.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>

<style lang="scss" scoped>

</style>