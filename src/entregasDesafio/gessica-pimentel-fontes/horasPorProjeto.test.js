const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('#hours_per_project?', () => {
    it('When return the sum of funcionalites in an array', () => {

        const funcionalites = ['setup', 'responsividade', 'construcao_1_pagina',
                               'construcao_1_pagina', 'construcao_1_pagina', 'formulario',
                               'ssr']

        const result = calcularHorasDeProjeto(funcionalites)

        expect(result).toEqual(72)
    })
})