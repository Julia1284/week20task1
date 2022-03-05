let marvels = JSON.parse(marvelsjson);
let title = document.querySelector('.card-name');
let cardimage = document.querySelector('.image');
let carduniverse = document.querySelector('.card-universy');
let cardalter = document.querySelector('.card-alter');
let cardactivity = document.querySelector('.card-activity');
let cardfriends = document.querySelector('.card-friends');
let cardsuperpower = document.querySelector('.card-superpowers');
let scorediv = document.querySelector('.scorevalue');
let score = document.querySelectorAll('input[name="score"]')
let scoreresult = document.querySelector('.scoreresult')

let i = 0; // номер героя

document.addEventListener('DOMContentLoaded', function (event) {
    // функция выполняется при загрузке страницы
    let marvels = JSON.parse(marvelsjson); // парсим JSON
    getArrFromLocalStorage(marvels[i].name) // проверяем хранилище
})


document.querySelector('.right').addEventListener('click', function () {
    //очищаем радиокнопки от отметки
    for (s of score) {
        s.checked = false
    }
    //очищаем результат голосования
    scoreresult.innerHTML = ''
    //если мы на последнем герое, то дальше i  не увеличивается
    if (i == marvels.length - 1) {
        showHerow(i)
        getArrFromLocalStorage(marvels[i].name)
        return
    }
    i++
    showHerow(i);
    getArrFromLocalStorage(marvels[i].name)


})
document.querySelector('.left').addEventListener('click', function () {
    //очищаем радиокнопки от отметки
    for (s of score) {
        s.checked = false
    }
    //очищаем результат голосования
    scoreresult.innerHTML = ''
    //если мы на первом герое, то дальше i  не уменьшается
    if (i == 0) {
        showHerow(i)
        getArrFromLocalStorage(marvels[i].name)
        return
    }
    i--
    showHerow(i);
    getArrFromLocalStorage(marvels[i].name)


})

let showHerow = function (item) {
    title.innerHTML = marvels[item].name;
    cardimage.src = marvels[item].image;
    carduniverse.innerHTML = `<span> Вселенная: </span> ${marvels [item].universe}`;
    cardalter.innerHTML = `<span> Альтер: </span> ${marvels [item].alter}`;
    cardactivity.innerHTML = `<span> Активность: </span> ${marvels [item].activity}`;
    cardfriends.innerHTML = `<span> Друзья: </span> ${marvels [item].friends}`
    cardsuperpower.innerHTML = `<span> Суперсила: </span> ${marvels [item].superpowers}`

}

document.querySelector('.scorevalue').addEventListener('click', function () {
    // проверяем, какая кнопка отмечена, и ее значение добавляем в результат голосавания
    for (s of score) {
        if (s.checked) {
            scoreresult.innerHTML = `Рейтинг: ${s.value}/5`
            marvels[i].score = s.value
        }

    }
    // добавляем этого героя в localStorage
    setElToLocalStorage(marvels[i].name, marvels[i].score)
})
//получаем элементы из хранилища
getArrFromLocalStorage = (name) => {
    let scoreHero = JSON.parse(localStorage.getItem(name))
    // если героя в хранилище нет, то в результатет пустая  строка, а если есть, то значение добавляем в результат
    if (scoreHero == null) {
        scoreresult.innerHTML = ''
    } else {
        scoreresult.innerHTML = `Рейтинг: ${scoreHero}/5`
    }
}
//добавляем элемент в хранилище
setElToLocalStorage = (name, score) => {
    localStorage.setItem(name, JSON.stringify(score))

}
//localStorage.clear()