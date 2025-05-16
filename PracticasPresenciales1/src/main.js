var tasksContainer = document.querySelector('.tasks__container');
var CategoryContainer = document.querySelector('.categories__container');
var taskForm = document.querySelector('.task__form');
var categoryForm = document.querySelector('.category__form');
var taskInput = document.getElementById('taskAdd');
var categoryInput = document.getElementById('categoryAdd');
var taskDeleteButtons = document.querySelectorAll('[id^="taskDelete-"]');
var categoryDeleteButtons = document.querySelector('[id^="categoryDelete"]');

document.addEventListener('DOMContentLoaded', function () {
    renderCategories(CategoryContainer, tasksContainer);

    document.getElementById("taskForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        let taskName = document.getElementById("taskName").value;
        let taskDescription = document.getElementById("taskDescription").value;
        let taskExpiration = document.getElementById("taskExpiration").value;
        let taskDifficulty = document.getElementById("taskDifficulty").value;
        let currentCategoryId = localStorage.getItem('currentCategoryId');

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
    
    categoryDeleteButtons.addEventListener('click', async function (event) {
        try {
            const success = await deleteCategory();
            if (success) {
               await renderCategories(CategoryContainer, tasksContainer);
            }
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    });
    //taskInput.addEventListener('click', async function (event) {
    //        await addTask(taskInput.value);
    //});
});