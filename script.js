// alert("you are on portfolio of Manshi shukla")
function fun() {
    document.getElementById("get").style.display = "block";
  }
function fun1() {
    document.getElementById("get").style.display = "none";
  }

  //  Download CV 

  function downloadCV() {
    // Replace 'cv.pdf' with the path to your CV file
    var cvUrl = 'static/manshiShuklaCv.pdf';
    
    // Create a temporary anchor element
    var link = document.createElement('a');
    link.href = cvUrl;
    
    // Set the download attribute with the desired file name
    link.download = 'manshiShuklaCv.pdf';
    
    // Programmatically trigger a click event to start the download
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
}



function changeWordAutomatically() {
  var words = ["Developer", "Designer", "Freelancer", "Student of BCA"]; // Add your list of words here
  var index = 0;
  var interval = setInterval(function() {
    document.getElementById("changeableWord").textContent = words[index];
    index = (index + 1) % words.length;
  }, 2000); // Change every 2 seconds (2000 milliseconds)
}
changeWordAutomatically(); 

function project(){
 var a= document.getElementById("box-1").style.display="block";
 var a= document.getElementById("box-2").style.display="block";
 var a= document.getElementById("box-3").style.display="block";
 var b= document.getElementById("box1").style.display="none";
 var b= document.getElementById("box2").style.display="none";
 var b= document.getElementById("box3").style.display="none";
}

function project1(){
 var a= document.getElementById("box-1").style.display="none";
 var a= document.getElementById("box-2").style.display="none";
 var a= document.getElementById("box-3").style.display="none";
 var b= document.getElementById("box1").style.display="block";
 var b= document.getElementById("box2").style.display="block";
 var b= document.getElementById("box3").style.display="block";
}




// form vailidation.
function validateForm() {
  // name validation
  var nameInput = document.getElementById("Name");
  var nameError = document.getElementById("nameLabel");
  var nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(nameInput.value)) {
      nameError.textContent = "Name must contain only letters";
      return false;
  }

    // phone validation
    var phoneInput = document.getElementById("phone");
    var phoneError = document.getElementById("phoneErr");
    var phoneRegex = /^\d{10}$/;
    // var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.textContent = "Please enter a valid phone number (xxx-xxx-xxxx)";
        return false;
    }
}