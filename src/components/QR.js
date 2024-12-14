import React, {useState} from "react";
import QRCode from "react-qr-code";
import { useNavigate, useLocation } from "react-router-dom";

export const QRComponent = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [nombre, setNombre] = useState(location.state.nombre);
    const [contenidoQR, setContenidoQR] = useState(location.state.contenidoQR);


    const regresar = () => {
        navigate("/");
    }

    return (
        <div>
            <p>Gracias {nombre}</p>
            <p>Canjea tu promoción con el siguiente código QR</p>

            <div style={{ height: "auto", margin: 20, maxWidth: 150, width: "100%" }}>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={contenidoQR}
                    viewBox={`0 0 256 256`}
                />
            </div>
            <p></p>

            <button onClick={ e=> regresar()} >R E G R E S A R</button>
        </div>
    )
}