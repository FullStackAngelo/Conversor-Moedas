console.log('esse é meu projeto, obrigado pela atenção')

const inputValor = document.getElementById('valor');

inputValor.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    value = (Number(value) / 100).toFixed(2) + '';
    value = value.replace('.', ',');
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    e.target.value = value;
});

const resultado = document.querySelector('.resultado');
resultado.classList.remove('resultado');

const botao = document.getElementById('btn-converter');

botao.addEventListener('click', function () {
    let valor = document.getElementById('valor').value;
    valor = valor.replace(/\./g, '').replace(',', '.'); // Remove pontos e troca vírgula por ponto
    valor = parseFloat(valor); // Converte para número
    

    const moeda = document.getElementById('moeda').value;

    
    let valorMoedaEstrangeira = 0;
    if (moeda == 'USD') {
        valorMoedaEstrangeira = 5.25;
    } else if (moeda == 'EUR') {
        valorMoedaEstrangeira = 5.50;
    } else if (moeda == 'GBP') {
        valorMoedaEstrangeira = 6.20;
    } else if (moeda == 'ARS') {
        valorMoedaEstrangeira = 0.02;
    } else if (moeda == 'CAD') {
        valorMoedaEstrangeira = 3.80;
    } else if (moeda == 'AUD') {
        valorMoedaEstrangeira = 3.50;
    } else if (moeda == 'JPY') {
        valorMoedaEstrangeira = 0.035;
    } else if (moeda == 'CNY') {
        valorMoedaEstrangeira = 0.72;
    } else {
        valorMoedaEstrangeira = 1;
    }
    let conversao = valor * valorMoedaEstrangeira;

    const conversaoformatada = conversao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    resultado.classList.add('resultado');

    if (isNaN(conversao) || conversao == 0) {
    document.getElementById('resultadoconversao').innerHTML = `<span class="fonte-mono">Digite um valor valído</span>`;
    } else {
        document.getElementById('resultadoconversao').innerHTML = `<span class="fonte-mono">${conversaoformatada}</span>`
    }

   
});

