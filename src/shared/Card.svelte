<script>
    import Icon from "../shared/Icon.svelte";

    export let titleCard = "";
    export let priorityCard = "";
    export let onClickCard = () => {};
    export let onDblClickCard = () => {};
    export let onDelete = () => {};
</script>

<div on:click={onClickCard} on:dblclick={onDblClickCard}>
    <div class={`card ${priorityCard || ""}`}>
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="card-title mb-2">
                {titleCard}
            </h3>
            <div class="text-red px-2" on:click|stopPropagation={onDelete}>
                <Icon name="trash" />
            </div>
        </div>
        <slot />
    </div>
</div>
