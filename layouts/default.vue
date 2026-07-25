<template>
    <div :data-theme="theme?'dark':'light'" class="pb-24 min-h-screen relative">
        <BaseParticleBackground/>
        <div class="relative z-10">
            <LayoutNavBar/>
            <header class="flex flex-col items-center gap-y-6 sm:gap-y-10 max-w-3xl mx-auto mb-5">
                <LayoutHeader/>
                <LayoutMenu/>
            </header>
            <main class="flex flex-col px-3 sm:px-6 gap-y-6 sm:gap-y-10 max-w-3xl mx-auto mb-20">
                <slot/>
            </main>
            <LayoutFooter/>
        </div>
    </div>
</template>

<script setup lang="ts">
    const theme = useState('theme')
</script>
