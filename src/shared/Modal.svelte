<script>
    import { modalCreateStore, modalEditStore } from "../stores/modalStore";

    export let show = false;
    export let title = "";
</script>

<div
    class="modal-backdrop"
    class:show
    on:click|self={() => {
        modalCreateStore.set(false);
        modalEditStore.set(false);
    }}
>
    <div class="modal">
        <div class="modal-header">
            <h3 class="modal-header-title">{title}</h3>
            <div
                class="modal-close"
                on:click={() => {
                    modalCreateStore.set(false);
                    modalEditStore.set(false);
                }}
            >
                &times
            </div>
        </div>
        <div class="modal-body">
            <slot />
        </div>
    </div>
</div>

<style>
    .modal-backdrop {
        display: block;
        position: fixed;
        top: 0;
        visibility: hidden;
        left: 0;
        z-index: 99999;
        width: 100%;
        height: 100vh;
        padding: 1rem 0.5rem 4rem 0.5rem;
        opacity: 0;
        overflow-y: auto;
        background-color: var(--backdrop-color);
        transition-property: opacity, visibility;
        transition-duration: 0.3s;
    }

    .modal-backdrop.show {
        opacity: 1;
        visibility: visible;
    }

    .modal-backdrop.show .modal {
        transform: translateY(0);
    }

    .modal {
        max-width: 646px;
        width: 100%;
        border-radius: var(--border-radius);
        margin: auto;
        background-color: var(--white-color);
        padding: 0.5rem 2rem;
        color: var(--black-color);
        transform: translateY(-100%);
        transition: transform 0.3s ease;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        border-bottom-width: 1.5px;
        border-bottom-style: solid;
        border-color: var(--gray-color);
    }

    .modal-close {
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-size: 2rem;
    }

    .modal-body {
        padding: 2rem 0 1.5rem 0;
    }

    @media screen and (max-width: 567px) {
        .modal {
            padding: 0.5rem 1rem;
        }
    }
</style>
