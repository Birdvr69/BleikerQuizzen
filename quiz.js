const questionPool = [
  // Elektro og datateknologi
  {
    department: "Elektro og datateknologi",
    question: "Hva måles i Ohm (Ω)?",
    answers: ["Strøm", "Motstand", "Spenning", "Effekt"],
    correctIndex: 1
  },
  {
    department: "Elektro og datateknologi",
    question: "Hvilken enhet måler elektrisk strøm?",
    answers: ["Volt", "Watt", "Ampere", "Ohm"],
    correctIndex: 2
  },
  {
    department: "Elektro og datateknologi",
    question: "Hva gjør en sikring i et elektrisk anlegg?",
    answers: [
      "Øker spenningen",
      "Stopper strømmen hvis den blir for høy",
      "Lagrer strøm",
      "Lager elektrisk energi"
    ],
    correctIndex: 1
  },
  {
    department: "Elektro og datateknologi",
    question: "Hva står AC for i elektrisitet?",
    answers: ["Automatic Current", "Alternating Current", "Active Circuit", "Analog Control"],
    correctIndex: 1
  },
  {
    department: "Elektro og datateknologi",
    question: "Hva brukes en transformator til?",
    answers: ["Endre spenning", "Lagre strøm", "Måle strøm", "Produsere strøm"],
    correctIndex: 0
  },

  // Helse- og oppvekstfag
  {
    department: "Helse- og oppvekstfag",
    question: "Hva er normal kroppstemperatur hos mennesker?",
    answers: ["35°C", "37°C", "39°C", "40°C"],
    correctIndex: 1
  },
  {
    department: "Helse- og oppvekstfag",
    question: "Hva er førstehjelp ved en person uten pust?",
    answers: [
      "Legge personen ned",
      "Starte hjerte-lungeredning",
      "Gi vann",
      "Vente på ambulanse"
    ],
    correctIndex: 1
  },
  {
    department: "Helse- og oppvekstfag",
    question: "Hva står HLR for?",
    answers: ["Hjerte-lungeredning", "Helse-lege-rutine", "Hjelp-liv-redning", "Hjerte-liv-reaksjon"],
    correctIndex: 0
  },
  {
    department: "Helse- og oppvekstfag",
    question: "Hva betyr empati i helsearbeid?",
    answers: [
      "Å bestemme over pasienter",
      "Å forstå hvordan andre føler det",
      "Å gi medisiner",
      "Å skrive rapport"
    ],
    correctIndex: 1
  },
  {
    department: "Helse- og oppvekstfag",
    question: "Hva er et viktig prinsipp i smittevern?",
    answers: ["Håndhygiene", "Mørke rom", "Mindre mat", "Mindre søvn"],
    correctIndex: 0
  },

  // Idrettsfag
  {
    department: "Idrettsfag",
    question: "Hva er kroppens viktigste energikilde under hard trening?",
    answers: ["Protein", "Karbohydrater", "Vann", "Vitaminer"],
    correctIndex: 1
  },
  {
    department: "Idrettsfag",
    question: "Hva måler makspuls?",
    answers: [
      "Maks antall hjerteslag per minutt",
      "Maks oksygenopptak",
      "Maks muskelstyrke",
      "Maks blodtrykk"
    ],
    correctIndex: 0
  },
  {
    department: "Idrettsfag",
    question: "Hva er VO2-maks?",
    answers: ["Maks muskelstyrke", "Maks oksygenopptak i kroppen", "Maks puls", "Maks fettforbrenning"],
    correctIndex: 1
  },
  {
    department: "Idrettsfag",
    question: "Hva er en viktig faktor for å forebygge skader i idrett?",
    answers: ["Oppvarming", "Mindre søvn", "Mindre mat", "Mindre trening"],
    correctIndex: 0
  },
  {
    department: "Idrettsfag",
    question: "Hva er Fair Play?",
    answers: ["Å vinne for enhver pris", "Å følge regler og vise respekt", "Å spille fort", "Å spille alene"],
    correctIndex: 1
  },

  // Medier og kommunikasjon
  {
    department: "Medier og kommunikasjon",
    question: "Hva betyr målgruppe i media?",
    answers: [
      "Hvor reklamen sendes",
      "Hvem budskapet er laget for",
      "Hvor videoen spilles inn",
      "Hvor mange som ser"
    ],
    correctIndex: 1
  },
  {
    department: "Medier og kommunikasjon",
    question: "Hva står RGB for i digital design?",
    answers: ["Red, Green, Blue", "Rapid Graphic Build", "Render Graphic Base", "Red Gradient Blend"],
    correctIndex: 0
  },
  {
    department: "Medier og kommunikasjon",
    question: "Hva er en storyboard?",
    answers: [
      "En liste over skuespillere",
      "En plan med tegninger av scener i en film",
      "En kameratype",
      "Et redigeringsprogram"
    ],
    correctIndex: 1
  },
  {
    department: "Medier og kommunikasjon",
    question: "Hva betyr opphavsrett?",
    answers: [
      "Rett til å kopiere alt",
      "Rettigheter til eget kreativt arbeid",
      "Rett til gratis programvare",
      "Rett til reklame"
    ],
    correctIndex: 1
  },
  {
    department: "Medier og kommunikasjon",
    question: "Hva betyr medieetikk?",
    answers: ["Regler for datamaskiner", "Ansvar og moral i publisering", "Kameraoppsett", "Filredigering"],
    correctIndex: 1
  },

  // Salg, service og reiseliv
  {
    department: "Salg, service og reiseliv",
    question: "Hva er god kundeservice?",
    answers: [
      "Å ignorere kunder",
      "Å hjelpe kunder på en vennlig og profesjonell måte",
      "Å selge mest mulig",
      "Å snakke lite"
    ],
    correctIndex: 1
  },
  {
    department: "Salg, service og reiseliv",
    question: "Hva betyr serviceinnstilling?",
    answers: ["Å være hjelpsom og løsningsorientert", "Å jobbe alene", "Å snakke lite", "Å jobbe raskt"],
    correctIndex: 0
  },
  {
    department: "Salg, service og reiseliv",
    question: "Hva er markedsføring?",
    answers: ["Å produsere varer", "Å gjøre produkter kjent for kunder", "Å pakke varer", "Å transportere varer"],
    correctIndex: 1
  },
  {
    department: "Salg, service og reiseliv",
    question: "Hva betyr bærekraftig turisme?",
    answers: [
      "Billige turer",
      "Turisme som tar hensyn til miljø og lokalsamfunn",
      "Kortere turer",
      "Bare flyreiser"
    ],
    correctIndex: 1
  },
  {
    department: "Salg, service og reiseliv",
    question: "Hva er et salgsargument?",
    answers: ["En grunn til å kjøpe produktet", "En pris", "En pakke", "En rabatt"],
    correctIndex: 0
  },

  // Informasjonsteknologi og medieproduksjon
  {
    department: "IT og medieproduksjon",
    question: "Hva betyr HTML?",
    answers: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Media Link",
      "Home Tool Markup Language"
    ],
    correctIndex: 0
  },
  {
    department: "IT og medieproduksjon",
    question: "Hva er en algoritme?",
    answers: [
      "En type datamaskin",
      "En steg-for-steg løsning på et problem",
      "En nettside",
      "En database"
    ],
    correctIndex: 1
  },
  {
    department: "IT og medieproduksjon",
    question: "Hva gjør CSS i webdesign?",
    answers: ["Lager databaser", "Bestemmer utseendet på nettsider", "Lagrer data", "Lager servere"],
    correctIndex: 1
  },
  {
    department: "IT og medieproduksjon",
    question: "Hva betyr API?",
    answers: [
      "Application Programming Interface",
      "Advanced Program Internet",
      "Automatic Program Integration",
      "Applied Programming Input"
    ],
    correctIndex: 0
  },
  {
    department: "IT og medieproduksjon",
    question: "Hva er versjonskontroll (Git)?",
    answers: ["Backup av PC", "System for å spore endringer i kode", "Antivirus", "Database"],
    correctIndex: 1
  },

  // Demokrati og medborgerskap
  {
    department: "Demokrati og medborgerskap",
    question: "Hva regnes som mobbing?",
    answers: [
      "En enkelt krangel mellom venner",
      "Gjentatt negativ atferd mot en person over tid",
      "Å være uenig med noen",
      "Å gi konstruktiv kritikk"
    ],
    correctIndex: 1
  },
  {
    department: "Demokrati og medborgerskap",
    question: "Hva betyr demokrati?",
    answers: [
      "At én person bestemmer alt",
      "At folket har makt til å påvirke beslutninger",
      "At lærere bestemmer alt",
      "At ingen bestemmer"
    ],
    correctIndex: 1
  },
  {
    department: "Demokrati og medborgerskap",
    question: "Hva betyr inkludering?",
    answers: [
      "Å holde noen utenfor",
      "Å la alle få være med og føle tilhørighet",
      "Å konkurrere",
      "Å jobbe alene"
    ],
    correctIndex: 1
  },

  // Video-spørsmål
  {
    department: "Video-spørsmål",
    question: "Se videoen og velg riktig alternativ.",
    videoSrc: "assets/quiz-video.mp4",
    answers: ["Alternativ A", "Alternativ B", "Alternativ C", "Alternativ D"],
    correctIndex: 0
  }
];

