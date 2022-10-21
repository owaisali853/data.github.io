var std1 = {
    name: "owais",
    rollNo: 123,
    contact: 123456789,
    result: "A+"
};

var std2 = {
    name: "anas",
    rollNo: 456,
    contact: "123456789",
    result: "B"
};


var std3 = {
    name: "maaz",
    rollNo: 8910,
    contact: "123456789",
    result: "A"
};


var std4 = {
    name: "hunain",
    rollNo: 111213,
    contact: "123456789",
    result: "A+"
};


var std5 = {
    name: "saqib",
    rollNo: 141516,
    contact: "123456789",
    result: "c"
};


var std6 = {
    name: "ahsan",
    rollNo: 171819,
    contact: "123456789",
    result: "F"
};


var std7 = {
    name: "taha",
    rollNo: 202122,
    contact: "123456789",
    result: "B"
};


var std8 = {
    name: "faizan",
    rollNo: 232425,
    contact: "123456789",
    result: "A+"
};


var std9 = {
    name: "huzzaifa",
    rollNo: 262728,
    contact: "123456789",
    result: "D"
};



var std10 = {
    name: "aqib",
    rollNo: 293031,
    contact: "123456789",
    result: "A"
};


var arr = [std1 , std2 , std3 , std4 , std5 , std6 , std7 , std8 , std9 , std10]
for (i=0; i<arr.length;i++){
    var a = +prompt("enter your roll no")
    if(a == 123){
        alert("name : owais, rollNo: 123, contact: 123456789,result: A+")
        break
    }
}
var parent = document.getElementById("parent")
parent.innerHTML = `<h1>student 1</h1><table><tr><td>${arr[0].name}</td></tr> <tr><td>${arr[0].contact}</td></tr> <tr><td>${arr[0].rollNo}</td></tr>  <tr><td>${arr[0].result}</td></tr></table>`
div1.innerHTML = `<h1>student 2</h1><table><tr><td>${arr[1].name}</td></tr> <tr><td>${arr[1].contact}</td></tr> <tr><td>${arr[1].rollNo}</td></tr> <tr><td>${arr[1].result}</td></tr> </table>`
div2.innerHTML = `<h1>student 3</h1><table><tr><td>${arr[2].name}</td></tr> <tr><td>${arr[2].contact}</td></tr> <tr><td>${arr[2].rollNo}</td></tr> <tr><td>${arr[2].result}</td></tr> </table>`
div3.innerHTML = `<h1>student 4</h1><table><tr><td>${arr[3].name}</td></tr> <tr><td>${arr[3].contact}</td></tr> <tr><td>${arr[3].rollNo}</td></tr> <tr><td>${arr[3].result}</td></tr> </table>`
div4.innerHTML = `<h1>student 5</h1><table><tr><td>${arr[4].name}</td></tr> <tr><td>${arr[4].contact}</td></tr> <tr><td>${arr[4].rollNo}</td></tr> <tr><td>${arr[4].result}</td></tr> </table>`
div5.innerHTML = `<h1>student 6</h1><table><tr><td>${arr[5].name}</td></tr> <tr><td>${arr[5].contact}</td></tr> <tr><td>${arr[5].rollNo}</td></tr> <tr><td>${arr[5].result}</td></tr> </table>`
div6.innerHTML = `<h1>student 7</h1><table><tr><td>${arr[6].name}</td></tr> <tr><td>${arr[6].contact}</td></tr> <tr><td>${arr[6].rollNo}</td></tr> <tr><td>${arr[6].result}</td></tr> </table>`
div7.innerHTML = `<h1>student 8</h1><table><tr><td>${arr[7].name}</td></tr> <tr><td>${arr[7].contact}</td></tr> <tr><td>${arr[7].rollNo}</td></tr> <tr><td>${arr[7].result}</td></tr> </table>`
div8.innerHTML = `<h1>student 9</h1><table><tr><td>${arr[8].name}</td></tr> <tr><td>${arr[8].contact}</td></tr> <tr><td>${arr[8].rollNo}</td></tr> <tr><td>${arr[8].result}</td></tr> </table>`
div9.innerHTML = `<h1>student 10</h1><table><tr><td>${arr[9].name}</td></tr> <tr><td>${arr[9].contact}</td></tr> <tr><td>${arr[9].rollNo}</td></tr> <tr><td>${arr[9].result}</td></tr> </table>`





