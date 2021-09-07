import { writable } from 'svelte/store';

const PROJECTS_PAGE = "projects";
const ISSUES_PAGE = "bugs";
let ISSUE_PROJECT_ID = null;

const changeIssueProjectId = (id) => {
    ISSUE_PROJECT_ID = id;
}

const pageStore = writable(PROJECTS_PAGE);

export default pageStore;
export { PROJECTS_PAGE, ISSUES_PAGE, changeIssueProjectId, ISSUE_PROJECT_ID };