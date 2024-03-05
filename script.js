document.addEventListener('DOMContentLoaded', function () {
    const attendedInput = document.getElementById('attended');
    const totalInput = document.getElementById('total');

    attendedInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            totalInput.focus();
        }
    });

    totalInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            calculateAttendance();
        }
    });
});

function calculateAttendance() {
    const attendedClasses = parseInt(document.getElementById('attended').value);
    const totalClasses = parseInt(document.getElementById('total').value);

    if (attendedClasses > totalClasses) {
        showError("Error! Attended classes cannot be more than total classes. 💀");
        return;
    }

    const attendancePercentage = (attendedClasses / totalClasses) * 100;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Attendance Percentage: ${attendancePercentage.toFixed(2)}%`;

    if (attendancePercentage < 80) {
        document.body.classList.add('low-attendance');
        resultElement.innerHTML += '<br>Your attendance is below 80%. Please improve.';
    } else {
        document.body.classList.remove('low-attendance');
        resultElement.innerHTML += '<br>Congratulations! Your attendance is good. 😃';
    }
}

function showError(errorMessage) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = errorMessage;
    document.body.classList.add('error');
}
