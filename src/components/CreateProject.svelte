<script>
    import Modal from "../shared/Modal.svelte";
    import Input from "../shared/Input.svelte";
    import Button from "../shared/Button.svelte";
    import { modalCreateStore } from "../stores/modalStore";
    import projectStore, { createProject } from "../stores/projectStore";

    const options = ["No", "High", "Medium", "Low"];
    let title = "";
    let selectedOption = "";

    const handleSubmit = () => {
        const project = {
            id: Math.floor(Math.random() * 1000) + Date.now(),
            title,
            issues: Math.floor(Math.random() * 100 + 50),
            completedIssues: Math.floor(Math.random() * 49),
            tags: ["Javascript", "Web"],
            dateCreated: Date.now(),
            priority: selectedOption,
        };
        // re-render project's card
        $projectStore = createProject(project);
        // hide the modal
        modalCreateStore.set(false);
        // reset input's value
        title = "";
    };

    // const handleChangePrioritySelect = (e) => {
    //     options.map((option) => {
    //         if (option.toLowerCase() === selectedOption.toLowerCase()) {
    //             alert("You cannot edit the priority!!!");
    //         }
    //     });
    // };
</script>

<Modal show={$modalCreateStore} title="Create Project">
    <form method="POST" on:submit|preventDefault={handleSubmit}>
        <Input
            labelText="Project Title"
            inputModal={true}
            required={true}
            bind:value={title}
        />
        <Input
            type="select"
            labelText="Project Priority"
            placeholder="Select Priority"
            inputModal={true}
            {options}
            bind:value={selectedOption}
        />
        <Button>Create</Button>
    </form>
</Modal>
