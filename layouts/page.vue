<template>
    <div class="bg-primary text-gray-200 min-h-screen flex flex-col w-full font-family-Poppins">
        <Navbar />
        <main class="flex-1 flex w-full">
            <slot />
        </main>
        <Footer />
    </div>
</template>