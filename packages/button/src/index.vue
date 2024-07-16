<template>
  <el-tooltip v-if="tip" :content="tip" :placement="placement" v-bind="tipProps">
    <el-button v-bind="$attrs" class="cc-button-tip" @click="handleClick">
      <slot />
    </el-button>
  </el-tooltip>
  <el-button v-else v-bind="$attrs" @click="handleClick">
    <slot />
  </el-button>
</template>

<script setup lang="ts" name="CcButton">
import { ref } from "vue"
import type {ButtonProp} from "@/button/type/button";

const props = withDefaults(defineProps<ButtonProp>(),{
  time: 1000,
  tip: '',
  placement: 'top',
  tipProps: ()=>({})
})
// 抛出事件
const emits = defineEmits<{
  click: []
}>()
const record = ref(0)
const handleClick = () => {
  let newTime = new Date()
  if (newTime.getTime() - record.value > props.time) {
    emits("click")
    record.value = new Date().getTime()
  }
}
</script>

<style lang="scss" scoped>

.cc-button-tip:hover,
.cc-button-tip:focus {
  animation: jump 0.3s;
}
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
