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
    
    taskInput.addEventListener('click', async function (event) {
            await addTask(taskInput.value);
    });
});