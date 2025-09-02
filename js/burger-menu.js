document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.header__mobile-menu');
    const body = document.body;

    // Функция открытия/закрытия меню
    function toggleMenu() {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Управление navbar при мобильном меню
        const headerTop = document.querySelector('.header__top');
        
        if (mobileMenu.classList.contains('active')) {
            headerTop.classList.add('menu-open');
            document.body.style.paddingTop = '0px';
        } else {
            headerTop.classList.remove('menu-open');
            const paddingTop = window.innerWidth <= 968 ? '80px' : '96px';
            document.body.style.paddingTop = paddingTop;
        }
    }

    // Обработчик клика по бургеру
    burger.addEventListener('click', toggleMenu);

    // Закрытие меню при клике на ссылку
    const mobileLinks = document.querySelectorAll('.header__mobile-nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Закрытие меню при изменении размера экрана
    window.addEventListener('resize', () => {
        if (window.innerWidth > 968) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });


});