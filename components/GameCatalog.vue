<template>
    <div class="bg-secondary rounded-xl p-5 flex flex-col gap-5">
        <div class="flex items-center justify-between">
            <h1 class="capitalize">Wow wins</h1>
            <button
                class="flex items-center gap-2 rounded-lg hover:bg-purple-800/70 focus:bg-purple-800/100 bg-purple-800/50 px-4 py-2 uppercase text-xs">
                <Icon name="bi:arrow-right-short" style="color: white" />
            </button>
        </div>
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
    </div>
</template>