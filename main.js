document.addEventListener("DOMContentLoaded", function () {
  // Obter elementos do DOM
  var buttonValidacao = document.getElementById("buttonValidacao");
  var img = document.getElementById("imgValidacao");

  // Adicionar evento de clique ao botão de validação
  buttonValidacao.addEventListener("click", function (event) {
    event.preventDefault();

    // Obter valores dos campos de entrada
    var numPrimeiro = parseInt(document.querySelector("#primeiroNumero").value);
    var numSegundo = parseInt(document.querySelector("#segundoNumero").value);

    // Verificar se os valores são números
    if (!isNaN(numPrimeiro) && !isNaN(numSegundo)) {
      // Verificar se o número B é maior que o número A
      if (numSegundo > numPrimeiro) {
        // Exibir mensagem de validação positiva
        alert(
          `Parabens o formulario foi validado!\n o numero ${numSegundo} é maior que ${numPrimeiro}`
        );
        img.src = "img/002.png"; // Atualizar a imagem
      } else {
        // Exibir mensagem de validação negativa
        alert(
          `Desculpe o formulario foi preenchido de forma inválido!\nO numero ${numSegundo} não é maior que ${numPrimeiro}.\nTente novamente!`
        );
        img.src = "img/003.png"; // Atualizar a imagem
      }
    } else {
      // Exibir mensagem de erro para números inválidos
      alert("Por favor, insira números válidos.");
    }
  });
});
