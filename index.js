const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());


const users = [
    {id: 1, name: 'Arfin', email: 'arfinmia1298@gmail.com'},
    {id: 2, name: 'Evon', email: 'arfinmia129@gmail.com'},
    {id: 3, name: 'Shuvo', email: 'arfinmia12@gmail.com'},
]

app.get('/', (req, res) =>{
    res.send('Users Management Server is running ');
});
app.post('/users', (req, res)=>{
    res.send(users);
})

app.get('/users', (req, res) => {
    console.log('post api hitting ')
    console.log(req.body);

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);

})

app.listen(port, () => {
    console.log(`Server is running PORT: ${port}`)
}) 