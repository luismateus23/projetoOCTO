var botao = document.querySelector('#adicionar-paciente')

botao.addEventListener('click', function (event) {
  event.preventDefault()

  if(validaCampos() == false){
    return
  }
  var form = document.querySelector('#form-adiciona')

  var paciente = obtemPacienteDoFormulario(form)
  console.log(paciente)

  var pacienteTr = document.createElement('tr')

  var nomeTd = document.createElement('td')
  var pesoTd = document.createElement('td')
  var alturaTd = document.createElement('td')
  var gorduraTd = document.createElement('td')

  nomeTd.textContent = paciente.nome
  pesoTd.textContent = paciente.peso
  alturaTd.textContent = paciente.altura
  gorduraTd.textContent = paciente.gordura

  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)

  console.log(pacienteTr)

  var tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)
})

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    altura: form.altura.value,
    peso: form.peso.value,
    gordura: form.gordura.value
  }

  return paciente
}

