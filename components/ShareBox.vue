<template>
    <div class="relative flex justify-end gap-x-3 pt-2">
        <!-- Floating Instagram-style animated heart burst overlay -->
        <Teleport to="body">
            <div 
                v-if="showAnimation" 
                class="fixed pointer-events-none z-[99999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 heart-popup"
                :style="{ left: `${animX}px`, top: `${animY}px` }"
            >
                <Icon name="mdi:heart" class="text-red-500 drop-shadow-[0_10px_20px_rgba(239,68,68,0.5)]" size="6em" />
            </div>
        </Teleport>

        <button class="btn btn-sm btn-ghost hover:bg-blue-500/10 transition-all duration-200 group" title="Share"> 
            <Icon
                name='ion:share-social'
                class="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" 
                size="1.6em"
            />
        </button>
        <button 
            ref="heartBtn"
            class="btn btn-sm btn-ghost hover:bg-red-500/10 transition-all duration-200 group" 
            @click="triggerLike($event)"
            title="Like"
        >  
            <Icon
                :name="iconHeart"
                class="transition-all duration-300"
                :class="like ? 'text-red-500 scale-125' : 'text-gray-400 group-hover:text-red-400'"
                size="1.6em"
            />
        </button>
    </div>
</template>

<script setup lang="ts">
    const like = ref(false)
    const showAnimation = ref(false)
    const animX = ref(0)
    const animY = ref(0)
    const heartBtn = ref<HTMLElement | null>(null)

    const triggerLike = (event?: MouseEvent) => {
        like.value = !like.value

        // Only show burst animation when liking (toggling to true)
        if (like.value) {
            if (event && event.clientX && event.clientY) {
                animX.value = event.clientX
                animY.value = event.clientY
            } else if (heartBtn.value) {
                const rect = heartBtn.value.getBoundingClientRect()
                animX.value = rect.left + rect.width / 2
                animY.value = rect.top + rect.height / 2
            }

            showAnimation.value = true
            setTimeout(() => {
                showAnimation.value = false
            }, 900)
        }
    }

    const iconHeart = computed(() => {
        return like.value ? 'mdi:heart' : 'mdi:heart-outline'
    })

    // Expose trigger method so parent cards (FeedCard) can invoke it on double-tap
    defineExpose({
        triggerLike
    })
</script>

<style scoped>
.heart-popup {
    animation: instagramHeartBurst 0.9s ease-out forwards;
}

@keyframes instagramHeartBurst {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0) rotate(-15deg);
    }
    15% {
        opacity: 0.9;
        transform: translate(-50%, -50%) scale(1.2) rotate(0deg);
    }
    30% {
        transform: translate(-50%, -50%) scale(0.95) rotate(5deg);
    }
    45% {
        transform: translate(-50%, -50%) scale(1.05) rotate(0deg);
    }
    80% {
        opacity: 0.9;
        transform: translate(-50%, -50%) scale(1) translateY(0);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1.4) translateY(-40px);
    }
}
</style>