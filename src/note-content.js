export default function(id, title, description, dueDate, priority) {
    const rightSide = document.querySelector('.right-side');
    
    const content = document.createElement('div');
    content.id = id;
    content.classList.add("project-content");

    const titleContent = document.createElement('p');
    titleContent.textContent = title; 

    const des = document.createElement('p');
    des.textContent = description;
    
    const date = document.createElement('p');
    date.textContent = dueDate;

    //btn to add
    //checklist
    //notes

    content.appendChild(titleContent);
    content.appendChild(des);
    content.appendChild(date);
    rightSide.appendChild(content);
    // console.log(id, title, dueDate, description, priority);
}