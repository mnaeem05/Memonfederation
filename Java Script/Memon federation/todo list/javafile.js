function addAny () {
    var a = document.getElementById("box02").value;
    if(a.length >= 1){
    document.getElementById("box02").value = "";
    document.getElementById ("final").innerHTML += "<span> Data: "+a+" <br> <span>"
}
else if(a.length < 1){
    alert("Please write any thing")
}
   // var p = document.createElement("input");
    // p.setAttribute("type","button");
    // var t = document.createTextNode("This is new Text");        
    //     p.appendChild(t);
    //     a.appendChild(p);
    }