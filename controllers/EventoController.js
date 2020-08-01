class EventoController {
    
    constructor(){
        this._form = document.querySelector("#formulario");

        this._listaEventos = new ListaEventos();
        this._eventosView = new EventosView(document.querySelector(".lista-eventos"), document.querySelector(".observacoes"));

        this._service = new EventoService();

        this._init();

    }



    _init(){
        document.querySelector(".lista-eventos").addEventListener("click", e => {
            if (e.target.nodeName == "TD")   
                this._eventosView.exibeObservacao(this._listaEventos.listaEventos[e.target.classList[0]])
        });

        this._service.lista()
            .then(eventos => {
                eventos.forEach(evento => this._listaEventos.adiciona(evento))
                this._eventosView.update(this._listaEventos);
            })
            .catch(erro => console.log(erro));
    }



    adiciona(event){
        event.preventDefault();

        let novoEvento = this._criaEvento();

        this._service.cadastra(novoEvento)
            .then(mensagem => {
                this._listaEventos.adiciona(novoEvento);
                this._eventosView.update(this._listaEventos);
                this._form.reset();
                console.log(mensagem)
                //this._mensagem.texto = mensagem;
                //this._mensagemView.update(this._mensagem)
            })
            .catch(erro => {
                console.log(erro)
                //this._mensagem.texto = erro
                //this._mensagemView.update(this._mensagem)
            })


    }

    apagarEventosSelecionados(arraydeindices){

    }

    editarEventoSelecionado(indice){

    }

    apagarEventosPassados(){

    }

    apagarTudo(){

    }

    filtrar(tipo){

    }

    Ordenar(){
        //por data
    }




    // métodos para ocultar e reexibir o formulário e botão de exibi-lo alternadamente.
    escondeForm(event){
        event.preventDefault();
        document.querySelector("#conteudo-todo-form").classList.add("invisivel");
        document.querySelector(".botaoExibeForm").classList.remove("invisivel");
    }

    exibeForm(){
        document.querySelector("#conteudo-todo-form").classList.remove("invisivel");
        document.querySelector(".botaoExibeForm").classList.add("invisivel");
    }



    _criaEvento(){
        const evento = this._form.evento.value;
        const data = this._form.dataEvento.value;
        const hora = this._form.horaEvento.value;
        const local = this._form.localEvento.value;
        const tipo = this._form.tipoEvento.value;
        const descricao = this._form.descricao.value;
        return new Evento(evento, data, hora, local, tipo, descricao);


    }
}