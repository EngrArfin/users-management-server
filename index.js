const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: 'Sabana', email: 'arfinmia1298@gmail.com'},
    {id: 1, name: 'Saban', email: 'arfinmia129@gmail.com'},
    {id: 1, name: '', email: 'arfinmia12@gmail.com'},
]

app.get('/', (req, res) =>{
    res.send('Users Management Server is running ');
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Server is running PORT: ${port}`)
}) 