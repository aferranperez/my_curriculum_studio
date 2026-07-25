<template>
    <div>
        <!-- Banner principal de la pagina -->
        <div class="w-full aspect-[4/1] relative overflow-hidden">
            <picture>
                <NuxtImg
                src="https://scdnkijrtsbaxifoqytd.supabase.co/storage/v1/object/public/posts/banner_principal.jfif"
                loading="lazy"
                style="width: 100%; object-fit: cover;"
                />
            </picture>

            <!-- DevOps Infrastructure Command Status Badge Overlay -->
            <div class="absolute top-3 right-3 flex items-center gap-2 bg-gray-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-700/50 shadow-lg text-xs font-mono text-gray-200">
                <span class="relative flex h-2.5 w-2.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span class="text-emerald-400 font-bold">cluster:</span>
                <span>k8s-prod-azure</span>
                <span class="text-gray-500">|</span>
                <span class="text-blue-400 font-bold">status:</span>
                <span class="text-emerald-300">healthy</span>
            </div>
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
                <h1 class="flex text-4xl font-extrabold items-center gap-2" :class="theme === true ? 'text-white' : 'text-black'">
                    Alejandro Ferran 
                    <span class="inline-flex content-start">
                        <Icon
                            name="material-symbols:award-star"
                            color="#3f00e7" 
                            size="0.6em"
                            />
                    </span>
                    <!-- Verified DevOps Engineer Badge -->
                    <span class="badge badge-outline badge-primary text-xs font-mono gap-1 py-2 px-2.5 ml-1">
                        <Icon name="devicon:azure" size="0.9em" />
                        DevOps & Cloud Architect
                    </span>
                </h1>

                <!-- Dynamic Terminal Command Prompt Line -->
                <div class="bg-gray-900 text-emerald-400 p-3 rounded-xl font-mono text-xs overflow-x-auto shadow-inner border border-gray-800 flex items-center justify-between gap-4">
                    <div class="flex items-center gap-2">
                        <span class="text-blue-400 font-bold">~ $</span>
                        <span class="text-gray-100">docker compose up -d --build</span>
                    </div>
                    <div class="flex items-center gap-1.5 text-gray-400 text-[10px]">
                        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>[+] Running 6/6 Container Healthy</span>
                    </div>
                </div>

                <p class="text-sm leading-relaxed" :class="theme === true ? 'text-gray-300' : 'text-gray-700'">
                    🧑‍💻 Telecommunications & Electronics Engineer | Cloud Architect & DevOps Specialist | Linux & Infrastructure Automation
                </p>
                <p class="mb-2 text-sm leading-relaxed" :class="theme === true ? 'text-gray-400' : 'text-gray-600'">
                    My focus is designing and building reliable cloud architectures (Azure/AWS), CI/CD pipelines (Azure DevOps/GitHub Actions), and scalable software solutions.
                </p>
                
                <span class="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                    <span class="flex items-center gap-1.5">
                        <Icon
                            name="solar:programming-bold"
                            :color="theme === true?'white':'black'" 
                            size="1.3em"
                        />DevOps & Cloud
                    </span>
                    <span class="flex items-center gap-1.5">
                        <Icon
                            name="mdi:map-marker"
                            :color="theme === true?'white':'black'"  
                            size="1.3em"
                        />Lisboa, Portugal
                    </span>
                    <span class="flex items-center gap-1.5">
                        <Icon
                            name="mingcute:cake-fill"
                            :color="theme === true?'white':'black'" 
                            size="1.3em"
                        />June 11th
                    </span>
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