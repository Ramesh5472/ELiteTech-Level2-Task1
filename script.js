let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('button'));
let displayValue = '';

buttons.map(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerText;
    
    if (buttonText === 'C') {
      displayValue = '';
      display.innerText = '0';
    } else if (buttonText === 'DEL') {
      displayValue = displayValue.slice(0, -1);
      display.innerText = displayValue || '0';
    } else if (buttonText === '=') {
      try {
        displayValue = eval(displayValue).toString();
        display.innerText = displayValue;
      } catch {
        display.innerText = 'Error';
        displayValue = '';
      }
    } else {
      if (displayValue === '0' && buttonText !== '.') {
        displayValue = buttonText;
      } else {
        displayValue += buttonText;
      }
      display.innerText = displayValue;
    }
  });
});
