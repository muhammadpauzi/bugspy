import { writable } from 'svelte/store';

const PROJECTS_PAGE = "projects";
const ISSUES_PAGE = "bugs";
let ISSUE_PROJECT_ID = null;
let ISSUE_ID_EDIT = null;
let PROJECT_ID_EDIT = null;

const changeIssueProjectId = (id) => {
    ISSUE_PROJECT_ID = id;
}
const changeProjectIdEdit = (id) => {
    PROJECT_ID_EDIT = id;
}

const changeIssueIdEdit = (id) => {
    ISSUE_ID_EDIT = id;
}

const pageStore = writable(PROJECTS_PAGE);

export default pageStore;
export { PROJECTS_PAGE, ISSUES_PAGE, changeIssueProjectId, ISSUE_PROJECT_ID, ISSUE_ID_EDIT, changeIssueIdEdit, changeProjectIdEdit, PROJECT_ID_EDIT };