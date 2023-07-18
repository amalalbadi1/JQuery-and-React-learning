
// let password =document.getElementById("password")


// document.getElementById("show").onclick=function() {
    
// if(password.type==="password"){

//     document.getElementById("show").innerText ="hide"
//     password.type ="text"
// }
// else{

//     document.getElementById("show").innerText ="show"
//     password.type ="password"

// }
  
// }


$('#show').click(function(){
    if($("#password").attr("type") === "password"){

        $('#show').text("hide")
        $("#password").attr("type","text")

    }else{
        $('#show').text("show")
        $("#password").attr("type","password")
    }
})




// let mytextarea =document.getElementById("mytextarea")
// let ret =document.getElementById("ret")

// mytextarea.onkeyup=function(){

//     let count= mytextarea.value.length
//     console.log(count)
//     if(count>= 20){

//         mytextarea.style.cssText="border:1px solid red; outline:1px solid red "
//     }else{
//         mytextarea.style.cssText="border:1px solid black;outline:1px solid black  "
//     }

// ret.innerText=count
// }

// $('#mytextarea').keyup(function(){

//    let con= $("#mytextarea").val().length
//    $("#ret").text(con)
//     if($(con>=20)){
//         $('#mytextarea').css({"border":"1px solid red", "outline":"1px solid red"})
//     }else{
//         $('#mytextarea').attr("border:1px solid black; outline:1px solid black ")

//     }
   
// })
$("button").click(function(){
    $("#div1").load("indx.html", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });