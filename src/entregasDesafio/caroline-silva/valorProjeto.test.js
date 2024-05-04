const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

const pacote = require('../../dominio/calculadora/Projeto/pacote');
jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe('Valor do Projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('Se ao colocar as funcionalidades construção pagina 3xs, retorna 1584', () => {
    const funcionalidades = ['construcao_1_pagina', 'construcao_1_pagina', 'construcao_1_pagina'];
    const valorHora = 60;

    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toEqual(1584);
    
  });
  test('Se ao colocar todas as funcionalidades, retorna o valor correto', () => {
    const funcionalidades = [ 'setup', 'formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria'];
    const valorHora = 60;

    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toEqual(6864);
  });
})