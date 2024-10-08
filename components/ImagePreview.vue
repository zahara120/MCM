<template>
  <NuxtImg
    class="w-full max-h-[380px] aspect-[16/9] object-cover"
    :src="data"
  />
</template>

<script setup lang="ts">
defineProps<{
  data: string;
}>();
</script>
