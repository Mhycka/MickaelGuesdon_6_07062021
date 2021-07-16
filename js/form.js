function Form () {
    // DOM Elements
    const modalBtn = document.getElementById("ph-contact");
    const formData = document.getElementById("form-dialog");
    const closeModal = document.querySelector(".close-form-icon");

    // launch modal event
    modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

    // launch modal form
    function launchModal() {
    formData.style.display = "block";
    };

    // close modal
    closeModal.addEventListener ('click', closeup);

    function closeup() {
    modalbg.style.display = "none";
    document.querySelector('form').hidden = false;
    };

    return {
        launchModal,
        closeup
    }
}
