let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let pass = document.getElementById('pass');
let pwd2 = document.getElementById('pwd2');
let validName = false;
let validEmail = false;
let validPhone = false;
let validPass = false;


function user(event){
    let code=event.which;
    if(code>47 && code<58){
    return false;
    }
    else return True;
}
function phoneval(event){
    let code=event.which;
    if(code>64 && code<223){
    return false;
    }
    else return True;
}
name.addEventListener('input', function () {
    let reg = /^[a-zA-Z]([ a-zA-Z]){2,20}$/;
    let str = name.value;
    if (reg.test(str)) {
        name.style.borderColor = 'green';
        name.style.borderWidth = '3px';
        validName = true;
    }
    else {
        name.style.borderColor = 'red';
        name.style.borderWidth = '3px';
        validName = false;
    }
})
pass.addEventListener('input', function () {
    let reg = /[0-9]/;
    let str = pass.value;
    if (reg.test(str)) {
        pass.style.borderColor = 'green';
        pass.style.borderWidth = '3px';
        validPass = true;
    }
    else {
        pass.style.borderColor = 'red';
        pass.style.borderWidth = '3px';
        validPass    = false;
    }
})
pass.addEventListener('input', function () {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let str = pass.value;
    if (reg.test(str)) {
        pass.style.borderColor = 'green';
        pass.style.borderWidth = '3px';
        validPass = true;
    }
    else {
        pass.style.borderColor = 'red';
        pass.style.borderWidth = '3px';
        validPass    = false;
    }
})







let message = document.getElementById('success');
subMess = document.getElementById('subMess');
let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', function(e){
    e.preventDefault();
    if(validPass && validName ){
        message.classList.add('show');
        subMess.innerHTML = `<h3>valid credentials</h3>`;
    }
    else{        
        message.classList.remove('show');
        subMess.innerHTML = `<h3>invalid credentials</h3>`;
    }
})