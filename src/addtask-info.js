import red from "./images/flag-red.svg";
import yellow from "./images/flag-yellow.svg";
import blue from "./images/flag-blue.svg";
import ListNoteContent from "./note-content.js"

export default function(title, description, duedate, priority) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    var chars = '0123456789abcdefghiklmnopqrstuvwxyz'.split('');
    var str = '';
    for (var i = 0; i < 5; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    li.id = str;

    const a1 = document.createElement('a');
    a1.id = li.id;
    a1.textContent = title;

    const prior = document.createElement('img');
    prior.classList.add('flag')

    let priorityColor;
    if(priority === "Priority 1") {
        prior.src = red;
        priorityColor = "#e71b1b";
    }else if(priority === "Priority 2") {
        prior.src = yellow;
        priorityColor = "#f3d21a";
    }else {
        prior.src = blue;
        priorityColor = "#3458fa";
    }
    
    li.appendChild(prior);
    li.appendChild(a1);
    ul.appendChild(li);

    ListNoteContent(li.id, title, description, duedate, priorityColor);
}