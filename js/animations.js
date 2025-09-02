// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Анимация карточек целевой аудитории
if (document.querySelector('.target-audience__card')) {
    gsap.fromTo('.target-audience__card', 
        {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.target-audience',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Анимация FAQ элементов
if (document.querySelector('.faq__item')) {
    gsap.fromTo('.faq__item', 
        {
            opacity: 0,
            x: -30
        },
        {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.faq',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Анимация контактной формы
if (document.querySelector('.contact__form')) {
    gsap.fromTo('.contact__form', 
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.contact',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Анимация футера
if (document.querySelector('.footer')) {
    gsap.fromTo('.footer', 
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.footer',
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Анимация заголовков
const titleElements = document.querySelectorAll('.main__title, .target-audience__title, .faq__title, .contact__form-title');
if (titleElements.length > 0) {
    gsap.fromTo('.main__title, .target-audience__title, .faq__title, .contact__form-title', 
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.main__title, .target-audience__title, .faq__title, .contact__form-title',
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Анимация появления подзаголовка
if (document.querySelector('.main__subtitle')) {
    gsap.fromTo('.main__subtitle', 
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.main__section',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Анимация появления декоративных изображений
if (document.querySelector('.main__fire-img')) {
    gsap.fromTo('.main__fire-img', 
        {
            opacity: 0,
            scale: 0.5,
            rotation: -15
        },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: '.main__section',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

if (document.querySelector('.main__star-img')) {
    gsap.fromTo('.main__star-img', 
        {
            opacity: 0,
            scale: 0.5,
            rotation: 15
        },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: '.main__section',
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Анимация появления текста target-audience
if (document.querySelector('.target-audience__text')) {
    gsap.fromTo('.target-audience__text', 
        {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.target-audience__text',
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        }
    );
}

// Анимация появления модальных окон (только если элементы существуют)
const modalElements = document.querySelectorAll('.video-modal__content, .course-modal__content');
if (modalElements.length > 0) {
    gsap.fromTo('.video-modal__content, .course-modal__content', 
        {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.7)"
        }
    );
}

// Инициализация анимаций при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Обновляем ScrollTrigger после загрузки всех элементов
    ScrollTrigger.refresh();
});
