document.getElementById('calculateBtn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let status = '';

        if (bmi < 18.5) {
            status = 'Underweight';
        } else if (bmi < 24.9) {
            status = 'Normal weight';
        } else if (bmi < 29.9) {
            status = 'Overweight';
        } else {
            status = 'Obesity';
        }

        document.getElementById('result').innerHTML = `Your BMI is: <strong>${bmi}</strong> (${status})`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
    }
});
