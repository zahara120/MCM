<template>
  <section class="flex-1 flex flex-col gap-5">
    <NuxtImg
      class="w-full max-h-[380px] aspect-[16/9] object-cover"
      :src="data?.thumbnail"
    />
    <div class="p-5 flex flex-col gap-5" data-aos="fade-up">
      <div class="flex items-center justify-between mb-2">
        <h1 class="text-2xl">
          <a href="#">{{ data?.title }}</a>
        </h1>
        <div
          class="bg-green-400/50 px-3 py-2 rounded-lg text-green-400 flex items-center gap-2 text-xs"
        >
          <div class="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          {{ data?.status }}
        </div>
      </div>
      <div class="flex items-center justify-between">
        <h5 class="text-slate-400 text-sm">{{ data?.genre }}</h5>
        <span class="text-slate-400 text-xs">{{ data?.release_date }}</span>
      </div>
      <p class="text-slate-500 text-justify text-sm md:text-md">
        <div v-if="data?.description" v-html="data?.description" class="my-description"></div>
      </p>
      <ImagePreview v-if="show" :data="url"/>
      <!-- image scroll -->
      <div class="flex items-center justify-center gap-2 overflow-x-auto">
        <div v-for="(screenshot, index) in data?.screenshots" :key="index">
          <button @click="showImage(screenshot?.image)" class="cursor-pointer">
            <NuxtImg
              class="w-full hover:translate-y-[-5px] duration-300"
              :src="screenshot?.image"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
  layout: "page",
});
const show = ref(false);
const url = ref("");
const { data } = await useFetch(`/api/detailGame/${route.params.id}`);
const showImage = (image: string) => {
  show.value = true;
  url.value = image;
}
</script>
