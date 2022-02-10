function validate(){


    if (document.getElementById("InputEmail").value == ""){
       alert("please fill in your email so we could contact you back");
    }
    else if (document.getElementById("problemDetails").value == "") {
       alert("could you tell us what you want so we could help you ?");
    }
    
}

document.getElementById("sendForm").addEventListener("click", function() {
  validate();
  });