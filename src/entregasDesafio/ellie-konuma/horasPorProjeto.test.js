const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Cálculo de horas totoais para finalizar um projeto", () => {
  test("Dado um arry com as funcionalidades desejadas no projeto, retorna a soma das horas nescessarias", () => {
    const funcionalidades = ["setup", "responsividade"];
    const result = calcularHorasDeProjeto(funcionalidades);
    expect(result).toEqual(24);
  });
});
