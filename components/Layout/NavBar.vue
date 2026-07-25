<template>
    <nav class="navbar sticky top-0 z-50 bg-transparent backdrop-filter backdrop-blur-xl px-5 border-b border-base-200/30 transition-all duration-300">
        <div class="navbar-start">
            <NuxtLink to="/feed" class="btn btn-ghost text-xl font-extrabold tracking-tight hover:bg-transparent">
                <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Alejandro</span><span>Ferran</span>
            </NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
        </div>
        <div class="navbar-end">
            <BaseThemeController/>
        </div>
    </nav>
</template>