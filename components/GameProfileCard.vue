<template>
  <NuxtLink
    to="/detail/1"
    class="bg-secondary p-5 rounded-xl flex items-center justify-between hover:bg-secondary/50 cursor-pointer"
  >
    <div
      class="flex flex-wrap justify-center items-center md:justify-start md:items-center gap-3"
    >
      <NuxtImg
        class="rounded-full w-[50px] h-[50px] object-cover"
        src="/img/header1.jpg"
      />
      <div
        class="flex flex-col justify-start items-center md:items-start gap-2 md:gap-1"
      >
        <h1 class="text-sm">game</h1>
        <div class="flex flex-col md:flex-row items-center md:gap-5 gap-2">
          <div class="flex items-center gap-1">
            <Icon name="catppuccin:wxt" />
            <p class="text-xs">description</p>
          </div>
          <div
            class="hidden md:block w-[5px] h-[5px] bg-slate-500 rounded-full"
          ></div>
          <div class="flex items-center gap-1">
            <Icon name="catppuccin:roblox" />
            <p class="text-xs">description</p>
          </div>
        </div>
      </div>
    </div>
    <div class="md:block hidden bg-slate-200/30 px-2 rounded-full">
      <span class="text-xs">Live</span>
    </div>
  </NuxtLink>
</template>
