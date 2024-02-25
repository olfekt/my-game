
const startGameButton = document.getElementById('startGame');
const drawCardButton = document.getElementById('drawCard');
const stopGameButton = document.getElementById('stopGame');
const gameArea = document.getElementById('gameArea');
const message = document.getElementById('message');

let score = 0;
let moves = 0; // Счетчик ходов
let cards = []; // Массив для хранения карт
let gameContinues = true;

function startGame() {
    score = 0;
    moves = 0;
    cards = []; // Сброс массива карт при начале игры
    gameContinues = true;
    gameArea.style.display = 'block';
    updateMessage("Игра началась. Ваш счет: " + score);
}

function drawCard() {
    if (!gameContinues) return;
    const card = Math.floor(Math.random() * 10) + 1;
    score += card;
    moves++;
    cards.push(card); // Добавление карты в массив
    // Изменение форматирования текста
    updateMessage(moves + "-я карта: " + card + "<br>Счет: " + score + "<br>Предыдущие карты: " + cards.join(", ")); 
    checkGameStatus();
}

function stopGame() {
    gameContinues = false;
    // Изменение форматирования текста
    updateMessage("Игра окончена. Ваш итоговый счет: " + score + "<br>Количество ходов: " + moves + "<br>Ваши карты: " + cards.join(", ")); 
}

function checkGameStatus() {
    if (score > 21) {
        // Изменение форматирования текста
        updateMessage("Вы проиграли. Ваш счет: " + score + "<br>Количество ходов: " + moves + "<br>Ваши карты: " + cards.join(", ")); 
        gameContinues = false;
    } else if (score === 21) {
        // Изменение форматирования текста
        updateMessage("У вас 21! Вы выиграли!<br>Количество ходов: " + moves + "<br>Ваши карты: " + cards.join(", ")); 
        gameContinues = false;
    }
}

function updateMessage(msg) {
    message.innerHTML = msg; // Изменено на innerHTML для поддержки HTML тегов
}

startGameButton.addEventListener('click', startGame);
drawCardButton.addEventListener('click', drawCard);
stopGameButton.addEventListener('click', stopGame);
