<script setup lang="ts">
import { DefaultLayout } from './layouts';
import { Button } from '@/shared/ui';
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex flex-col gap-4 bg-blue p-8 rounded-[20px]">
      <div class="w-full flex flex-col gap-4">
        <div class="flex justify-between font-semibold text-white text-xs">
          <p class="uppercase">Il tuo saldo</p>
          <span class="px-2.5 py-1 rounded-full bg-white/20 text">Completa i passaggi</span>
        </div>
        <p class="font-semibold text-white text-md uppercase">Importo approvato dai nostri partner</p>
      </div>
      <div class="w-full flex flex-col">
        <p class="font-bold text-white text-[52px]">&euro; 12 000</p>
        <p class="text-sm text-white">Prestito personale • TAN 3,8%</p>
      </div>
      <Button variant="white">
        <div class="flex flex-1 justify-center items-center gap-3 text-blue font-semibold text-lgs">
          <img src="/icons/bank.svg" alt="" />
          <p>Preleva i fondi</p>
          <img src="/icons/arrow.svg" alt="" />
        </div>
      </Button>
      <div class="flex items-center gap-4">
        <div class="w-25 bg-white/30 h-px" />
        <p class="text-white text-xs">Fondi disponibili dopo l'approvazione dei documenti</p>
      </div>
    </section>
  </DefaultLayout>
</template>
