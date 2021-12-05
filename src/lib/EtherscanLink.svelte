<script lang="ts">
    import { NETWORK } from "./config";

    export let address: string;
</script>

<a href="{NETWORK.etherscan}{address}" target="_blank" rel="noreferrer">
    {address}
</a>
