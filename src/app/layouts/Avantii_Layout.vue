<template>
  <div class="flex flex-col gap-5 not-xl:gap-0">
    <Header />
    <main class="flex flex-col gap-10 not-xl:gap-4 px-18 not-xl:px-4 pb-10 not-xl:py-4">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { Header } from '@/widgets/ui';
</script>
