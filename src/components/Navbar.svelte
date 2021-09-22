<script>
    import Button from "../shared/Button.svelte";
    import { modalCreateStore } from "../stores/modalStore";
    import pageStore, {
        ISSUES_PAGE,
        PROJECTS_PAGE,
        ISSUE_PROJECT_ID,
    } from "../stores/pageStore";
    import { getCurrentIssues } from "../stores/issueStore";

    const downloadAsTodoFile = () => {
        if (confirm("Are you sure to download the file?")) {
            let content = "";
            let no = 1;
            getCurrentIssues().map((issue) => {
                if (issue.projectId == ISSUE_PROJECT_ID) {
                    content += `${no}. ${issue.solved ? "✅" : "❌"} ${
                        issue.title
                    } - ${issue.description || "..."}\n`;
                    no++;
                }
            });
            const a = document.createElement("a");
            const file = new Blob([content], { type: "plain/text" });

            a.href = URL.createObjectURL(file);
            a.download = "TODO";
            a.click();
            URL.revokeObjectURL(a.href);
        }
    };
</script>

<nav class="navbar">
    <div
        class="container d-flex py-3 align-items-center justify-content-between"
    >
        <a href="/" class="logo">Bugspy</a>

        {#if $pageStore == PROJECTS_PAGE}
            <Button
                class="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block"
                on:click={() => {
                    modalCreateStore.set(true);
                }}
                resetMargin={true}>Create Project</Button
            >
        {:else if $pageStore == ISSUES_PAGE}
            <div
                class="d-none align-items-center d-lg-flex d-md-flex d-sm-flex"
            >
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
                    class="me-1"
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
