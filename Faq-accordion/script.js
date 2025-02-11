document.querySelectorAll(".question").forEach(el => {
    el.addEventListener("click", () => {
        if (el.nextElementSibling?.classList.contains("p")) {
            el.nextElementSibling.remove(); 
            el.querySelector("img").src = "icon-plus.svg";
            return;
        }
        const div = document.createElement("p");
        div.textContent = el.getAttribute("data-answer");
        div.classList.add("p");
        el.insertAdjacentElement("afterend", div);
        el.querySelector("img").src = "icon-minus.svg";
    });
});