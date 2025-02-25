function sortearNumero() {
  const dado = document.getElementById('dado');

  // Inicia a animação
  dado.classList.add('girar');

  // Gera um número aleatório entre 1 e 6 após 2 segundos
  setTimeout(() => {
      const numeroSorteado = Math.floor(Math.random() * 6) + 1;
      dado.textContent = numeroSorteado;

      // Para a animação
      dado.classList.remove('girar');
  }, 1500); // 1000ms = 1s velocidade da rotação
}