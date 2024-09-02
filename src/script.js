import "./style.css";
import plus from "./images/plus.svg"
import addForm from "./addtask-form.js";

const addtaskdiv = document.querySelector('.add-task')
const img = document.createElement("img");
img.src = plus;
addtaskdiv.appendChild(img);

document.querySelector('.add-task').addEventListener('click', addForm);

const rightSides = document.querySelector('.right-side');
rightSides.innerHTML = "";

document.querySelector('ul').addEventListener('click', (e) => {
    let id = e.target.id;
      
    document.querySelectorAll('.parent-content').forEach((el, i, arr) => {
        el.style.display = "none";
        if(id === el.classList[1]){
            el.style.display = "flex";
        }
    })
});