const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');
jest.mock('../../dominio/calculadora/Projeto/pacote.js');


describe('valor do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    });

    test('valor total do projeto com pacote básico', () => {
        const valorTotalProjeto = calcularValorTotalProjeto(1000);
        expect(valorTotalProjeto).toEqual(1100);
    });

    test('valor total do projeto com pacote intermediário', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const valorTotalProjeto = calcularValorTotalProjeto(1000);
        expect(valorTotalProjeto).toEqual(1120);
    });

    test('valor total do projeto com pacote premium', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const valorTotalProjeto = calcularValorTotalProjeto(1000);
        expect(valorTotalProjeto).toEqual(1150);
    });
});
