const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");
// const { describe, beforeEach } = require("node:test");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("valor do projeto", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });

  test("retorna valor total para um projeto dadas as funcionaliadades por projeto pedidas e o valort da hora da desenvolvedora", () => {
    const funcionaliadades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const valorHora = 70;
    const result = calcularValorTotalProjeto(funcionaliadades, valorHora);
    expect(result).toEqual(3696);
  });
});
