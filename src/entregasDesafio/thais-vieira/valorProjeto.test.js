const {calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto")

const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('valor total do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test('retorna valor total do projeto de acordo com as funcionalidades solicitadas e o valor por hora', () => {

        const funcionalidades = [
            'setup',
            'responsividade',
            'integracao_api_propria',
            'construcao_1_pagina',
            'otimizacao_seo'    
        ]
    
        const valorPorHora = 100
        const resultado = calcularValorTotalProjeto(funcionalidades, valorPorHora)


    expect(resultado).toEqual(7040)

    })
})