<script>
    import bugStore, { getCurrentBugs } from "../stores/bugStore";
    import pageStore, { BUG_PROJECT_ID } from "../stores/pageStore";
    import { scale } from "svelte/transition";
    import { flip } from "svelte/animate";
    import Bug from "./Bug.svelte";
    import Input from "../shared/Input.svelte";

    const handleSearchBugs = (e) => {
        $bugStore = getCurrentBugs(e.target.value).filter(
            (bug) => bug.projectId === BUG_PROJECT_ID
        );
        console.log($bugStore);
    };
</script>

<div class="container">
    <div class="py-5">
        <div class="row align-items-center">
            <div class="col-lg-5 col-md-3">
                <h1 class="title-md">Bugs</h1>
            </div>
            <div class="col-lg-7 col-md-9 d-lg-flex d-md-flex d-block">
                <Input
                    withLabel={false}
                    placeholder="Enter keyword..."
                    on:input={handleSearchBugs}
                />
            </div>
        </div>

        <div class="row">
            {#each $bugStore.filter((bug) => bug.projectId === BUG_PROJECT_ID) as bug (bug.id)}
                <div
                    in:scale
                    out:scale|local
                    animate:flip={{ duration: 500 }}
                    class="col-lg-4 col-md-6 mb-3"
                >
                    <Bug {bug} />
                </div>
            {:else}
                <p class="text-red text-center py-5">Bugs not created yet.</p>
            {/each}
        </div>
    </div>
</div>

<style>
    div.container {
        min-height: 100vh;
    }
</style>
