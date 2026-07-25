<template>
    <div class="card w-full bg-base-100 shadow-xl border border-base-200/50 p-4 sm:p-5 transition-all duration-300 hover:shadow-2xl">
        <h2 class="text-base sm:text-lg font-bold mb-3 sm:mb-4 inline-flex items-center gap-2">
            <Icon name="mdi:email-outline" size="1.1em" class="text-primary"/>
            Send a Message
        </h2>
        
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-2.5 sm:gap-3.5">
            <div class="form-control">
                <label class="label py-0.5">
                    <span class="label-text text-xs font-semibold">Your Name</span>
                </label>
                <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe" 
                    class="input input-bordered input-sm focus:input-primary transition-colors text-xs" 
                    v-model="name"
                    required 
                />
            </div>
            
            <div class="form-control">
                <label class="label py-0.5">
                    <span class="label-text text-xs font-semibold">Your Email</span>
                </label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com" 
                    class="input input-bordered input-sm focus:input-primary transition-colors text-xs" 
                    v-model="email"
                    required 
                />
            </div>

            <div class="form-control">
                <label class="label py-0.5">
                    <span class="label-text text-xs font-semibold">Message</span>
                </label>
                <textarea 
                    name="message"
                    placeholder="How can I help you?" 
                    class="textarea textarea-bordered textarea-sm focus:textarea-primary transition-colors h-24 sm:h-28 text-xs" 
                    v-model="message"
                    required
                ></textarea>
            </div>

            <!-- Feedback Alerts -->
            <div v-if="successMessage" class="alert alert-success shadow-lg text-xs py-2 px-3">
                <span>{{ successMessage }}</span>
            </div>
            <div v-if="errorMessage" class="alert alert-error shadow-lg text-xs py-2 px-3">
                <span>{{ errorMessage }}</span>
            </div>

            <div class="form-control mt-2">
                <button 
                    type="submit" 
                    :disabled="loading"
                    class="btn btn-primary btn-sm w-full transition-all duration-300 hover:brightness-90 active:scale-[0.98]"
                >
                    <span v-if="loading" class="loading loading-spinner loading-xs"></span>
                    <span v-else class="flex items-center justify-center gap-1.5 text-xs">
                        <Icon name="mdi:send" size="1.1em"/>
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
    const loading = ref(false)
    const successMessage = ref('')
    const errorMessage = ref('')

    const handleSubmit = async () => {
        loading.value = true
        successMessage.value = ''
        errorMessage.value = ''

        try {
            const res = await $fetch('/api/contact', {
                method: 'POST',
                body: {
                    name: name.value,
                    email: email.value,
                    message: message.value
                }
            })

            if (res) {
                successMessage.value = 'Thank you! Your message has been sent successfully.'
                name.value = ''
                email.value = ''
                message.value = ''
            }
        } catch (err: any) {
            errorMessage.value = 'Failed to send message. Please try again or write to contact@alejandroferran.dev.'
        } finally {
            loading.value = false
        }
    }
</script>
