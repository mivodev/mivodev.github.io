type RegistryResource = 'plugins' | 'releases' | 'localPlugins'

const registryBaseUrl = (
    import.meta.env.VITE_REGISTRY_API_BASE_URL || 'https://gh.mivo.dpdns.org/registry'
).replace(/\/+$/, '')

const registryEndpoints: Record<RegistryResource, string> = {
    plugins: `${registryBaseUrl}/plugins.json`,
    releases: `${registryBaseUrl}/releases.json`,
    localPlugins: '/plugins.json'
}

export async function fetchRegistryJson<T>(resource: RegistryResource): Promise<T> {
    const response = await fetch(registryEndpoints[resource])
    if (!response.ok) {
        throw new Error(`Failed to fetch ${resource} (${response.status})`)
    }

    return response.json()
}
