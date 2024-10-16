document.getElementById('add-btn').addEventListener('click', function() {
	let taskInput = document.getElementById('task-input');
	let taskText = taskInput.value.trim();

	if (taskText !== '') {
		addTask(taskText);
		taskInput.value = ''; // Clear the input field after adding the task
	}
});

function addTask(taskText) {
	let taskList = document.getElementById('task-list');
	let li = document.createElement('li');

	let taskName = document.createElement('span');
	taskName.className = 'task-name';
	taskName.textContent = taskText;

	let editButton = document.createElement('button');
	editButton.textContent = 'Edit';
	editButton.addEventListener('click', function() {
		editTask(li, taskName);
	});

	let deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete';
	deleteButton.addEventListener('click', function() {
		taskList.removeChild(li);
	});

	li.appendChild(taskName);
	li.appendChild(editButton);
	li.appendChild(deleteButton);

	taskList.appendChild(li);
}

function editTask(taskItem, taskName) {
	let newTaskText = prompt('Edit your task:', taskName.textContent);

	if (newTaskText !== null && newTaskText.trim() !== '') {
		taskName.textContent = newTaskText;
	}
}