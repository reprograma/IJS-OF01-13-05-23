const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote correto para cada projeto', () => {
  test('Retornar pacote basico caso o numero total de horas seja até 50', () => {

    const totalDeHorasPorProjeto = 49;

    const result = calcularPacote(totalDeHorasPorProjeto);


    expect(result).toEqual('pacote_basico');
  })


  test('Retornar pacote básico caso o número seja exatamente 50', () => {

    const totalDeHorasPorProjeto = 50;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_basico')
  })

  test('Retornar pacote intermediário caso o número seja exatamente 100', () => {

    const totalDeHorasPorProjeto = 100;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_intermediario')
  })

  test('Retornar pacote premium caso o número seja exatamente 200', () => {

    const totalDeHorasPorProjeto = 200;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_premium')
  })

})