const {calcularPacote} = require("../../dominio/calculadora/Projeto/pacote")

describe('fazer o cálculo do pacote correto para cada projeto', () => {

    test('retornar pacote basico caso o numero de horas seja menor que 50', () => {


        const totalDeHorasPorProjeto = 49

        const resultado = calcularPacote(totalDeHorasPorProjeto)

        expect(resultado).toEqual('pacote_basico')

    })

    test('retornar pacote basico caso o numero de horas seja igual a 50', () => {


        const totalDeHorasPorProjeto = 50

        const resultado = calcularPacote(totalDeHorasPorProjeto)

        expect(resultado).toEqual('pacote_basico')

    })

    test('retornar pacote intermediario caso o numero de horas seja maior que 50 e ate 100', () => {


        const totalDeHorasPorProjeto = 66

        const resultado = calcularPacote(totalDeHorasPorProjeto)

        expect(resultado).toEqual('pacote_intermediario')

    })

    test('retornar pacote intermediario caso o numero de horas seja igual a 100', () => {


        const totalDeHorasPorProjeto = 100

        const resultado = calcularPacote(totalDeHorasPorProjeto)

        expect(resultado).toEqual('pacote_intermediario')

    })

    test('retornar pacote intermediario caso o numero de horas seja maior que 100 e ate 200', () => {


        const totalDeHorasPorProjeto = 150

        const resultado = calcularPacote(totalDeHorasPorProjeto)

        expect(resultado).toEqual('pacote_premium')

    })

    test('retornar pacote intermediario caso o numero de horas seja igual a 200', () => {


        const totalDeHorasPorProjeto = 200

        const resultado = calcularPacote(totalDeHorasPorProjeto)

        expect(resultado).toEqual('pacote_premium')

    })
})