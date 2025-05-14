// Inicializa um array para armazenar os nomes
const nomes = [];

// Coleta de dados com while (true)
while (true) {
  const entrada = prompt("Digite um nome (ou digite 'sair' para encerrar):");

  if (entrada === null) {
    alert("Entrada cancelada.");
    break;
  }

  if (entrada.toLowerCase() === "sair") {
    break;
  }

  if (entrada.trim() === "") {
    alert("Por favor, insira um nome válido.");
    continue;
  }

  nomes.push(entrada.trim());
}

// Processamento com for (exibir nomes com índices no console)
console.log("=== Lista de nomes com índices ===");
for (let i = 0; i < nomes.length; i++) {
  console.log(`${i + 1}: ${nomes[i]}`);
}

// Exibição com for...of (alert personalizado)
for (const nome of nomes) {
  alert(`Bem-vindo(a), ${nome}!`);
}
