const API = 'http://localhost:5000/object';

const main = async () => {
    const payload = await fetch(API);
    const obj = await payload.json();
};

main();

// // console.log(deepCopy(obj));
// const deepCopy = (obj) => {
//     return structuredClone(obj);
// };