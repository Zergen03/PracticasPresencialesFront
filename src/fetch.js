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
        tasksContainer.innerHTML = '';

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
async function renderCategories(categoryContainer, tasksContainer) {
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

            categoryElement.addEventListener('click', async function (Category) {
                currentCategoryId = Category.id;
                await renderTasks(currentCategoryId, tasksContainer);
                localStorage.setItem('currentCategoryId', currentCategoryId);
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

async function deleteCategory() {
    var categoryId = localStorage.getItem('currentCategoryId');
    try {
        const response = await fetch(`http://localhost:5230/api/Category/${categoryId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            console.error("Failed to delete category:", response.statusText);
            return false;
        }
        localStorage.removeItem('currentCategoryId');
        console.log("Category deleted successfully");
        return true;

    } catch (error) {
        console.error("Error deleting category:", error);
        return false;
    }
}

//add category
async function addCategory(categoryName) {
    //alert(categoryName);
    await fetch('http://localhost:5230/api/Category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: categoryName,
            user_Id: 1
        })
    });
}

async function deleteCategory() {
    var categoryId = localStorage.getItem('currentCategoryId');
    try {
        const response = await fetch(`http://localhost:5230/api/Category/${categoryId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            console.error("Failed to delete category:", response.statusText);
            return false;
        }
        localStorage.removeItem('currentCategoryId');
        console.log("Category deleted successfully");
        return true;

    } catch (error) {
        console.error("Error deleting category:", error);
        return false;
    }
}

//add category
async function addCategory(categoryName) {
    //alert(categoryName);
    await fetch('http://localhost:5230/api/Category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: categoryName,
            user_Id: 1
        })
    });
}

//add task
async function addTask(taskName, taskDescription, taskDifficulty, taskExpiration, categoryId) {
    //alert(taskName + taskDescription + taskDifficulty + taskExpiration + categoryId);
    await fetch('http://localhost:5230/api/Task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: taskName,
            description: taskDescription,
            difficulty: parseInt(taskDifficulty),
            expirationDate: taskExpiration,
            category_Id: categoryId
        })
    });

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
}

async function findItems(userId, inventoryContainer) {
    const response = await fetch(`http://localhost:5230/api/UserItems/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch inventory");

    var Inventory = await response.json();
    inventoryContainer.innerHTML = '';

    Inventory.forEach(async function (Item) {
        await renderInventory(Item.item_Id, inventoryContainer);
    });

}

async function renderInventory(itemId, inventoryContainer) {
    try {
        const response = await fetch(`http://localhost:5230/api/Items/${itemId}`);
        if (!response.ok) throw new Error("Failed to fetch inventory");

        const Item = await response.json();

        const ItemElement = document.createElement('div');
        ItemElement.id = `item-${Item.id}`;
        ItemElement.classList.add('contenedor__inventario__recuadro');
        const recuadro__inv = document.createElement('div');
        recuadro__inv.classList.add('recuadro__inv');
        const itemImage = document.createElement('img');
        itemImage.src = 'source/images/armor.png';
        itemImage.classList.add('recuadro__inv__imagen');
        const imagen__textos = document.createElement('div');
        imagen__textos.classList.add('imagen__textos');
        const imagen__textos_left = document.createElement('h1');
        imagen__textos_left.classList.add('imagen__textos-left');
        imagen__textos_left.textContent = Item.typeObject;
        const imagen__textos_right = document.createElement('h1');
        imagen__textos_right.classList.add('imagen__textos-right');
        imagen__textos_right.textContent = `${Item.valueObject}€`;
        inventoryContainer.appendChild(ItemElement);
        ItemElement.appendChild(recuadro__inv);
        recuadro__inv.appendChild(itemImage);
        recuadro__inv.appendChild(imagen__textos);
        imagen__textos.appendChild(imagen__textos_left);
        imagen__textos.appendChild(imagen__textos_right);

    } catch (error) {
        console.error("Error fetching inventory:", error);
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

async function addTask(taskName, taskDescription, taskDifficulty, taskExpiration, categoryId) {
    //alert(taskName + taskDescription + taskDifficulty + taskExpiration + categoryId);
    await fetch('http://localhost:5230/api/Task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: taskName,
            description: taskDescription,
            difficulty: parseInt(taskDifficulty),
            expirationDate: taskExpiration,
            category_Id: categoryId
        })
    });
}

async function findItems(userId, inventoryContainer) {
    const response = await fetch(`http://localhost:5230/api/UserItems/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch inventory");

    var Inventory = await response.json();
    inventoryContainer.innerHTML = '';

    Inventory.forEach(async function (Item) {
        await renderInventory(Item.item_Id, inventoryContainer);
    });

}

async function renderInventory(itemId, inventoryContainer) {
    try {
        const response = await fetch(`http://localhost:5230/api/Items/${itemId}`);
        if (!response.ok) throw new Error("Failed to fetch inventory");

        const Item = await response.json();

        const ItemElement = document.createElement('div');
        ItemElement.id = `item-${Item.id}`;
        ItemElement.classList.add('contenedor__inventario__recuadro');
        const recuadro__inv = document.createElement('div');
        recuadro__inv.classList.add('recuadro__inv');
        const itemImage = document.createElement('img');
        itemImage.src = 'source/images/armor.png';
        itemImage.classList.add('recuadro__inv__imagen');
        const imagen__textos = document.createElement('div');
        imagen__textos.classList.add('imagen__textos');
        const imagen__textos_left = document.createElement('h1');
        imagen__textos_left.classList.add('imagen__textos-left');
        imagen__textos_left.textContent = Item.typeObject;
        const imagen__textos_right = document.createElement('h1');
        imagen__textos_right.classList.add('imagen__textos-right');
        imagen__textos_right.textContent = `${Item.valueObject}€`;
        inventoryContainer.appendChild(ItemElement);
        ItemElement.appendChild(recuadro__inv);
        recuadro__inv.appendChild(itemImage);
        recuadro__inv.appendChild(imagen__textos);
        imagen__textos.appendChild(imagen__textos_left);
        imagen__textos.appendChild(imagen__textos_right);

    } catch (error) {
        console.error("Error fetching inventory:", error);
    }
}