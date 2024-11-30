document.getElementById('myPostcard').addEventListener('submit', function(event) {
    event.preventDefault();
    const sender = document.getElementById('sender').value;
    const receiver = document.getElementById('receiver').value;
    const date = document.getElementById('day').value;
    
    if (!sender || !receiver) {
        alert('You must give a valid sender and receiver name.');
        return;
    }

    if (!date) {
        alert("You must input today's date.");
        return;
    }

    const formData = {
        sender: sender,
        receiver: receiver,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myPostcard").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});