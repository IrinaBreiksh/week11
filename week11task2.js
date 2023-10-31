





//Задание 5
//Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
//Подсказка: Используйте свойство value для изменения значения элемента формы

// function makeFive() {
// 	const input = document.getElementById('practicum5');
// 	input.value = 'Новое значение';
// }

// document.querySelector('.b-5').onclick = makeFive;



//Задание 8
//Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

// function makeEight() {
// 	const list = document.getElementById('practicum8');
//     const newLi = document.createElement('li');
//     newLi.textContent = 'Новый элемент';
// 	list.append(newLi);
// }

// document.querySelector('.b-8').onclick = makeEight;

//Задание 9
//Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
//Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.


// function makeNine() {
// 	const select = document.getElementById('practicum9');
// 	const newOption = document.createElement('option');
// 	newOption.textContent = 'Новый вариант';
// 	select.append(newOption); 
// }

// document.querySelector('.b-9').onclick = makeNine;


//Задание 11
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
//Подсказка: Используйте свойство style для изменения стилей элемента

// function makeEleven() {
// 	const div = document.getElementById('practicum11');
// 	div.style.height = '200px';
// 	div.style.width = '400px';
// 	div.classList.toggle('practicum11');
// }

// document.querySelector('.b-11').onclick = makeEleven;


//Задание 13
//Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
//Подсказка: Используйте метод для изменения текстового содержимого элемента li

// function makeThirteen() {
// 	const olFirst = document.getElementsByTagName('ol');
// 	olFirst[0].innerText = 'Первый';
// }

// document.querySelector('.b-13').onclick = makeThirteen;


//Задание 20
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
//Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>

// function makeTwenty() {
// 	const paragraph = document.getElementById('practicum20');
// 	const newParagraph = document.createElement('p');
// 	newParagraph.textContent = 'Добавлено в начало';
// 	paragraph.prepend(newParagraph);
// }

// document.querySelector('.b-20').onclick = makeTwenty;

//Задание 21
//Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
//Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>

// function makeTwentyOne() {
// 	const paragraph = document.getElementById('practicum21');
// 	const newParagraph = document.createElement('p');
// 	newParagraph.textContent = 'Добавлено в конец';
// 	paragraph.append(newParagraph);
// }

// document.querySelector('.b-21').onclick = makeTwentyOne;

//Задание 22
//Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
//Подсказка: Используйте метод hasAttribute для проверки наличия атрибута

// function makeTwentyTwo() {
// 	const image = document.getElementById('practicum22');
// 	const hasImageAttributeSrc = image.hasAttribute('src');
//     const newAttributeSrc = `image = Атрибут "src" присутствует: ${hasImageAttributeSrc}`;
// 	image.setAttribute('src',`${newAttributeSrc}`);
// 	console.log(image.hasAttribute('src'));
// 	console.log(image.getAttribute('src'));
// }

// document.querySelector('.b-22').onclick = makeTwentyTwo;

//Задание 23
//Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
//Подсказка: Используйте метод removeAttribute для удаления атрибута

// function makeTwentyThree() {
// 	const link = document.getElementById('practicum23');
//     link.removeAttribute('href');
// }

// document.querySelector('.b-23').onclick = makeTwentyThree;

//Задание 24
//Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
//Подсказка: Используйте метод setAttribute для установки атрибута

// function makeTwentyFour() {
// 	const input = document.getElementById('practicum24');
// 	input.setAttribute('value','Новое значение');
// }

// document.querySelector('.b-24').onclick = makeTwentyFour;

//Задание 25
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
//Подсказка: Используйте метод setAttribute для добавления атрибута

// function makeTwentyFive() {
// 	const div = document.getElementById('practicum25');
// 	div.setAttribute('data-info','Дополнительная информация');
// 	const newAttributeValue = div.getAttribute('data-info');
// 	console.log(newAttributeValue);
// }

// document.querySelector('.b-25').onclick = makeTwentyFive;

//Задание 26
//Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.
//Подсказка: Используйте метод closest для поиска ближайшего родительского элемента

// const button = document.querySelector('.b-26');
// const parent = button.closest('.parent');

// const makeTwentySix = () => {
// 	parent.style.backgroundColor = 'red';
// };

// document.querySelector('.b-26').onclick = makeTwentySix;

//Задание 27
//Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
//Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.

// function makeTwentySeven() {
//     const div = document.getElementById ('practicum27'); 
// 	const result = div.classList.contains('highlight');
// 	console.log(result);
// }

// document.querySelector('.b-27').onclick = makeTwentySeven;

//Задание 28
//Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
//Подсказка: Используйте метод addEventListener для добавления обработчика события

// const buttonTaskTwentyEight = document.getElementById('button28');

// function handleClick() {
// 	console.log('Кнопка нажата');
// }

// buttonTaskTwentyEight.addEventListener('click', handleClick);



//Добавьте слушатель eventListener на кнопку buttonTaskTwentyEight

//Задание 29
//Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

// const buttonTaskTwentyNine = document.getElementById('input29');

// function handleChange() {
// 	console.log('Значение изменено');
// }

// buttonTaskTwentyNine.addEventListener('click', handleChange);

//Ваш код

//Задание 30
//Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
//Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

// const mouseOver = document.getElementById('div30');

// function handleMouseOver() {
// 	console.log('Курсор наведен на элемент');
// }

// mouseOver.addEventListener('mouseover', handleMouseOver);

const listInput = document.getElementById('list');
const button = document.getElementById('button');
const taskList = document.getElementById('task-list');

function createTask() {
    const taskText = listInput.value;
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.append(newTask);
    listInput.value = ' ';
}

button.addEventListener('click', createTask);

function checkTask(evt) {
    if (evt.target.tagName==='LI'){
        evt.target.classList.toggle('crossed');
    }
}

taskList.addEventListener('mousedown', checkTask);


