const buttons = document.querySelectorAll("[data-speech]");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const panel = document.getElementById(button.dataset.speech);
        const willOpen = panel.hasAttribute("hidden");
        panel.toggleAttribute("hidden");
        button.classList.toggle("is-on", willOpen);
        button.textContent = willOpen ? "Скрыть текст" : "Показать текст";
    });
});

document.querySelectorAll(".photo img").forEach((img) => {
    img.addEventListener("error", () => {
        const box = document.createElement("div");
        box.className = "photo-missing";
        box.textContent = "Фото пока не добавлено";
        img.replaceWith(box);
    });
});
