const database: any[] = [];



class DBWrapper {
    constructor() {
        //create class or initialize;
        console.log("new Date", new Date());
    }

    update(id: any, value: any) {

    }
    delete(id: any) { }
    // find(){}
    insert(value: any, callback?: () => void) { //no need to pass id
        let cb: ((arg0: null, arg1: unknown) => void) | null = null;
        if (typeof callback === "function") cb = callback;
        return new Promise((resolve, reject) => {
            let insertValue = {
                ...value,
                id: database[database.length - 1]?.id + 1 || 1
            }
            try {
                database.push(insertValue);
                return cb ? cb(insertValue, null) : resolve(insertValue);
            } catch (err) {
                return cb ? cb(null, err) : reject(err)
            }
        })
        //in case of error return false with error

    }
}

export default new DBWrapper();