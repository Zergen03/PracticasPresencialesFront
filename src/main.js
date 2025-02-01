var tasksContainer = document.querySelector('.tasks__container');
var CategoryContainer = document.querySelector('.categories__container');
var taskForm = document.querySelector('.task__form');
var categoryForm = document.querySelector('.category__form');
var taskInput = document.getElementById('taskAdd');
var categoryInput = document.getElementById('categoryAdd');
var taskDeleteButtons = document.querySelectorAll('[id^="taskDelete-"]');
var categoryDeleteButtons = document.querySelectorAll('[id^="categoryDelete-"]');

document.addEventListener('DOMContentLoaded', function () {
    renderCategories(CategoryContainer, tasksContainer);

    document.getElementById("taskForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        let taskName = document.getElementById("taskName").value;
        let taskDescription = document.getElementById("taskDescription").value;
        let taskExpiration = document.getElementById("taskExpiration").value;
        let taskDifficulty = document.getElementById("taskDifficulty").value;
        let currentCategoryId = 0; //cambiar

        await addTask(taskName, taskDescription, taskDifficulty, taskExpiration, currentCategoryId);
        togglePopupTask();
        renderTasks(currentCategoryId, tasksContainer);
    });

    document.getElementById("itemForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        let categoryName = document.getElementById("itemName").value;

        await addCategory(categoryName);
        togglePopup();
        renderCategories(CategoryContainer, tasksContainer);
    });
    
    //taskInput.addEventListener('click', async function (event) {
    //        await addTask(taskInput.value);
    //});
});