const{ calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe('Valor do Projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('retorna valor total para um prjeto dadas as funcionalidades por projeto pedidas e o valor da hora da desenvolvedora' , () => {
        const funcionalidades = [
                'setup',
                'responsividade',
                'contrucao_1_pagina',
                'contrucao_1_pagina',
                'contrucao_1_pagina'
        ]

        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(jest).toEqual(3696)
    })
})