const { findCombinations } = require('./solver');

test('Находит решения, дающие в сумме 200', () => {
  const results = findCombinations(200);
  expect(results.length).toBeGreaterThan(0);
  
  results.forEach(res => {
    const expr = res.split(' = ')[0];
    const calculate = new Function('return ' + expr);
    expect(calculate()).toBe(200);
  });
});