const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('#value_per_hour?', () => {
    test('When return the month ceil value', () => {
        const valuePerMonth = 5000
        const result = calcularValorPorHora(valuePerMonth)

        expect(result).toEqual(29)
    })
})