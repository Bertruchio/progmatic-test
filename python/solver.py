def find_combinations(target_sum=200):
    digits = "9876543210"
    operators = ['+', '-', '']
    results = []

    def backtrack(index, current_expr):
        if index == len(digits):
            if eval(current_expr) == target_sum:
                results.append(f"{current_expr} = {target_sum}")
            return
            
        for op in operators:
            backtrack(index + 1, current_expr + op + digits[index])

    backtrack(1, digits[0])
    return results

if __name__ == "__main__":
    solutions = find_combinations()
    for sol in solutions:
        print(sol)