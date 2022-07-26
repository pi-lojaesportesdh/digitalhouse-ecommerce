let addBtn = document.querySelectorAll("#buyProduct");

addBtn.forEach(btn => btn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(addBtn);
}));
