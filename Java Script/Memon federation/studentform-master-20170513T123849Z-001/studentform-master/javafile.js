var nameArray = [];
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
    var select = document.getElementById("select2").value;
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
   document.getElementById("select2").value = "";
   nameArray.push(userName);
   localStorage.setItem("names", nameArray);

                var abc =  localStorage.getItem("names");
                abc = abc.split(",");
        for (var i = 0; i < abc.length; i++) {
   document.getElementById("final").innerHTML += "<h4> "+i+" -  Name: "+abc+" </h4>"
        }

            // loop in array to show all names

           }
           var abc =  localStorage.getItem("names");
             abc?  abc =  abc.split(","): [];
        for (var i = 0; i < abc.length; i++) {
   document.getElementById("final").innerHTML += "<h4> "+i+" -  Name: "+abc[i]+" </h4>"
        }


//    console.log(submit)
//    document.write("<h4> Name "+submit+" </h4>")
        // document.body.innerHTML = "<h4> Name "+userName+" <br> Roll Number "+userRollnum+" </h4>";
        // document.getElementById ("final").innerHTML = "<h4> Name: "+userName+" <br> Roll Number: "+userRollnum+" <br> Gender: "+male+"  <br> Email: "+email+" <br> Course: "+select+" </h4>"}


        