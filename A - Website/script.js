/* ================================= */
/* OPEN LOVE PAGE */
/* ================================= */

function openHeart() {

    hideAll();

    document.querySelector("#love-page").style.display = "flex";

    const music =
        document.querySelector("#loveMusic");

    music.volume = 0.35;

    music.play().catch(function () {

        console.log("Music waiting for interaction.");

    });

    window.scrollTo(0, 0);
}


/* ================================= */
/* STORY */
/* ================================= */

function showStory() {

    hideAll();

    document.querySelector("#story").style.display =
        "block";

    window.scrollTo(0, 0);
}


/* ================================= */
/* MEMORIES */
/* ================================= */

function showMemories() {

    hideAll();

    document.querySelector("#memories").style.display =
        "block";

    window.scrollTo(0, 0);
}


/* ================================= */
/* FINAL LETTER */
/* ================================= */

function showFinal() {

    hideAll();

    document.querySelector("#final").style.display =
        "block";

    window.scrollTo(0, 0);
}


/* ================================= */
/* PROPOSAL */
/* ================================= */

function showProposal() {

    hideAll();

    document.querySelector("#proposal").style.display =
        "flex";

    document.querySelector("#proposal-buttons").style.display =
        "flex";

    document.querySelector("#yes-response").style.display =
        "none";

    document.querySelector("#think-response").style.display =
        "none";

    window.scrollTo(0, 0);
}


/* ================================= */
/* SHE SAID YES ❤️ */
/* ================================= */

function sayYes() {

    document.querySelector("#proposal-buttons").style.display =
        "none";

    document.querySelector("#yes-response").style.display =
        "block";

    createCelebration();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================= */
/* LET ME THINK */
/* ================================= */

function thinkResponse() {

    document.querySelector("#proposal-buttons").style.display =
        "none";

    document.querySelector("#think-response").style.display =
        "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================================= */
/* GO HOME */
/* ================================= */

function goHome() {

    hideAll();

    document.querySelector("#home").style.display =
        "block";

    window.scrollTo(0, 0);
}


/* ================================= */
/* HIDE EVERYTHING */
/* ================================= */

function hideAll() {

    document.querySelector("#home").style.display =
        "none";

    document.querySelector("#love-page").style.display =
        "none";

    document.querySelector("#story").style.display =
        "none";

    document.querySelector("#memories").style.display =
        "none";

    document.querySelector("#final").style.display =
        "none";

    document.querySelector("#proposal").style.display =
        "none";
}


/* ================================= */
/* FLOATING HEARTS */
/* ================================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add(
        "floating-heart"
    );

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 6000);
}


setInterval(
    createHeart,
    500
);


/* ================================= */
/* YES CELEBRATION */
/* ================================= */

function createCelebration() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        setTimeout(function () {

            const heart =
                document.createElement("div");

            heart.classList.add(
                "floating-heart"
            );

            heart.innerHTML =
                Math.random() > 0.5
                ? "❤️"
                : "💖";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                Math.random() * 25 + 20 + "px";

            heart.style.animationDuration =
                Math.random() * 2 + 3 + "s";

            document.body.appendChild(heart);

            setTimeout(function () {

                heart.remove();

            }, 6000);

        }, i * 100);

    }
}