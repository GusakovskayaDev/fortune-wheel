const wheel = document.getElementById('wheel');
const spinButtons = document.querySelectorAll('.buttons_button');
const spanAttempts = document.querySelector('.atempts');
let attempt = Number(localStorage.getItem('attempt')) || 0;

updateAttempt();

// Слушатель на колесо для вращения
wheel.addEventListener('click', () => {
	if(attempt){
		spinWheel();
		attempt--;
		updateAttempt();
	}else{
		alert('У вас 0 попыток :(');
	}
});

// Функция для случайного вращения
const sectors = 6;

function spinWheel() {
	// Сбрасываем стили
  wheel.style.transition = 'none';
  wheel.style.transform = 'rotate(0deg)';
  
  // Обновляем состояние
	// Добавляем небольшую задержку
  setTimeout(() => {
    // Выбор случайного сектора
    const randomSector = Math.floor(Math.random() * sectors);
		// Вычисляем угол сектора
    const sectorAngle = 360 / sectors;
    const randomDeg = 360 * 3 + randomSector * sectorAngle;

    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${randomDeg}deg)`;
  }, 10);
}

// Функция получение +1 попытки
spinButtons.forEach((button) => {
	button.addEventListener('click', function() {
		attempt++;
		updateAttempt();

		this.classList.add('caseDone');
		this.textContent = 'Начисленно';

		let idDiv = this.getAttribute('data-target');
		console.log(idDiv);
		let div = document.getElementById(idDiv);
		console.log(div);
		div.classList.add('caseDone');
		localStorage.setItem('attempt', attempt);
	});
});

function updateAttempt(){
	spanAttempts.textContent = attempt;
}