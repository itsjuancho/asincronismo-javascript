const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject("Ups!");
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("true!");
            }, 2000);
        } else {
            reject(new Error("Ups!"));
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("Array of results:", response)
    })
    .catch(error => {
        console.error(error)
    });