const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe('Testa função calcularHorasDeProjeto', () => {
  test('Testa se a função calcularHorasDeProjeto é definida', () => {
    expect(calcularHorasDeProjeto).toBeDefined();
  });
  test('Testa se a função calcularHorasDeProjeto retorna um número', () => {
    const tarefas = ['setup', 'formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria'];
    expect(calcularHorasDeProjeto(tarefas)).toBe(104);
  });
  test('Testa se a função calcularHorasDeProjeto retorna 40 ao colocar setup, formulario e reponsividade', () => {
    const tarefas = ['setup', 'formulario', 'responsividade', ];
    expect(calcularHorasDeProjeto(tarefas)).toBe(40);
  });
  test('Testa se a função calcularHorasDeProjeto retorna 24 ao colocar construcao_1_pagina, construcao_1_pagina  e construcao_1_pagina', () => {
    const tarefas = ['construcao_1_pagina', 'construcao_1_pagina', 'construcao_1_pagina' ];
    expect(calcularHorasDeProjeto(tarefas)).toBe(24);
  });
});