
const modal = document.getElementById("rec__modal-form")
const close = document.getElementsByClassName("rec__modal-form_close")[0]
const body = document.querySelector("body")

const openModal = (ev) => {
    ev.preventDefault()
    modal.style.display = "block"
    body.style.overflow = "hidden"
}

const closeModalOnBtn = () => {
    modal.style.display = "none"
    body.style.overflow = "visible"
}

const closeModalOnSpace = (ev) => {
    if (ev.target === modal) modal.style.display = "none"
    if (modal.style.display === "none") body.style.overflow = "visible"
}

document.getElementById("rec__banner_btn").onclick = (ev) => openModal(ev)
document.getElementById("rec__become-specialist_btn").onclick = (ev) => openModal(ev)
document.getElementById("rec__location_btn").onclick = (ev) => openModal(ev)
document.getElementById("rec__other_swiper_btn1").onclick = (ev) => openModal(ev)
document.getElementById("rec__other_swiper_btn2").onclick = (ev) => openModal(ev)
document.getElementById("rec__other_swiper_btn3").onclick = (ev) => openModal(ev)
document.getElementById("rec__reviews_btn").onclick = (ev) => openModal(ev)
document.getElementById("rec__learning_btn").onclick = (ev) => openModal(ev)
close.onclick = () => closeModalOnBtn()
modal.onclick = (ev) => closeModalOnSpace(ev)

