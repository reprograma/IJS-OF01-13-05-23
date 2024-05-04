const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe('Valor do projeto', () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue('pacote_basico');
    })
    test('retorna o valor da hora do programador por funcionalidade solicitada', () => {
      const funcionalidades = [
          'setup',
          'formulario',
          'responsividade',
          'construcao_1_pagina',
          'construcao_1_pagina',
          'construcao_1_pagina',
          'ssr',
          'integracao_api_propria'
      ]
  
      const valorHora = 72;
      const result = calcularValorTotalProjeto(funcionalidades, valorHora);
      expect(result).toEqual(6970)
    })
})