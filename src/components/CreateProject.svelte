<script>
    import Modal from "../shared/Modal.svelte";
    import Input from "../shared/Input.svelte";
    import Button from "../shared/Button.svelte";
    import { modalCreateStore } from "../stores/modalStore";
    import projectStore, { createProject } from "../stores/projectStore";

    const options = ["No", "High", "Medium", "Low"];
    let title = "";
    let selectedOption = "";
    let titleErrorMessage = "";

    const handleSubmit = () => {
        if (!title.trim()) {
            titleErrorMessage = "Title must be required.";
            return;
        }

        const project = {
            id: Math.floor(Math.random() * 1000) + Date.now(),
            title,
            issues: 0,
            completedIssues: 0,
            dateCreated: Date.now(),
            priority: selectedOption,
        };
        // re-render project's card
        $projectStore = createProject(project);
        // hide the modal
        modalCreateStore.set(false);
        // reset input's value
        title = "";
        selectedOption = "";
    };
</script>

<Modal show={$modalCreateStore} title="Create Project">
    <form method="POST" on:submit|preventDefault={handleSubmit}>
        <div class="mb-3">
            <Input
                labelText="Project Title"
                inputModal={true}
                required={true}
                bind:value={title}
            />
            <small class="text-red mt-2 d-block">{titleErrorMessage}</small>
        </div>
        <div class="mb-3">
            <Input
                type="select"
                labelText="Project Priority"
                placeholder="Select Priority"
                inputModal={true}
                {options}
                bind:value={selectedOption}
            />
        </div>
        <Button>Create Project</Button>
    </form>
</Modal>
