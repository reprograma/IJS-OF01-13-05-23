const {totalDeHorasPorPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe ('Cálcular pacote de acordo com cada projeto', () => {
    test('Retorna pacote básico caso o número total de horas seja até 50', () => {
        const totalDeHorasPorProjeto = 49;
       
        const result = totalDeHorasPorPacote (totalDeHorasPorProjeto);
        expect(jest).toEqual('pacote_basico');
    });


    test('Retorna pacote básico caso o numero total de horas seja exatamente 50', () => {
        const totalDeHorasPorProjeto = 50;

        const result = pacote_basico ('totalDeHorasPorProjeto');
        expect(jest).toEqual('pacote_basico')
    } );

    test('Retorna pacote intermediario caso o numero total de horas seja exatamente 100', () => {
        const totalDeHorasPorProjeto = 99;

        const result = calcularPacote ('totalDeHorasPorProjeto');
        expect(jest).toEqual('pacote_intermediario')
    } );


});