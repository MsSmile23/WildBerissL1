// Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис, 
// который разрешается с данными об изображении, когда оно загружено. 
// Когда говорится "промис разрешается с данными об изображении", это означает, 
// что промис должен быть успешно выполнен (resolved) с 
// данными об изображении после того, как изображение будет загружено

const load = (link) => {
    return new Promise((res, rej) => {
        const img = document.createElement('img');
        img.onload = () => {
            res({
                img: img,
                width: img.width,
                height: img.height,
            })
        };
        img.onerror = (err) => {rej(err)}
        img.src = link
    })
}

load('https://inomix.ru/wp-content/uploads/1/3/c/13c06d2e6ffcd8b7061c8e10f2b4e53e.jpeg')
.then(() => console.log('Загружено'))
.catch(() => console.log('Ошибка в загруке'))