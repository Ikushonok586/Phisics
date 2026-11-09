const presentationSlides = [
    {
        title: "Цель проекта",
        text: "Главной задачей команды «Аналитики» было разобрать физические параметры атмосферы по данным реального запуска радиозонда. Мы хотели показать, как меняется воздух с высотой, и через расчёты по графикам найти главные закономерности."
    },
    {
        title: "Данные и подготовка",
        text: "Перед запуском на компьютере включили программу приёма сигналов: давление, температура, влажность, скорость и направление ветра. Оболочку шара наполнили газом до нужного объёма. Рядом были фильтр газа, парашют и стропы."
    },
    {
        title: "Результаты и расчёты",
        text: "Зонд поднялся примерно на 29 км. Давление упало с 1015 гПа до 89 гПа — это 926 гПа, или 91,2%. Температура изменилась от +25 °C до −62 °C, перепад 87 °C. Ветер на индикаторе: 19,6 м/с, то есть 70,56 км/ч, направление 293° (WNW)."
    },
    {
        title: "Вопросы для доклада",
        text: "<ul class=\"slide-list\"><li>Что анализировали? Высоту, температуру, давление, влажность и ветер.</li><li>Какие закономерности? Давление падает с высотой, температура опускается до −62 °C и затем растёт, влажность меняется.</li><li>Что удивило? Падение давления с 1015 до 89 гПа.</li><li>Почему это важно? Радиозонд даёт данные для метеорологии и прогноза погоды.</li></ul>"
    }
];

let currentSlideIndex = 0;

const presSlideTitle = document.getElementById("presSlideTitle");
const presSlideText = document.getElementById("presSlideText");
const presStepIndicator = document.getElementById("presStepIndicator");
const presNextBtn = document.getElementById("presNextBtn");
const presPrevBtn = document.getElementById("presPrevBtn");

function updateSlideContent() {
    const slide = presentationSlides[currentSlideIndex];
    presSlideTitle.textContent = slide.title;
    presSlideText.innerHTML = slide.text;
    presStepIndicator.textContent = `Шаг ${currentSlideIndex + 1} из ${presentationSlides.length}`;
    presPrevBtn.disabled = currentSlideIndex === 0;
    presNextBtn.disabled = currentSlideIndex === presentationSlides.length - 1;
}

presNextBtn.addEventListener("click", () => {
    if (currentSlideIndex < presentationSlides.length - 1) {
        currentSlideIndex += 1;
        updateSlideContent();
    }
});

presPrevBtn.addEventListener("click", () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex -= 1;
        updateSlideContent();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        presNextBtn.click();
    }
    if (event.key === "ArrowLeft") {
        presPrevBtn.click();
    }
});

updateSlideContent();
