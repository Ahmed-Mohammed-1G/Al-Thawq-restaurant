
let animationId = null;

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (!href || href === "#") return;

        const target = document.querySelector(href);

        if (!target) return;

        e.preventDefault();

        if (animationId) {
            cancelAnimationFrame(animationId);
        }

        const start = window.scrollY;
        const targetPosition =
            target.getBoundingClientRect().top + window.scrollY;

        const distance = targetPosition - start;
        const duration = 1200;

        let startTime = null;

        function animateScroll(currentTime) {

            if (startTime === null) {
                startTime = currentTime;
            }

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(
                0,
                start + distance * ease
            );

            if (progress < 1) {
                animationId = requestAnimationFrame(animateScroll);
            } else {
                animationId = null;
            }
        }

        animationId = requestAnimationFrame(animateScroll);

    });

});