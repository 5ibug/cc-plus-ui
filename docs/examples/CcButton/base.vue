<template>
  <div style="width: 200px; font-weight: 700">输入防抖时间（毫秒）：</div>
  <el-input-number
      style="width: 240px"
      v-model="time"
      placeholder="请输入防抖时间（毫秒）"
      :min="1000"
      :max="10000"
      :controls="false"
  />

  <CcButton :time="time" @click="clickButton">
    点击
  </CcButton>

</template>
<script setup lang="ts">
  import { ref } from "vue"
  // 弹出通知, 实际不需要引用
  import { ElNotification } from 'element-plus'
  const time = ref(1000)

  const clickButton = () => {
    ElNotification({
      title: '提示',
      message: `第${(new Date()).getSeconds()}秒点击了`,
    })
  }
</script>
