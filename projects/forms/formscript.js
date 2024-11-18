document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('pass').value;
    
    const formData = {
        firstname: firstname,
        lastname: lastname,
        password: document.getElementById('pass').value,
        state: document.getElementById('state').value
    };

    if (!firstname || !lastname) {
        alert('You must give a first and last name');
        return;
    }

    if (!age || age < 18) {
        alert('You must be 18 or older to submit this form');
        return;
    }

    if (!password) {
        alert('Please enter a valid password.');
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readystate === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readystate === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));

    console.log(formData)
})