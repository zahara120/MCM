<template>
  <div class="flex-1 flex flex-col justify-center items-center py-5">
    <form
      v-if="show"
      @submit="onSubmit"
      class="md:bg-secondary rounded-xl md:min-w-[600px] md:p-5 flex flex-col gap-6"
    >
      <div class="flex flex-col gap-2">
        <label for="name">Name</label>
        <input
          v-model="form.name"
          class="p-2 text-black rounded-md"
          type="text"
          id="name"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="description">Description</label>
        <textarea
          v-model="form.description"
          id="description"
          cols="10"
          rows="10"
          class="p-2 text-black rounded-md"
          required
        ></textarea>
      </div>
      <div class="flex flex-col gap-2">
        <label for="type">Type</label>
        <select
          v-model="form.type"
          id="type"
          class="p-2 text-black rounded-md"
          required
        >
          <option value="">select type</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="puzzle">Puzzle</option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <label for="releaseDate">Release Date</label>
        <input
          v-model="form.releaseDate"
          type="date"
          id="releaseDate"
          class="p-2 text-black rounded-md"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="image">Game Image</label>
        <input
          type="file"
          @change="onFileChange"
          id="image"
          accept="image/*"
          class="p-2"
        />
      </div>
      <button
        type="submit"
        class="p-2 bg-purple-800 hover:bg-purple-800/50 text-white rounded-lg mt-2"
      >
        Submit
      </button>
    </form>

    <div v-else class="flex flex-col gap-3 text-center">
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl">Data Submitted</h1>
        <p class="text-xl">Thank you for adding your game</p>
      </div>
      <NuxtLink
        to="/"
        class="text-xl border p-2 rounded-lg hover:bg-slate-200/20"
        >Back</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const show = ref(true);
definePageMeta({
  layout: "page",
});

const form = reactive<{
  name: string;
  description: string;
  type: string;
  releaseDate: string;
  image: File | null;
}>({
  name: "",
  description: "",
  type: "",
  releaseDate: "",
  image: null,
});

const onSubmit = (event: Event) => {
  event.preventDefault();
  console.log(form);

  show.value = false;
  // router.push("/");
};

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    form.image = input.files[0];
  }
};
</script>
