// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль.
 //При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
 //Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };




const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
},

randomIntegerFromInterval = (max) => {
  return Math.floor(Math.random() * (max + 1));
},
setRandomColor = () => {
  const _color = colors[randomIntegerFromInterval(colors.length - 1)]
  console.log(_color)
  document.body.style.backgroundColor = _color
}

let interval = undefined

refs.startBtn.addEventListener('click', e => interval = interval ?
interval :
setInterval(() => setRandomColor(), 1000))

refs.stopBtn.addEventListener('click', e => clearInterval(interval))

