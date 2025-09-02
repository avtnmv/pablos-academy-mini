document.addEventListener('DOMContentLoaded', function() {
    const programCards = document.querySelectorAll('.program__card');
    
    // Функция для выравнивания высоты заголовков в рядах
    function equalizeRowHeights() {
        // Проверяем, не мобильное ли это устройство (одна колонка)
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // На мобильных сбрасываем все принудительные высоты
            programCards.forEach(card => {
                card.style.minHeight = '';
                const title = card.querySelector('.program__card-title');
                if (title) {
                    title.style.minHeight = '';
                }
            });
            return;
        }
        
        // Выравниваем заголовки по рядам (каждые 2 карточки)
        for (let i = 0; i < programCards.length; i += 2) {
            const card1 = programCards[i];
            const card2 = programCards[i + 1];
            
            if (card2) {
                const title1 = card1.querySelector('.program__card-title');
                const title2 = card2.querySelector('.program__card-title');
                
                if (title1 && title2) {
                    // Сбрасываем высоту заголовков
                    title1.style.minHeight = 'auto';
                    title2.style.minHeight = 'auto';
                    
                    // Измеряем высоты заголовков
                    const titleHeight1 = title1.offsetHeight;
                    const titleHeight2 = title2.offsetHeight;
                    const maxTitleHeight = Math.max(titleHeight1, titleHeight2);
                    
                    // Устанавливаем одинаковую высоту заголовков
                    title1.style.minHeight = maxTitleHeight + 'px';
                    title2.style.minHeight = maxTitleHeight + 'px';
                }
                
                // Если обе карточки закрыты - выравниваем общую высоту
                if (!card1.classList.contains('expanded') && !card2.classList.contains('expanded')) {
                    // Временно сбрасываем минимальную высоту для измерения
                    card1.style.minHeight = 'auto';
                    card2.style.minHeight = 'auto';
                    
                    // Измеряем высоты
                    const height1 = card1.offsetHeight;
                    const height2 = card2.offsetHeight;
                    const maxHeight = Math.max(height1, height2);
                    
                    // Устанавливаем минимальную высоту
                    card1.style.minHeight = maxHeight + 'px';
                    card2.style.minHeight = maxHeight + 'px';
                } else {
                    // Если хотя бы одна карточка раскрыта - сбрасываем минимальную высоту карточек
                    if (!card1.classList.contains('expanded')) {
                        card1.style.minHeight = 'auto';
                    }
                    if (!card2.classList.contains('expanded')) {
                        card2.style.minHeight = 'auto';
                    }
                }
            }
        }
    }
    
    // Выравниваем высоту при загрузке
    setTimeout(equalizeRowHeights, 100);
    
    // Выравниваем высоту при изменении размера окна
    window.addEventListener('resize', () => {
        setTimeout(equalizeRowHeights, 100);
    });
    
    programCards.forEach(card => {
        card.addEventListener('click', function() {
            // Переключаем класс expanded
            card.classList.toggle('expanded');
            
            // Через задержку (после анимации) выравниваем высоты
            setTimeout(() => {
                equalizeRowHeights();
            }, 600);
        });
    });
});
