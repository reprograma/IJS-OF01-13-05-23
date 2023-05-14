const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('Valor por hora', () => {
    test('retorna o valor arredondado correto', () => {
        const valorPorMes = 5000

        const result = calcularValorPorHora(valorPorMes);

        expect(result).toBe(29)
    })
})