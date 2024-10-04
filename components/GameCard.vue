<template>
    <div class="cursor-pointer relative group" @click="() => {
        console.log('click');

    }">
        <div class="rounded-xl w-[220px] h-[150px] absolute top-0 right-0 group-hover:bg-gray-800/70 duration-300">
            <div class="rounded-xl hidden group-hover:block group-active:bg-gray-800/70 absolute inset-0">
                <div class="flex justify-center items-center h-full">
                    <p class="text-white text-center">see more</p>
                </div>
            </div>
        </div>
        <NuxtImg class="rounded-xl w-[250px] h-[150px] object-cover" src="/img/header1.jpg" />
    </div>
</template>