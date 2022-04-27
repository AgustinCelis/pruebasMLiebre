const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, () =>{
    console.log('Server on port 3000')
})

app.get('/', (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, 'views/home.html'))
})

app.get('/register', (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, 'views/register.html'))
})
app.get('/login', (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, 'views/login.html'))
})



