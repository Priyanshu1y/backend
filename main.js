const express = require('express');
const app = express();
const port = 3000 | process.env.PORT;
app.listen(port);

app.use(express.json());

app.get('/signup', (req,res)=>{
    res.json({
        message: "signing up"
    })
});