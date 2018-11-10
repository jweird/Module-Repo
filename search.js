controll = (function () {

    //var foundStudent = new Array();

    function search(clicked_id) {
        var ln = document.getElementById('ln_id').value;
        console.log(model);
        var list = model;

        console.log("clickedid", clicked_id);

        var foundStudent = new Array();
        var gradesList = new Array();
        var coursesFound = new Array();

        console.log(list);


        for (var i = 0; i < list.length; i++) {

            if (list[i].last_name == ln) {

                foundStudent.push(model[i]);


            }

        }


        //console.log(foundStudent);

        view(foundStudent);

        for (var i = 0; i < foundStudent.length; i++) {
            if (clicked_id == i) {
                for (var j = 0; j < foundStudent.length; j++) {

                    gradesList.push(foundStudent[i].grades[j]);
                    coursesFound.push(foundStudent[i].courses[j]);

                    console.log(gradesList);



                    document.getElementById("Grades").innerHTML = gradesList;
                    document.getElementById("Courses").innerHTML = coursesFound;


                }

            }

        }

        view(foundStudent);


    }


    return search;

})();


// var foundStudent = new Array();    
// //var search_elm = document.getElementById('search_person_id').value;

//         //search_elm.addEventListener('click', function(event){
//             //event.preventDefault();

// var ln = document.getElementById('ln_id').value;
// console.log(model);
// var list = model;

// console.log(list);


//         for (var i=0; i < list.length; i++) {




//             if (list[i].last_name == ln) {

//             foundStudent.push(model[i]);


//             }

//         }


//         console.log(foundStudent);

//return foundStudent;