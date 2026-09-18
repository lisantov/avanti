<template>
  <div class="flex flex-col gap-5">
    <Header />
    <main class="flex flex-col gap-10 px-18 pb-10">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { Header } from '@/widgets/ui';
</script>
