const zpInput = document.getElementById('task10-input-zp');
const goalInput = document.getElementById('task10-input-goal');
const task10Res = document.getElementById('task10-result');
const task10 = () => {
  const percent = 20;

  const zp = Number(zpInput.value);
  const goal = +goalInput.value;
  const zpPart = zp * percent / 100;
  const month = Math.ceil(goal / zpPart)

  task10Res.innerHTML = `ВАМ ПОТРЕБУЕТСЯ: ${month} Месяцев`
}
