let calculation = localStorage.getItem(`calculation`) || ``;

function updateCalculation(symbol) {
  symbol == ' = ' ? 
    document.querySelector('.calculation').innerHTML = `${calculation} = ${eval(calculation)}`
  : document.querySelector('.calculation').innerHTML = calculation += symbol;
  localStorage.setItem(`calculation`, calculation);
};