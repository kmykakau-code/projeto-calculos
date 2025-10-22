document.addEventListener('DOMContentLoaded', () => {

  // 🔹 JSON interno com dados simplificados
  const data = {
    "feminino": [
  {"idade_min": "1.0","idade_max": "1.9","P5": "10.5","P15": "12.0","P75": "19.5","P85": "21.0"},
  {"idade_min": "2.0","idade_max": "1.1","P5": "11.0","P15": "12.5","P75": "19.0","P85": "21.5"},
  {"idade_min": "3.0","idade_max": "2.1","P5": "10.5","P15": "12.0","P75": "18.5","P85": "20.5"},
  {"idade_min": "4.0","idade_max": "3.1","P5": "10.0","P15": "12.0","P75": "18.5","P85": "20.5"},
  {"idade_min": "5.0","idade_max": "4.1","P5": "10.0","P15": "11.5","P75": "18.5","P85": "21.0"},
  {"idade_min": "6.0","idade_max": "5.1","P5": "10.0","P15": "11.0","P75": "18.5","P85": "21.0"},
  {"idade_min": "7.0","idade_max": "6.1","P5": "10.0","P15": "12.0","P75": "20.0","P85": "23.0"},
  {"idade_min": "8.0","idade_max": "7.1.","P5": "10.5","P15": "12.0","P75": "22.5","P85": "28.5"},
  {"idade_min": "9.0","idade_max": "8.1","P5": "11.0","P15": "12.5","P75": "25.5","P85": "30.0"},
  {"idade_min": "10.0","idade_max": "10.9","P5": "12.0","P15": "13.0","P75": "28.5","P85": "34.5"},
  {"idade_min": "11.0","idade_max": "11.9","P5": "12.0","P15": "14.5","P75": "30.0","P85": "37.0"},
  {"idade_min": "12.0","idade_max": "12.9","P5": "13.0","P15": "15.0","P75": "31.0","P85": "37.0"},
  {"idade_min": "13.0","idade_max": "13.9","P5": "12.5","P15": "15.5","P75": "35.5","P85": "43.0"},
  {"idade_min": "14.0","idade_max": "14.9","P5": "14.5","P15": "17.5","P75": "37.0","P85": "44.5"},
  {"idade_min": "15.0","idade_max": "15.9","P5": "15.0","P15": "18.0","P75": "34.5","P85": "42.5"},
  {"idade_min": "16.0","idade_max": "16.9","P5": "17.5","P15": "21.5","P75": "39.5","P85": "47.0"},
  {"idade_min": "17.0","idade_max": "17.9","P5": "16.5","P15": "20.0","P75": "42.0","P85": "49.0"},
  {"idade_min": "18.0","idade_max": "24.9","P5": "16.7","P15": "21.0","P75": "44.0","P85": "52.0"},
  {"idade_min": "25.0","idade_max": "29.9","P5": "17.5","P15": "22.0","P75": "48.5","P85": "58.0"},
  {"idade_min": "30.0","idade_max": "34.9","P5": "18.0","P15": "24.5","P75": "55.0","P85": "64.0"},
  {"idade_min": "35.0","idade_max": "39.9","P5": "19.0","P15": "25.5","P75": "57.5","P85": "66.0"},
  {"idade_min": "40.0","idade_max": "44.9","P5": "20.0","P15": "27.0","P75": "58.0","P85": "67.0"},
  {"idade_min": "45.0","idade_max": "49.9","P5": "21.0","P15": "27.5","P75": "59.5","P85": "69.0"},
  {"idade_min": "50.0","idade_max": "59.4","P5": "21.0","P15": "30.0","P75": "61.0","P85": "70.0"},
  {"idade_min": "55.0","idade_max": "59.9","P5": "21.0","P15": "29.0","P75": "62.0","P85": "69.5"},
  {"idade_min": "60.0","idade_max": "64.9","P5": "22.0","P15": "30.0","P75": "61.0","P85": "68.0"},
  {"idade_min": "65.0","idade_max": "69.9","P5": "21.0","P15": "28.5","P75": "57.0","P85": "64.0"},
  {"idade_min": "70.0","idade_max": "74.9","P5": "19.0","P15": "27.0","P75": "56.0","P85": "62.0"}
] ,
    "masculino": [
  {"idade_min": "1.0","idade_max": "1.9","P5": "11.0","P15": "12.5","P75": "18.0","P85": "21.0"},
  {"idade_min": "2.0","idade_max": "1.1","P5": "10.0","P15": "12.0","P75": "18.0","P85": "20.0"},
  {"idade_min": "3.0","idade_max": "2.1","P5": "10.5","P15": "12.0","P75": "17.5","P85": "19.0"},
  {"idade_min": "4.0","idade_max": "3.1","P5": "9.5","P15": "11.0","P75": "16.5","P85": "18.0"},
  {"idade_min": "5.0","idade_max": "4.1","P5": "9.0","P15": "10.0","P75": "16.0","P85": "18.0"},
  {"idade_min": "6.0","idade_max": "5.1","P5": "8.0","P15": "10.0","P75": "15.2","P85": "18.0"},
  {"idade_min": "7.0","idade_max": "6.1","P5": "8.5","P15": "9.5","P75": "16.0","P85": "19.5"},
  {"idade_min": "8.0","idade_max": "7.1.","P5": "8.5","P15": "10.0","P75": "17.2","P85": "20.0"},
  {"idade_min": "9.0","idade_max": "8.1","P5": "8.5","P15": "10.0","P75": "19.0","P85": "24.0"},
  {"idade_min": "10.0","idade_max": "10.9","P5": "9.0","P15": "11.0","P75": "22.0","P85": "27.0"},
  {"idade_min": "11.0","idade_max": "11.9","P5": "9.0","P15": "11.0","P75": "25.0","P85": "33.0"},
  {"idade_min": "12.0","idade_max": "12.9","P5": "9.0","P15": "11.0","P75": "24.0","P85": "34.0"},
  {"idade_min": "13.0","idade_max": "13.9","P5": "8.5","P15": "11.0","P75": "21.0","P85": "29.0"},
  {"idade_min": "14.0","idade_max": "14.9","P5": "9.0","P15": "11.0","P75": "22.0","P85": "27.0"},
  {"idade_min": "15.0","idade_max": "15.9","P5": "10.0","P15": "11.0","P75": "21.0","P85": "27.0"},
  {"idade_min": "16.0","idade_max": "16.9","P5": "10.0","P15": "12.0","P75": "22.5","P85": "27.5"},
  {"idade_min": "17.0","idade_max": "17.9","P5": "10.0","P15": "12.0","P75": "22.0","P85": "27.0"},
  {"idade_min": "18.0","idade_max": "24.9","P5": "11.0","P15": "13.5","P75": "30.0","P85": "37.0"},
  {"idade_min": "25.0","idade_max": "29.9","P5": "11.5","P15": "14.0","P75": "35.0","P85": "41.0"},
  {"idade_min": "30.0","idade_max": "34.9","P5": "12.0","P15": "16.5","P75": "38.0","P85": "44.0"},
  {"idade_min": "35.0","idade_max": "39.9","P5": "12.0","P15": "16.5","P75": "37.0","P85": "42.4"},
  {"idade_min": "40.0","idade_max": "44.9","P5": "13.0","P15": "16.5","P75": "37.0","P85": "42.5"},
  {"idade_min": "45.0","idade_max": "49.9","P5": "12.5","P15": "17.5","P75": "39.0","P85": "44.0"},
  {"idade_min": "50.0","idade_max": "59.4","P5": "13.0","P15": "17.0","P75": "37.5","P85": "43.0"},
  {"idade_min": "55.0","idade_max": "59.9","P5": "12.0","P15": "17.0","P75": "37.0","P85": "43.0"},
  {"idade_min": "60.0","idade_max": "64.9","P5": "13.0","P15": "17.5","P75": "37.5","P85": "43.0"},
  {"idade_min": "65.0","idade_max": "69.9","P5": "11.0","P15": "16.0","P75": "36.0","P85": "42.0"},
  {"idade_min": "70.0","idade_max": "74.9","P5": "11.5","P15": "16.0","P75": "35.0","P85": "41.0"}
]
};

  const calcularBtn = document.getElementById('calcularBtn');
  const resultado = document.getElementById('resultado');

  calcularBtn.addEventListener('click', () => {
    const sexo = document.getElementById('sexo').value;
    const idade = parseFloat(document.getElementById('idade').value);
    const somadct = parseFloat(document.getElementById('somadct').value);

    if (!sexo || isNaN(idade) || isNaN(somadct)) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const tabela = data[sexo];
    if (!tabela) {
      resultado.innerHTML = "<p>Sexo inválido.</p>";
      return;
    }

    // 🔹 Localiza faixa etária correspondente
    const linha = tabela.find(l => idade >= l.idade_min && idade <= l.idade_max);
    if (!linha) {
      resultado.innerHTML = "<p>Idade fora da faixa disponível na tabela.</p>";
      return;
    }

    // 🔹 Extrai os percentis
    const percentis = Object.entries(linha)
      .filter(([k]) => k.startsWith("P"))
      .map(([k, v]) => ({ nome: k, valor: v, numero: parseFloat(k.replace("P", "")) }));

    let msg = "";
    let percentilFinal = 0;

    const menor = percentis.find(p => somadct <= p.valor);
    const anterior = percentis[percentis.indexOf(menor) - 1];

    if (!menor) {
      msg = `Acima do ${percentis.at(-1).nome} (${percentis.at(-1).valor} cm)`;
      percentilFinal = 100;
    } else if (!anterior) {
      msg = `Abaixo do ${percentis[0].nome} (${percentis[0].valor} cm)`;
      percentilFinal = 0;
    } else if (somadct === menor.valor) {
      msg = `Igual ao ${menor.nome} (${menor.valor} cm)`;
      percentilFinal = menor.numero;
    } else {
      msg = `Entre ${anterior.nome} (${anterior.valor} cm) e ${menor.nome} (${menor.valor} cm)`;
      // 🔹 Interpola percentil intermediário (aproximado)
      const proporcao = (somadct - anterior.valor) / (menor.valor - anterior.valor);
      percentilFinal = anterior.numero + proporcao * (menor.numero - anterior.numero);
    }

    // 🔹 Determina o estado de gordura
    let estado = "";
    if (percentilFinal <= 5) estado = "Magro";
    else if (percentilFinal <= 15) estado = "Abaixo da média";
    else if (percentilFinal <= 75) estado = "Eutrofia";
    else if (percentilFinal <= 85) estado = "Acima da média";
    else estado = "Gordura excessiva";

    // 🔹 Exibe resultado formatado
    resultado.innerHTML = `
      <h2>Resultado</h2>
      <p><strong>Sexo:</strong> ${sexo.charAt(0).toUpperCase() + sexo.slice(1)}</p>
      <p><strong>Idade:</strong> ${idade} anos</p>
      <p><strong>Circunferência:</strong> ${somadct} cm</p>
      <p><strong>Classificação:</strong> ${msg}</p>
      <p><strong>Estado de gordura:</strong> ${estado}</p>
    `;
  });
}
);
