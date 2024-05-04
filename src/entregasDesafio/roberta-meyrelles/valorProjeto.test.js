const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe('Valor do projeto', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_basico');
  })

  test('Retorna valor total para um projeto', () => {
    const funcionalidades = [
      'setup',
      'construcao_1_pagina',
      'construcao_1_pagina'
    ]

    const valorHora = 30;

    const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(result).toEqual(792);

  })
})
