export function prodiDragToScroll() {
    const slider = document.querySelector('.prodi__slider')
    let isDragging = false
    let moved = false

    const dragging = (e) => {
        if (!isDragging) return;
        slider.classList.add("dragging");
        slider.scrollLeft -= e.movementX;
        moved = true;
    }

    const dragStop = () => {
        isDragging = false;
        setTimeout(() => moved = false, 50);
        slider.classList.remove("dragging");
    }

    slider.addEventListener("click", (e) => {
        if (moved) return

        const item = e.target.closest('.prodi__card')
        if (item && item.dataset.url) {
            window.open(item.dataset.url, '_blank')
        }
    })

    slider.addEventListener("mousedown", () => {
        isDragging = true
        moved = false
    });
    slider.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
}