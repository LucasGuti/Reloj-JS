//window.setTimeout(saludar, 4000) //este metodo ayuda a ejecutar una funcion despues de un tiempo especifico

/*function saludar(){
    alert("Este es un mensaje");

}*/


/*let contador = 1;
let tiempo = window.setInterval(contar, 1000)

function contar() {
    document.write(contador + "<br>");
    contador++;
    if (contador > 15) {
        clearInterval(tiempo)
    }
}*/

function crearHora() {
    let fecha = new Date(), //poner aqui la coma hace referencia a que lo que sigue es otro LET (let hora = 12)
        hora = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        anio = fecha.getFullYear();

    //enviar al HTML las variables

    let pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pAnio = document.getElementById("anio");

    //asiganar VALORES a los objetos del HTML

    pDia.innerText = dia;
    pAnio.innerText = anio;

    let semana = ["Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado"],
        meses = ["Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"]
    pDiaSemana.innerText = semana[diaSemana];
    pMes.innerText = meses[mes];

    //Obtener objetos del HTML

    let pHora = document.getElementById("hora"),
    pMinutos = document.getElementById("minuto"),
    pSegundos = document.getElementById("segundo"),
    pAmPm = document.getElementById("ampm");

    if (hora >= 12){
        pAmPm.innerText = "pm";
        hora = hora - 12;

    } else {
        pAmPm.innerText = "am"
    };

    if(segundos < 10) {
        pSegundos.innerText = "0" + segundos;
    }else {
        pSegundos.innerText = segundos;
    };
    
    if(minutos < 10) {
        pMinutos.innerText = "0" + minutos;
    }else {
        pMinutos.innerText = minutos;
    };
    

    pHora.innerText = hora;
    pMinutos.innerText = minutos;
    pSegundos.innerText = segundos;

    console.log(fecha);
    console.log(hora);
}

window.setInterval(crearHora, 1000);



