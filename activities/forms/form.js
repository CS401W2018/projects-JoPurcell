document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    
    const formData = {
        firstname: firstname,
        lastname: lastname
    }

    if (!firstname || !lastname) {
        alert('You must give a first and last name');
        return;
    }

    if (!age || age < 18) {
        alert('You must be 18 or older to submit this form');
        return;
    }

    const xhr = XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readystate === 4 && xhr.status === 200) {
            message = JSON.parse(xhr.responseText)
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myForm').innerHTML = "";
        } else if (xhr.readystate === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));

    console.log(formData)
})