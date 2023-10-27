 var cl= console.log;
const password = document.getElementById('password');



password.addEventListener('change',handler)

let handler =(hand)=>{
    if (password.checked) {
        // If checkbox is checked, show the password
        hand.type = 'text';
    } else {
        // If checkbox is unchecked, hide the password
        hand.type = 'password';
    }
};

