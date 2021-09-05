<script>
    import Card from "../shared/Card.svelte";
    import bugStore, { changeSolveBug, deleteBug } from "../stores/bugStore";
    import { BUG_PROJECT_ID } from "../stores/pageStore";

    export let id;
    export let title = "";
    export let tags = [];
    export let solved = false;
    export let priority = "no";

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
    {#if tags.length > 0}
        <div class="tags">
            {#each tags as tag}
                <span class="tag">{tag}</span>
            {/each}
        </div>
    {/if}
</Card>
