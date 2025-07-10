const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Transfer Markup Language"],
    correctindex: 0,
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<script>", "<css>", "<link>"],
    correctindex: 0,
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "bgcolor", "background-color", "background"],
    correctindex: 2,
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    correctindex: 0,
  },
  {
    question: "What is the correct syntax to link an external CSS file?",
    options: ["<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<css href='style.css'>", "<stylesheet>style.css</stylesheet>"],
    correctindex: 1,
  },
  {
    question: "Which HTML tag is used to create a table?",
    options: ["<table>", "<tab>", "<tbl>", "<td>"],
    correctindex: 0,
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["string", "number", "boolean", "All of the above"],
    correctindex: 3,
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function myFunc()", "create myFunc()", "function:myFunc()", "define myFunc()"],
    correctindex: 0,
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    correctindex: 1,
  },
  {
    question: "Which tag is used for inserting a line break in HTML?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    correctindex: 0,
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correctindex: 2,
  },
  {
    question: "How do you add a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "# comment", "** comment **"],
    correctindex: 1,
  },
  {
    question: "Which HTML element is used to define the footer of a document?",
    options: ["<footer>", "<bottom>", "<section>", "<end>"],
    correctindex: 0,
  },
  {
    question: "How do you select an element with ID 'main' in CSS?",
    options: [".main", "#main", "*main", "main"],
    correctindex: 1,
  },
  {
    question: "Which method is used to output data in the console in JavaScript?",
    options: ["print()", "log()", "console.log()", "display()"],
    correctindex: 2,
  },
];



// global variables
let question = [];
let currentindex = 0;
let score = 0;
const totalquestion = 10;


// dom elements

const quiz = document.getElementsByClassName("quiz");
const questionnumber = document.getElementsById("question-number");
const questiontext = document.getElementsById("question-text");
const optionlist = document.getElementsByClassName("option-list");
const nextbutton =document.getElementsByClassName("next-button");
const scoreboard= document.getElementById("scoreboard");
const scoremessage= document.getElementById("scoremessage");
const restartbutton = document.getElementById("restartquiz");

window.addEventListener('DOMContentLoaded', ()=>{
    initalizequiz();
})

function initalizequiz() {
    question = shuffleArry(question).slice(0, totalquestion);

    currentindex = 0;
    score = 0;

    quiz.classList.remove("hidden");
    scoreboard.classList.add("hidden");

}

function displayquestion(){
    clearoption();

    const currentquestion = question[currentindex];    
}
