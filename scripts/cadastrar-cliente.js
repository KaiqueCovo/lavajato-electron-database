

function adicionarProduto(event) {
  event.preventDefault();


  console.log('ENTROU NA FUNÇÃO ADICIONAR PRODUTO')
}

var formulario = document.getElementById('formulario')
formulario.addEventListener('submit', adicionarProduto)