import express from "express";
import * as path from "path";

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    const p = path.join(__dirname, 'public/views/dashboard.html');
    res.sendFile(p);
})




app.listen(8080);

