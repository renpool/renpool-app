<script lang="ts">
    export let totalPooled: string;
    export let isLocked: boolean;
    export let userBalance: string;

    let rows: { title: string, value: any }[];

    $: {
      rows = [
        { title: 'Total pooled', value: totalPooled },
        { title: 'Pool is locked', value: isLocked },
        { title: 'Your pool balance', value: userBalance },
      ];
    }
</script>

<section>
    <h2>Stats</h2>
    <div class="underline-title" />

    {#each rows as { title, value }}
      <p class="py-1">
          <span class="font-medium">{title}</span>
          <span class="pl-2 text-indigo-500">{value}</span>
      </p>
    {/each}
</section>
