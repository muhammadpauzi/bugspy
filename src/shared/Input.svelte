<script>
    export let withLabel = true;
    export let labelText = "";
    export let inputModal = false;
    export let value = "";
</script>

{#if withLabel}
    <label for="" class="input-label">{labelText}</label>
{/if}
<input
    type="text"
    class={`input ${$$props.class}`}
    class:input-modal={inputModal}
    placeholder={$$props.placeholder}
    required={$$props.required}
    bind:value
/>

<style>
    .input {
        padding: 0.9rem 1rem;
        font-size: 0.95em;
        margin-bottom: 1rem;
        display: inline-block;
        border: none;
        color: var(--gray-color-2);
        background-color: var(--white-color);
        width: 100%;
        border-radius: var(--border-radius);
        transition-property: outline, color;
        transition-duration: 0.3s;
        font-weight: var(--font-regular);
        border: 1px solid var(--gray-color);
    }

    .input:focus {
        color: var(--black-color);
    }

    .input-modal {
        background-color: var(--white-color-2);
    }
</style>
