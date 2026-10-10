/// <reference path="./registry-env.d.ts" />

export type RegistryResource = 'plugins' | 'releases'

const registryBaseUrl = import.meta.env.VITE_REGISTRY_API_BASE_URL?.trim().replace(/\/+$/, '')

export function getRegistryUrl(resource: RegistryResource): string {
    if (!registryBaseUrl) {
        throw new Error('VITE_REGISTRY_API_BASE_URL is not configured')
    }

    return `${registryBaseUrl}/${resource}.json`
}
