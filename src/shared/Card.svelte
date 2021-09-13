<script>
    import Icon from "../shared/Icon.svelte";

    export let titleCard = "";
    export let priorityCard = "";
    export let onClickCard = () => {};
    export let onDblClickCard = () => {};
    export let onDelete = () => {};
    export let onShowModalEdit = () => {};
</script>

<div on:click={onClickCard} on:dblclick={onDblClickCard}>
    <div class={`card ${priorityCard || ""}`}>
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="card-title mb-2">
                {titleCard}
            </h3>
            <div class="d-flex">
                <div
                    class="text-green px-2 hover-scale"
                    on:click|stopPropagation={onShowModalEdit}
                >
                    <Icon name="edit" />
                </div>
                <div
                    class="text-red px-2 hover-scale"
                    on:click|stopPropagation={onDelete}
                >
                    <Icon name="trash" />
                </div>
            </div>
        </div>
        <slot />
    </div>
</div>

<style>
    .hover-scale {
        transition: transform 0.3s;
    }

    .hover-scale:hover {
        transform: scale(1.1);
    }
</style>
