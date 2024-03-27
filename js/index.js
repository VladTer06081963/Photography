//Burger
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", function () {
  nav.classList.toggle("nav--active");
  burger.classList.toggle("burger--active");
  document.body.classList.toggle("stop-scroll");
});

// Modal window

const callFormBtn = document.getElementById("call-form");
const modalCallForm = document.getElementById("modal-call-form");

//open modal window
callFormBtn.addEventListener("click", function () {
  modalCallForm.classList.add("modal-parent--open");
});

//close modal window

modalCallForm
  .querySelector(".modal")
  .addEventListener("click", function (event) {
    event._isClick = true;
  });

// Закрытие модального окна
modalCallForm.addEventListener("click", function (event) {
  // Если клик был совершен непосредственно на модальном окне (а не на его дочерних элементах), то не закрываем окно
  if (event.target.closest(".modal")) return;

  // Закрываем модальное окно
  modalCallForm.classList.remove("modal-parent--open");
});

// close by pressing esc
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalCallForm.classList.remove("modal-parent--open");
  }
});

//gallery
const swiper = new Swiper("#gallery", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    prevEl: "#gallery-prev",
    nextEl: "#gallery-next",
  },
});
