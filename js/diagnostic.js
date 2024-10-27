document.addEventListener("DOMContentLoaded", () => {

    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            toggleButtons.forEach((b) => {
                b.classList.remove("active");
            })
            btn.classList.add("active");
        })
    })

})