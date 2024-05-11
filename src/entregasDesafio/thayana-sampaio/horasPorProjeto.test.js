const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Cálculo de horas totais para finalizar um projeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias', () => {
      
        const funcionalidades = [
        'setup',
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'formulario',
        'ssr'
      ]
  
      const result = calcularHorasDeProjeto(funcionalidades);

      console.log(result)
      
      expect(result).toEqual(72);

    });
  });