const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('#toal_hours_project?', () => {
    it('When return basic the plan of a project', () => {
        const hours = 40

        const result = calcularPacote(hours)

        expect(result).toEqual('pacote_basico')
    })
    it('When return intermediary the plan of a project', () => {
        const hours = 72

        const result = calcularPacote(hours)

        expect(result).toEqual('pacote_intermediario')
    })
    it('When return premium the plan of a project', () => {
        const hours = 150

        const result = calcularPacote(hours)

        expect(result).toEqual('pacote_premium')
    })
})