<script>
    import Modal from "../shared/Modal.svelte";
    import Input from "../shared/Input.svelte";
    import Button from "../shared/Button.svelte";
    import { modalEditStore } from "../stores/modalStore";
    import issueStore, { editIssue } from "../stores/issueStore";
    import { ISSUE_ID_EDIT } from "../stores/pageStore";

    const optionsPriority = ["No", "High", "Medium", "Low"];
    const optionsCategory = ["No", "Feature", "Bug", "Refactoring"];
    let title = "";
    let selectedOptionPriority = "";
    let selectedOptionCategory = "";
    let description = "";
    let titleErrorMessage = "";
    let data;

    // re-render this component for load data issue of ISSUES_PROJECT_ID
    $: if ($modalEditStore == true) {
        data = $issueStore.find((issue) => issue.id == ISSUE_ID_EDIT);
        loadDataIssue(data);
    }

    const loadDataIssue = (data) => {
        title = data.title || "";
        description = data.description || "";
        selectedOptionCategory = data.category || "";
        selectedOptionPriority = data.priority || "";
    };

    const handleSubmit = () => {
        if (!title.trim()) {
            titleErrorMessage = "Title must be required.";
            return;
        }

        const updatedIssue = {
            id: data.id,
            title,
            priority: selectedOptionPriority,
            description,
        };

        if (selectedOptionCategory != "no") {
            updatedIssue.category = selectedOptionCategory;
        }

        // re-render issue's card
        $issueStore = editIssue(updatedIssue);
        // hide the modal
        modalEditStore.set(false);
        // reset input's value
        title = "";
        description = "";
        selectedOptionCategory = "";
        titleErrorMessage = "";
        selectedOptionPriority = "";
    };
</script>

<Modal show={$modalEditStore} title="Edit Issue">
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
                options={optionsPriority}
                bind:value={selectedOptionPriority}
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
        <div class="mb-3">
            <Input
                type="select"
                labelText="Category"
                placeholder="Select Category"
                inputModal={true}
                options={optionsCategory}
                bind:value={selectedOptionCategory}
            />
        </div>
        <Button>Edit Issue</Button>
    </form>
</Modal>
