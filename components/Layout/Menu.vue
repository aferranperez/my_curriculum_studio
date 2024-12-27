<template>
    <div class="flex mb-5 fixed bottom-0 z-50">
        <ul class="menu menu-md lg:menu-md menu-horizontal bg-white backdrop-filter backdrop-blur-lg rounded-box flex-grow border-2">
            <li
                v-for="link in router"><NuxtLink
                :class="route.path===link.path?'active':''"
                class="text-primary font-extrabold"
                :to="link.path">{{link.label}}</NuxtLink></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()

    const router = [
        { path:'/feed' , label:'Feed'},
        { path:'/about' , label:'About'},
        { path:'/services' , label:'Services'},
        // { path:'/contact' , label:'Contact'}
    ]
</script>
