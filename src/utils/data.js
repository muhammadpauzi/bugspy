const sort = (data = []) => {
    return data.sort((a, b) => b.dateCreated - a.dateCreated);
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