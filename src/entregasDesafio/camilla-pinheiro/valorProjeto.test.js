const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe('Valor do projeto', () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue('pacote_basico');
    })
    test('retorna o valor da hora do programador por funcionalidade solicitada', () => {
      const funcionalidades = [
          'setup', //8*72
          'formulario', //16*72
          'responsividade', //16*72
          'construcao_1_pagina', //8*72
          'construcao_1_pagina', //8*72
          'construcao_1_pagina', //8*72
          'ssr', //8*72
          'integracao_api_propria' //16*72
      ]

      const valorHora = 72;
      const result = calcularValorTotalProjeto(funcionalidades, valorHora); //6336*1.1 (taxa contratual do pacote_basico é igual a 10%)
      expect(result).toEqual(6970)
    })
})