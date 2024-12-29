<template>
    <div  class="radial-progress text-center font-bold text-primary" :style="`--value:${value}`" style="--size:7rem; --thickness: 3px;" role="progressbar">
        {{value}}%<br>{{label}}
    </div>
</template>

<script setup lang="ts">
    const { value, label } = defineProps<{
        value: number;
        label: string;
    }>()
</script>