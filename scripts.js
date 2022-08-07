const email = document.getElementById('user_email');
const divEmail = document.getElementById('div-email');
const phone = document.getElementById('phone_number');
const divPhone = document.getElementById('div-phone');
const phonePattern = new RegExp("\\([0-9]{2}\\)[0-9]{4,5}-[0-9]{4}");
const pw1 = document.getElementById('password');
const pw2 = document.getElementById('confirm_password');
const divConfirm = document.getElementById("div-confirm");


document.getElementById('form').addEventListener("keyup", 
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

        if(pw2.value.length >= 8 && pw2.value == pw1.value){
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
    }
);