document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const exam1 = document.getElementById('exam1').value;
    const exam2 = document.getElementById('exam2').value;
    const exam3 = document.getElementById('exam3').value;

    const data = {
        name: name,
        examScores: [exam1, exam2, exam3]
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert('Registration successful!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Registration failed!');
    });
});
