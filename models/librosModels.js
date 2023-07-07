module.exports={
    getdata:function (link, funcion) {
        link.query("SELECT * FROM coordinador", funcion );
    }, 
    insert:function (link, datos, funcion) {
        link.query("INSERT INTO coordinador (nombre, Apellido) values (?,?)",[datos.nombre, datos.Apellido], funcion);
    },
    returndata:function (link, id, funcion) {
        link.query("SELECT * FROM coordinador WHERE id_coordinador=? ",[id], funcion);
    },
    eliminar:function (link, id, funcion) {
        link.query("DELETE FROM coordinador WHERE id_coordinador=? ",[id], funcion);
    },
    update:function (link, datos, funcion) {
        link.query("UPDATE coordinador SET nombre=?, Apellido=? WHERE id_coordinador=? ",[datos.nombre, datos.Apellido, datos.id_coordinador], funcion);
    }

}