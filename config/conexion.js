let mysql = require('mysql');
let link = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo'
});

link.connect(
    (err) =>{
        if (!err) {
            // console.log('conecxion establecida');
        } else {
            console.log('Error en la conexion');
        }
    }
);

module.exports = link;