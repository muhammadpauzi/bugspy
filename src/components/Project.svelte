<script>
    import Card from "../shared/Card.svelte";
    import { tweened } from "svelte/motion";
    import { expoInOut } from "svelte/easing";
    import projectStore, { deleteProject } from "../stores/projectStore";
    import pageStore, {
        changeBugProjectId,
        BUG_PROJECT_ID,
        BUGS_PAGE,
    } from "../stores/pageStore";

    export let id = 0;
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

<Card
    titleCard={title}
    priorityCard={priority}
    onDelete={() => handleDeleteProject(id)}
    onClickCard={() => {
        changeBugProjectId(id);
        $pageStore = BUGS_PAGE;
    }}
>
    <small class="issue">{issues} Issues</small>
    <div>
        <span class="progress-bar-value"
            >{$tweenedCompletedIssues.toFixed(0)}%
        </span>
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
</Card>
