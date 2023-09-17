const API = 'http://localhost:5000/object';

const payload = await fetch(API);
const obj = await payload.json();
