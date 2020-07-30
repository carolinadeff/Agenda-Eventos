class EventoController {
    
    constructor(){
        this._form = document.querySelector("#formulario");
        this._listaEventos = new ListaEventos();
        this._eventosView = new EventosView(document.querySelector(".lista-eventos"), document.querySelector(".observacoes"));

        document.querySelector(".lista-eventos").addEventListener("click", e => {
            if (e.target.nodeName == "TD")
               this._eventosView.exibeObservacao(this._listaEventos.listaEventos[e.target.classList[0]])
        });

        this._eventosView.update(this._listaEventos);
    }

    adiciona(event){
        event.preventDefault();

        let novoEvento = new Evento(this._form);
        this._listaEventos.adiciona(novoEvento);
        this._eventosView.update(this._listaEventos);
        this._form.reset();
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
}