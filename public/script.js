document.getElementById('coffeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const size = document.getElementById('size').value;
    const sugar = document.getElementById('sugar').value;

    fetch('/coffee/brew', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ size, sugar }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
