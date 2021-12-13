<script context="module" lang="ts">
    export const config = { renToken: "", renPool: "" };
</script>

<script lang="ts">
    import EtherscanLink from "./EtherscanLink.svelte";

    /**
     * Displays the `owner` address of the RenPool.
     */
    export let owner: string;

    /**
     * Displays the `nodeOperator` address of the RenPool
     */
    export let nodeOperator: string;
</script>

<section>
    <h2>Addresses</h2>
    <div class="underline-title"></div>

    <table class="w-full text-left border-collapse">
        <thead>
            <tr>
                <th
                    ><div class="pb-2 pr-2 border-b border-gray-200">
                        Contract or Account
                    </div></th
                >
                <th><div class="pb-2 border-b border-gray-200">Address</div></th
                >
            </tr>
        </thead>
        <tbody class="align-baseline">
            <tr>
                <td class="key">RenToken</td>
                <td class="value">
                    <EtherscanLink address="{config.renToken}" />
                </td>
            </tr>
            <tr>
                <td class="key">RenPool</td>
                <td class="value">
                    <EtherscanLink address="{config.renPool}" />
                </td>
            </tr>
            <tr>
                <td class="key">Owner</td>
                <td class="value"><EtherscanLink address="{owner}" /></td>
            </tr>
            <tr>
                <td class="key">Node Operator</td>
                <td class="value">
                    <EtherscanLink address="{nodeOperator}" />
                </td>
            </tr>
        </tbody>
    </table>
</section>

<style lang="postcss">
    td {
        @apply py-2 pr-2 text-sm whitespace-nowrap;
    }

    th {
        @apply z-20 sticky top-0 text-sm font-semibold text-gray-600 p-0;
    }

    td.key {
        @apply text-indigo-600;
    }

    td.value {
        @apply font-mono text-blue-800;
    }
</style>
