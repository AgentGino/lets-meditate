const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const instruction = document.getElementById('instruction');

let timer = null;

function startMeditation(breathIn, hold, breathOut) {
  let phase = 0; // 0: breath in, 1: hold, 2: breath out
  let seconds = breathIn;

  startBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');
  instruction.classList.remove('hidden');

  timer = setInterval(() => {
    instruction.textContent = getInstruction(phase, seconds);
    if (seconds === 0) {
      phase = (phase + 1) % 3;
      seconds = phase === 0 ? breathIn : phase === 1 ? hold : breathOut;
    } else {
      seconds--;
    }
  }, 1000);
}

function stopMeditation() {
  clearInterval(timer);
  startBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');
  instruction.classList.add('hidden');
}

function getInstruction(phase, seconds) {
  switch (phase) {
    case 0:
      return `Breath In: ${seconds}`;
    case 1:
      return `Hold: ${seconds}`;
    case 2:
      return `Breath Out: ${seconds}`;
    default:
      return '';
  }
}

startBtn.addEventListener('click', () => startMeditation(5, 5, 10));
stopBtn.addEventListener('click', stopMeditation);
