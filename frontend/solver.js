function findCombinations(targetSum = 200) {
  const digits = "9876543210";
  const operators = ['+', '-', ''];
  const results = [];

  function backtrack(index, currentExpr) {
    if (index === digits.length) {
      const calculate = new Function('return ' + currentExpr);
      if (calculate() === targetSum) {
        results.push(`${currentExpr} = ${targetSum}`);
      }
      return;
    }
    for (let op of operators) {
      backtrack(index + 1, currentExpr + op + digits[index]);
    }
  }

  backtrack(1, digits[0]);
  return results;
}

// Экспорт для среды Node.js (Jest), в браузере модуль просто объявит функцию глобально
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { findCombinations };
}