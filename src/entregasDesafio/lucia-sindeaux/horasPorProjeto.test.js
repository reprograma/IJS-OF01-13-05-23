const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Calculo de horas totais para finalização um projeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessarias', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'integracao_api_propria'
        ]

        const result = calcularHorasDeProjeto(funcionalidades);
        console.log(result)
        expect(result).toEqual(40)
    })
})