console.log('hello');
console.log(document);
const cardButton = document.querySelector("#shopping-cart"),
  modal = document.querySelector(".modal"),
  promo = document.querySelector(".restaurants"),
  close = document.querySelector(".close");

cardButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

function toggleModal(){
  modal.classList.toggle('is-open');
}

new WOW().init();