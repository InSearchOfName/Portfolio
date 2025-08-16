const mainContainer = document.querySelector(".main-container"),
    imagePreview = mainContainer.querySelectorAll(".image-preview"),
    images = mainContainer.querySelectorAll(".imagePreview img"),
    video = mainContainer.querySelectorAll("video");

window.onload = () => {
    mainContainer.onmouseenter = () => {
        images.forEach((image) => {
            image.computedStyleMap.opacity = 0.5;
        })
    }

    mainContainer.onmouseleave = () => {
        images.forEach((image) => {
            image.computedStyleMap.opacity = 1;
        })
    }

    // Animate cards in one by one from the bottom a bit faster
    setTimeout(() => {
        const cards = document.querySelectorAll('.main-container');
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, i * 90 + 40); // faster staggered entrance (was i * 180 + 80)
        });
    }, 100); // start a little sooner (was 300)
}