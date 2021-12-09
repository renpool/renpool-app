<script lang="ts">
    import { getContext } from "svelte";

    const etherscan = getContext("etherscan");

    export let address: string;
</script>

<a href="{etherscan}{address}" target="_blank" rel="noreferrer">
    {address}
</a>
