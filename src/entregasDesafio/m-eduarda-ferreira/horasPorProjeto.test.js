const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calcular horas por porjeto para finalizar um projeto', () => {

    test('Dado de um array com o calculo das funcionalidade e retornar soma', () => {
        
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ]

        const result = calcularHorasDeProjeto(funcionalidades)

        expect(result).toEqual(72)

    })
})