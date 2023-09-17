import Bun from 'bun';
import payload from '../data/payload-es6';

const HOST = '127.0.0.1';
const PORT = 5000;

Bun.serve({
    hostname: HOST,
    port: PORT,
    fetch(req) {
        const url = new URL(req.url);
        url.protocol;
        if (url.pathname === '/') return new Response('🐻‍❄️');
        if (url.pathname === '/object') return new Response(JSON.stringify(payload));
        return new Response({ status: 400, statusText: 'Not Found' });
    },
});
