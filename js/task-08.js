const form = document.querySelector(".login-form");
form.addEventListener("submit", check);

function check(event) {
    event.preventDefault();
    
    const formData = {};
    const formTarget = event.currentTarget;
    const userEmail = formTarget.elements.email.value;
    const userPassword = formTarget.elements.password.value;

    if (userEmail !== "" && userPassword !== "") {
        formData.email = userEmail;
        formData.password = userPassword;
        console.log(formData);
    }

    else {
        alert("Please fill empty fields!");
    }

    formTarget.reset();
}