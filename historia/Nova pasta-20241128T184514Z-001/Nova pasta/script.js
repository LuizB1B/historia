let currentStory = 0;
const storyText = {
  start: "Após muitos anos de ausência, o rei finalmente retornou ao seu reino. O que ele fará ao chegar?",
  choice1: "O rei decide convocar uma reunião com seus súditos. Ele sente que precisa ouvir o povo e entender como o reino está em sua ausência.",
  choice2: "O rei decide ir diretamente ao castelo e meditar sozinho. Ele sente que precisa de um momento de reflexão antes de tomar qualquer decisão.",
  ending1: "Na reunião, o rei ouviu as preocupações e as esperanças do povo. Ele tomou decisões sábias e restaurou a paz e a prosperidade no reino.",
  ending2: "Após refletir sozinho, o rei compreendeu as mudanças que ocorreram no reino. Ele se sentiu mais preparado para liderar com sabedoria e força renovada.",
};

function makeChoice(choice) {
  const storyElement = document.getElementById("story");
  const choicesElement = document.getElementById("choices");

  if (choice === 'choice1') {
    storyElement.textContent = storyText.choice1;
    choicesElement.innerHTML = `
      <button class="choice" onclick="makeChoice('ending1')">Ouvir os súditos e tomar decisões</button>
      <button class="choice" onclick="makeChoice('start')">Voltar e escolher outro caminho</button>
    `;
  } else if (choice === 'choice2') {
    storyElement.textContent = storyText.choice2;
    choicesElement.innerHTML = `
      <button class="choice" onclick="makeChoice('ending2')">Meditar e refletir sozinho</button>
      <button class="choice" onclick="makeChoice('start')">Voltar e escolher outro caminho</button>
    `;
  } else if (choice === 'ending1') {
    storyElement.textContent = storyText.ending1;
    choicesElement.innerHTML = <button class="choice" onclick="makeChoice('start')">Reiniciar a Aventura</button>;
  } else if (choice === 'ending2') {
    storyElement.textContent = storyText.ending2;
    choicesElement.innerHTML = <button class="choice" onclick="makeChoice('start')">Reiniciar a Aventura</button>;
  } else if (choice === 'start') {
    storyElement.textContent = storyText.start;
    choicesElement.innerHTML = `
      <button class="choice" onclick="makeChoice('choice1')">Convocar uma reunião com os súditos</button>
      <button class="choice" onclick="makeChoice('choice2')">Ir diretamente ao castelo e meditar sozinho</button>
    `;
  }
}