<script>
    import Howto from "$lib/Howto.svelte";
    import Step from "$lib/HowtoStep.svelte";

    import { NETWORK } from "src/routes/_config";
    import { FAUCET_AMOUNT, BOND, DECIMALS } from "$lib/net/bond";
    import { formatUnits } from "ethers/lib/utils";

    const CHAIN_ID = parseInt(import.meta.env.VITE_CHAIN_ID);
    const REN_FAUCET_LINK =
        "https://forum.renproject.io/t/is-there-any-ren-faucet-on-kovan/904/3";
</script>

<svelte:head>
    <title>How To | RenPool</title>
</svelte:head>

<Howto title="Instructions">
    <Step title="Connect your Account">
        <div slot="desc">
            Connect your MetaMask account to the <span>{NETWORK.name}</span> network.
            The MetaMask extension must be installed.
        </div></Step
    >
    <Step title="Get Some Ether">
        <div slot="desc">
            Head over <a
                target="_blank"
                rel="noreferrer"
                href="{NETWORK.faucet}">{NETWORK.faucet}</a
            >
            &nbsp;and get some test ETH to pay for transactions.
        </div>
    </Step>
    <Step title="Get Some REN">
        <div slot="desc">
            {#if CHAIN_ID === 1337}
                Get {parseInt(formatUnits(FAUCET_AMOUNT, DECIMALS), 10)} REN tokens
                by pressing the button below. To verify that the tokens are in your
                wallet, switch to the <span>Assets</span> tab in your MetaMask
                and press the
                <span>Add Tokens</span> button. Paste the address of the RenToken
                contract above.
            {:else}
                Request some REN test tokens from the ren protocol. See <a
                    target="_blank"
                    rel="noreferrer"
                    href="{REN_FAUCET_LINK}">{REN_FAUCET_LINK}</a
                >. To verify that the tokens are in your wallet, switch to the
                <span>Assets</span>
                tab in your MetaMask and press the <span>Add Tokens</span> button.
                Paste the address of the RenToken contract above.
            {/if}
        </div>
    </Step>
    <Step title="Enter the RenPool">
        <div slot="desc">
            Enter the amount of REN you would like to deposit in the form above
            and hit the <span>Approve</span> button (this is only required for
            the first time). After the transaction is approved, you will be able
            to
            <span>Deposit</span>
            the desired amount of REN until the {parseInt(
                formatUnits(BOND, DECIMALS),
                10
            )} target is reached. Once the pool is full, we lock deposits and withdraws
            and transfer the tokens to the REN protocol to spin up a new Darknode
            instance. You can find more info on how the Dark node is setup in the
            following link
            <a href="/">TODO</a>.
        </div>
    </Step>
    <Step title="Withdraw">
        <div slot="desc">
            You can withdraw all the funds at any time as long as the pool
            hasn&apos;t been locked.
        </div>
    </Step>
    <Step title="Claim Rewards">
        <div slot="desc">
            When the darknode starts to generate revenue, you can claim rewards
            TODO
        </div>
    </Step>
</Howto>

<style lang="postcss">
    span {
        @apply font-bold;
    }
</style>
