<script>
    import bugStore, { getCurrentBugs } from "../stores/bugStore";
    import { BUG_PROJECT_ID } from "../stores/pageStore";
    import { scale } from "svelte/transition";
    import { flip } from "svelte/animate";
    import Bug from "./Bug.svelte";
    import Input from "../shared/Input.svelte";

    const handleSearchBugs = (e) => {
        $bugStore = getCurrentBugs(e.target.value).filter(
            (bug) => bug.projectId === BUG_PROJECT_ID
        );
    };
</script>

<div class="container">
    <div class="py-5">
        <div class="row align-items-center mb-4">
            <div class="col-lg-5 col-md-3 mb-2 mb-md-0 mb-lg-0">
                <h1 class="title-md m-0">Bugs</h1>
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
            <div class="col-md-6">
                <small class="label-info">Active Bugs</small>
                {#each $bugStore.filter((bug) => bug.projectId === BUG_PROJECT_ID && !bug.solved) as bug (bug.id)}
                    <div
                        in:scale
                        out:scale|local
                        animate:flip={{ duration: 500 }}
                        class="mb-3"
                    >
                        <Bug {...bug} />
                    </div>
                {:else}
                    <p class="text-red text-center py-5">
                        Bugs not created yet.
                    </p>
                {/each}
            </div>

            <div class="col-md-6">
                <small class="label-info">Solved Bugs</small>
                {#each $bugStore.filter((bug) => bug.projectId === BUG_PROJECT_ID && bug.solved) as bug (bug.id)}
                    <div
                        in:scale
                        out:scale|local
                        animate:flip={{ duration: 500 }}
                        class="mb-3"
                    >
                        <Bug {...bug} />
                    </div>
                {:else}
                    <p class="text-red text-center py-5">
                        Bugs not created yet.
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
