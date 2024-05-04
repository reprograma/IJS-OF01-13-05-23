const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto.js');
const pacote = require('./../../dominio/calculadora/Projeto/pacote.js');
jest.mock('./../../dominio/calculadora/Projeto/pacote.js');

describe('Valor do projeto', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_basico');
  })

  test('Retorna valor total do projeto básico', () => {

    const funcionalidades = [
      'setup',
      'responsividade',      
    ]
    const valorHora = 10;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(result).toEqual(264);

  });
  test('Retorna valor total do projeto completo', () => {

    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'formulario',
      'ssr'
    ]
    const valorHora = 10;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(result).toEqual(792);

  });
})