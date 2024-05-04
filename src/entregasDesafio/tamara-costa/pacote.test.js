const {calcularPacote} = require("../../dominio/calculadora/Projeto/pacote")
describe('Calcular pacote correto para cada projeto', () => {
  test('Retornar pacote básico caso o número total de horas seja até 50', () => {
    
     const totalDehorasPorProjeto = 49

    const result = calcularPacote(totalDehorasPorProjeto);   
    
    expect(result).toEqual('pacote_basico');

  });

  test('Retornar pacote básico caso o número total de horas seja exatamente 50', () => {
    
    const totalDehorasPorProjeto = 50

   const result = calcularPacote(totalDehorasPorProjeto);   
   
   expect(result).toEqual('pacote_basico');

 }); 

test('Retornar pacote intermediário caso o número total de horas seja até 100', () => {
    
  const totalDehorasPorProjeto = 70

 const result = calcularPacote(totalDehorasPorProjeto);   
 
 expect(result).toEqual('pacote_intermediario');

});

test('Retornar pacote intermediário caso o número total de horas seja igual a 100', () => {
    
  const totalDehorasPorProjeto = 100

 const result = calcularPacote(totalDehorasPorProjeto);   
 
 expect(result).toEqual('pacote_intermediario');

});

test('Retornar pacote premium caso o número total de horas seja menor que 200', () => {
    
  const totalDehorasPorProjeto = 150

 const result = calcularPacote(totalDehorasPorProjeto);   
 
 expect(result).toEqual('pacote_premium');

});

test('Retornar pacote premium caso o número total de horas seja igual a 200', () => {
    
  const totalDehorasPorProjeto = 200

 const result = calcularPacote(totalDehorasPorProjeto);   
 
 expect(result).toEqual('pacote_premium');

});


});