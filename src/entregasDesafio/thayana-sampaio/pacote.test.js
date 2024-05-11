const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote correto para cada projeto',() =>{

    test('Retornar pacote basico caso o numero total de horas seja até 50', () =>{
        
        
        const totalDeHoraPorProjeto = 49

        const result = calcularPacote(totalDeHoraPorProjeto)

        expect(result).toEqual('pacote_basico')

    })

    test('Retornar pacote basico caso o numero seja exatamente 50', () =>{
        
        const totalDeHoraPorProjeto = 50

        const result = calcularPacote(totalDeHoraPorProjeto)

        expect(result).toEqual('pacote_intermediario')

    })

    
})