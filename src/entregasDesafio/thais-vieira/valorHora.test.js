const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")

describe('valor por hora', () => {

    test('retorna valor arredondado correto dado o valor recebido do mês', () => {
        const valorPorMes = 5000
        const resultado = calcularValorPorHora(valorPorMes)

        expect(resultado).toEqual(29)
    })
})