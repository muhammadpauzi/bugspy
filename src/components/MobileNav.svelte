<script>
    import { modalCreateStore } from "../stores/modalStore";
    import Button from "../shared/Button.svelte";
    import pageStore, { PROJECTS_PAGE, ISSUES_PAGE } from "../stores/pageStore";
    import { downloadAsTodoFile } from "../utils/download";
</script>

<div class="mobile-menu d-flex d-lg-none d-md-none">
    {#if $pageStore == PROJECTS_PAGE}
        <Button
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
                class="me-1"
                resetMargin={true}
                on:click={downloadAsTodoFile}>Download as TODO file</Button
            >
            <Button
                on:click={() => {
                    modalCreateStore.set(true);
                }}
                resetMargin={true}>Create Issue</Button
            >
        </div>
    {/if}
</div>

<style>
    .mobile-menu {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 0.4rem;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-top: 1px solid var(--gray-color);
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }
</style>
