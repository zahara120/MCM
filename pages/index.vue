<script setup lang="ts">

import GameCatalog from '~/components/GameCatalog.vue';
definePageMeta({
  layout: "page",
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-10 gap-5 w-full p-5">
    <div class="col-span-8 flex flex-col gap-5">
      <NuxtImg class="rounded-xl w-full max-h-[380px] aspect-[16/9] object-cover" src="/img/header1.jpg" />
      <div class="flex flex-col gap-8">
        <section class="flex flex-wrap gap-3 items-center justify-between">
          <!-- list of tabs -->
          <ul class="w-max-screen overflow-x-auto flex items-center gap-8">
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">all game</button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">new</button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">popular</button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">slots</button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">table game</button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">live casino</button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">jackpots</button>
            </li>
          </ul>

          <!-- search -->
          <form action="" class="w-full md:w-fit">
            <input type="text" placeholder="search game"
              class="min-w-[200px] w-full text-xs rounded-lg px-4 py-3 m-0 bg-secondary">
          </form>
        </section>

        <!-- list of games -->
        <section class="grid grid-cols-2 max-h-[250px] md:max-h-[400px] overflow-auto md:grid-cols-5 gap-3">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </section>

        <!-- list of games -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <GameCatalog />
          <GameCatalog />
          <GameCatalog />
        </section>
      </div>
    </div>
    <aside class="hidden md:block sticky top-0 self-start rounded-xl col-span-2 bg-secondary p-5 w-full h-screen">
      <h1 class="w-full">Ini seharusnya isi chat</h1>
    </aside>
  </div>
</template>
