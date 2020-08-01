class EventoDao {
    constructor(connection){
        this._connection = connection;
        this._store = 'eventos';
    }

    adiciona(evento){
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .add(evento);
            
            request.onsuccess = (e) => {
                resolve();
            }

            request.onerror = e => {
                console.log(e.target.error);
                reject(e.target.error);
        
            }
        })

    }

    listaTodos(){
        return new Promise((resolve, reject) => {
            let cursor = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .openCursor()
            
            let eventos = [];

            cursor.onsuccess = e => {
                let atual = e.target.result;

                if(atual){

                    let dado = atual.value;

                    eventos.push(new Evento(dado._evento, dado._data, dado._hora, dado._local, dado._tipo, dado._observacoes));
                    atual.continue();
                
                }else{
                    resolve(eventos)
                }
            }

            cursor.onerror = e => {
                console.log(e.target.error)
                reject('Não foi possível coletar os eventos')
            }
        })
    }

    apagaTodos(){
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .clear()
            
            request.onsuccess = e => resolve("Dados apagados com sucesso");
            request.onerror = e => reject("Não foi possível apagar os dados");
        })
    }

}