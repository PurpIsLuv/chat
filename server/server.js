const express = require('express')
const cors = require('cors')

const config = require('./config/devconf')
const controllers = require('./controllers/users')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Server listen in ' + config.port)
})
app.post('/SignUp/:login/:email/:password',controllers.createUser)
app.post('/:email/:password',controllers.findUser)



const server = app.listen(config.port,()=>{
    console.log('Server listen in ' + config.port)
})


const io = require('socket.io')(server)

io.on('connection', function(socket){
    console.log(socket.id)
    socket.on('SEND_MESSAGE',data=>{
        io.emit('MESSAGE',data)
        console.log(data)
    })
});

