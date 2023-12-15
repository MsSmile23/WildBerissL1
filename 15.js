// Задача на асинхронность: напишите асинхронную функцию, которая использует 
// ключевое слово await для ожидания выполнения 
// других асинхронных операций, и возвращает результат выполнения.

const asynk = () => {
    return new Promise ((res,rej) => {
        setTimeout(() => {
            res('Привет')
        }, 200)
    })
}

const fun = async () => {
    const wait = await asynk();
    return wait
}

fun().then(res => console.log(res)).catch(err => console.log(err))