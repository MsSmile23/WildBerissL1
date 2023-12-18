// Посчитайте сколько раз можно вызвать функцию `document.write()` внутри `document.write()`. Объясните результат.

document.write(document.write(document.write(document.write(
    document.write(document.write(document.write(document.write(
      document.write(document.write(document.write(document.write(
        document.write(document.write(document.write(document.write(
          document.write(document.write(document.write(document.write(
            document.write(document.write(document.write(document.write(
              document.write(document.write(document.write(document.write(
  
  )))))))))))))))))))))))))))) // 28 вызовов

  // Я считаю, что документ врайт ограничен исключительно размером колл-стека. 