const {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe('calcular horas para finalizar um projeto', () => {

    test('dados de um array com o calculo das funcionalidades e retornar uma soma', () => {

        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ]
        const resultado = calcularHorasDeProjeto(funcionalidades)

        expect(resultado).toEqual(72)
    })
})