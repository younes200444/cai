document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-button");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleButtons.forEach((b) => {
        b.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });

  const anatomy = document.querySelector(".anatomy");
  const popup = document.querySelector(".popup-container");
  const searchBar = document.getElementById("searchBar");
  const detectionMarker = document.querySelector(".detection-marker");

  const slideUp = () => {
    popup.classList.add("slide-up");
    detectionMarker.classList.remove("hide")
    anatomy.classList.add("scale")
  }
  anatomy.addEventListener("click", (event) => {
    slideUp()
  });

  searchBar.addEventListener("mousedown", (event) => {
    slideUp()
  })

  const zoneListItems = document.querySelectorAll(".zone-list li");

  zoneListItems.forEach(item => {
    item.addEventListener("click", (event) => {
      window.location.href = 'http://127.0.0.1:5500/src/home.html'
    })

  })
});
