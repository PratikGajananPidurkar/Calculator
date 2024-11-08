document.addEventListener('DOMContentLoaded', () => {
    const correctAnswer = 'B'; // Update this based on the correct option for the current question
    const options = document.querySelectorAll('.option');
    const result = document.getElementById('result');

    options.forEach(option => {
        option.addEventListener('click', () => {
            const selectedAnswer = option.getAttribute('data-answer');
            options.forEach(opt => {
                if (opt.getAttribute('data-answer') === correctAnswer) {
                    opt.classList.add('correct');
                } else {
                    opt.classList.add('wrong');
                }
                if (opt.getAttribute('data-answer') === selectedAnswer) {
                    if (selectedAnswer !== correctAnswer) {
                        result.textContent = `The correct answer was option ${correctAnswer}.`;
                    }
                }
            });
            result.textContent = selectedAnswer === correctAnswer 
                ? 'Correct answer!' 
                : `Incorrect. The correct answer is option ${correctAnswer}.`;
        });
    });
});
