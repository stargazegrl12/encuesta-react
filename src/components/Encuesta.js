import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const EncuestaComponent = () => {

    const navigate = useNavigate();

    const [numero_ticket, setNumeroTicket] = useState("");
    const [nombre_cliente, setNombreCliente] = useState("");
    const [calificacion, setCalificacion] = useState(0);
    const [comentario, setComentario] = useState("");

    const enviarEncuesta = (event) => {
        event.preventDefault();
        
        axios.post("http://localhost/encuesta_back/guardarEncuesta.php", {
            numero_ticket: numero_ticket,
            nombre_cliente: nombre_cliente,
            calificacion: calificacion,
            comentario: comentario
        })
        .then((response) => {
            //console.log(response.data);
            navigate('/cupon', { state: { nombre: response.data.nombre_cliente, contenidoQR: response.data.codigo_qr } });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <p>Gracias por calificar nuestra empesa</p>

            <form onSubmit={enviarEncuesta} >
                <p>
                    <p>Número de ticket</p>
                    <input id="numero_ticket" type="text" onChange={e => setNumeroTicket(e.target.value) } placeholder="Numero ticket"  ></input>
                </p>
                <p>
                    <p>Nombre del cliente</p>
                    <input id="nombre_cliente" type="text" onChange={e => setNombreCliente(e.target.value) } placeholder="Nombre del cliente"  ></input>
                </p>
                <p>
                    <p>Calificación</p>
                    <input id="calificacion" min={0} max={10} type="number" onChange={e => setCalificacion(e.target.value) } placeholder="Calificación"  ></input>
                </p>
                <p>
                    <p>Comentario</p>
                    <textarea id="comentario" onChange={e => setComentario(e.target.value) } placeholder="Comentario"  ></textarea>
                </p>
                <p></p>
                <button type="submit">E N V I A R</button>
            </form>


        </div>
    )
}