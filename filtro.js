/*function filtrar() {
    const especieFiltro = document.getElementById('especieFiltro').value.toLowerCase();
    const plaquetaFiltro = document.getElementById('plaquetaFiltro').value.toLowerCase();
    const localizacaoFiltro = document.getElementById('localizacaoFiltro').value.toLowerCase();
    const responsavelFiltro = document.getElementById('responsavelFiltro').value.toLowerCase();
    const conservacaoFiltro = document.getElementById('conservacaoFiltro').value;

    const linhas = document.querySelectorAll('#tabela tr');

    linhas.forEach(linha => {
        const especie = linha.cells[0].textContent.toLowerCase();
        const plaqueta = linha.cells[1].textContent.toLowerCase();
        const localizacao = linha.cells[4].textContent.toLowerCase();
        const responsavel = linha.cells[5].textContent.toLowerCase();
        const conservacao = linha.cells[6].textContent;

        const atendeFiltro =
            (especie.includes(especieFiltro) || especieFiltro === '') &&
            (plaqueta.includes(plaquetaFiltro) || plaquetaFiltro === '') &&
            (localizacao.includes(localizacaoFiltro) || localizacaoFiltro === '') &&
            (responsavel.includes(responsavelFiltro) || responsavelFiltro === '') &&
            (conservacao.includes(conservacaoFiltro) || conservacaoFiltro === 'todos');

        linha.style.display = atendeFiltro ? '' : 'none';
    });
}*/
function filtrar() {
    // Obter os valores dos campos de filtro
    const especieValor = document.getElementById('especieFiltro').value.toLowerCase();
    const plaquetaValor = document.getElementById('plaquetaFiltro').value.toLowerCase();
    const qrcodeValor = document.getElementById('qrcodeFiltro'). value.toLowerCase();
    const localizacaoValor = document.getElementById('localizacaoFiltro').value.toLowerCase();
    const responsavelValor = document.getElementById('responsavelFiltro').value.toLowerCase();
    
    const linhas = document.querySelectorAll('#tabela tr'); // Seleciona todas as linhas da tabela

    linhas.forEach(linha => {
        // Obter os valores de cada célula da linha
        const especieTexto = linha.cells[0].textContent.toLowerCase();
        const plaquetaTexto = linha.cells[1].textContent.toLowerCase();
        const localizacaoTexto = linha.cells[3].textContent.toLowerCase();
        const responsavelTexto = linha.cells[4].textContent.toLowerCase();
        const qrcodeTexto = linha.cells [2].textContent.toLowerCase();

        // Verificar se a linha corresponde a todos os filtros preenchidos
        const correspondeEsp = especieValor === '' || especieTexto.includes(especieValor);
        const correspondePla = plaquetaValor === '' || plaquetaTexto.includes(plaquetaValor);
        const correspondeLoc = localizacaoValor === '' || localizacaoTexto.includes(localizacaoValor);
        const correspondeResp = responsavelValor === '' || responsavelTexto.includes(responsavelValor);
        const correspondeQrcode = qrcodeValor === '' || qrcodeTexto.includes(qrcodeValor);
        // Mostrar ou esconder a linha com base nos filtros
        if (correspondeEsp && correspondePla && correspondeLoc && correspondeResp && correspondeQrcode) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none'; // Esconder a linha
        }
    });
}
