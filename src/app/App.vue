<script setup lang="ts">
import { DefaultLayout } from './layouts';
import { Button, Accordeon } from '@/shared/ui';
</script>

<template>
  <DefaultLayout>
    <section class="w-full flex flex-col gap-1.5 bg-linear-to-b from-blue to-gray-blue p-8 not-xl:p-5 rounded-[20px]">
      <div class="w-full flex flex-col gap-3.5 not-xl:gap-1">
        <div class="flex justify-between items-center font-semibold text-white text-xs">
          <p class="xl:uppercase text-[13px] not-xl:font-light">Il tuo saldo</p>
          <span class="px-2.5 py-1 rounded-full bg-white/20 text">Completa i passaggi</span>
        </div>
        <p class="w-[50%] font-semibold text-white text-md uppercase not-xl:text-[12px]">Importo approvato dai nostri partner</p>
      </div>
      <div class="w-full flex flex-col">
        <p class="font-bold text-white text-[52px] not-xl:text-[36px]">&euro; 12 000</p>
        <p class="text-sm text-white not-xl:text-xs">Prestito personale • TAN 3,8%</p>
      </div>
      <Button class="mt-2 py-4" variant="white">
        <div class="flex flex-1 justify-center items-center gap-3 text-blue font-semibold text-lg not-xl:text-md">
          <img class="not-xl:w-5" src="/icons/bank.svg" alt="" />
          <p class="leading-tight">Preleva i fondi</p>
          <img class="not-xl:w-4" src="/icons/arrow.svg" alt="" />
        </div>
      </Button>
      <div class="flex items-center gap-4 not-xl:gap-2 mt-4 not-xl:mt-0">
        <div class="w-25 not-xl:w-6 bg-white/30 h-px" />
        <p class="text-white text-xs not-xl:text-[10px]">Fondi disponibili dopo l'approvazione dei documenti</p>
      </div>
    </section>
    <Accordeon />
  </DefaultLayout>
</template>
