<script>
    import Button from "../shared/Button.svelte";
    import { modalCreateStore } from "../stores/modalStore";
    import pageStore, { ISSUES_PAGE, PROJECTS_PAGE } from "../stores/pageStore";
    import { downloadAsTodoFile } from "../utils/download";
</script>

<nav class="navbar">
    <div
        class="container d-flex py-3 align-items-center justify-content-between"
    >
        <a href="/" class="logo">Bugspy</a>

        {#if $pageStore == PROJECTS_PAGE}
            <Button
                class="d-none d-lg-inline-block d-md-inline-block"
                on:click={() => {
                    modalCreateStore.set(true);
                }}
                resetMargin={true}>Create Project</Button
            >
        {:else if $pageStore == ISSUES_PAGE}
            <div class="d-none align-items-center d-lg-flex d-md-flex">
                <Button
                    class="me-1"
                    resetMargin={true}
                    on:click={() => ($pageStore = PROJECTS_PAGE)}
                    >Projects</Button
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
</nav>

<style>
    .navbar {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-color: var(--gray-color);
        background-color: var(--white-color);
    }

    .logo {
        font-size: 1.5em;
        color: var(--primary-color);
        font-weight: var(--font-bold);
    }

    @media screen and (max-width: 567px) {
    }
</style>
