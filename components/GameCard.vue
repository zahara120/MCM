<template>
  <NuxtLink class="cursor-pointer relative group" to="/detail/1">
    <div
      class="rounded-xl w-full h-full absolute top-0 right-0 group-hover:bg-gray-800/70 duration-300"
    >
      <div
        class="rounded-xl hidden group-hover:block absolute inset-0 group-active:bg-gray-800/70"
      >
        <div class="flex justify-center items-center h-full">
          <p class="text-white text-center">See more</p>
        </div>
      </div>
    </div>
    <NuxtImg
      class="object-cover rounded-xl w-full h-full"
      src="/img/header.jpg"
      alt="Image Thumbnail"
    />
  </NuxtLink>
</template>
