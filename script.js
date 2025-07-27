document.addEventListener("DOMContentLoaded", () => {
    const starCategories = ["teaching", "infra", "food", "placement"];

    starCategories.forEach(id => {
        const container = document.getElementById(id);
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("i");
            star.classList.add("fa-solid", "fa-star");
            star.dataset.rating = i;

            star.addEventListener("click", () => {
                container.querySelectorAll("i").forEach(s => s.classList.remove("active"));
                for (let j = 0; j < i; j++) {
                    container.children[j].classList.add("active");
                }
            });

            container.appendChild(star);
        }
    });
});

function showThanks(event) {
    event.preventDefault();
    document.getElementById("feedbackForm").classList.add("hidden");
    document.getElementById("thankYouMessage").classList.remove("hidden");

    const quotes = [
        "“Feedback is the breakfast of champions.” 🥣",
        "“Your words help us grow and improve!” 🌱",
        "“Every opinion matters. Thank you!” 💡",
        "“Learning starts with listening — thank you!” 👂",
        "“Great institutions are built on honest feedback.” 🏛️"
    ];

    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("randomQuote").textContent = quotes[random];

    return false;
}
