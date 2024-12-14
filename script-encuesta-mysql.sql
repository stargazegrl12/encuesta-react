CREATE DATABASE encuesta
USE encuesta

create table tbl_encuesta{
encuesta_id INT NOT NULL AUTO_INCREMENT,
numero_ticket VARCHAR(20),
nombre_cliente VARCHAR(50),
calificacion TINYINT,
comentario TEXT,
codigo_qr VARCHAR(50),
PRIMARY KEY (encuesta_id)
}