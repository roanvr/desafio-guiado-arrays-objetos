let radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA"
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE"
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE"
    },
    {
        hora: "15:30",
        especialista: "ANA MARÍA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "ISAPRE"
    },
    {
        hora: "16:00",
        especialista: "PATRICIO SUAZO",
        paciente: "RAMÓN ULLOA",
        rut: "14989389-K",
        prevision: "FONASA"
    }
]

//Segundo requerimiento: mostrar la primera y última consulta.
document.write(`<p>Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length-1].paciente} - ${radiologia[radiologia.length-1].prevision}</p>`)

//Tercer requerimiento

let tabla = ''
for(let i = 0; i < radiologia.length; i++){
    tabla += `
    <tr>
    <td>${radiologia[i].hora}</td>
    <td>${radiologia[i].especialista}</td>
    <td>${radiologia[i].paciente}</td>
    <td>${radiologia[i].rut}</td>
    <td>${radiologia[i].prevision}</td>
    </tr>;
    `
}
document.getElementById('cuerpo').innerHTML = tabla