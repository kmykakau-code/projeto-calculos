document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input, select');
inputs.forEach(i => i.addEventListener('input', calcular));

function classificarIMC(imc, idade) {
  if (idade >= 60) {
    if (imc < 22) return "Baixo peso";
    if (imc <= 27) return "Eutrofia";
    return "Sobrepeso";
  } else {
    if (imc < 18.5) return "Baixo peso";
    if (imc < 25) return "Eutrofia";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade I";
    if (imc < 40) return "Obesidade II";
    return "Obesidade III";
  }
}

function classificarRCQ(rcq, sexo) {
  if (sexo === 'masculino') {
    return rcq > 1 ? "Alto risco" : "Risco normal";
  } else {
    return rcq > 0.85 ? "Alto risco" : "Risco normal";
  }
}

function classificarCintura(cintura, sexo) {
  if (sexo === 'feminino') {
    if (cintura < 80) return {texto: "Faixa ideal", classe: "normal"};
    if (cintura <= 88) return {texto: "Risco aumentado", classe: "moderado"};
    return {texto: "Risco muito aumentado", classe: "alto"};
  } else {
    if (cintura < 94) return {texto: "Faixa ideal", classe: "normal"};
    if (cintura <= 102) return {texto: "Risco aumentado", classe: "moderado"};
    return {texto: "Risco muito aumentado", classe: "alto"};
  }
}

function calcular() {
  const idade = parseFloat(document.getElementById('idade').value) || 0;
  const sexo = document.getElementById('sexo').value;
  const peso = parseFloat(document.getElementById('peso').value) || 0;
  const altura = parseFloat(document.getElementById('altura').value) || 0;
  const cintura = parseFloat(document.getElementById('cintura').value) || 0;
  const quadril = parseFloat(document.getElementById('quadril').value) || 0;
  const cb = parseFloat(document.getElementById('cb').value) || 0;
  const triceps = parseFloat(document.getElementById('triceps').value) || 0;
  const biceps = parseFloat(document.getElementById('biceps').value) || 0;
  const subescapular = parseFloat(document.getElementById('subescapular').value) || 0;
  const suprailiaca = parseFloat(document.getElementById('suprailiaca').value) || 0;

  if (!peso || !altura) return;

  const imc = peso / (altura ** 2);
  const soma4 = triceps + biceps + subescapular + suprailiaca;
  const rcq = quadril ? cintura / quadril : 0;
  const ic = cintura/100 / (0.109 * Math.sqrt(peso / altura));
  const cmb = cb - (Math.PI * triceps / 10);
  const ambc = ((cb - Math.PI * triceps / 10) ** 2) / (4 * Math.PI) - (sexo === 'masculino' ? 10 : 6.5);
  const dctdcse = triceps + subescapular;
  const agb = ((cb ** 2) / (4 * Math.PI)) - (((cb - Math.PI * triceps / 10) ** 2) / (4 * Math.PI));

  const classIMC = classificarIMC(imc, idade);
  const classRCQ = classificarRCQ(rcq, sexo);
  const classCintura = classificarCintura(cintura, sexo);

  document.getElementById('res').innerHTML = `
    <span><b>IMC:</b> ${imc.toFixed(2)} kg/m² 
      <span class="classificacao">(${classIMC})</span></span>
    <span><b>Soma 4 Dobras:</b> ${soma4.toFixed(1)} mm</span>
    <span><b>Razão Cintura-Quadril:</b> ${rcq.toFixed(2)} 
      <span class="classificacao ${classRCQ.includes('Alto') ? 'alto' : 'normal'}">(${classRCQ})</span></span>
    <span><b>Circunferência da Cintura:</b> ${cintura.toFixed(1)} cm 
      <span class="classificacao ${classCintura.classe}">(${classCintura.texto})</span></span>
    <span><b>Índice de Conicidade:</b> ${ic.toFixed(3)}</span>
    <span><b>Circunf. Muscular do Braço:</b> ${cmb.toFixed(2)} cm</span>
    <span><b>Área Muscular do Braço Corrigida:</b> ${ambc.toFixed(2)} cm²</span>
    <span><b>DCT + DCSE:</b> ${dctdcse.toFixed(1)} mm</span>
    <span><b>AGB:</b> ${agb.toFixed(2)} cm²</span>
  `;
}

});