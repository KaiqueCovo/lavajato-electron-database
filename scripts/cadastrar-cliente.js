const alertaAdicionarNovoCliente = require("../scripts/alerta");


function adicionarProduto(event) {
  event.preventDefault();


  console.log('ENTROU NA FUNÇÃO ADICIONAR PRODUTO')

  //ESSE CÓDIGO DEVE SER MOSTRADO CASO O CLIENTE SEJA ADICIONADO COM SUCESSO AO BANCO DE DADOS
  alertaAdicionarNovoCliente()
}

var formulario = document.getElementById('formulario')
formulario.addEventListener('submit', adicionarProduto)