module.exports={
    getdata:function (link, funcion) {
        link.query("SELECT * FROM coordinador", funcion );
    }, 
    insert:function (link, datos, funcion) {
        link.query("INSERT INTO coordinador (nombre, Apellido) values (?,?)",[datos.nombre, datos.Apellido], funcion);
    }
}