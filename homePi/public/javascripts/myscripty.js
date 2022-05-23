document.querySelector("#slide-items")
.addEventListener("wheel", event => {
    if (event.deltaY > 0) {
        event.target.scrollBy(600, 0);
    } else {
        event.target.scrollBy(-600, 0);
    }
})