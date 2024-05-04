const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor do Projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('retorna valor total do projeto e o valor da hora', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
        ]

        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(4312)
    })
});
