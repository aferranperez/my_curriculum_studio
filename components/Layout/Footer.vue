<template>
    <footer class="footer flex flex-col py-8 px-10 items-center justify-center gap-4 border-t border-base-200/30">
        <div class="flex items-center text-sm font-bold gap-2 flex-wrap justify-center">
            <span class="text-primary">Made with</span>
            <div class="flex gap-x-1.5 items-center px-2 py-1 rounded-xl transition-all duration-200 hover:scale-105" :class="theme === true ? 'bg-slate-100' : 'bg-slate-900'">
                <Icon name="logos:nuxt-icon" size="0.9em"/>
                <span class="text-xs font-bold" :class="theme === true ? 'text-black' : 'text-white'"><NuxtLink class="link link-ghost hover:text-primary transition-colors" to="https://nuxt.com">Nuxt3</NuxtLink></span>
            </div>
            <span class="text-primary">and</span>
            <div class="flex gap-x-1.5 items-center px-2 py-1 rounded-xl transition-all duration-200 hover:scale-105" :class="theme === true ? 'bg-slate-100' : 'bg-slate-900'">
                <Icon name="logos:tailwindcss-icon" size="0.9em"/>
                <span class="text-xs font-bold" :class="theme === true ? 'text-black' : 'text-white'"><NuxtLink class="link link-ghost hover:text-primary transition-colors" to="https://tailwindcss.com">Tailwind</NuxtLink></span>
            </div>
        </div>
        <div class="text-xs font-medium text-gray-500 text-center flex flex-wrap justify-center gap-1">
            <span>© {{new Date().getFullYear()}} — Developed with ❤️ by</span>
            <span class="font-bold text-primary">Ale_Ferran</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
    const theme = useState('theme')
</script>