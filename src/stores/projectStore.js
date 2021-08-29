import { writable } from "svelte/store";

const DBProject = '_projects';

const getCurrentProjects = () => {
    try {
        let projects = localStorage.getItem(DBProject);
        if (projects == null) {
            localStorage.setItem(DBProject, "[]");
            return [];
        }
        projects = JSON.parse(projects);
        return projects;
    } catch (err) {
        localStorage.setItem(DBProject, "[]");
        return [];
    }
}

const createProject = (project) => {
    let projects = getCurrentProjects();
    projects.push(project);
    localStorage.setItem(DBProject, JSON.stringify(projects));
    return projects;
}

const projectStore = writable(getCurrentProjects());

export default projectStore;

export {
    getCurrentProjects,
    createProject
}