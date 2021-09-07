<script>
    import Card from "../shared/Card.svelte";
    import issueStore, {
        changeSolveIssue,
        deleteIssue,
    } from "../stores/issueStore";
    import projectStore, { getCurrentProjects } from "../stores/projectStore";
    import { humanizeDate } from "../utils/date";

    export let id;
    export let title = "";
    export let description = "";
    export let priority = "no";
    export let dateCreated;

    const handleDeleteIssue = (id) => {
        if (confirm("Are you sure to delete the issue?")) {
            $issueStore = deleteIssue(id);
            // regenerate data projects in project page
            $projectStore = getCurrentProjects();
        }
    };
</script>

<Card
    titleCard={title}
    priorityCard={priority}
    onDelete={() => handleDeleteIssue(id)}
    onDblClickCard={() => {
        $issueStore = changeSolveIssue(id);
        // regenerate data projects in project page
        $projectStore = getCurrentProjects();
    }}
>
    <div class="card-text">{description}</div>
    <small class="card-text">{humanizeDate(dateCreated)}</small>
</Card>
