// Questions that will be asked
const Questions = [{
	q: "What was the name of Aang's first Firebending Teacher?",
	a: [{ text: "Ozai", isCorrect: false },
	{ text: "Iroh", isCorrect: false },
	{ text: "Jong Jong", isCorrect: true },
	{ text: "Roku", isCorrect: false }
	]

},
{
	q: "Which Avatar was before Kyoshi?",
	a: [{ text: "Avatar Kora", isCorrect: false, isSelected: false },
	{ text: "Avatar Wan", isCorrect: false },
	{ text: "Avatar Yangchen", isCorrect: false },
	{ text: "Avatar Kuruk", isCorrect: true }
	]

},
{
	q: "What was the name of the ocean spirit? ",
	a: [{ text: "Koh", isCorrect: false },
	{ text: "Tui", isCorrect: false },
	{ text: "La", isCorrect: true },
	{ text: "Momo", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
