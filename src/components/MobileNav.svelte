<script>
    import { modalCreateStore } from "../stores/modalStore";
    import Button from "../shared/Button.svelte";
    import pageStore, { PROJECTS_PAGE, ISSUES_PAGE } from "../stores/pageStore";
</script>

<div class="mobile-menu">
    {#if $pageStore == PROJECTS_PAGE}
        <Button
            class=""
            on:click={() => {
                modalCreateStore.set(true);
            }}
            resetMargin={true}>Create Project</Button
        >
    {:else if $pageStore == ISSUES_PAGE}
        <div class="d-flex align-items-center">
            <Button
                class="me-1"
                resetMargin={true}
                on:click={() => ($pageStore = PROJECTS_PAGE)}>Projects</Button
            >
            <Button
                on:click={() => {
                    modalCreateStore.set(true);
                }}
                resetMargin={true}>Create Bug</Button
            >
        </div>
    {/if}
</div>

<style>
    .mobile-menu {
        display: none;
    }

    @media screen and (max-width: 567px) {
        .mobile-menu {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 0.4rem;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-top: 1px solid var(--gray-color);
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 999;
        }
    }
</style>
