from solver import find_combinations

def test_find_combinations():
    results = find_combinations(200)
    assert len(results) > 0
    
    for res in results:
        expr = res.split(' = ')[0]
        assert eval(expr) == 200