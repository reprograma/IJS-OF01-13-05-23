const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('calcular pacote correto para cada projeto', () => {

    test('retorna pacote basico caso o numero total de horas seja até 50', () => {

        const totalDeHorasPorProjeto = 49

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_basico')

    })

    test('retorna pacote basico caso o numero total de horas seja exatamente 50', () => {

        const totalDeHorasPorProjeto = 50

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_basico')

    })

    test('retorna pacote basico caso o numero total de horas seja até 100', () => {

        const totalDeHorasPorProjeto = 99

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_intermediario')

    })

    test('retorna pacote basico caso o numero total de horas seja exatamente 100', () => {

        const totalDeHorasPorProjeto = 100

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_intermediario')

    })

    test('retorna pacote basico caso o numero total de horas seja até 200', () => {

        const totalDeHorasPorProjeto = 199

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_premium')

    })

    test('retorna pacote basico caso o numero total de horas seja exatamente 200', () => {

        const totalDeHorasPorProjeto = 200

        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_premium')

    })



})