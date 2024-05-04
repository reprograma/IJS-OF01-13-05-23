const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote correto para cada projeto", () => {
  test("Retornar pacote báscio caso o numero total de horas seja até 50", () => {
    const totalDeHorasPorProjeto = 49;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_basico");
  });
  test("Retornar pacote báscio caso o numero total de horas seja  51 a 100", () => {
    const totalDeHorasPorProjeto = 50;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_basico");
  });

  test("Retornar pacote báscio caso o numero total de horas seja de 51", () => {
    const totalDeHorasPorProjeto = 51;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_intermediario");
  });
  test("Retornar pacote báscio caso o numero total de horas seja exatamente 100", () => {
    const totalDeHorasPorProjeto = 100;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_intermediario");
  });

  test("Retornar pacote báscio caso o numero total de horas seja de 101", () => {
    const totalDeHorasPorProjeto = 101;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_premium");
  });
  test("Retornar pacote báscio caso o numero total de horas seja 200", () => {
    const totalDeHorasPorProjeto = 200;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_premium");
  });
});
