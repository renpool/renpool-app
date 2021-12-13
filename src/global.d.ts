/// <reference types="svelte" />
/// <reference types="@sveltejs/kit" />

/**
 * Returns the type of the `props` of the Svelte component.
 * To get the type of the Svelte component use `typeof`.
 *
 * ### Example
 *
 * Given the component `Counter.svelte`
 *
 * ```svelte
 * <!-- Counter.svelte -->
 * <script lang="ts">
 *     export let name: string;
 *     export let counter: number;
 * </script>
 *
 * <!-- content here -->
 * ```
 *
 * then the type of `propsOfCounter` as defined below
 *
 * ```ts
 * let propsOfCounter: PropsOf<typeof Counter>;
 * ```
 *
 * would be equivalent to write
 *
 * ```ts
 * let propsOfCounter: {
 *     name: string;
 *     counter: number;
 * };
 * ```
 */
type PropsOf<
    Component extends new (options: { target: any; props: any }) => any
> = Exclude<ConstructorParameters<Component>[0]["props"], undefined>;

/**
 * Ethereum `Address`es in _ethers.js_ are represented as hexadecimal `string`s.
 * They always start with the `0x` prefix,
 * for example `0xbF115A5538290D234fA31e917241a58A20a847Bc`
 */
type Address = string;
