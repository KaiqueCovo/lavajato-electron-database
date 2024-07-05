const bancoDeDados = require("../scripts/banco-de-dados");
// const deletarProduto = require("./script-excluir-produto");

// Buscar todos os produtos
var queryBuscar = "SELECT * FROM clientes";

bancoDeDados.query(queryBuscar, function (error, clientes) {
  if (error) {
    console.log(`Ocorreu um erro ao buscar os clientes: ${error.code}`);
    console.log(`Ocorreu um erro ao buscar os clientes: ${error.fatal}`);
  } else {
    clientes.forEach((produto) => {
      var novaLinha = tbody.insertRow();

      var celulaCliente = novaLinha.insertCell(0);
      var celulaCarro = novaLinha.insertCell(1);
      var celulaPlaca = novaLinha.insertCell(2);

      celulaCliente.innerText = produto.cliente;
      celulaCarro.innerText = produto.carro;
      celulaPlaca.innerText = produto.placa;
      // celulaLogradouro.innerText = item.logradouro || "Não informado";
      // celulaBairro.innerText = item.bairro || "Não informado";
      // celulaLocalidade.innerText = item.localidade;
      // celulaUf.innerText = item.uf;
      // // Criar um item da lista
      // var criarItem = document.createElement("li")
      // criarItem.innerText = produto.nome
      // criarItem.className = "item"
      // criarItem.id = produto.id
      // criarItem.onclick = deletarProduto

      // // Criar a div com os ícones
      // var criarDiv = document.createElement("div")
      // criarDiv.className = "icones-de-acao"
      // criarItem.appendChild(criarDiv)

      // // Criar ícone de editar
      // var criarIconeEditar = document.createElement("img")
      // criarIconeEditar.className = "icone-editar"
      // criarIconeEditar.alt = "Editar produto"
      // criarIconeEditar.src = "./images/icone-editar.png"
      // criarIconeEditar.onclick = function() {
      //   console.log("editar produto")
      //   window.location.href = `./editar-produto.html`
      // }

      //  // Criar ícone de excluir
      // var criarIconeExcluir = document.createElement("img")
      // criarIconeExcluir.className = "icone-excluir"
      // criarIconeExcluir.alt = "Excluir produto"
      // criarIconeExcluir.src = "./images/icone-excluir.png"

      // // Adicionar os ícones na div
      // criarDiv.appendChild(criarIconeEditar)
      // criarDiv.appendChild(criarIconeExcluir)

      // // Adicionar a li na ul
      // listaProdutos.appendChild(criarItem)
    });
  }
});
