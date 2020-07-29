class ListaEventos{
    
    constructor(){
        this._listaEventos = [];
    }


    adiciona(evento){
        this._listaEventos.push(evento);
    }

    esvazia(){
        this._listaEventos = [];
        }
    
    // para funções de visualização somente:
    _geraVis(){
        return [].concat(this._listaEventos);
    }

    get listaEventos(){
        return this._geraVis();
    }

    ordena(criterio){
        this._geraVis().sort(criterio);
    }

    inverte(){
        this._geraVis().reverse();
    }

    filtra(criterio){
        this._geraVis().filter(criterio);
    }

}