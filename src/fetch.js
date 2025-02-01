//render tasks depending on category
async function renderTasks(categoryId, tasksContainer) {
    if (!categoryId) return console.error("No categoryId provided!");

    try {
        const response = await fetch(`http://localhost:5230/api/Task/Category/${categoryId}`);
        if (!response.ok) throw new Error("Failed to fetch tasks");

        const Tasks = await response.json();
        tasksContainer.innerHTML = ''; // Limpiar el contenedor

        Tasks.forEach(Task => {
            const TaskElement = document.createElement('div');
            const taskDelete = document.createElement('span');


            taskDelete.textContent = 'X';
            taskDelete.classList.add('icon');
            taskDelete.addEventListener('click', () => {
                taskElement.remove(); 
                console.log(`Task "${task.name}" deleted`);
            });


            taskDelete.innerHTML = 'Delete';
            taskDelete.id = `taskDelete-${Task.id}`;
            TaskElement.id = `task-${Task.id}`;

            taskDelete.addEventListener('click', async function (event) {
                const taskId = event.target.id.split('-')[1];
                const taskElement = document.getElementById(`task-${taskId}`);

                try {
                    const success = await deleteTask(taskId);
                    if (success && taskElement) {
                        taskElement.remove();
                    }
                } catch (error) {
                    console.error("Error deleting task:", error);
                }
            });

            TaskElement.textContent = Task.name;
            tasksContainer.appendChild(TaskElement);
            TaskElement.appendChild(taskDelete);
        });

    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
}


//render categories
async function renderCategories(categoryContainer) {
    try {
        const response = await fetch('http://localhost:5230/api/Category');
        if (!response.ok) throw new Error("Failed to fetch categories");

        const categories = await response.json();
        categoryContainer.innerHTML = ''; 

        categories.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.classList.add('categoriasTextos'); 

            const categoryText = document.createElement('span');
            categoryText.textContent = `• ${category.name}`;

            const arrowIcon = document.createElement('img');
            arrowIcon.src = 'source/images/flecha-correcta.png';
            arrowIcon.alt = 'Flecha';
            arrowIcon.classList.add('tamañoFlecha');

            categoryElement.addEventListener('click', async function () {
                currentCategoryId = category.id;
                await renderTasks(currentCategoryId, tasksContainer); 
            });

            categoryElement.appendChild(categoryText);
            categoryElement.appendChild(arrowIcon);

            categoryContainer.appendChild(categoryElement);
        });

    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}


//delete task
async function deleteTask(taskId) {
    try {
        const response = await fetch(`http://localhost:5230/api/Task/${taskId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            console.error("Failed to delete task:", response.statusText);
            return false;
        }

        console.log("Task deleted successfully");
        return true;

    } catch (error) {
        console.error("Error deleting task:", error);
        return false;
    }
}

//add task
async function addTask(taskName, categoryId) {
    try {
        const response = await fetch('http://localhost:5230/api/Task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: taskName,
                description: 'description',
                difficulty: 1,
                expirationDate: new Date(),
                category_Id: categoryId
            })
        });

        if (!response.ok) throw new Error("Failed to add task");

        const task = await response.json();

        const taskContainer = document.querySelector('.tasks__container');

        const taskElement = document.createElement('div');
        taskElement.classList.add('task__item');

        const taskText = document.createElement('span');
        taskText.textContent = `• ${task.name}`;

        const deleteIcon = document.createElement('span');
        deleteIcon.textContent = 'X';
        deleteIcon.classList.add('icon');
        deleteIcon.addEventListener('click', () => {
            taskElement.remove(); 
            console.log(`Task "${task.name}" deleted`);
        });

        const completeIcon = document.createElement('span');
        completeIcon.textContent = '✓';
        completeIcon.classList.add('icon');
        completeIcon.addEventListener('click', () => {
            taskElement.classList.toggle('completed'); 
            console.log(`Task "${task.name}" completed`);
        });

        taskElement.appendChild(taskText);
        taskElement.appendChild(deleteIcon);
        taskElement.appendChild(completeIcon);

        taskContainer.appendChild(taskElement);

        console.log(`Task "${task.name}" added successfully`);
    } catch (error) {
        console.error("Error adding task:", error);
    }
}
