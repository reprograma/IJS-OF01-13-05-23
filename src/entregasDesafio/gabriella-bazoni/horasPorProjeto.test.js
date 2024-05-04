const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcular horas por projeto para finalizar um projeto', () => {

    test('Dado de um array com o calculo das funcionalidades e retornar uma soma', () => {

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