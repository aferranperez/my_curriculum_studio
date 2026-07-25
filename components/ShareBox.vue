<template>
    <div class="flex justify-end gap-x-3 pt-2">
        <button class="btn btn-sm btn-ghost hover:bg-blue-500/10 transition-all duration-200 group"> 
            <Icon
            name='ion:share-social'
            class="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" 
            size="1.6em"
        />
        </button>
        <button class="btn btn-sm btn-ghost hover:bg-red-500/10 transition-all duration-200 group" @click="onClick">  
            <Icon
            :name=iconHeart
            class="transition-all duration-300"
            :class="like ? 'text-red-500 scale-110' : 'text-gray-400 group-hover:text-red-400'"
            size="1.6em"
            />
        </button>
    </div>
</template>

<script setup lang="ts">
    const like = ref(false)
    const onClick = () => {
        like.value = !like.value
    }
    const iconHeart = computed( () => {
        return like.value ? 'mdi:heart' : 'mdi:heart-outline'
    })
</script>