const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe('Testa função calcularHorasDeProjeto', () => {
  test('Testa se a função calcularHorasDeProjeto é definida', () => {
    expect(calcularHorasDeProjeto).toBeDefined();
  });
  test('Testa se a função calcularHorasDeProjeto retorna um número', () => {
    const tarefas = ['setup', 'formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria'];
    expect(calcularHorasDeProjeto(tarefas)).toBe(104);
  });
});