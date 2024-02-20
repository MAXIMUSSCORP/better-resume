document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.logos img');

    images.forEach(image => {
        image.style.left = `${Math.random() * 95}vw`;
        image.style.animationDuration = `${Math.random() * 3 + 4}s`;

        image.addEventListener("animationiteration", () => {
            image.style.left = `${Math.random() * 95}vw`;
        });
    });

    const input = document.querySelector('input');

    input.addEventListener("keyup", ({key}) => {
        if (key === "Enter") {
            if (typeof Storage !== "undefined") {
                window.localStorage.setItem("company", input.value);
                changeCard();
            } else {
                console.log("Local storage is not available.");
            }
        }
    })
});

function changeCard() {
    const SCard = document.querySelector('.searchCard');
    const LCard = document.querySelector('.loadCard');

    SCard.remove();

    LCard.style.opacity = 1;
    searchCard();
}

function searchCard() {
    const company = window.localStorage.getItem("company");

    setTimeout(() => {
        document.querySelector('.lds-ring').remove();

        const text = document.getElementById('loadText');

        text.style.opacity = '0';

        setTimeout(function () {
            text.innerHTML = `Found ${company} in our database!`;

            text.style.opacity = '1';

            var animData = {
                container: document.getElementById('animated'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '../icons8-success.json'
            };

            lottie.loadAnimation(animData);

            setTimeout(() => {
                window.location.href = '../CoverLetter/CoverLetter.html';
            }, 2000);
        }, 500);


    }, Math.random() * 5000 + 1000);
}