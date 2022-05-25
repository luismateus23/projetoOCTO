// var cliente = document.querySelectorAll('.paciente')

// for (var i = 0; i < cliente.length; i++) {
//   var tdPeso = cliente[i].querySelector('.info-peso')
//   //var peso = tdPeso.textContent
//   tdPeso.addEventListener('keypress', () => {
//     let inputLength = tdPeso.value.length

//     console.log(inputLength)

//     if (inputLength == 3 || inputLength == 7) {
//       input.value += '.'
//     } else if (inputLength == 11) {
//       input.value += '-'
//     }
//   })

//   var tdAltura = cliente[i].querySelector('.info-altura')
//   var altura = tdAltura.textContent
// }

//mascara CPF
var input = document.querySelector("#peso")
input.addEventListener('keypress', () =>{
  let inputLength = input.value.length

  if(inputLength == 3 || inputLength == 7) {
    input.value += '.'
  } else if (inputLength == 11) {
    input.value += '-'
  }
})

//mascara RG
var inputy = document.querySelector("#altura")
inputy.addEventListener('keypress', () =>{
  let inputLength = inputy.value.length

  if(inputLength == 2 || inputLength == 6) {
    inputy.value += '.'
  } else if (inputLength == 10) {
    inputy.value += '-'
  }
})

//mascara data
var inpute = document.querySelector("#gordura")
inpute.addEventListener('keypress', () =>{
  let inputLength = inpute.value.length

  if(inputLength == 2 || inputLength == 5) {
    inpute.value += '/'
  } 
  
})




//apenas números no campo CPF
var inputN = document.querySelector('#peso')

inputN.addEventListener('keypress', function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.wich


  if (!checkChar(e)) {
    e.preventDefault()
  }


})
function checkChar(e) {
  const char = String.fromCharCode(e.keyCode)


  const pattern = '[0-9]'

  if (char.match(pattern)) {
    //console.log(char)
    return true
  }
}


//apenas números no campo RG
var inputNam = document.querySelector('#altura')

inputNam.addEventListener('keypress', function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.wich

  // if (keyCode > 47 && keyCode < 58) {
  //   e.preventDefault()
  // }

  if (!checkChar(e)) {
    e.preventDefault()
  }


})
function checkChar(e) {
  const char = String.fromCharCode(e.keyCode)


  const pattern = '[0-9]'

  if (char.match(pattern)) {
    //console.log(char)
    return true
  }
}

//apenas números no campo data
var inputNy = document.querySelector('#gordura')

inputNy.addEventListener('keypress', function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.wich

  // if (keyCode > 47 && keyCode < 58) {
  //   e.preventDefault()
  // }

  if (!checkChar(e)) {
    e.preventDefault()
  }


})
function checkChar(e) {
  const char = String.fromCharCode(e.keyCode)


  const pattern = '[0-9]'

  if (char.match(pattern)) {
    //console.log(char)
    return true
  }
}