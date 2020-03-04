const {users} = require('../models')
const bcrypt = require('bcryptjs')

function createUser(req,res){
    console.log('Check:::::CreateUSER')
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
    console.log('Check:::::findUser')
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
                res.status(202).send('Неверный пароль')
            }
        }else{
            res.status(204).send('Пользователь не найден')
        }
    })
}

module.exports = {
    createUser,
    findUser,
}