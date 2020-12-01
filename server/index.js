const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./user_database.json');
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const isRegisteredUser = users.filter(user => {
        if(JSON.stringify(req.body) == JSON.stringify(user)){
            return true;
        }
    });
    if(isRegisteredUser.length > 0){
        res.json({status: 200})
    }else {

        res.json({status:401})
    }
})

app.get('/getUsers', (req, res) => {
    const usernames = users.map(user => {
        return user.username
    });
    res.json({users: usernames})
})
const server = app.listen(5000, () => console.log('Server listening on port 5000'));
const io = require('socket.io')(server, { cors: { origin: '*', } });
io.on('connection', (socket) => {
    console.log('New Socket Connected');
    socket.on('clickedUser', (data) => {
        io.emit('message', String(data));
    })
})