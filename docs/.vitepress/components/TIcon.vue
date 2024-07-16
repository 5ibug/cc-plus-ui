<template>
  <el-icon>
    <component :is="icon"></component>
    <component is="Check"></component>
  </el-icon>
</template>
<script setup lang="ts" name="TIcon">
defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>
