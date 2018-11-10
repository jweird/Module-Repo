viewGrades = (function(){

    var gradeArr = new Array();

    function display(content){
        var ul_node = document.getElementById('Grades');
        this.root = ul_node;
        console.log(content);
        console.log(gradeArr);
        for (i=0; i< 3; i++) {
            gradeArr = content[i].grades[i]
        }


        // while (this.root.firstChild) {
		// 	this.root.removeChild(this.root.firstChild); 
		// }
		// //
		// for (i=0; i< content2.length; i++) {
		// 	var li_node = document.createElement('li');
		// 	var li_content = document.createTextNode(content2[i].grades[i]);
		// 	li_node.appendChild(li_content);
		// 	this.root.appendChild(li_node);  
		// }	

        // this.createChildNode();
        
console.log(gradeArr);

    }


    return display;
})();