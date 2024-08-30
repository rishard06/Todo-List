import addInfo from './addtask-info'

export default function() {
    const formParent = document.createElement('div');
    formParent.classList.add("form-parent");

    const formDiv = document.createElement('form');
    formDiv.classList.add("form");

    const titleInput = document.createElement('input');
    titleInput.classList.add("input-task-name");
    titleInput.placeholder = "Task name";
    titleInput.required = true;

    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add("input-description")
    descriptionInput.placeholder = "Description";

    const dueDate = document.createElement('input');
    dueDate.setAttribute("type", "date");
    dueDate.classList.add('date');

    const priorityList = document.createElement('input');
    priorityList.setAttribute("list", "priority")

    const dataList = document.createElement('datalist');
    dataList.setAttribute("id", "priority");
    
    const opt1 = document.createElement('option');
    opt1.setAttribute("value", "Priority 1");

    const opt2 = document.createElement('option');
    opt2.setAttribute("value", "Priority 2");

    const opt3 = document.createElement('option');
    opt3.setAttribute("value", "Priority 3");

    const formBtnCancel = document.createElement('button');
    formBtnCancel.classList.add('cancel');
    formBtnCancel.textContent = "Cancel";

    const formBtnAddTask = document.createElement('button');
    formBtnAddTask.classList.add('addtask');
    formBtnAddTask.textContent = "Add task";
    
    formDiv.appendChild(titleInput); formDiv.appendChild(descriptionInput);
    formDiv.appendChild(dueDate); formDiv.appendChild(priorityList);
    formDiv.appendChild(dataList); dataList.appendChild(opt1);
    dataList.appendChild(opt2); dataList.appendChild(opt3);
    formDiv.appendChild(formBtnCancel); formDiv.appendChild(formBtnAddTask);
    formParent.appendChild(formDiv);
    document.body.appendChild(formParent);
    
    formParent.addEventListener('click', (e) => {
        const target = e.target.className;
        if(target === "form-parent") {
            document.body.removeChild(formParent);
        }
    });

    formBtnCancel.addEventListener('click', () => {
        let text;
        if (confirm("Are you sure you want to discard?") == true) {
            text = true;
        }
        if (text == true) {
            document.body.removeChild(formParent);
        }
    });
    
    formBtnAddTask.addEventListener('click', () => {
        if(titleInput.value === "") {
            alert("fill the title form");
        }else {
            addInfo(titleInput.value, descriptionInput.value);
            document.body.removeChild(formParent);
        }
    });
}