<script setup lang="ts">
  const theme         = useState('theme');

  const { technologies } = defineProps<{
    technologies: {
      "icon": string
      "title": string
    }[],
  }>()

</script>

<template>
  <div class="card w-full bg-base-100 shadow-2xl mb-5">
    <div class="card-body">
      <h2 class="card-title font-bold hover:cursor-pointer hover:underline">
        <slot name="title"/>
      </h2>
      <p><slot name="description"/></p>
      <div class="card-actions">
        <div
            v-for="item in technologies"
            class="flex gap-x-2 items-center px-3 py-2 rounded-2xl"
           :class="theme === true ? 'bg-slate-200' : 'bg-slate-900'">
          <Icon
              :name="item.icon"
              size="1em"
          />
          <span class="text-sm font-bold" :class="theme === true ? 'text-black' : 'text-white'">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>

</template>
