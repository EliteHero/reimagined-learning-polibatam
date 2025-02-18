import { handleHeaderScroll } from "./features/headerScroll";
import { prodiDragToScroll } from "./features/prodiDragToScroll";

document.addEventListener('DOMContentLoaded', () => {
    handleHeaderScroll();
    prodiDragToScroll();
})