
  document.addEventListener("DOMContentLoaded", function () {

    const btns = document.querySelectorAll(".questions button");

    //Toggle les Buttons yes/no
    btns.forEach(btn => {
        btn.addEventListener("click", (event) => {
            if(btn.classList.contains("active")){
                btn.classList.remove("active")
            } else {
                btn.classList.add("active")
            }
        })
    });

    const dateInput = document.getElementById("dateInput");
    console.log(dateInput)
    dateInput.click()
  });

