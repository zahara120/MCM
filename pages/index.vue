<script setup lang="ts">
definePageMeta({
  layout: "page",
});

const { data } = await useFetch("/api/allGames/");
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-10 gap-5 w-full p-5">
    <div class="col-span-8 flex flex-col gap-5">
      <NuxtLink to="/detail/1" class="cursor-pointer">
        <NuxtImg
          class="rounded-xl w-full max-h-[380px] aspect-[16/9] object-cover"
          src="/img/header1.jpg"
        />
      </NuxtLink>
      <div class="flex flex-col gap-8">
        <section class="flex flex-wrap gap-3 items-center justify-between">
          <!-- list of tabs -->
          <ul class="w-max-screen overflow-x-auto flex items-center gap-8">
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">
                all game
              </button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">
                new
              </button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">
                popular
              </button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">
                slots
              </button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">
                table game
              </button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">
                live casino
              </button>
            </li>
            <li>
              <button class="capitalize text-xs hover:border-b cursor-pointer">
                jackpots
              </button>
            </li>
          </ul>

          <!-- search -->
          <form action="" class="w-full md:w-fit">
            <input
              type="text"
              placeholder="search game"
              class="min-w-[200px] w-full text-xs rounded-lg px-4 py-3 m-0 bg-secondary"
            />
          </form>
        </section>

        <!-- list of games -->
        <section
          class="grid grid-cols-2 max-h-[250px] md:max-h-[400px] overflow-auto md:grid-cols-5 gap-3"
        >
          <div v-for="i in data" :key="i.id">
            <GameCard :data="i" />
          </div>
        </section>

        <!-- list of games -->
        <section class="flex flex-col gap-5">
          <div class="flex items-center justify-between">
            <h1>Other Games</h1>
            <button
              class="flex items-center gap-2 rounded-lg hover:bg-purple-800/70 focus:bg-purple-800/100 bg-purple-800/50 px-4 py-2 uppercase text-xs"
            >
              <Icon name="bi:arrow-right-short" style="color: white" />
            </button>
          </div>
          <div
            class="grid grid-cols-2 max-h-[350px] md:max-h-[400px] overflow-auto gap-3"
          >
            <div v-for="i in data" :key="i.id">
              <GameProfileCard :data="i" />
            </div>
          </div>
        </section>
      </div>
    </div>
    <aside
      class="hidden md:block sticky top-0 self-start rounded-xl col-span-2 bg-secondary w-full h-screen"
    >
      <GameCatalog />
    </aside>
  </div>
</template>
