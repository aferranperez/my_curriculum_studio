<template>
    <footer class="footer flex flex-col grid-cols-1 lg:grid-cols-2 py-5 px-10 items-center justify-center ">
        <div class="flex items-center text-md font-bold">
            <p class="text-primary">Made with</p>
            <div  class="flex gap-x-2 items-center px-2 py-1 lg:px-3 lg:py-2 rounded-2xl" :class="theme === true ? 'bg-slate-100' : 'bg-slate-900'">
                <Icon
                    name="logos:nuxt-icon"
                    size="1.5em"
                    />
                <span class="text-sm font-bold" :class="theme === true ? 'text-black' : 'text-white'"><NuxtLink class="link link-ghost" to="https://nuxt.com">Nuxt3</NuxtLink></span>
            </div>
            <p class="text-primary">and</p>
            <div  class="flex gap-x-2 items-center px-2 py-1 lg:px-3 lg:py-2 rounded-2xl" :class="theme === true ? 'bg-slate-100' : 'bg-slate-900'">
                <Icon
                    name="logos:tailwindcss-icon"
                    size="1.5em"
                    />
                <span class="text-sm font-bold" :class="theme === true ? 'text-black' : 'text-white'"><NuxtLink class="link link-ghost" to="https://tailwindcss.com">Tailwind</NuxtLink></span>
            </div>
        </div>
        <p class="text-md font-bold">© {{new Date().getFullYear()}} - Developed with ❤️ by Ale_Ferran</p>
    </footer>
</template>

<script setup lang="ts">
    const theme = useState('theme')
</script>