const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");

const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote");

describe("Valor do projeto", () => {
  beforeEach(() => {
    calcularPacote.mockReturnValue("pacote_basico");
  });

  test("Deve calcular o valor total do projeto para o pacote básico", () => {
    const result = calcularValorTotalProjeto * beforeEach;

    expect(result).toEqual(55);
  });
});
