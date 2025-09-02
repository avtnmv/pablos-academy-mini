document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact__form');
    const checkbox = document.querySelector('.contact__checkbox');
    const submitBtn = document.querySelector('.contact__form-btn');
    
    if (form && checkbox && submitBtn) {
        form.addEventListener('submit', function(e) {
            // Проверяем, отмечен ли чекбокс согласия
            if (!checkbox.checked) {
                e.preventDefault(); // Предотвращаем отправку формы
                
                // Добавляем визуальную индикацию ошибки
                checkbox.parentElement.classList.add('error');
                
                // Показываем сообщение об ошибке
                showErrorMessage('Будь ласка, підтвердіть згоду на обробку даних');
                
                return false;
            }
            
            // Если чекбокс отмечен, убираем класс ошибки
            checkbox.parentElement.classList.remove('error');
        });
        
        // Убираем класс ошибки при клике на чекбокс
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.parentElement.classList.remove('error');
                hideErrorMessage();
            }
        });
    }
    
    function showErrorMessage(message) {
        // Удаляем предыдущее сообщение об ошибке, если оно есть
        hideErrorMessage();
        
        // Создаем элемент для сообщения об ошибке
        const errorDiv = document.createElement('div');
        errorDiv.className = 'contact__form-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ff4444;
            font-size: 14px;
            text-align: center;
            font-family: var(--font-space-grotesk);
            position: absolute;
            bottom: -25px;
            left: 0;
            right: 0;
            z-index: 10;
        `;
        
        // Вставляем сообщение в контейнер чекбокса
        const checkboxLabel = document.querySelector('.contact__checkbox-label');
        
        if (checkboxLabel) {
            checkboxLabel.style.position = 'relative';
            checkboxLabel.appendChild(errorDiv);
        }
    }
    
    function hideErrorMessage() {
        const existingError = document.querySelector('.contact__form-error');
        if (existingError) {
            existingError.remove();
        }
    }
});
