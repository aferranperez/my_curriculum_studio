<script setup lang="ts">
  const theme = useState('theme');

  const { technologies } = defineProps<{
    technologies: {
      "icon": string
      "title": string
    }[],
  }>()
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl mb-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-base-200/50 overflow-hidden group">
    <div class="card-body">
      <h2 class="card-title font-bold text-xl hover:cursor-pointer group-hover:text-primary transition-colors duration-300">
        <slot name="title"/>
      </h2>
      <p class="leading-relaxed" :class="theme ? 'text-gray-300' : 'text-gray-600'">
        <slot name="description"/>
      </p>
      <div class="card-actions mt-3 flex-wrap">
        <div
            v-for="item in technologies"
            class="flex gap-x-1.5 items-center px-2 py-1 rounded-xl transition-all duration-200 hover:scale-105"
           :class="theme === true ? 'bg-slate-200' : 'bg-slate-900'">
          <Icon
              :name="item.icon"
              size="0.9em"
          />
          <span class="text-xs font-bold" :class="theme === true ? 'text-black' : 'text-white'">{{ item.title }}</span>
        </div>
      </div>
    </div>
    <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
</template>
