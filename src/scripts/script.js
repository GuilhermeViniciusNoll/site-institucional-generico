/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

function openModal() {

    let activeModal = document.querySelectorAll('.active-modal')
    let modal = document.getElementById("container-modal")

    activeModal.forEach(buttonActive => {
        buttonActive.addEventListener('click', () => {
            modal.showModal();
            closeModal()
        })
    })

}

function closeModal() {
    let closeModal = document.querySelector("#close-modal")
    let modal = document.getElementById("container-modal")

    closeModal.addEventListener('click', () => {
        modal.close();
    })
}

function aboutUS() {
    let buttonAboutUs = document.querySelector(".container-first__button")

    buttonAboutUs.addEventListener('click', () => {
        window.scroll(0, 700);
    })
}


openModal()
aboutUS()