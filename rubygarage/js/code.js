function add_task(el, text) {
	el.appendChild(taskFabric(text));
}

function add_todo(el) {
	var main = el.parentNode;
	main.insertBefore(todoFabric(), el);
}

function delete_node(node) {
	var parent = node.parentNode;
	parent.removeChild(node);
}

function create(type, className) {
	var element = document.createElement(type);
	element.className = className;
	return element;
}

