function validaCampos() {
  inputNome = document.querySelector('#nome')
  inputCpf = document.querySelector('#peso')
  inputRg = document.querySelector('#altura')
  inputData = document.querySelector('#gordura')

  if (inputNome.value == '') {
    alert('Preencha o campo nome, por gentileza!')
    return false
  }else if (inputCpf.value == '') {
    alert('Preencha o campo CPF, por gentileza!')
    return false
  }else if(inputRg.value == ''){
    alert('Preencha o campo RG, por gentileza!')
    return false
  }else if(inputData.value == ''){
    alert('Preencha o campo Data de nascimento, por gentileza!')
    return false
  }
  
}
