let traumatologia = [
    {
        hora: "08:00",
        especialista: "MARÍA PAZ ALTUZARRA",
        paciente: "PAULA SÁNCHEZ",
        rut: "15554774-5",
        prevision: "FONASA"
    },
    {
        hora: "10:00",
        especialista: "RAÚL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE"
    },
    {
        hora: "10:30",
        especialista: "MARÍA ARRIAGA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA"
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MÉNDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE"
    },
    {
        hora: "12:30",
        especialista: "ANDRÉS KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE"
    }
]

document.write(`<p>Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length-1].paciente} - ${traumatologia[traumatologia.length-1].prevision}</p>`)

let tabla = ''
for(let i = 0; i < traumatologia.length; i++) {
    tabla += `
    <tr>
    <td>${traumatologia[i].hora}</td>
    <td>${traumatologia[i].especialista}</td>
    <td>${traumatologia[i].paciente}</td>
    <td>${traumatologia[i].rut}</td>
    <td>${traumatologia[i].prevision}</td>
    </tr>;
    `
}

document.getElementById('cuerpo').innerHTML = tabla