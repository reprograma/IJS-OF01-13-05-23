const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote para cada projeto requerido', () => {

    test('Retornar pacote básico caso o número total de horas seja de até 50', () => {
        const totalDeHorasPorProjeto = 49;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico');
    });
    test('Retornar pacote básico caso o número total de horas seja exatamente igual a 50', () => {
        const totalDeHorasPorProjeto = 50;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico')
    })

    test('Retornar pacote intermediário caso o número total de horas seja de até 100', () => {
        const totalDeHorasPorProjeto = 79;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_intermediario');
    })

    test('Retornar pacote intermediário caso o número total de horas seja exatamente igual a 100', () => {
        const totalDeHorasPorProjeto = 100;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_intermediario');
    })

    test ('Retornar pacote premium caso o número total de horas seja de até 199', () => {
        const totalDeHorasPorProjeto = 199;

        const result = calcularPacote (totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_premium');
    })

    test('Retornar pacote premium caso o número total de horas seja exatamente igual a 200', () =>{
        const totalDeHorasPorProjeto = 200;

        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_premium');
    })

})