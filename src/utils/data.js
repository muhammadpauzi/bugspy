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

const getCurrentData = (DBKey = "", keyword = "") => {
    try {
        let data = localStorage.getItem(DBKey);
        // db's key is not exists on localStorage
        if (data == null) {
            localStorage.setItem(DBKey, "[]");
            return [];
        }
        data = JSON.parse(data);
        // search
        if (keyword) {
            data = data.filter(bug => {
                return bug.title.toLowerCase().includes(keyword.toLowerCase());
            });
        }
        return sort(data);
    } catch (err) {
        localStorage.setItem(DBKey, "[]");
        return [];
    }
}

const saveData = (DBKey = "", data = []) => {
    localStorage.setItem(DBKey, JSON.stringify(data));
    return sort(data);
}

export {
    getCurrentData,
    saveData
}