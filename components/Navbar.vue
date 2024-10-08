<template>
  <header
    class="flex justify-between border-b border-slate-800 w-full h-[68px] p-5 relative"
  >
    <transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="menu"
        class="bg-slate-800/80 w-full h-screen absolute top-0 left-0 z-10"
      ></div>
    </transition>
    <div
      class="flex items-center gap-6 justify-between md:justify-normal w-full"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <div class="hidden md:flex items-center gap-6 text-sm capitalize">
        <NuxtLink to="/">all games</NuxtLink>
        <NuxtLink to="/">winner of the day</NuxtLink>
        <NuxtLink to="/">recent bids</NuxtLink>
      </div>
      <button class="md:hidden" @click="menu = !menu">
        <Icon name="bi:list" style="color: white" />
      </button>
    </div>
    <NuxtLink
      to="/addData"
      class="w-[150px] h-[35px] hidden md:flex items-center justify-center text-center rounded-lg hover:bg-green-800/70 focus:bg-green-800/100 bg-green-800 px-4 py-3"
    >
      <Icon name="bi:plus" style="color: white" />
      <span class="uppercase text-xs"> add data </span>
    </NuxtLink>

    <!-- mobile nav -->
    <transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="menu"
        class="block md:hidden h-screen w-1/2 bg-white fixed top-0 right-0 z-50 p-5 text-black"
      >
        <button
          class="focus:text-red-500 absolute top-2 right-5"
          @click="menu = !menu"
        >
          X
        </button>
        <div class="flex flex-col gap-5 mt-3">
          <NuxtLink
            class="focus:bg-secondary focus:text-white p-2 rounded-xl"
            to="/"
            @click="menu = false"
            >Home</NuxtLink
          >
          <NuxtLink
            class="focus:bg-secondary focus:text-white p-2 rounded-xl"
            to="/addData"
            @click="menu = false"
            >Add Data</NuxtLink
          >
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const menu = ref(false);
// const closeMenu = () => {
//     menu.value = false
// }
</script>
