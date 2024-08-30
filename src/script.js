import "./style.css";
import plus from "./images/plus.svg"
import addForm from "./addtask-form.js";

const addtaskdiv = document.querySelector('.add-task')
const img = document.createElement("img");
img.src = plus;
addtaskdiv.appendChild(img);

document.querySelector('.add-task').addEventListener('click', addForm);