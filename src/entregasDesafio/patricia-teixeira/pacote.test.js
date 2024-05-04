const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote correto para cada projeto', () => {

  // pacote basico
  test('Retornar pacote basico caso o numero total de horas seja ate 50', () => {

    const totalDeHorasPorProjeto = 49;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_basico');    
  })

  test('Retornar pacote basico caso o numero seja exatamente 50', () => {

    const totalDeHorasPorProjeto = 50

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_basico');
  })

  // pacote intermediario
  test('Retornar pacote intermediario caso o numero total de horas seja ate 100', () => {

    const totalDeHorasPorProjeto = 99;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_intermediario');    
  })

  test('Retornar pacote intermediario caso o numero seja exatamente 100', () => {

    const totalDeHorasPorProjeto = 100

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_intermediario');
  })

  // pacote premium
  test('Retornar pacote premium caso o numero total de horas seja ate 200', () => {

    const totalDeHorasPorProjeto = 199;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_premium');    
  })

  test('Retornar pacote premium caso o numero seja exatamente 200', () => {

    const totalDeHorasPorProjeto = 200

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_premium');
  })

})