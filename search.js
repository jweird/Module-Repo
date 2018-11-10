controll = (function(){

    //var foundStudent = new Array();

    function search(){
        var ln = document.getElementById('ln_id').value;
        console.log(model);
        var list = model;
       
        var foundStudent = new Array();
        console.log(list);
        
        
                for (var i=0; i < list.length; i++) {
        
                   
        
        
                    if (list[i].last_name == ln) {
        
                    foundStudent.push(model[i]);
        
                        
                    }
               
                }
        
                
                console.log(foundStudent);

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