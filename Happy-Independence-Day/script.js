document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.headline', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
    gsap.from('.subheading', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.3 });

    gsap.from('.card', {
        scrollTrigger: {
            trigger: '.cards-section',
            start: 'top 85%',
        },
        duration: 1,
        y: 80,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.countdown-section h2', {
        scrollTrigger: {
            trigger: '.countdown-section',
            start: 'top 85%',
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.time-card', {
        scrollTrigger: {
            trigger: '.countdown',
            start: 'top 85%',
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Floating Timer Creation
    const floatingTimer = document.createElement('div');
    floatingTimer.className = 'floating-timer';

    document.body.appendChild(floatingTimer);

    // Countdown Timer
    const countdown = () => {
        const countDate = new Date('August 15, 2025 00:00:00').getTime();
        const now = Date.now();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(gap / day);
        const hours = Math.floor((gap % day) / hour);
        const minutes = Math.floor((gap % hour) / minute);
        const seconds = Math.floor((gap % minute) / second);

        // Update main timer
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    };

    setInterval(countdown, 1000);


    // Confetti Effect (Optimized for Mobile)
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#FF9933', '#FFFFFF', '#138808', '#FFD700', '#00FFFF'];

    const createConfetti = () => {
        const total = window.innerWidth < 768 ? 40 : 100;
        for (let i = 0; i < total; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.cssText = `
                position:absolute;
                left:${Math.random() * 100}vw;
                top:${Math.random() * 100}vh;
                width:${Math.random() * 8 + 4}px;
                height:${Math.random() * 8 + 4}px;
                background-color:${colors[Math.floor(Math.random() * colors.length)]};
                opacity:${Math.random()};
                animation:fall ${Math.random() * 5 + 5}s linear infinite;
            `;
            confettiContainer.appendChild(confetti);
        }
    };

    createConfetti();

    // Confetti animation style
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
