<template>
    <article
        class="flex flex-col gap-y-2 p-4 rounded-2xl transition-all duration-300 ease-out feed-card"
        :class="[
            theme ? 'hover:bg-gray-800/80' : 'hover:bg-slate-100/80',
            'hover:shadow-xl hover:-translate-y-1'
        ]">
            <div v-if="is_pinned" class="flex items-center gap-2 py-3">
                <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <Icon
                        name="mdi:pin"
                        color="#3b82f6"
                        size="1em"
                        />
                    <p class="text-xs font-bold text-blue-500 uppercase tracking-wider">Pinned</p>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-x-4">
                <div class="avatar placeholder h-12 mb-4">
                    <div class="bg-neutral text-neutral-content rounded-full w-12 ring-2 ring-primary/30 ring-offset-1 ring-offset-base-100 transition-all duration-300 hover:ring-primary">
                        <NuxtImg src="profile_image.jpg" loading="lazy"/>
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 flex-1">
                    <div class="flex items-center gap-2">
                        <a href="" class="font-bold hover:underline transition-all">Ale ✨</a>
                        <span class="text-gray-400">·</span>
                        <time class="font-medium text-sm text-gray-500"> 
                            <slot name="created_at"/>
                        </time>
                    </div>
                    <div class="flex flex-row flex-wrap gap-1.5">
                        <div v-for="badge in badges" class="badge badge-primary badge-md transition-transform duration-200 hover:scale-105">
                            <span class="font-semibold text-xs">{{badge}}</span>
                        </div>
                    </div>
                    <h2 class="font-bold text-2xl lg:text-3xl leading-tight" :class="theme ? 'text-white' : 'text-gray-900'">
                        <slot name="title"/>
                    </h2>
                    <p class="mb-4 leading-relaxed" :class="theme ? 'text-gray-300' : 'text-gray-600'">
                        <slot name="description"/>
                    </p>
                    <picture 
                        class="overflow-hidden rounded-xl cursor-pointer select-none relative group/img"
                        @dblclick="handleImageDblClick"
                    >
                        <NuxtImg class="rounded-xl w-full transition-transform duration-500 group-hover/img:scale-[1.02]" width="800px" height="500px" :src="src" loading="lazy"/>
                    </picture>
                    <ShareBox ref="shareBoxRef"/>
                </div>
            </div>
    </article>
</template>

<script setup lang="ts">
    const theme = useState('theme');
    const shareBoxRef = ref<any>(null)
    
    const { src, badges, is_pinned=false } = defineProps<{
        src: string,
        badges: [],
        is_pinned: boolean
    }>()

    const handleImageDblClick = (event: MouseEvent) => {
        if (shareBoxRef.value) {
            shareBoxRef.value.triggerLike(event)
        }
    }
</script>

<style scoped>
    .feed-card {
        animation: fadeInUp 0.5s ease-out both;
    }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>