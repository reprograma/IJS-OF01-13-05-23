const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');


jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe('Valor do Projeto de pacote básico solicitado pelo cliente', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('Retornar o valor total para um projeto dadas as funcionalidades por projeto pedidas e o valor da hora da dev', () => {
    const funcionalidades = [
        'setup',
        'responsividade',
        'construcao_1_pagina', 
        'construcao_1_pagina',
        'integracao_api_propria'
    ]
   
    const valorHora = 70;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(result).toEqual(4312)
  })
})