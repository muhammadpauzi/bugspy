<script>
    import Modal from "../shared/Modal.svelte";
    import Input from "../shared/Input.svelte";
    import Button from "../shared/Button.svelte";
    import { modalEditStore } from "../stores/modalStore";
    import projectStore, { editProject } from "../stores/projectStore";
    import { ISSUE_PROJECT_ID } from "../stores/pageStore";

    const options = ["No", "High", "Medium", "Low"];
    let title = "";
    let selectedOption = "";
    let titleErrorMessage = "";
    let data;
    // re-render this component for load data project of ISSUES_PROJECT_ID
    $: if ($modalEditStore == true) {
        data = $projectStore.find((project) => project.id == ISSUE_PROJECT_ID);
        loadDataProject(data);
    }

    const loadDataProject = (data) => {
        title = data.title || "";
        selectedOption = data.priority || "";
    };

    const handleSubmit = () => {
        if (!title.trim()) {
            titleErrorMessage = "Title must be required.";
            return;
        }

        const updatedProject = {
            id: data.id,
            title: title,
            priority: selectedOption,
        };
        // re-render project's card
        $projectStore = editProject(updatedProject);
        // hide the modal
        modalEditStore.set(false);
        // reset input's value
        title = "";
        titleErrorMessage = "";
        selectedOption = "";
    };
</script>

<Modal show={$modalEditStore} title="Edit Project">
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
        <Button>Edit Project</Button>
    </form>
</Modal>
