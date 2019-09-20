function taskFabric(text) {
	var task = create("div", "task");

	//выполнено или нет
	var check = createChechBox();
	task.appendChild(check);

	//текст задания
	var taskText = createTaskText(text);
	task.appendChild(taskText);

	//удаление задания
	var deleteTask = createDeleteButton(task);
	task.appendChild(deleteTask);

	//редактирование задания
	var editTask = createEditButton(taskText);
	task.appendChild(editTask);

	return task;
}

function createChechBox() {
	var check = document.createElement("input");
	check.type = "checkbox";

	return check;
}

function createTaskText(text) {
	var taskText = create("input", "name");
	taskText.value = text;
	return taskText;
}