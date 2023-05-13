const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Teste para o cálculo do pacote de acordo com cada projeto", () => {
  test("Retorna pacote básico caso o número total de horas seja até 50", () => {
    const totalDeHorasPorProjeto = 49;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_basico");
  });
});
