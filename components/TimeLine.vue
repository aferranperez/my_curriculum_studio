<template>
    <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
        <li v-for="item in timeline" class="-mb-2">
            <div class="timeline-middle text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
            </div>
            <div class="timeline-end mb-10 px-3" >
                <time class="text-sm font-bold text-primary">{{ item.time }}</time>
                <div class="mb-2">
                    <div class="flex justify-between">
                        <span class="text-sm font-semibold">{{ item?.company }}</span>
                        <span class="text-sm font-semibold">{{ item.location }}</span>
                    </div>
                    <p class="text-lg font-black">{{ item.position }}</p>
                </div>
                
                <ul class="list-disc px-5" v-html="item.description">
                </ul>
            </div>
            <hr/>
        </li>
    </ul>
</template>

<script setup lang="ts">

const timeline = [
    {
        time:'2022 - Present',
        position: 'Software Developer',
        company: 'Freelancer',
        location: 'Cuba / Portugal',
        description: "<li>Implementation of websites using Javascript technologies such as Vue3, Nuxt3 and React JS.</li><li>Development of microservices architecture to separate frontend logic from backoffice logic.</li><li>Content management using Wordpress and integrating it with custom sites developed in Nuxt3.</li><li>Implementation of fast, scalable and flexible sites.</li><li>Creation of SEO friendly applications, using different types of rendering provided by Nuxt3.</li>"
    },
    {
        time:'2023 - 2024',
        position: 'Frontend Developer',
        company: 'Assetmindr',
        location: 'Estados Unidos',
        description: "<li>Use of frameworks such as Nuxt3 and SvelteKit.</li><li>Implementation of AWS Lambdas Functions using Python.</li><li>Implement user interfaces using Tailwind and DaisyUI.</li><li> Use of libraries such as ChartJS and Apexchart to implement different types of graphs. </li><li>Develop a cloud-based solution for the management and optimization of multifamily assets.</li><li>Development of a dashboard with graphs, tables and personalized alerts, to improve data reading and analysis.</li><li>Integration with AWS services.</li>"
    },
    {
        time:'2022 - 2023',
        position: 'Soft. Developer and Systems Administrator',
        company: 'Connus Shop',
        location: 'Panamá',
        description: "<li>Creation of scripts in PHP and Javascript for the maintenance of the store.</li><li>Creation of a new frontend for the store, using Nuxt3 and Storefront UI.</li><li>Administration of a system based on Woocomerce.</li><li>Integration of the system with an ERP, to synchronize all orders, products and clients.</li><li>SEO tasks using Yoast SEO, Google Analytics and Google Search Console.< /li>"
    },
    {
        time:'2022 - 2023',
        position: 'ICT Systems Administrator',
        company: 'Ministry of Higher Education in Cuba',
        location: 'Cuba',
        description: "<li>Deployment and maintenance of Linux-based servers.</li><li>Detection of network vulnerabilities, using Nmap, Kali Linux, Wireshark and Metasploit.</li><li>Creation of Python scripts to automate processes on the servers.</li><li>Manage the network using tools like Zabbix and pfSense</li>"
    },

]
</script>
