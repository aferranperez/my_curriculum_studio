<template>
    <article
        class="flex flex-col gap-y-2 p-4 rounded-2xl"
        :class="theme ? 'hover:bg-gray-800' : 'hover:bg-slate-100'">
            <div v-if="true" class="flex items-center py-5">
                <div class="flex-initial w-5">
                    <Icon
                        name="mdi:pin"
                        color="gray" 
                        size="1.3em"
                        />
                </div>
                <p class="w-64 text-sm text-gray-900" :class="theme ? 'text-white' : 'text-black'">Pinned Cheep</p>
            </div>
            <div class="flex flex-col lg:flex-row gap-x-4">
                <div class="avatar placeholder h-12 mb-4">
                    <div class="bg-neutral text-neutral-content rounded-full w-12">
                        <NuxtImg src="https://scdnkijrtsbaxifoqytd.supabase.co/storage/v1/object/public/posts/profile_image.jpg" loading="lazy"/>
                    </div>
                </div>
                <div class="flex flex-col gap-y-4">
                    <div>
                        <a href="" class="font-bold">Ale ✨</a>
                        <span> • </span>
                        <time class="text-fluid--2"> 
                            <slot name="created_at"/>
                        </time>
                    </div>
                    <!-- <div class="flex flex-row flex-wrap gap-1">
                        <div v-for="badge in post.badges"  class="badge badge-primary badge-md">
                            <span class="font-semibold">{{badge.title}}</span>
                        </div>
                    </div> -->
                    <!-- <NuxtLink :to="`/feed/${post.slug}`"> -->
                        <h2 class="font-bold text-3xl" :class="theme ? 'text-white' : 'text-black'">
                            <slot name="title"/>
                        </h2>
                    <!-- </NuxtLink> -->
                    <p class="mb-4">
                        <slot name="description"/>
                    </p>
                    <!-- <picture>
                        <NuxtImg class="rounded-xl" width="800px" height="500px" :src="post.image_url" loading="lazy"/>
                    </picture> -->
                    <ShareBox/>
                </div>
            </div>
    </article>
</template>

<script setup lang="ts">
    const theme = useState('theme');
</script>