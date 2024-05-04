
describe('Testa a função valorProjeto', () => {
  test('Testa se a função valorProjeto é definida', () => {
    expect(valorProjeto).toBeDefined();
  });
  test('Se ao passar 49 retorna 49', () => {
    expect(valorProjeto(49)).toBe(49);
  });
});