<script>
    import Modal from "../shared/Modal.svelte";
    import Input from "../shared/Input.svelte";
    import Button from "../shared/Button.svelte";
    import { modalCreateStore } from "../stores/modalStore";
    import { BUG_PROJECT_ID } from "../stores/pageStore";
    import bugStore, { createBug } from "../stores/bugStore";

    const options = ["No", "High", "Medium", "Low"];
    let title = "";
    let selectedOption = "";

    const handleSubmit = () => {
        const bug = {
            id: Math.floor(Math.random() * 1000) + Date.now(),
            title,
            solved: false,
            projectId: BUG_PROJECT_ID,
            tags: ["Bug", "Feature"],
            dateCreated: Date.now(),
            priority: selectedOption,
        };
        // re-render bug's card
        $bugStore = createBug(bug);
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

<Modal show={$modalCreateStore} title="Create Bug">
    <form method="POST" on:submit|preventDefault={handleSubmit}>
        <Input
            labelText="Bug Title"
            inputModal={true}
            required={true}
            bind:value={title}
        />
        <Input
            type="select"
            labelText="Bug Priority"
            placeholder="Select Priority"
            inputModal={true}
            {options}
            bind:value={selectedOption}
        />
        <Button>Create</Button>
    </form>
</Modal>
