const name = document.getElementById('#name');
const number = document.getElementById('#number');
const email = document.getElementById('#email');
const address = document.getElementById('#address');
const form = document.querySelector("form");


form.addEventListener('submit', event => {
    event.preventDefault();
    validate();
});
function validate() {
    const pattern = /^[a-zA-z\s]+$/;
    const value = name.value.trim();
    let valid_name = true;
    if (value ==" '') {
        setError(name, "Name is required");
        valid_name = false;
    }
    else if (!pattern.test(value)) {
        setError(name, "pattern is not matched");
        valid_name = false;
    }
    else {
        setSuccess(name);
        valid_name = true;
    }
    const pattern2 = /^[0-9]{10}$/;
    let valid_number = true;
    if (number.value == " ") {
        setError(number, "number is required");
        valid_number = false;
    }
    else if (!pattern2.test(number.value)) {
        setError(number, "pattern is not matched");
        valid_number = false;
    }
    else {
        setSuccess(number);
        valid_number = true;
    }
    const pattern1 = /^[a-zA-z]+[0-9]@gmail.com$/;
    const value1 = email.value.trim();
    let valid_email = true;
    if (value1 == "") {
        setError(email, "Email is required");
        valid_email = false;
    }
    else if (!pattern1.test(value1)) {
        setError(username, "pattern is not matched");
        valid_email = false;
    }
    else {
        setSuccess(email);
        valid_email = true;
    }

    let valid_address=true;
    if(address.value=="")
    {
        setError(address,"Address is required");
        valid_address=false;
    }
    else
    {
        setSuccess(address);
        valid_address=true;
    }



    if (valid_name && valid_number && valid_email && valid_address) {
        const s = Object.getPrototypeOf(form).submit;
        s.call(form);
    }


}

function setError(input, msg) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    small.innerText = msg;
    small.style.color = "red";
}
function setSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    small.style.visibility = "hidden";
}
