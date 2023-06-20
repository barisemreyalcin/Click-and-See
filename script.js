"use strict";
let questionTxt = document.querySelector(".question-text")

let ansBox = document.querySelector(".answer-box");
let answerTxt = document.querySelector(".answer-text")
let answerImg = document.querySelector(".img");

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let seeBtn = document.querySelector(".see");


let i = 0;
seeBtn.addEventListener("click", function() {
    ansBox.style.display = "block";
    changeQuestion();
});

nextBtn.addEventListener("click", function() {
    ansBox.style.display = "none";
    if(i === questions.length - 1) {
        i = 0;
    } else {
        i++;
    }
    changeQuestion();
})

prevBtn.addEventListener("click", function() {
    ansBox.style.display = "none";
    if(i === 0) {
        i = questions.length - 1;
    } else {
        i--;
    }
    changeQuestion();
})

const changeQuestion = () => {
    questionTxt.innerText = questions[i]["question"];
    answerTxt.innerText = questions[i]["answer"];
    answerImg.src = questions[i]["img"];
}

// Questions
const questions = [
    {
        question: "Who is my favorite basketball player?",
        answer: "Kobe Bryant",
        img: "img/pic-1.jpg"
    },
    {
        question: "Which movie is my favorite?",
        answer: "Fight Club",
        img: "img/pic-2.jpg"
    },
    {
        question: "Which programming language do I like most?",
        answer: "JavaScript",
        img: "img/pic-3.jpg"

    },
    {
        question: "Who is my favorite superhero?",
        answer: "Batman",
        img: "img/pic-4.jpg"
    },
    {
        question: "Which series is my favorite?",
        answer: "Breaking Bad",
        img: "img/pic-5.jpg",
    },
    {
        question: "Who is my favorite musician?",
        answer: "Eminem",
        img: "img/pic-6.jpg"
    },
    {
        question: "Do I prefer cats or dogs?",
        answer: "Both!",
        img: "img/pic-7.jpg"
    },
    {
        question: "Which online game do I like to play the most?",
        answer: "Valorant",
        img: "img/pic-8.jpg"
    },
    {
        question: "Who is my favorite author?",
        answer: "Fyodor Dostoyevski",
        img: "img/pic-9.jpg"
    },
    {
        question: "Which big cat is my favorite?",
        answer: "Jaguar",
        img: "img/pic-10.jpg"
    },
]