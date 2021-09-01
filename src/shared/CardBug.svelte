<script>
    import Icon from "../shared/Icon.svelte";
    import { tweened } from "svelte/motion";
    import { expoInOut } from "svelte/easing";
    import bugStore, { deleteBug } from "../stores/bugStore";
    import pageStore, {
        BUGS_PAGE,
        changeBugProjectId,
    } from "../stores/pageStore";

    export let id;
    export let title = "";
    export let tags = [];
    export let priority = "no";

    const handleDeleteBug = (id) => {
        if (confirm("Are you sure to delete the bug?")) {
            $bugStore = deleteBug(id);
        }
    };
</script>

<div class={`card ${priority || ""}`} fade:in={{ duration: 3000 }}>
    <div class="d-flex justify-content-between align-items-center">
        <h3 class="card-title">
            {title}
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
