<script setup>
import { ref, onMounted } from 'vue'

const releases = ref([])
const loading = ref(true)
const error = ref(null)

const formatSize = (bytes) => {
    if (bytes === 0) return '-'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

onMounted(async () => {
    try {
        const res = await fetch('https://mivodev.github.io/registry/releases.json')
        if (!res.ok) throw new Error('Failed to load releases')
        releases.value = await res.json()
    } catch (e) {
        error.value = e.message
        console.error(e)
    } finally {
        loading.value = false
    }
})
</script>

<template>
    <div class="release-archive">
        <div v-if="loading" class="text-center p-4 text-accents-5">Loading archive...</div>
        <div v-else-if="error" class="text-error p-4">Error: {{ error }}</div>
        
        <div v-else class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="border-b border-accents-2">
                        <th class="py-2 px-4 font-semibold">Version</th>
                        <th class="py-2 px-4 font-semibold">Date</th>
                        <th class="py-2 px-4 font-semibold">Size</th>
                        <th class="py-2 px-4 font-semibold text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="release in releases" :key="release.version" class="border-b border-accents-2 hover:bg-accents-1 transition-colors">
                        <td class="py-3 px-4">
                            <span class="font-mono font-bold">{{ release.version }}</span>
                            <span v-if="release.latest" class="ml-2 text-xs bg-brand text-white px-2 py-0.5 rounded-full">Latest</span>
                            <span v-if="release.prerelease" class="ml-2 text-xs bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full">Pre-release</span>
                        </td>
                        <td class="py-3 px-4 text-sm text-accents-5">{{ release.date }}</td>
                        <td class="py-3 px-4 text-sm font-mono text-accents-5">{{ formatSize(release.size) }}</td>
                        <td class="py-3 px-4 text-right">
                            <a :href="release.download" class="text-brand hover:underline text-sm font-medium mr-4">Download</a>
                            <a :href="release.notes" target="_blank" class="text-accents-4 hover:text-foreground text-sm">Notes</a>
                        </td>
                    </tr>
                   <tr v-if="releases.length === 0">
                        <td colspan="4" class="text-center py-8 text-accents-4 italic">No releases found.</td>
                   </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
/* Scoped styles if needed, mostly utilizing VP classes or Tailwind utilities assuming availability */
.text-error { color: var(--vp-c-danger-1); }
</style>
