/***********************************************
 1) QUIZ-FRAGEN
 ***********************************************/
 const quizData = [
    {
      question: "Was ist dir wichtiger, wenn du am Wochenende etwas unternehmen willst?",
      optionA: {
        text: "Ein entspannter Abend mit Freund*innen zu Hause",
        riskPoints: 0,
        image: "assets/images/friends-chill.jpg", 
      },
      optionB: {
        text: "Eine ausgedehnte Partynacht mit Alkohol",
        riskPoints: 1,
        image: "assets/images/party-night.jpg",
      },
    },
    {
      question: "Womit verbringst du am liebsten deinen freien Tag?",
      optionA: {
        text: "Sport oder Spaziergang in der Natur",
        riskPoints: 0,
        image: "assets/images/nature-walk.jpg",
      },
      optionB: {
        text: "Planlos 'abhängen' und nichts tun, evtl. ein paar Drinks",
        riskPoints: 1,
        image: "assets/images/hanging-out.jpg",
      },
    },
    {
      question: "Wie gehst du mit Stress in der Schule / Arbeit um?",
      optionA: {
        text: "Suche nach konstruktiven Auswegen (Sport, Musik, Gespräche)",
        riskPoints: 0,
        image: "assets/images/coping-healthy.jpg",
      },
      optionB: {
        text: "Versuche, mit Rauschmitteln oder exzessiven Aktivitäten abzuschalten",
        riskPoints: 1,
        image: "assets/images/stress-relief-party.jpg",
      },
    },
    {
      question: "Deine Freunde schlagen vor, etwas richtig Verrücktes zu machen. Was tust du?",
      optionA: {
        text: "Überlege erst, ob ich mich damit wohlfühle und ob’s zu riskant ist",
        riskPoints: 0,
        image: "assets/images/thinking.jpg",
      },
      optionB: {
        text: "Ich bin sofort dabei – Hauptsache Adrenalin!",
        riskPoints: 1,
        image: "assets/images/adrenaline.jpg",
      },
    },
    {
      question: "Du bist im Club. Wie verhältst du dich bei Alkohol?",
      optionA: {
        text: "Behalte den Überblick, kenne meine Grenzen",
        riskPoints: 0,
        image: "assets/images/club-moderation.jpg",
      },
      optionB: {
        text: "Trinke mit, bis ich den Kick spüre – die anderen machen’s ja auch",
        riskPoints: 1,
        image: "assets/images/club-drink.jpg",
      },
    },
    {
      question: "Was reizt dich stärker an einem freien Wochenende?",
      optionA: {
        text: "Einen Tagesausflug planen (z.B. Wandern, Sightseeing)",
        riskPoints: 0,
        image: "assets/images/trip-wander.jpg",
      },
      optionB: {
        text: "Komplett durchfeiern und erst am nächsten Tag heimkommen",
        riskPoints: 1,
        image: "assets/images/through-party.jpg",
      },
    },
    {
      question: "Du erlebst eine schwierige Phase. Wie holst du dir Hilfe oder Ablenkung?",
      optionA: {
        text: "Suche gezielt Freunde / Familie auf, evtl. Hilfe bei Fachstellen",
        riskPoints: 0,
        image: "assets/images/help-friends.jpg",
      },
      optionB: {
        text: "Gehe lieber allein feiern oder ziehe mich mit (legalen/illegalen) Substanzen zurück",
        riskPoints: 1,
        image: "assets/images/isolation-party.jpg",
      },
    },
    {
      question: "Auf einer Party werden auch stärkere Substanzen angeboten. Was ist dein erster Gedanke?",
      optionA: {
        text: "\"Nein, danke\" – möchte kein Risiko eingehen",
        riskPoints: 0,
        image: "assets/images/no-drugs.jpg",
      },
      optionB: {
        text: "Ausprobieren – vielleicht wird’s ein guter Kick, wer weiß?",
        riskPoints: 1,
        image: "assets/images/drugs-curiosity.jpg",
      },
    },
    {
      question: "Wie stehst du zu dem Satz: \"Man muss immer neue Kicks erleben, damit das Leben spannend bleibt\"?",
      optionA: {
        text: "Finde ich nicht. Es gibt genug gesunde Wege, mein Leben spannend zu gestalten",
        riskPoints: 0,
        image: "assets/images/healthy-life.jpg",
      },
      optionB: {
        text: "Stimmt total – ich brauche immer irgendwas Neues, notfalls auch riskant",
        riskPoints: 1,
        image: "assets/images/alway-need-kicks.jpg",
      },
    },
    {
      question: "Wie hoch schätzt du dein eigenes Kontrollbedürfnis ein?",
      optionA: {
        text: "Relativ hoch. Ich behalte lieber Kontrolle über mein Verhalten",
        riskPoints: 0,
        image: "assets/images/self-control.jpg",
      },
      optionB: {
        text: "Kontrolle ist überbewertet. Lieber voll ins Risiko gehen!",
        riskPoints: 1,
        image: "assets/images/high-risk.jpg",
      },
    },
  ];
  
  /***********************************************
   2) QUIZ-LOGIK
   ***********************************************/
  
  // Index für aktuelle Frage und Punkte-Score
  let currentQuestionIndex = 0;
  let score = 0;
  
  // HTML-Container für Quiz und Ergebnis holen
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  
  /**
   * Diese Funktion rendert die aktuelle Frage.
   * Sobald alle Fragen durch sind, zeigt sie das Ergebnis.
   */
  function renderQuestion() {
    // Wenn wir alle Fragen abgefragt haben, Ergebnis anzeigen
    if (currentQuestionIndex >= quizData.length) {
      showResult();
      return;
    }
  
    // Aktuelle Frage laden
    const questionObj = quizData[currentQuestionIndex];
  
    // HTML-Code für Frage und Optionen zusammenbauen
    quizContainer.innerHTML = `
      <div class="question">
        <h2>${questionObj.question}</h2>
      </div>
      <div class="options">
        <div class="option" id="optionA">
          ${
            questionObj.optionA.image
              ? `<img src="${questionObj.optionA.image}" alt="Option A" class="option-image">`
              : ""
          }
          <p>${questionObj.optionA.text}</p>
        </div>
        <div class="option" id="optionB">
          ${
            questionObj.optionB.image
              ? `<img src="${questionObj.optionB.image}" alt="Option B" class="option-image">`
              : ""
          }
          <p>${questionObj.optionB.text}</p>
        </div>
      </div>
    `;
  
    // Event Listener für Klick auf Option A
    document.getElementById("optionA").addEventListener("click", () => {
      score += questionObj.optionA.riskPoints;
      currentQuestionIndex++;
      renderQuestion();
    });
  
    // Event Listener für Klick auf Option B
    document.getElementById("optionB").addEventListener("click", () => {
      score += questionObj.optionB.riskPoints;
      currentQuestionIndex++;
      renderQuestion();
    });
  }
  
  /**
   * Zeigt das Ergebnis an, wenn alle Fragen durch sind.
   */
  function showResult() {
    // Quiz ausblenden, Ergebniscontainer einblenden
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
  
    let riskLevelText = "";
  
    // einfache Kategorisierung nach Score 
    // (bei 10 Fragen => max. 10 Punkte)
    if (score <= 3) {
      riskLevelText = "Du neigst eher zu sicherem, reflektiertem Verhalten. Deine Risikobereitschaft ist niedrig.";
    } else if (score <= 6) {
      riskLevelText = "Du liebst Abwechslung und probierst schon mal was Neues aus, hältst aber meist noch Grenzen ein.";
    } else {
      riskLevelText = "Vorsicht! Dein Verlangen nach 'Kicks' oder Rauscherfahrungen könnten dich eher in riskante Situationen bringen.";
    }
  
    // HTML-Inhalt für das Ergebnis
    resultContainer.innerHTML = `
      <h2>Ergebnis</h2>
      <p>Dein Score: ${score} von ${quizData.length}</p>
      <p>${riskLevelText}</p>
      <button id="restart-btn">Nochmal starten</button>
    `;
  
    // Button, um das Quiz neu zu starten
    document.getElementById("restart-btn").addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      resultContainer.style.display = "none";
      quizContainer.style.display = "block";
      renderQuestion();
    });
  }
  renderQuestion();