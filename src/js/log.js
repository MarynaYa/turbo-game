(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-log-open]"),
      closeModalBtn: document.querySelector("[data-log-close]"),
      modal: document.querySelector("[data-log]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

