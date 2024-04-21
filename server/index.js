const express = require('express');
const cors = require('cors');

const app = express();
const PORT  = 5000;


app.use(cors({
    origin: 'http://localhost:3000'
}));


app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});