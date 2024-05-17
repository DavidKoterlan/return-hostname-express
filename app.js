import express from 'express';
import { hostname } from 'os';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    const host = hostname();
    res.send(`Hostname: ${host}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});