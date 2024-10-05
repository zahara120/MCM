<template>
  <section class="flex-1 flex flex-col gap-5">
    <NuxtImg
      class="w-full max-h-[380px] aspect-[16/9] object-cover"
      src="/img/header1.jpg"
    />
    <div class="p-5 flex flex-col gap-2">
      <div class="flex items-center justify-between mb-2">
        <h1 class="text-2xl"><a href="#">Title</a></h1>
        <div
          class="bg-green-400/50 px-3 py-2 rounded-lg text-green-400 flex items-center gap-2 text-xs"
        >
          <div class="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          Live
        </div>
      </div>
      <div class="flex items-center justify-between">
        <h5 class="text-slate-400 text-sm">genre</h5>
        <span class="text-slate-400 text-xs">release_date</span>
      </div>
      <p class="text-slate-500 text-justify text-sm md:text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        voluptatum perspiciatis unde cum officiis ex consequatur eaque suscipit!
        Sapiente, id illo. Suscipit voluptate nesciunt magni dolores ratione
        autem in consectetur! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Soluta voluptatum perspiciatis unde cum officiis ex consequatur
        eaque suscipit! Sapiente, id illo. Suscipit voluptate nesciunt magni
        dolores ratione autem in consectetur!
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
  layout: "page",
});
</script>
