<script>
    import Modal from "../shared/Modal.svelte";
    import Input from "../shared/Input.svelte";
    import Button from "../shared/Button.svelte";
    import { modalCreateStore } from "../stores/modalStore";
    import { ISSUE_PROJECT_ID } from "../stores/pageStore";
    import issueStore, { createIssue } from "../stores/issueStore";
    import projectStore, { getCurrentProjects } from "../stores/projectStore";

    const options = ["No", "High", "Medium", "Low"];
    let title = "";
    let selectedOption = "";
    let description = "";
    let titleErrorMessage = "";

    const handleSubmit = () => {
        if (!title.trim()) {
            titleErrorMessage = "Title must be required.";
            return;
        }

        const issue = {
            id: Math.floor(Math.random() * 1000) + Date.now(),
            title,
            solved: false,
            projectId: ISSUE_PROJECT_ID,
            dateCreated: Date.now(),
            description,
            priority: selectedOption,
        };
        // re-render issue's card
        $issueStore = createIssue(issue);
        // regenerate data projects in project page
        $projectStore = getCurrentProjects();
        // hide the modal
        modalCreateStore.set(false);
        // reset input's value
        title = "";
        description = "";
        selectedOption = "";
    };
</script>

<Modal show={$modalCreateStore} title="Create Issue">
    <form method="POST" on:submit|preventDefault={handleSubmit}>
        <div class="mb-3">
            <Input
                labelText="Issue Title"
                inputModal={true}
                required={true}
                bind:value={title}
            />
            <small class="text-red mt-2 d-block">{titleErrorMessage}</small>
        </div>
        <div class="mb-3">
            <Input
                type="select"
                labelText="Issue Priority"
                placeholder="Select Priority"
                inputModal={true}
                {options}
                bind:value={selectedOption}
            />
        </div>
        <div class="mb-3">
            <Input
                type="textarea"
                labelText="Description"
                inputModal={true}
                bind:value={description}
            />
        </div>
        <Button>Create Issue</Button>
    </form>
</Modal>
