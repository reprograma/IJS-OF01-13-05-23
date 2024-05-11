const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote');



describe('calcular valor total do projeto', () => {
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    });

    test('deve retornar  1613 quando o valor hora for 30 reais', () => {        
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
        const valorHora = 30;

        const esperando = 1613;
        const retornando = calcularValorTotalProjeto(funcionalidades,valorHora);

        expect(esperando).toBe(retornando);
    });

    
});

describe('calcular valor total do projeto', () => {
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    });

    test('deve retornar  528 quando o valor hora for 20 reais', () => {        
        const funcionalidades = ['setup', 'formulario'];
        const valorHora = 20;

        const esperando = 528;
        const retornando = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperando).toBe(retornando);
    });

    test('deve retornar  2112 quando o valor hora for 30 reais', () => {        
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina', 'integracao_mailchimp'];
        const valorHora = 30;

        const esperando = 2112;
        const retornando = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperando).toBe(retornando);
    });

    test('deve retornar  3872 quando o valor hora for 40 reais', () => {        
        const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria'];
        const valorHora = 40;

        const esperando = 3872;
        const retornando = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(esperando).toBe(retornando);
    });
    
});

// describe('calcular valor total do projeto (pacote premium)', () => {
//     beforeEach(()=>{
//         calcularPacote.mockReturnValue('pacote_premium');
//     });

//     test('deve retornar  5280 quando o valor hora for 20 reais', () => {        
//         const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina'];
//         const valorHora = 20;

//         const esperando = 5280;
//         const retornando = calcularValorTotalProjeto(funcionalidades, valorHora);

//         expect(esperando).toBe(retornando);
//     });

//     test('deve retornar  7800 quando o valor hora for 30 reais', () => {        
//         const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina', 'integracao_mailchimp'];
//         const valorHora = 30;

//         const esperando = 7800;
//         const retornando = calcularValorTotalProjeto(funcionalidades, valorHora);

//         expect(esperando).toBe(retornando);
//     });

//     test('deve retornar  13800 quando o valor hora for 40 reais', () => {        
//         const funcionalidades = ['setup', 'formulario', 'responsividade', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria'];
//         const valorHora = 40;

//         const esperando = 13800;
//         const retornando = calcularValorTotalProjeto(funcionalidades, valorHora);

//         expect(esperando).toBe(retornando);
//     });
// });