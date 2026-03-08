const formEl = document.querySelector('.form');
const inputEl = document.querySelectorAll('.input');
const divEl = document.querySelector('.form__result');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');

nameInput.addEventListener('input', function () {

    const value = nameInput.value
    const nameRegex = /^[a-zA-Za-яА-ЯёЁ\s]+$/;

    nameInput.setCustomValidity('');

    if (value.length > 0 && !nameRegex.test(value)) {
        nameInput.setCustomValidity('Имя может содержать только буквы');
        nameInput.style.outline = '1px solid red';
        nameInput.reportValidity();

    } else if (value.length > 0 && value.length < 3){
        nameInput.setCustomValidity('Имя должно быть не короче 3 символов');
        nameInput.style.outline = '1px solid red';
        nameInput.reportValidity()

    } else if (value.length >= 3) {
        nameInput.setCustomValidity('');
        nameInput.style.outline = '1px solid green'

    } else {
        nameInput.setCustomValidity('');
        nameInput.style.border = 'none'
    }
    nameInput.style.borderRadius = '4px'
    nameInput.style.padding = '4px'
    nameInput.style.border = 'none'
});

emailInput.addEventListener('input', function () {
    emailInput.setCustomValidity('');

    if (emailInput.value.length > 0 ) {

        if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity('Почта должна содержать символ @ и точку (например, name@.mail.ru)')
            emailInput.style.outline = '1px solid red'
        } else if (emailInput.value.length < 5) {
            emailInput.setCustomValidity('Слишком короткий адрес почты');
            emailInput.style.outline = '1px solid red'
        } else {
            emailInput.setCustomValidity('');
            emailInput.style.outline = '1px solid green'
        }
        if (!emailInput.validity.valid) {
            emailInput.reportValidity();
        } else {
        }
        emailInput.style.borderRadius = '4px'
        emailInput.style.padding = '4px'
        emailInput.style.border = 'none'
    }
});


formEl.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(formEl);
        const data = Object.fromEntries(formData);

        const selectedHobbies = formData.getAll('hobbies')

        divEl.innerHTML =
        `<p><strong>Имя:</strong>${ data.name}</p>
        <p><strong>Email:</strong>${ data.email}</p>
        <p><strong>Пол:</strong> ${ data.gender}</p>
        <p><strong>Оценка:</strong> ${ data.range}</p>
        <p><strong>Интерес пользователя:</strong>${ selectedHobbies.join(', ') || 'Ничего не выбрано'}</p>
        <p><strong>Комментарий:</strong> ${ data.comment}</p>`

        divEl.style.display = 'block';

        console.log(divEl);
});