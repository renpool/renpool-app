/// <reference types="vite/client" />

/*
 * https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 */

interface ImportMetaEnv {

    /**
     * The environment variable `VITE_CHAIN_ID` indicates which network
     * this instance should connect to.
     * For example, to connect to the _Kovan_ testnet, 
     * use the following in your `.env` settings
     * 
     * ```
     * VITE_CHAIN_ID=42
     * ```
     * 
     * #### About its definition
     * 
     * Its type reflects which networks are supported by the application.
     * The `NETWORKS` variable contains the settings for each supported network.
     * With the `typeof` operator, we can its type.
     * 
     * ```ts
     * type N = typeof NETWORKS;
     * // type N = {
     * //     1: {
     * //         name: string; ...; contracts: { ...  };
     * //     }; ...
     * //     1337: { ... };
     * // }
     * ```
     * 
     * In turn, by using the `keyof` operator,
     * we get a type representing only the its keys.
     * 
     * ```
     * type K = keyof N;
     * // type K = 1 | 42 | 1337
     * ```
     * 
     * Notice that its keys are defined as `number`.
     * But the value returned by `import.meta.env.VITE_CHAIN_ID` is a `string`.
     * So we use a template literal type to have the string representation of
     * a number. See
     * https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
     * for more info.
     * 
     * ```
     * type S = `${K}`;
     * // type S = "1" | "42" | "1337"
     * ```
     * 
     */
    readonly VITE_CHAIN_ID: `${keyof typeof import('$lib/config').NETWORKS}`;
    readonly VITE_JSON_RPC_PROVIDER_URL: string;
    readonly VITE_REN_POOL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

/**
 * The `@metamask/providers` package is declared as a `devDependency` in `package.json`.
 * This is because only its type definitions are being used here.
 * See https://github.com/MetaMask/providers.
 * 
 * MetaMask injects the `ethereum` provider at runtime.
 */
interface Window {
    ethereum: import('@metamask/providers').MetaMaskInpageProvider;
}
