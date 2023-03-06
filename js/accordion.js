document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.rec__questions_accordion_wrapper').forEach(el => {
        const content = el.nextElementSibling
        const arrow = el.children[1];
        el.addEventListener('click', () => {
            arrow.src='images/icons/1-14.svg'
            el.style.backgroundColor = '#e4e6ed'
            if (content.style.display === 'block') {
                el.style.backgroundColor = '#f4f5f8'
                arrow.src='images/icons/1-13.svg'
                document.querySelectorAll('.rec__questions_accordion_content').forEach(el => el.style.display = 'none')
            } else {
                document.querySelectorAll('.rec__questions_accordion_content').forEach(el => el.style.display = 'none')
                content.style.display = 'block'
            }
        })
    })

});