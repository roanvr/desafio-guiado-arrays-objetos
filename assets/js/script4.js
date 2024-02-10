let dental = [
    {
        hora: "08:30",
        especialista: "ANDREA ZÚÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "MARÍA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SÁNCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPÚLVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }
]

document.write(`<p>Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length-1].paciente} - ${dental[dental.length-1].prevision}</p>`)

let tabla = ''
for(let i = 0; i < dental.length; i++) {
    tabla += `
    <tr>
    <td>${dental[i].hora}</td>
    <td>${dental[i].especialista}</td>
    <td>${dental[i].paciente}</td>
    <td>${dental[i].rut}</td>
    <td>${dental[i].prevision}</td>
    </tr>;
    `
}

document.getElementById('cuerpo').innerHTML = tabla