const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe('Testa função calcularValorPorHora', () => {
  test('Testa se a função valorHora é definida', () => {
    expect(calcularValorPorHora).toBeDefined();
  })
  test('Testa se a função valorHora retorna um número', () => {
    expect(calcularValorPorHora(1000)).toBe(6);
  });
  test('Se ao passar o valor de 2000 retorna 12', () => {
    expect(calcularValorPorHora(2000)).toBe(12);
  });
})

