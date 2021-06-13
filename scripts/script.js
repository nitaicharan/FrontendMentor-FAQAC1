document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const containerStyle = window.getComputedStyle(container);
    const boxImage = document.querySelector(".container--image");
    const boxImageStyle = window.getComputedStyle(boxImage);

    const addPx = (content) => content + "px";

    setBoxPosition();

    window.addEventListener("resize", setBoxPosition);

    function setBoxPosition() {
        boxImage.style.position = "absolute";
        boxImage.style.left = addPx(parseFloat(containerStyle.marginLeft) - 230 / 2);
        boxImage.style.top = addPx((parseFloat(containerStyle.height) - 70) / 2);
    }
});