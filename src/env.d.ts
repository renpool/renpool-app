/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CHAIN_ID: keyof typeof import('$lib/config').NETWORKS;
    readonly INFURA_PROJECT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
