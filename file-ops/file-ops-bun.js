const Bun = require('bun');

const INPUT = '../data/payload.json';
const OUTPUT = '../tmp/output.json';

// Lazy-loaded file. Doesn't read from the file until .json() call.
const blob = Bun.file(INPUT);
const payload = await blob.json();

await Bun.write(OUTPUT, JSON.stringify(payload, null, 4));