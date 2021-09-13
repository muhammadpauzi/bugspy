import { writable } from "svelte/store";
import { getCurrentData, saveData } from '../utils/data';

const DBProject = '_projects';

const getCurrentProjects = (keyword = "") => {
    return getCurrentData(DBProject, keyword);
}

const createProject = (project) => {
    let projects = getCurrentProjects();
    projects.push(project);
    return saveData(DBProject, projects);
}

const editProject = (updatedProject) => {
    let projects = getCurrentProjects()
    projects = projects.map((project) => {
        if (project.id == updatedProject.id) {
            project.title = updatedProject.title;
            project.priority = updatedProject.priority;
        }
        return project;
    });
    return saveData(DBProject, projects);
}

const deleteProject = (id) => {
    let projects = getCurrentProjects();
    projects = projects.filter(project => project.id !== id);
    return saveData(DBProject, projects);
}

const projectStore = writable(getCurrentProjects());

export default projectStore;

export {
    getCurrentProjects,
    createProject,
    deleteProject,
    DBProject,
    editProject
}