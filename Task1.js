document.getElementById('welcomeButton').addEventListener('click', function() {
    alert('Welcome to Delhi - The city of heritage, culture, and delicious food!\n\nDelhi has been continuously inhabited since the 6th century BCE!');
});

const header = document.querySelector('header');
header.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'darkorange';
});
header.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'orange';
});