const operationsDisplay = document.querySelector(".operation");
const resultDisplay = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");
let op = "";

buttons.forEach((item) => {
	item.addEventListener("click", display);
});

function display(e) {
	if (!e.target.classList.contains("equals")) {
		if (e.target.classList.contains("times")) {
			operationsDisplay.innerText += e.target.innerText;
			op += "*";
			return;
		}
		if (e.target.classList.contains("divide")) {
			operationsDisplay.innerText += e.target.innerText;
			op += "/";
			return;
		}
		if (e.target.classList.contains("clear")) {
			operationsDisplay.innerText = "";
			op = "";
			resultDisplay.innerText = "";
			return;
		}
		operationsDisplay.innerText += e.target.innerText;
		op += e.target.innerText;
	} else {
		try {
			let res = eval(op);
			resultDisplay.innerText = res;
		} catch (err) {
			console.log(err);
			resultDisplay.innerText = "Error!";
		}
	}
}
