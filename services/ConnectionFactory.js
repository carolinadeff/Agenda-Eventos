
const dbName = 'agenda';
const version = 1;
const stores = ['eventos'];


class ConnectionFactory{

    constructor(){
        throw new Error("A classe não deve ser instanciada.")
    }

    static getConnection() {
        
        return new Promise((resolve, reject) => {

            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e =>
                e.target.result.createObjectStore('eventos', {autoIncrement: true});
                

            openRequest.onsuccess = e => {
                let connection = e.target.result;
                resolve(connection);
            }

            openRequest.onerror = e => {
                let erro = e.target.error;
                console.log(erro);
                reject(erro.name);
            }
        })
    } 
}