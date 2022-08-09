let money = [];

let five = 0;
let ten = 0;
for (let index = 0; index < money.length; index++) {
  switch (money[index]) {
    case 5:
      five += 1;
      console.log("Возьмите стакан шоро");

      break;
    case 10:
      if (five == 0) {
        alert("Не могу продать Вам шоро, у меня нет сдачи");
      } else {
        five -= 1;
        ten += 1;
      }
      console.log("Возьмите стакан шоро и сдачу 5с.");

      break;
    case 20:
      if (ten == 0 && five == 0) {
        alert("Не могу продать Вам шоро, у меня нет сдачи");
      } else {
        five -= 1;
        ten -= 1;
      }
      console.log("Возьмите стакан шоро и сдачу 15с.");
      break;

    default:
      break;
  }
}
