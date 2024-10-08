<script setup lang="ts">
interface GameData {
  id: number;
  title: string;
  genre: string;
  thumbnail: string;
}
defineProps<{
  data: GameData;
}>();
</script>

<template>
  <NuxtLink
    :to="`/detail/${data?.id}`"
    class="flex items-center gap-3 hover:bg-primary/50 cursor-pointer rounded-xl px-1 py-2"
  >
    <NuxtImg
      class="rounded-lg w-[50px] h-[50px] object-cover"
      :src="data?.thumbnail"
    />
    <div class="flex flex-col">
      <h1 class="text-sm">{{ data.title }}</h1>
      <span class="text-gray-400 text-xs">{{ data.genre }}</span>
    </div>
  </NuxtLink>
</template>
