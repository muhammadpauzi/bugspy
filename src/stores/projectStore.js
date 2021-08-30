import { writable } from "svelte/store";

const DBProject = '_projects';

const sort = (data = [], sortBy = "2") => {
    return data.sort((a, b) => {
        switch (sortBy) {
            case "1": // by asc date created
                return a.dateCreated - b.dateCreated;
            case "2": // by desc data created
                return b.dateCreated - a.dateCreated;
            case "3": // by asc title
                if (a.title < b.title) {
                    return -1;
                }
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            case "4": // by desc title
                if (a.title > b.title) {
                    return -1;
                }
                if (a.title < b.title) {
                    return 1;
                }
                return 0;
            default:
                return 0;
        }
    });
}


const getCurrentProjects = () => {
    try {
        let projects = localStorage.getItem(DBProject);
        if (projects == null) {
            localStorage.setItem(DBProject, "[]");
            return [];
        }
        projects = JSON.parse(projects);
        return sort(projects);
    } catch (err) {
        localStorage.setItem(DBProject, "[]");
        return [];
    }
}

const createProject = (project) => {
    let projects = getCurrentProjects();
    projects.push(project);
    localStorage.setItem(DBProject, JSON.stringify(projects));
    return sort(projects);
}

const deleteProject = (id) => {
    let projects = getCurrentProjects();
    projects = projects.filter(project => project.id !== id);
    localStorage.setItem(DBProject, JSON.stringify(projects));
    return sort(projects);
}

const projectStore = writable(getCurrentProjects());

export default projectStore;

export {
    getCurrentProjects,
    createProject,
    deleteProject
}