class EventosView {

    constructor(elemento, elementoObservacoes){
        this._elemento = elemento;
        this._elementoObservacoes = elementoObservacoes;
    }


    _template(model){
        return `
        <table>
            <caption>Meus Eventos</caption>
            <thead>
                <tr>
                    <th>Evento</th>
                    <th>Data e hora</th>
                    <th>Local</th>
                </tr>
            </thead>
            <tbody>
                ${model.listaEventos.map(evento => `
                    <tr>
                        <td class="${model.listaEventos.indexOf(evento)}">${evento.evento}</td>
                        <td class="${model.listaEventos.indexOf(evento)}">${evento.data}</td>
                        <td class="${model.listaEventos.indexOf(evento)}">${evento.local}</td>
                    </tr>
                    `).join(``)}
            </tbody>
        </table>
        `;
    }

    _templateObservacoes(eventoSelecionado){

        return `<p>${eventoSelecionado.observacoes}</p>`

    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }

    exibeObservacao(eventoSelecionado){
        this._elementoObservacoes.innerHTML = this._templateObservacoes(eventoSelecionado);
    }
}