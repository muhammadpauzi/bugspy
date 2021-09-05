import { writable } from "svelte/store";
import { getCurrentData, saveData } from '../utils/data';
import { DBProject } from './projectStore';

const DBBug = '_bugs';

const getCurrentBugs = (keyword = "") => {
    return getCurrentData(DBBug, keyword);
}

const createBug = (bug, projectId) => {
    let bugs = getCurrentBugs();
    let projects = getCurrentData(DBProject)
    bugs.push(bug);
    projects = projects.map(project => {
        if (bug.projectId == projectId) {
            project.issues += 1;
        }
        return project;
    });
    saveData(DBProject, projects);
    return saveData(DBBug, bugs);
}

const deleteBug = (id) => {
    let bugs = getCurrentBugs();
    bugs = bugs.filter(bug => bug.id !== id);
    let projects = getCurrentData(DBProject)
    bugs = bugs.map(bug => {
        projects = projects.map(project => {
            if (bug.projectId == projectId) {
                project.issues -= 1;
            }
            return project;
        });
        saveData(DBProject, projects);
        return bug;
    });
    return saveData(DBBug, bugs);
}

const changeSolveBug = (id, projectId) => {
    let bugs = getCurrentBugs();
    bugs = bugs.map(bug => {
        if (bug.id === id) {
            bug.solved = !bug.solved;
            let projects = getCurrentData(DBProject)
            projects = projects.map(project => {
                if (bug.projectId == projectId) {
                    if (bug.solved) {
                        project.completedIssues += 1;
                    } else {
                        project.completedIssues -= 1;
                    }
                }
                return project;
            });
            saveData(DBProject, projects);
        }
        return bug;
    });

    console.log(bugs);
    return saveData(DBBug, bugs);
}

const bugStore = writable(getCurrentBugs());

export default bugStore;

export {
    getCurrentBugs,
    createBug,
    deleteBug,
    changeSolveBug
}