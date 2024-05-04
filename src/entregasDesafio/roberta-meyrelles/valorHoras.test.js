// Testes aqui
//Requisição 
const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

//Estrutura de Teste
describe('Calcular valor por hora', () => {
  test(
    'Retorna o valor arredondado correto dado o valor recebido do mês', () => {

      const valorPorMes = 5000;
      const result = calcularValorPorHora(valorPorMes);

      expect(result).toEqual(29);
    })
})