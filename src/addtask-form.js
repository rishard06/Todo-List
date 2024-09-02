import addInfo from './addtask-info'

export default function() {
    const formParent = document.createElement('div');
    formParent.classList.add("form-parent");

    const formDiv = document.createElement('form');
    formDiv.classList.add("form");

    const titleInput = document.createElement('input');
    titleInput.classList.add("input-task-name");
    titleInput.placeholder = "Task name";

    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add("input-description")
    descriptionInput.placeholder = "Description";

    const dueDate = document.createElement('input');
    dueDate.setAttribute("type", "text  ");
    dueDate.setAttribute("onfocus", "(this.type='datetime-local')");
    dueDate.classList.add('date');
    dueDate.placeholder = 'Due date';

    const priorityList = document.createElement('input');
    priorityList.setAttribute("list", "priority")
    priorityList.classList.add('dropdown')

    const dataList = document.createElement('datalist');
    dataList.setAttribute("id", "priority");
    
    const opt1 = document.createElement('option');
    opt1.setAttribute("value", "Priority 1");

    const opt2 = document.createElement('option');
    opt2.setAttribute("value", "Priority 2");

    const opt3 = document.createElement('option');
    opt3.setAttribute("value", "Priority 3");

    const formBtnAddTask = document.createElement('button');
    formBtnAddTask.classList.add('addtask');
    formBtnAddTask.textContent = "Add project";
    
    formDiv.appendChild(titleInput); 
    formDiv.appendChild(descriptionInput);
    formDiv.appendChild(dueDate); 
    formDiv.appendChild(priorityList);
    formDiv.appendChild(dataList); 
    dataList.appendChild(opt1);
    dataList.appendChild(opt2); 
    dataList.appendChild(opt3);
    formDiv.appendChild(formBtnAddTask);
    formParent.appendChild(formDiv);
    document.body.appendChild(formParent);
    
    formParent.addEventListener('click', (e) => {
        const target = e.target.className;
        if(target === "form-parent") {
            if (titleInput.value) {
                alert("this info will get discard");
                document.body.appendChild(formParent);
            }
            document.body.removeChild(formParent);
        }
    });
    
    formBtnAddTask.addEventListener('click', () => {
        if(titleInput.value === "") {
            alert("fill the title form");
            titleInput.required = true;
            dueDate.required = true;
        }else {
            addInfo(
                titleInput.value,
                descriptionInput.value,
                dueDate.value,
                priorityList.value
            );
            document.body.removeChild(formParent);
        }
    });
}