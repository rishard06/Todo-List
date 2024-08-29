export default function() {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = "hello";

    ul.appendChild(li);
}