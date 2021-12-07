<script context="module" lang="ts">
	export const config: { renPool: string | null } = { renPool: null };
</script>

<script>
	import Logo from "./img/Logo.svelte";
</script>

<header class="text-gray-600 bg-purple-100">
	<div
		class="container mx-auto flex flex-wrap px-5 py-3 flex-col sm:flex-row items-center"
	>
		<a class="flex title-font items-center md:mb-0" href="/">
			<Logo />
			<div class="flex flex-wrap flex-col items-start text-left">
				<div class="ml-3 text-2xl font-bold text-gray-900">RenPool</div>
				<p class="ml-3 text-sm text-grey-dark">Community RenPools</p>
			</div>
		</a>
		<nav
			class="md:ml-auto flex flex-wrap items-center text-base justify-center"
		>
			<a href="/">Home</a>
			<a href="/pools/{config.renPool}/deposit">Deposit</a>
			<a href="/pools/{config.renPool}/withdraw">Withdraw</a>
			<a href="/howto">How To</a>
		</nav>
		<slot />
	</div>
</header>

<style lang="postcss">
	nav a {
		@apply mr-5 hover:text-gray-900;
	}
</style>
