const questions = [
  { department: "Elektro og datateknologi", question: "Hva måles i Ohm (Ω)?", answers: ["Strøm", "Motstand", "Spenning", "Effekt"], correctIndex: 1 },
  { department: "Helse- og oppvekstfag", question: "Hva er normal kroppstemperatur hos mennesker?", answers: ["35°C", "37°C", "39°C", "40°C"], correctIndex: 1 },
  { department: "Idrettsfag", question: "Se videoen og velg riktig svar (A, B eller C).", videoSrc: "C:/Users/johan/Downloads/filmen av trenning/filmen av trenning.mp4", answers: ["A. Protein", "B. Karbohydrater", "C. Vann"], correctIndex: 1 },
  { department: "Medier og kommunikasjon", question: "Hva betyr målgruppe i media?", answers: ["Hvor reklamen sendes", "Hvem budskapet er laget for", "Hvor videoen spilles inn", "Hvor mange som ser"], correctIndex: 1 },
  { department: "Påbygging", question: "Hva betyr kildekritikk?", answers: ["Å bruke mange kilder", "Å vurdere om informasjon er troverdig", "Å skrive lange tekster", "Å kopiere kilder"], correctIndex: 1 },
  { department: "Salg, service og reiseliv", question: "Hva er god kundeservice?", answers: ["Å ignorere kunder", "Å hjelpe kunder på en vennlig og profesjonell måte", "Å selge mest mulig", "Å snakke lite"], correctIndex: 1 },
  { department: "Teknologi- og industrifag", question: "Hva brukes en dreiebenk til?", answers: ["Sveising", "Bearbeiding av roterende materialer", "Maling", "Montering"], correctIndex: 1 },
  { department: "Informasjonsteknologi og medieproduksjon", question: "Hva betyr HTML?", answers: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Media Link", "Home Tool Markup Language"], correctIndex: 0 },
  { department: "Kombinasjonsklasse", question: "Hvilket styresett har Norge?", answers: ["Republikk", "Militærstyre", "Konstitusjonelt monarki", "Diktatur"], correctIndex: 2 },
  { department: "Demokrati og medborgerskap", question: "Hva regnes som mobbing?", answers: ["En enkelt krangel mellom venner", "Gjentatt negativ atferd mot en person over tid", "Å være uenig med noen", "Å gi konstruktiv kritikk"], correctIndex: 1 }
];

const startScreen = document.getElementById("start-screen"), quizScreen = document.getElementById("quiz-screen"), resultScreen = document.getElementById("result-screen");
const playerNameInput = document.getElementById("playerName"), startBtn = document.getElementById("startBtn"), progress = document.getElementById("progress"), scoreText = document.getElementById("score");
const questionText = document.getElementById("questionText"), answers = document.getElementById("answers"), feedback = document.getElementById("feedback"), nextBtn = document.getElementById("nextBtn");
const finalText = document.getElementById("finalText"), highscoreList = document.getElementById("highscoreList"), restartBtn = document.getElementById("restartBtn");
const videoWrapper = document.getElementById("videoWrapper"), questionVideo = document.getElementById("questionVideo"), progressBar = document.getElementById("progressBar");

let currentIndex = 0;
let score = 0;
let playerName = "";

function startQuiz() {
  const name = playerNameInput.value.trim();
  if (!name) {
    alert("Skriv inn navn før du starter.");
    return;
  }
  playerName = name;
  currentIndex = 0;
  score = 0;
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const item = questions[currentIndex], p = currentIndex + 1;
  progress.textContent = `Spørsmål ${p}/${questions.length}`;
  scoreText.textContent = `Poeng: ${score}`;
  progressBar.style.width = `${(p / questions.length) * 100}%`;
  questionText.textContent = `${item.department}: ${item.question}`;
  feedback.textContent = "";
  nextBtn.classList.add("hidden");
  answers.innerHTML = "";

  videoWrapper.classList.toggle("hidden", !item.videoSrc);
  if (item.videoSrc) questionVideo.src = item.videoSrc;
  else questionVideo.removeAttribute("src");

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn"; button.textContent = answer; button.type = "button";
    button.onclick = () => handleAnswer(index);
    answers.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  const item = questions[currentIndex];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((button) => button.disabled = true);

  if (selectedIndex === item.correctIndex) {
    score += 1;
    feedback.textContent = "Riktig svar!";
  } else {
    feedback.textContent = "Feil svar.";
  }
  scoreText.textContent = `Poeng: ${score}`;

  buttons[item.correctIndex].classList.add("correct");
  if (selectedIndex !== item.correctIndex) {
    buttons[selectedIndex].classList.add("wrong");
  }
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex < questions.length) renderQuestion();
  else finishQuiz();
}

function finishQuiz() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  progressBar.style.width = "100%";
  finalText.textContent = `${playerName}, du fikk ${score} av ${questions.length} poeng.`;
  saveHighscore(playerName, score);
  renderHighscores();
}

function getHighscores() {
  return JSON.parse(localStorage.getItem("bleiker-highscores") || "[]");
}

function saveHighscore(name, points) {
  const list = getHighscores();
  list.push({ name, points });
  list.sort((a, b) => b.points - a.points);
  const topFive = list.slice(0, 5);
  localStorage.setItem("bleiker-highscores", JSON.stringify(topFive));
}

function renderHighscores() {
  const list = getHighscores();
  highscoreList.innerHTML = "";
  if (list.length === 0) {
    highscoreList.innerHTML = "<li>Ingen resultater ennå.</li>";
    return;
  }
  list.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name} - ${entry.points} poeng`;
    highscoreList.appendChild(li);
  });
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  playerNameInput.focus();
});
