<script>
    import Icon from "../shared/Icon.svelte";
    import { tweened } from "svelte/motion";
    import { expoInOut } from "svelte/easing";
    import projectStore, { deleteProject } from "../stores/projectStore";
    import pageStore, {
        BUGS_PAGE,
        changeBugProjectId,
    } from "../stores/pageStore";

    export let id;
    export let title = "";
    export let issues = 0;
    export let tags = [];
    export let completedIssues = 0;
    export let priority = "no";
    let percentage = Math.floor((100 / issues) * completedIssues) || 0;
    let tweenedCompletedIssues = tweened(0, {
        duration: 1500,
        easing: expoInOut,
    });
    $: tweenedCompletedIssues.set(percentage);

    const handleDeleteProject = (id) => {
        if (confirm("Are you sure to delete the project?")) {
            $projectStore = deleteProject(id);
        }
    };
</script>

<div
    on:click={() => {
        changeBugProjectId(id);
        pageStore.set(BUGS_PAGE);
    }}
>
    <div class={`card ${priority || ""}`}>
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="card-title">
                {title}
            </h3>
            <div class="text-red px-2" on:click={() => handleDeleteProject(id)}>
                <Icon name="trash" />
            </div>
        </div>
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
</div>

<style>
    .card {
        user-select: none;
        background-color: var(--white-color);
        border-radius: var(--border-radius);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        padding: 2rem;
        border: 1px solid var(--white-color-2);
        border-bottom-width: 3px;
        border-bottom-style: solid;
        color: var(--black-color);
        transition-property: box-shadow, transform;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .card.no {
        border-bottom-color: var(--white-color-2);
    }

    .card.low {
        border-bottom-color: var(--primary-color);
    }

    .card.medium {
        border-bottom-color: var(--orange-color);
    }

    .card.high {
        border-bottom-color: var(--red-color);
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
