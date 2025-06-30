function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi-result').textContent = bmi;

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }
    document.getElementById('bmi-category').textContent = `Category: ${category}`;
    document.getElementById('bmi-result').style.color = 'white';
document.getElementById('bmi-category').style.color = 'white';

}
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Welcome to FitnessPro! Let’s get started on your fitness journey.');
});
