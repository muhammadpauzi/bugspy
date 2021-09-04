<script>
    import { scale } from "svelte/transition";
    import { flip } from "svelte/animate";
    import Project from "./Project.svelte";
    import Input from "../shared/Input.svelte";
    import projectStore, { getCurrentProjects } from "../stores/projectStore";

    const handleSearchProject = (e) => {
        $projectStore = getCurrentProjects(e.target.value);
        console.log($projectStore);
    };
</script>

<div class="container">
    <div class="py-5">
        <div class="row align-items-center mb-4">
            <div class="col-lg-5 col-md-3 mb-2 mb-md-0 mb-lg-0">
                <h1 class="title-md m-0">Projects</h1>
            </div>
            <div class="col-lg-7 col-md-9 d-lg-flex d-md-flex d-block">
                <Input
                    withLabel={false}
                    placeholder="Enter keyword..."
                    on:input={handleSearchProject}
                />
            </div>
        </div>

        <div class="row g-1">
            {#each $projectStore as project (project.id)}
                <div
                    in:scale
                    out:scale|local
                    animate:flip={{ duration: 500 }}
                    class="col-lg-4 col-md-6 mb-3"
                >
                    <Project {project} />
                </div>
            {:else}
                <p class="text-red text-center py-5">
                    Project not created yet.
                </p>
            {/each}
        </div>
    </div>
</div>

<style>
    div.container {
        min-height: 100vh;
    }
</style>
