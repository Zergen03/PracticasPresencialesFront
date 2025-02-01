//render tasks depending on category
function togglePopup() {
    document.getElementById("popup").classList.toggle("active");
}

function togglePopupTask() {
    document.getElementById("popup-task").classList.toggle("active");
}
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
async function renderCategories(CategoryContainer, tasksContainer) {
    try {
        const response = await fetch('http://localhost:5230/api/Category');
        if (!response.ok) throw new Error("Failed to fetch categories");

        const Categories = await response.json();
        CategoryContainer.innerHTML = '';

        Categories.forEach(Category => {
            const categoryElement = document.createElement('div');
            categoryElement.id = `category-${Category.id}`;
            categoryElement.textContent = Category.name;

            categoryElement.addEventListener('click', async function () {
                currentCategoryId = Category.id;
                await renderTasks(currentCategoryId, tasksContainer);
            });

            CategoryContainer.appendChild(categoryElement);
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
    fetch('http://localhost:5230/api/Task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "taskName",
            description: 'description',
            difficulty: 1,
            expirationDate: new Date(),
            category_Id: 1
        })
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        console.log(response);
    });
}