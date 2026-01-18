<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
    title: { type: String, default: 'Plugin Registry' },
    description: { type: String, default: 'Explore extensions for Mivo.' }
})

const plugins = ref([])
const loading = ref(true)
const searchQuery = ref('')
const activeCategory = ref('All')

// Fetch data
onMounted(async () => {
    try {
        const res = await fetch('/plugins.json')
        plugins.value = await res.json()
    } catch (e) {
        console.error("Failed to load plugins", e)
    } finally {
        loading.value = false
    }
})

// Categories
const categories = computed(() => {
    if (!plugins.value.length) return ['All']
    const cats = new Set(plugins.value.map(p => p.category).filter(Boolean))
    return ['All', ...Array.from(cats).sort()]
})

// Filter Logic
const filteredPlugins = computed(() => {
    return plugins.value.filter(p => {
        const name = p.name || ''
        const desc = p.description || ''
        const query = searchQuery.value.toLowerCase()

        const matchesSearch = name.toLowerCase().includes(query) || 
                              desc.toLowerCase().includes(query) ||
                              (p.tags && p.tags.some(t => t && t.toLowerCase().includes(query)))
        
        const matchesCategory = activeCategory.value === 'All' || p.category === activeCategory.value

        return matchesSearch && matchesCategory
    })
})

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    alert('Clipboard action')
}
</script>

<template>
    <div class="registry-container">
        <!-- Unified Header -->
        <div class="registry-header">
            <h1 class="page-title">{{ title }}</h1>
            <p class="page-description">{{ description }}</p>
        </div>

        <div class="plugin-registry space-y-8">
            <!-- Search & Filter Controls -->
            <div class="controls-wrapper glass-panel">
                <div class="search-container">
                    <div class="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                    <input 
                        v-model="searchQuery" 
                        type="text" 
                        placeholder="Find plugins..."
                        class="search-input"
                    />
                </div>
                
                <div class="vr hidden sm:block"></div>

                <div class="categories">
                    <button 
                        v-for="cat in categories" 
                        :key="cat"
                        @click="activeCategory = cat"
                        :class="{ active: activeCategory === cat }"
                        class="category-pill"
                    >
                        {{ cat }}
                    </button>
                </div>
            </div>

            <div v-if="loading" class="loading-state">
                <div class="spinner"></div>
                <span>Loading registry...</span>
            </div>

            <div v-else class="plugin-grid transition-opacity duration-500" :class="{ 'opacity-0': loading }">
                <div v-for="plugin in filteredPlugins" :key="plugin.id" class="VPFeature plugin-card group">
                    <div class="card-body">
                        <div class="card-header">
                            <div class="plugin-icon-wrapper">
                                <span class="plugin-initial">{{ plugin.name ? plugin.name.charAt(0) : '?' }}</span>
                            </div>
                            <div class="plugin-title-block">
                                <h3 class="plugin-title group-hover:text-brand transition-colors">{{ plugin.name }}</h3>
                                <div class="plugin-meta-row">
                                    <a :href="plugin.repo" target="_blank" class="plugin-author" title="View Author">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        {{ plugin.author }}
                                    </a>
                                    <span class="dot">•</span>
                                    <span class="version">{{ plugin.version }}</span>
                                </div>
                            </div>
                        </div>
                        
                        <p class="plugin-description">{{ plugin.description }}</p>
                        
                        <div class="plugin-tags">
                            <span v-for="tag in plugin.tags" :key="tag" class="tag-pill">{{ tag }}</span>
                        </div>
                    </div>

                    <div class="card-footer">
                        <a :href="plugin.readme" target="_blank" class="VPButton alt action-btn">Docs</a>
                        <a :href="plugin.download" class="VPButton brand action-btn">Download</a>
                    </div>
                </div>
            </div>
            
            <div v-if="!loading && filteredPlugins.length === 0" class="empty-state">
                <div class="empty-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <p class="empty-text">No plugins found matching "{{ searchQuery }}"</p>
                <button @click="searchQuery = ''; activeCategory = 'All'" class="link-btn">Clear filters</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Container & Typography */
.registry-container {
    max-width: 1280px; /* XL breakpoint */
    margin: 0 auto;
    width: 100%;
    padding: 2rem 0;
}

