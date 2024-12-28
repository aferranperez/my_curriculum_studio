<template>
    <h2 class="mb-2 font-bold text-3xl text-fluid-2">Timeline of my Experiencie</h2>
    <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
        <li v-if="data" v-for="item in data?.body" class="-mb-2">
            <div class="timeline-middle text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-end mb-10 px-3" >
                <time class="text-sm font-bold text-primary">{{ item?.time }}</time>
                <div class="mb-2">
                    <div class="flex justify-between">
                        <span class="text-sm font-semibold">{{ item?.company }}</span>
                        <span class="text-sm font-semibold">{{ item?.location }}</span>
                    </div>
                    <p class="text-lg font-black">{{ item?.position }}</p>
                </div>
                
                <ul class="list-disc px-5" v-html="item?.description">
                </ul>
            </div>
            <hr/>
        </li>
    </ul>
</template>

<script setup lang="ts">

interface TimelineData {
    body: Array<{
        time: string;
        position: string;
        company: string;
        location: string;
        description: string;
    }>;
}

const { data } = await useAsyncData('timeline', () => queryContent('/data/timeline_data').findOne())

</script>
