<template>
    <div class="text-left pb-10">
        <h2 class="mb-2 font-bold text-3xl text-fluid-2">Howdy!</h2>
        <p class="mb-6">I'm Alejandro. I am a developer who loves to program and make all the crazy ideas I come up with come true!</p>
        <p class="mb-6">My love for open source software drives me to actively contribute to the community, sharing knowledge and collaborating with other developers. I strongly believe in teamwork and I'm always willing to listen and learn from my teammates. As a self-taught person, I love discovering new tools and techniques that can improve my workflow and the quality of my projects.</p>
        <p class="mb-6">To maintain a balance between work and rest, I enjoy walking and listening to music. This practice helps me release tension and return to work with renewed energy, ready to face any challenge that comes my way.</p>
        
        <h2 class="mb-2 font-bold text-3xl text-fluid-2"><slot name="title_of_timeline_section"/></h2>
        <div class="mb-6"><slot name="timeline_section"/></div>
        <h2 class="mb-2 font-bold text-3xl text-fluid-2"><slot name="title_of_skills_section"/></h2>
        <div class="grid grid-cols-3 justify-items-center gap-y-4 gap-x-3 lg:gap-20 py-5 mb-6 lg:grid-cols-6">
            <slot name="skills_section"/>
        </div>
    </div>
</template>