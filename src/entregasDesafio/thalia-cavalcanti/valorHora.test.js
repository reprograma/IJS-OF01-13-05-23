const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('valor por hora', () => {
    test('retorna o valor arredondado correto dado o valor receb ido no mês', () => {
        const valorPorMes = 10000;

        const result = calcularValorPorHora(valorPorMes);

        expect(result).toEqual(57);
    })
})