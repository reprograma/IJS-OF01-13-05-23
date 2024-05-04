const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('Valor do projeto', () => {
    beforeEach(() => {
      pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('Retornar o valor correto para o pacote básico', () => {
        const funcionalidades = ['func1', 'func2']
        const valorHora = 10
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        const expectedValue = Math.round((funcionalidades * valorHora) * 1.1)
        expect(result).toEqual(expectedValue)
    })

    test('Retornar o valor correto para o pacote intermediário', () => {
        const funcionalidades = ['func1', 'func2', 'func3']
        const valorHora = 10
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        const expectedValue = Math.round((funcionalidades * valorHora) * 1.2)
        expect(result).toEqual(expectedValue)
    })

    test('Retornar o valor correto para o pacote premium', () => {
        const funcionalidades = ['func1', 'func2', 'func3', 'func4']
        const valorHora = 10
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        const expectedValue = Math.round((funcionalidades * valorHora) * 1.5)
        expect(result).toEqual(expectedValue)
    })
})