class Evento {

    constructor(evento, data, hora, local, tipo, observacoes){

        this._evento = evento;
        this._data = data;
        this._hora = hora;
        this._local = local;
        this._tipo = tipo;
        this._observacoes = observacoes;
        
    }

    get evento(){
        return this._evento
    }

    get data(){
        let data = this._data.split("-").concat(this._hora.split(":"));
        data.forEach(dado => parseInt(dado))
        data[1] -= 1; 
        return new Date(...data);
    }
    

    get local(){
        return this._local
    }

    get tipo(){
        return this._tipo
    }

    get observacoes(){
        return this._observacoes
    }



}