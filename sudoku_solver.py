def is_valid_move(grid, row, col, num):
	for i in range(9):
		if grid[row][i] == num or grid[i][col] == num:
			return False

	base = [3*(row//3), 3*(col//3)]

	for i in range(base[0], base[0] + 3):
		for j in range(base[1], base[1] + 3):
			if grid[i][j] == num:
				return False

	return True

def backtrack(grid):
	for row in range(9):
		for col in range(9):
			if grid[row][col] == 0:
				for num in range(1, 10):
					if is_valid_move(grid, row, col, num):
						grid[row][col] = num
						if backtrack(grid):
							return True
						grid[row][col] = 0
				return False
	return True

def solve_sudoku(puzzle):
	grid = [list(map(int, row.split())) for row in puzzle.splitlines()]

	if backtrack(grid):
		return '\n'.join([" ".join(map(str, row)) for row in grid])
	else:
		return "No solution exists"
