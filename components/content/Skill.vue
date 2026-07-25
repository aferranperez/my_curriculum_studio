<template>
    <div class="radial-progress text-center font-bold text-primary skill-item transition-transform duration-300 hover:scale-110" 
         :style="`--value:${value}`" 
         style="--size:7rem; --thickness: 3px;" 
         role="progressbar">
        <span class="text-lg">{{value}}%</span><br>
        <span class="text-xs opacity-75">{{label}}</span>
    </div>
</template>

<script setup lang="ts">
    const { value, label } = defineProps<{
        value: number;
        label: string;
    }>()
</script>

<style scoped>
    .skill-item {
        animation: scaleIn 0.4s ease-out both;
    }
    @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
    }
</style>