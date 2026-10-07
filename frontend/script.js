document.getElementById('solveBtn').addEventListener('click', () => {
	const resultsList = document.getElementById('resultsList');
	resultsList.innerHTML = ''; 
	
	// Вызываем функцию из solver.js
	const results = findCombinations(200);

	results.forEach(res => {
		const li = document.createElement('li');
		li.textContent = res;
		resultsList.appendChild(li);
	});
	
	document.getElementById('solveBtn').disabled = true;
});