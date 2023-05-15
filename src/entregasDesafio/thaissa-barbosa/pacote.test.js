const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Pacote testes", () => {
  test("Calcular cada Pacote", () => {
    const totalDeHorasPorProjeto = 49;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_basico");
  });
});

//COmo tem que ficar
