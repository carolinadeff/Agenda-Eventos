class EventosView {

    constructor(elemento, elementoObservacoes){
        this._elemento = elemento;
        this._elementoObservacoes = elementoObservacoes;
    }


    _template(model){
        return `
        <table>
            <caption>Meus Eventos</caption>
                <tbody>
                    <tr class="titulo">
                        <th>Evento</th>
                        <th>Data e hora</th>
                        <th>Local</th>
                    </tr>              
                    ${model.listaEventos.map(evento => `
                        <tr class="${evento.tipo}">
                            <td class="${model.listaEventos.indexOf(evento)}">${evento.evento}</td>
                            <td class="${model.listaEventos.indexOf(evento)}">${DateHelper.VisualizacaoData1(evento.data)}</td>
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