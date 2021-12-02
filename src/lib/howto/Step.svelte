<script lang="ts">
    import { getContext } from "svelte";

    export let title: string;

    const step = getContext("step") as { count: number };
    const index = step.count;
    step.count += 1;
</script>

<div class="step-container">
    <div class="step-line-pos">
        <div class="step-line" />
    </div>
    <div class="step-no">{index}</div>
    <div class="step-card">
        <div class="step-img">
            <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-12 h-12"
                viewBox="0 0 24 24"
            >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        </div>
        <div class="step-desc">
            <h2 class="step-title">{title}</h2>
            <p class="leading-relaxed">
                <slot name="desc">
                    <em>no description for this step was provided</em>
                </slot>
            </p>
        </div>
    </div>
</div>

<style lang="postcss">
    .step-container {
        @apply flex relative pb-10 sm:items-center md:w-3/4 mx-auto;
    }

    .step-line-pos {
        @apply h-full w-6 absolute inset-0 flex items-center justify-center;
    }

    .step-line {
        @apply h-full w-1 bg-gray-200 pointer-events-none;
    }

    .step-no {
        @apply flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 font-medium text-sm;
    }

    .step-card {
        @apply flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row;
    }

    .step-img {
        @apply flex-shrink-0 w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full inline-flex items-center justify-center;
    }

    .step-desc {
        @apply flex-grow sm:pl-6 mt-6 sm:mt-0;
    }

    .step-title {
        @apply font-medium text-gray-900 mb-1 text-xl;
    }
</style>
