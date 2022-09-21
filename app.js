const express = require('express')
const app = express()
const port = 3000


 

// basic route
app.get('/', (req, res) => {
    res.send('Hello World');
})

//About
app.get('/About', (req, res) => {
    res.send('Hello ');
})


//Contac
app.get('/Contac', (req, res) => {
    res.send('08222529320');
})
app.listen(3000, () => console.log('Server Running at http://localhost:3000'))
