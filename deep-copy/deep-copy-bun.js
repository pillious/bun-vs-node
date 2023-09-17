import payload from '../data/payload-es6';

const ITERS = 25;

for (let i = 0; i < ITERS; i++) {
    structuredClone(payload);
}
