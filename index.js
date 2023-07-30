function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var desc = document.getElementById('desc').value;

    if (name === '' || age === '' || gender === '' || email === '' || phone === '' || desc === '') {
        document.getElementById('error-msg').style.display = 'block';
        return false; 
    }

    return true; 
}
