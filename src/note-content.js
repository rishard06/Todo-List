import "./style2.css"

export default function(id, title, description, dueDate, priority) {
    const rightSide = document.querySelector('.right-side');
    
    const div = document.createElement('div');
    div.classList.add("parent-content");
    div.id = id;
    div.classList.add(id)
    
    const content = document.createElement('div');
    content.id = id;
    content.style.border = `1px solid ${priority}`;
    content.classList.add("project-content");

    const check = document.createElement('button');
    check.classList.add('done');
    check.style.background = priority;
    check.textContent = "Done";

    const titleContent = document.createElement('p');
    titleContent.classList.add('title');
    titleContent.textContent = title; 

    const des = document.createElement('p');
    des.classList.add("descripton-content");
    des.textContent = `Description: ${description}`;
    des.style.color = "var(--dark-light)";
    
    const date = document.createElement('p');
    date.classList.add("date-content")
    date.textContent = dueDate;
    //checklist
    const addCheckbox = document.createElement('button');
    addCheckbox.classList.add('add-checkbox');
    addCheckbox.textContent = "Add Checkbox";
    //notes
    const addNotes = document.createElement('button');
    addNotes.classList.add('add-notes');
    addNotes.textContent = "Add Notes";
    
    content.appendChild(titleContent);
    content.appendChild(date);
    content.appendChild(des);
    content.appendChild(addNotes);
    content.appendChild(addCheckbox);
    content.appendChild(check); 
    div.appendChild(content);
    rightSide.appendChild(div);

    var chars = '0123456789abcdefghiklmnopqrstuvwxyz'.split('');
    var str = '';
    for (var i = 0; i < 5; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }

    const notesAndCheck = document.createElement('div');
    notesAndCheck.classList.add(str);
    notesAndCheck.id = "child-div";
    notesAndCheck.scrollTo({ top: 10, behavior: 'smooth' })
    div.appendChild(notesAndCheck);

    content.addEventListener('click', (e) => {
        let classname = e.target.className;
        if(classname === "add-notes"){
            addNote(str, priority);
        }
        if(classname === "add-checkbox"){
            addCheckBox(str, priority);
        }
        if(classname === "done"){
            if(confirm("Are you Done in this project?")){
                rightSide.removeChild(div);
                const leftList = document.querySelectorAll('li');
                leftList.forEach(el => {
                    if(div.id === el.id){
                        const ul = document.querySelector('ul');
                        ul.removeChild(el)
                    }
                })
            }
        }
    });
}

const addNote = (id, pri) => {
    const parent = document.querySelector(`.${id}`);
    const div = document.createElement('div');
    div.classList.add('add-note-content');
    div.style.border = `1px solid ${pri}`;

    const input = document.createElement('input');
    
    const deleteNote = document.createElement('button');
    deleteNote.textContent = "delete";
    deleteNote.classList.add('delete-inside-content');

    div.appendChild(input);
    div.appendChild(deleteNote);
    parent.appendChild(div);

    div.addEventListener('click', (e) => {
        if(e.target.className === "delete-inside-content") {
            if(confirm("Are you sure you want ot delete this?")){
                parent.removeChild(div)
            }
        }
    })
}

const addCheckBox = (id, pri) => {
    const parent = document.querySelector(`.${id}`)
    const div = document.createElement('div');
    div.classList.add('add-checkbox-content');
    div.style.border = `1px solid ${pri}`;

    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add('che')

    const input = document.createElement('input');
    
    const deleteNote = document.createElement('button');
    deleteNote.textContent = "delete";
    deleteNote.classList.add('delete-inside-content');

    div.appendChild(check);
    div.appendChild(input);
    div.appendChild(deleteNote);
    parent.appendChild(div);

    div.addEventListener('click', (e) => {
        if(e.target.className === "che") {
            let check = e.target.checked;
            if(check){
                input.disabled = true;
                input.style.textDecoration = "line-through";
            }else{
                input.disabled = false;
                input.style.textDecoration = "none";
            }
        }
        if(e.target.className === "delete-inside-content") {
            if(confirm("Are you sure you want ot delete this?")){
                parent.removeChild(div)
            }
        }
    })
}