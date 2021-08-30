<script>
    import Project from "./Project.svelte";
    import Input from "../shared/Input.svelte";
    import Button from "../shared/Button.svelte";
    import projectStore from "../stores/projectStore";
</script>

<div class="container">
    <div class="py-5">
        <div class="row align-items-center">
            <div class="col-lg-5 col-md-3">
                <h1 class="title-md">Projects</h1>
            </div>
            <div class="col-lg-7 col-md-9 d-lg-flex d-md-flex d-block">
                <Input withLabel={false} placeholder="Enter keyword..." />
            </div>
        </div>

        <div class="row">
            {#each $projectStore as { id, title, issues, tags, completedIssues } (id)}
                <Project {title} {issues} {tags} {completedIssues} />
            {:else}
                <p class="text-red text-center py-4">
                    Project not created yet.
                </p>
            {/each}
        </div>
    </div>
</div>

<style>
</style>
