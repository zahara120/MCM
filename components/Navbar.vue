<template>
    <header class="flex justify-between border-b border-slate-800 w-full h-[68px] p-5">
        <div class="flex items-center gap-6">
            <NuxtLink to="/">Logo</NuxtLink>
            <div class="flex items-center gap-6 text-sm capitalize">
                <NuxtLink to="/">all games</NuxtLink>
                <NuxtLink to="/">winner of the day</NuxtLink>
                <NuxtLink to="/">recent bids</NuxtLink>
            </div>
        </div>
        <nav class="flex items-center gap-4">
            <button
                class="flex items-center gap-2 rounded-lg hover:bg-green-800/70 focus:bg-green-800/100 bg-green-800/50 px-4 py-2 uppercase text-xs">
                <Icon name="unjs:automd" style="color: black" /> feyyora
                utilities
            </button>
            <button
                class="flex items-center gap-2 rounded-lg hover:bg-indigo-800/70 focus:bg-indigo-800/100 bg-indigo-800/50 px-4 py-2 uppercase text-xs">
                <Icon name="cryptocurrency-color:generic" style="color: black" /> win
                bonuses
            </button>
            <button
                class="flex items-center gap-2 rounded-lg hover:bg-blue-800/70 focus:bg-blue-800/100 bg-blue-800/50 px-4 py-2 uppercase text-xs">
                <Icon name="unjs:confbox" style="color: black" /> feyyora
                utilities
            </button>
        </nav>
    </header>
</template>