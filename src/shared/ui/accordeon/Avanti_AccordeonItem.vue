<template>
  <div class="w-full p-4 flex justify-between items-center border-b border-b-light-gray">
    <div class="flex items-center gap-3">
      <div class="flex items-center justify-center w-11 aspect-square rounded-full bg-blue">
        <img :src="`/icons/${step.icon}.svg`" alt="" />
      </div>
      <div class="flex flex-col">
        <p class="font-semibold text-sm" :class="isWaiting ? 'text-gray' : 'text-dark-blue'">{{ step.title }}</p>
        <span class="font-medium text-xs" :class="isWaiting ? 'text-gray' : 'text-blue'">{{ statusText }}</span>
      </div>
    </div>
    <div class="flex items-center justify-center w-11 aspect-square rounded-full bg-blue">
      <img src="/icons/checkmark.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StepDefinedStatus, StepDefinedStatusText, type IStep } from '@/types/step';
import { computed } from 'vue';

interface IProps {
  step: IStep
}
const props = defineProps<IProps>()

const isWaiting = computed(() => props.step.status === StepDefinedStatus.WAITING)

const statusText = computed(() => {
  switch(props.step.status) {
    case StepDefinedStatus.WAITING:
      return StepDefinedStatusText.get(StepDefinedStatus.WAITING)
    case StepDefinedStatus.COMPLETE:
      return StepDefinedStatusText.get(StepDefinedStatus.COMPLETE)
    default:
      return `Step attuale • ${props.step.status}`
  }
})
</script>
