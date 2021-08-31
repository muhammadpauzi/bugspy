<script>
    import CardProject from "../shared/CardProject.svelte";

    export let id;
    export let title;
    export let issues;
    export let tags;
    export let completedIssues;
    export let priority;
</script>

<CardProject {id} {title} {issues} {tags} {completedIssues} {priority} />