.registry-header {
    margin-bottom: 3rem;
    text-align: left;
}

.page-title {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin-bottom: 0.75rem;
    background: -webkit-linear-gradient(315deg, var(--vp-c-brand-1) 25%, var(--vp-c-text-1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.dark .page-title {
    background: -webkit-linear-gradient(315deg, #fff 25%, var(--vp-c-brand-1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.page-description {
    font-size: 18px;
    color: var(--vp-c-text-2);
    max-width: 600px;
    line-height: 1.6;
}

.plugin-registry {
    /* No margin top needed as header handles spacing */
    min-height: 50vh;
}

/* Glass Control Panel */
.glass-panel {
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px; /* rounded-xl */
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px; /* Increased separation */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

@media (min-width: 640px) {
    .glass-panel {
        flex-direction: row;
        align-items: center;
        padding: 8px 16px;
    }
}

.search-container {
    position: relative;
    flex: 1;
}

.search-icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--vp-c-text-2);
    pointer-events: none;
}

.search-input {
    width: 100%;
    padding: 8px 12px 8px 36px;
    border-radius: 8px;
    border: 1px solid transparent;
    background: transparent;
    color: var(--vp-c-text-1);
    font-size: 14px;
    transition: all 0.2s;
}

.search-input:focus {
    background: var(--vp-c-bg);
    border-color: var(--vp-c-brand-1);
    outline: none;
    box-shadow: 0 0 0 2px rgba(var(--vp-c-brand-1), 0.1);
}

/* Vertical Separator */
.vr {
    width: 1px;
    height: 24px;
    background-color: var(--vp-c-divider);
    margin: 0 8px;
}

.categories {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding: 4px 0;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.category-pill {
    padding: 4px 12px;
    border-radius: 6px; /* Slightly softer than pill */
    border: 1px solid transparent;
    background: transparent;
    color: var(--vp-c-text-2);
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    transition: all 0.2s;
}

.category-pill:hover {
    background: var(--vp-c-bg-elv);
    color: var(--vp-c-text-1);
}

.category-pill.active {
    background: var(--vp-c-brand-1);
    color: var(--vp-c-bg);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Grid & Cards */
.plugin-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

@media (min-width: 768px) {
    .plugin-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .plugin-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.plugin-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 24px;
    /* .VPFeature provides main styling */
}

.card-header {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    margin-bottom: 16px;
}

.plugin-icon-wrapper {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.plugin-initial {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.dark .plugin-initial {
    color: #000;
    text-shadow: none;
}

.plugin-title-block {
    flex: 1;
    min-width: 0;
}

.plugin-title {
    margin: 0 !important;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.group-hover\:text-brand:hover {
    color: var(--vp-c-brand-1);
}

.plugin-meta-row {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;
    font-size: 13px;
    color: var(--vp-c-text-2);
}

.plugin-author {
    display: flex;
    align-items: center;
    gap: 4px;
    color: inherit;
    text-decoration: none !important;
    transition: color 0.2s;
}

.plugin-author:hover {
    color: var(--vp-c-brand-1);
}

.dot {
    opacity: 0.5;
}

.plugin-description {
    font-size: 14px;
    color: var(--vp-c-text-2);
    line-height: 1.6;
    margin: 0 0 20px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 44px; /* Maintain height alignment */
}

.plugin-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 20px;
}

.tag-pill {
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 6px;
    background: var(--vp-c-bg); /* Contrast against card bg */
    color: var(--vp-c-text-2);
    border: 1px solid var(--vp-c-divider);
}

.card-footer {
    margin-top: auto;
    display: flex;
    gap: 10px;
}

.action-btn {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none !important;
    transition: all 0.2s;
}

.empty-state {
    padding: 4rem 2rem;
    text-align: center;
    background: var(--vp-c-bg-alt);
    border-radius: 12px;
    border: 1px dashed var(--vp-c-divider);
}

.empty-icon-wrapper {
    color: var(--vp-c-text-3);
    margin-bottom: 1rem;
    display: inline-block;
}

.empty-text {
    font-size: 16px;
    color: var(--vp-c-text-2);
    margin-bottom: 1rem;
}
</style>
