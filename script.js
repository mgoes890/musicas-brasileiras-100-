const musicas = [
  "Aquarela do Brasil – Ary Barroso",
  "Chega de Saudade – João Gilberto",
  "Asa Branca – Luiz Gonzaga",
  "Construção – Chico Buarque",
  "Garota de Ipanema – Tom Jobim & Vinícius de Moraes"
  // Adicione mais músicas aqui
];

const lista = document.getElementById("lista-musicas");

musicas.forEach(musica => {
  const item = document.createElement("li");
  item.textContent = musica;
  lista.appendChild(item);
});
