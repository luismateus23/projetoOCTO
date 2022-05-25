var pacientes = document.querySelectorAll('.paciente')

var tabela = document.querySelector('#tabela-pacientes')

tabela.addEventListener('dblclick', function (event) {
  var alvoEvento = event.target
  var paiDoElemento = alvoEvento.parentNode

  paiDoElemento.remove()
})

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         this.remove();
//     });
// });
