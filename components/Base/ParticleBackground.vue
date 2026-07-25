<template>
    <canvas ref="canvas" class="particle-canvas"></canvas>
</template>

<script setup lang="ts">
    const canvas = ref<HTMLCanvasElement | null>(null)
    const theme = useState('theme')

    onMounted(() => {
        if (!canvas.value) return

        const ctx = canvas.value.getContext('2d')
        if (!ctx) return

        let animationId: number
        let particles: Particle[] = []

        interface Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            opacity: number
            hue: number
        }

        const resize = () => {
            if (!canvas.value) return
            canvas.value.width = window.innerWidth
            canvas.value.height = document.documentElement.scrollHeight
        }

        const createParticle = (): Particle => ({
            x: Math.random() * (canvas.value?.width || window.innerWidth),
            y: Math.random() * (canvas.value?.height || window.innerHeight),
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.3 + 0.05,
            hue: Math.random() * 60 + 220, // blue-purple range (220-280)
        })

        const PARTICLE_COUNT = 50

        const init = () => {
            particles = Array.from({ length: PARTICLE_COUNT }, createParticle)
        }

        const drawParticle = (p: Particle) => {
            if (!ctx) return
            const isDark = theme.value === true
            const saturation = isDark ? '70%' : '50%'
            const lightness = isDark ? '60%' : '45%'
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
            ctx.fillStyle = `hsla(${p.hue}, ${saturation}, ${lightness}, ${p.opacity})`
            ctx.fill()
        }

        const drawConnections = () => {
            if (!ctx) return
            const maxDist = 150
            const isDark = theme.value === true

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < maxDist) {
                        const opacity = (1 - dist / maxDist) * 0.08
                        const color = isDark ? `rgba(147, 130, 255, ${opacity})` : `rgba(100, 80, 200, ${opacity})`
                        ctx.beginPath()
                        ctx.strokeStyle = color
                        ctx.lineWidth = 0.5
                        ctx.moveTo(particles[i].x, particles[j].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
        }

        const update = () => {
            if (!canvas.value) return
            const w = canvas.value.width
            const h = canvas.value.height

            particles.forEach(p => {
                p.x += p.speedX
                p.y += p.speedY

                // Wrap around edges
                if (p.x < 0) p.x = w
                if (p.x > w) p.x = 0
                if (p.y < 0) p.y = h
                if (p.y > h) p.y = 0
            })
        }

        const animate = () => {
            if (!ctx || !canvas.value) return
            ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
            update()
            drawConnections()
            particles.forEach(drawParticle)
            animationId = requestAnimationFrame(animate)
        }

        resize()
        init()
        animate()

        // Observe body size changes to resize canvas
        const resizeObserver = new ResizeObserver(() => {
            resize()
        })
        resizeObserver.observe(document.documentElement)

        window.addEventListener('resize', resize)

        onUnmounted(() => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
            resizeObserver.disconnect()
        })
    })
</script>

<style scoped>
    .particle-canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    }
</style>