function getRandomQuestions(count) {
  const shuffled = [...questionPool];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

let questions = getRandomQuestions(10);

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const playerNameInput = document.getElementById("playerName");
const startBtn = document.getElementById("startBtn");
const progress = document.getElementById("progress");
const scoreText = document.getElementById("score");
const questionText = document.getElementById("questionText");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const finalText = document.getElementById("finalText");
const highscoreList = document.getElementById("highscoreList");
const restartBtn = document.getElementById("restartBtn");
const videoWrapper = document.getElementById("videoWrapper");
const questionVideo = document.getElementById("questionVideo");
const progressBar = document.getElementById("progressBar");

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
  questions = getRandomQuestions(10);
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const item = questions[currentIndex];
  progress.textContent = `Sporsmal ${currentIndex + 1}/${questions.length}`;
  scoreText.textContent = `Poeng: ${score}`;
  progressBar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  questionText.textContent = `${item.department}: ${item.question}`;
  feedback.textContent = "";
  nextBtn.classList.add("hidden");
  answers.innerHTML = "";

  if (item.videoSrc) {
    videoWrapper.classList.remove("hidden");
    questionVideo.src = item.videoSrc;
  } else {
    videoWrapper.classList.add("hidden");
    questionVideo.removeAttribute("src");
  }

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.type = "button";
    button.addEventListener("click", () => handleAnswer(index));
    answers.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  const item = questions[currentIndex];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((button) => {
    button.disabled = true;
  });

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
  if (currentIndex < questions.length) {
    renderQuestion();
    return;
  }
  finishQuiz();
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
