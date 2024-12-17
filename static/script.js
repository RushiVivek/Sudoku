document.querySelector("form").addEventListener("submit", (event) => {
	const puzzleInp = document.querySelector("textarea").value.trim();
	if (!validatePuzzle(puzzleInp)) {
		alert("Invalid Input Format.")
		event.preventDefault();
	}
});

function validatePuzzle(input) {
	const rows = input.split("\n");
	return rows.length === 9 && rows.every(row => row.split(" ").length === 9)
}