<template>
    <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
        <li class="-mb-2 timeline-item">
            <div class="timeline-middle text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 transition-transform duration-300 hover:scale-125"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-end mb-10 px-1 py-1 transition-all duration-300">
                <time class="text-sm font-bold text-primary inline-flex items-center gap-1.5">
                    <Icon name="mdi:calendar-clock" size="1.2em"/>
                    {{ time }}
                </time>
                <div class="mb-3 mt-1">
                    <div class="flex justify-between items-center flex-wrap gap-2">
                        <span class="text-sm font-bold inline-flex items-center gap-1.5">
                            <Icon name="mdi:office-building" size="1.2em" class="text-primary"/>
                            {{ company }}
                        </span>
                        <span class="text-xs font-semibold inline-flex items-center gap-1.5 text-gray-500">
                            <Icon name="mdi:map-marker" size="1.1em"/>
                            {{ location }}
                        </span>
                    </div>
                    <p class="text-lg font-black mt-2 text-primary/90">{{ position }}</p>
                </div>
                <ul class="list-disc px-5 leading-relaxed space-y-1.5 text-sm" v-html="description"></ul>
            </div>
            <hr/>
        </li>
    </ul>
</template>

<script setup lang="ts">
    const { time, company, location, position, description } = defineProps<{
        time: string;
        company: string;
        location: string;
        position: string; 
        description: string;
    }>()
</script>

<style scoped>
    .timeline-item {
        animation: slideInLeft 0.5s ease-out both;
    }
    @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-15px); }
        to { opacity: 1; transform: translateX(0); }
    }
</style>
