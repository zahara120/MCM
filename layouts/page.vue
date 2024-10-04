<template>
    <div class="bg-[#1c1a28] text-gray-200 min-h-screen flex flex-col w-full font-family-Poppins">
        <Navbar />
        <main class="flex-1 flex w-full">
            <slot />
        </main>
        <Footer />
    </div>
</template>