document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var score = 0;
    var answers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'c',
        q5: 'b',
    };
    for (var question in answers) {
        var radios = document.getElementsByName(question);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked && radios[i].value === answers[question]) {
                score++;
                break;
            }
        }
    }
    alert('Your score is: ' + score);
});
