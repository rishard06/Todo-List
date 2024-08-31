import red from "./images/flag-red.svg";
import yellow from "./images/flag-yellow.svg";
import blue from "./images/flag-blue.svg";

export default function(title, description, duedate, priority) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');

    const a1 = document.createElement('a');
    a1.textContent = title;

    const des = document.createElement('a');
    des.textContent = description;

    const date = document.createElement('p');
    date.textContent = duedate;

    const prior = document.createElement('img');
    prior.classList.add('flag')
    if(priority === "Priority 1") {
        prior.src = red;
    }else if(priority === "Priority 2") {
        prior.src = yellow;
    }else {
        prior.src = blue;
    }
    
    li.appendChild(prior);
    li.appendChild(a1);
    ul.appendChild(li);
}