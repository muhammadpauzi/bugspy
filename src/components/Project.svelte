<script>
    import CardProject from "../shared/CardProject.svelte";

    export let title;
    export let issues;
    export let tags;
    export let completedIssues;
</script>

<div class="col-lg-4 col-md-6 mb-3">
    <CardProject {title} {issues} {tags} {completedIssues} />
</div>
