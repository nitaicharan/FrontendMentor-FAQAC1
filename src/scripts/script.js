document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach(item => {
        item.addEventListener("click", e => {
            const description = document.querySelector(`#${e.target.id} ~ p`);
            const arrow = document.querySelector(`#${e.target.id} > img`);

            description.style.visibility = description.style.visibility == '' ? 'visible' : '';
            description.style.height = description.style.height == '' ? 'auto' : '';

            arrow.style.transform = arrow.style.transform == '' ? 'rotate(180deg)' : '';
        });
    });
});