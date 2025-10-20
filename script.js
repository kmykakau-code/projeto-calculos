document.addEventListener('DOMContentLoaded', () => {
  const grupoRadios = document.getElementsByName('grupo');
  const idadeLabel = document.getElementById('idadeLabel');
  const idadeInput = document.getElementById('idade');

  const sexoSelect = document.getElementById('sexo');
  const atividadeGroup = document.getElementById('atividadeGroup');
  const atividadeSelect = document.getElementById('atividade');

  const condicaoFieldset = document.getElementById('condicaoFieldset');
  const condicaoRadios = document.getElementsByName('condicao');
  const gestanteCampos = document.getElementById('gestanteCampos');
  const lactanteCampos = document.getElementById('lactanteCampos');

  const calcularBtn = document.getElementById('calcularBtn');
  const resultado = document.getElementById('resultado');

  // Atualiza rótulo idade + visibilidade dos campos
  function atualizarInterfacePorGrupo() {
    const grupoSelecionado = document.querySelector('input[name="grupo"]:checked').value;
    if (grupoSelecionado === 'bebe') {
      idadeLabel.textContent = 'Idade (meses):';
      idadeInput.placeholder = 'Ex: 12';
      atividadeGroup.style.display = 'none';
      atividadeSelect.disabled = true;
      condicaoFieldset.style.display = 'none'; // oculta condição especial para bebês
    } else {
      idadeLabel.textContent = 'Idade (anos):';
      idadeInput.placeholder = 'Ex: 10';
      atividadeGroup.style.display = 'block';
      atividadeSelect.disabled = false;
      atualizarVisibilidadeCondicaoPorSexo(); // revalida exibição de gestante/lactante
    }
  }

  grupoRadios.forEach(radio => radio.addEventListener('change', atualizarInterfacePorGrupo));

  // Exibe subcampos gestante/lactante
  function atualizarCamposCondicao() {
    const selecionado = document.querySelector('input[name="condicao"]:checked').value;
    gestanteCampos.style.display = (selecionado === 'gestante') ? 'block' : 'none';
    lactanteCampos.style.display = (selecionado === 'lactante') ? 'block' : 'none';
  }
  condicaoRadios.forEach(radio => radio.addEventListener('change', atualizarCamposCondicao));

  // Mostra/oculta fieldset da condição especial conforme sexo
  function atualizarVisibilidadeCondicaoPorSexo() {
    const sexo = sexoSelect.value;
    const grupoSelecionado = document.querySelector('input[name="grupo"]:checked').value;
    if (grupoSelecionado !== 'bebe' && sexo === 'feminino') {
      condicaoFieldset.style.display = 'block';
    } else {
      condicaoFieldset.style.display = 'none';
      const radioNenhum = Array.from(condicaoRadios).find(r => r.value === 'nenhum');
      if (radioNenhum) radioNenhum.checked = true;
      gestanteCampos.style.display = 'none';
      lactanteCampos.style.display = 'none';
    }
  }

  sexoSelect.addEventListener('change', atualizarVisibilidadeCondicaoPorSexo);

  // Inicializa
  atualizarInterfacePorGrupo();
  atualizarCamposCondicao();
  atualizarVisibilidadeCondicaoPorSexo();

  // Botão calcular
  calcularBtn.addEventListener('click', () => {
    const sexo = sexoSelect.value;
    const grupo = document.querySelector('input[name="grupo"]:checked').value;
    const idade = parseFloat(idadeInput.value);
    const estatura = parseFloat(document.getElementById('estatura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const atividade = atividadeSelect.value;
    const condicao = document.querySelector('input[name="condicao"]:checked')?.value || 'nenhum';

    if (!sexo || isNaN(idade) || isNaN(estatura) || isNaN(peso)) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    if (grupo !== 'bebe' && !atividade) {
      alert("Selecione o nível de atividade.");
      return;
    }

    let eer = 0;
    let categoria = '';

    if (grupo === 'bebe') {
      eer = calcBebes(idade, estatura, peso, sexo);
      categoria = 'Bebê';
    } else {
      if (sexo === 'feminino' && condicao === 'gestante') {
        const pesoPreGest = parseFloat(document.getElementById('pesoPreGest').value) || null;
        const semanasGest = parseFloat(document.getElementById('semanasGest').value) || null;
        eer = calcGestantes(idade, estatura, pesoPreGest, semanasGest, atividade);
        categoria = 'Gestante';
      } else if (sexo === 'feminino' && condicao === 'lactante') {
        const posParto = parseFloat(document.getElementById('posParto').value) || null;
        eer = calcLactantes(idade, estatura, peso, posParto, atividade);
        categoria = 'Lactante';
      } else if (idade < 19) {
        eer = calcCriancasAdolescentes(idade, estatura, peso, atividade, sexo);
        categoria = 'Criança/Adolescente';
      } else {
        eer = calcAdultos(idade, estatura, peso, atividade, sexo);
        categoria = 'Adulto';
      }
    }

    let html = `
      <h2>Resultado</h2>
      <p><strong>Categoria:</strong> ${categoria}</p>
      <p><strong>Sexo:</strong> ${sexo.charAt(0).toUpperCase() + sexo.slice(1)}</p>
      <p><strong>EER estimado:</strong> ${eer.toFixed(2)} kcal/dia</p>
    `;

    // Exibe variações para adultos
    if (categoria === 'Adulto') {
      const difBase = (sexo === 'masculino') ? 342 : 241;
      const emagLeve = eer - difBase;
      const emagMod = eer - difBase * 2;
      const ganhoLeve = eer + difBase;
      const ganhoMod = eer + difBase * 2;

      html += `
        <div class="extra-results">
          <h3>Variações sugeridas</h3>
          <ul>
            <li>🔵 Emagrecimento leve (−${difBase} kcal): <strong>${emagLeve.toFixed(2)} kcal</strong></li>
            <li>🔵 Emagrecimento moderado (−${difBase * 2} kcal): <strong>${emagMod.toFixed(2)} kcal</strong></li>
            <li>🟢 Ganho leve (+${difBase} kcal): <strong>${ganhoLeve.toFixed(2)} kcal</strong></li>
            <li>🟢 Ganho moderado (+${difBase * 2} kcal): <strong>${ganhoMod.toFixed(2)} kcal</strong></li>
          </ul>
        </div>
      `;
    }

    resultado.innerHTML = html;
  });
});

/* ======= PLACEHOLDERS DOS CÁLCULOS ======= */
function calcBebes(idadeMeses, estatura, peso, sexo) { 
    eer = 0;

    if (sexo === 'masculino') {
        eer = -716.45 - (1 * idadeMeses) + (17.82 * estatura) + (15.06 * peso)

        if(idadeMeses < 3) {
            eer += 200
        } else if (idadeMeses < 6){
            eer += 50
        }else {
            eer += 20
        }

    } else {
        eer = -69.15 + (80 * idadeMeses) + (2.65 * estatura) + (54.15 * peso)

        if(idadeMeses < 3) {
            eer += 180
        } else if (idadeMeses < 6){
            eer += 60
        }else if (idadeMeses < 12){
            eer += 20
        }else {
            eer += 15
        }
    }

    return eer; 
}

function calcCriancasAdolescentes(idade, estatura, peso, atividade, sexo) {
    eer = 0;
    
    if (sexo === 'masculino'){
        if (atividade === 'inativo'){
            eer = -447.51 + (3.68 * idade) + (13.01 * estatura) + (13.15 * peso);
        } else if (atividade === 'pouco_ativo'){
            eer = 19.12 + (3.68 * idade) + (8.62 * estatura) + (20.28 * peso);
        } else if (atividade === 'ativo'){
            eer = -388.18 + (3.68 * idade) + (12.66 * estatura) + (20.46 * peso);
        } else if(atividade === 'muito_ativo'){
            eer = -671.75 + (3.68 * idade) + (15.38 * estatura) + (23.25 * peso);
        }
    }else {
        if (atividade === 'inativo'){
            eer = 55.59 - (22.25 * idade) + (8.43 * estatura) + (17.07 * peso);
        } else if (atividade === 'pouco_ativo'){
            eer = -297.54 - (22.25 * idade) + (12.77 * estatura) + (14.73 * peso);
        } else if (atividade === 'ativo'){
            eer = -189.55 - (22.25 * idade) + (11.74 * estatura) + (18.34 * peso);
        } else if(atividade === 'muito_ativo'){
            eer = -709.59 - (22.25 * idade) + (18.22 * estatura) + (14.25 * peso);
        }
    }

    if (idade == 3){
        eer += 20;
    } else if (idade >= 4 && idade <= 8){
        eer += 15;
    } else if (idade >= 9 && idade <= 13){
        eer += 25;
    } else if(idade >= 14 && idade < 18.99 ){
        eer += 20; 
    }else{
        eer += 0;
    }

    return eer;
 }

function calcAdultos(idade, estatura, peso, atividade, sexo) { 
    eer = 0;

    if(sexo === 'masculino'){
        if(atividade === 'inativo'){
            eer = 757.07 - (10.83 * idade) + (6.5 * estatura) + (14.1 * peso);
        } else if(atividade === 'pouco_ativo'){
            eer = 581.47 - (10.83 * idade) + (8.3 * estatura) + (14.94 * peso);
        } else if(atividade === 'ativo'){
            eer = 1004.82 - (10.83 * idade) + (6.52 * estatura) + (15.91 * peso);
        }
        else if(atividade === 'muito_ativo'){
            eer = -517.88 - (10.83 * idade) + (15.61 * estatura) + (19.11 * peso);
        }
    }else{
        if(atividade === 'inativo'){
            eer = 584.9 - (7.01 * idade) + (5.72 * estatura) + (11.71 * peso);
        } else if(atividade === 'pouco_ativo'){
            eer = 575.77 - (7.01 * idade) + (6.6 * estatura) + (12.14 * peso);
        } else if(atividade === 'ativo'){
            eer = 710.25 - (7.01 * idade) + (6.54 * estatura) + (12.34 * peso);
        }
        else if(atividade === 'muito_ativo'){
            eer = 511.83 - (7.01 * idade) + (9.07 * estatura) + (12.56 * peso);
        }
    }

    return eer; }

function calcGestantes(idade, estatura, pesoPreGest, semanasGest, atividade) { 
    eer = 0;

    console.log("estatura ", estatura);
    console.log("pesopre ", pesoPreGest);

    if(atividade === 'inativo'){
        eer = 1131.2 - (2.04 * idade) + (0.34 * estatura) + (12.15 * pesoPreGest) + (9.16 * semanasGest);
    } else if(atividade === 'pouco_ativo'){
        eer = 693.35 - (2.04 * idade) + (5.73 * estatura) + (10.2 * pesoPreGest) + (9.16 * semanasGest);
    } else if(atividade === 'ativo'){
        eer = -223.84 - (2.04 * idade) + (13.23 * estatura) + (8.15 * pesoPreGest) + (9.16 * semanasGest);
    }
    else if(atividade === 'muito_ativo'){
        eer = -779.72 - (2.04 * idade) + (18.45 * estatura) + (8.73 * pesoPreGest) + (9.16 * semanasGest);
    }
    
    console.log("Antes do IMC ",eer);
    imc = 0;
    imc = pesoPreGest / ((estatura / 100)^2);

    console.log("IMC ", imc);

    if(imc < 18.5){
        eer += 300;
    }else if(imc < 25){
        eer += 200;
    }else if(imc < 30){
        eer += 150;
    }else {
        eer += -50;
    }

    console.log("depois do IMC ",eer);

    return eer;
 }

function calcLactantes(idade, estatura, peso, posParto, atividade) { 
    eer = 0;

    if(idade > 19){
            if(atividade === 'inativo'){
                eer = 584.9 - (7.01 * idade) + (5.72 * estatura) + (11.71 * peso);
            }
            else if(atividade === 'pouco_ativo'){
                eer = 575.77 - (7.01 * idade) + (6.6 * estatura) + (12.14 * peso);
            }
            else if(atividade === 'ativo'){
                eer = 710.25 - (7.01 * idade) + (6.54 * estatura) + (12.34 * peso);
            }
            else if(atividade === 'muito_ativo'){
                eer = 511.83 - (7.01 * idade) + (9.07 * estatura) + (12.56 * peso);
            }            
    }else{
            if(atividade === 'inativo'){
                eer = 55.59 - (22.25 * idade) + (8.43 * estatura) + (17.07 * peso);
            }
            else if(atividade === 'pouco_ativo'){
                eer = -297.54 - (22.25 * idade) + (12.77 * estatura) + (14.73 * peso);
            }
            else if(atividade === 'ativo'){
                eer = -189.55 - (22.25 * idade) + (11.74 * estatura) + (18.34 * peso);
            }
            else if(atividade === 'muito_ativo'){
                eer = -709.59 - (22.25 * idade) + (18.22 * estatura) + (14.25 * peso);
            }
    }

    if(posParto >= 6){
        eer += 380;
    }
    else{
        eer += 400;
    }

    return eer;
}
