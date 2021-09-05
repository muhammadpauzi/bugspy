<script>
    import Card from "../shared/Card.svelte";
    import bugStore, { changeSolveBug, deleteBug } from "../stores/bugStore";
    import { BUG_PROJECT_ID } from "../stores/pageStore";
    import { humanizeDate } from "../utils/date";

    export let id;
    export let title = "";
    export let description = "";
    export let priority = "no";
    export let dateCreated;

    const handleDeleteBug = (id) => {
        if (confirm("Are you sure to delete the bug?")) {
            $bugStore = deleteBug(id);
        }
    };
</script>

<Card
    titleCard={title}
    priorityCard={priority}
    onDelete={() => handleDeleteBug(id)}
    onDblClickCard={() => {
        $bugStore = changeSolveBug(id);
    }}
>
    <div class="card-text">{description}</div>
    <small>{humanizeDate(dateCreated)}</small>
</Card>
