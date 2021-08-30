<script>
    import Modal from "../shared/Modal.svelte";
    import Input from "../shared/Input.svelte";
    import Button from "../shared/Button.svelte";
    import { modalCreateStore } from "../stores/modalStore";
    import projectStore, { createProject } from "../stores/projectStore";

    let title = "";

    const handleSubmit = () => {
        const project = {
            id: Math.floor(Math.random() * 1000) + Date.now(),
            title,
            issues: 0,
            completedIssues: 0,
            tags: ["Javascript", "Web"],
            dateCreated: Date.now(),
        };
        // re-render project's card
        $projectStore = createProject(project);
        // hide the modal
        modalCreateStore.set(false);
        // reset input's value
        title = "";
    };
</script>

<Modal show={$modalCreateStore} title="Create Project">
    <form method="POST" on:submit|preventDefault={handleSubmit}>
        <Input
            labelText="Project Title"
            inputModal={true}
            required={true}
            bind:value={title}
        />
        <Button>Create</Button>
    </form>
</Modal>
