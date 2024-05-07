/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUB_LYCHEE_KEY: string,
    readonly VITE_LYCHEE_BASE_URL: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}