student = [];
 function submit()
  { var name_1 = document.getElementById("name_of_the_student_1").value;
   var name_2 = document.getElementById("name_of_the_student_2").value;
    var name_3 = document.getElementById("name_of_the_student_3").value;
    var name_4 = document.getElementById("name_of_the_student_4").value;
    var name_5 = document.getElementById("name_of_the_student_5").value;
     student.push(name_1); student.push(name_2);
     student.push(name_3); student.push(name_4);
     student.push(name_5);
      console.log(student);
       document.getElementById("div").innerHTML = student;
      document.getElementById("submit").style.display = "none";
       document.getElementById("sort_button").style.display = "inline-block"; }
function sort(){
student.sort();
console.log(student);
document.getElementById("div").innerHTML = student;

}