<script setup lang="ts">

</script>

<template>
  <cc-button style="font-size: 28px" tip="编辑" icon="Edit"/>
  <cc-button tip="删除" icon="Delete">aa</cc-button>
  <cc-button type="primary" tip="primary" icon="Edit"/>
  <cc-button type="success" tip="success" icon="Check"/>
  <cc-button type="info" tip="info" icon="Message"/>
  <cc-button type="warning" tip="warning" icon="Star"/>
  <cc-button
      type="danger"
      tip="danger"
      icon="Delete"
      :tipProps="{
          effect: 'light',
          placement: 'bottom'
        }"
  />
</template>

<style scoped lang="scss">

</style>
