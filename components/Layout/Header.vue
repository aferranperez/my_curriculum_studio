<template>
    <div>
        <!-- Banner principal de la pagina -->
        <div class="w-full aspect-[4/1]">
            <picture>
                <NuxtImg
                src="https://scdnkijrtsbaxifoqytd.supabase.co/storage/v1/object/public/posts/banner_principal.jfif"
                loading="lazy"
                style="width: 100%; object-fit: cover;"
                />
            </picture>
        </div>
        <div class="flex flex-col px-6 lg:px-8 gap-5">
            <div class="relative flex justify-end items-center py-5">
                <!-- Imagen del perfil -->
                <div class="avatar absolute top-0 left-0 -translate-y-1/2">
                    <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:cursor-pointer">
                        <picture>
                            <NuxtImg
                                src="https://scdnkijrtsbaxifoqytd.supabase.co/storage/v1/object/public/posts/profile_image.jpg"
                                loading="lazy" 
                                ref="el"
                                id="fullscreen"
                                @click="toggle"
                            />
                        </picture>
                    </div>
                </div>
                <!-- Enlace para el perfil de Linkedin -->
                <NuxtLink to="https://linkedin.com/in/alejandro-j-ferran-perez-0685b019a" target="blank"><button class="btn btn-primary btn-sm">
                    <span>Follow</span>
                    <Icon
                        name="uil:linkedin"
                        color="white" 
                        size="2em"
                        />
                </button></NuxtLink>
            </div>
            <!-- Caja con todo el resumen del perfil -->
            <div class="grid gap-y-3">
                <h1 class="flex text-4xl font-extrabold" :class="theme === true ? 'text-white' : 'text-black'">Alejandro Ferran <span class="grid content-start">
                    <Icon
                        name="material-symbols:award-star"
                        color="#3f00e7" 
                        size="0.6em"
                        />
                </span></h1>
                <p>-FullStack Web Developer | Linux | Python | Nuxt3, Vue3, Tailwind CSS, Typescript 🧑‍💻</p>
                <p class="mb-2">-Telecommunications and Electronics Engineer. Creative Software Engineer. My focus is on creating innovative technology 
                    solutions that solve problems and improve efficiency.</p>
                <span class="flex gap-x-5">
                    <span class="flex items-center gap-1"><Icon
                        name="solar:programming-bold"
                        :color="theme === true?'white':'black'" 
                        size="1.5em"
                        />Programming</span>
                    <span to="#" class="flex items-center gap-1"><Icon
                        name="mdi:map-marker"
                        :color="theme === true?'white':'black'"  
                        size="1.5em"
                        />Lisboa</span>
                    <span class="flex items-center gap-1"><Icon
                        name="mingcute:cake-fill"
                        :color="theme === true?'white':'black'" 
                        size="1.5em"
                        />June 11th</span>
                </span>
                <BaseContact/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const theme = useState('theme')

    import { useFullscreen } from '@vueuse/core'

    const el = ref(null)
    const { toggle } = useFullscreen(el)
</script>

<style scoped lang="css">
    #fullscreen:fullscreen {
        width: 50%;
        object-fit: contain;
        background-color: transparent;
    }
</style>