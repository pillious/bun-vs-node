const fs = require('fs');

const INPUT = '../data/payload.json';
const OUTPUT = '../tmp/output.json';

const main = async () => {
    let payload = {};

    const buf = await fs.promises.readFile(INPUT);
    payload = JSON.parse(buf.toString());

    await fs.promises.writeFile(OUTPUT, JSON.stringify(payload, null, 4));
};

main();
