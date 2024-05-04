const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor do projeto', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_basico')
  })

  test('Retorna o valor total de um projeto dada as funcionalidades por projeto pedidas e o valor da hora da desenvolvedora', () => {
    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'formulario',
      'ssr'
    ]

    const horasTrabalhadas = 70;
    const result = calcularValorTotalProjeto(funcionalidades, horasTrabalhadas)

    expect(result).toEqual(5544)
  })
})