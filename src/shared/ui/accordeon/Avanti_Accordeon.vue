<template>
  <div class="flex flex-col border border-light-gray rounded-2xl">
    <div class="flex flex-1 justify-between items-center p-4" :class="isOpened ? 'border-b border-b-light-gray' : ''" @click.stop="handleOpen">
      <p class="text-blue font-bold text-[15px] uppercase leading-tight">Fondi pronti per il <br/>
      prelievo - procedi ora!</p>
      <button class="w-8 aspect-square rounded-lg bg-dark-white border border-light-gray p-2" :class="isOpened ? 'rotate-0' : 'rotate-180'">
        <img src="/icons/chevron.svg" alt="" />
      </button>
    </div>
    <div v-if="isOpened">
      <div v-for="step in stepsStore.steps" :key="step.id">
        <AccordeonItem :step />
      </div>
      <div class="flex justify-between items-center gap-1 px-4 pt-3 pb-4">
        <div v-for="step in stepsStore.steps" :key="step.id" class="flex-1 h-1 bg-blue rounded-full"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStepsStore } from '@/stores/steps';
import { AccordeonItem } from '@/shared/ui';
import { ref } from 'vue';

const isOpened = ref<boolean>(false);
const handleOpen = () => isOpened.value = !isOpened.value

const stepsStore = useStepsStore();
</script>
