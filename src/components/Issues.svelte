<script>
    import issueStore, { getCurrentIssues } from "../stores/issueStore";
    import { ISSUE_PROJECT_ID } from "../stores/pageStore";
    import { scale } from "svelte/transition";
    import { flip } from "svelte/animate";
    import Issue from "./Issue.svelte";
    import Input from "../shared/Input.svelte";

    let activeIssues = [];
    let solvedIssues = [];

    $: {
        activeIssues = [];
        solvedIssues = [];
        $issueStore.forEach((issue) => {
            if (issue.projectId === ISSUE_PROJECT_ID) {
                if (issue.solved) {
                    activeIssues = [...activeIssues, issue];
                } else {
                    solvedIssues = [...solvedIssues, issue];
                }
            }
        });
    }

    const handleSearchIssues = (e) => {
        $issueStore = getCurrentIssues(e.target.value).filter(
            (issue) => issue.projectId === ISSUE_PROJECT_ID
        );
    };
</script>

<div class="container">
    <div class="py-5">
        <div class="row align-items-center mb-4">
            <div class="col-lg-5 col-md-3 mb-2 mb-md-0 mb-lg-0">
                <h1 class="title-md m-0">Issues</h1>
            </div>
            <div class="col-lg-7 col-md-9 d-lg-flex d-md-flex d-block">
                <Input
                    withLabel={false}
                    placeholder="Enter keyword..."
                    on:keyup={handleSearchIssues}
                />
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 py-4">
                <small class="label-info"
                    >Active Issues ({activeIssues.length})</small
                >
                {#each activeIssues as issue (issue.id)}
                    <div
                        in:scale
                        out:scale|local
                        animate:flip={{ duration: 500 }}
                        class="mb-3"
                    >
                        <Issue {...issue} />
                    </div>
                {:else}
                    <p class="text-red text-center py-5">
                        Issues not created yet.
                    </p>
                {/each}
            </div>

            <div class="col-md-6 py-4">
                <small class="label-info"
                    >Solved Issues ({solvedIssues.length})</small
                >
                {#each solvedIssues as issue (issue.id)}
                    <div
                        in:scale
                        out:scale|local
                        animate:flip={{ duration: 500 }}
                        class="mb-3"
                    >
                        <Issue {...issue} />
                    </div>
                {:else}
                    <p class="text-red text-center py-5">
                        No solved issues yet.
                    </p>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    div.container {
        min-height: 100vh;
    }
</style>
