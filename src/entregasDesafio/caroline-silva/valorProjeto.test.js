const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");

describe('Testa a função calcularValorTotalProjeto', () => {
  test('Testa se a função calcularValorTotalProjeto é definida', () => {
    expect(calcularValorTotalProjeto).toBeDefined();
  });
  test('Se ao passar setup e o número 6 retorna 53', () => {
    expect(calcularValorTotalProjeto(['setup'], 6)).toBe(53);
  });
  test('Se ao passar setup e o número 60 retorna 528', () => {
    expect(calcularValorTotalProjeto(['setup'], 60)).toBe(528);
  });
  test('Se ao passar setup e o número 1 retorna 9', () => {
    expect(calcularValorTotalProjeto(['setup'], 1)).toBe(9);
  });
  test('Se ao passar setup e o número 0.1 retorna 1', () => {
    expect(calcularValorTotalProjeto(['setup'], 0.1)).toBe(1);
  });
  test('Se ao passar setup e o número 0.01 retorna 0', () => {
    expect(calcularValorTotalProjeto(['setup'], 0.01)).toBe(0);
  });
  test('Se ao passar setup e o número 0 retorna 0', () => {
    expect(calcularValorTotalProjeto(['setup'], 0)).toBe(0);
  });
});