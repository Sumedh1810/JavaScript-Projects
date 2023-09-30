const correctAnswer = ["B","A","A","A","C"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", event => {
    event.preventDefault();
    let score = 0;
    const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    console.log(userAnswer);

    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswer[index]) {
            form.question
            score += 1;
            questions[index].classList.add("correct");
        } else {
            questions[index].classList.add("wrong");
        }
    });
    console.log(score);
    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `Your Score is ${score}/5`;
});