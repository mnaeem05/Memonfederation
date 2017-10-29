function check(){
        var userInput1 = document.getElementById("box02").value;
        var convert1 = userInput1.toLowerCase()
        if (convert1 === "saturday"){   
        document.getElementById("box02").value = "";
        document.getElementById ("final").innerHTML = "<h4> In the month of MAY Saturdays will be <br>  06 - "+convert1+" -2017 <br> 13 - "+convert1+" -2017 <br> 20 - "+convert1+" -2017 <br> 27 - "+convert1+" -2017 </h4>"
    }
    else if (convert1 === "sunday"){   
        document.getElementById("box02").value = "";
        document.getElementById ("final").innerHTML = "<h4> In the month of MAY Sunday will be <br>  07 - "+convert1+" -2017 <br> 14 - "+convert1+" -2017 <br> 21 - "+convert1+" -2017 <br> 28 - "+convert1+" -2017 </h4>"
    }
        else if (convert1 === "monday"){   
        document.getElementById("box02").value = "";
        document.getElementById ("final").innerHTML = "<h4> In the month of MAY Monday will be <br>  01 - "+convert1+" -2017 <br>  08 - "+convert1+" -2017 <br> 15 - "+convert1+" -2017 <br> 22 - "+convert1+" -2017 <br> 29 - "+convert1+" -2017 </h4>"
    }
        else if (convert1 === "tuesday"){   
        document.getElementById("box02").value = "";
        document.getElementById ("final").innerHTML = "<h4> In the month of MAY Tuesday will be <br>  02 - "+convert1+" -2017 <br>  09 - "+convert1+" -2017 <br> 16 - "+convert1+" -2017 <br> 23 - "+convert1+" -2017 <br> 30 - "+convert1+" -2017 </h4>"
    }
        else if (convert1 === "wednesday"){   
        document.getElementById("box02").value = "";
        document.getElementById ("final").innerHTML = "<h4> In the month of MAY Wednesday will be <br>  03 - "+convert1+" -2017 <br>  10 - "+convert1+" -2017 <br> 17 - "+convert1+" -2017 <br> 24 - "+convert1+" -2017 <br> 31 - "+convert1+" -2017 </h4>"
    }
    else if (convert1 === "thursday"){   
        document.getElementById("box02").value = "";
        document.getElementById ("final").innerHTML = "<h4> In the month of MAY Thursday will be <br>  04 - "+convert1+" -2017 <br>  11 - "+convert1+" -2017 <br> 18 - "+convert1+" -2017 <br> 25 - "+convert1+" -2017 </h4>"
    }
    else if (convert1 === "friday"){   
        document.getElementById("box02").value = "";
        document.getElementById ("final").innerHTML = "<h4> In the month of MAY Friday will be <br>  05 - "+convert1+" -2017 <br>  12 - "+convert1+" -2017 <br> 19 - "+convert1+" -2017 <br> 26 - "+convert1+" -2017 </h4>"
    }
    else{
        document.getElementById("box02").value = "";
        document.getElementById ("final").innerHTML = "<h4 id='box05'> Please write correct day. </h4>"
    }
}
