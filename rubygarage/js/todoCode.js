function todoFabric() {
	var todo = create("div", "todo");

	//заголовок TODO листа
	var header = create("div", "header");
	todo.appendChild(header);

	//TODO заголовок
	var todoName = createName();
	header.appendChild(todoName);

	//меню создание нового задания
	var taskLine = create("div", "taskLine");
	todo.appendChild(taskLine);

	//текст задания
	var newTaskText = createNewTaskText();
	taskLine.appendChild(newTaskText);

	//кнопка добавить задание
	var addTask = createAddButton(todo, newTaskText);
	taskLine.appendChild(addTask);

	//кнопка удалить TODO лист
	var deleteTodo = createDeleteButton(todo);
	header.appendChild(deleteTodo);

	//кнопка изменить TODO лист
	var editTodo = createEditButton(todoName);
	header.appendChild(editTodo);

	return todo;
}

function createEditButton(editedText) {
	var button = create("img", "edit_button");
	
	button.src = "img/edit_button.png";
	button.appendChild(document.createTextNode("Edit"));
	button.addEventListener("click", function() {
		editedText.focus();
	});

	return button;
}

function createAddButton(parent, taskText) {
	var button = create("img", "add_button");

	button.src = "img/add_button.png";
	button.appendChild(document.createTextNode("Add Task"));
	button.addEventListener("click", function() {
		if(taskText.value == "") {
			thereIsNoTextWarning();
		} else {
			compileTask(parent, taskText);
		}
	});

	return button;
}


function thereIsNoTextWarning(text) {
	text.style.boxShadow = "0 0 8px 0 red";
	text.focus();
}

function compileTask(parent, text) {
	text.style.boxShadow = "0 0 0px 0 red";
	add_task(parent, text.value);
	text.value = "";
}

function createDeleteButton(node) {
	var button = create("img", "delete_button");
	
	button.src = "img/delete_button.png";
	button.appendChild(document.createTextNode("Delete"));
	button.addEventListener("click", function() {
		delete_node(node);
	});

	return button;
}

function createNewTaskText() {
	var taskText = create("input", "field");

	taskText.type = "text";
	taskText.style.width = "80%";
	taskText.value = "";

	return taskText;
}

function createName() {
	var name = create("input", "name");

	name.value = "";
	name.style.width = "86%";
	name.style.color = "white";
	name.style.fontSize = "25px";
	name.style.height = "25px";

	return name;
}