const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora')

describe('valor por hora', () => {

    test('valor arredondado correto dado o valor recebido do mês', () => {
        const valorPorMes = 5000

        const result = calcularValorPorHora(valorPorMes)

        expect(result).toEqual(29)
    })
})