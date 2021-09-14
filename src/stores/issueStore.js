import { writable } from "svelte/store";
import { getCurrentData, saveData } from '../utils/data';
import { DBProject, getCurrentProjects } from './projectStore';

const DBIssue = '_issues';

const getCurrentIssues = (keyword = "") => {
    return getCurrentData(DBIssue, keyword);
}

const createIssue = (issue) => {
    let issues = getCurrentIssues();
    let projects = getCurrentData(DBProject);
    issues.push(issue);
    projects = projects.map(project => {
        if (issue.projectId == project.id) {
            project.issues += 1;
        }
        return project;
    });
    saveData(DBProject, projects);
    return saveData(DBIssue, issues);
}

const deleteIssue = (id) => {
    let issues = getCurrentIssues();
    let issuesWithoutDeleted = issues.filter(issue => issue.id !== id);
    let deletedIssue = issues.find(issue => issue.id === id);
    let projects = getCurrentProjects();
    projects = projects.map(project => {
        if (project.id == deletedIssue.projectId) {
            if (deletedIssue.solved) {
                project.completedIssues -= 1;
            }
            project.issues -= 1;
        }
        return project;
    })
    saveData(DBProject, projects);
    return saveData(DBIssue, issuesWithoutDeleted);
}

const editIssue = (updatedIssue) => {
    let issues = getCurrentIssues()
    issues = issues.map((issue) => {
        if (issue.id == updatedIssue.id) {
            issue.title = updatedIssue.title;
            issue.priority = updatedIssue.priority;
            issue.description = updatedIssue.description;
            issue.category = updatedIssue.category;
        }
        return issue;
    });
    return saveData(DBIssue, issues);
}

const changeSolveIssue = (id) => {
    let issues = getCurrentIssues();
    issues = issues.map(issue => {
        if (issue.id === id) {
            issue.solved = !issue.solved;
            let projects = getCurrentData(DBProject)
            projects = projects.map(project => {
                if (issue.projectId == project.id) {
                    if (issue.solved) {
                        project.completedIssues += 1;
                    } else {
                        project.completedIssues -= 1;
                    }
                }
                return project;
            });
            saveData(DBProject, projects);
        }
        return issue;
    });
    return saveData(DBIssue, issues);
}

const issueStore = writable(getCurrentIssues());

export default issueStore;

export {
    getCurrentIssues,
    createIssue,
    deleteIssue,
    changeSolveIssue,
    editIssue
}