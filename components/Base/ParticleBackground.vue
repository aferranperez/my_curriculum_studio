<template>
    <div class="particle-background-container" :class="{ 'dark-mode': theme }">
        <!-- Interactive flashlight background spotlight -->
        <div 
            class="flashlight-spotlight" 
            :style="spotlightStyle"
        ></div>
    </div>
</template>

<script setup lang="ts">
    const theme = useState('theme')

    // Mouse coordinates tracking
    const mouseX = ref(0)
    const mouseY = ref(0)
    const isMouseOnScreen = ref(false)

    // Dynamic CSS radial gradient spotlight
    const spotlightStyle = computed(() => {
        if (!isMouseOnScreen.value) return { opacity: 0 }

        const isDark = theme.value === true
        const glowColor = isDark 
            ? 'rgba(99, 102, 241, 0.15)' 
            : 'rgba(79, 70, 229, 0.12)'

        return {
            opacity: 1,
            background: `radial-gradient(600px circle at ${mouseX.value}px ${mouseY.value}px, ${glowColor} 0%, transparent 80%)`
        }
    })

    onMounted(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.value = e.clientX
            mouseY.value = e.clientY
            isMouseOnScreen.value = true
        }

        const handleMouseLeave = () => {
            isMouseOnScreen.value = false
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)

        onUnmounted(() => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
        })
    })
</script>

<style scoped>
    .particle-background-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
        background-color: #f8fafc;
        transition: background-color 0.4s ease;
    }

    .particle-background-container.dark-mode {
        background-color: #0f172a;
    }

    .flashlight-spotlight {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 0.5s ease-out;
        mix-blend-mode: screen;
    }

    .particle-background-container:not(.dark-mode) .flashlight-spotlight {
        mix-blend-mode: multiply;
    }
</style>
