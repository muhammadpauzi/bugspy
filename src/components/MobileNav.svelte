<script>
    import { modalCreateStore } from "../stores/modalStore";
    import Button from "../shared/Button.svelte";
    import pageStore, { PROJECTS_PAGE, ISSUES_PAGE } from "../stores/pageStore";
    import { downloadAsTodoFile } from "../utils/download";
    import Icon from "../shared/Icon.svelte";
</script>

<div class="mobile-nav d-flex d-lg-none d-md-none d-sm-none">
    {#if $pageStore == PROJECTS_PAGE}
        <div class="row">
            <div class="col">
                <Button
                    class="p-3 text-white"
                    on:click={() => {
                        modalCreateStore.set(true);
                    }}
                    resetMargin={true}
                    ><Icon name="plus" class="pb-1" />
                    <div class="mobile-nav-small-text">
                        Create Project
                    </div></Button
                >
            </div>
        </div>
    {:else if $pageStore == ISSUES_PAGE}
        <div class="d-flex align-items-center">
            <Button
                class="text-white p-3"
                resetMargin={true}
                on:click={() => ($pageStore = PROJECTS_PAGE)}
                ><Icon name="projects" class="pb-1" />
                <div class="mobile-nav-small-text">Projects</div></Button
            >
            <Button
                class="text-white mx-1 p-3"
                resetMargin={true}
                on:click={downloadAsTodoFile}
                ><Icon name="download" class="pb-1" />
                <div class="mobile-nav-small-text">Download TODO</div></Button
            >
            <Button
                class="text-white p-3"
                on:click={() => {
                    modalCreateStore.set(true);
                }}
                resetMargin={true}
                ><Icon name="plus" class="pb-1" />
                <div class="mobile-nav-small-text">Create Issue</div></Button
            >
        </div>
    {/if}
</div>

<style>
    .mobile-nav {
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
        overflow-x: scroll;
        z-index: 999;
    }

    .mobile-nav-small-text {
        font-size: 0.7rem;
    }
</style>
