<script>
    export const colorType = "primary";
    export let resetMargin = false;
</script>

<button
    type={$$props.type}
    class="btn btn-primary"
    class:m-0={resetMargin}
    on:click
>
    <slot />
</button>

<style>
    .btn {
        white-space: nowrap;
        padding: 1rem 2rem;
        color: var(--white-color);
        font-size: 0.9em;
        border: none;
        display: inline-block;
        user-select: none;
        font-weight: var(--font-medium);
        margin-bottom: 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .btn-primary {
        background-color: var(--primary-color);
    }

    .btn-primary:hover {
        background-color: var(--primary-color-2);
    }
</style>
