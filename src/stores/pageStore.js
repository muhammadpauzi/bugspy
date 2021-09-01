import { writable } from 'svelte/store';

const PROJECTS_PAGE = "projects";
const BUGS_PAGE = "bugs";
let BUG_PROJECT_ID = null;

const changeBugProjectId = (id) => {
    BUG_PROJECT_ID = id;
}

const pageStore = writable(PROJECTS_PAGE);

export default pageStore;
export { PROJECTS_PAGE, BUGS_PAGE, changeBugProjectId, BUG_PROJECT_ID };