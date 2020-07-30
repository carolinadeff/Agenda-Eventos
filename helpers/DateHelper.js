class DateHelper {

    static VisualizacaoData1(data){
        let semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

        return `${semana[data.getDay()]}, ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}, às ${data.getHours()}:${data.getMinutes()}`

    }

}