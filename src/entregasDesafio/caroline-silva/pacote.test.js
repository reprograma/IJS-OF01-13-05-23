const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe('Testa a função pacote', () => {
  test('Testa se a função pacote é definida', () => {
    expect(calcularPacote).toBeDefined();
  });
  test('Se ao passar 49 retorna pacote_basico', () => {
    expect(calcularPacote(49)).toBe('pacote_basico');
  });
  test('Se ao passar 49.9 retorna pacote_basico', () => {
    expect(calcularPacote(49.9)).toBe('pacote_basico');
  });
  test('Se ao passar 50 retorna pacote_basico', () => {
    expect(calcularPacote(50)).toBe('pacote_basico');
  });
  test('Se ao passar 60 retorna pacote_intermediario', () => {
    expect(calcularPacote(60)).toBe('pacote_intermediario');
  });
  test('Se ao passar 80 retorna pacote_intermediario', () => {
    expect(calcularPacote(80)).toBe('pacote_intermediario');
  });
  test('Se ao passar 99.9 retorna pacote_intermediario', () => {
    expect(calcularPacote(99.9)).toBe('pacote_intermediario');
  });
  test('Se ao passar 100 retorna pacote_intermediario', () => {
    expect(calcularPacote(100)).toBe('pacote_intermediario');
  });
  test('Se ao passar 110 retorna pacote_premium', () => {
    expect(calcularPacote(110)).toBe('pacote_premium');
  });
  test('Se ao passar 199 retorna pacote_premium', () => {
    expect(calcularPacote(199)).toBe('pacote_premium');
  });
  test('Se ao passar 200 retorna pacote_premium', () => {
    expect(calcularPacote(199)).toBe('pacote_premium');
  });
});