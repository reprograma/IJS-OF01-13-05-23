const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')


jest.mock('../../dominio/calculadora/Projeto/pacote.js')

describe('Valor de Projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })

    test('Retorna valor total para um projeto de acordo com as funcionalidades', () => {
        const funcionalidades = [
            'setup',
        ]

        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toBe(616)
    })

   
})