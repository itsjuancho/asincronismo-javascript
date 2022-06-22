const doSomenthingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Do Somenthing Async"), 2000)
            : reject(new Error('Test'));
    });
}

const doSomenthing = async () => {
    const something = await doSomenthingAsync();
    console.log(something);
}

console.log("Before");
doSomenthing();
console.log("After");

const doAnotherSomething = async () => {
    try {
        const something = await doSomenthingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log("Before 1");
doAnotherSomething();
console.log("After 1");