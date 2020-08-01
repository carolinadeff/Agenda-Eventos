class EventoService {


    cadastra(evento){
        return ConnectionFactory.getConnection()
            .then(connection => new EventoDao(connection))
            .then(dao => dao.adiciona(evento))
            .then(() => "Evento salvo com sucesso!")
            .catch(erro => {throw new Error(erro)});
    }

    lista(){
        return ConnectionFactory.getConnection()
            .then(connection => new EventoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(erro => {throw new Error(erro)})
    }

    apaga(){
        return ConnectionFactory.getConnection()
        .then(connection => new EventoDao(connection))
        .then(dao => dao.apagaTodos())
        .then(() => "Eventos apagados com sucesso!")
        .catch(erro => {throw new Error(erro)})
    }
}