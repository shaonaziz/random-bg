const { body } = document;
const titleText = document.getElementById('title');
const paraText = document.getElementById('text');
function changeBackground(number) {
  // Check if background already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset background
  body.className = '';
  // If background already on, turn off, else turn on background
  switch (number) {
    case '1':
      return (previousBackground === 'background-1' ? false : body.classList.add('background-1') || titleText.classList.remove('change-color') || paraText.classList.remove('change-color'));
    case '2':
      return (previousBackground === 'background-2' ? false : body.classList.add('background-2') || titleText.classList.remove('change-color') || paraText.classList.remove('change-color'));
    case '3':
      return (previousBackground === 'background-3' ? false || paraText.classList.remove('change-color') || titleText.classList.remove('change-color'): body.classList.add('background-3') || titleText.classList.add('change-color') || paraText.classList.add('change-color'));
    default:
      break;
  }
}
