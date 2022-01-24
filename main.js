var students = [];
function submit()
{
    var display = [];
    for(var i=1;i<=4;i++)
    {
        var names=document.getElementById("name_of_the_student_"+i).value;
        console.log(names);
        students.push(names);
    }
    console.log(names);
    var length = students.length;
    console.log(length);
    for(var j=0;j<length;j++)
    {
        display.push("<h4>Names - "+students[j]+"</h4>");
    }
    console.log(display);
    document.getElementById("display_names_with_commas").innerHTML = display;
    var remove_commas=display.join(" ");
    console.log(remove_commas);
    document.getElementById("display_names_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting()
{
    students.sort();
    console.log(students);
    var display_students = [];
    var length_display = students.length;
    console.log(length_display);
    for(var k=0;k<length_display;k++)
    {
        display_students.push("<h4>Names - "+students[k]+"</h4>");
    }
    console.log(display_students);
    var remove_commas=display_students.join(" ");
    console.log(remove_commas);
    document.getElementById("display_names_without_commas").innerHTML = remove_commas;
}