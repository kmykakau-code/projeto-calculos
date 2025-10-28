document.addEventListener('DOMContentLoaded', () => {
  const idadeInput = document.getElementById('idade');

  const calcularBtn = document.getElementById('calcularBtn');
  const resultado = document.getElementById('resultado');

  // Botão calcular
  calcularBtn.addEventListener('click', () => {
    const idade = parseFloat(idadeInput.value);
    const estatura = parseFloat(document.getElementById('estatura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    
    if (isNaN(idade) || isNaN(estatura) || isNaN(peso)) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    let imc = 0;
    imc = peso / (estatura * estatura);

    let html = `
      <h2>Resultado</h2>
      <p><strong>IMC:</strong> ${imc.toFixed(2)} kg/m² </p>
    `;

    if (idade >= 60) {
        if (imc <= 23) {
        html += `
            <div class="classificacaoIMC">
            <p> <strong> Classificação: </strong> Baixo peso </p>
            </div>
            `;
    }else if (imc <= 27.9){
        html += `
        <div class="classificacaoIMC">
            <p> <strong> Classificação: </strong> Eutrofia </p>
        </div>
      `;
    }else if (imc <= 29.9){
        html += `
        <div class="classificacaoIMC">
            <p> <strong> Classificação: </strong> Sobrepeso </p>
        </div>
      `;
    }else {
        html += `
        <div class="classificacaoIMC">
            <p> <strong> Classificação: </strong> Obesidde </p>
        </div>
        `;
    }

    } else {
      if (imc < 18.5) {
      html += `
        <div class="classificacaoIMC">
            <p> <strong> Classificação: </strong> Baixo peso </p>
        </div>
      `;
        }
        else if (imc < 24.99){
      html += `
        <div class="classificacaoIMC">
            <p> <strong> Classificação: </strong> Eutrofia </p>
        </div>
        `;
      }else if (imc < 29.99){
      html += `
        <div class="classificacaoIMC">
            <p> <strong> Classificação: </strong> Sobrepeso </p>
        </div>
        `;
       }else if (imc < 34.99){
      html += `
        <div class="classificacaoIMC">
            <p> <strong> Classificação: </strong> Obsidade grau I </p>
        </div>
        `;
        }else if (imc < 39.99){
      html += `
        <div class="classificacaoIMC">
            <p> <strong> Classificação: </strong> Obsidade grau II </p>
        </div>
        `;}

      else {
        html += `
        <div class="classificacaoIMC">
            <p> <strong> Classificação: </strong> Obsidade grau III </p>
        </div>
        `;
      }
    }


    resultado.innerHTML = html;
  });
});