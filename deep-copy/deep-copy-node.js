const payload = require('../data/payload-commonjs');

const ITERS = 25;
for (let i = 0; i < ITERS; i++) {
    structuredClone(payload);
}
