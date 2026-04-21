document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка при клике на индикатор
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const invitationMessage = document.querySelector('.invitation-message');
            invitationMessage.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Обработка формы RSVP
    const rsvpForm = document.getElementById('rsvpForm');
    const formMessage = document.getElementById('formMessage');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем значения формы
            const name = document.getElementById('name').value;
            const attendance = document.getElementById('attendance').value;
            
            // Простая имитация отправки
            formMessage.textContent = `Благодарим вас, ${name}! Ваш ответ принят. Мы свяжемся с вами для уточнения деталей.`;
            formMessage.style.display = 'block';
            formMessage.style.backgroundColor = 'rgba(180, 189, 170, 0.3)';
            formMessage.style.color = '#4a5345';
            formMessage.style.border = '1px solid rgba(162, 172, 148, 0.5)';
            
            // Сбрасываем форму
            rsvpForm.reset();
            
            // Плавная прокрутка к сообщению
            formMessage.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
            
            // Скрываем сообщение через 6 секунд
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 6000);
        });
    }
});


// Музыкальный плеер
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('weddingAudio');
    const musicBtn = document.getElementById('musicToggle');
    let isPlaying = false;
    
    // Проверяем, есть ли аудио элемент
    if (audio && musicBtn) {
        // Устанавливаем громкость (опционально)
        audio.volume = 0.5;
        
        musicBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (isPlaying) {
                // Останавливаем музыку
                audio.pause();
                musicBtn.classList.remove('playing');
                musicBtn.innerHTML = '<i class="fas fa-music"></i><span>Включить музыку</span>';
                isPlaying = false;
            } else {
                // Запускаем музыку (нужно взаимодействие с пользователем)
                audio.play().then(() => {
                    musicBtn.classList.add('playing');
                    musicBtn.innerHTML = '<i class="fas fa-volume-up"></i><span>Выключить музыку</span>';
                    isPlaying = true;
                }).catch(error => {
                    console.log('Автовоспроизведение заблокировано браузером. Нажмите кнопку снова.');
                    // Некоторые браузеры блокируют автовоспроизведение
                    // Показываем небольшое уведомление
                    musicBtn.innerHTML = '<i class="fas fa-music"></i><span>Нажмите ещё раз</span>';
                    setTimeout(() => {
                        if (!isPlaying) {
                            musicBtn.innerHTML = '<i class="fas fa-music"></i><span>Включить музыку</span>';
                        }
                    }, 1500);
                });
            }
        });
        
        // Опционально: сохраняем состояние при скролле (не выключаем музыку)
        // Опционально: автоматически пытаемся запустить (но браузеры блокируют)
    }
});
