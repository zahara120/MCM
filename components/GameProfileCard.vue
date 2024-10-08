<template>
  <NuxtLink
    :to="`/detail/${data?.id}`"
    class="bg-secondary p-5 rounded-xl flex items-center justify-between hover:bg-secondary/50 cursor-pointer"
  >
    <div
      class="flex flex-wrap justify-center items-center md:justify-start md:items-center gap-3"
    >
      <NuxtImg
        class="rounded-full w-[50px] h-[50px] object-cover"
        :src="data?.thumbnail"
      />
      <div
        class="flex flex-col md:justify-start items-center md:items-start gap-2 md:gap-1"
      >
        <h1
          class="text-sm text-center md:text-start max-w-[100px] max-h-[40px] truncate"
        >
          {{ data?.title }}
        </h1>
        <div class="flex flex-col md:flex-row items-center md:gap-5 gap-2">
          <div class="flex items-center gap-1">
            <Icon name="catppuccin:wxt" />
            <p class="text-xs">{{ data?.genre }}</p>
          </div>
          <div
            class="hidden md:block w-[5px] h-[5px] bg-slate-500 rounded-full"
          ></div>
          <div class="flex items-center gap-1">
            <Icon name="catppuccin:roblox" />
            <p class="text-xs max-w-[100px] max-h-[40px] truncate">
              {{ data?.platform }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:block hidden bg-slate-200/30 px-2 rounded-full">
      <span class="text-xs">Live</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface GameData {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  profile_url: string;
}

defineProps<{
  data: GameData;
}>();
</script>
