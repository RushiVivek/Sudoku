from flask import Flask, render_template, request
from sudoku_solver import solve_sudoku

app = Flask(__name__, template_folder="templates")

@app.route("/", methods=["GET", "POST"])
def index():
	if request.method == "POST":
		puzzle = request.form.get("puzzle")
		solved = solve_sudoku(puzzle)

		return render_template("index.html", solved=solved)

	return render_template("index.html")

if __name__ == "__main__":
	app.run(debug=True)