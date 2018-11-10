view = (function () {

	function display(foundStudent) {
		var ul_node = document.getElementById('Student_List');
		this.root = ul_node;
		this.content = foundStudent;

		// this.createChildNode();

		while (this.root.firstChild) {
			this.root.removeChild(this.root.firstChild);
		}
		//
		for (i = 0; i < this.content.length; i++) {
			var li_node = document.createElement('button');
			li_node.setAttribute("id", i);
			li_node.setAttribute("onClick", "controll(this.id)")
			var li_content = document.createTextNode(this.content[i].first_name);
			li_node.appendChild(li_content);
			this.root.appendChild(li_node);

			var list = document.getElementById("li");
			var example = document.getElementById("Grades");

		}
		console.log(content);

		//viewGrades(content);

	}


	return display;
})();