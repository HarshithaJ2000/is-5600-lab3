// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ message: 'Home Route' }));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ error: 'Not Found' }));
//     }
// });

// server.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Home Route (Express)' });
});

app.get('/about', (req, res) => {
    res.json({ message: 'About Route (Express)' });
});
let messages = [];

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.post('/messages', (req, res) => {
    const message = req.body;
    messages.push(message);
    res.status(201).json({ success: true });
});
app.listen(3000, () => {
    console.log('Express server running on http://localhost:3000');
});