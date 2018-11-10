model = (function(){

    var student_set = new Array();


    function Student(fn, ln, course, grade)
    {
        this.first_name = fn;
        this.last_name = ln;
        this.courses = course;
        this.grades = grade;

    }

    var student_1 = new Student("Juan", "Carrera", ["CPSC 440", "CPSC 345", "CPSC 471"], ["A", "A", "C"] );
    student_set.push(student_1);
    var student_2 = new Student("Bob", "Vance", ["CPSC 440", "CPSC 345", "CPSC 471"], ["A", "B", "C"] );
    student_set.push(student_2);
    var student_3 = new Student("Micheal", "Scott", ["CPSC 440", "CPSC 345", "CPSC 471"], ["A", "B", "C"] );
    student_set.push(student_3);
    var student_4 = new Student("Jim", "Tuna", ["CPSC 440", "CPSC 345", "CPSC 471"], ["A", "B", "C"] );
    student_set.push(student_4);
    var student_5 = new Student("Pam", "Beesley", ["CPSC 440", "CPSC 345", "CPSC 471"], ["A", "B", "C"] );
    student_set.push(student_5);
    var student_6 = new Student("Andrew", "Bernard", ["CPSC 440", "CPSC 345", "CPSC 471"], ["A", "B", "C"] );
    student_set.push(student_6);
    var student_7 = new Student("Bob", "Carrera", ["CPSC 440", "CPSC 345", "CPSC 471"], ["B", "B", "C"] );
    student_set.push(student_7);
    var student_8 = new Student("Tim", "Carrera", ["CPSC 440", "CPSC 345", "CPSC 471"], ["A", "D", "C"] );
    student_set.push(student_8);
    


    return student_set;

})();