<script>
    import { tweened } from "svelte/motion";

    export let title = "";
    export let issues = 0;
    export let tags = [];
    export let completedIssues = 0;
    let percentage = Math.floor((100 / issues) * completedIssues) || 0;
    let tweenedCompletedIssues = tweened(0, {
        duration: 1500,
    });
    $: tweenedCompletedIssues.set(percentage);
</script>

<div class="card">
    <h3 class="card-title">{title}</h3>
    <small class="issue">{issues} Issues</small>
    <div>
        <span class="progress-bar-value"
            >{$tweenedCompletedIssues.toFixed(0)}%</span
        >
        <div class="progress-bar">
            <div
                class="progress-bar-fill"
                style="width: {$tweenedCompletedIssues.toFixed(0)}%"
            />
        </div>
    </div>
    {#if tags.length > 0}
        <div class="tags">
            {#each tags as tag}
                <span class="tag">{tag}</span>
            {/each}
        </div>
    {/if}
</div>

<style>
    .card {
        user-select: none;
        background-color: var(--white-color);
        border-radius: var(--border-radius);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        padding: 2rem;
        color: var(--black-color);
        border-bottom: 3px solid var(--primary-color);
        transition-property: box-shadow, transform;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .card .card-title {
        font-size: 1.2em;
        font-weight: var(--font-medium);
        margin-bottom: 0.2rem;
    }

    .card .card-text {
        color: var(--gray-color-2);
        font-weight: 400;
        line-height: var(--line-height-2);
        font-size: 0.8em;
        margin-top: 0.6rem;
    }

    .issue {
        display: block;
        color: var(--gray-color-2);
        font-weight: var(--font-regular);
        margin-bottom: 1rem;
    }
</style>
