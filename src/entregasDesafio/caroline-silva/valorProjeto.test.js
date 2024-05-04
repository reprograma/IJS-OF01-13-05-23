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
  test('Se ao passar formulario e o número 1 retorna 0', () => {
    expect(calcularValorTotalProjeto(['formulario'], 1)).toBe(18);
  });
  test('Se ao passar formulario e o número 10 retorna 176', () => {
    expect(calcularValorTotalProjeto(['formulario'], 10)).toBe(176);
  });
  test('Se ao passar formulario e o número 10.1 retorna 178', () => {
    expect(calcularValorTotalProjeto(['formulario'], 10.1)).toBe(178);
  });
  test('Se ao passar responsividade e o número 1 retorna 18', () => {
    expect(calcularValorTotalProjeto(['responsividade'], 1)).toBe(18);
  });
  test('Se ao passar responsividade e o número 15 retorna 100', () => {
    expect(calcularValorTotalProjeto(['responsividade'], 15)).toBe(264);
  });
});