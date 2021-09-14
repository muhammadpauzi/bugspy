<script>
    import Card from "../shared/Card.svelte";
    import { tweened } from "svelte/motion";
    import { expoInOut } from "svelte/easing";
    import projectStore, { deleteProject } from "../stores/projectStore";
    import pageStore, {
        changeIssueProjectId,
        changeProjectIdEdit,
        ISSUES_PAGE,
    } from "../stores/pageStore";
    import { modalEditStore } from "../stores/modalStore";
    import { humanizeDate } from "../utils/date";
    import { deleteIssue, getCurrentIssues } from "../stores/issueStore";

    export let id = 0;
    export let title = "";
    export let issues = 0;
    export let completedIssues = 0;
    export let priority = "no";
    export let dateCreated;

    let percentage = Math.floor((100 / issues) * completedIssues) || 0;
    let tweenedCompletedIssues = tweened(0, {
        duration: 1500,
        easing: expoInOut,
    });

    $: tweenedCompletedIssues.set(percentage);

    const handleDeleteProject = (id) => {
        if (confirm("Are you sure to delete the project?")) {
            const issues = getCurrentIssues();
            issues.map((issue) => {
                if (issue.projectId == id) {
                    deleteIssue(issue.id);
                }
            });
            $projectStore = deleteProject(id);
        }
    };
</script>

<Card
    titleCard={title}
    priorityCard={priority}
    onDelete={() => handleDeleteProject(id)}
    onShowModalEdit={() => {
        changeProjectIdEdit(id);
        modalEditStore.set(true);
    }}
    onClickCard={() => {
        changeIssueProjectId(id);
        $pageStore = ISSUES_PAGE;
    }}
>
    <small class="issue">{issues} {issues == 1 ? "Issue" : "Issues"}</small>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <span class="progress-bar-value"
                >{$tweenedCompletedIssues.toFixed(0)}%
            </span>
            <span class="progress-bar-value">
                {issues != 0 && issues == completedIssues ? "Completed" : ""}
            </span>
        </div>
        <div class="progress-bar">
            <div
                class="progress-bar-fill"
                style="width: {$tweenedCompletedIssues.toFixed(0)}%"
            />
        </div>
    </div>
    <small class="card-text">{humanizeDate(dateCreated)}</small>
</Card>
