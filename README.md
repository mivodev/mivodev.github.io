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

    Registry API requests use `https://gh.mivo.dpdns.org/registry` by default. To use another registry, create a `.env.local` file in the project root and set its base URL:
    ```env
    VITE_REGISTRY_API_BASE_URL=https://example.com/registry
    ```
    This value is read by Vite at development/build time.

3.  **Build**:
    ```bash
    pnpm build
    ```

## Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/dyzulk/mivo/blob/main/CONTRIBUTING.md) for more details.

## License

Code released under the [MIT License](https://github.com/mivodev/mivodev.github.io/blob/main/LICENSE).
