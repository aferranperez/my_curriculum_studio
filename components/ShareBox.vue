<template>
    <div class="flex justify-end gap-x-5">
        <button class="btn btn-sm btn-ghost"> 
            <Icon
            name='ion:share-social'
            color="gray" 
            size="1.8em"
        />
        </button>
        <button class="btn btn-sm btn-ghost" @click="onClick">  
            <Icon
            :name=iconHeart
            color="red" 
            size="1.8em"
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