// Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

let countA = 0;

  const funcA = () => {
    countA++;

    funcA();
  };

  try {
    funcA();
  } catch 
   (e) {
    console.log(countA); // 13936
  }


  let countB = 0;

  const funcB = () => {
    
    const exampleVariableA = countB + 1;
    const exampleVariableB = countB + 2;
    const exampleVariableC = countB + 3;

    countB++;

    funcB();
  };

  try {
    funcB();
  } catch (e) {
    console.log(countB); // 10452
  }