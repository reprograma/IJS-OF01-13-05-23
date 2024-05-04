const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')


describe('#project_total_value?', () => {
    it('When return the total value of the project with a basic plan', () => {
        const funcionalites = ['setup', 'responsividade', 'construcao_1_pagina',
        'construcao_1_pagina', 'construcao_1_pagina', 'formulario',
        'ssr']

        const valuePerMonth = 7000
        const valuePerHour = calcularValorPorHora(valuePerMonth)

        const result = calcularValorTotalProjeto(funcionalites, valuePerHour)

        expect(result).toEqual(3456)
    })
    it('When return the total value of the project with a intermediary plan', () => {
        const funcionalites = ['setup', 'responsividade', 'construcao_1_pagina',
        'construcao_1_pagina', 'construcao_1_pagina', 'formulario',
        'ssr']

        const valuePerMonth = 13000
        const valuePerHour = calcularValorPorHora(valuePerMonth)

        const result = calcularValorTotalProjeto(funcionalites, valuePerHour)

        expect(result).toEqual(6394)
    })
    it('When return the total value of the project with a premium plan', () => {
        const funcionalites = ['setup', 'responsividade', 'construcao_1_pagina',
        'construcao_1_pagina', 'construcao_1_pagina', 'formulario',
        'ssr']

        const valuePerMonth = 50000
        const valuePerHour = calcularValorPorHora(valuePerMonth)

        console.log(valuePerHour)

        const result = calcularValorTotalProjeto(funcionalites, valuePerHour)

        expect(result).toEqual(24624)
    })
})