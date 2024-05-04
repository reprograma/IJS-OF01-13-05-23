const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote de acordo com cada projeto', () => {

    test('Retorna pacote básica caso o número total de horas seja até 50', () => {
        const totalDeHorasPorProjeto = Math.floor(Math.random()  * 50);

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico');
    });
 
    test('Retorna pacote intermediário caso o número total de horas seja até 100', () => {
        const totalDeHorasPorProjeto = Math.floor(Math.random() * (100 - 51 + 1)) + 51;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_intermediario');
    })

    test('Retorna pacote premium caso o número total de horas seja até 200', () => {
        const totalDeHorasPorProjeto = Math.floor(Math.random() * (200 - 101 + 1)) + 101;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_premium');
    })

})