const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Teste para o cálculo de horas por projeto", () => {
  test("Dado um array com funcionalidades desejadas no projeto, retorna a soma das horas necessárias", () => {
    const funcionalidades = ["setup", "responsividade"];
    const result = calcularHorasDeProjeto(funcionalidades);
    expect(result).toEqual(24);
  });
});
