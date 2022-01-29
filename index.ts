import express, {response} from "express";
import * as path from "path";
import bodyParser from "body-parser";
import {Client} from 'pg';
import {config} from "./Database";

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


const client = new Client(config);
const connection = client.connect().catch(error => {
    console.log(error);
});

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());


app.get('/', (req, res) => {

    const p = path.join(__dirname, 'public/views/index.html');
    res.sendFile(p);

});

app.get('/login', (req, res) => {

    const p = path.join(__dirname, 'public/views/index.html');
    res.sendFile(p);

});


app.get('/dashboard', (req, res) => {

    const p = path.join(__dirname, 'public/views/dashboard.html');
    res.sendFile(p);

});

app.get('/register', (req, res) => {

    const p = path.join(__dirname, 'public/views/register.html');
    res.sendFile(p);

});

app.post('/login', (req, res) => {

    const password = req.body['password'];
    const email = req.body['email'];

    res.redirect('/dashboard');

});

app.post('/register', async (req, res) => {

    const confirmation = req.body['confirmation'];
    const password = req.body['password'];
    const email = req.body['email'];

    const text = `INSERT INTO "user"(email, password) VALUES($1, $2) RETURNING *`
    const values = [email, password];

    try {
        const response = client.query(text, values);
        res.redirect('/login');
    } catch (error: any) {
        console.log(error.stack);
    }


});


app.listen(8080);

