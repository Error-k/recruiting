const form = document.getElementById("rec__modal-form_form")
const formInputs = document.querySelectorAll(".rec__modal-form_form_input")
const inputName = document.getElementById("rec__modal-form_form_input-name")
const inputPhone = document.getElementById("rec__modal-form_form_input-phone")

const submitForm = (ev) => {
    ev.preventDefault()

    const nameValue = inputName.value
    const phoneValue = inputPhone.value
    const errorValidation = Array.from(formInputs).filter(input => input.value === '')

    formInputs.forEach(input => {
        if (input.value === '') input.classList.add("errorValidation")
        else input.classList.remove("errorValidation")
    })

    if (errorValidation.length !== 0) return false

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: nameValue,
            phone: phoneValue,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(() => modal.style.display = "none")
        .then(() => alert("Ваша заявка успешно отправлена! В ближайшее время ожидайте звонка от нас"))

    form.reset()
}

form.onsubmit = (ev) => submitForm(ev)