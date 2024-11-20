const wheel = document.getElementById('wheel');
const spinButtons = document.querySelectorAll('.buttons_button');

// Слушатель на колесо для вращения
wheel.addEventListener('click', () => {
	spinWheel();
})

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