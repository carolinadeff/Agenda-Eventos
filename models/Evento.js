class Evento {

    constructor(form){

        this._evento = form.evento.value;
        this._data = form.dataEvento.value;
        this._hora = form.horaEvento.value;
        this._local = form.localEvento.value;
        this._tipo = form.tipoEvento.value;
        this._observacoes = form.descricao.value;
        
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