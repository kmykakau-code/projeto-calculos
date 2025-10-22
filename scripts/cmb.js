document.addEventListener('DOMContentLoaded', () => {

  // 🔹 JSON interno com dados simplificados
  const data = {
    "feminino": [
  {"idade_min": "1.0","idade_max": "1.9","P5": "10,5","P10": "11,1","P25": "11,7","P50": "12,4","P75": "13,2","P90": "13,9","P95": "14,3"},
  {"idade_min": "2.0","idade_max": "1.1","P5": "11,1","P10": "11,4","P25": "11,9","P50": "12,6","P75": "13,3","P90": "14,2","P95": "14,7"},
  {"idade_min": "3.0","idade_max": "2.1","P5": "11,3","P10": "11,9","P25": "12,4","P50": "13,2","P75": "14,0","P90": "14,6","P95": "15,2"},
  {"idade_min": "4.0","idade_max": "3.1","P5": "11,5","P10": "12,1","P25": "12,8","P50": "13,6","P75": "14,4","P90": "15,2","P95": "15,7"},
  {"idade_min": "5.0","idade_max": "4.1","P5": "12,5","P10": "12,8","P25": "13,4","P50": "14,2","P75": "15,1","P90": "15,9","P95": "16,5"},
  {"idade_min": "6.0","idade_max": "5.1","P5": "13,0","P10": "13,3","P25": "13,8","P50": "14,5","P75": "15,4","P90": "16,6","P95": "17,1"},
  {"idade_min": "7.0","idade_max": "6.1","P5": "12,9","P10": "13,5","P25": "14,2","P50": "15,1","P75": "16,0","P90": "17,1","P95": "17,6"},
  {"idade_min": "8.0","idade_max": "7.1.","P5": "13,8","P10": "14,0","P25": "15,1","P50": "16,0","P75": "17,1","P90": "18,3","P95": "19,4"},
  {"idade_min": "9.0","idade_max": "8.1","P5": "14,7","P10": "15,0","P25": "15,8","P50": "16,7","P75": "18,0","P90": "19,4","P95": "19,8"},
  {"idade_min": "10.0","idade_max": "10.9","P5": "14,8","P10": "15,0","P25": "15,9","P50": "17,0","P75": "18,0","P90": "19,0","P95": "19,7"},
  {"idade_min": "11.0","idade_max": "11.9","P5": "15,0","P10": "15,8","P25": "17,1","P50": "18,1","P75": "19,6","P90": "21,7","P95": "22,3"},
  {"idade_min": "12.0","idade_max": "12.9","P5": "16,2","P10": "16,6","P25": "18,0","P50": "19,1","P75": "20,1","P90": "21,4","P95": "22,0"},
  {"idade_min": "13.0","idade_max": "13.9","P5": "16,9","P10": "17,5","P25": "18,3","P50": "19,8","P75": "21,1","P90": "22,6","P95": "24,0"},
  {"idade_min": "14.0","idade_max": "14.9","P5": "17,4","P10": "17,9","P25": "19,0","P50": "20,1","P75": "21,6","P90": "23,2","P95": "24,7"},
  {"idade_min": "15.0","idade_max": "15.9","P5": "17,5","P10": "17,8","P25": "18,9","P50": "20,2","P75": "21,5","P90": "22,8","P95": "24,4"},
  {"idade_min": "16.0","idade_max": "16.9","P5": "17,0","P10": "18,0","P25": "19,0","P50": "20,2","P75": "21,6","P90": "23,4","P95": "24,9"},
  {"idade_min": "17.0","idade_max": "17.9","P5": "17,5","P10": "18,3","P25": "19,4","P50": "20,5","P75": "22,1","P90": "23,9","P95": "25,7"},
  {"idade_min": "18.0","idade_max": "18.9","P5": "17,4","P10": "17,9","P25": "19,1","P50": "20,2","P75": "21,5","P90": "23,7","P95": "24,5"},
  {"idade_min": "19.0","idade_max": "24.9","P5": "17,9","P10": "18,5","P25": "19,5","P50": "20,7","P75": "22,1","P90": "23,6","P95": "24,9"},
  {"idade_min": "25.0","idade_max": "29.9","P5": "18,3","P10": "18,8","P25": "19,9","P50": "21,2","P75": "22,8","P90": "24,6","P95": "26,4"},
  {"idade_min": "35.0","idade_max": "39.9","P5": "18,6","P10": "19,2","P25": "20,5","P50": "21,8","P75": "23,6","P90": "25,7","P95": "27,2"},
  {"idade_min": "45.0","idade_max": "49.9","P5": "18,7","P10": "19,3","P25": "20,6","P50": "22,0","P75": "23,8","P90": "26,0","P95": "27,4"},
  {"idade_min": "55.0","idade_max": "59.9","P5": "18,7","P10": "19,6","P25": "20,9","P50": "22,5","P75": "24,4","P90": "26,6","P95": "28,0"},
  {"idade_min": "65.0","idade_max": "69.9","P5": "18,5","P10": "19,5","P25": "20,8","P50": "22,5","P75": "24,4","P90": "26,4","P95": "27,9"}
],
    "masculino": [
  {"idade_min": "1.0","idade_max": "1.9","P5": "11.0","P10": "11.3","P25": "11.9","P50": "12.7","P75": "13.5","P90": "14.4","P95": "14.7"},
  {"idade_min": "2.0","idade_max": "1.1","P5": "11.1","P10": "11.4","P25": "12.2","P50": "13.0","P75": "14.0","P90": "14.6","P95": "15.0"},
  {"idade_min": "3.0","idade_max": "2.1","P5": "11.7","P10": "12.3","P25": "13.1","P50": "13.7","P75": "14.3","P90": "14.8","P95": "15.3"},
  {"idade_min": "4.0","idade_max": "3.1","P5": "12.3","P10": "12.6","P25": "13.3","P50": "14.1","P75": "14.8","P90": "15.6","P95": "15.9"},
  {"idade_min": "5.0","idade_max": "4.1","P5": "12.7","P10": "13.3","P25": "14.0","P50": "14.7","P75": "15.4","P90": "16.2","P95": "16.9"},
  {"idade_min": "6.0","idade_max": "5.1","P5": "13.1","P10": "13.5","P25": "14.2","P50": "15.1","P75": "16.1","P90": "17.0","P95": "17.7"},
  {"idade_min": "7.0","idade_max": "6.1","P5": "13.7","P10": "13.9","P25": "15.1","P50": "16.0","P75": "16.8","P90": "17.7","P95": "19.0"},
  {"idade_min": "8.0","idade_max": "7.1.","P5": "14.0","P10": "14.5","P25": "15.4","P50": "16.2","P75": "17.0","P90": "18.2","P95": "18.7"},
  {"idade_min": "9.0","idade_max": "8.1","P5": "15.1","P10": "15.4","P25": "16.1","P50": "17.0","P75": "18.3","P90": "19.6","P95": "20.2"},
  {"idade_min": "10.0","idade_max": "10.9","P5": "15.6","P10": "16.0","P25": "16.6","P50": "18.0","P75": "19.1","P90": "20.9","P95": "22.1"},
  {"idade_min": "11.0","idade_max": "11.9","P5": "15.9","P10": "16.5","P25": "17.3","P50": "18.3","P75": "19.5","P90": "20.5","P95": "23.0"},
  {"idade_min": "12.0","idade_max": "12.9","P5": "16.7","P10": "17.1","P25": "18.2","P50": "19.5","P75": "21.0","P90": "22.3","P95": "24.1"},
  {"idade_min": "13.0","idade_max": "13.9","P5": "17.2","P10": "17.9","P25": "19.6","P50": "21.1","P75": "22.6","P90": "23.8","P95": "24.5"},
  {"idade_min": "14.0","idade_max": "14.9","P5": "18.9","P10": "19.9","P25": "21.2","P50": "22.3","P75": "24.0","P90": "26.0","P95": "26.4"},
  {"idade_min": "15.0","idade_max": "15.9","P5": "19.9","P10": "20.4","P25": "21.8","P50": "23.7","P75": "25.4","P90": "26.6","P95": "27.2"},
  {"idade_min": "16.0","idade_max": "16.9","P5": "21.3","P10": "22.5","P25": "23.4","P50": "24.9","P75": "26.9","P90": "28.7","P95": "29.6"},
  {"idade_min": "17.0","idade_max": "17.9","P5": "22.4","P10": "23.1","P25": "24.5","P50": "25.8","P75": "27.3","P90": "29.4","P95": "31.2"},
  {"idade_min": "18.0","idade_max": "18.9","P5": "22.6","P10": "23.7","P25": "25.2","P50": "26.4","P75": "28.3","P90": "29.8","P95": "32.4"},
  {"idade_min": "19.0","idade_max": "24.9","P5": "23.8","P10": "24.5","P25": "25.7","P50": "27.3","P75": "28.9","P90": "30.9","P95": "32.1"},
  {"idade_min": "25.0","idade_max": "29.9","P5": "24.3","P10": "25.0","P25": "26.4","P50": "27.9","P75": "29.8","P90": "31.4","P95": "32.6"},
  {"idade_min": "35.0","idade_max": "39.9","P5": "24.7","P10": "25.5","P25": "26.9","P50": "28.6","P75": "30.2","P90": "31.8","P95": "32.7"},
  {"idade_min": "45.0","idade_max": "49.9","P5": "23.9","P10": "24.9","P25": "26.5","P50": "28.1","P75": "30.0","P90": "31.5","P95": "32.6"},
  {"idade_min": "55.0","idade_max": "59.9","P5": "23.6","P10": "24.5","P25": "26.0","P50": "27.8","P75": "29.5","P90": "31.0","P95": "32.0"},
  {"idade_min": "65.0","idade_max": "69.9","P5": "22.3","P10": "23.5","P25": "25.1","P50": "26.8","P75": "28.4","P90": "29.8","P95": "30.6"}
]
};

  const calcularBtn = document.getElementById('calcularBtn');
  const resultado = document.getElementById('resultado');

  calcularBtn.addEventListener('click', () => {
    const sexo = document.getElementById('sexo').value;
    const idade = parseFloat(document.getElementById('idade').value);
    const cmb = parseFloat(document.getElementById('cmb').value);

    if (!sexo || isNaN(idade) || isNaN(cmb)) {
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

    const menor = percentis.find(p => cmb <= p.valor);
    const anterior = percentis[percentis.indexOf(menor) - 1];

    if (!menor) {
      msg = `Acima do ${percentis.at(-1).nome} (${percentis.at(-1).valor} cm)`;
      percentilFinal = 100;
    } else if (!anterior) {
      msg = `Abaixo do ${percentis[0].nome} (${percentis[0].valor} cm)`;
      percentilFinal = 0;
    } else if (cmb === menor.valor) {
      msg = `Igual ao ${menor.nome} (${menor.valor} cm)`;
      percentilFinal = menor.numero;
    } else {
      msg = `Entre ${anterior.nome} (${anterior.valor} cm) e ${menor.nome} (${menor.valor} cm)`;
      // 🔹 Interpola percentil intermediário (aproximado)
      const proporcao = (cmb - anterior.valor) / (menor.valor - anterior.valor);
      percentilFinal = anterior.numero + proporcao * (menor.numero - anterior.numero);
    }

    // 🔹 Determina o estado de gordura
    let estado = "";
    if (percentilFinal <= 5) estado = "Baixa musculatura";
    else if (percentilFinal <= 15) estado = "Abaixo da média";
    else if (percentilFinal <= 85) estado = "Média";
    else if (percentilFinal <= 95) estado = "Acima da média";
    else estado = "Alta musculatura";

    // 🔹 Exibe resultado formatado
    resultado.innerHTML = `
      <h2>Resultado</h2>
      <p><strong>Sexo:</strong> ${sexo.charAt(0).toUpperCase() + sexo.slice(1)}</p>
      <p><strong>Idade:</strong> ${idade} anos</p>
      <p><strong>Circunferência:</strong> ${cmb} cm</p>
      <p><strong>Classificação:</strong> ${msg}</p>
      <p><strong>Estado de gordura:</strong> ${estado}</p>
    `;
  });
}
);
