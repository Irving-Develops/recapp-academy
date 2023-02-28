import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("this works")
})
app.listen(5001)