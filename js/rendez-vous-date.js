document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', function() {
        document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.querySelectorAll('.time').forEach(time => {
    time.addEventListener('click', function() {
        document.querySelectorAll('.time').forEach(t => t.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.querySelectorAll('.reminder').forEach(reminder => {
    reminder.addEventListener('click', function() {
        document.querySelectorAll('.reminder').forEach(r => r.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.querySelector('.confirm-btn').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'flex';
});

document.querySelector('.ok-btn').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('confirmationModal').style.display = 'none';
});
