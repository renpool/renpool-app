<script context="module" lang="ts">
    export const config: {
        etherscan: string | null;
    } = { etherscan: null };
</script>

<script lang="ts">
    export let address: string;
</script>

<a href="{config.etherscan}{address}" target="_blank" rel="noreferrer">
    {address}
</a>
