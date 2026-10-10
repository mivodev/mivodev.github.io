# MIVO Documentation

This repository hosts the source code for the official [MIVO Documentation](https://mivodev.github.io).

## Overview

MIVO (Mikrotik Voucher) is a modern, lightweight voucher management system. This documentation covers installation, configuration, and usage guides.

## Running Locally

This project uses [VitePress](https://vitepress.dev). To run the documentation locally:

1.  **Install Dependencies**:
    ```bash
    pnpm install
    ```

2.  **Start Development Server**:
    ```bash
    pnpm dev
    ```

    Set the registry base URL in a `.env.local` file in the project root:
    ```env
    VITE_REGISTRY_API_BASE_URL=https://your-registry.example/registry
    ```
    The value is read by Vite at development/build time. For production, set `VITE_REGISTRY_API_BASE_URL` as a GitHub Actions repository variable (`Settings > Secrets and variables > Actions > Variables`).

    CORS must be configured by the registry server (or its reverse proxy/CDN). Frontend `VITE_*` variables cannot set CORS response headers, because browsers only accept those headers from the server that responds to the request.

3.  **Build**:
    ```bash
    pnpm build
    ```

## Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/dyzulk/mivo/blob/main/CONTRIBUTING.md) for more details.

## License

Code released under the [MIT License](https://github.com/mivodev/mivodev.github.io/blob/main/LICENSE).
