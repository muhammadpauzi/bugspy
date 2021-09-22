<script>
    import { modalCreateStore } from "../stores/modalStore";
    import Button from "../shared/Button.svelte";
    import pageStore, { PROJECTS_PAGE, ISSUES_PAGE } from "../stores/pageStore";
    import { downloadAsTodoFile } from "../utils/download";
    import Icon from "../shared/Icon.svelte";
</script>

<div class="mobile-menu d-flex d-lg-none d-md-none d-sm-none">
    {#if $pageStore == PROJECTS_PAGE}
        <div class="row">
            <div class="col">
                <Button
                    class="text-white"
                    on:click={() => {
                        modalCreateStore.set(true);
                    }}
                    resetMargin={true}><Icon name="plus" /></Button
                >
            </div>
        </div>
    {:else if $pageStore == ISSUES_PAGE}
        <div class="row g-1">
            <div class="col-4">
                <Button
                    class="text-white"
                    resetMargin={true}
                    on:click={() => ($pageStore = PROJECTS_PAGE)}
                    ><Icon name="projects" /></Button
                >
            </div>
            <div class="col-4">
                <Button
                    class="text-white"
                    resetMargin={true}
                    on:click={downloadAsTodoFile}
                    ><Icon name="download" /></Button
                >
            </div>
            <div class="col-4">
                <Button
                    class="text-white"
                    on:click={() => {
                        modalCreateStore.set(true);
                    }}
                    resetMargin={true}><Icon name="plus" /></Button
                >
            </div>
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
