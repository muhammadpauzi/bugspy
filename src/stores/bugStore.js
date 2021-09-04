import { writable } from "svelte/store";
import { getCurrentData, saveData } from '../utils/data';

const DBBug = '_bugs';

const getCurrentBugs = (keyword = "") => {
    return getCurrentData(DBBug, keyword);
}

const createBug = (bug) => {
    let bugs = getCurrentBugs();
    bugs.push(bug);
    return saveData(DBBug, bugs);
}

const deleteBug = (id) => {
    let bugs = getCurrentBugs();
    bugs = bugs.filter(bug => bug.id !== id);
    return saveData(DBBug, bugs);
}

const changeSolveBug = (id) => {
    let bugs = getCurrentBugs();
    bugs = bugs.map(bug => {
        if (bug.id === id) {
            bug.solved = !bug.solved;
        }
        return bug;
    });
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