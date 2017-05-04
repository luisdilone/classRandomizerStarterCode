$(document).ready(function(){
    
var students= ["Luis", "Jessie", "Christian", "Kiara", "Sammy",];
$("#sAddButton").click(function(){
var addStudent = $("#studentName").val();
students.push(addStudent);
});

var teachers= ["Zack", "Aaron", "Alyxe", "Justin", "Julia"];
$("#tAddButton").click(function(){
var addTeacher = $("#teacherName").val();
teachers.push(addTeacher);
});

$("#studentButton").click(function(){
var random_s=Math.floor(Math.random()*students.length);
$("#studentDisplay").html(students[random_s]);
});

$("#teacherButton").click(function(){
var random_t=Math.floor(Math.random()*teachers.length);
$("#teacherDisplay").html(teachers[random_t]);
});
});
