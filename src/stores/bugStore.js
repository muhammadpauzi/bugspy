import { writable } from "svelte/store";

const DBBugs = '_bugs';

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


const getCurrentBugs = (keyword = "", solved = false) => {
    try {
        let bugs = localStorage.getItem(DBBugs);
        // bugs's key not exists on localStorage
        if (bugs == null) {
            localStorage.setItem(DBBugs, "[]");
            return [];
        }
        bugs = JSON.parse(bugs);
        // search
        if (keyword) {
            bugs = bugs.filter(bug => bug.title.includes(keyword));
        }
        // let solvedBugs = [];
        // let unsolvedBugs = [];
        // if (solved) {
        //     solvedBugs = bugs.filter(bug => bug.solved);
        // } else {
        //     unsolvedBugs = bugs.filter(bug => !bug.solved);
        // }

        return sort(bugs);
    } catch (err) {
        localStorage.setItem(DBBugs, "[]");
        return [];
    }
}

const saveBugs = (bugs) => {
    localStorage.setItem(DBBugs, JSON.stringify(bugs));
    return sort(bugs);
}

const createBug = (bug) => {
    let bugs = getCurrentBugs();
    bugs.push(bug);
    return saveBugs(bugs);
}

const deleteBug = (id) => {
    let bugs = getCurrentBugs();
    bugs = bugs.filter(bug => bug.id !== id);
    return saveBugs(bugs);
}

const changeSolveBug = (id) => {
    let bugs = getCurrentBugs();
    bugs = bugs.map(bug => {
        if (bug.id === id) {
            bug.solved = !bug.solved;
        }

        return bug;
    });
    console.log(bugs);
    return saveBugs(bugs);
}

const bugStore = writable(getCurrentBugs());

export default bugStore;

export {
    getCurrentBugs,
    createBug,
    deleteBug,
    changeSolveBug
}