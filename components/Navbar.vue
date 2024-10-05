<template>
    <header class="flex justify-between border-b border-slate-800 w-full h-[68px] p-5 relative">
        <!-- <div v-if="menu" class="bg-slate-800/80 w-full h-screen absolute top-0 left-0 z-10"></div> -->
        <transition enter-active-class="transition-opacity duration-500" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-500"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="menu" class="bg-slate-800/80 w-full h-screen absolute top-0 left-0 z-10"></div>
        </transition>
        <div class="flex items-center gap-6 justify-between md:justify-normal w-full">
            <NuxtLink to="/">Logo</NuxtLink>
            <div class="hidden md:flex items-center gap-6 text-sm capitalize">
                <NuxtLink to="/">all games</NuxtLink>
                <NuxtLink to="/">winner of the day</NuxtLink>
                <NuxtLink to="/">recent bids</NuxtLink>
            </div>
            <button class="md:hidden" @click="menu = !menu">
                <Icon name="bi:list" style="color: white" />
            </button>
        </div>
        <nav class="hidden md:flex items-center gap-4">
            <button
                class="flex items-center gap-2 rounded-lg hover:bg-green-800/70 focus:bg-green-800/100 bg-green-800/50 px-4 py-2 uppercase text-xs">
                <Icon name="unjs:automd" style="color: black" /> feyyora
            </button>
            <button
                class="flex items-center gap-2 rounded-lg hover:bg-indigo-800/70 focus:bg-indigo-800/100 bg-indigo-800/50 px-4 py-2 uppercase text-xs">
                <Icon name="cryptocurrency-color:generic" style="color: black" />
                bonuses
            </button>
            <button
                class="flex items-center gap-2 rounded-lg hover:bg-blue-800/70 focus:bg-blue-800/100 bg-blue-800/50 px-4 py-2 uppercase text-xs">
                <Icon name="unjs:confbox" style="color: black" />
                utilities
            </button>
        </nav>

        <!-- mobile nav -->
        <transition enter-active-class="transition-opacity duration-500" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-500"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="menu" class="block md:hidden h-screen w-1/2 bg-white fixed top-0 right-0 z-50 p-5 text-black">
                <button class="focus:text-red-500 absolute top-2 right-5" @click="menu = !menu">X</button>
                <div class="flex flex-col gap-5 mt-3">
                    <NuxtLink class="focus:bg-secondary focus:text-white p-2 rounded-xl" to="/">Home</NuxtLink>
                    <NuxtLink class="focus:bg-secondary focus:text-white p-2 rounded-xl" to="/">Home</NuxtLink>
                    <NuxtLink class="focus:bg-secondary focus:text-white p-2 rounded-xl" to="/">Home</NuxtLink>
                    <NuxtLink class="focus:bg-secondary focus:text-white p-2 rounded-xl" to="/">Home</NuxtLink>
                    <NuxtLink class="focus:bg-secondary focus:text-white p-2 rounded-xl" to="/">Home</NuxtLink>
                    <NuxtLink class="focus:bg-secondary focus:text-white p-2 rounded-xl" to="/">Home</NuxtLink>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup lang="ts">
const menu = ref(false)
// const closeMenu = () => {
//     menu.value = false
// }
</script>