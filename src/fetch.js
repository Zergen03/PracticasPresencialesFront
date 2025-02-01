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
            const taskDelete = document.createElement('button');

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
        categoryContainer.innerHTML = ''; // Limpia el contenedor antes de agregar nuevas categorías

        categories.forEach(category => {
            // Crear el contenedor principal de la categoría
            const categoryElement = document.createElement('div');
            categoryElement.classList.add('categoriasTextos'); // Aplica la clase CSS

            // Crear el texto de la categoría
            const categoryText = document.createElement('span');
            categoryText.textContent = `• ${category.name}`;

            // Crear la imagen de flecha
            const arrowIcon = document.createElement('img');
            arrowIcon.src = 'source/images/flecha-correcta.png';
            arrowIcon.alt = 'Flecha';
            arrowIcon.classList.add('tamañoFlecha');

            // Añadir evento al contenedor de la categoría
            categoryElement.addEventListener('click', async function () {
                currentCategoryId = category.id;
                await renderTasks(currentCategoryId, tasksContainer); // Llama a la función para renderizar tareas
            });

            // Agregar el texto y la flecha al contenedor principal
            categoryElement.appendChild(categoryText);
            categoryElement.appendChild(arrowIcon);

            // Añadir la categoría al contenedor principal
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

        // Inserta la nueva tarea en el contenedor
        const taskContainer = document.querySelector('.tasks__container');

        const taskElement = document.createElement('div');
        taskElement.classList.add('task__item');

        // Crear el texto de la tarea
        const taskText = document.createElement('span');
        taskText.textContent = `• ${task.name}`;

        // Crear el icono para eliminar la tarea
        const deleteIcon = document.createElement('span');
        deleteIcon.textContent = 'X';
        deleteIcon.classList.add('icon');
        deleteIcon.addEventListener('click', () => {
            taskElement.remove(); // Elimina la tarea del DOM
            console.log(`Task "${task.name}" deleted`);
        });

        // Crear el icono para marcar la tarea como completada
        const completeIcon = document.createElement('span');
        completeIcon.textContent = '✓';
        completeIcon.classList.add('icon');
        completeIcon.addEventListener('click', () => {
            taskElement.classList.toggle('completed'); // Marca la tarea como completada visualmente
            console.log(`Task "${task.name}" completed`);
        });

        // Añadir los elementos al contenedor de la tarea
        taskElement.appendChild(taskText);
        taskElement.appendChild(deleteIcon);
        taskElement.appendChild(completeIcon);

        // Añadir la tarea al contenedor principal
        taskContainer.appendChild(taskElement);

        console.log(`Task "${task.name}" added successfully`);
    } catch (error) {
        console.error("Error adding task:", error);
    }
}
