document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            // Display a confirmation modal or toast message
            alert("Registration successful!");
            form.reset();
            form.classList.remove('was-validated');
        }
        form.classList.add('was-validated');
    }, false);
});
