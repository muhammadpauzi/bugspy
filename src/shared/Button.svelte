<script>
    export const colorType = "primary";
    export let resetMargin = false;
</script>

<button
    type={$$props.type}
    class={`btn btn-${colorType} ${$$props.class || ""}`}
    class:mb-0={resetMargin}
    on:click
>
    <slot />
</button>

<style>
    .btn {
        white-space: nowrap;
        padding: 0.9rem 1.5rem;
        color: var(--white-color);
        font-size: 0.8em;
        border-radius: var(--border-radius);
        letter-spacing: 0.5px;
        text-transform: uppercase;
        border: none;
        display: inline-block;
        user-select: none;
        font-weight: var(--font-bold);
        margin-bottom: 1rem;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: background-color 0.3s;
        transition: transform 0.1s;
    }

    .btn:active {
        transform: scale(1.01, 1.02);
    }

    .btn-primary {
        background-color: var(--primary-color);
    }

    .btn-primary:hover {
        background-color: var(--primary-color-2);
    }
</style>
