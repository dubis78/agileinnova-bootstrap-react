import React from 'react'

import './css/Title_btns.css'

const Title_btns = () => {
    return (
        <div className="container">             
            <div className="row align-items-center">
                <div className="col-md-6 offset-md-6 text-center text-md-right">
                    <h1>Geek Conf Medellín</h1>
                    <p className="d-none d-md-block">Geek conf realiza su primer Demo Day con la cohorte de
                    Línea 1: FrontEnd, donde los Geeks entrenados evidencian
                    por medio de un proyecto todas las habilidades y conocimientos
                    técnicos adquiridos durante el curso.
                    </p>
                    <a href="#" className="btn btn-outline-light">Quiero ser orador</a>
                    <button type="button" className="btn m-1 btn-geek" data-toggle="modal" data-target="#modalCompra">Comprar Tickets</button>
                </div>
            </div>
        </div>
    );
}
export default Title_btns;