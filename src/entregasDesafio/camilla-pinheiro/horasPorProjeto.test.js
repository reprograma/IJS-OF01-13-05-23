const {calcularHorasPorProjeto, calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calcular horas por projeto para finalizar um projeto', () => {
    
    test('dado de um array com cálculo das funcionalidades e retornar uma soma', () => {
        
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

        console.log(result)
        expect(result).toEqual(72)
    
    })

})