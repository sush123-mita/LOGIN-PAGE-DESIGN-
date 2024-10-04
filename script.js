document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Please fill out both fields');
            event.preventDefault(); // Prevent form submission if fields are empty
        } else {
            alert('Login successful!');
        }
        const mediaDiv = document.querySelector('media');
        const mediaLink = document.createElement('a');
        poemLink.href = 'www.google.com';
    });
});
