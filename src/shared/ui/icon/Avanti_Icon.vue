<template>
  <div class="w-6 aspect-square flex items-center justify-center relative">
    <img :src="`/icons/${icon}.svg`" alt="" />
    <span v-if="notificationsCount > 0" class="absolute -right-2 -top-2 flex justify-center items-center w-5 aspect-square bg-red border-2 border-white rounded-full text-white text-[10px]">{{ notificationsCount }}</span>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  icon?: string;
  notificationsCount?: number;
}
withDefaults(defineProps<IProps>(), {
  icon: 'bell',
  notificationsCount: 0
})
</script>
