<script>
    import Icon from "../shared/Icon.svelte";
    import bugStore, { deleteBug } from "../stores/bugStore";

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

<div class={`card ${priority || ""}`}>
    <div class="d-flex justify-content-between align-items-center">
        <h3 class="card-title mb-2">
            {title}
            {solved ? "solved" : ""}
        </h3>
        <div class="text-red px-2" on:click={() => handleDeleteBug(id)}>
            <Icon name="trash" />
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
</style>
