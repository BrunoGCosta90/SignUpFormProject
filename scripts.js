const accForm = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('user_email');
const divEmail = document.getElementById('div-email');
const phone = document.getElementById('phone_number');
const divPhone = document.getElementById('div-phone');
const phonePattern = new RegExp("\\([0-9]{2}\\)[0-9]{4,5}-[0-9]{4}");
const pw1 = document.getElementById('password');
const pw2 = document.getElementById('confirm_password');
const divConfirm = document.getElementById('div-confirm');
const buttonCreate = document.getElementById('btn_newAcc');

accForm.addEventListener("keyup", 
    function(){
        if(email.checkValidity() == false){
            divEmail.classList.add("invalid-email");
        } else {
            divEmail.classList.remove("invalid-email");
        }

        if(email.value == ""){
            divEmail.classList.remove("invalid-email");
        }

        if(phone.checkValidity() == false){
            divPhone.classList.add("invalid-phone");
        } else {
            divPhone.classList.remove("invalid-phone");
        }

        if(phone.value == ""){
            divPhone.classList.remove("invalid-phone");
        }

        if(checkPasswords()){
            pw2.classList.remove("invalid");
            divConfirm.classList.remove("invalid-password");
        } else {
            pw2.classList.add("invalid");
            divConfirm.classList.add("invalid-password");
        }
        
        if(pw1.value == "" & pw2.value == ""){
            pw1.classList.remove("invalid");
            pw2.classList.remove("invalid");
            divConfirm.classList.remove("invalid-password");
        }

        buttonEnabler();
    }
);

buttonCreate.addEventListener("click", 
    function(){
        createAccount();
})

function buttonEnabler(){
    if(checkAllFields()){
        buttonCreate.disabled = false;
    } else {
        buttonCreate.disabled = true;
    }
}

function checkAllFields() {
    if (firstName.checkValidity() == true && lastName.checkValidity() == true &&
        email.checkValidity() == true && phone.checkValidity() == true &&
        pw1.checkValidity() == true && pw2.checkValidity() == true &&
        checkPasswords() == true){
            return true;
        } else {
            return false;
        }
}

function checkPasswords(){
    if(pw2.value.length >= 8 && pw2.value == pw1.value){
        return true;
    } else {
        return false;
    }
}

function createAccount(){
    if(checkAllFields() == true){
        window.alert("Account created!");
        accForm.reset();
    } else {
        window.alert("Please, fill in all the fields correctly.")
    }
}
