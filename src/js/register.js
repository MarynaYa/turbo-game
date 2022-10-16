(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-register-open]"),
      closeModalBtn: document.querySelector("[data-register-close]"),
      modal: document.querySelector("[data-register]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
