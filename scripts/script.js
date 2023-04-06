const specialOrderLink = document.querySelector('.special-order-link');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close');

if (specialOrderLink) {
  specialOrderLink.addEventListener('click', function (importantEvent) {
    importantEvent.preventDefault();
    modal.classList.add('modal-container-open');
  });
  modalCloseButton.addEventListener('click', function(importantEvent) {
    modal.classList.remove('modal-container-open');
  });
}
