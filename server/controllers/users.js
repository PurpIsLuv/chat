const {users} = require('../models')
const bcrypt = require('bcryptjs')

function createUser(req,res){
    users.findOne({
        where:{
            email: req.params.email
        },
    })
    .then(user=>{
        if (user){
            res.status(203).send('Пользователь существует')
        }else{
            var hash = bcrypt.hashSync(req.params.password,10)
            users.create({
                login: req.params.login,
                email: req.params.email,
                password: hash
            })
            .then(data=>{
                res.status(201).send(data)
            })
            .catch(err=>{
                res.send(err)
            })
        }
    })
}
function findUser(req,res){
    users.findOne({
        where: {
            email: req.params.email
        },
    })
    .then(user=>{
        if (user){
            if (bcrypt.compareSync(req.params.password,user.password)==true){
                res.status(200).send({
                    login: user.login,
                })
            }else{
                res.status(400).send('Пароль гавно')
            }
        }else{
            res.status(404).send('Пользователь не найден')
        }
    })
}

module.exports = {
    createUser,
    findUser,
}