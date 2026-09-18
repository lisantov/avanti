<script setup lang="ts">
import { Button } from '@/shared/ui';

</script>

<template>
  <header class="w-full flex flex-col">
    <div class="flex justify-between items-center px-18 py-9 bg-white border-b border-b-light-gray">
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
    </div>
    <div class="px-18 py-2.5 flex justify-between items-center">
      <div class="flex gap-3 items-center">
        <img src="/images/profile.png" class="rounded-full" alt="Profile avatar"/>
        <div class="flex flex-col">
          <p class="font-semibold text-sm text-dark-blue">Marco Rossi</p>
          <p class="text-xs text-gray">ikoei@09gmail.com</p>
        </div>
      </div>
      <div class="flex items-center gap-2 font-medium text-sm text-gray">
        <p>Piattaforma</p>
        <p>/</p>
        <span class="font-semibold text-sm text-dark-blue">Home</span></div>
    </div>
  </header>
</template>
