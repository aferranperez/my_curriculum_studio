<template>
    <div class="card w-full bg-base-100 shadow-xl border border-base-200/50 p-6 transition-all duration-300 hover:shadow-2xl">
        <h2 class="text-2xl font-bold mb-6 inline-flex items-center gap-2">
            <Icon name="mdi:email-outline" size="1.2em" class="text-primary"/>
            Send a Message
        </h2>
        
        <!-- Standard Formspree/FormSubmit fallback endpoint that routes to your custom email -->
        <form action="https://formsubmit.co/contact@alejandroferran.dev" method="POST" class="flex flex-col gap-4">
            <!-- FormSubmit Options -->
            <input type="hidden" name="_subject" value="New portfolio contact submission!">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_honey" style="display:none">
            
            <div class="form-control">
                <label class="label">
                    <span class="label-text font-semibold">Your Name</span>
                </label>
                <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe" 
                    class="input input-bordered focus:input-primary transition-colors" 
                    v-model="name"
                    required 
                />
            </div>
            
            <div class="form-control">
                <label class="label">
                    <span class="label-text font-semibold">Your Email</span>
                </label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com" 
                    class="input input-bordered focus:input-primary transition-colors" 
                    v-model="email"
                    required 
                />
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text font-semibold">Message</span>
                </label>
                <textarea 
                    name="message"
                    placeholder="How can I help you?" 
                    class="textarea textarea-bordered focus:textarea-primary transition-colors h-32" 
                    v-model="message"
                    required
                ></textarea>
            </div>

            <div class="form-control mt-4">
                <button type="submit" class="btn btn-primary w-full transition-all duration-300 hover:brightness-90 active:scale-[0.98]">
                    <span class="flex items-center justify-center gap-2">
                        <Icon name="mdi:send" size="1.2em"/>
                        Send Message
                    </span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
    const name = ref('')
    const email = ref('')
    const message = ref('')
</script>
