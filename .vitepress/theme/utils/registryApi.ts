import { getRegistryUrl, type RegistryResource } from './registryConfig'

export async function fetchRegistryJson<T>(resource: RegistryResource): Promise<T> {
    const response = await fetch(getRegistryUrl(resource))
    if (!response.ok) {
        throw new Error(`Failed to fetch ${resource} (${response.status})`)
    }

    return response.json()
}
