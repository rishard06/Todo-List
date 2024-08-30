
export default function(title, decription,) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    a1.textContent = title;
    li.appendChild(a1);
    // li.appendChild(a2);
    ul.appendChild(li);
}