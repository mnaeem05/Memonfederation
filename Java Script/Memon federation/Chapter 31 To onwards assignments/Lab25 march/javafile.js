function Data() {
    var userName = document.getElementById("box02").value;
    var userRollnum = document.getElementById("box03").value;
    var male = document.getElementById("box04").value;
    var female = document.getElementById("box05").value;
    var email = document.getElementById("box06").value;
    var select = document.getElementById("box07").value;
    var html = document.getElementById("box08").value;
    var css = document.getElementById("box09").value;
    var java = document.getElementById("box10").value;
    // var submit = document.write("<h4> Name "+box02+" </h4>")
   document.getElementById("box02").value = "";
   document.getElementById("box03").value = "";
   document.getElementById("box04").value = "";
   document.getElementById("box05").value = "";
   document.getElementById("box06").value = "";
   document.getElementById("box07").value = "";
   document.getElementById("box08").value = "";
   document.getElementById("box09").value = "";
   document.getElementById("box10").value = "";

//    console.log(submit)
//    document.write("<h4> Name "+submit+" </h4>")
        // document.body.innerHTML = "<h4> Name "+userName+" <br> Roll Number "+userRollnum+" </h4>";
        document.getElementById ("final").innerHTML = "<h4> Name: "+userName+" <br> Roll Number: "+userRollnum+" <br> Genre: "+male+" <br> Email: "+email+" </h4>"}