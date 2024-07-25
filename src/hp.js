let listaPaciente = document.getElementById('resLista')

let proximoPaciente = document.getElementById('resNome')

const form = document.getElementById('frm')
let listaPacientes = ""
setTimeout(() => {
    console.log("paci2", listaPacientes);

}, 5000)

let pacientes = []

if (pacientes.length === 0) {
    listaPaciente.innerText = " Não há pacientes para serem chamados"
     proximoPaciente.innerText = " Nenhum paciente"
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = form.inNome.value

    if (nome === "" || undefined) {
        alert("Adicione um paciente")
        return
    }

    pacientes.push(nome)

    console.log("paz", pacientes)

    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}- ${paciente}\n`))

    listaPaciente.innerText = lista
    console.log("paci", listaPacientes);
    form.inNome.value = ""

})

form.btnUrg.addEventListener('click', () => {
    const nome = form.inNome.value
    if (nome === "" || undefined) {
        alert("Adicione um paciente")
        return
    }
    pacientes.unshift(nome)
    let lista = ""

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`))

    listaPaciente.innerText = lista
    form.inNome.value = ""
})

form.btnChamar.addEventListener('click', () => {

    if (pacientes.length === 0) {
        alert("Não há pacientes para serem chamados")
       proximoPaciente.innerText = " Nenhum Paciente..."
        return
    }

    setTimeout(() => {
        if (pacientes.length === 0) {
            listaPaciente.innerText = "Não há pacientes para serem chamados..."
            return
        }
    }, 1000)

    const atender = pacientes.shift()
    proximoPaciente.innerText = `  ${atender}`
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    listaPaciente.innerText = lista

})




