<script setup lang="ts">
import { Button } from '@/shared/ui';

</script>

<template>
  <header class="w-full flex justify-around px-8 py-4 bg-white border-b border-b-light-gray">
    <div class="flex items-center gap-13">
      <img src="/logo.png" alt="Avanti logo"/>
      <div class="flex items-center gap-3 text-sm">
        <Button variant="active" class="min-w-55">
          <img src="/icons/home.svg" alt=""/>
          Home
        </Button>
        <Button variant="neutral" class="min-w-55">
          <img src="/icons/documents.svg" alt=""/>
          Documenti
        </Button>
        <Button variant="neutral" class="min-w-55">
          <img src="/icons/profile.svg" alt=""/>
          Profilo
        </Button>
      </div>
    </div>
    <Button class="text-md uppercase font-semibold" variant="solid" :notificationsCount="4">
      <img src="/icons/chat.svg" alt=""/>
      Assistenza
    </Button>
  </header>
</template>
