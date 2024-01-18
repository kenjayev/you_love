const question = document.querySelectorAll(".question");
const wrapper = document.querySelector(".wrapper");
const noBtn = document.querySelector(".no");
const heart_wrapper = document.querySelector(".heart-wrapper");

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener("mouseover", () => {
    let x =
        Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    let y =
        Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function sayYes() {
    heart_wrapper.textContent = "";
    question[0].classList.toggle("after-animation");
    question[0].classList.toggle("animation");
    question[1].classList.toggle("after-animation");
    question[1].classList.toggle("animation");

    question[0].textContent = "I Love You Too :)";

    rightLeftConfetti();
    centerConfetti();

    let count = 250;
    let i = 0;
    while (i < count) {
        const heart = document.createElement("i");
        heart.textContent = "❤️";

        let x = Math.random() * window.innerWidth;
        let y = (Math.random() * window.innerHeight) / 3 - 25;
        let duration = 3 + Math.random() * 5;
        let delay = Math.floor(Math.random() * 10);

        heart.style.left = x + "px";
        heart.style.top = y + "px";
        heart.style.animationDuration = duration + "s";
        heart.style.animationDelay = delay + "s";
        heart_wrapper.appendChild(heart);

        i++;
    }
}

function rightLeftConfetti() {
    var end = Date.now() + 16 * 100;
    // go Buckeyes!
    var colors = ["#bb0000", "#ffffff"];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
function centerConfetti() {
    var count = 400;
    var defaults = {
        origin: { y: 0.4 },
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}
