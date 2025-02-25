function sortearNumero() {
  // Gera um número aleatório entre 1 e 6
  const numeroSorteado = Math.floor(Math.random() * 6) + 1;

  // Atualiza o conteúdo do dado com o número sorteado
  const dado = document.getElementById('dado');
  dado.textContent = numeroSorteado;
}