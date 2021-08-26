function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let sections = document.querySelectorAll("section");
let arrows_right = document.querySelectorAll(".link svg");

sections.forEach(section => {
    if (isInViewport(section)) {
        section.classList.add("in-viewport");
    }
});