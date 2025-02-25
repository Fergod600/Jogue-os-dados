function sortearNumero() {
  const dado = document.getElementById('dado');
  const conteudoDado = document.getElementById('conteudo-dado');

  // Inicia a animação
  dado.classList.add('girar');

  // Gera um número aleatório entre 1 e 6 após 2 segundos
  setTimeout(() => {
      const numeroSorteado = Math.floor(Math.random() * 6) + 1;
      conteudoDado.textContent = numeroSorteado; // Mostra o número sorteado

      // Para a animação
      dado.classList.remove('girar');
  }, 2000); // 2000ms = 2s
}