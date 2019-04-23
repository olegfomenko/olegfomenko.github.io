function todoFabric() {
			var todo = document.createElement("div");
			todo.className = "todo";

			//заголовок TODO листа
			var header = document.createElement("div");
			header.className = "header";
			todo.appendChild(header);

			//TODO заголовок
			var todoName = document.createElement("input");
			todoName.className = "name";
			todoName.value = "";
			todoName.style.width = "86%";
			todoName.style.color = "white";
			todoName.style.fontSize = "30px";
			todoName.style.height = "25px";
			header.appendChild(todoName);

			//меню создание нового задания
			var taskLine = document.createElement("div");
			taskLine.className = "taskLine";
			todo.appendChild(taskLine);

			//текст задания
			var taskText = document.createElement("input");
			taskText.type = "text";
			taskText.className = "field";
			taskText.style.width = "80%";
			taskLine.appendChild(taskText);

			//кнопка добавить задание
			var addTask = document.createElement("img");
			addTask.className = "add_button";
			addTask.src = "add_button.png";
			addTask.addEventListener("click", function() {
				if(taskText.value == "") {
					//taskText.style.borderWidth = "1px";
					taskText.style.boxShadow = "0 0 8px 0 red";
					taskText.focus();
				} else {
					//taskText.style.borderWidth = "0px";
					taskText.style.boxShadow = "0 0 0px 0 red";
					add_task(todo, taskText.value);
					taskText.value = "";
				}
			});
			taskLine.appendChild(addTask);

			//кнопка удалить TODO лист
			var del = document.createElement("img");
			del.className = "delete_button";
			del.src = "delete_button.png";
			del.addEventListener("click", function() {
				delete_node(todo);
			});
			header.appendChild(del);


			//кнопка изменить TODO лист
			var ed = document.createElement("img");
			ed.className = "edit_button";
			ed.src = "edit_button.png";
			ed.addEventListener("click", function() {
				todoName.focus();
			});
			header.appendChild(ed);


			//задаем текст кнопкам
			del.appendChild(document.createTextNode("Delete"));
			ed.appendChild(document.createTextNode("Edit"));
			addTask.appendChild(document.createTextNode("Add Task"));
			//todo.appendChild(document.createTextNode(++index));


			return todo;
		}

		function taskFabric(text) {
			var task = document.createElement("div");
			task.className = "task";

			//выполнено или нет
			var check = document.createElement("input");
			check.type = "checkbox";
			task.appendChild(check);

			//текст задания
			var name = document.createElement("input");
			name.className = "name";
			name.value = text;
			task.appendChild(name);

			//удаление задания
			var del = document.createElement("img");
			del.className = "delete_button";
			del.src = "delete_button.png";
			del.addEventListener("click", function() {
				delete_node(task);
			});
			task.appendChild(del);

			//редактирование задания
			var focus = document.createElement("img");
			focus.className = "edit_button";
			focus.src = "edit_button.png";
			focus.addEventListener("click", function() {
				name.focus();
			});
			task.appendChild(focus);

			//задаем текст кнопкам
			del.appendChild(document.createTextNode("Delete Task"));
			focus.appendChild(document.createTextNode("Edit Task"));

			return task;
		}


		function delete_node(node) {
			var parent = node.parentNode;
			parent.removeChild(node);
		}

		function add_todo(el) {
			var main = el.parentNode;
			main.insertBefore(todoFabric(), el);
		}

		function add_task(el, text) {
			el.appendChild(taskFabric(text));
		}