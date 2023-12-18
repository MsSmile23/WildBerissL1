// Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для
// элемента на веб-странице, например, плавное изменение его положения или размера.


'use strict'

  const body = document.querySelector('body');
  const ball = document.querySelector('#ball');

  const makeEaseOut = (timing) => {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }


  const bounce = (timeFraction) => {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  const makeAnimation = (options) => {
    const start = performance.now();

    requestAnimationFrame(function makeAnimation(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / options.duration;

      if (timeFraction > 1) timeFraction = 1;

      // вычисление текущего состояния анимации
      let progress = options.timing(timeFraction)

      options.draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }

    });
  }


  ball.addEventListener('click', () => {
    let height = body.clientHeight - ball.clientHeight;

    makeAnimation({
      duration: 1900,
      timing: makeEaseOut(bounce),
      draw(progress) {
        ball.style.top = height * progress + 'px'
      }
    });
  });