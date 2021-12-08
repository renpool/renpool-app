<script lang="ts">
    export let totalPooled: string;
    export let isLocked: boolean;
    export let userBalance: string;

    let rows: { label: string, value: any }[];

    $: {
      rows = [
        { label: 'Total pooled', value: totalPooled },
        { label: 'Pool is locked', value: isLocked },
        { label: 'Your pool balance', value: userBalance },
      ];
    }
</script>

<section>
    <h2>Stats</h2>
    <div class="underline-title" />

    {#each rows as { label, value }}
      <p class="py-1">
          <span class="font-medium">{label}</span>
          <span class="pl-2 text-indigo-500">{value}</span>
      </p>
    {/each}
</section>
