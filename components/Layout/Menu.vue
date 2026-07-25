<template>
    <div class="flex mb-5 fixed bottom-4 z-50 left-1/2 -translate-x-1/2 w-[90%] max-w-md">
        <ul class="menu menu-horizontal justify-around items-center backdrop-filter backdrop-blur-xl rounded-full w-full border shadow-xl transition-all duration-300 py-1.5 px-4 gap-x-2"
            :class="theme ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'">
            <li v-for="link in router" class="flex-1 text-center">
                <NuxtLink
                    :class="[
                        route.path===link.path ? 'active font-extrabold bg-primary/10' : 'font-bold bg-transparent',
                        'text-primary transition-all duration-200 hover:scale-105 rounded-full flex flex-col items-center justify-center py-2 gap-1 text-xs'
                    ]"
                    :to="link.path">
                    <Icon :name="link.icon" size="1.4em"/>
                    <span>{{link.label}}</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()
    const theme = useState('theme')

    const router = [
        { path:'/feed' , label:'Feed', icon: 'mdi:newspaper-variant-outline'},
        { path:'/about' , label:'About', icon: 'mdi:account-outline'},
        { path:'/services' , label:'Services', icon: 'mdi:briefcase-outline'},
    ]
</script>
