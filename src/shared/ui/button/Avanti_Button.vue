<template>
  <button
    :href="to"
    class="flex items-center gap-3 px-3 py-2.5 border rounded-lg cursor-pointer relative font-medium"
    :class="buttonStyle"
  >
    <span v-if="notificationsCount > 0" class="absolute -right-2 -top-2 flex justify-center items-center w-5.5 aspect-square bg-red border-2 border-white rounded-full text-white text-xs">{{ notificationsCount }}</span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface IProps {
  variant?: 'neutral' | 'active' | 'solid' | 'white';
  to?: string;
  notificationsCount?: number;
}
const props = withDefaults(defineProps<IProps>(), {
  isActive: 'neutral',
  to: '#',
  notificationsCount: 0,
})

const buttonStyle = computed(() => {
  switch (props.variant) {
    case 'neutral':
      return 'bg-dark-white border border-light-blue text-dark-blue';
    case 'active':
      return 'bg-light-blue border-none text-blue';
    case 'solid':
      return 'bg-blue border-none text-white';
    case 'white':
      return 'bg-white border-none text-blue';
  }
})
</script>
