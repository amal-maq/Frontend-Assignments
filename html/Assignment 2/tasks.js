document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.querySelector('form');
    const taskList = document.getElementById('task-list');
    const tasks = [];

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;

        if (!title || !dueDate) {
            alert('Title and Due Date are required.');
            return;
        }

        const task = {
            title,
            description,
            dueDate,
            priority,
            completed: false
        };

        tasks.push(task);
        renderTask(task);
        taskForm.reset();
    }

    function renderTask(task) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';
        taskDetails.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Due: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
        `;
        if(task.priority=="low"){
            taskDetails.style.borderRight="5px solid green";
        }
        if(task.priority=="medium"){
            taskDetails.style.borderRight = "5px solid yellow";
        }
        if(task.priority == "high"){
            taskDetails.style.borderRight = "5px solid red"
        }

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
            tasks.splice(tasks.indexOf(task), 1);
        });
        // delete button's css baad m edit krlena 
        deleteButton.style.backgroundColor = "#FB4141";
        deleteButton.style.borderRadius = "4px";
        deleteButton.style.border = "1px solid #C2856E";
        deleteButton.style.color = "white";


        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.addEventListener('change', () => {
            task.completed = completeCheckbox.checked;
            taskItem.classList.toggle('completed', task.completed);
        });

        taskActions.appendChild(completeCheckbox);
        taskActions.appendChild(deleteButton);

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(taskActions);

        taskList.appendChild(taskItem);
    }
});
