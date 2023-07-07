let link = require('../config/conexion')
let getusers = require('../models/librosModels')

module.exports={
    index:function (req, res) {
        getusers.getdata(link, function (err, datos) {
            //datos = contiene la informacion de la  tabla de la base de datos
            res.render('libros/libros', { title: 'Usuarios', h1: 'lista de usuarios', getusers:datos});   
        })
    },
    crear:function (req, res) {
        res.render('libros/crear', {title:'Add User'})
    },
    // send form
    save:function (req, res) {
        // console.log(req.body)
        getusers.insert(link, req.body, function (err){
            res.redirect('/libros')
        })
    },
    delete:function (req, res) {
        // console.log("id"+ req.params.id);
        getusers.eliminar(link,req.params.id, function (err){
            res.redirect('/libros')
        })
    },
    editar:function (req, res) {
        getusers.returndata(link, req.params.id, function (err, registros) {
            // console.log(registros[0]);
            res.render('libros/editar',{title: "Editar", getusers:registros[0]})            
        })
    },
    actuaizar:function (req, res) {
        // console.log(req.body)
        getusers.update(link, req.body, function (err){
            res.redirect('/libros')
        })
    },
}