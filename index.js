require('dotenv').config();
import express from 'express';


const app = express();
const port = process.env.PORT | 3000;
app.listen(port);

app.use(express.json());

const user = {
    username: "falana",
    password: "dikana"
}

app.get('/login', (req, res)=>{
    const { username, password } = req.body;
    console.log(username, password);
    res.send("this is working");
});


