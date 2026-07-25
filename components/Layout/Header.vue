<template>
    <div>
        <!-- Banner principal de la pagina -->
        <div class="w-full aspect-[3.5/1] sm:aspect-[4/1] relative overflow-hidden">
            <picture>
                <NuxtImg
                src="https://scdnkijrtsbaxifoqytd.supabase.co/storage/v1/object/public/posts/banner_principal.jfif"
                loading="lazy"
                style="width: 100%; height: 100%; object-fit: cover;"
                />
            </picture>

            <!-- DevOps Infrastructure Command Status Badge Overlay -->
            <div class="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1.5 sm:gap-2 bg-gray-900/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gray-700/50 shadow-lg text-xs font-mono text-gray-200">
                <span class="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
                </span>
                <span class="text-emerald-400 font-bold hidden xs:inline">cluster:</span>
                <span>k8s-prod</span>
                <span class="text-gray-500">|</span>
                <span class="text-emerald-300 font-semibold">healthy</span>
            </div>
        </div>

        <div class="flex flex-col px-4 sm:px-6 lg:px-8 gap-3 sm:gap-5">
            <div class="relative flex justify-end items-center pt-2 pb-3 sm:py-5">
                <!-- Imagen del perfil ampliada a w-24 (96px) en movil -->
                <div class="avatar absolute top-0 left-0 -translate-y-1/2">
                    <div class="w-24 md:w-28 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2 hover:cursor-pointer transition-all shadow-md">
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
                <NuxtLink to="https://linkedin.com/in/alejandro-j-ferran-perez-0685b019a" target="blank">
                    <button class="btn btn-primary btn-sm gap-1.5 px-3">
                        <span class="text-xs sm:text-sm">Follow</span>
                        <Icon
                            name="uil:linkedin"
                            color="white" 
                            size="1.2em"
                        />
                    </button>
                </NuxtLink>
            </div>

            <!-- Caja con todo el resumen del perfil -->
            <div class="grid gap-y-3">
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <h1 class="flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold" :class="theme === true ? 'text-white' : 'text-black'">
                        <span>Alejandro Ferran</span>
                        <span class="inline-flex content-start">
                            <Icon
                                name="material-symbols:award-star"
                                color="#3f00e7" 
                                size="0.6em"
                                />
                        </span>
                    </h1>
                    <!-- Verified DevOps Engineer Badge: justo debajo del nombre en movil y al lado en desktop -->
                    <div class="flex items-center">
                        <span class="badge badge-outline badge-primary text-xs sm:text-sm font-mono gap-1.5 py-2 px-2.5">
                            <Icon name="devicon:azure" size="0.95em" />
                            DevOps & Cloud Architect
                        </span>
                    </div>
                </div>

                <!-- Dynamic Terminal Command Prompt Line -->
                <div class="bg-gray-900 text-emerald-400 p-3 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto shadow-inner border border-gray-800 flex items-center justify-between gap-2">
                    <div class="flex items-center gap-1.5 min-w-0">
                        <span class="text-blue-400 font-bold shrink-0">~ $</span>
                        <span class="text-gray-100 truncate">docker compose up -d --build</span>
                    </div>
                    <div class="flex items-center gap-1 text-gray-400 text-xs shrink-0">
                        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span class="hidden sm:inline">[+] Running</span>
                        <span>6/6 Healthy</span>
                    </div>
                </div>

                <p class="text-sm sm:text-base leading-relaxed" :class="theme === true ? 'text-gray-300' : 'text-gray-700'">
                    🧑‍💻 Telecommunications & Electronics Engineer | Cloud Architect & DevOps Specialist | Linux & Infrastructure Automation
                </p>
                <p class="text-sm sm:text-base leading-relaxed" :class="theme === true ? 'text-gray-400' : 'text-gray-600'">
                    My focus is designing and building reliable cloud architectures (Azure/AWS), CI/CD pipelines (Azure DevOps/GitHub Actions), and scalable software solutions.
                </p>
                
                <span class="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm font-medium">
                    <span class="flex items-center gap-1.5">
                        <Icon
                            name="solar:programming-bold"
                            :color="theme === true?'white':'black'" 
                            size="1.2em"
                        />DevOps & Cloud
                    </span>
                    <span class="flex items-center gap-1.5">
                        <Icon
                            name="mdi:map-marker"
                            :color="theme === true?'white':'black'"  
                            size="1.2em"
                        />Lisboa, Portugal
                    </span>
                    <span class="flex items-center gap-1.5">
                        <Icon
                            name="mingcute:cake-fill"
                            :color="theme === true?'white':'black'" 
                            size="1.2em"
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