class EventoController{
    
    constructor(){
        this.form = document.querySelector("#formulario");
    }

    adiciona(event){
        event.preventDefault();
        let evento = this.form.evento.value;
        let data = this.form.dataEvento.value;
        let hora = this.form.horaEvento.value;
        let local = this.form.localEvento.value;
        let tipo = this.form.tipoEvento.value;


        console.log(evento);
        console.log(data);

    }

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