document.querySelector('form').addEventListener('submit', validationForm);
document.querySelector('#name').addEventListener('blur', validationName);
document.querySelector('#zip').addEventListener('blur', validationZip);
document.querySelector('#email').addEventListener('blur', validationEmail);
document.querySelector('#phone').addEventListener('blur', validationPhone);


function validationName(e){
    let re = /^[a-zA-z]{2,10}$/;
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
    }else{
        e.target.classList.add('is-invalid');
        e.target.classList.remove('is-valid');
    }
}

function validationZip(e){
    let re = /^[\d]{5}\-?[\d]{5}$/;
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
    }else{
        e.target.classList.add('is-invalid');
        e.target.classList.remove('is-valid');
    }
}

function validationEmail(e){
    let re = /^[\w\-?\.?]+@[a-zA-z]+\.[a-zA-z]{2,5}$/;
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
    }else{
        e.target.classList.add('is-invalid');
        e.target.classList.remove('is-valid');
    }
}

function validationPhone(e){
    let re = /^\+[\d]{2}\s[\d]{2}\s[\d]{8}$/;
    if(re.test(e.target.value)){
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
    }else{
        e.target.classList.add('is-invalid');
        e.target.classList.remove('is-valid');
    }
}

function validationForm(e){
    let inputs = document.getElementsByClassName('is-invalid');
    if(inputs.length > 0){
        e.preventDefault();
    }
}