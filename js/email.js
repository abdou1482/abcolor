document.getElementById('copyButton').addEventListener('click', function() {
    var emailText = document.getElementById('email').innerText;
    var tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    var feedback = document.getElementById('feedback');
    feedback.style.display = 'block';

    setTimeout(function() {
        feedback.style.display = 'none';
    }, 2000); // Hide feedback after 2 seconds
});