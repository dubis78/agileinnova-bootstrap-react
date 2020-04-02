import React from 'react';

const Buy_ticket=()=>{
    return(
        <div className="modal fade show" id="modalCompra" tabindex="-1" role="dialog" aria-labelledby="modalCompraTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="modalCompraTitle">Comprar Tickets</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button>
        </div>
        <div className="modal-body">
            <form action="">
                <div className="form-row">
                    <div className="form-group col">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
            </form>
            <div className="alert alert-warning" role="alert">
                Recibirás un correo de confirmación si sales sorteado
            </div>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-geek">Comprar</button>
        </div>
        </div>
    </div>
    </div>
    );
}
export default Buy_ticket;


/*<div class="modal fade show" id="modalCompra" tabindex="-1" role="dialog" aria-labelledby="modalCompraTitle" style="display: block; padding-right: 14px;" aria-modal="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="modalCompraTitle">Comprar Tickets</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">
            <form action="">
                <div class="form-row">
                    <div class="form-group col">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                    </div>
                </div>
            </form>
            <div class="alert alert-warning" role="alert">
                Recibirás un correo de confirmación si sales sorteado
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-geek">Comprar</button>
        </div>
        </div>
    </div>
    </div>*/