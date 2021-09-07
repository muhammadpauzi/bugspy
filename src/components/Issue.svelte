<script>
    import Card from "../shared/Card.svelte";
    import issueStore, {
        changeSolveIssue,
        deleteIssue,
    } from "../stores/issueStore";
    import { humanizeDate } from "../utils/date";

    export let id;
    export let title = "";
    export let description = "";
    export let priority = "no";
    export let dateCreated;

    const handleDeleteIssue = (id) => {
        if (confirm("Are you sure to delete the issue?")) {
            $issueStore = deleteIssue(id);
        }
    };
</script>

<Card
    titleCard={title}
    priorityCard={priority}
    onDelete={() => handleDeleteIssue(id)}
    onDblClickCard={() => {
        $issueStore = changeSolveIssue(id);
    }}
>
    <div class="card-text">{description}</div>
    <small class="card-text">{humanizeDate(dateCreated)}</small>
</Card>
