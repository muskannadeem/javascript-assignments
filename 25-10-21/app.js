var firstname=prompt("enter yourfirstname")
document.write(firstname)
document.write("<br/>")
var lastname=prompt("enter your lastname")
document.write(lastname)
document.write("<br/>")
var rollnumber=prompt("enter your rollnumber")
document.write(rollnumber)
document.write("<br/>")
var schoolname=prompt("enter your schoolname")
document.write(schoolname)
document.write("<br/>")
var subject1=prompt("subject")
document.write(subject1)
document.write("<br/>")
var islamiatNumber = +prompt("islamiat num")
document.write(islamiatNumber)
document.write("<br/>")
var subject2=prompt("subject")
document.write(subject2)
document.write("<br/>")
var englishNumber = +prompt("english num")
document.write(englishNumber)
document.write("<br/>")
var subject3=prompt("subject")
document.write(subject3)
document.write("<br/>")
var urduNumber = +prompt("urdu num")
document.write(urduNumber)
document.write("<br/>")
var subject4=prompt("subject")
document.write(subject4)
document.write("<br/>")
var javascriptNumber = +prompt("javascript num")
document.write(javascriptNumber)
document.write("<br/>")
var subject5=prompt("subject")
document.write(subject5)
document.write("<br/>")
var htmlNumber = +prompt("html num")
document.write(htmlNumber)
document.write("<br/>")

var total = 500;
var obtainNum =  islamiatNumber + englishNumber + urduNumber + javascriptNumber + htmlNumber;
var percentage = obtainNum / total * 100;

document.write("Percentage" + percentage)



