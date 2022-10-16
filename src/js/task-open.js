(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-task-open]"),
      closeModalBtn: document.querySelector("[data-task-close]"),
      modal: document.querySelector("[data-task]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

